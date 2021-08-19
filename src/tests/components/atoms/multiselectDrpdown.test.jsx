import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MultiselectDropdown from '../../../components/atoms/multiselectDropdown.component';

configure({ adapter: new Adapter() });
describe('Multiselectdropdown', () => {
  let wrapper;
  const props = {
    options: [{ title: 'value 1' }, { title: 'value 2' }],
    label: 'dummy',
  };
  beforeEach(() => {
    wrapper = shallow(<MultiselectDropdown {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  describe('render the wrapper', () => {
    it('wrapper rendered', () => {
      expect(wrapper.length).toEqual(1);
    });
    // it('wrapper rendered', () => {
    //   expect(wrapper.props().renderInput().props.label).toBe('dummy');
    // });
    // it('wrapper rendered', () => {
    //   expect(wrapper.props().renderOption({ title: 'dummy' }, 'someref').props.children[1]).toBe(
    //     'dummy'
    //   );
    // });
    // it('wrapper rendered', () => {
    //   expect(wrapper.props().getOptionLabel({ title: 'value1' })).toBe('value1');
    // });
  });
});
