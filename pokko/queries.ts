import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Body = PokEntry & PokValue & IBody & {
  __typename?: 'Body';
  id: Scalars['String'];
  pokko: Pokko;
  body?: Maybe<Scalars['String']>;
};

export type BodyCollection = {
  __typename?: 'BodyCollection';
  nodes: Array<Maybe<Body>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BodyCondition = {
  body?: Maybe<Scalars['String']>;
};

export type BodyFilter = {
  body?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<BodyFilter>>;
  or?: Maybe<Array<BodyFilter>>;
};

export enum BodyOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC'
}

export type Entries = {
  __typename?: 'Entries';
  post?: Maybe<Post>;
  postList?: Maybe<PostList>;
  modularPage?: Maybe<ModularPage>;
  seo?: Maybe<Seo>;
  body?: Maybe<Body>;
  title?: Maybe<Title>;
  allPost?: Maybe<PostCollection>;
  allPostList?: Maybe<PostListCollection>;
  allModularPage?: Maybe<ModularPageCollection>;
  allSeo?: Maybe<SeoCollection>;
  allBody?: Maybe<BodyCollection>;
  allTitle?: Maybe<TitleCollection>;
};


export type EntriesPostArgs = {
  id: Scalars['String'];
};


export type EntriesPostListArgs = {
  id: Scalars['String'];
};


export type EntriesModularPageArgs = {
  id: Scalars['String'];
};


export type EntriesSeoArgs = {
  id: Scalars['String'];
};


export type EntriesBodyArgs = {
  id: Scalars['String'];
};


export type EntriesTitleArgs = {
  id: Scalars['String'];
};


