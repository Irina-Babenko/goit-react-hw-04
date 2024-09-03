import React, { useState, useEffect, useRef } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { fetchPicturesWithQuery } from '../../unsplash-api';

import css from './App.module.css';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const lastPictureRef = useRef(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetchPicturesWithQuery(query, page);
        console.log('API Response:', response); // Для отладки

        const newImages = response.images;

        if (!Array.isArray(newImages)) {
          throw new Error('Response is not an array');
        }

        setImages(prevImages => [...prevImages, ...newImages]);
      } catch (err) {
        console.error('Error fetching images:', err); // Для отладки
        setError('Something went wrong, please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = newQuery => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError('');
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = imageData => {
    setModalImage(imageData);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <div className={css.appContainer}>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery
        items={images}
        onImageClick={handleImageClick}
        lastPictureRef={lastPictureRef}
      />
      {isLoading && <Loader />}
      {images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} isLoading={isLoading} />
      )}
      {showModal && <ImageModal image={modalImage} onClose={closeModal} />}
    </div>
  );
}

export default App;
