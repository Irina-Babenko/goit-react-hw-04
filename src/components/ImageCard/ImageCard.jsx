import React from 'react';
import css from './ImageCard.module.css';

const ImageCard = React.memo(({ src = '', alt = '', onClick = () => {} }) => {
  return (
    <div className={css.imageCard} onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
});

export default ImageCard;
