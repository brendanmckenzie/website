import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  condition?: Maybe<PostFilter>;
  orderBy?: Maybe<PostOrderBy>;
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
  condition?: Maybe<BodyFilter>;
  orderBy?: Maybe<BodyOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllTitleArgs = {
  condition?: Maybe<TitleFilter>;
  orderBy?: Maybe<TitleOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};

export type Post = PokEntry & PokValue & IPost & ISeo & IBody & ITitle & {
  __typename?: 'Post';
  id: Scalars['String'];
  pokko: Pokko;
  date?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type PokEntry = {
  id: Scalars['String'];
  pokko: Pokko;
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

export type PokValue = {
  id?: Maybe<Scalars['String']>;
};

export type IPost = {
  id: Scalars['String'];
  date?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
};

export type ISeo = {
  id: Scalars['String'];
};

export type IBody = {
  id: Scalars['String'];
  body?: Maybe<Scalars['String']>;
};

export type ITitle = {
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type PostList = PokEntry & PokValue & IPostList & {
  __typename?: 'PostList';
  id: Scalars['String'];
  pokko: Pokko;
};

export type IPostList = {
  id: Scalars['String'];
};

export type ModularPage = PokEntry & PokValue & IModularPage & {
  __typename?: 'ModularPage';
  id: Scalars['String'];
  pokko: Pokko;
  components?: Maybe<PostList>;
};

export type IModularPage = {
  id: Scalars['String'];
  components?: Maybe<PostList>;
};

export type Seo = PokEntry & PokValue & ISeo & {
  __typename?: 'Seo';
  id: Scalars['String'];
  pokko: Pokko;
};

export type Body = PokEntry & PokValue & IBody & {
  __typename?: 'Body';
  id: Scalars['String'];
  pokko: Pokko;
  body?: Maybe<Scalars['String']>;
};

export type Title = PokEntry & PokValue & ITitle & {
  __typename?: 'Title';
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
};

export type PostCollection = {
  __typename?: 'PostCollection';
  nodes: Array<Maybe<Post>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
};

export type PostFilter = {
  /** Filter on the Date field */
  date?: Maybe<Scalars['String']>;
  /** Filter on the Category field */
  category?: Maybe<Scalars['String']>;
  /** Filter on the Summary field */
  summary?: Maybe<Scalars['String']>;
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
  /** Filter on the Alias field */
  alias?: Maybe<Scalars['String']>;
  /** Filter on the Tags field */
  tags?: Maybe<Scalars['String']>;
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
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
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TagsAsc = 'TAGS_ASC',
  TagsDesc = 'TAGS_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type PostListCollection = {
  __typename?: 'PostListCollection';
  nodes: Array<Maybe<PostList>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ModularPageCollection = {
  __typename?: 'ModularPageCollection';
  nodes: Array<Maybe<ModularPage>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SeoCollection = {
  __typename?: 'SeoCollection';
  nodes: Array<Maybe<Seo>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BodyCollection = {
  __typename?: 'BodyCollection';
  nodes: Array<Maybe<Body>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BodyFilter = {
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
};

export enum BodyOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC'
}

export type TitleCollection = {
  __typename?: 'TitleCollection';
  nodes: Array<Maybe<Title>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TitleFilter = {
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
};

export enum TitleOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type SyncCollection = {
  __typename?: 'SyncCollection';
  nodes: Array<Maybe<Sync>>;
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


export type SyncCondition = {
  after?: Maybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  nodes: Array<Maybe<Page>>;
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

export type PagesCondition = {
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathExact?: Maybe<Scalars['Boolean']>;
};

export type ListPostsQueryVariables = Exact<{ [key: string]: never; }>;


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
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { entry?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'alias' | 'date' | 'tags' | 'category' | 'summary'>
  ) | { __typename?: 'PostList' } | { __typename?: 'ModularPage' } | { __typename?: 'Seo' } | { __typename?: 'Body' } | { __typename?: 'Title' }> }
);

export type PostListingFragment = (
  { __typename?: 'PostCollection' }
  & { nodes: Array<Maybe<(
    { __typename?: 'Post' }
    & PostSummaryFragment
  )>> }
);

export type PostSummaryFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title' | 'date' | 'summary' | 'category' | 'alias'>
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
}
    ${PostSummaryFragmentDoc}`;
export const ListPostsDocument = gql`
    query ListPosts {
  entries {
    allPost(orderBy: DATE_DESC, take: 15) {
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
 *   },
 * });
 */
export function useListPostsQuery(baseOptions?: Apollo.QueryHookOptions<ListPostsQuery, ListPostsQueryVariables>) {
        return Apollo.useQuery<ListPostsQuery, ListPostsQueryVariables>(ListPostsDocument, baseOptions);
      }
export function useListPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPostsQuery, ListPostsQueryVariables>) {
          return Apollo.useLazyQuery<ListPostsQuery, ListPostsQueryVariables>(ListPostsDocument, baseOptions);
        }
export type ListPostsQueryHookResult = ReturnType<typeof useListPostsQuery>;
export type ListPostsLazyQueryHookResult = ReturnType<typeof useListPostsLazyQuery>;
export type ListPostsQueryResult = Apollo.QueryResult<ListPostsQuery, ListPostsQueryVariables>;
export const GetPostDocument = gql`
    query GetPost($path: [String!]!) {
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
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "PokEntry": [
      "Post",
      "PostList",
      "ModularPage",
      "Seo",
      "Body",
      "Title"
    ],
    "PokValue": [
      "Post",
      "PostList",
      "ModularPage",
      "Seo",
      "Body",
      "Title"
    ],
    "IPost": [
      "Post"
    ],
    "ISeo": [
      "Post",
      "Seo"
    ],
    "IBody": [
      "Post",
      "Body"
    ],
    "ITitle": [
      "Post",
      "Title"
    ],
    "IPostList": [
      "PostList"
    ],
    "IModularPage": [
      "ModularPage"
    ]
  }
};
      export default result;
    