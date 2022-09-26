import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Book = {
  __typename?: 'Book';
  body?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type Dates = {
  __typename?: 'Dates';
  client: Scalars['String'];
  server: Scalars['String'];
};

export enum Episode {
  Empire = 'EMPIRE',
  Jedi = 'JEDI',
  Newhope = 'NEWHOPE'
}

export type Mutation = {
  __typename?: 'Mutation';
  deleteTodo?: Maybe<Todo>;
  editTodo?: Maybe<Todo>;
  editVideo?: Maybe<Video>;
  insertTodo?: Maybe<Todo>;
  sortTodo?: Maybe<Array<Maybe<Todo>>>;
};


export type MutationDeleteTodoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationEditTodoArgs = {
  completed?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};


export type MutationEditVideoArgs = {
  episode: Episode;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};


export type MutationInsertTodoArgs = {
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  date: Dates;
  toDo?: Maybe<Todo>;
  toDos: Array<Todo>;
  video?: Maybe<Video>;
  videos?: Maybe<Array<Maybe<Video>>>;
};


export type QueryDateArgs = {
  time: Scalars['Date'];
};


export type QueryToDoArgs = {
  id: Scalars['ID'];
};


export type QueryVideoArgs = {
  id: Scalars['ID'];
};

export type Todo = {
  __typename?: 'Todo';
  completed: Scalars['Boolean'];
  id: Scalars['ID'];
  title: Scalars['String'];
  userId: Scalars['Int'];
};

export type Video = {
  __typename?: 'Video';
  episode: Episode;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type GetDateFromNumberQueryVariables = Exact<{
  time: Scalars['Date'];
}>;


export type GetDateFromNumberQuery = { __typename?: 'Query', date: { __typename?: 'Dates', client: string, server: string } };

export type GetToDosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetToDosQuery = { __typename?: 'Query', toDos: Array<{ __typename?: 'Todo', completed: boolean, id: string, title: string, userId: number }> };

export type AddTodoMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']>;
}>;


export type AddTodoMutation = { __typename?: 'Mutation', insertTodo?: { __typename?: 'Todo', completed: boolean, id: string, title: string, userId: number } | null };


export const GetDateFromNumberDocument = gql`
    query GetDateFromNumber($time: Date!) {
  date(time: $time) {
    client
    server
  }
}
    `;

/**
 * __useGetDateFromNumberQuery__
 *
 * To run a query within a React component, call `useGetDateFromNumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDateFromNumberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDateFromNumberQuery({
 *   variables: {
 *      time: // value for 'time'
 *   },
 * });
 */
export function useGetDateFromNumberQuery(baseOptions: Apollo.QueryHookOptions<GetDateFromNumberQuery, GetDateFromNumberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDateFromNumberQuery, GetDateFromNumberQueryVariables>(GetDateFromNumberDocument, options);
      }
export function useGetDateFromNumberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDateFromNumberQuery, GetDateFromNumberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDateFromNumberQuery, GetDateFromNumberQueryVariables>(GetDateFromNumberDocument, options);
        }
export type GetDateFromNumberQueryHookResult = ReturnType<typeof useGetDateFromNumberQuery>;
export type GetDateFromNumberLazyQueryHookResult = ReturnType<typeof useGetDateFromNumberLazyQuery>;
export type GetDateFromNumberQueryResult = Apollo.QueryResult<GetDateFromNumberQuery, GetDateFromNumberQueryVariables>;
export const GetToDosDocument = gql`
    query GetToDos {
  toDos {
    completed
    id
    title
    userId
  }
}
    `;

/**
 * __useGetToDosQuery__
 *
 * To run a query within a React component, call `useGetToDosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetToDosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetToDosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetToDosQuery(baseOptions?: Apollo.QueryHookOptions<GetToDosQuery, GetToDosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetToDosQuery, GetToDosQueryVariables>(GetToDosDocument, options);
      }
export function useGetToDosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetToDosQuery, GetToDosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetToDosQuery, GetToDosQueryVariables>(GetToDosDocument, options);
        }
export type GetToDosQueryHookResult = ReturnType<typeof useGetToDosQuery>;
export type GetToDosLazyQueryHookResult = ReturnType<typeof useGetToDosLazyQuery>;
export type GetToDosQueryResult = Apollo.QueryResult<GetToDosQuery, GetToDosQueryVariables>;
export const AddTodoDocument = gql`
    mutation addTodo($title: String) {
  insertTodo(title: $title) {
    completed
    id
    title
    userId
  }
}
    `;
export type AddTodoMutationFn = Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, options);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;