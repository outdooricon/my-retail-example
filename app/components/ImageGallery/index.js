/**
*
* ImageGallery
*
*/

import { FormattedMessage } from 'react-intl';
import React, { PropTypes } from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import messages from './messages';
import './styles';

export function massageImageData(images) {
  const altImages = images.AlternateImages.map((image) => (
    {
      original: image.image,
      thumbnail: image.image,
    }
  ));

  return [
    {
      original: images.PrimaryImage[0].image,
      thumbnail: images.PrimaryImage[0].image,
    },
    ...altImages,
  ];
}

function ImageGallery({ images }) {
  return (
    <div>
      <ReactImageGallery
        items={massageImageData(images)}
        showNav={false}
        showPlayButton={false}
      />
    </div>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.object.isRequired,
};

export default ImageGallery;
