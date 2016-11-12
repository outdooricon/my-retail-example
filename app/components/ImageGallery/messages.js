/*
 * ImageGallery Messages
 *
 * This contains all the text for the ImageGallery component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.ImageGallery.header',
    defaultMessage: 'This is the ImageGallery component !',
  },
  altTextOriginal: {
    id: 'app.components.ImageGallery.altTextOriginal',
    defaultMessage: 'Image {index} out of {size}',
  },
  altTextThumbnail: {
    id: 'app.components.ImageGallery.altTextThumbnail',
    defaultMessage: 'Thumbnail {index} out of {size}',
  },
});
