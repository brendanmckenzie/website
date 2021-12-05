import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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

export type Body = IBody & PokValue & {
  __typename?: 'Body';
  body?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type BodyCollection = {
  __typename?: 'BodyCollection';
  nodes: Array<Maybe<IBody>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BodyCondition = {
  body?: InputMaybe<Scalars['String']>;
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
  id: Scalars['String'];
};

export type BodyRichtextCollection = {
  __typename?: 'BodyRichtextCollection';
  nodes: Array<Maybe<IBodyRichtext>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BodyRichtextCondition = {
  body?: InputMaybe<Scalars['String']>;
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

export type Entries = {
  __typename?: 'Entries';
  allBody?: Maybe<BodyCollection>;
  allBodyRichtext?: Maybe<BodyRichtextCollection>;
  allModularPage?: Maybe<ModularPageCollection>;
  allPostBase?: Maybe<PostBaseCollection>;
  allPostList?: Maybe<PostListCollection>;
  allPostMarkdown?: Maybe<PostMarkdownCollection>;
  allPostRichtext?: Maybe<PostRichtextCollection>;
  allSeo?: Maybe<SeoCollection>;
  allTitle?: Maybe<TitleCollection>;
  body?: Maybe<Body>;
  bodyRichtext?: Maybe<BodyRichtext>;
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
  inherit?: Scalars['Boolean'];
  orderBy?: InputMaybe<Array<InputMaybe<BodyOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllBodyRichtextArgs = {
  filter?: InputMaybe<BodyRichtextFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: InputMaybe<Array<InputMaybe<BodyRichtextOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllModularPageArgs = {
  inherit?: Scalars['Boolean'];
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllPostBaseArgs = {
  filter?: InputMaybe<PostBaseFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: InputMaybe<Array<InputMaybe<PostBaseOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllPostListArgs = {
  inherit?: Scalars['Boolean'];
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllPostMarkdownArgs = {
  filter?: InputMaybe<PostMarkdownFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: InputMaybe<Array<InputMaybe<PostMarkdownOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllPostRichtextArgs = {
  filter?: InputMaybe<PostRichtextFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: InputMaybe<Array<InputMaybe<PostRichtextOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllSeoArgs = {
  inherit?: Scalars['Boolean'];
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllTitleArgs = {
  filter?: InputMaybe<TitleFilter>;
  inherit?: Scalars['Boolean'];
  orderBy?: InputMaybe<Array<InputMaybe<TitleOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesBodyArgs = {
  id: Scalars['String'];
};


export type EntriesBodyRichtextArgs = {
  id: Scalars['String'];
};


export type EntriesModularPageArgs = {
  id: Scalars['String'];
};


export type EntriesPostBaseArgs = {
  id: Scalars['String'];
};


export type EntriesPostListArgs = {
  id: Scalars['String'];
};


export type EntriesPostMarkdownArgs = {
  id: Scalars['String'];
};


export type EntriesPostRichtextArgs = {
  id: Scalars['String'];
};


export type EntriesSeoArgs = {
  id: Scalars['String'];
};


export type EntriesTitleArgs = {
  id: Scalars['String'];
};

export type IBody = {
  body?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type IBodyRichtext = {
  body?: Maybe<PokRichText>;
  id: Scalars['String'];
};

export type IModularPage = {
  components?: Maybe<PostList>;
  id: Scalars['String'];
  pokko: Pokko;
};

export type IPostBase = {
  alias?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<PokMedia>;
  legacyAlias?: Maybe<Scalars['String']>;
  pokko: Pokko;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IPostList = {
  id: Scalars['String'];
};

export type IPostMarkdown = {
  alias?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<PokMedia>;
  legacyAlias?: Maybe<Scalars['String']>;
  pokko: Pokko;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IPostRichtext = {
  alias?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<PokRichText>>>;
  category?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<PokMedia>;
  legacyAlias?: Maybe<Scalars['String']>;
  pokko: Pokko;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ISeo = {
  id: Scalars['String'];
};

export type ITitle = {
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type ModularPage = IModularPage & PokEntry & {
  __typename?: 'ModularPage';
  components?: Maybe<PostList>;
  id: Scalars['String'];
  pokko: Pokko;
};

export type ModularPageCollection = {
  __typename?: 'ModularPageCollection';
  nodes: Array<Maybe<IModularPage>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Page = {
  __typename?: 'Page';
  entry?: Maybe<PokEntry>;
  entryId?: Maybe<Scalars['String']>;
  fullPath?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
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
  path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pathExact?: InputMaybe<Scalars['Boolean']>;
};

export type PokEntry = {
  id: Scalars['String'];
  pokko: Pokko;
};

export type PokMedia = {
  __typename?: 'PokMedia';
  contentType: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  size: Scalars['Int'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
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
  height?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<PokMediaPosition>;
  width?: InputMaybe<Scalars['Int']>;
};

export type PokRichText = {
  __typename?: 'PokRichText';
  body?: Maybe<Scalars['JSON']>;
  embeds?: Maybe<Array<Maybe<PokValue>>>;
};

export type PokValue = {
  id?: Maybe<Scalars['String']>;
};

export type Pokko = {
  __typename?: 'Pokko';
  created: Scalars['String'];
  id: Scalars['String'];
  model: Scalars['String'];
  modified: Scalars['String'];
  name: Scalars['String'];
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PostBase = IPostBase & ITitle & PokEntry & {
  __typename?: 'PostBase';
  alias?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<PokMedia>;
  legacyAlias?: Maybe<Scalars['String']>;
  pokko: Pokko;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PostBaseCollection = {
  __typename?: 'PostBaseCollection';
  nodes: Array<Maybe<IPostBase>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PostBaseCondition = {
  alias?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  legacyAlias?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PostBaseFilter = {
  alias?: InputMaybe<ScalarStringFilter>;
  and?: InputMaybe<Array<PostBaseFilter>>;
  category?: InputMaybe<ScalarStringFilter>;
  date?: InputMaybe<ScalarStringFilter>;
  id?: InputMaybe<ScalarIdFilter>;
  legacyAlias?: InputMaybe<ScalarStringFilter>;
  or?: InputMaybe<Array<PostBaseFilter>>;
  summary?: InputMaybe<ScalarStringFilter>;
  tags?: InputMaybe<ScalarStringFilter>;
  title?: InputMaybe<ScalarStringFilter>;
};

export enum PostBaseOrderBy {
  AliasAsc = 'ALIAS_ASC',
  AliasDesc = 'ALIAS_DESC',
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

export type PostList = IPostList & PokValue & {
  __typename?: 'PostList';
  id: Scalars['String'];
};

export type PostListCollection = {
  __typename?: 'PostListCollection';
  nodes: Array<Maybe<IPostList>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PostMarkdown = IBody & IPostBase & IPostMarkdown & ISeo & ITitle & PokEntry & {
  __typename?: 'PostMarkdown';
  alias?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<PokMedia>;
  legacyAlias?: Maybe<Scalars['String']>;
  pokko: Pokko;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PostMarkdownCollection = {
  __typename?: 'PostMarkdownCollection';
  nodes: Array<Maybe<IPostMarkdown>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PostMarkdownCondition = {
  alias?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  legacyAlias?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PostMarkdownFilter = {
  alias?: InputMaybe<ScalarStringFilter>;
  and?: InputMaybe<Array<PostMarkdownFilter>>;
  body?: InputMaybe<ScalarStringFilter>;
  category?: InputMaybe<ScalarStringFilter>;
  date?: InputMaybe<ScalarStringFilter>;
  id?: InputMaybe<ScalarIdFilter>;
  legacyAlias?: InputMaybe<ScalarStringFilter>;
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

export type PostRichtext = IPostBase & IPostRichtext & ISeo & ITitle & PokEntry & {
  __typename?: 'PostRichtext';
  alias?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<PokRichText>>>;
  category?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<PokMedia>;
  legacyAlias?: Maybe<Scalars['String']>;
  pokko: Pokko;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PostRichtextCollection = {
  __typename?: 'PostRichtextCollection';
  nodes: Array<Maybe<IPostRichtext>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PostRichtextCondition = {
  alias?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  legacyAlias?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PostRichtextFilter = {
  alias?: InputMaybe<ScalarStringFilter>;
  and?: InputMaybe<Array<PostRichtextFilter>>;
  category?: InputMaybe<ScalarStringFilter>;
  date?: InputMaybe<ScalarStringFilter>;
  id?: InputMaybe<ScalarIdFilter>;
  legacyAlias?: InputMaybe<ScalarStringFilter>;
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
  id?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySyncArgs = {
  filter?: InputMaybe<SyncCondition>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type QueryTaxonomyArgs = {
  filter?: InputMaybe<PagesCondition>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};

export type ScalarIdFilter = {
  equalTo?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  notEqualTo?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ScalarStringFilter = {
  equalTo?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  notEqualTo?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Seo = ISeo & PokValue & {
  __typename?: 'Seo';
  id: Scalars['String'];
};

export type SeoCollection = {
  __typename?: 'SeoCollection';
  nodes: Array<Maybe<ISeo>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Sync = {
  __typename?: 'Sync';
  action?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modifiedAt?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
};

export type SyncCollection = {
  __typename?: 'SyncCollection';
  nodes: Array<Maybe<Sync>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SyncCondition = {
  after?: InputMaybe<Scalars['String']>;
};

export type Title = ITitle & PokValue & {
  __typename?: 'Title';
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type TitleCollection = {
  __typename?: 'TitleCollection';
  nodes: Array<Maybe<ITitle>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TitleCondition = {
  title?: InputMaybe<Scalars['String']>;
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
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  filter?: InputMaybe<PostBaseFilter>;
}>;


export type ListPostsQuery = { __typename?: 'Query', entries?: { __typename?: 'Entries', allPostBase?: { __typename?: 'PostBaseCollection', totalCount: number, nodes: Array<{ __typename?: 'PostBase', id: string, title?: string | null | undefined, date?: string | null | undefined, summary?: string | null | undefined, category?: string | null | undefined, alias?: string | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined } | { __typename?: 'PostMarkdown', id: string, title?: string | null | undefined, date?: string | null | undefined, summary?: string | null | undefined, category?: string | null | undefined, alias?: string | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined } | { __typename?: 'PostRichtext', id: string, title?: string | null | undefined, date?: string | null | undefined, summary?: string | null | undefined, category?: string | null | undefined, alias?: string | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPrevPage: boolean } } | null | undefined } | null | undefined };

export type GetPostQueryVariables = Exact<{
  path: Array<Scalars['String']> | Scalars['String'];
  alias: Scalars['String'];
}>;


export type GetPostQuery = { __typename?: 'Query', entry?: { __typename?: 'ModularPage' } | { __typename?: 'PostBase', id: string, title?: string | null | undefined, alias?: string | null | undefined, date?: string | null | undefined, tags?: string | null | undefined, category?: string | null | undefined, summary?: string | null | undefined, image?: { __typename?: 'PokMedia', url: string, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | { __typename?: 'PostMarkdown', id: string, title?: string | null | undefined, alias?: string | null | undefined, date?: string | null | undefined, tags?: string | null | undefined, category?: string | null | undefined, summary?: string | null | undefined, body?: string | null | undefined, image?: { __typename?: 'PokMedia', url: string, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | { __typename?: 'PostRichtext', id: string, title?: string | null | undefined, alias?: string | null | undefined, date?: string | null | undefined, tags?: string | null | undefined, category?: string | null | undefined, summary?: string | null | undefined, image?: { __typename?: 'PokMedia', url: string, height?: number | null | undefined, width?: number | null | undefined } | null | undefined, bodyRich?: Array<{ __typename?: 'PokRichText', body?: any | null | undefined } | null | undefined> | null | undefined } | null | undefined, entries?: { __typename?: 'Entries', allPostBase?: { __typename?: 'PostBaseCollection', nodes: Array<{ __typename?: 'PostBase', pokko: { __typename?: 'Pokko', path?: Array<string | null | undefined> | null | undefined } } | { __typename?: 'PostMarkdown', pokko: { __typename?: 'Pokko', path?: Array<string | null | undefined> | null | undefined } } | { __typename?: 'PostRichtext', pokko: { __typename?: 'Pokko', path?: Array<string | null | undefined> | null | undefined } } | null | undefined> } | null | undefined } | null | undefined };

export type PostListingFragment = { __typename?: 'PostBaseCollection', nodes: Array<{ __typename?: 'PostBase', id: string, title?: string | null | undefined, date?: string | null | undefined, summary?: string | null | undefined, category?: string | null | undefined, alias?: string | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined } | { __typename?: 'PostMarkdown', id: string, title?: string | null | undefined, date?: string | null | undefined, summary?: string | null | undefined, category?: string | null | undefined, alias?: string | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined } | { __typename?: 'PostRichtext', id: string, title?: string | null | undefined, date?: string | null | undefined, summary?: string | null | undefined, category?: string | null | undefined, alias?: string | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined } | null | undefined>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPrevPage: boolean } };

type PostSummary_PostBase_Fragment = { __typename?: 'PostBase', id: string, title?: string | null | undefined, date?: string | null | undefined, summary?: string | null | undefined, category?: string | null | undefined, alias?: string | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined };

type PostSummary_PostMarkdown_Fragment = { __typename?: 'PostMarkdown', id: string, title?: string | null | undefined, date?: string | null | undefined, summary?: string | null | undefined, category?: string | null | undefined, alias?: string | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined };

type PostSummary_PostRichtext_Fragment = { __typename?: 'PostRichtext', id: string, title?: string | null | undefined, date?: string | null | undefined, summary?: string | null | undefined, category?: string | null | undefined, alias?: string | null | undefined, image?: { __typename?: 'PokMedia', url: string } | null | undefined };

export type PostSummaryFragment = PostSummary_PostBase_Fragment | PostSummary_PostMarkdown_Fragment | PostSummary_PostRichtext_Fragment;

export type PostCountQueryVariables = Exact<{ [key: string]: never; }>;


export type PostCountQuery = { __typename?: 'Query', entries?: { __typename?: 'Entries', allPostBase?: { __typename?: 'PostBaseCollection', totalCount: number } | null | undefined } | null | undefined };

export type RichTextFragment = { __typename?: 'PokRichText', body?: any | null | undefined };

export const PostSummaryFragmentDoc = gql`
    fragment PostSummary on IPostBase {
  id
  title
  date
  summary
  category
  alias
  image {
    url(process: {height: 200, width: 400, position: CENTRE, fit: COVER})
  }
}
    `;
export const PostListingFragmentDoc = gql`
    fragment PostListing on PostBaseCollection {
  nodes {
    ...PostSummary
  }
  pageInfo {
    hasNextPage
    hasPrevPage
  }
}
    ${PostSummaryFragmentDoc}`;
export const RichTextFragmentDoc = gql`
    fragment RichText on PokRichText {
  body
}
    `;
export const ListPostsDocument = gql`
    query ListPosts($skip: Int! = 0, $take: Int! = 10, $filter: PostBaseFilter) {
  entries {
    allPostBase(
      orderBy: DATE_DESC
      skip: $skip
      take: $take
      inherit: true
      filter: $filter
    ) {
      totalCount
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
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useListPostsQuery(baseOptions?: Apollo.QueryHookOptions<ListPostsQuery, ListPostsQueryVariables>) {
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
    ... on IPostBase {
      id
      title
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
    ... on PostMarkdown {
      body
    }
    ... on PostRichtext {
      bodyRich: body {
        ...RichText
      }
    }
  }
  entries {
    allPostBase(inherit: true, filter: {legacyAlias: {equalTo: $alias}}) {
      nodes {
        pokko {
          path
        }
      }
    }
  }
}
    ${RichTextFragmentDoc}`;

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
    allPostBase(inherit: true) {
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
      "PostMarkdown"
    ],
    "IBodyRichtext": [
      "BodyRichtext"
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
    