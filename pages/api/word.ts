import { NextApiHandler } from "next";
import http from "https";

const request = (url: string): Promise<any> =>
  new Promise((resolve, reject) => {
    const buffer = [];
    http
      .get(url, (res) => {
        res.on("data", (d) => buffer.push(d));
        res.on("end", () => resolve(JSON.parse(buffer.join(""))));
      })
      .on("error", (e) => {
        reject(e);
      });
  });

const handler: NextApiHandler = async (req, res) => {
  const { query } = req.query;

  const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${query}?key=${process.env.DICT_KEY}`;

  const data = await request(url);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=31536000, stale-while-revalidate=59"
  );

  res.json(
    data.map((ent: any) => {
      if (typeof ent === "string") {
        return { suggestion: true, word: ent };
      }

      return {
        id: ent.meta.id,
        fl: ent.fl,
        shortdef: ent.shortdef,
        stems: ent.meta.stems,
      };
    })
  );

  return res.status(200).end();
};

export default handler;
