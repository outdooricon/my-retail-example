/**
*
* Ratings
*
*/

import { FormattedMessage } from 'react-intl';
import React, { PropTypes } from 'react';
import ReactStars from 'react-stars';

import ReviewSummary from 'components/ReviewSummary';
import {
  ProConColumn,
  ProConContainer,
  ProConSubtitle,
  ProConTitle,
  SummaryRow,
  SummaryStars,
  ViewAllLink,
} from './styles';
import messages from './messages';

function Ratings({ conReview, overallRating, proReview, totalReviews }) {
  return (
    <div>
      <SummaryRow>
        <div>
          <SummaryStars itemProp="aggregateRating" itemScope="" itemType="http://schema.org/AggregateRating">
            <ReactStars
              color1="#999"
              color2="#cc0000"
              count={5}
              edit={false}
              value={overallRating}
            />
          </SummaryStars>
          <strong>
            <FormattedMessage {...messages.overall} />
          </strong>
        </div>
        <ViewAllLink>
          <FormattedMessage
            {...messages.viewAllLink}
            values={{
              reviewCount: totalReviews,
            }}
          />
        </ViewAllLink>
      </SummaryRow>
      <ProConContainer>
        <div>
          <ProConColumn>
            <ProConTitle>
              <FormattedMessage {...messages.proTitle} />
            </ProConTitle>
            <ProConSubtitle>
              <FormattedMessage {...messages.proSubtitle} />
            </ProConSubtitle>
            <hr aria-hidden />
            <ReviewSummary
              datePosted={proReview.datePosted}
              overallRating={proReview.overallRating}
              review={proReview.review}
              screenName={proReview.screenName}
              title={proReview.title}
            />
          </ProConColumn>
          <ProConColumn>
            <ProConTitle>
              <FormattedMessage {...messages.conTitle} />
            </ProConTitle>
            <ProConSubtitle>
              <FormattedMessage {...messages.conSubtitle} />
            </ProConSubtitle>
            <hr aria-hidden />
            <ReviewSummary
              datePosted={conReview.datePosted}
              overallRating={conReview.overallRating}
              review={conReview.review}
              screenName={conReview.screenName}
              title={conReview.title}
            />
          </ProConColumn>
        </div>
      </ProConContainer>
    </div>
  );
}

Ratings.propTypes = {
  conReview: PropTypes.object,
  overallRating: PropTypes.number.isRequired,
  proReview: PropTypes.object,
  totalReviews: PropTypes.number.isRequired,
};

export default Ratings;
