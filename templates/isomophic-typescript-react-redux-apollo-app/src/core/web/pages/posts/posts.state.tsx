import { graphql } from 'react-apollo'

import { fetchPostsQuery } from '@core/state/post/query';
import { IPostResult, OwnProps } from './posts.props'

export const Render = graphql<IPostResult, OwnProps>(fetchPostsQuery, {
    variables: {
        
    }
})

export default Render;