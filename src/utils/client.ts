import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// export const graphqlEndpoint = process.env.REACT_APP_GQL_TOKEN
//   ? new URL("graphql", process.env.REACT_APP_GQL_TOKEN).href
//   : "http://localhost:3000/graphql";

const getLink = () => {
  const link = createHttpLink({
    uri: "http://localhost:3001/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token");

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  return authLink.concat(link);
};

export function buildClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: getLink(),
  });
}

const client = buildClient();

export default client;
