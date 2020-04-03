import { graphql } from 'react-apollo'

import { fetchPostsQuery } from '@core/state/post/query';
import { IPostResult, OwnProps } from './posts.props'

export const Render = graphql<IPostResult, OwnProps>(fetchPostsQuery, {
    posts: () => ({
        options: {
            paginate: { page: 1, limit: 1 },
        }
    })
})

export default Render;