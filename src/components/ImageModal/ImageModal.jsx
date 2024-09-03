import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

function ImageModal({ image, onClose }) {
  if (!image) return null;

  const { urls, alt_description, user, likes } = image;

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.content}>
        <img
          src={urls?.regular || ''}
          alt={alt_description || 'No description'}
          className={css.image}
        />
        <p>Author: {user?.name || 'Unknown'}</p>
        <p>Likes: {likes !== undefined ? likes : 'N/A'}</p>
        <button onClick={onClose} className={css.closeButton}>
          Close
        </button>
      </div>
    </Modal>
  );
}

ImageModal.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
