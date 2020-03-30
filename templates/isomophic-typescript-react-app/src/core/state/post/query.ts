import { gql } from 'redux-saga-requests-graphql';

// Graphql input interfaces
export interface IPageQueryOptionsInput {
    options: {
        paginate: {
            page: number;
            limit: number;
        };
    };
}

export interface ICreatePostInput {
    input: {
        id: string;
        title: string;
        body: string;
    };
}

// GraphQL queries
export const fetchPostsQuery = gql`
    query($options: PageQueryOptions!) {
        posts(options: $options) {
            data {
                id
                title
            }
            meta {
                totalCount
            }
        }
    }
`;

export const fetchPostsByIdQuery = gql`
    query($id: ID!) {
        post(id: $id) {
            id
            title
            body
        }
    }
`;

export const createPost = gql`
    mutation($input: CreatePostInput!) {
        createPost(input: $input) {
            id
            title
            body
        }
    }
`;

export const deletePost = gql`
    mutation($id: ID!) {
        deletePost(id: $id)
    }
`;
