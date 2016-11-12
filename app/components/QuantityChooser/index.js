/**
*
* QuantityChooser
*
*/

import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import React, { PropTypes } from 'react';

import {
  Button,
  Container,
  Count,
} from './styles';
import messages from './messages';

function QuantityChooser({ intl, quantity, setProductQuantitySelector }) {
  return (
    <Container>
      <FormattedMessage
        tagName="small"
        {...messages.header}
      />
      <span className="sr-only">{quantity}</span>
      <div>
        <Button
          aria-label={intl.formatMessage(messages.decreaseButtonAria, { quantity })}
          disabled={quantity === 1}
          onClick={() => setProductQuantitySelector(quantity - 1)}
        >
          −
        </Button>
        <Count aria-hidden>
          {quantity}
        </Count>
        <Button
          aria-label={intl.formatMessage(messages.increaseButtonAria, { quantity })}
          onClick={() => setProductQuantitySelector(quantity + 1)}
        >
          +
        </Button>
      </div>
    </Container>
  );
}

QuantityChooser.propTypes = {
  intl: intlShape.isRequired,
  quantity: PropTypes.number.isRequired,
  setProductQuantitySelector: PropTypes.func.isRequired,
};

export default injectIntl(QuantityChooser);
