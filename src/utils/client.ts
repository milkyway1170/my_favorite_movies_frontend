import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const getLink = () => {
  const link = createHttpLink({
    uri: "https://movies-bublik-api.kodep.team/graphql",
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
