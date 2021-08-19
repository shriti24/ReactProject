import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProtectedRoute from '../../../components/organisms/ProtectedRoute';
import TestComponent from '../../utils/TestComponent';

configure({ adapter: new Adapter() });

describe('ProtectedRoute', () => {
  let wrapper;
  const props = {
    component:{TestComponent},
    path:"/",
  };
  beforeEach(() => {
    wrapper = shallow(<ProtectedRoute exact {...props} />);
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
