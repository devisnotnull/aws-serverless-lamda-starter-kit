import React from 'react';
import { render } from 'enzyme';

import Heading from './heading';

describe('<Heading />', () => {
    it('snapshot: renders heading with xsmall size', () => {
        const wrapper = render(<Heading size="xsmall">title</Heading>);
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders heading with small size', () => {
        const wrapper = render(<Heading size="small">title</Heading>);
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders heading with medium size', () => {
        const wrapper = render(<Heading size="medium">title</Heading>);
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders heading with large size', () => {
        const wrapper = render(<Heading size="large">title</Heading>);
        expect(wrapper).toMatchSnapshot();
    });
});
