import { ApolloClient } from "@apollo/client-integration-nextjs";
import { cache, httpLink } from "./apollo-share";

export const makeClient = () => {
  return new ApolloClient({
    cache,
    link: httpLink,
  });
};
