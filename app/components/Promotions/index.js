/**
*
* Promotions
*
*/

import React, { PropTypes } from 'react';

import {
  Promotion,
  PromotionContainer,
  PromotionList,
} from './styles';

function Promotions({ promotions }) {
  return (
    <PromotionList>
      {
        promotions.map((promotion, index) => (
          <PromotionContainer key={index}>
            <Promotion>
              {promotion.Description[0].shortDescription}
            </Promotion>
          </PromotionContainer>
        ))
      }
    </PromotionList>
  );
}

Promotions.propTypes = {
  promotions: PropTypes.array.isRequired,
};

export default Promotions;
