/**
*
* ImageGallery
*
*/

import { injectIntl, intlShape } from 'react-intl';
import React, { PropTypes } from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import messages from './messages';
import './styles';

export function massageImageData(images, intl) {
  const size = images.AlternateImages.length + 1;
  const altImages = images.AlternateImages.map((image, index) => (
    {
      original: image.image,
      thumbnail: image.image,
      originalAlt: intl.formatMessage(messages.altTextOriginal, {
        index: index + 2,
        size,
      }),
      thumbnailAlt: intl.formatMessage(messages.altTextThumbnail, {
        index: index + 2,
        size,
      }),
    }
  ));

  return [
    {
      original: images.PrimaryImage[0].image,
      thumbnail: images.PrimaryImage[0].image,
      originalAlt: intl.formatMessage(messages.altTextOriginal, {
        index: 1,
        size,
      }),
      thumbnailAlt: intl.formatMessage(messages.altTextThumbnail, {
        index: 1,
        size,
      }),
    },
    ...altImages,
  ];
}

function ImageGallery({ images, intl }) {
  return (
    <div>
      <ReactImageGallery
        disableArrowKeys
        items={massageImageData(images, intl)}
        showNav={false}
        showPlayButton={false}
      />
    </div>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(ImageGallery);
