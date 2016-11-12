/*
 *
 * Product
 *
 */

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import NotFoundPage from 'components/NotFoundPage';
import ProductPage from 'components/ProductPage';
import { selectProductByRouteItemId } from '../Products/selectors';
import { selectProductUI } from 'global/reducers/ui/selectors';
import { setProductQuantitySelector } from 'global/reducers/ui/actions';

export function Gateway(props) {
  if (!Object.keys(props.product).length) {
    return (<NotFoundPage />);
  }
  return (<ProductPage {...props} />);
}

Gateway.propTypes = {
  product: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  product: selectProductByRouteItemId(),
  ui: selectProductUI(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setProductQuantitySelector }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Gateway);
