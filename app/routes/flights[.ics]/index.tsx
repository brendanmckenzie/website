import type { HeadersFunction, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const fetchRes = await fetch(
    `https://ltf.flightlogger.net/calendar_feed.ics?id=ByttccRMUGQSzjXTkDQhArFs`
  );

  const ics = await fetchRes.text();

  const re = /BEGIN:VEVENT(.*?)END:VEVENT/gs;
  const updated = ics.replace(re, (match) => {
    const values = Object.fromEntries(
      match
        .split("\r\n")
        .map((ln) => ln.split(":"))
        .map(([key, ...rest]) => [key, rest.join(":")])
        .filter(([key]) => key.startsWith("DT") || key === key.toUpperCase())
    );

    const {
      SUMMARY: summary,
      LOCATION: location,
      DESCRIPTION: description,
    } = values;

    delete values["BEGIN"];
    delete values["END"];
    values["DESCRIPTION"] = [location, summary, description]
      .filter(Boolean)
      .join("\\n\\n");
    values["SUMMARY"] = "Flying";
    values["LOCATION"] =
      "22-24 Northern Avenue, Moorabbin Airport, VIC 3194, Australia";

    return (
      "BEGIN:VEVENT\n" +
      Object.entries(values)
        .map(([key, value]) => `${key}:${value}`)
        .join("\n") +
      "\nEND:VEVENT"
    );
  });

  return new Response(updated, {
    headers: {
      "Content-type": "text/calendar",
    },
  });
};

export const headers: HeadersFunction = () => {
  return {
    // "Cache-Control": "s-maxage=3600, stale-while-revalidate=60",
  };
};
