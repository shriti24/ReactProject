import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Criteria from '../../../components/molecules/criteria.component';

configure({ adapter: new Adapter() });
describe('Criteria', () => {
  let wrapper;
  const criteriaOptions = [{ key: 1 }];
  beforeEach(() => {
    wrapper = shallow(
      <Criteria criteriaOptions={criteriaOptions} onEventChange={jest.fn()} isButtonEnabled />
    );
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

describe('Criteria', () => {
  let wrapper;
  const onEventChangeFunc = jest.fn();
  const criteriaOptions = [{ key: 1, type: 'textbox' }];
  beforeEach(() => {
    wrapper = shallow(
      <Criteria criteriaOptions={criteriaOptions} onEventChange={onEventChangeFunc} />
    );
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
      wrapper.find('WithStyles(ForwardRef(Grid))').last().find('Textbox').props().onChange(event);
      expect(onEventChangeFunc).toHaveBeenCalled();
    });
  });
});

describe('Criteria', () => {
  let wrapper;
  const onEventChangeFunc = jest.fn();
  const criteriaOptions = [{ key: 1, type: 'select', options: ['dummy'], label: 'dummy label' }];
  beforeEach(() => {
    wrapper = shallow(
      <Criteria criteriaOptions={criteriaOptions} onEventChange={onEventChangeFunc} />
    );
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
        .find('WithStyles(ForwardRef(Grid))')
        .last()
        .find('SelectDropdown')
        .props()
        .onChange(event);
      expect(onEventChangeFunc).toHaveBeenCalled();
    });
  });
});

describe('Criteria', () => {
  let wrapper;
  const onEventChangeFunc = jest.fn();
  const criteriaOptions = [{ key: 1, type: 'datepicker' }];
  beforeEach(() => {
    wrapper = shallow(
      <Criteria criteriaOptions={criteriaOptions} onEventChange={onEventChangeFunc} />
    );
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
        .find('WithStyles(ForwardRef(Grid))')
        .last()
        .find('DaterangePickerCustom')
        .props()
        .onDateRangeSelect(event);
      expect(onEventChangeFunc).toHaveBeenCalled();
    });
  });
});

describe('Criteria', () => {
  let wrapper;
  const onEventChangeFunc = jest.fn();
  const criteriaOptions = [
    {
      key: 1,
      type: 'checkboxgroup',
      options: ['OPTION1'],
      label: 'dummy label 1',
      value: '',
      columns: 1,
    },
  ];
  beforeEach(() => {
    wrapper = shallow(
      <Criteria criteriaOptions={criteriaOptions} onEventChange={onEventChangeFunc} />
    );
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
        .find('WithStyles(ForwardRef(Grid))')
        .last()
        .find('CheckBoxesGroup')
        .props()
        .onChange(event);
      expect(onEventChangeFunc).toHaveBeenCalled();
    });
  });
});
