import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import { from } from "@apollo/client/link/core";
import { setContext } from "@apollo/client/link/context";
import { useMemo } from "react";
import { onError } from "@apollo/client/link/error";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors)
    graphQLErrors.forEach((errors) => {
      const { message, locations, path } = errors;

      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
});

/**
 * 통신할 endpoint를 uri에 넣어준다.
 */
const httpLink = new HttpLink({
  uri: "http://localhost",
  credentials: "same-origin",
});

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: "all",
        fetchPolicy: "network-only",
      },
      query: {
        fetchPolicy: "network-only",
      },
    },
  });
};

type Apollo = ReturnType<typeof createApolloClient>;

let apolloClient: Apollo;

export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const useApollo = (initialState = null): Apollo => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
