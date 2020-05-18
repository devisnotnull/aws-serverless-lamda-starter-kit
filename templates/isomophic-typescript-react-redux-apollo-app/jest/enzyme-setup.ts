import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

(global as any).shallow = shallow;
(global as any).global.render = render;
(global as any).global.mount = mount;
