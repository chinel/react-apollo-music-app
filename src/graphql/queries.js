import { gql } from "@apollo/client";

export const GET_SONGS = gql`
  query MyQuery {
    songs(order_by: { created_at: desc }) {
      url
      thumbnail
      id
      duration
      artist
    }
  }
`;
