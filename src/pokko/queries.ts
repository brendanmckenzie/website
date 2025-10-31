import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: unknown; output: unknown; }
};

export type Body = IBody & PokValue & {
  __typename?: 'Body';
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
};

export type BodyCollection = {
  __typename?: 'BodyCollection';
  nodes: Array<Maybe<IBody>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BodyCondition = {
  body?: InputMaybe<Scalars['String']['input']>;
};

export type BodyFilter = {
  and?: InputMaybe<Array<BodyFilter>>;
  body?: InputMaybe<ScalarStringFilter>;
  id?: InputMaybe<ScalarIdFilter>;
  or?: InputMaybe<Array<BodyFilter>>;
};

export enum BodyOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC'
}

export type BodyRichtext = IBodyRichtext & PokValue & {
  __typename?: 'BodyRichtext';
  body?: Maybe<PokRichText>;
  id: Scalars['String']['output'];
};

export type BodyRichtextCollection = {
  __typename?: 'BodyRichtextCollection';
  nodes: Array<Maybe<IBodyRichtext>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BodyRichtextCondition = {
  body?: InputMaybe<Scalars['String']['input']>;
};

export type BodyRichtextFilter = {
  and?: InputMaybe<Array<BodyRichtextFilter>>;
  id?: InputMaybe<ScalarIdFilter>;
  or?: InputMaybe<Array<BodyRichtextFilter>>;
};

export enum BodyRichtextOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC'
}

export type Category = ICategory & PokEntry & {
  __typename?: 'Category';
  id: Scalars['String']['output'];
  pokko: Pokko;
};

