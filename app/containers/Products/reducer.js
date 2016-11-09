/*
 *
 * Products reducer
 *
 */

import { fromJS } from 'immutable';

import singleProduct from 'data/item-data.json';

const initialState = fromJS([singleProduct.CatalogEntryView[0]]);

function productsReducer(state = initialState) {
  return state;
}

export default productsReducer;
