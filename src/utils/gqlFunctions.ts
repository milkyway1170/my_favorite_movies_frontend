import { gql } from "@apollo/client";

export const EXCHANGE_RATES = gql`
  query {
    users {
      id
      login
    }
  }
`;
