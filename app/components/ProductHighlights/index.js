/**
*
* ProductHighlights
*
*/

import { FormattedMessage } from 'react-intl';
import React, { PropTypes } from 'react';

import messages from './messages';

function ProductHighlights({ highlights }) {
  return (
    <div>
      <h2>
        <FormattedMessage {...messages.header} />
      </h2>
      <ul>
        {
          highlights.map((highlight, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: highlight }} /> // eslint-disable-line react/no-danger
          ))
        }
      </ul>
    </div>
  );
}

ProductHighlights.propTypes = {
  highlights: PropTypes.array.isRequired,
};

export default ProductHighlights;
