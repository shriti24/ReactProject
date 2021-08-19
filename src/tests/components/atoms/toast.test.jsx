import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Toast from '../../../components/atoms/toast.component';

configure({ adapter: new Adapter() });
describe('Toast', () => {
  let wrapper;
  const props = {
    alertMessage: 'some toast',
    severity: 'success',
    showAlert: true,
  };
  
  beforeEach(() => {    
    wrapper = mount(<Toast {...props} />);
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

describe('Toast', () => {
  let wrapper;
  const onEventChangeFunc = jest.fn();
  const props = {
    alertMessage: 'some toast',
    severity: 'success',
    showAlert: true,
  };
  beforeEach(() => {
    wrapper = shallow(<Toast onClose={onEventChangeFunc} {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  describe('render the wrapper', () => {
    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper.find('WithStyles(ForwardRef(Alert))').props().action.props.onClick(event);
      expect(onEventChangeFunc).toHaveBeenCalled();
    });
  });
});
