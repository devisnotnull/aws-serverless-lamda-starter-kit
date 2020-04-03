import React from 'react';
import { render } from 'enzyme';

import Button from './button';

describe('<Button />', () => {
    it('snapshot: renders button with primary style', () => {
        const wrapper = render(<Button style="primary" />);
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders button with secondary style', () => {
        const wrapper = render(<Button style="secondary" />);
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders button with alert style', () => {
        const wrapper = render(<Button style="alert" />);
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders button with default style', () => {
        const wrapper = render(<Button style="default" />);
        expect(wrapper).toMatchSnapshot();
    });
});
