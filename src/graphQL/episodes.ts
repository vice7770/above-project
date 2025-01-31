import { gql } from "@apollo/client";

export const FETCH_ALL_EPISODES = gql`
  query ListEpisodes($search: String) {
    listEpisodes(search: $search) {
      id
      series
      title
      description
      seasonNumber
      episodeNumber
      releaseDate
      imdbId
    }
  }
`;

export const UPDATE_EPISODE = gql`
  mutation UpdateEpisode($episode: UpdateEpisodeInput!) {
    updateEpisode(episode: $episode) {
      id
      series
      title
      description
      seasonNumber
      episodeNumber
      releaseDate
      imdbId
    }
  }
`;

export const DELETE_EPISODE = gql`
  mutation DeleteEpisode($episodeId: String!) {
    deleteEpisode(episodeId: $episodeId)
  }
`;

