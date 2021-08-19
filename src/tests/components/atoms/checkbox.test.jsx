import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MCCheckbox from '../../../components/atoms/checkbox.component';

configure({ adapter: new Adapter() });
describe('Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MCCheckbox />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  describe('render the wrapper', () => {
    it('wrapper rendered ', () => {
      expect(wrapper.length).toEqual(1);
    });
  });
});
