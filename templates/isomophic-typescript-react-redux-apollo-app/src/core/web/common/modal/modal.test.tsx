import React from 'react';
import { render } from 'enzyme';

import Modal from './modal';

describe('<Modal />', () => {
    it('snapshot: renders modal with default props', () => {
        const wrapper = render(<Modal hideModal={() => {}}>content</Modal>);
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders modal with default hideModal prop and isVisible set to false', () => {
        const wrapper = render(
            <Modal hideModal={() => {}} isVisible={false}>
                content
            </Modal>
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders modal with default hideModal prop and isVisible set to true', () => {
        const wrapper = render(
            <Modal hideModal={() => {}} isVisible={true}>
                content
            </Modal>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
