/**
*
* QuantityChooser
*
*/

import { FormattedMessage } from 'react-intl';
import React, { PropTypes } from 'react';

import messages from './messages';

function QuantityChooser({ quantity }) {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <button>-</button>
      {/* <div className="sr-only">
        quantity is
      </div>*/}
      {quantity}
      <button>+</button>
    </div>
  );
}

QuantityChooser.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default QuantityChooser;
