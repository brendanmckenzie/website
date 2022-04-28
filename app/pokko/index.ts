import {
  ApolloClient,
  ApolloClientOptions,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import intro from "../pokko/queries";

const config = {
  environment: process.env.POK_ENVIRONMENT!,
  project: process.env.POK_PROJECT!,
  token: process.env.POK_TOKEN!,
  tokenPreview: process.env.POK_TOKEN_PREVIEW!,
};

const optionsBase: ApolloClientOptions<NormalizedCacheObject> = {
  cache: new InMemoryCache({
    possibleTypes: intro.possibleTypes,
  }),

  uri: `https://au-syd1.pokko.io/72074862-21c3-43ee-a1bb-3742c6fa857c/e1d5cdf5-70d2-4f53-8374-8e1a40a6170a/graphql`,
};

const options = {
  ...optionsBase,

  headers: {
    "X-Token": config.token,
  },
};

const optionsPreview = {
  ...optionsBase,

  headers: {
    "X-Token": config.tokenPreview,
  },
};

export const client = new ApolloClient(options);
export const clientPreview = new ApolloClient(optionsPreview);
