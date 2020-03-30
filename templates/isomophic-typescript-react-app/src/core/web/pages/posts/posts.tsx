import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Column, Row } from '@core/web/common/grid';
import { Heading } from '@core/web/common/heading/heading';
import { Icon } from '@core/web/common/icon/icon';
import { Spinner } from '@core/web/common/spinner/spinner';
import { Button } from '@core/web/common/button/button';
import { Card } from '@core/web/common/card/card';
import { IPost } from '@core/models/post';

import { IOptionGroupComponentProps } from './posts.props';
import { mapDispatchToProps, mapStateToProps } from './posts.state';

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

export class TodoView extends Component<IOptionGroupComponentProps, {}> {
    componentDidMount() {
        const { onFetchAllAction } = this.props;
        onFetchAllAction();
    }

    render() {
        const { loading, posts, errors } = this.props;
        return (
            <Container>
                <Row>{errors && errors}</Row>
                <Row>{loading && <Spinner />}</Row>
                <Row>
                    {posts &&
                        posts.map((post: IPost, iterator: number) => {
                            return generatePostCard(post);
                        })}
                </Row>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoView);
