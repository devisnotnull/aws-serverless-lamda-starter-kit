// GraphQL queries
export const fetchPostsQuery = `
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

export const fetchPostsByIdQuery = `
    query($id: ID!) {
        post(id: $id) {
            id
            title
            body
        }
    }
`;

export const createPost = `
    mutation($input: CreatePostInput!) {
        createPost(input: $input) {
            id
            title
            body
        }
    }
`;