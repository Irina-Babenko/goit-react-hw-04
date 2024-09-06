import React from 'react';
import css from './ImageCard.module.css';

const ImageCard = React.memo(({ src = '', alt = '', onClick = () => {} }) => {
  return (
    <div className={css.imageCard}>
      <img src={src} alt={photo} onClick={onClick} className={css.image} />
    </div>
  );
});

export default ImageCard;
