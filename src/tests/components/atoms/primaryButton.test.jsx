import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PrimaryButton from '../../../components/atoms/button.component';

configure({ adapter: new Adapter() });
describe('Button', () => {
  let wrapper;
  const props = {
    color: 'primary',
    variant: 'contained',
  };
  beforeEach(() => {
    wrapper = shallow(<PrimaryButton buttonLabel="'button dummy name'" {...props} />);
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
