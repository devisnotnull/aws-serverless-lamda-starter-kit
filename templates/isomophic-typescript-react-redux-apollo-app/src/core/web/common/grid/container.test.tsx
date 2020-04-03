import React from 'react';
import { render } from 'enzyme';

import Container from './container';
import Row from './row';
import Column from './column';

describe('<Container />', () => {
    it('snapshot: renders empty container', () => {
        const wrapper = render(<Container></Container>);
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders container with div and sample font', () => {
        const wrapper = render(<Container>text</Container>);
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders container with singular row', () => {
        const wrapper = render(
            <Container>
                <Row></Row>
            </Container>
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders container with singular row and column', () => {
        const wrapper = render(
            <Container>
                <Row>
                    <Column></Column>
                </Row>
            </Container>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
