import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectDropdown from '../../../components/atoms/selectdropdrown.component';

configure({ adapter: new Adapter() });
describe('Button', () => {
  let wrapper;
  const props = {
    options: ['value 1', 'value 2'],
    label: 'dummy label',
  };
  beforeEach(() => {
    wrapper = shallow(<SelectDropdown {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  describe('render the wrapper', () => {
    it('wrapper rendered', () => {
      expect(wrapper.length).toEqual(1);
    });
  });
});
