import { gql } from "@apollo/client";

export const ALL_USERS = gql`
  query {
    users {
      id
      login
    }
  }
`;

export const SIGN_IN_MUTATION = gql`
  mutation signIn($login: String!, $password: String!) {
    signIn(userData: { login: $login, password: $password }) {
      token
    }
  }
`;
