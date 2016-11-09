/**
*
* Returns
*
*/

import React, { PropTypes } from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const policyUrl = 'http://www.target.com/HelpContent?help=/sites/html/TargetOnline/help/returns_and_refunds/returns_and_refunds.html';

function Returns() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <p>
        <FormattedMessage
          {...messages.messageLine1}
          values={{
            policyLink:
              <a href={policyUrl}>
                <FormattedMessage {...messages.returnPolicy} />
              </a>,
          }}
        />
        <FormattedMessage {...messages.messageLine2} />
      </p>
    </div>
  );
}

Returns.propTypes = {
  policy: PropTypes.object.isRequired,
};

export default Returns;
