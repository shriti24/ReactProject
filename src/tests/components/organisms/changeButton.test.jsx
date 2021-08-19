import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChangeButton from '../../../components/organisms/table/changeButton';

configure({ adapter: new Adapter() });
describe('ChangeButton', () => {
  let wrapper;
  const props = {
    tableOptions: {},
    id: 0,
  };
  beforeEach(() => {
    wrapper = shallow(<ChangeButton {...props} />);
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

describe('ChangeButton', () => {
  let wrapper;
  const props = {
    isRowEditable: true,
    isToggleEnabled: true,
    tableOptions: {},
    id: 0,
  };
  beforeEach(() => {
    wrapper = shallow(<ChangeButton {...props} />);
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

describe('ChangeButton', () => {
  let wrapper;
  const actionTakenFunc = jest.fn();
  const props = {
    isToggleEnabled: true,
    isDownloadEnabled: true,
    isEditEnabled: true,
    actionItemsEditable: [{ key: 0, actionLabel: 'view' }],
    tableOptions: { actionTaken: actionTakenFunc },
    id: 0,
  };
  beforeEach(() => {
    wrapper = shallow(<ChangeButton {...props} />);
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
      wrapper.props().children[0].props.children.props.onClick(event);
      expect(actionTakenFunc).toHaveBeenCalled();
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper.props().children[0].props.children.props.onKeyDown(event);
      expect(actionTakenFunc).toHaveBeenCalled();
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper.props().children[1].props.children.props.onClick(event);
      expect(actionTakenFunc).toHaveBeenCalled();
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper.props().children[1].props.children.props.onKeyDown(event);
      expect(actionTakenFunc).toHaveBeenCalled();
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper.props().children[2].props.children.props.onClick(event);
      expect(actionTakenFunc).toHaveBeenCalled();
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper.props().children[2].props.children.props.onKeyDown(event);
      expect(actionTakenFunc).toHaveBeenCalled();
    });

    // it('wrapper rendered', () => {
    //   const event = {
    //     target: {
    //       value: 'input',
    //     },
    //   };
    //   wrapper.props().children[3][0].props.on(event);
    //   expect(actionTakenFunc).toHaveBeenCalled();
    // });

    // it('wrapper rendered', () => {
    //   const event = {
    //     target: {
    //       value: 'input',
    //     },
    //   };
    //   wrapper.props().children[3][0].props.onKeyDown(event);
    //   expect(actionTakenFunc).toHaveBeenCalled();
    // });
  });
});

describe('ChangeButton', () => {
  let wrapper;
  const actionTakenFunc = jest.fn();
  const props = {
    isRowEditable: true,
    actionItemsNonEditable: [{ key: 0, actionLabel: 'view' }],
    tableOptions: { actionTaken: actionTakenFunc },
    id: 0,
  };
  beforeEach(() => {
    wrapper = shallow(<ChangeButton {...props} />);
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
      wrapper.props().children[0].props.onClick(event);
      expect(actionTakenFunc).toHaveBeenCalled();
    });

    it('wrapper rendered', () => {
      const event = {
        target: {
          value: 'input',
        },
      };
      wrapper.props().children[0].props.onKeyDown(event);
      expect(actionTakenFunc).toHaveBeenCalled();
    });
  });
});
