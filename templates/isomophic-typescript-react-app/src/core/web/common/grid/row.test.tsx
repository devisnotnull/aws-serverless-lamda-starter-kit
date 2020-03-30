import React from 'react';
import { render } from 'enzyme';

import Row from './row';
import Column from './column';

describe('<Row />', () => {
    it('snapshot: renders empty row', () => {
        const wrapper = render(<Row></Row>);
        expect(wrapper).toMatchSnapshot();
    });
    it('snapshot: renders row with singulart empty column', () => {
        const wrapper = render(
            <Row>
                <Column></Column>
            </Row>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
