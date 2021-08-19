import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DaterangePickerCustom from '../../../components/atoms/daterangePickerCustom.component';

configure({ adapter: new Adapter() });
describe('Daterangepicker', () => {
  let wrapper;
  const props = {
    onDateRangeSelect: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<DaterangePickerCustom {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  describe('render the wrapper', () => {
    it('wrapper rendered', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('wrapper rendered', () => {
      wrapper.setProps({clearDateRange: false});
      expect(wrapper.length).toEqual(1);
    });
  });
});

describe('Daterangepicker', () => {
  let wrapper;
  const props = {
    onDateRangeSelect: jest.fn(),
    clearDateRange: false,
  };
  beforeEach(() => {
    wrapper = shallow(<DaterangePickerCustom {...props} />);
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
        stopPropagation: jest.fn(),
      };
      wrapper.props().children.props.children.props.children[0].props.onFocus(event);
      expect(wrapper.length).toEqual(1);
    });
  });
});

describe('Daterangepicker', () => {
  let wrapper;
  const props = {
    onDateRangeSelect: jest.fn(),
    clearDateRange: false,
  };
  beforeEach(() => {
    wrapper = shallow(<DaterangePickerCustom {...props} />);
    wrapper.setState({ showCalendar: true });
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
        stopPropagation: jest.fn(),
      };
      wrapper.props().children.props.children.props.children[0].props.onFocus(event);
      expect(wrapper.length).toEqual(1);
    });
    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper
        .props()
        .children.props.children.props.children[1].props.children[0].props.children[1].props.children.props.onClick(
          event
        );
      expect(wrapper.length).toEqual(1);
    });
    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper
        .props()
        .children.props.children.props.children[1].props.children[1].props.children[0].props.onClick(
          event
        );
      expect(wrapper.length).toEqual(1);
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper
        .props()
        .children.props.children.props.children[1].props.children[1].props.children[1].props.onClick(
          event
        );
      expect(wrapper.length).toEqual(1);
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper
        .props()
        .children.props.children.props.children[1].props.children[1].props.children[2].props.onClick(
          event
        );
      expect(wrapper.length).toEqual(1);
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper
        .props()
        .children.props.children.props.children[1].props.children[1].props.children[3].props.onClick(
          event
        );
      expect(wrapper.length).toEqual(1);
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper
        .props()
        .children.props.children.props.children[1].props.children[1].props.children[4].props.onClick(
          event
        );
      expect(wrapper.length).toEqual(1);
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper
        .props()
        .children.props.children.props.children[1].props.children[1].props.children[5].props.onClick(
          event
        );
      expect(wrapper.length).toEqual(1);
    });
  });
});

describe('Daterangepicker', () => {
  let wrapper;
  const props = {
    onDateRangeSelect: jest.fn(),
    clearDateRange: false,
  };
  beforeEach(() => {
    wrapper = shallow(<DaterangePickerCustom {...props} />);
    wrapper.setState({ showCalendar: true });
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
      wrapper
        .props()
        .children.props.children.props.children[1].props.children[1].props.children[0].props.onKeyDown(
          event
        );
      expect(wrapper.length).toEqual(1);
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper
        .props()
        .children.props.children.props.children[1].props.children[1].props.children[1].props.onKeyDown(
          event
        );
      expect(wrapper.length).toEqual(1);
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper
        .props()
        .children.props.children.props.children[1].props.children[1].props.children[2].props.onKeyDown(
          event
        );
      expect(wrapper.length).toEqual(1);
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper
        .props()
        .children.props.children.props.children[1].props.children[1].props.children[3].props.onKeyDown(
          event
        );
      expect(wrapper.length).toEqual(1);
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper
        .props()
        .children.props.children.props.children[1].props.children[1].props.children[4].props.onKeyDown(
          event
        );
      expect(wrapper.length).toEqual(1);
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper
        .props()
        .children.props.children.props.children[1].props.children[1].props.children[5].props.onKeyDown(
          event
        );
      expect(wrapper.length).toEqual(1);
    });
    
    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper.props().children.props.children.props.children[0].props.onChange(event);
      expect(wrapper.length).toEqual(1);
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper.props().children.ref(event);
      expect(wrapper.length).toEqual(1);
    });
  });
});
