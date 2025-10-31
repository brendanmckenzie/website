import {
  ApolloClient,
  ApolloClientOptions,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from "@apollo/client";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import intro from "./queries";

type PokkoConfig = {
  environment?: string;
  project?: string;
  token?: string;
  tokenPreview?: string;
  POK_ENVIRONMENT?: string;
  POK_PROJECT?: string;
  POK_TOKEN?: string;
  POK_TOKEN_PREVIEW?: string;
};

// Get configuration from Cloudflare environment or process.env
const getConfig = () => {
  try {
    // Try to get Cloudflare context in production
    const { env } = getCloudflareContext();
    if (env && env.POK_ENVIRONMENT) {
      return {
        environment: env.POK_ENVIRONMENT,
        project: env.POK_PROJECT,
        token: env.POK_TOKEN,
        tokenPreview: env.POK_TOKEN_PREVIEW,
      };
    }
  } catch {
    // Not in Cloudflare context, fall through to process.env
  }

  // Fallback to process.env for development
  if (typeof process !== 'undefined' && process.env) {
    return {
      environment: process.env.POK_ENVIRONMENT || '',
      project: process.env.POK_PROJECT || '',
      token: process.env.POK_TOKEN || '',
      tokenPreview: process.env.POK_TOKEN_PREVIEW || '',
    };
  }

  return {
    environment: '',
    project: '',
    token: '',
    tokenPreview: '',
  };
};

export const createClient = (env?: PokkoConfig) => {
  const config = env || getConfig();

  const optionsBase: ApolloClientOptions<NormalizedCacheObject> = {
    cache: new InMemoryCache({
      possibleTypes: intro.possibleTypes,
    }),
    link: new HttpLink({
      uri: `https://au-syd1.pokko.io/${config.project || config.POK_PROJECT}/${config.environment || config.POK_ENVIRONMENT}/graphql`,
      headers: {
        "X-Token": config.token || config.POK_TOKEN,
      },
    }),
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
      },
    },
  };

  return new ApolloClient(optionsBase);
};

// Export a function to get the client
export const getClient = () => createClient();

// Export default client for backward compatibility
export const client = createClient();
