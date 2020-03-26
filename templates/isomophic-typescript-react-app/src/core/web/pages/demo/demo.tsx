import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Column, Row } from '@core/web/common/grid'
import { Heading } from '@core/web/common/heading/heading'
import { Icon } from '@core/web/common/icon/icon'
import { Spinner } from '@core/web/common/spinner/spinner'
import { Button } from '@core/web/common/button/button'
import { Card } from '@core/web/common/card/card'

import {
    useShowModal
} from '@core/state/layout/hooks';

import { IOptionGroupComponentProps } from './demo.props'
import { mapDispatchToProps, mapStateToProps } from './demo.state'

import { Link } from 'react-router-dom'

export class DemoView extends Component<IOptionGroupComponentProps, {}> {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Column><Heading size='large'>Raw Grid layout</Heading></Column>
                    </Row>                    
                    <Row>
                        <Column size={3}>Raw Row 1 - Column 1</Column>
                        <Column size={3}>Raw Row 1 - Column 2</Column>
                        <Column size={3}>Raw Row 1 - Column 3</Column>
                        <Column size={3}>Raw Row 1 - Column 4</Column>
                    </Row>
                    <Row>
                        <Column size={3}>Raw Row 2 - Column 1</Column>
                        <Column size={3}>Raw Row 2 - Column 2</Column>
                        <Column size={3}>Raw Row 2 - Column 3</Column>
                        <Column size={3}>Raw Row 2 - Column 4</Column>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Column><Heading size='large'>Icons</Heading></Column>
                    </Row>
                    <Row>
                        <Column size={1}><Icon name='tick'/></Column>
                        <Column size={1}><Icon name='alert'/></Column>
                        <Column size={1}><Icon name='arrow'/></Column>
                        <Column size={1}><Icon name='arrow-down'/></Column>
                        <Column size={1}><Icon name='arrow-up'/></Column>
                        <Column size={1}><Icon name='arrow-left'/></Column>
                        <Column size={1}><Icon name='arrow-right'/></Column>
                        <Column size={1}><Icon name='locale'/></Column>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Column><Heading size='large'>Card container</Heading></Column>
                    </Row>
                    <Row>
                        <Column size={3}>
                            <Card>
                                <Heading size='large'>Heading 1</Heading>
                                <Link to={'#'}>Link</Link>
                                <Button style='primary'>Primary button</Button>
                            </Card>
                        </Column>
                        <Column size={3}>
                            <Card>
                                <Heading size='medium'>Heading 2</Heading>
                                <Link to={'#'}>Link</Link>
                                <Button style='secondary'>Secondary button</Button>
                            </Card>
                        </Column>
                        <Column size={3}>
                            <Card>
                                <Heading size='small'>Heading 3</Heading>
                                <Link to={'#'}>Link</Link>
                                <Button style='alert'>Alert button</Button>
                            </Card>
                        </Column> 
                        <Column size={3}>
                            <Card>
                                <Heading size='xsmall'>Heading 4</Heading>
                                <Link to={'#'}>Link</Link>
                                <Button style='default'>Default button</Button>
                            </Card>
                        </Column> 
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Column><Heading size='large'>Modal</Heading></Column>
                    </Row>
                    <Row>
                        <Column>
                            <Button style='secondary' onClick={useShowModal}>Toggle modal</Button>
                        </Column>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Column><Heading size='large'>Spinner</Heading></Column>
                    </Row>
                    <Row>
                        <Column><Spinner /></Column>
                    </Row>
                </Container>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoView)