export type CategoryCollection = {
  __typename?: 'CategoryCollection';
  nodes: Array<Maybe<ICategory>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Entries = {
  __typename?: 'Entries';
  allBody?: Maybe<BodyCollection>;
  allBodyRichtext?: Maybe<BodyRichtextCollection>;
  allCategory?: Maybe<CategoryCollection>;
  allModularPage?: Maybe<ModularPageCollection>;
  allPostBase?: Maybe<PostBaseCollection>;
  allPostList?: Maybe<PostListCollection>;
  allPostMarkdown?: Maybe<PostMarkdownCollection>;
  allPostRichtext?: Maybe<PostRichtextCollection>;
  allSeo?: Maybe<SeoCollection>;
  allTitle?: Maybe<TitleCollection>;
  body?: Maybe<Body>;
  bodyRichtext?: Maybe<BodyRichtext>;
  category?: Maybe<Category>;
  modularPage?: Maybe<ModularPage>;
  postBase?: Maybe<PostBase>;
  postList?: Maybe<PostList>;
  postMarkdown?: Maybe<PostMarkdown>;
  postRichtext?: Maybe<PostRichtext>;
  seo?: Maybe<Seo>;
  title?: Maybe<Title>;
};


export type EntriesAllBodyArgs = {
  filter?: InputMaybe<BodyFilter>;
  inherit?: Scalars['Boolean']['input'];
  orderBy?: InputMaybe<Array<InputMaybe<BodyOrderBy>>>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type EntriesAllBodyRichtextArgs = {
  filter?: InputMaybe<BodyRichtextFilter>;
  inherit?: Scalars['Boolean']['input'];
  orderBy?: InputMaybe<Array<InputMaybe<BodyRichtextOrderBy>>>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type EntriesAllCategoryArgs = {
  inherit?: Scalars['Boolean']['input'];
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type EntriesAllModularPageArgs = {
  inherit?: Scalars['Boolean']['input'];
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type EntriesAllPostBaseArgs = {
  filter?: InputMaybe<PostBaseFilter>;
  inherit?: Scalars['Boolean']['input'];
  orderBy?: InputMaybe<Array<InputMaybe<PostBaseOrderBy>>>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type EntriesAllPostListArgs = {
  inherit?: Scalars['Boolean']['input'];
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type EntriesAllPostMarkdownArgs = {
  filter?: InputMaybe<PostMarkdownFilter>;
  inherit?: Scalars['Boolean']['input'];
  orderBy?: InputMaybe<Array<InputMaybe<PostMarkdownOrderBy>>>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type EntriesAllPostRichtextArgs = {
  filter?: InputMaybe<PostRichtextFilter>;
  inherit?: Scalars['Boolean']['input'];
  orderBy?: InputMaybe<Array<InputMaybe<PostRichtextOrderBy>>>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type EntriesAllSeoArgs = {
  inherit?: Scalars['Boolean']['input'];
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type EntriesAllTitleArgs = {
  filter?: InputMaybe<TitleFilter>;
  inherit?: Scalars['Boolean']['input'];
  orderBy?: InputMaybe<Array<InputMaybe<TitleOrderBy>>>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type EntriesBodyArgs = {
  id: Scalars['String']['input'];
};


export type EntriesBodyRichtextArgs = {
  id: Scalars['String']['input'];
};


export type EntriesCategoryArgs = {
  id: Scalars['String']['input'];
};


export type EntriesModularPageArgs = {
  id: Scalars['String']['input'];
};


export type EntriesPostBaseArgs = {
  id: Scalars['String']['input'];
};


export type EntriesPostListArgs = {
  id: Scalars['String']['input'];
};


export type EntriesPostMarkdownArgs = {
  id: Scalars['String']['input'];
};


export type EntriesPostRichtextArgs = {
  id: Scalars['String']['input'];
};


export type EntriesSeoArgs = {
  id: Scalars['String']['input'];
};


export type EntriesTitleArgs = {
  id: Scalars['String']['input'];
};

export type IBody = {
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
};

export type IBodyRichtext = {
  body?: Maybe<PokRichText>;
  id: Scalars['String']['output'];
};

export type ICategory = {
  id: Scalars['String']['output'];
  pokko: Pokko;
};

export type IModularPage = {
  components?: Maybe<PostList>;
  id: Scalars['String']['output'];
  pokko: Pokko;
};

export type IPostBase = {
  alias?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Category>;
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<PokMedia>;
  legacyAlias?: Maybe<Scalars['String']['output']>;
  legacyCategory?: Maybe<Scalars['String']['output']>;
  pokko: Pokko;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type IPostList = {
  id: Scalars['String']['output'];
};

export type IPostMarkdown = {
  alias?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Category>;
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<PokMedia>;
  legacyAlias?: Maybe<Scalars['String']['output']>;
  legacyCategory?: Maybe<Scalars['String']['output']>;
  pokko: Pokko;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type IPostRichtext = {
  alias?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Array<Maybe<PokRichText>>>;
  category?: Maybe<Category>;
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<PokMedia>;
  legacyAlias?: Maybe<Scalars['String']['output']>;
  legacyCategory?: Maybe<Scalars['String']['output']>;
  pokko: Pokko;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ISeo = {
  id: Scalars['String']['output'];
};

export type ITitle = {
  id: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ModularPage = IModularPage & PokEntry & {
  __typename?: 'ModularPage';
  components?: Maybe<PostList>;
  id: Scalars['String']['output'];
  pokko: Pokko;
};

export type ModularPageCollection = {
  __typename?: 'ModularPageCollection';
  nodes: Array<Maybe<IModularPage>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Page = {
  __typename?: 'Page';
  entry?: Maybe<PokEntry>;
  entryId?: Maybe<Scalars['String']['output']>;
  fullPath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  nodes: Array<Maybe<Page>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
};

export type PagesCondition = {
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pathExact?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PokEntry = {
  id: Scalars['String']['output'];
  pokko: Pokko;
};

export type PokMedia = {
  __typename?: 'PokMedia';
  contentType: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};


export type PokMediaUrlArgs = {
  process?: InputMaybe<PokMediaProcess>;
};

export enum PokMediaFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum PokMediaPosition {
  Bottom = 'BOTTOM',
  Centre = 'CENTRE',
  Left = 'LEFT',
  LeftBottom = 'LEFT_BOTTOM',
  LeftTop = 'LEFT_TOP',
  Right = 'RIGHT',
  RightBottom = 'RIGHT_BOTTOM',
  RightTop = 'RIGHT_TOP',
  Top = 'TOP'
}

export type PokMediaProcess = {
  fit?: InputMaybe<PokMediaFit>;
  height?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<PokMediaPosition>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type PokRichText = {
  __typename?: 'PokRichText';
  body?: Maybe<Scalars['JSON']['output']>;
  embeds?: Maybe<Array<Maybe<PokValue>>>;
};

export type PokValue = {
  id?: Maybe<Scalars['String']['output']>;
};

export type Pokko = {
  __typename?: 'Pokko';
  created: Scalars['String']['output'];
  id: Scalars['String']['output'];
  model: Scalars['String']['output'];
  modified: Scalars['String']['output'];
  name: Scalars['String']['output'];
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PostBase = IPostBase & ITitle & PokEntry & {
  __typename?: 'PostBase';
  alias?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Category>;
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<PokMedia>;
  legacyAlias?: Maybe<Scalars['String']['output']>;
  legacyCategory?: Maybe<Scalars['String']['output']>;
  pokko: Pokko;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PostBaseCollection = {
  __typename?: 'PostBaseCollection';
  nodes: Array<Maybe<IPostBase>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PostBaseCondition = {
  alias?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  legacyAlias?: InputMaybe<Scalars['String']['input']>;
  legacyCategory?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostBaseFilter = {
  alias?: InputMaybe<ScalarStringFilter>;
  and?: InputMaybe<Array<PostBaseFilter>>;
  category?: InputMaybe<ScalarIdFilter>;
  date?: InputMaybe<ScalarStringFilter>;
  id?: InputMaybe<ScalarIdFilter>;
  legacyAlias?: InputMaybe<ScalarStringFilter>;
  legacyCategory?: InputMaybe<ScalarStringFilter>;
  or?: InputMaybe<Array<PostBaseFilter>>;
  summary?: InputMaybe<ScalarStringFilter>;
  tags?: InputMaybe<ScalarStringFilter>;
  title?: InputMaybe<ScalarStringFilter>;
};

export enum PostBaseOrderBy {
  AliasAsc = 'ALIAS_ASC',
  AliasDesc = 'ALIAS_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  LegacyAliasAsc = 'LEGACY_ALIAS_ASC',
  LegacyAliasDesc = 'LEGACY_ALIAS_DESC',
  LegacyCategoryAsc = 'LEGACY_CATEGORY_ASC',
  LegacyCategoryDesc = 'LEGACY_CATEGORY_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TagsAsc = 'TAGS_ASC',
  TagsDesc = 'TAGS_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type PostList = IPostList & PokValue & {
  __typename?: 'PostList';
  id: Scalars['String']['output'];
};

export type PostListCollection = {
  __typename?: 'PostListCollection';
  nodes: Array<Maybe<IPostList>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PostMarkdown = IBody & IPostBase & IPostMarkdown & ISeo & ITitle & PokEntry & {
  __typename?: 'PostMarkdown';
  alias?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Category>;
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<PokMedia>;
  legacyAlias?: Maybe<Scalars['String']['output']>;
  legacyCategory?: Maybe<Scalars['String']['output']>;
  pokko: Pokko;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PostMarkdownCollection = {
  __typename?: 'PostMarkdownCollection';
  nodes: Array<Maybe<IPostMarkdown>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PostMarkdownCondition = {
  alias?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  legacyAlias?: InputMaybe<Scalars['String']['input']>;
  legacyCategory?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostMarkdownFilter = {
  alias?: InputMaybe<ScalarStringFilter>;
  and?: InputMaybe<Array<PostMarkdownFilter>>;
  body?: InputMaybe<ScalarStringFilter>;
  category?: InputMaybe<ScalarIdFilter>;
  date?: InputMaybe<ScalarStringFilter>;
  id?: InputMaybe<ScalarIdFilter>;
  legacyAlias?: InputMaybe<ScalarStringFilter>;
  legacyCategory?: InputMaybe<ScalarStringFilter>;
  or?: InputMaybe<Array<PostMarkdownFilter>>;
  summary?: InputMaybe<ScalarStringFilter>;
  tags?: InputMaybe<ScalarStringFilter>;
  title?: InputMaybe<ScalarStringFilter>;
};

export enum PostMarkdownOrderBy {
  AliasAsc = 'ALIAS_ASC',
  AliasDesc = 'ALIAS_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  LegacyAliasAsc = 'LEGACY_ALIAS_ASC',
  LegacyAliasDesc = 'LEGACY_ALIAS_DESC',
  LegacyCategoryAsc = 'LEGACY_CATEGORY_ASC',
  LegacyCategoryDesc = 'LEGACY_CATEGORY_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TagsAsc = 'TAGS_ASC',
  TagsDesc = 'TAGS_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type PostRichtext = IPostBase & IPostRichtext & ISeo & ITitle & PokEntry & {
  __typename?: 'PostRichtext';
  alias?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Array<Maybe<PokRichText>>>;
  category?: Maybe<Category>;
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<PokMedia>;
  legacyAlias?: Maybe<Scalars['String']['output']>;
  legacyCategory?: Maybe<Scalars['String']['output']>;
  pokko: Pokko;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PostRichtextCollection = {
  __typename?: 'PostRichtextCollection';
  nodes: Array<Maybe<IPostRichtext>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PostRichtextCondition = {
  alias?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  legacyAlias?: InputMaybe<Scalars['String']['input']>;
  legacyCategory?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostRichtextFilter = {
  alias?: InputMaybe<ScalarStringFilter>;
  and?: InputMaybe<Array<PostRichtextFilter>>;
  category?: InputMaybe<ScalarIdFilter>;
  date?: InputMaybe<ScalarStringFilter>;
  id?: InputMaybe<ScalarIdFilter>;
  legacyAlias?: InputMaybe<ScalarStringFilter>;
  legacyCategory?: InputMaybe<ScalarStringFilter>;
  or?: InputMaybe<Array<PostRichtextFilter>>;
  summary?: InputMaybe<ScalarStringFilter>;
  tags?: InputMaybe<ScalarStringFilter>;
  title?: InputMaybe<ScalarStringFilter>;
};

export enum PostRichtextOrderBy {
  AliasAsc = 'ALIAS_ASC',
  AliasDesc = 'ALIAS_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  LegacyAliasAsc = 'LEGACY_ALIAS_ASC',
  LegacyAliasDesc = 'LEGACY_ALIAS_DESC',
  LegacyCategoryAsc = 'LEGACY_CATEGORY_ASC',
  LegacyCategoryDesc = 'LEGACY_CATEGORY_DESC',
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
  id?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySyncArgs = {
  filter?: InputMaybe<SyncCondition>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryTaxonomyArgs = {
  filter?: InputMaybe<PagesCondition>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type ScalarIdFilter = {
  equalTo?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  notEqualTo?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ScalarStringFilter = {
  equalTo?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  notEqualTo?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Seo = ISeo & PokValue & {
  __typename?: 'Seo';
  id: Scalars['String']['output'];
};

export type SeoCollection = {
  __typename?: 'SeoCollection';
  nodes: Array<Maybe<ISeo>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Sync = {
  __typename?: 'Sync';
  action?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modifiedAt?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Scalars['JSON']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SyncCollection = {
  __typename?: 'SyncCollection';
  nodes: Array<Maybe<Sync>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SyncCondition = {
  after?: InputMaybe<Scalars['String']['input']>;
};

export type Title = ITitle & PokValue & {
  __typename?: 'Title';
  id: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type TitleCollection = {
  __typename?: 'TitleCollection';
  nodes: Array<Maybe<ITitle>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TitleCondition = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TitleFilter = {
  and?: InputMaybe<Array<TitleFilter>>;
  id?: InputMaybe<ScalarIdFilter>;
  or?: InputMaybe<Array<TitleFilter>>;
  title?: InputMaybe<ScalarStringFilter>;
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
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
  filter?: InputMaybe<PostBaseFilter>;
}>;


export type ListPostsQuery = { __typename?: 'Query', entries?: { __typename?: 'Entries', allPostBase?: { __typename?: 'PostBaseCollection', totalCount: number, nodes: Array<
        | { __typename?: 'PostBase', id: string, title?: string | null, date?: string | null, summary?: string | null, alias?: string | null, pokko: { __typename?: 'Pokko', modified: string }, category?: { __typename?: 'Category', pokko: { __typename?: 'Pokko', name: string } } | null, image?: { __typename?: 'PokMedia', url: string } | null }
        | { __typename?: 'PostMarkdown', id: string, title?: string | null, date?: string | null, summary?: string | null, alias?: string | null, pokko: { __typename?: 'Pokko', modified: string }, category?: { __typename?: 'Category', pokko: { __typename?: 'Pokko', name: string } } | null, image?: { __typename?: 'PokMedia', url: string } | null }
        | { __typename?: 'PostRichtext', id: string, title?: string | null, date?: string | null, summary?: string | null, alias?: string | null, pokko: { __typename?: 'Pokko', modified: string }, category?: { __typename?: 'Category', pokko: { __typename?: 'Pokko', name: string } } | null, image?: { __typename?: 'PokMedia', url: string } | null }
       | null>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPrevPage: boolean } } | null } | null };

export type GetPostQueryVariables = Exact<{
  path: Array<Scalars['String']['input']> | Scalars['String']['input'];
  alias: Scalars['String']['input'];
}>;


export type GetPostQuery = { __typename?: 'Query', entry?:
    | { __typename?: 'Category' }
    | { __typename?: 'ModularPage' }
    | { __typename?: 'PostBase', id: string, title?: string | null, alias?: string | null, date?: string | null, tags?: string | null, summary?: string | null, category?: { __typename?: 'Category', pokko: { __typename?: 'Pokko', name: string } } | null, image?: { __typename?: 'PokMedia', url: string, height?: number | null, width?: number | null } | null }
    | { __typename?: 'PostMarkdown', id: string, title?: string | null, alias?: string | null, date?: string | null, tags?: string | null, summary?: string | null, body?: string | null, category?: { __typename?: 'Category', pokko: { __typename?: 'Pokko', name: string } } | null, image?: { __typename?: 'PokMedia', url: string, height?: number | null, width?: number | null } | null }
    | { __typename?: 'PostRichtext', id: string, title?: string | null, alias?: string | null, date?: string | null, tags?: string | null, summary?: string | null, category?: { __typename?: 'Category', pokko: { __typename?: 'Pokko', name: string } } | null, image?: { __typename?: 'PokMedia', url: string, height?: number | null, width?: number | null } | null, bodyRich?: Array<{ __typename?: 'PokRichText', body?: unknown | null } | null> | null }
   | null, entries?: { __typename?: 'Entries', allPostBase?: { __typename?: 'PostBaseCollection', nodes: Array<
        | { __typename?: 'PostBase', pokko: { __typename?: 'Pokko', path?: Array<string | null> | null } }
        | { __typename?: 'PostMarkdown', pokko: { __typename?: 'Pokko', path?: Array<string | null> | null } }
        | { __typename?: 'PostRichtext', pokko: { __typename?: 'Pokko', path?: Array<string | null> | null } }
       | null> } | null } | null };

export type PostListingFragment = { __typename?: 'PostBaseCollection', nodes: Array<
    | { __typename?: 'PostBase', id: string, title?: string | null, date?: string | null, summary?: string | null, alias?: string | null, pokko: { __typename?: 'Pokko', modified: string }, category?: { __typename?: 'Category', pokko: { __typename?: 'Pokko', name: string } } | null, image?: { __typename?: 'PokMedia', url: string } | null }
    | { __typename?: 'PostMarkdown', id: string, title?: string | null, date?: string | null, summary?: string | null, alias?: string | null, pokko: { __typename?: 'Pokko', modified: string }, category?: { __typename?: 'Category', pokko: { __typename?: 'Pokko', name: string } } | null, image?: { __typename?: 'PokMedia', url: string } | null }
    | { __typename?: 'PostRichtext', id: string, title?: string | null, date?: string | null, summary?: string | null, alias?: string | null, pokko: { __typename?: 'Pokko', modified: string }, category?: { __typename?: 'Category', pokko: { __typename?: 'Pokko', name: string } } | null, image?: { __typename?: 'PokMedia', url: string } | null }
   | null>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPrevPage: boolean } };

type PostSummary_PostBase_Fragment = { __typename?: 'PostBase', id: string, title?: string | null, date?: string | null, summary?: string | null, alias?: string | null, pokko: { __typename?: 'Pokko', modified: string }, category?: { __typename?: 'Category', pokko: { __typename?: 'Pokko', name: string } } | null, image?: { __typename?: 'PokMedia', url: string } | null };

type PostSummary_PostMarkdown_Fragment = { __typename?: 'PostMarkdown', id: string, title?: string | null, date?: string | null, summary?: string | null, alias?: string | null, pokko: { __typename?: 'Pokko', modified: string }, category?: { __typename?: 'Category', pokko: { __typename?: 'Pokko', name: string } } | null, image?: { __typename?: 'PokMedia', url: string } | null };

type PostSummary_PostRichtext_Fragment = { __typename?: 'PostRichtext', id: string, title?: string | null, date?: string | null, summary?: string | null, alias?: string | null, pokko: { __typename?: 'Pokko', modified: string }, category?: { __typename?: 'Category', pokko: { __typename?: 'Pokko', name: string } } | null, image?: { __typename?: 'PokMedia', url: string } | null };

export type PostSummaryFragment =
  | PostSummary_PostBase_Fragment
  | PostSummary_PostMarkdown_Fragment
  | PostSummary_PostRichtext_Fragment
;

export type PostCountQueryVariables = Exact<{ [key: string]: never; }>;


export type PostCountQuery = { __typename?: 'Query', entries?: { __typename?: 'Entries', allPostBase?: { __typename?: 'PostBaseCollection', totalCount: number } | null } | null };

export type RichTextFragment = { __typename?: 'PokRichText', body?: unknown | null };

export const PostSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IPostBase"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"process"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"400"}},{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"680"}},{"kind":"ObjectField","name":{"kind":"Name","value":"position"},"value":{"kind":"EnumValue","value":"CENTRE"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"COVER"}}]}}]}]}}]}}]} as unknown as DocumentNode;
export const PostListingFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostListing"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostBaseCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IPostBase"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"process"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"400"}},{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"680"}},{"kind":"ObjectField","name":{"kind":"Name","value":"position"},"value":{"kind":"EnumValue","value":"CENTRE"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"COVER"}}]}}]}]}}]}}]} as unknown as DocumentNode;
export const RichTextFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PokRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]} as unknown as DocumentNode;
export const ListPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"10"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostBaseFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPostBase"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"DATE_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"inherit"},"value":{"kind":"BooleanValue","value":true}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostListing"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostListing"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostBaseCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IPostBase"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"process"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"400"}},{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"680"}},{"kind":"ObjectField","name":{"kind":"Name","value":"position"},"value":{"kind":"EnumValue","value":"CENTRE"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"COVER"}}]}}]}]}}]}}]} as unknown as DocumentNode;
export type ListPostsQueryResult = Apollo.QueryResult<ListPostsQuery, ListPostsQueryVariables>;
export const GetPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"alias"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IPostBase"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"process"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"600"}},{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"1200"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"COVER"}},{"kind":"ObjectField","name":{"kind":"Name","value":"position"},"value":{"kind":"EnumValue","value":"CENTRE"}}]}}]},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostMarkdown"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostRichtext"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"bodyRich"},"name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPostBase"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"inherit"},"value":{"kind":"BooleanValue","value":true}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"legacyAlias"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"alias"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokko"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PokRichText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]} as unknown as DocumentNode;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const PostCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPostBase"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"inherit"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode;
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
      "PostMarkdown"
    ],
    "IBodyRichtext": [
      "BodyRichtext"
    ],
    "ICategory": [
      "Category"
    ],
    "IModularPage": [
      "ModularPage"
    ],
    "IPostBase": [
      "PostBase",
      "PostMarkdown",
      "PostRichtext"
    ],
    "IPostList": [
      "PostList"
    ],
    "IPostMarkdown": [
      "PostMarkdown"
    ],
    "IPostRichtext": [
      "PostRichtext"
    ],
    "ISeo": [
      "PostMarkdown",
      "PostRichtext",
      "Seo"
    ],
    "ITitle": [
      "PostBase",
      "PostMarkdown",
      "PostRichtext",
      "Title"
    ],
    "PokEntry": [
      "Category",
      "ModularPage",
      "PostBase",
      "PostMarkdown",
      "PostRichtext"
    ],
    "PokValue": [
      "Body",
      "BodyRichtext",
      "PostList",
      "Seo",
      "Title"
    ]
  }
};
      export default result;
    