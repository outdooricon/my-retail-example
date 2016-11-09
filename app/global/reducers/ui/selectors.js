import { createSelector } from 'reselect';

/**
 * Direct selector to the products state domain
 */
const selectUIDomain = () => (state) => state.get('ui');

/**
 * Other specific selectors
 */
const selectProductUI = () => createSelector(
  selectUIDomain(),
  (ui) => ui.get('product').toJS()
);

/**
 * Default selector used by Products
 */

const selectUI = () => createSelector(
  selectUIDomain(),
  (ui) => ui.toJS()
);

export default selectUI;
export {
  selectProductUI,
  selectUIDomain,
};
