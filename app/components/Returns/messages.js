/*
 * Returns Messages
 *
 * This contains all the text for the Returns component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.Returns.header',
    defaultMessage: 'returns',
  },
  returnPolicy: {
    id: 'app.components.Returns.returnPolicy',
    defaultMessage: 'Return Policy',
  },
  messageLine1: {
    id: 'app.components.Returns.messageLine1',
    defaultMessage: 'This item must be returned within 30 days of the ship date. See {policyLink} for details.',
  },
  messageLine2: {
    id: 'app.components.Returns.messageLine2',
    defaultMessage: 'Prices, promotions, styles and availability may vary by  store and online.',
  },
});
