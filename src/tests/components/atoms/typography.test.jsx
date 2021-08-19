import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Typography from '../../../components/atoms/typography.component';

configure({ adapter: new Adapter() });
describe('Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Typography />);
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
