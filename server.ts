import { createRequestHandler, logDevReady } from "@remix-run/cloudflare";
import * as build from "@remix-run/dev/server-build";

if (process.env.NODE_ENV === "development") {
  logDevReady(build);
}

const handleRequest = createRequestHandler(build);

export default {
  async fetch(request: Request, env: any, ctx: any) {
    try {
      return await handleRequest(request, { env, ctx });
    } catch (e: any) {
      return new Response("Internal Error", { status: 500 });
    }
  },
};
