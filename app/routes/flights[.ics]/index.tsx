import type { HeadersFunction, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const fetchRes = await fetch(
    `https://ltf.flightlogger.net/calendar_feed.ics?id=ByttccRMUGQSzjXTkDQhArFs`
  );

  const ics = await fetchRes.text();
  const re = /SUMMARY:.*mckenzie.*/gim;
  const updated = ics.replace(re, "SUMMARY:Flying");

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
