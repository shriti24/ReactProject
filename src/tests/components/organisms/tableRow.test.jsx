import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableRow from '../../../components/organisms/table/tableRow';

configure({ adapter: new Adapter() });
describe('TableRow', () => {
  let wrapper;
  const props = {
    tableOptions: {
      keys: [{ key: 'somekey' }],
      headerFields: [{ key: 1, mappedTitle: 'eventType', label: 'Type', isEditable: false }],
    },
    rows: [{ key: 6, isRowEditable: false }],
  };
  beforeEach(() => {
    wrapper = shallow(<TableRow {...props} />);
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

describe('TableRow', () => {
  let wrapper;
  const props = {
    isActionsEnabled: true,
    tableOptions: {
      keys: [{ key: 'somekey' }],
      headerFields: [{ key: 1, mappedTitle: 'eventType', label: 'Type', isEditable: false }],
    },
    rows: [{ key: 'somerow', isRowEditable: false }],
  };
  beforeEach(() => {
    wrapper = shallow(<TableRow {...props} />);
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

describe('TableRow', () => {
  let wrapper;
  const props = {
    isActionsEnabled: true,
    tableScrollAndPinning: true,
    tableOptions: {
      keys: [{ key: 'somekey' }],
      headerFields: [{ key: 1, mappedTitle: 'eventType', label: 'Type', isEditable: false }],
    },
    rows: [{ key: 'somekeydum', isRowEditable: false }],
  };
  beforeEach(() => {
    wrapper = shallow(<TableRow {...props} />);
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

describe('TableRow', () => {
  let wrapper;
  const props = {
    isActionsEnabled: true,
    tableScrollAndPinning: true,
    pinRightColumns: 1,
    tableOptions: {
      keys: [{ key: 'somekey' }],
      headerFields: [{ key: 1, mappedTitle: 'eventType', label: 'Type', isEditable: false }],
    },
    rows: [
      { key: 2, isRowEditable: false },
      { key: 3, isRowEditable: false },
    ],
  };
  beforeEach(() => {
    wrapper = shallow(<TableRow {...props} />);
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
