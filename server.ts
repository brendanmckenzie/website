import { createRequestHandler, logDevReady } from "@remix-run/cloudflare";
import * as build from "@remix-run/dev/server-build";

if (process.env.NODE_ENV === "development") {
  logDevReady(build);
}

const handleRequest = createRequestHandler(build);

export default {
  async fetch(request: Request, env: any, ctx: any) {
    try {
      // Try to serve static assets first using the ASSETS binding
      if (env.ASSETS) {
        const response = await env.ASSETS.fetch(request);
        if (response.status !== 404) {
          return response;
        }
      }

      // Pass to Remix handler
      return await handleRequest(request, { env, ctx });
    } catch (e: any) {
      console.error(e);
      return new Response("Internal Error", { status: 500 });
    }
  },
};
