import React from 'react';
import { shallow } from 'enzyme';

import Link from './link';

describe('<Link />', () => {
    it('snapshot: renders link with internal link', () => {
        const wrapper = shallow(<Link to="/">title</Link>);
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders link with extrenal link', () => {
        const wrapper = shallow(<Link to="http://link.com">title</Link>);
        expect(wrapper).toMatchSnapshot();
    });
});
