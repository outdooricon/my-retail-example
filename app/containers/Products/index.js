/*
 *
 * Products
 *
 */

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ProductsPage from 'components/ProductsPage';
import selectProducts from './selectors';

const mapStateToProps = createStructuredSelector({
  products: selectProducts(),
});

export default connect(mapStateToProps)(ProductsPage);
