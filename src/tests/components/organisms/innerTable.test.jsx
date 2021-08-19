import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InnerTable from '../../../components/organisms/table/innerTable';

configure({ adapter: new Adapter() });
describe('InnerTable', () => {
  let wrapper;
  const props = {
    tableOptions: {
      headerFields: [{ key: 1, mappedTitle: 'eventType', label: 'Type' }],
    },
    rows: [],
  };
  beforeEach(() => {
    wrapper = shallow(<InnerTable {...props} />);
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

describe('InnerTable', () => {
  let wrapper;
  const headerFields = [{ key: 1, mappedTitle: 'eventType', label: 'Type' }];
  const props = {
    isDisableHorizontalScroll: true,
    tableOptions: {
      headerFields: [{ key: 1, mappedTitle: 'eventType', label: 'Type' }],
    },
    rows: [],
  };
  beforeEach(() => {
    wrapper = shallow(<InnerTable headerFields={headerFields} {...props} />);
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
