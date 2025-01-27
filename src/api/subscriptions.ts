import { gql } from '@apollo/client';

export const ON_CREATE_EPISODE = gql`
  subscription OnCreateEpisode {
    onCreateEpisode {
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

export const ON_UPDATE_EPISODE = gql`
  subscription OnUpdateEpisode {
    onUpdateEpisode {
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

export const ON_DELETE_EPISODE = gql`
  subscription OnDeleteEpisode {
    onDeleteEpisode
  }
`;