/*
 *
 * Products
 *
 */

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import React, { PropTypes } from 'react';

import messages from './messages';

function ProductsPage({ products }) {
  return (
    <div>
      <FormattedMessage
        tagName="h1"
        {...messages.header}
      />
      <ul>
        {
          products.map((product) => (
            <li key={product.itemId}>
              <Link to={`/product/${product.itemId}`}>
                { product.title }
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsPage;
