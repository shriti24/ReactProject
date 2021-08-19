import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../../components/organisms/table/header';

configure({ adapter: new Adapter() });
describe('TableHeader', () => {
  let wrapper;
  const props = {
    label: 'dummyLabel',
    columnNumber: 0,
    tableOptions: {
      headerFields: [{ key: 1, mappedTitle: 'eventType', label: 'Type' }],
    },
  };
  beforeEach(() => {
    wrapper = shallow(<Header {...props} />);
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

describe('TableHeader', () => {
  let wrapper;
  const props = {
    label: 'dummyLabel',
    isHeaderFixed: true,
    columnNumber: 0,
    tableOptions: {
      headerFields: [{ key: 1, mappedTitle: 'eventType', label: 'Type' }],
      isHeaderFixed: true,
    },
  };
  beforeEach(() => {
    wrapper = shallow(<Header {...props} />);
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

describe('TableHeader', () => {
  let wrapper;
  const props = {
    label: 'dummyLabel',
    isHeaderFixed: true,
    pinLeftColumns: 1,
    columnNumber: 0,
    visibility: false,
    tableOptions: {
      headerFields: [{ key: 1, mappedTitle: 'eventType', label: 'Type' }],
      isHeaderFixed: true,
      pinLeftColumns: 1,
    },
  };
  beforeEach(() => {
    wrapper = shallow(<Header {...props} />);
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

describe('TableHeader', () => {
  let wrapper;
  const props = {
    label: 'dummyLabel',
    isHeaderFixed: true,
    pinRightColumns: 1,
    columnNumber: 0,
    tableScrollAndPinning: true,
    tableOptions: {
      headerFields: [{ key: 1, mappedTitle: 'eventType', label: 'Type' }],
      isHeaderFixed: true,
      pinRightColumns: 1,
    },
  };
  beforeEach(() => {
    wrapper = shallow(<Header {...props} />);
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

describe('TableHeader', () => {
  let wrapper;
  const props = {
    label: 'dummyLabel',
    visibility: true,
    pinLeftColumns: 1,
    columnNumber: 0,
    tableScrollAndPinning: true,
    tableOptions: {
      headerFields: [{ key: 1, mappedTitle: 'eventType', label: 'Type' }],
      isHeaderFixed: true,
      pinLeftColumns: 1,
    },
  };
  beforeEach(() => {
    wrapper = shallow(<Header {...props} />);
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
