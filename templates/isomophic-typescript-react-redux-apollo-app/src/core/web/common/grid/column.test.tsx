import React from 'react';
import { render } from 'enzyme';

import Column from './column';

describe('<Column />', () => {
    it('snapshot: renders empty column', () => {
        const wrapper = render(<Column></Column>);
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders column with test', () => {
        const wrapper = render(<Column>text</Column>);
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders column with size 1', () => {
        const wrapper = render(<Column size={1}>text</Column>);
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders column with size 3', () => {
        const wrapper = render(<Column size={3}>text</Column>);
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders column with size 6', () => {
        const wrapper = render(<Column size={6}>text</Column>);
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders column with size 9', () => {
        const wrapper = render(<Column size={9}>text</Column>);
        expect(wrapper).toMatchSnapshot();
    });
});
