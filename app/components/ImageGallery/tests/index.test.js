import expect from 'expect';

import { massageImageData } from '../index';

describe('massageImageData', () => {
  it('should create array with original and thumbnail set', () => {
    const massagedImages = massageImageData({
      AlternateImages: [
        {
          image: 'image2Url',
        },
      ],
      PrimaryImage: [
        {
          image: 'image1Url',
        },
      ],
    }, { formatMessage: () => 'text' });

    expect(massagedImages[0]).toMatch({
      original: 'image1Url',
      thumbnail: 'image1Url',
      originalAlt: 'text',
      thumbnailAlt: 'text',
    });
    expect(massagedImages[1]).toMatch({
      original: 'image2Url',
      thumbnail: 'image2Url',
      originalAlt: 'text',
      thumbnailAlt: 'text',
    });
  });
});
