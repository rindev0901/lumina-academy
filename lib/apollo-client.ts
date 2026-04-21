import {
  ApolloClient,
  InMemoryCache,
  defaultDataIdFromObject,
  HttpLink,
} from "@apollo/client";
import { SetContextLink } from "@apollo/client/link/context";

import { relayStylePagination } from "@apollo/client/utilities";
import { createClient } from "./supabase/server";

const cache = new InMemoryCache({
  dataIdFromObject(responseObject) {
    if ("nodeId" in responseObject) {
      return `${responseObject.nodeId}`;
    }

    return defaultDataIdFromObject(responseObject);
  },
  possibleTypes: { Node: ["Todos"] }, // optional, but useful to specify supertype-subtype relationships
  typePolicies: {
    Query: {
      fields: {
        todosCollection: relayStylePagination(), // example of paginating a collection
        node: {
          read(_, { args, toReference }) {
            const ref = toReference({
              nodeId: args?.nodeId,
            });

            return ref;
          },
        },
      },
    },
  },
});

const httpLink = new HttpLink({
  uri: "https://ntvruksvzexsboutkjoa.supabase.co/graphql/v1",
});

const authLink = new SetContextLink(async (prevContext, operation) => {
  const supabase = await createClient();

  const token = (await supabase.auth.getSession()).data.session?.access_token;
  return {
    headers: {
      ...prevContext.headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default apolloClient;
