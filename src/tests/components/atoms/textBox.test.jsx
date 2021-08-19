import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Textbox from '../../../components/atoms/textbox.component';

configure({ adapter: new Adapter() });
describe('Textbox', () => {
  let wrapper;
  const props = {
    variant: 'outlined',
  };
  beforeEach(() => {
    wrapper = shallow(<Textbox value="" inputType="text" {...props} />);
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
