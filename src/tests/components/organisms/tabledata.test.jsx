import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableData from '../../../components/organisms/table/tableData';

configure({ adapter: new Adapter() });
describe('Tabledata', () => {
  let wrapper;
  const props = {
    header: { key: 1, mappedTitle: 'eventType', label: 'Type' },
    id: 0,
    columnNumber: 0,
    tableOptions: { headerFields: [] },
  };
  beforeEach(() => {
    wrapper = shallow(<TableData {...props} />);
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

describe('Tabledata', () => {
  let wrapper;
  const props = {
    header: { key: 1, mappedTitle: 'eventType', label: 'Type' },
    id: 0,
    columnNumber: 0,
    tableOptions: { headerFields: [] },
    tableScrollAndPinning: true,
    pinLeftColumns: 1,
  };
  beforeEach(() => {
    wrapper = shallow(<TableData {...props} />);
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

describe('Tabledata', () => {
  let wrapper;
  const linkClickFunc = jest.fn();
  const props = {
    header: {
      key: 1,
      mappedTitle: 'eventType',
      label: 'Type',
      type: 'link',
      linkClick: linkClickFunc,
    },
    id: 1,
    columnNumber: 0,
    tableOptions: { headerFields: [] },
    tableScrollAndPinning: true,
    pinLeftColumns: 1,
  };
  beforeEach(() => {
    wrapper = shallow(<TableData {...props} />);
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
      wrapper.props().children.props.onClick(event);
      expect(linkClickFunc).toHaveBeenCalled();
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper.props().children.props.onKeyDown(event);
      expect(linkClickFunc).toHaveBeenCalled();
    });
  });
});

describe('Tabledata', () => {
  let wrapper;
  const props = {
    header: { key: 1, mappedTitle: 'eventType', label: 'Type', isEditable: true },
    id: 1,
    columnNumber: 0,
    tableOptions: { headerFields: [] },
    tableScrollAndPinning: true,
    pinLeftColumns: 1,
  };
  beforeEach(() => {
    wrapper = shallow(<TableData {...props} />);
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

describe('Tabledata', () => {
  let wrapper;
  const props = {
    header: { key: 1, mappedTitle: 'eventType', label: 'Type', isEditable: true },
    isRowEditable: true,
    id: 1,
    columnNumber: 0,
    tableOptions: { headerFields: [] },
    tableScrollAndPinning: true,
    pinLeftColumns: 1,
  };
  beforeEach(() => {
    wrapper = shallow(<TableData {...props} />);
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
      wrapper.props().children.props.onChange(event);
      expect(wrapper.length).toEqual(1);
    });
  });
});

describe('Tabledata', () => {
  let wrapper;
  const props = {
    header: { key: 1, mappedTitle: 'eventType', label: 'Type', isEditable: true },
    isRowEditable: true,
    id: 1,
    columnNumber: 0,
    tableOptions: { headerFields: [] },
    tableScrollAndPinning: true,
    pinLeftColumns: 3,
  };
  beforeEach(() => {
    wrapper = shallow(<TableData {...props} />);
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

describe('Tabledata', () => {
  let wrapper;
  const props = {
    header: { key: 1, mappedTitle: 'eventType', label: 'Type', isEditable: true },
    isRowEditable: true,
    id: 1,
    columnNumber: 1,
    tableOptions: { headerFields: [] },
    tableScrollAndPinning: true,
    pinLeftColumns: 3,
    pinRightColumns: 1,
  };
  beforeEach(() => {
    wrapper = shallow(<TableData {...props} />);
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
