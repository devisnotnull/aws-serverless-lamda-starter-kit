import React from 'react';
import { render } from 'enzyme';

import Container from './container';

describe('<Container />', () => {
    it('snapshot: renders conatiner with h1 child component', () => {
        const wrapper = render(
            <Container>
                <h1>Heading</h1>
            </Container>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
