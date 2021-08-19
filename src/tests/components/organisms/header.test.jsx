import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../../components/organisms/header/header';

configure({ adapter: new Adapter() });
describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
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
