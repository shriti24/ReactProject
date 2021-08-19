import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableWrapper from '../../../components/organisms/table/tableWrapper';

configure({ adapter: new Adapter() });
describe('TableWrapper', () => {
  let wrapper;
  const props = {
    tableOptions: { headerfields: [] },
    rows: [{ title: 'dummy' }],
  };
  beforeEach(() => {
    wrapper = shallow(<TableWrapper {...props} />);
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

describe('TableWrapper', () => {
  let wrapper;
  const props = {
    tableOptions: {},
    isHeaderFixed: true,
    rows: [{ title: 'dummy' }],
  };
  beforeEach(() => {
    wrapper = shallow(<TableWrapper {...props} />);
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

describe('TableWrapper', () => {
  let wrapper;
  const props = {
    tableOptions: { headerFields: [{ key: 0 }] },
    isHeaderFixed: true,
    isHamburgerEnabled: true,
    rows: [{ title: 'dummy' }],
  };
  beforeEach(() => {
    wrapper = shallow(<TableWrapper {...props} />);
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
      wrapper.props().children[0].props.children[0].props.children.props.onClick(event);
      expect(wrapper.length).toEqual(1);
    });
  });
});

describe('TableWrapper', () => {
  let wrapper;
  const changeFunc = jest.fn();
  const props = {
    tableOptions: {
      headerFields: [{ key: 0, visibility: true, mappedTitle: 'dummy' }],
      changeColumnVisibility: changeFunc,
    },
    isHeaderFixed: true,
    isHamburgerEnabled: true,
    rows: [{ title: 'dummy' }],
  };
  beforeEach(() => {
    wrapper = shallow(<TableWrapper {...props} />);
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
      wrapper.props().children[0].props.children[1].props.onClose(event);
      expect(wrapper.length).toEqual(1);
    });
  });
});

// describe('TableWrapper', () => {
//   let wrapper;
//   const changeFunc = jest.fn();
//   const props = {
//     tableOptions: {
//       headerFields: [{ key: 0, visibility: true, mappedTitle: 'dummy' }],
//       changeColumnVisibility: changeFunc,
//     },
//     isHeaderFixed: true,
//     isPaginationEnabled: true,
//     isTableMenu: true,
//     isHamburgerEnabled: true,
//     rows: [{ title: 'dummy' }],
//   };
//   beforeEach(() => {
//     wrapper = shallow(<TableWrapper {...props} />);
//   });
//   afterEach(() => {
//     wrapper.unmount();
//   });
//   describe('render the wrapper', () => {
//     it('wrapper rendered', () => {
//       const event = {
//         target: {
//           value: 'input',
//         },
//       };
//       wrapper.find('WithStyles(ForwardRef(Checkbox))').props().onChange(event);
//       expect(changeFunc).toHaveBeenCalled();
//     });
//   });
// });
