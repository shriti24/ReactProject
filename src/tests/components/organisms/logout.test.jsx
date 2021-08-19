import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Logout from '../../../components/organisms/header/logout';

configure({ adapter: new Adapter() });
describe('Logout', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Logout />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  describe('render the wrapper', () => {
    it('wrapper rendered', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper.props().children.props.children[1].props.children.props.children.props.onClick(event);
      expect(wrapper.length).toEqual(1);
    });
  });
});
