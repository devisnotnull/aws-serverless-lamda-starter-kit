import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from './icon';

describe('SvgIcon />', () => {
  it('snapshot: renders basket icon', () => {
    const wrapper = shallow(<SvgIcon name="basket" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('snapshot: renders locale icon', () => {
    const wrapper = shallow(<SvgIcon name="locale" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('snapshot: renders tick icon', () => {
    const wrapper = shallow(<SvgIcon name="tick" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('snapshot: renders tick arrow', () => {
    const wrapper = shallow(<SvgIcon name="arrow" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('snapshot: renders tick arrow-right', () => {
    const wrapper = shallow(<SvgIcon name="arrow-right" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('snapshot: renders tick arrow-down', () => {
    const wrapper = shallow(<SvgIcon name="arrow-down" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('snapshot: renders tick arrow-left', () => {
    const wrapper = shallow(<SvgIcon name="arrow-left" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('snapshot: renders tick arrow-up', () => {
    const wrapper = shallow(<SvgIcon name="arrow-up" />);
    expect(wrapper).toMatchSnapshot();
  });
});