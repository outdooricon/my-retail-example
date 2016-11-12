/**
*
* ProductHighlights
*
*/

import { FormattedMessage } from 'react-intl';
import React, { PropTypes } from 'react';

import {
  Heading,
  Highlight,
  Highlights,
} from './styles';
import messages from './messages';

function ProductHighlights({ highlights }) {
  return (
    <div>
      <Heading>
        <FormattedMessage {...messages.header} />
      </Heading>
      <Highlights>
        {
          highlights.map((highlight, index) => (
            <Highlight
              dangerouslySetInnerHTML={{ __html: highlight }}  // eslint-disable-line react/no-danger
              key={index}
            />
          ))
        }
      </Highlights>
    </div>
  );
}

ProductHighlights.propTypes = {
  highlights: PropTypes.array.isRequired,
};

export default ProductHighlights;
