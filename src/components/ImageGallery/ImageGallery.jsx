import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({
  items,
  onImageClick,
  lastPictureRef = null,
}) {
  return (
    <ul className={css.galleryContainer}>
      {items.map((item, index) => {
        const {
          id,
          urls: { small },
          alt_description,
        } = item;
        const isLast = index === items.length - 1;

        return (
          <li
            key={id}
            className={css.galleryWrap}
            ref={isLast ? lastPictureRef : null}
          >
            <ImageCard
              src={small}
              alt={alt_description}
              onClick={() => onImageClick(item)}
            />
          </li>
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImageClick: PropTypes.func.isRequired,
  lastPictureRef: PropTypes.object,
};
