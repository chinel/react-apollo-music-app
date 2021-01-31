import { gql } from "@apollo/client";

/* export const GET_SONGS = gql`
  query MyQuery {
    songs(order_by: { created_at: desc }) {
      url
      thumbnail
      id
      duration
      artist
    }
  }
`; */

// note the @client is an annotation that tells apollo we want to get the data from the song
export const GET_QUEUED_SONGS = gql`
  query getQueuedSongs {
    queue @client {
      id
      duration
      title
      artist
      thumbnail
      url
    }
  }
`;
