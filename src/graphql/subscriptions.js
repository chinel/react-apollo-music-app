import { gql } from "@apollo/client";

export const GET_SONGS = gql`
  subscription MyQuery {
    songs(order_by: { created_at: desc }) {
      url
      thumbnail
      id
      duration
      artist
    }
  }
`;
