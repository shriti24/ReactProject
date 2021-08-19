import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dropdown from '../../../components/atoms/dropdown.component';

configure({ adapter: new Adapter() });
describe('Dropdown', () => {
  let wrapper;
  const props = {
    options: [{ value: 'dummy', label: 'dummy' }],
    label: 'dummy',
    value: false,
  };
  beforeEach(() => {
    wrapper = shallow(<Dropdown {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  describe('render the wrapper', () => {
    it('wrapper rendered', () => {
      wrapper.setProps({value: 'string'});
      expect(wrapper.length).toEqual(1);
    });
    it('wrapper rendered', () => {
      wrapper.setProps({value: true});
      expect(wrapper.length).toEqual(1);
    });
    it('wrapper rendered', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('wrapper rendered', () => {
      expect(wrapper.props().renderInput().props.label).toBe('dummy');
    });    
  });
});