export type EntriesAllPostArgs = {
  filter?: Maybe<PostFilter>;
  orderBy?: Maybe<Array<Maybe<PostOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllPostListArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllModularPageArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllSeoArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllBodyArgs = {
  filter?: Maybe<BodyFilter>;
  orderBy?: Maybe<Array<Maybe<BodyOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllTitleArgs = {
  filter?: Maybe<TitleFilter>;
  orderBy?: Maybe<Array<Maybe<TitleOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};

export type IBody = {
  id: Scalars['String'];
  pokko: Pokko;
  body?: Maybe<Scalars['String']>;
};

export type IModularPage = {
  id: Scalars['String'];
  pokko: Pokko;
  components?: Maybe<PostList>;
};

export type IPost = {
  id: Scalars['String'];
  pokko: Pokko;
  date?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  legacyAlias?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  image?: Maybe<PokMedia>;
};

export type IPostList = {
  id: Scalars['String'];
  pokko: Pokko;
};

export type ISeo = {
  id: Scalars['String'];
  pokko: Pokko;
};

export type ITitle = {
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
};


export type ModularPage = PokEntry & PokValue & IModularPage & {
  __typename?: 'ModularPage';
  id: Scalars['String'];
  pokko: Pokko;
  components?: Maybe<PostList>;
};

export type ModularPageCollection = {
  __typename?: 'ModularPageCollection';
  nodes: Array<Maybe<ModularPage>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Page = {
  __typename?: 'Page';
  fullPath?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  entry?: Maybe<PokEntry>;
  type?: Maybe<Scalars['String']>;
  entryId?: Maybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  nodes: Array<Maybe<Page>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
};

export type PagesCondition = {
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathExact?: Maybe<Scalars['Boolean']>;
};

export type PokEntry = {
  id: Scalars['String'];
  pokko: Pokko;
};

export type PokMedia = {
  __typename?: 'PokMedia';
  id: Scalars['String'];
  contentType: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  size: Scalars['Int'];
  url: Scalars['String'];
};


export type PokMediaUrlArgs = {
  process?: Maybe<PokMediaProcess>;
};

export enum PokMediaFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum PokMediaPosition {
  Centre = 'CENTRE',
  Top = 'TOP',
  RightTop = 'RIGHT_TOP',
  Right = 'RIGHT',
  RightBottom = 'RIGHT_BOTTOM',
  Bottom = 'BOTTOM',
  LeftBottom = 'LEFT_BOTTOM',
  Left = 'LEFT',
  LeftTop = 'LEFT_TOP'
}

export type PokMediaProcess = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  fit?: Maybe<PokMediaFit>;
  position?: Maybe<PokMediaPosition>;
};

export type PokValue = {
  id?: Maybe<Scalars['String']>;
};

export type Pokko = {
  __typename?: 'Pokko';
  id: Scalars['String'];
  model: Scalars['String'];
  name: Scalars['String'];
  created: Scalars['String'];
  modified: Scalars['String'];
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Post = PokEntry & PokValue & IPost & ISeo & IBody & ITitle & {
  __typename?: 'Post';
  id: Scalars['String'];
  pokko: Pokko;
  date?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  legacyAlias?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  image?: Maybe<PokMedia>;
  body?: Maybe<Scalars['String']>;
};

export type PostCollection = {
  __typename?: 'PostCollection';
  nodes: Array<Maybe<Post>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PostCondition = {
  date?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  legacyAlias?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type PostFilter = {
  alias?: Maybe<ScalarStringFilter>;
  title?: Maybe<ScalarStringFilter>;
  legacyAlias?: Maybe<ScalarStringFilter>;
  body?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<PostFilter>>;
  or?: Maybe<Array<PostFilter>>;
};

export type PostList = PokEntry & PokValue & IPostList & {
  __typename?: 'PostList';
  id: Scalars['String'];
  pokko: Pokko;
};

export type PostListCollection = {
  __typename?: 'PostListCollection';
  nodes: Array<Maybe<PostList>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum PostOrderBy {
  AliasAsc = 'ALIAS_ASC',
  AliasDesc = 'ALIAS_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  LegacyAliasAsc = 'LEGACY_ALIAS_ASC',
  LegacyAliasDesc = 'LEGACY_ALIAS_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TagsAsc = 'TAGS_ASC',
  TagsDesc = 'TAGS_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type Query = {
  __typename?: 'Query';
  entries?: Maybe<Entries>;
  entry?: Maybe<PokEntry>;
  sync?: Maybe<SyncCollection>;
  taxonomy?: Maybe<PageCollection>;
};


export type QueryEntryArgs = {
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
};


export type QuerySyncArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  filter?: Maybe<SyncCondition>;
};


export type QueryTaxonomyArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  filter?: Maybe<PagesCondition>;
};

export type ScalarIdFilter = {
  isNull?: Maybe<Scalars['Boolean']>;
  equalTo?: Maybe<Scalars['String']>;
  notEqualTo?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ScalarStringFilter = {
  isNull?: Maybe<Scalars['Boolean']>;
  equalTo?: Maybe<Scalars['String']>;
  notEqualTo?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Seo = PokEntry & PokValue & ISeo & {
  __typename?: 'Seo';
  id: Scalars['String'];
  pokko: Pokko;
};

export type SeoCollection = {
  __typename?: 'SeoCollection';
  nodes: Array<Maybe<Seo>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Sync = {
  __typename?: 'Sync';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  modifiedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  action?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['JSON']>;
};

export type SyncCollection = {
  __typename?: 'SyncCollection';
  nodes: Array<Maybe<Sync>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SyncCondition = {
  after?: Maybe<Scalars['String']>;
};

export type Title = PokEntry & PokValue & ITitle & {
  __typename?: 'Title';
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
};

export type TitleCollection = {
  __typename?: 'TitleCollection';
  nodes: Array<Maybe<Title>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TitleCondition = {
  title?: Maybe<Scalars['String']>;
};

export type TitleFilter = {
  title?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<TitleFilter>>;
  or?: Maybe<Array<TitleFilter>>;
};

export enum TitleOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type ListPostsQueryVariables = Exact<{
  skip: Scalars['Int'];
  take: Scalars['Int'];
}>;


export type ListPostsQuery = (
  { __typename?: 'Query' }
  & { entries?: Maybe<(
    { __typename?: 'Entries' }
    & { allPost?: Maybe<(
      { __typename?: 'PostCollection' }
      & PostListingFragment
    )> }
  )> }
);

export type GetPostQueryVariables = Exact<{
  path: Array<Scalars['String']> | Scalars['String'];
  alias: Scalars['String'];
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { entry?: Maybe<{ __typename?: 'Body' } | { __typename?: 'ModularPage' } | (
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'alias' | 'date' | 'tags' | 'category' | 'summary'>
    & { image?: Maybe<(
      { __typename?: 'PokMedia' }
      & Pick<PokMedia, 'url' | 'height' | 'width'>
    )> }
  ) | { __typename?: 'PostList' } | { __typename?: 'Seo' } | { __typename?: 'Title' }>, entries?: Maybe<(
    { __typename?: 'Entries' }
    & { allPost?: Maybe<(
      { __typename?: 'PostCollection' }
      & { nodes: Array<Maybe<(
        { __typename?: 'Post' }
        & { pokko: (
          { __typename?: 'Pokko' }
          & Pick<Pokko, 'path'>
        ) }
      )>> }
    )> }
  )> }
);

export type PostListingFragment = (
  { __typename?: 'PostCollection' }
  & { nodes: Array<Maybe<(
    { __typename?: 'Post' }
    & PostSummaryFragment
  )>>, pageInfo: (
    { __typename?: 'PageInfo' }
    & Pick<PageInfo, 'hasNextPage' | 'hasPrevPage'>
  ) }
);

export type PostSummaryFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title' | 'date' | 'summary' | 'category' | 'alias'>
);

export type PostCountQueryVariables = Exact<{ [key: string]: never; }>;


export type PostCountQuery = (
  { __typename?: 'Query' }
  & { entries?: Maybe<(
    { __typename?: 'Entries' }
    & { allPost?: Maybe<(
      { __typename?: 'PostCollection' }
      & Pick<PostCollection, 'totalCount'>
    )> }
  )> }
);

export const PostSummaryFragmentDoc = gql`
    fragment PostSummary on Post {
  id
  title
  date
  summary
  category
  alias
}
    `;
export const PostListingFragmentDoc = gql`
    fragment PostListing on PostCollection {
  nodes {
    ...PostSummary
  }
  pageInfo {
    hasNextPage
    hasPrevPage
  }
}
    ${PostSummaryFragmentDoc}`;
export const ListPostsDocument = gql`
    query ListPosts($skip: Int!, $take: Int!) {
  entries {
    allPost(orderBy: DATE_DESC, skip: $skip, take: $take) {
      ...PostListing
    }
  }
}
    ${PostListingFragmentDoc}`;

/**
 * __useListPostsQuery__
 *
 * To run a query within a React component, call `useListPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPostsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useListPostsQuery(baseOptions: Apollo.QueryHookOptions<ListPostsQuery, ListPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPostsQuery, ListPostsQueryVariables>(ListPostsDocument, options);
      }
export function useListPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPostsQuery, ListPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPostsQuery, ListPostsQueryVariables>(ListPostsDocument, options);
        }
export type ListPostsQueryHookResult = ReturnType<typeof useListPostsQuery>;
export type ListPostsLazyQueryHookResult = ReturnType<typeof useListPostsLazyQuery>;
export type ListPostsQueryResult = Apollo.QueryResult<ListPostsQuery, ListPostsQueryVariables>;
export const GetPostDocument = gql`
    query GetPost($path: [String!]!, $alias: String!) {
  entry(path: $path) {
    ... on Post {
      id
      title
      body
      alias
      date
      tags
      category
      summary
      image {
        url(process: {height: 600, width: 1200, fit: COVER, position: CENTRE})
        height
        width
      }
    }
  }
  entries {
    allPost(filter: {legacyAlias: {equalTo: $alias}}) {
      nodes {
        pokko {
          path
        }
      }
    }
  }
}
    `;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      path: // value for 'path'
 *      alias: // value for 'alias'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const PostCountDocument = gql`
    query PostCount {
  entries {
    allPost {
      totalCount
    }
  }
}
    `;

/**
 * __usePostCountQuery__
 *
 * To run a query within a React component, call `usePostCountQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostCountQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostCountQuery(baseOptions?: Apollo.QueryHookOptions<PostCountQuery, PostCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostCountQuery, PostCountQueryVariables>(PostCountDocument, options);
      }
export function usePostCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostCountQuery, PostCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostCountQuery, PostCountQueryVariables>(PostCountDocument, options);
        }
export type PostCountQueryHookResult = ReturnType<typeof usePostCountQuery>;
export type PostCountLazyQueryHookResult = ReturnType<typeof usePostCountLazyQuery>;
export type PostCountQueryResult = Apollo.QueryResult<PostCountQuery, PostCountQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "IBody": [
      "Body",
      "Post"
    ],
    "IModularPage": [
      "ModularPage"
    ],
    "IPost": [
      "Post"
    ],
    "IPostList": [
      "PostList"
    ],
    "ISeo": [
      "Post",
      "Seo"
    ],
    "ITitle": [
      "Post",
      "Title"
    ],
    "PokEntry": [
      "Body",
      "ModularPage",
      "Post",
      "PostList",
      "Seo",
      "Title"
    ],
    "PokValue": [
      "Body",
      "ModularPage",
      "Post",
      "PostList",
      "Seo",
      "Title"
    ]
  }
};
      export default result;
    