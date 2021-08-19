import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from '../../../components/organisms/table/table';

configure({ adapter: new Adapter() });
describe('Textbox', () => {
  let wrapper;
  const props = {
    tableOptions: {},
    rows: [{ title: 'dummy' }],
  };
  beforeEach(() => {
    wrapper = shallow(<Table {...props} />);
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
