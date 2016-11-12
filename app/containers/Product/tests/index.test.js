import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { Gateway } from '../index';
import NotFoundPage from 'components/NotFoundPage';
import ProductPage from 'components/ProductPage';

describe('<Gateway />', () => {
  describe('no product found for id param', () => {
    const product = {};
    it('should show NotFoundPage', () => {
      const wrapper = shallow(<Gateway product={product} />);
      expect(wrapper.find(NotFoundPage).length).toBe(1);
    });
  });

  describe('product found for id param', () => {
    const props = {
      product: {
        CustomerReview: [],
        ItemDescription: [],
        Promotions: [],
        ReturnPolicy: [],
        manufacturer: '',
        partNumber: '',
        purchasingChannelCode: '',
        shortDescription: '',
        title: '',
      },
      setProductQuantitySelector: () => {},
      ui: {
        quantitySelected: 1,
      },
    };

    it('should show ProductPage', () => {
      const wrapper = shallow(<Gateway {...props} />);
      expect(wrapper.find(ProductPage).length).toBe(1);
    });
  });
});
