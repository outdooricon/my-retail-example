/*
 *
 * UI actions
 *
 */

import {
  SET_PRODUCT_QUANTITY_SELECTOR,
} from './constants';

export function setProductQuantitySelector(quantity) {
  return {
    type: SET_PRODUCT_QUANTITY_SELECTOR,
    quantity,
  };
}
