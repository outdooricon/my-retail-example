/**
*
* ReviewSummary
*
*/

import { FormattedDate, FormattedMessage } from 'react-intl';
import React, { PropTypes } from 'react';
import ReactStars from 'react-stars';

import {
  Container,
  ReviewTitle,
  UserLink,
} from './styles';
import messages from './messages';

function ReviewSummary({ datePosted, overallRating, review, screenName, title }) {
  return (
    <Container>
      <div className="sr-only">
        <FormattedMessage {...messages.ratingAria} values={{ count: overallRating }} />
      </div>
      <div aria-hidden>
        <ReactStars
          color1="#999999"
          color2="#cc0000"
          count={5}
          edit={false}
          size={24}
          value={overallRating}
        />
      </div>
      <ReviewTitle>{title}</ReviewTitle>
      <p>{review}</p>
      <span className="sr-only">
        <FormattedMessage {...messages.submittedBy} />
      </span>
      <UserLink>
        {screenName}
      </UserLink>
      <FormattedDate
        value={datePosted}
        day="numeric"
        month="long"
        year="numeric"
      />
    </Container>
  );
}

ReviewSummary.propTypes = {
  datePosted: PropTypes.string.isRequired,
  overallRating: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  screenName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ReviewSummary;
