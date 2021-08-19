import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CheckBoxesGroup from '../../../components/atoms/checkboxgroup.component';

configure({ adapter: new Adapter() });
describe('Button', () => {
  let wrapper;
  const props = {
    options: ['OPTION1'],
    label: 'dummy label',
    value: ['dummy'],
    onChange: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<CheckBoxesGroup {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  describe('render the wrapper', () => {
    it('wrapper rendered', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('wrapper rendered', () => {
      wrapper.setProps({value: undefined})
      expect(wrapper.length).toEqual(1);
    });
    it('wrapper rendered', () => {
      wrapper.setProps({columns:7})
      expect(wrapper.length).toEqual(1);
    });
    it('wrapper rendered', () => {
      wrapper.setProps({columns:2});
      expect(wrapper.length).toEqual(1);
    });
  });
});

describe('CheckboxGroup', () => {
  let wrapper;
  const onEventChangeFunc = jest.fn();
  const props = {
    isTableMenu: true,
    options: ['OPTION1'],
    label: 'dummy label 1',
    value: ['dummy'],
    columns: 1,
  };
  beforeEach(() => {
    wrapper = shallow(<CheckBoxesGroup onChange={onEventChangeFunc} {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  describe('render the wrapper', () => {
    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
          filter: jest.fn(),
        },
      };
      wrapper
        .find('WithStyles(ForwardRef(Grid))')
        .last()
        .props()
        .children.props.children[0].props.control.props.onChange(event);
      expect(onEventChangeFunc).toHaveBeenCalled();
    });
  });
});
