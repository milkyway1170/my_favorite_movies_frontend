import { gql } from "@apollo/client";

export const AllUsers = gql`
  query {
    users {
      id
      login
    }
  }
`;
