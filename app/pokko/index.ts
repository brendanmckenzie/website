import {
  ApolloClient,
  ApolloClientOptions,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import intro from "../pokko/queries";

// For Cloudflare Workers compatibility, we'll use environment variables
// from the context passed to loaders, not process.env
const getConfig = () => {
  // Fallback to process.env for development with wrangler
  // In production, these should come from the Cloudflare environment
  if (typeof process !== 'undefined' && process.env) {
    return {
      environment: process.env.POK_ENVIRONMENT!,
      project: process.env.POK_PROJECT!,
      token: process.env.POK_TOKEN!,
      tokenPreview: process.env.POK_TOKEN_PREVIEW!,
    };
  }

  // This will be overridden by createClient function
  return {
    environment: '',
    project: '',
    token: '',
    tokenPreview: '',
  };
};

export const createClient = (env?: any) => {
  const config = env || getConfig();

  const optionsBase: ApolloClientOptions<NormalizedCacheObject> = {
    cache: new InMemoryCache({
      possibleTypes: intro.possibleTypes,
    }),
    uri: `https://au-syd1.pokko.io/${config.project || config.POK_PROJECT}/${config.environment || config.POK_ENVIRONMENT}/graphql`,
  };

  const options = {
    ...optionsBase,
    headers: {
      "X-Token": config.token || config.POK_TOKEN,
    },
  };

  const optionsPreview = {
    ...optionsBase,
    headers: {
      "X-Token": config.tokenPreview || config.POK_TOKEN_PREVIEW,
    },
  };

  return {
    client: new ApolloClient(options),
    clientPreview: new ApolloClient(optionsPreview),
  };
};

// Export default clients for backward compatibility during development
const defaultClients = createClient();
export const client = defaultClients.client;
export const clientPreview = defaultClients.clientPreview;
