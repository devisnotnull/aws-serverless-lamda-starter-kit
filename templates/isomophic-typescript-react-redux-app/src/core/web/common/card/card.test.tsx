import React from 'react';
import { render } from 'enzyme';

import Card from './card';

describe('<Card />', () => {
    it('snapshot: renders button with primary style', () => {
        const wrapper = render(<Card />);
        expect(wrapper).toMatchSnapshot();
    });
});
