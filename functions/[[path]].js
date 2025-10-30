import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "../public/server/index.js";

export const onRequest = createPagesFunctionHandler({
  build,
  getLoadContext: (context) => context.env,
});
