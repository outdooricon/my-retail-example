/*
 * Ratings Messages
 *
 * This contains all the text for the Ratings component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  conSubtitle: {
    id: 'app.components.Ratings.conSubtitle',
    defaultMessage: 'most helpful 1–2 star review',
  },
  conTitle: {
    id: 'app.components.Ratings.conTitle',
    defaultMessage: 'con',
  },
  overall: {
    id: 'app.components.Ratings.overall',
    defaultMessage: 'overall',
  },
  proSubtitle: {
    id: 'app.components.Ratings.proSubtitle',
    defaultMessage: 'most helpful 4–5 star review',
  },
  proTitle: {
    id: 'app.components.Ratings.proTitle',
    defaultMessage: 'pro',
  },
  viewAllLink: {
    id: 'app.components.Ratings.viewAllLink',
    defaultMessage: `view all {reviewCount, number} {reviewCount, plural,
      one {review}
      other {reviews}
    }`,
  },
});
