import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Episode = {
  __typename?: 'Episode';
  description: Scalars['String']['output'];
  episodeNumber: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  imdbId: Scalars['String']['output'];
  releaseDate: Scalars['String']['output'];
  seasonNumber: Scalars['Int']['output'];
  series: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type EpisodeInput = {
  description: Scalars['String']['input'];
  episodeNumber: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  imdbId: Scalars['String']['input'];
  releaseDate: Scalars['String']['input'];
  seasonNumber: Scalars['Int']['input'];
  series: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEpisode?: Maybe<Episode>;
  deleteEpisode?: Maybe<Scalars['String']['output']>;
  updateEpisode?: Maybe<Episode>;
};


export type MutationCreateEpisodeArgs = {
  episode: EpisodeInput;
};


export type MutationDeleteEpisodeArgs = {
  episodeId: Scalars['String']['input'];
};


export type MutationUpdateEpisodeArgs = {
  episode: UpdateEpisodeInput;
};

export type Query = {
  __typename?: 'Query';
  getEpisodeById?: Maybe<Episode>;
  listEpisodes?: Maybe<Array<Maybe<Episode>>>;
};


export type QueryGetEpisodeByIdArgs = {
  episodeId: Scalars['String']['input'];
};


export type QueryListEpisodesArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateEpisode?: Maybe<Episode>;
  onDeleteEpisode?: Maybe<Scalars['String']['output']>;
  onUpdateEpisode?: Maybe<Episode>;
};

export type UpdateEpisodeInput = {
  description: Scalars['String']['input'];
  episodeNumber: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  imdbId: Scalars['String']['input'];
  releaseDate: Scalars['String']['input'];
  seasonNumber: Scalars['Int']['input'];
  series: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type ListEpisodesQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListEpisodesQuery = { __typename?: 'Query', listEpisodes?: Array<{ __typename?: 'Episode', id: string, series: string, title: string, description: string, seasonNumber: number, episodeNumber: number, releaseDate: string, imdbId: string } | null> | null };

export type OnCreateEpisodeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCreateEpisodeSubscription = { __typename?: 'Subscription', onCreateEpisode?: { __typename?: 'Episode', id: string, series: string, title: string, description: string, seasonNumber: number, episodeNumber: number, releaseDate: string, imdbId: string } | null };

export type OnUpdateEpisodeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnUpdateEpisodeSubscription = { __typename?: 'Subscription', onUpdateEpisode?: { __typename?: 'Episode', id: string, series: string, title: string, description: string, seasonNumber: number, episodeNumber: number, releaseDate: string, imdbId: string } | null };

export type OnDeleteEpisodeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnDeleteEpisodeSubscription = { __typename?: 'Subscription', onDeleteEpisode?: string | null };


export const ListEpisodesDocument = gql`
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

/**
 * __useListEpisodesQuery__
 *
 * To run a query within a React component, call `useListEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListEpisodesQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useListEpisodesQuery(baseOptions?: Apollo.QueryHookOptions<ListEpisodesQuery, ListEpisodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListEpisodesQuery, ListEpisodesQueryVariables>(ListEpisodesDocument, options);
      }
export function useListEpisodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListEpisodesQuery, ListEpisodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListEpisodesQuery, ListEpisodesQueryVariables>(ListEpisodesDocument, options);
        }
export function useListEpisodesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListEpisodesQuery, ListEpisodesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListEpisodesQuery, ListEpisodesQueryVariables>(ListEpisodesDocument, options);
        }
export type ListEpisodesQueryHookResult = ReturnType<typeof useListEpisodesQuery>;
export type ListEpisodesLazyQueryHookResult = ReturnType<typeof useListEpisodesLazyQuery>;
export type ListEpisodesSuspenseQueryHookResult = ReturnType<typeof useListEpisodesSuspenseQuery>;
export type ListEpisodesQueryResult = Apollo.QueryResult<ListEpisodesQuery, ListEpisodesQueryVariables>;
export const OnCreateEpisodeDocument = gql`
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

/**
 * __useOnCreateEpisodeSubscription__
 *
 * To run a query within a React component, call `useOnCreateEpisodeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateEpisodeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateEpisodeSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCreateEpisodeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCreateEpisodeSubscription, OnCreateEpisodeSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnCreateEpisodeSubscription, OnCreateEpisodeSubscriptionVariables>(OnCreateEpisodeDocument, options);
      }
export type OnCreateEpisodeSubscriptionHookResult = ReturnType<typeof useOnCreateEpisodeSubscription>;
export type OnCreateEpisodeSubscriptionResult = Apollo.SubscriptionResult<OnCreateEpisodeSubscription>;
export const OnUpdateEpisodeDocument = gql`
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

/**
 * __useOnUpdateEpisodeSubscription__
 *
 * To run a query within a React component, call `useOnUpdateEpisodeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUpdateEpisodeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUpdateEpisodeSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnUpdateEpisodeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnUpdateEpisodeSubscription, OnUpdateEpisodeSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnUpdateEpisodeSubscription, OnUpdateEpisodeSubscriptionVariables>(OnUpdateEpisodeDocument, options);
      }
export type OnUpdateEpisodeSubscriptionHookResult = ReturnType<typeof useOnUpdateEpisodeSubscription>;
export type OnUpdateEpisodeSubscriptionResult = Apollo.SubscriptionResult<OnUpdateEpisodeSubscription>;
export const OnDeleteEpisodeDocument = gql`
    subscription OnDeleteEpisode {
  onDeleteEpisode
}
    `;

/**
 * __useOnDeleteEpisodeSubscription__
 *
 * To run a query within a React component, call `useOnDeleteEpisodeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnDeleteEpisodeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnDeleteEpisodeSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnDeleteEpisodeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnDeleteEpisodeSubscription, OnDeleteEpisodeSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnDeleteEpisodeSubscription, OnDeleteEpisodeSubscriptionVariables>(OnDeleteEpisodeDocument, options);
      }
export type OnDeleteEpisodeSubscriptionHookResult = ReturnType<typeof useOnDeleteEpisodeSubscription>;
export type OnDeleteEpisodeSubscriptionResult = Apollo.SubscriptionResult<OnDeleteEpisodeSubscription>;