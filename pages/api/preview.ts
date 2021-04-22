import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  if (req.preview) {
    res.clearPreviewData();

    res.send("preview mode no more");
  } else {
    res.setPreviewData({});

    res.send("preview mode started");
  }

  return res.status(200).end();
};

export default handler;
