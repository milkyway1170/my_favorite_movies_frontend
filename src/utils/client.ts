import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { isEqual } from "lodash";
import { read_cookie } from "sfcookies";

const getLink = () => {
  const link = createHttpLink({
    uri: "http://localhost:3001/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = read_cookie("token");

    return {
      headers: {
        ...headers,
        authorization: !isEqual(read_cookie("token"), [])
          ? `Bearer ${token}`
          : "",
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
