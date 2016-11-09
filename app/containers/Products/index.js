/*
 *
 * Products
 *
 */

import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import selectProducts from './selectors';

export function Products({ products }) {
  return (
    <div>
      {
        products.map((product) => (
          <Link to={`/product/${product.itemId}`} key={product.itemId}>{ product.title }</Link>
        ))
      }
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  products: selectProducts(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
