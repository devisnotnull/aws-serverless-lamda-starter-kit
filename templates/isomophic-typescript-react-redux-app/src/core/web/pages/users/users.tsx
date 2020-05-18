import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IUser } from '@core/models/user';
import { Container, Column, Row } from '@core/web/common/grid';
import { Heading } from '@core/web/common/heading/heading';
import { Icon } from '@core/web/common/icon/icon';
import { Spinner } from '@core/web/common/spinner/spinner';
import { Button } from '@core/web/common/button/button';
import { Card } from '@core/web/common/card/card';

import { IOptionGroupComponentProps } from './users.props';
import { mapDispatchToProps, mapStateToProps } from './users.state';

import * as styles from './users.css';

const generatePostCard = (post: IUser) => (
    <Column size={3}>
        <Card className={styles.Card}>
            <Heading size="medium">{post.name}</Heading>
            <p>{post.id}</p>
            <p>{post.email}</p>
            <Icon name="tick" className={styles.Icon} />
            <Button>View</Button>
        </Card>
    </Column>
);

export class UserView extends Component<IOptionGroupComponentProps, {}> {
    componentWillMount() {
        const { onFetchAllAction } = this.props;
        onFetchAllAction();
    }

    render() {
        const { loading, users, errors } = this.props;
        return (
            <Container>
                <Row>{errors && errors}</Row>
                <Row>{loading && <Spinner />}</Row>
                <Row>
                    {users &&
                        users.map((post: IUser, iterator: number) => {
                            return generatePostCard(post);
                        })}
                </Row>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
