/**
*
* Returns
*
*/

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  Container,
  Header,
  Message,
  PolicyLink,
} from './styles';
import messages from './messages';

const policyUrl = 'http://www.target.com/HelpContent?help=/sites/html/TargetOnline/help/returns_and_refunds/returns_and_refunds.html';

function Returns() {
  return (
    <Container>
      <Header>
        <FormattedMessage {...messages.header} />
      </Header>
      <Message>
        <FormattedMessage
          {...messages.message}
          values={{
            policyLink:
              <PolicyLink href={policyUrl}>
                <FormattedMessage {...messages.returnPolicy} />
              </PolicyLink>,
          }}
        />
      </Message>
    </Container>
  );
}

Returns.propTypes = {
  policy: PropTypes.object.isRequired,
};

export default Returns;
