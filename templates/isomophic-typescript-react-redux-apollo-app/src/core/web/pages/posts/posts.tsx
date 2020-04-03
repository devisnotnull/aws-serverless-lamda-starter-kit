import React from 'react';

import { Container, Column, Row } from '@core/web/common/grid';
import { Heading } from '@core/web/common/heading/heading';
import { Icon } from '@core/web/common/icon/icon';
import { Spinner } from '@core/web/common/spinner/spinner';
import { Button } from '@core/web/common/button/button';
import { Card } from '@core/web/common/card/card';
import { IPost } from '@core/models/post';

import RenderComponent from './posts.state';
import { Props } from './posts.props'

import * as styles from './posts.css';

const generatePostCard = (post: IPost) => (
    <Column size={3}>
        <Card className={styles.Card}>
            <Heading size="medium">{post.title}</Heading>
            <p>{post.id}</p>
            <Icon name="tick" className={styles.Icon} />
            <Button>View</Button>
        </Card>
    </Column>
);

export class PostView extends React.PureComponent<Props, IPost> {
    render() {
        const { data } = this.props
        return (
            <Container>
                <Row>{data?.error && data?.error?.message}</Row>
                <Row>{data?.loading && <Spinner />}</Row>
                <Row>
                    {data?.posts &&
                        data.posts.map((post: IPost, iterator: number) => {
                            return generatePostCard(post);
                        })}
                </Row>
            </Container>
        );
    }
}

export const PostContainer = RenderComponent(PostView)

export default PostContainer;
