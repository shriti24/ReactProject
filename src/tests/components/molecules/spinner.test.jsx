import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Spinner from '../../../components/molecules/spinner.component';

configure({ adapter: new Adapter() });
describe('Spinner', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Spinner />);
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
