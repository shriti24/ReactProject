import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from '../../../components/molecules/notFound/NotFound';
import { MemoryRouter } from 'react-router';
import { mount } from "enzyme";
import App from '../../utils/App'
import TestComponent from '../../utils/TestComponent'
import sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('testing NotFoundPage', () => {
  it('should go to 404 page', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/eventAllocation/a' ]}>
          <App/>
        </MemoryRouter>
      );
      console.log(wrapper.find(NotFound));
      expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});

describe('testing NotFoundPage', () => {
    it('should not go to 404 page', () => {
      const wrapper = mount(
          <MemoryRouter initialEntries={[ '/eventAllocation/' ]}>
            <App/>
          </MemoryRouter>
        );
        expect(wrapper.find(TestComponent)).toHaveLength(1);
    });
  });

  describe('testing NotFoundPage', () => {
    it('should not go to 404 page', () => {
      const wrapper = mount(
          <MemoryRouter initialEntries={[ '/abc/' ]}>
            <App/>
          </MemoryRouter>
        );
        expect(wrapper.find(TestComponent)).toHaveLength(1);
    });
  });

  describe('testing NotFoundPage', () => {
    it('should go not to 404 page', () => {
      const wrapper = mount(
          <MemoryRouter initialEntries={[ '/abc/a,' ]}>
            <App/>
          </MemoryRouter>
        );
        expect(wrapper.find(TestComponent)).toHaveLength(1);
    });
  }); 
  describe('testing NotFoundPage', () => {
    it('should go to 404 page', () => {
      const wrapper = mount(
          <MemoryRouter initialEntries={[ '/abc/a' ]}>
            <App/>
          </MemoryRouter>
        );
        expect(wrapper.find(NotFound));
    });
  });
  describe('testing NotFoundPage', () => {
    sinon.stub(window.location, 'assign');
    it('should go to 404 page', () => {
      const wrapper = mount(
          <MemoryRouter initialEntries={[ '/yoyo' ]}>
            <App/>
          </MemoryRouter>
        );
        expect(wrapper.find(NotFound));
    });
  });