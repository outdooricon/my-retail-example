/*
 *
 * Product
 *
 */

import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';

import ImageGallery from 'components/ImageGallery';
import MainButtons from 'components/MainButtons';
import ProductHighlights from 'components/ProductHighlights';
import Promotions from 'components/Promotions';
import QuantityChooser from 'components/QuantityChooser';
import Ratings from 'components/Ratings';
import Returns from 'components/Returns';
import SecondaryButtons from 'components/SecondaryButtons';
import {
  Container,
  LeftColumn,
  RightColumn,
  Price,
  PriceContainer,
  PriceQualifier,
  Title,
  TitleImagesContainer,
} from './styles';

export function Product({
  product,
  setProductQuantitySelector,
  ui,
}) {
  return (
    <Container className="clearfix" itemScope itemType="http://schema.org/Product">
      <Helmet
        title={product.title}
        meta={[
          { name: 'description', content: product.shortDescription },
        ]}
      />
      <LeftColumn>
        <TitleImagesContainer>
          <span className="sr-only" aria-hidden="true" itemProp="brand">
            {product.manufacturer}
          </span>
          <Title itemProp="name">{product.title}</Title>
          <ImageGallery images={product.Images[0]} />
        </TitleImagesContainer>
      </LeftColumn>
      <RightColumn>
        <PriceContainer itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
          <meta itemProp="priceCurrency" content={product.Offers[0].OfferPrice[0].currencyCode} />
          <Price itemProp="price">
            {product.Offers[0].OfferPrice[0].formattedPriceValue}
          </Price>
          <PriceQualifier>
            {product.Offers[0].OfferPrice[0].priceQualifier}
          </PriceQualifier>
          <div itemScope="" itemType="http://schema.org/IndividualProduct">
            <meta itemProp="sku" content={product.partNumber} />
          </div>
        </PriceContainer>
        <hr aria-hidden />
        <Promotions promotions={product.Promotions} />
        <hr aria-hidden />
        <QuantityChooser
          quantity={ui.quantitySelected}
          setProductQuantitySelector={setProductQuantitySelector}
        />
        <MainButtons purchasingChannelCode={product.purchasingChannelCode} />
        <Returns policy={product.ReturnPolicy[0]} />
        <SecondaryButtons />
        <ProductHighlights highlights={product.ItemDescription[0].features} />
      </RightColumn>
      <LeftColumn>
        <Ratings
          conReview={product.CustomerReview[0].Con[0]}
          overallRating={parseInt(product.CustomerReview[0].consolidatedOverallRating, 10)}
          proReview={product.CustomerReview[0].Pro[0]}
          totalReviews={parseInt(product.CustomerReview[0].totalReviews, 10)}
        />
      </LeftColumn>
    </Container>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    CustomerReview: PropTypes.array.isRequired, // eslint-disable-line react/no-unused-prop-types
    ItemDescription: PropTypes.array.isRequired, // eslint-disable-line react/no-unused-prop-types
    Promotions: PropTypes.array.isRequired, // eslint-disable-line react/no-unused-prop-types
    ReturnPolicy: PropTypes.array.isRequired, // eslint-disable-line react/no-unused-prop-types
    manufacturer: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
    partNumber: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
    purchasingChannelCode: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
    shortDescription: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
    title: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  }),
  setProductQuantitySelector: PropTypes.func.isRequired,
  ui: PropTypes.shape({
    quantitySelected: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  }),
};

export default Product;
