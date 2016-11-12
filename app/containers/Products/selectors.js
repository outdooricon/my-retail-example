import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

/**
 * Direct selector to the products state domain
 */
const selectProductsDomain = () => (state) => state.get('products');

/**
 * Other specific selectors
 */
const selectProductByRouteItemId = () => createSelector(
  [
    selectProductsDomain(),
    (state, props) => props.params.itemId,
  ],
  (products, itemId) => (
    products.find(
      (product) => product.get('itemId') == itemId, // eslint-disable-line eqeqeq
      null,
      fromJS({})
    ).toJS()
  )
);

/**
 * Default selector used by Products
 */

const selectProducts = () => createSelector(
  selectProductsDomain(),
  (products) => products.toJS()
);

export default selectProducts;
export {
  selectProductByRouteItemId,
  selectProductsDomain,
};
