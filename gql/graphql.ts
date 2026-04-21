/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
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
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date without time information */
  Date: { input: string; output: string; }
  /** A date and time */
  Datetime: { input: string; output: string; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: string; output: string; }
  /** A universally unique identifier */
  UUID: { input: string; output: string; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `blog_comments` collection */
  deleteFromblog_commentsCollection: Blog_CommentsDeleteResponse;
  /** Deletes zero or more records from the `blogs` collection */
  deleteFromblogsCollection: BlogsDeleteResponse;
  /** Deletes zero or more records from the `cart` collection */
  deleteFromcartCollection: CartDeleteResponse;
  /** Deletes zero or more records from the `course_sections` collection */
  deleteFromcourse_sectionsCollection: Course_SectionsDeleteResponse;
  /** Deletes zero or more records from the `courses` collection */
  deleteFromcoursesCollection: CoursesDeleteResponse;
  /** Deletes zero or more records from the `enrollments` collection */
  deleteFromenrollmentsCollection: EnrollmentsDeleteResponse;
  /** Deletes zero or more records from the `lesson_progress` collection */
  deleteFromlesson_progressCollection: Lesson_ProgressDeleteResponse;
  /** Deletes zero or more records from the `lessons` collection */
  deleteFromlessonsCollection: LessonsDeleteResponse;
  /** Deletes zero or more records from the `notifications` collection */
  deleteFromnotificationsCollection: NotificationsDeleteResponse;
  /** Deletes zero or more records from the `order_items` collection */
  deleteFromorder_itemsCollection: Order_ItemsDeleteResponse;
  /** Deletes zero or more records from the `orders` collection */
  deleteFromordersCollection: OrdersDeleteResponse;
  /** Deletes zero or more records from the `profiles` collection */
  deleteFromprofilesCollection: ProfilesDeleteResponse;
  /** Deletes zero or more records from the `user_profiles` collection */
  deleteFromuser_profilesCollection: User_ProfilesDeleteResponse;
  /** Deletes zero or more records from the `wishlists` collection */
  deleteFromwishlistsCollection: WishlistsDeleteResponse;
  /** Adds one or more `blog_comments` records to the collection */
  insertIntoblog_commentsCollection?: Maybe<Blog_CommentsInsertResponse>;
  /** Adds one or more `blogs` records to the collection */
  insertIntoblogsCollection?: Maybe<BlogsInsertResponse>;
  /** Adds one or more `cart` records to the collection */
  insertIntocartCollection?: Maybe<CartInsertResponse>;
  /** Adds one or more `course_sections` records to the collection */
  insertIntocourse_sectionsCollection?: Maybe<Course_SectionsInsertResponse>;
  /** Adds one or more `courses` records to the collection */
  insertIntocoursesCollection?: Maybe<CoursesInsertResponse>;
  /** Adds one or more `enrollments` records to the collection */
  insertIntoenrollmentsCollection?: Maybe<EnrollmentsInsertResponse>;
  /** Adds one or more `lesson_progress` records to the collection */
  insertIntolesson_progressCollection?: Maybe<Lesson_ProgressInsertResponse>;
  /** Adds one or more `lessons` records to the collection */
  insertIntolessonsCollection?: Maybe<LessonsInsertResponse>;
  /** Adds one or more `notifications` records to the collection */
  insertIntonotificationsCollection?: Maybe<NotificationsInsertResponse>;
  /** Adds one or more `order_items` records to the collection */
  insertIntoorder_itemsCollection?: Maybe<Order_ItemsInsertResponse>;
  /** Adds one or more `orders` records to the collection */
  insertIntoordersCollection?: Maybe<OrdersInsertResponse>;
  /** Adds one or more `profiles` records to the collection */
  insertIntoprofilesCollection?: Maybe<ProfilesInsertResponse>;
  /** Adds one or more `user_profiles` records to the collection */
  insertIntouser_profilesCollection?: Maybe<User_ProfilesInsertResponse>;
  /** Adds one or more `wishlists` records to the collection */
  insertIntowishlistsCollection?: Maybe<WishlistsInsertResponse>;
  /** Updates zero or more records in the `blog_comments` collection */
  updateblog_commentsCollection: Blog_CommentsUpdateResponse;
  /** Updates zero or more records in the `blogs` collection */
  updateblogsCollection: BlogsUpdateResponse;
  /** Updates zero or more records in the `cart` collection */
  updatecartCollection: CartUpdateResponse;
  /** Updates zero or more records in the `course_sections` collection */
  updatecourse_sectionsCollection: Course_SectionsUpdateResponse;
  /** Updates zero or more records in the `courses` collection */
  updatecoursesCollection: CoursesUpdateResponse;
  /** Updates zero or more records in the `enrollments` collection */
  updateenrollmentsCollection: EnrollmentsUpdateResponse;
  /** Updates zero or more records in the `lesson_progress` collection */
  updatelesson_progressCollection: Lesson_ProgressUpdateResponse;
  /** Updates zero or more records in the `lessons` collection */
  updatelessonsCollection: LessonsUpdateResponse;
  /** Updates zero or more records in the `notifications` collection */
  updatenotificationsCollection: NotificationsUpdateResponse;
  /** Updates zero or more records in the `order_items` collection */
  updateorder_itemsCollection: Order_ItemsUpdateResponse;
  /** Updates zero or more records in the `orders` collection */
  updateordersCollection: OrdersUpdateResponse;
  /** Updates zero or more records in the `profiles` collection */
  updateprofilesCollection: ProfilesUpdateResponse;
  /** Updates zero or more records in the `user_profiles` collection */
  updateuser_profilesCollection: User_ProfilesUpdateResponse;
  /** Updates zero or more records in the `wishlists` collection */
  updatewishlistsCollection: WishlistsUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromblog_CommentsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Blog_CommentsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromblogsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<BlogsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcartCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CartFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcourse_SectionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Course_SectionsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcoursesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CoursesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromenrollmentsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<EnrollmentsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromlesson_ProgressCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Lesson_ProgressFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromlessonsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<LessonsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromnotificationsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<NotificationsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromorder_ItemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Order_ItemsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromordersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrdersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromprofilesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfilesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromuser_ProfilesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<User_ProfilesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromwishlistsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<WishlistsFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoblog_CommentsCollectionArgs = {
  objects: Array<Blog_CommentsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoblogsCollectionArgs = {
  objects: Array<BlogsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocartCollectionArgs = {
  objects: Array<CartInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocourse_SectionsCollectionArgs = {
  objects: Array<Course_SectionsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocoursesCollectionArgs = {
  objects: Array<CoursesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoenrollmentsCollectionArgs = {
  objects: Array<EnrollmentsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntolesson_ProgressCollectionArgs = {
  objects: Array<Lesson_ProgressInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntolessonsCollectionArgs = {
  objects: Array<LessonsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntonotificationsCollectionArgs = {
  objects: Array<NotificationsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoorder_ItemsCollectionArgs = {
  objects: Array<Order_ItemsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoordersCollectionArgs = {
  objects: Array<OrdersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoprofilesCollectionArgs = {
  objects: Array<ProfilesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntouser_ProfilesCollectionArgs = {
  objects: Array<User_ProfilesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntowishlistsCollectionArgs = {
  objects: Array<WishlistsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateblog_CommentsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Blog_CommentsFilter>;
  set: Blog_CommentsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateblogsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<BlogsFilter>;
  set: BlogsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecartCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CartFilter>;
  set: CartUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecourse_SectionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Course_SectionsFilter>;
  set: Course_SectionsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecoursesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CoursesFilter>;
  set: CoursesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateenrollmentsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<EnrollmentsFilter>;
  set: EnrollmentsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatelesson_ProgressCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Lesson_ProgressFilter>;
  set: Lesson_ProgressUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatelessonsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<LessonsFilter>;
  set: LessonsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatenotificationsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<NotificationsFilter>;
  set: NotificationsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateorder_ItemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Order_ItemsFilter>;
  set: Order_ItemsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateordersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrdersFilter>;
  set: OrdersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateprofilesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfilesFilter>;
  set: ProfilesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateuser_ProfilesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<User_ProfilesFilter>;
  set: User_ProfilesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatewishlistsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<WishlistsFilter>;
  set: WishlistsUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `blog_comments` */
  blog_commentsCollection?: Maybe<Blog_CommentsConnection>;
  /** A pagable collection of type `blogs` */
  blogsCollection?: Maybe<BlogsConnection>;
  /** A pagable collection of type `cart` */
  cartCollection?: Maybe<CartConnection>;
  /** A pagable collection of type `course_sections` */
  course_sectionsCollection?: Maybe<Course_SectionsConnection>;
  /** A pagable collection of type `courses` */
  coursesCollection?: Maybe<CoursesConnection>;
  /** A pagable collection of type `enrollments` */
  enrollmentsCollection?: Maybe<EnrollmentsConnection>;
  /** A pagable collection of type `lesson_progress` */
  lesson_progressCollection?: Maybe<Lesson_ProgressConnection>;
  /** A pagable collection of type `lessons` */
  lessonsCollection?: Maybe<LessonsConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `notifications` */
  notificationsCollection?: Maybe<NotificationsConnection>;
  /** A pagable collection of type `order_items` */
  order_itemsCollection?: Maybe<Order_ItemsConnection>;
  /** A pagable collection of type `orders` */
  ordersCollection?: Maybe<OrdersConnection>;
  /** A pagable collection of type `profiles` */
  profilesCollection?: Maybe<ProfilesConnection>;
  /** A pagable collection of type `user_profiles` */
  user_profilesCollection?: Maybe<User_ProfilesConnection>;
  /** A pagable collection of type `wishlists` */
  wishlistsCollection?: Maybe<WishlistsConnection>;
};


/** The root type for querying data */
export type QueryBlog_CommentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Blog_CommentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Blog_CommentsOrderBy>>;
};


/** The root type for querying data */
export type QueryBlogsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BlogsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlogsOrderBy>>;
};


/** The root type for querying data */
export type QueryCartCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CartFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CartOrderBy>>;
};


/** The root type for querying data */
export type QueryCourse_SectionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Course_SectionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Course_SectionsOrderBy>>;
};


/** The root type for querying data */
export type QueryCoursesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CoursesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoursesOrderBy>>;
};


/** The root type for querying data */
export type QueryEnrollmentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EnrollmentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EnrollmentsOrderBy>>;
};


/** The root type for querying data */
export type QueryLesson_ProgressCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Lesson_ProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Lesson_ProgressOrderBy>>;
};


/** The root type for querying data */
export type QueryLessonsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<LessonsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LessonsOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryNotificationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<NotificationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NotificationsOrderBy>>;
};


/** The root type for querying data */
export type QueryOrder_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Order_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Order_ItemsOrderBy>>;
};


/** The root type for querying data */
export type QueryOrdersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrdersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};


/** The root type for querying data */
export type QueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProfilesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfilesOrderBy>>;
};


/** The root type for querying data */
export type QueryUser_ProfilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_ProfilesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_ProfilesOrderBy>>;
};


/** The root type for querying data */
export type QueryWishlistsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WishlistsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WishlistsOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type Blog_Comments = Node & {
  __typename?: 'blog_comments';
  blog_comments?: Maybe<Blog_Comments>;
  blog_commentsCollection?: Maybe<Blog_CommentsConnection>;
  blog_id?: Maybe<Scalars['UUID']['output']>;
  blogs?: Maybe<Blogs>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  parent_id?: Maybe<Scalars['UUID']['output']>;
  user_id?: Maybe<Scalars['UUID']['output']>;
};


export type Blog_CommentsBlog_CommentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Blog_CommentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Blog_CommentsOrderBy>>;
};

export type Blog_CommentsConnection = {
  __typename?: 'blog_commentsConnection';
  edges: Array<Blog_CommentsEdge>;
  pageInfo: PageInfo;
};

export type Blog_CommentsDeleteResponse = {
  __typename?: 'blog_commentsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Blog_Comments>;
};

export type Blog_CommentsEdge = {
  __typename?: 'blog_commentsEdge';
  cursor: Scalars['String']['output'];
  node: Blog_Comments;
};

export type Blog_CommentsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Blog_CommentsFilter>>;
  blog_id?: InputMaybe<UuidFilter>;
  content?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Blog_CommentsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Blog_CommentsFilter>>;
  parent_id?: InputMaybe<UuidFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type Blog_CommentsInsertInput = {
  blog_id?: InputMaybe<Scalars['UUID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  parent_id?: InputMaybe<Scalars['UUID']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Blog_CommentsInsertResponse = {
  __typename?: 'blog_commentsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Blog_Comments>;
};

export type Blog_CommentsOrderBy = {
  blog_id?: InputMaybe<OrderByDirection>;
  content?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  parent_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Blog_CommentsUpdateInput = {
  blog_id?: InputMaybe<Scalars['UUID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  parent_id?: InputMaybe<Scalars['UUID']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Blog_CommentsUpdateResponse = {
  __typename?: 'blog_commentsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Blog_Comments>;
};

export type Blogs = Node & {
  __typename?: 'blogs';
  author_id?: Maybe<Scalars['UUID']['output']>;
  blog_commentsCollection?: Maybe<Blog_CommentsConnection>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  published_at?: Maybe<Scalars['Datetime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail_url?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  view_count?: Maybe<Scalars['Int']['output']>;
};


export type BlogsBlog_CommentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Blog_CommentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Blog_CommentsOrderBy>>;
};

export type BlogsConnection = {
  __typename?: 'blogsConnection';
  edges: Array<BlogsEdge>;
  pageInfo: PageInfo;
};

export type BlogsDeleteResponse = {
  __typename?: 'blogsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Blogs>;
};

export type BlogsEdge = {
  __typename?: 'blogsEdge';
  cursor: Scalars['String']['output'];
  node: Blogs;
};

export type BlogsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<BlogsFilter>>;
  author_id?: InputMaybe<UuidFilter>;
  content?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<BlogsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<BlogsFilter>>;
  published_at?: InputMaybe<DatetimeFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  thumbnail_url?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  view_count?: InputMaybe<IntFilter>;
};

export type BlogsInsertInput = {
  author_id?: InputMaybe<Scalars['UUID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  published_at?: InputMaybe<Scalars['Datetime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  thumbnail_url?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  view_count?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogsInsertResponse = {
  __typename?: 'blogsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Blogs>;
};

export type BlogsOrderBy = {
  author_id?: InputMaybe<OrderByDirection>;
  content?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  published_at?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  thumbnail_url?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  view_count?: InputMaybe<OrderByDirection>;
};

export type BlogsUpdateInput = {
  author_id?: InputMaybe<Scalars['UUID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  published_at?: InputMaybe<Scalars['Datetime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  thumbnail_url?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  view_count?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogsUpdateResponse = {
  __typename?: 'blogsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Blogs>;
};

export type Cart = Node & {
  __typename?: 'cart';
  added_at?: Maybe<Scalars['Datetime']['output']>;
  course_id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  user_id: Scalars['UUID']['output'];
};

export type CartConnection = {
  __typename?: 'cartConnection';
  edges: Array<CartEdge>;
  pageInfo: PageInfo;
};

export type CartDeleteResponse = {
  __typename?: 'cartDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cart>;
};

export type CartEdge = {
  __typename?: 'cartEdge';
  cursor: Scalars['String']['output'];
  node: Cart;
};

export type CartFilter = {
  added_at?: InputMaybe<DatetimeFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CartFilter>>;
  course_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CartFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CartFilter>>;
  user_id?: InputMaybe<UuidFilter>;
};

export type CartInsertInput = {
  added_at?: InputMaybe<Scalars['Datetime']['input']>;
  course_id?: InputMaybe<Scalars['UUID']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type CartInsertResponse = {
  __typename?: 'cartInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cart>;
};

export type CartOrderBy = {
  added_at?: InputMaybe<OrderByDirection>;
  course_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type CartUpdateInput = {
  added_at?: InputMaybe<Scalars['Datetime']['input']>;
  course_id?: InputMaybe<Scalars['UUID']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type CartUpdateResponse = {
  __typename?: 'cartUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cart>;
};

export type Course_Sections = Node & {
  __typename?: 'course_sections';
  course_id?: Maybe<Scalars['UUID']['output']>;
  courses?: Maybe<Courses>;
  id: Scalars['UUID']['output'];
  lessonsCollection?: Maybe<LessonsConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  order_index?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Course_SectionsLessonsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<LessonsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LessonsOrderBy>>;
};

export type Course_SectionsConnection = {
  __typename?: 'course_sectionsConnection';
  edges: Array<Course_SectionsEdge>;
  pageInfo: PageInfo;
};

export type Course_SectionsDeleteResponse = {
  __typename?: 'course_sectionsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Course_Sections>;
};

export type Course_SectionsEdge = {
  __typename?: 'course_sectionsEdge';
  cursor: Scalars['String']['output'];
  node: Course_Sections;
};

export type Course_SectionsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Course_SectionsFilter>>;
  course_id?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Course_SectionsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Course_SectionsFilter>>;
  order_index?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type Course_SectionsInsertInput = {
  course_id?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  order_index?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Course_SectionsInsertResponse = {
  __typename?: 'course_sectionsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Course_Sections>;
};

export type Course_SectionsOrderBy = {
  course_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  order_index?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
};

export type Course_SectionsUpdateInput = {
  course_id?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  order_index?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Course_SectionsUpdateResponse = {
  __typename?: 'course_sectionsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Course_Sections>;
};

export type Courses = Node & {
  __typename?: 'courses';
  course_sectionsCollection?: Maybe<Course_SectionsConnection>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discount_price?: Maybe<Scalars['BigFloat']['output']>;
  enrollmentsCollection?: Maybe<EnrollmentsConnection>;
  id: Scalars['UUID']['output'];
  instructor_id?: Maybe<Scalars['UUID']['output']>;
  is_free?: Maybe<Scalars['Boolean']['output']>;
  lessonsCollection?: Maybe<LessonsConnection>;
  level?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  order_itemsCollection?: Maybe<Order_ItemsConnection>;
  preview_video_url?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['BigFloat']['output']>;
  published_at?: Maybe<Scalars['Datetime']['output']>;
  rating_avg?: Maybe<Scalars['Float']['output']>;
  rating_count?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  thumbnail_url?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  total_duration?: Maybe<Scalars['Int']['output']>;
  total_lessons?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type CoursesCourse_SectionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Course_SectionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Course_SectionsOrderBy>>;
};


export type CoursesEnrollmentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EnrollmentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EnrollmentsOrderBy>>;
};


export type CoursesLessonsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<LessonsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LessonsOrderBy>>;
};


export type CoursesOrder_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Order_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Order_ItemsOrderBy>>;
};

export type CoursesConnection = {
  __typename?: 'coursesConnection';
  edges: Array<CoursesEdge>;
  pageInfo: PageInfo;
};

export type CoursesDeleteResponse = {
  __typename?: 'coursesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Courses>;
};

export type CoursesEdge = {
  __typename?: 'coursesEdge';
  cursor: Scalars['String']['output'];
  node: Courses;
};

export type CoursesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CoursesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  discount_price?: InputMaybe<BigFloatFilter>;
  id?: InputMaybe<UuidFilter>;
  instructor_id?: InputMaybe<UuidFilter>;
  is_free?: InputMaybe<BooleanFilter>;
  level?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CoursesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CoursesFilter>>;
  preview_video_url?: InputMaybe<StringFilter>;
  price?: InputMaybe<BigFloatFilter>;
  published_at?: InputMaybe<DatetimeFilter>;
  rating_avg?: InputMaybe<FloatFilter>;
  rating_count?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  thumbnail_url?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  total_duration?: InputMaybe<IntFilter>;
  total_lessons?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type CoursesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount_price?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  instructor_id?: InputMaybe<Scalars['UUID']['input']>;
  is_free?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  preview_video_url?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['BigFloat']['input']>;
  published_at?: InputMaybe<Scalars['Datetime']['input']>;
  rating_avg?: InputMaybe<Scalars['Float']['input']>;
  rating_count?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  thumbnail_url?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  total_duration?: InputMaybe<Scalars['Int']['input']>;
  total_lessons?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CoursesInsertResponse = {
  __typename?: 'coursesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Courses>;
};

export type CoursesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  discount_price?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  instructor_id?: InputMaybe<OrderByDirection>;
  is_free?: InputMaybe<OrderByDirection>;
  level?: InputMaybe<OrderByDirection>;
  preview_video_url?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
  published_at?: InputMaybe<OrderByDirection>;
  rating_avg?: InputMaybe<OrderByDirection>;
  rating_count?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  thumbnail_url?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  total_duration?: InputMaybe<OrderByDirection>;
  total_lessons?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type CoursesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount_price?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  instructor_id?: InputMaybe<Scalars['UUID']['input']>;
  is_free?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  preview_video_url?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['BigFloat']['input']>;
  published_at?: InputMaybe<Scalars['Datetime']['input']>;
  rating_avg?: InputMaybe<Scalars['Float']['input']>;
  rating_count?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  thumbnail_url?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  total_duration?: InputMaybe<Scalars['Int']['input']>;
  total_lessons?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CoursesUpdateResponse = {
  __typename?: 'coursesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Courses>;
};

export type Enrollments = Node & {
  __typename?: 'enrollments';
  completed?: Maybe<Scalars['Boolean']['output']>;
  completed_at?: Maybe<Scalars['Datetime']['output']>;
  course_id?: Maybe<Scalars['UUID']['output']>;
  courses?: Maybe<Courses>;
  enrolled_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  progress_percent?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['UUID']['output']>;
};

export type EnrollmentsConnection = {
  __typename?: 'enrollmentsConnection';
  edges: Array<EnrollmentsEdge>;
  pageInfo: PageInfo;
};

export type EnrollmentsDeleteResponse = {
  __typename?: 'enrollmentsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Enrollments>;
};

export type EnrollmentsEdge = {
  __typename?: 'enrollmentsEdge';
  cursor: Scalars['String']['output'];
  node: Enrollments;
};

export type EnrollmentsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<EnrollmentsFilter>>;
  completed?: InputMaybe<BooleanFilter>;
  completed_at?: InputMaybe<DatetimeFilter>;
  course_id?: InputMaybe<UuidFilter>;
  enrolled_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<EnrollmentsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<EnrollmentsFilter>>;
  progress_percent?: InputMaybe<FloatFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type EnrollmentsInsertInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  completed_at?: InputMaybe<Scalars['Datetime']['input']>;
  course_id?: InputMaybe<Scalars['UUID']['input']>;
  enrolled_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  progress_percent?: InputMaybe<Scalars['Float']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type EnrollmentsInsertResponse = {
  __typename?: 'enrollmentsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Enrollments>;
};

export type EnrollmentsOrderBy = {
  completed?: InputMaybe<OrderByDirection>;
  completed_at?: InputMaybe<OrderByDirection>;
  course_id?: InputMaybe<OrderByDirection>;
  enrolled_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  progress_percent?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type EnrollmentsUpdateInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  completed_at?: InputMaybe<Scalars['Datetime']['input']>;
  course_id?: InputMaybe<Scalars['UUID']['input']>;
  enrolled_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  progress_percent?: InputMaybe<Scalars['Float']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type EnrollmentsUpdateResponse = {
  __typename?: 'enrollmentsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Enrollments>;
};

export type Lesson_Progress = Node & {
  __typename?: 'lesson_progress';
  id: Scalars['UUID']['output'];
  is_completed?: Maybe<Scalars['Boolean']['output']>;
  lesson_id?: Maybe<Scalars['UUID']['output']>;
  lessons?: Maybe<Lessons>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  user_id?: Maybe<Scalars['UUID']['output']>;
  watch_time?: Maybe<Scalars['Int']['output']>;
};

export type Lesson_ProgressConnection = {
  __typename?: 'lesson_progressConnection';
  edges: Array<Lesson_ProgressEdge>;
  pageInfo: PageInfo;
};

export type Lesson_ProgressDeleteResponse = {
  __typename?: 'lesson_progressDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Lesson_Progress>;
};

export type Lesson_ProgressEdge = {
  __typename?: 'lesson_progressEdge';
  cursor: Scalars['String']['output'];
  node: Lesson_Progress;
};

export type Lesson_ProgressFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Lesson_ProgressFilter>>;
  id?: InputMaybe<UuidFilter>;
  is_completed?: InputMaybe<BooleanFilter>;
  lesson_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Lesson_ProgressFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Lesson_ProgressFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
  user_id?: InputMaybe<UuidFilter>;
  watch_time?: InputMaybe<IntFilter>;
};

export type Lesson_ProgressInsertInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  lesson_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
  watch_time?: InputMaybe<Scalars['Int']['input']>;
};

export type Lesson_ProgressInsertResponse = {
  __typename?: 'lesson_progressInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Lesson_Progress>;
};

export type Lesson_ProgressOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  is_completed?: InputMaybe<OrderByDirection>;
  lesson_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
  watch_time?: InputMaybe<OrderByDirection>;
};

export type Lesson_ProgressUpdateInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  lesson_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
  watch_time?: InputMaybe<Scalars['Int']['input']>;
};

export type Lesson_ProgressUpdateResponse = {
  __typename?: 'lesson_progressUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Lesson_Progress>;
};

export type Lessons = Node & {
  __typename?: 'lessons';
  content?: Maybe<Scalars['String']['output']>;
  course_id?: Maybe<Scalars['UUID']['output']>;
  course_sections?: Maybe<Course_Sections>;
  courses?: Maybe<Courses>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  id: Scalars['UUID']['output'];
  is_preview?: Maybe<Scalars['Boolean']['output']>;
  lesson_progressCollection?: Maybe<Lesson_ProgressConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  order_index?: Maybe<Scalars['Int']['output']>;
  section_id?: Maybe<Scalars['UUID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  video_url?: Maybe<Scalars['String']['output']>;
};


export type LessonsLesson_ProgressCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Lesson_ProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Lesson_ProgressOrderBy>>;
};

export type LessonsConnection = {
  __typename?: 'lessonsConnection';
  edges: Array<LessonsEdge>;
  pageInfo: PageInfo;
};

export type LessonsDeleteResponse = {
  __typename?: 'lessonsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Lessons>;
};

export type LessonsEdge = {
  __typename?: 'lessonsEdge';
  cursor: Scalars['String']['output'];
  node: Lessons;
};

export type LessonsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<LessonsFilter>>;
  content?: InputMaybe<StringFilter>;
  course_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  duration?: InputMaybe<IntFilter>;
  id?: InputMaybe<UuidFilter>;
  is_preview?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<LessonsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<LessonsFilter>>;
  order_index?: InputMaybe<IntFilter>;
  section_id?: InputMaybe<UuidFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  video_url?: InputMaybe<StringFilter>;
};

export type LessonsInsertInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  course_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_preview?: InputMaybe<Scalars['Boolean']['input']>;
  order_index?: InputMaybe<Scalars['Int']['input']>;
  section_id?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  video_url?: InputMaybe<Scalars['String']['input']>;
};

export type LessonsInsertResponse = {
  __typename?: 'lessonsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Lessons>;
};

export type LessonsOrderBy = {
  content?: InputMaybe<OrderByDirection>;
  course_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  duration?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_preview?: InputMaybe<OrderByDirection>;
  order_index?: InputMaybe<OrderByDirection>;
  section_id?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  video_url?: InputMaybe<OrderByDirection>;
};

export type LessonsUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  course_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_preview?: InputMaybe<Scalars['Boolean']['input']>;
  order_index?: InputMaybe<Scalars['Int']['input']>;
  section_id?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  video_url?: InputMaybe<Scalars['String']['input']>;
};

export type LessonsUpdateResponse = {
  __typename?: 'lessonsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Lessons>;
};

export type Notifications = Node & {
  __typename?: 'notifications';
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  is_read?: Maybe<Scalars['Boolean']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['UUID']['output']>;
};

export type NotificationsConnection = {
  __typename?: 'notificationsConnection';
  edges: Array<NotificationsEdge>;
  pageInfo: PageInfo;
};

export type NotificationsDeleteResponse = {
  __typename?: 'notificationsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Notifications>;
};

export type NotificationsEdge = {
  __typename?: 'notificationsEdge';
  cursor: Scalars['String']['output'];
  node: Notifications;
};

export type NotificationsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<NotificationsFilter>>;
  content?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  is_read?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<NotificationsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<NotificationsFilter>>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type NotificationsInsertInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type NotificationsInsertResponse = {
  __typename?: 'notificationsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Notifications>;
};

export type NotificationsOrderBy = {
  content?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_read?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type NotificationsUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type NotificationsUpdateResponse = {
  __typename?: 'notificationsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Notifications>;
};

export type Order_Items = Node & {
  __typename?: 'order_items';
  course_id?: Maybe<Scalars['UUID']['output']>;
  courses?: Maybe<Courses>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  order_id?: Maybe<Scalars['UUID']['output']>;
  orders?: Maybe<Orders>;
  price?: Maybe<Scalars['BigFloat']['output']>;
};

export type Order_ItemsConnection = {
  __typename?: 'order_itemsConnection';
  edges: Array<Order_ItemsEdge>;
  pageInfo: PageInfo;
};

export type Order_ItemsDeleteResponse = {
  __typename?: 'order_itemsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Order_Items>;
};

export type Order_ItemsEdge = {
  __typename?: 'order_itemsEdge';
  cursor: Scalars['String']['output'];
  node: Order_Items;
};

export type Order_ItemsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Order_ItemsFilter>>;
  course_id?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Order_ItemsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Order_ItemsFilter>>;
  order_id?: InputMaybe<UuidFilter>;
  price?: InputMaybe<BigFloatFilter>;
};

export type Order_ItemsInsertInput = {
  course_id?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  order_id?: InputMaybe<Scalars['UUID']['input']>;
  price?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type Order_ItemsInsertResponse = {
  __typename?: 'order_itemsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Order_Items>;
};

export type Order_ItemsOrderBy = {
  course_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  order_id?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
};

export type Order_ItemsUpdateInput = {
  course_id?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  order_id?: InputMaybe<Scalars['UUID']['input']>;
  price?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type Order_ItemsUpdateResponse = {
  __typename?: 'order_itemsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Order_Items>;
};

export type Orders = Node & {
  __typename?: 'orders';
  created_at?: Maybe<Scalars['Datetime']['output']>;
  discount_amount?: Maybe<Scalars['BigFloat']['output']>;
  final_amount?: Maybe<Scalars['BigFloat']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  order_itemsCollection?: Maybe<Order_ItemsConnection>;
  paid_at?: Maybe<Scalars['Datetime']['output']>;
  payment_method?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total_amount?: Maybe<Scalars['BigFloat']['output']>;
  user_id?: Maybe<Scalars['UUID']['output']>;
};


export type OrdersOrder_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Order_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Order_ItemsOrderBy>>;
};

export type OrdersConnection = {
  __typename?: 'ordersConnection';
  edges: Array<OrdersEdge>;
  pageInfo: PageInfo;
};

export type OrdersDeleteResponse = {
  __typename?: 'ordersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Orders>;
};

export type OrdersEdge = {
  __typename?: 'ordersEdge';
  cursor: Scalars['String']['output'];
  node: Orders;
};

export type OrdersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OrdersFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  discount_amount?: InputMaybe<BigFloatFilter>;
  final_amount?: InputMaybe<BigFloatFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<OrdersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OrdersFilter>>;
  paid_at?: InputMaybe<DatetimeFilter>;
  payment_method?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  total_amount?: InputMaybe<BigFloatFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type OrdersInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  discount_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  final_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  paid_at?: InputMaybe<Scalars['Datetime']['input']>;
  payment_method?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrdersInsertResponse = {
  __typename?: 'ordersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Orders>;
};

export type OrdersOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  discount_amount?: InputMaybe<OrderByDirection>;
  final_amount?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  paid_at?: InputMaybe<OrderByDirection>;
  payment_method?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  total_amount?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type OrdersUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  discount_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  final_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  paid_at?: InputMaybe<Scalars['Datetime']['input']>;
  payment_method?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrdersUpdateResponse = {
  __typename?: 'ordersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Orders>;
};

export type Profiles = Node & {
  __typename?: 'profiles';
  avatar_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type ProfilesConnection = {
  __typename?: 'profilesConnection';
  edges: Array<ProfilesEdge>;
  pageInfo: PageInfo;
};

export type ProfilesDeleteResponse = {
  __typename?: 'profilesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesEdge = {
  __typename?: 'profilesEdge';
  cursor: Scalars['String']['output'];
  node: Profiles;
};

export type ProfilesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProfilesFilter>>;
  avatar_url?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  full_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProfilesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProfilesFilter>>;
  phone?: InputMaybe<StringFilter>;
  role?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type ProfilesInsertInput = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ProfilesInsertResponse = {
  __typename?: 'profilesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesOrderBy = {
  avatar_url?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  full_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  phone?: InputMaybe<OrderByDirection>;
  role?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type ProfilesUpdateInput = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ProfilesUpdateResponse = {
  __typename?: 'profilesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type User_Profiles = Node & {
  __typename?: 'user_profiles';
  address?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  dob?: Maybe<Scalars['Date']['output']>;
  facebook_url?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  linkedin_url?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  user_id: Scalars['UUID']['output'];
  website?: Maybe<Scalars['String']['output']>;
  youtube_url?: Maybe<Scalars['String']['output']>;
};

export type User_ProfilesConnection = {
  __typename?: 'user_profilesConnection';
  edges: Array<User_ProfilesEdge>;
  pageInfo: PageInfo;
};

export type User_ProfilesDeleteResponse = {
  __typename?: 'user_profilesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Profiles>;
};

export type User_ProfilesEdge = {
  __typename?: 'user_profilesEdge';
  cursor: Scalars['String']['output'];
  node: User_Profiles;
};

export type User_ProfilesFilter = {
  address?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<User_ProfilesFilter>>;
  bio?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  dob?: InputMaybe<DateFilter>;
  facebook_url?: InputMaybe<StringFilter>;
  gender?: InputMaybe<StringFilter>;
  linkedin_url?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<User_ProfilesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<User_ProfilesFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
  user_id?: InputMaybe<UuidFilter>;
  website?: InputMaybe<StringFilter>;
  youtube_url?: InputMaybe<StringFilter>;
};

export type User_ProfilesInsertInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  facebook_url?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  linkedin_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  youtube_url?: InputMaybe<Scalars['String']['input']>;
};

export type User_ProfilesInsertResponse = {
  __typename?: 'user_profilesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Profiles>;
};

export type User_ProfilesOrderBy = {
  address?: InputMaybe<OrderByDirection>;
  bio?: InputMaybe<OrderByDirection>;
  city?: InputMaybe<OrderByDirection>;
  country?: InputMaybe<OrderByDirection>;
  dob?: InputMaybe<OrderByDirection>;
  facebook_url?: InputMaybe<OrderByDirection>;
  gender?: InputMaybe<OrderByDirection>;
  linkedin_url?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
  website?: InputMaybe<OrderByDirection>;
  youtube_url?: InputMaybe<OrderByDirection>;
};

export type User_ProfilesUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  facebook_url?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  linkedin_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  youtube_url?: InputMaybe<Scalars['String']['input']>;
};

export type User_ProfilesUpdateResponse = {
  __typename?: 'user_profilesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Profiles>;
};

export type Wishlists = Node & {
  __typename?: 'wishlists';
  course_id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  user_id: Scalars['UUID']['output'];
};

export type WishlistsConnection = {
  __typename?: 'wishlistsConnection';
  edges: Array<WishlistsEdge>;
  pageInfo: PageInfo;
};

export type WishlistsDeleteResponse = {
  __typename?: 'wishlistsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Wishlists>;
};

export type WishlistsEdge = {
  __typename?: 'wishlistsEdge';
  cursor: Scalars['String']['output'];
  node: Wishlists;
};

export type WishlistsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<WishlistsFilter>>;
  course_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<WishlistsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<WishlistsFilter>>;
  user_id?: InputMaybe<UuidFilter>;
};

export type WishlistsInsertInput = {
  course_id?: InputMaybe<Scalars['UUID']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type WishlistsInsertResponse = {
  __typename?: 'wishlistsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Wishlists>;
};

export type WishlistsOrderBy = {
  course_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type WishlistsUpdateInput = {
  course_id?: InputMaybe<Scalars['UUID']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type WishlistsUpdateResponse = {
  __typename?: 'wishlistsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Wishlists>;
};

export type ProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfilesQuery = { __typename: 'Query', profilesCollection?: { __typename: 'profilesConnection', edges: Array<{ __typename: 'profilesEdge', node: { __typename: 'profiles', id: string, full_name?: string | null } }> } | null };


export const ProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Profiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"profilesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProfilesQuery, ProfilesQueryVariables>;