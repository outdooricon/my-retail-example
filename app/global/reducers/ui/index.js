/*
 *
 * UI reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_PRODUCT_QUANTITY_SELECTOR,
} from './constants';

const initialState = fromJS({
  product: {
    quantitySelected: 1,
  },
});

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT_QUANTITY_SELECTOR:
      return state.setIn(['product', 'quantitySelected'], action.quantity);
    default:
      return state;
  }
}

export default uiReducer;
