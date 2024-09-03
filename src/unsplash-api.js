// src/unsplash-api.js

const ACCESS_KEY = 'XSikqM8PcWgIvVDUYQ0SoeNF-ylxwzRgy_haP2fEoLY'; // Замените на ваш реальный ключ доступа

export async function fetchPicturesWithQuery(query, page) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${ACCESS_KEY}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }

  const data = await response.json();

  return {
    images: data.results, // Убедитесь, что data.results — это массив
  };
}
