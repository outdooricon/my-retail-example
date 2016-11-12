import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import MainButtons from '../index';
import { InStoreContainer, PrimaryButton } from '../styles';

describe('<MainButtons />', () => {
  describe('purchasingChannelCode == 0', () => {
    const purchasingChannelCode = '0';
    it('should show both InStoreContainer and PrimaryButton', () => {
      const wrapper = shallow(<MainButtons purchasingChannelCode={purchasingChannelCode} />);
      expect(wrapper.find(InStoreContainer).length).toBe(1);
      expect(wrapper.find(PrimaryButton).length).toBe(1);
    });
  });

  describe('purchasingChannelCode == 1', () => {
    const purchasingChannelCode = '1';
    it('should show only PrimaryButton', () => {
      const wrapper = shallow(<MainButtons purchasingChannelCode={purchasingChannelCode} />);
      expect(wrapper.find(InStoreContainer).length).toBe(0);
      expect(wrapper.find(PrimaryButton).length).toBe(1);
    });
  });

  describe('purchasingChannelCode == 2', () => {
    const purchasingChannelCode = '2';
    it('should show only InStoreContainer', () => {
      const wrapper = shallow(<MainButtons purchasingChannelCode={purchasingChannelCode} />);
      expect(wrapper.find(InStoreContainer).length).toBe(1);
      expect(wrapper.find(PrimaryButton).length).toBe(0);
    });
  });
});
