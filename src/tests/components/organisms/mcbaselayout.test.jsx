import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MCBaseLayout from '../../../components/organisms/layout/mcbaselayout';
import TestComponent from '../../utils/TestComponent';

configure({ adapter: new Adapter() });

describe('MCBaseLayout', () => {
  let wrapper;
  const props = {
    children:{TestComponent},
  };
  beforeEach(() => {
    wrapper = shallow(<MCBaseLayout {...props} />);
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
