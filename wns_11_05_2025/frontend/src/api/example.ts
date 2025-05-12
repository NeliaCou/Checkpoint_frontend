import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query {
    countries {
      id
      name
      code
      emoji
      continent {
        id
        name
      }
    }
  }
`;

export const GET_COUNTRY = gql`
  query GetCountry($code: String!) {
    country(code: $code) {
      name
      code
      emoji
      continent {
        name
      }
    }
  }
`;

export const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      id
      name
      code
      emoji
      continent {
        name
      }
    }
  }
`;
