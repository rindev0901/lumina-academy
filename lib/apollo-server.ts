import {
  registerApolloClient,
  ApolloClient,
} from "@apollo/client-integration-nextjs";
import { cache, httpLink } from "./apollo-share";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache,
    link: httpLink,
  });
});
