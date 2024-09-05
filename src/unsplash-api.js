const ACCESS_KEY = 'XSikqM8PcWgIvVDUYQ0SoeNF-ylxwzRgy_haP2fEoLY';

export async function fetchPicturesWithQuery(query, page, perPage = 16) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&per_page=${perPage}&query=${query}&client_id=${ACCESS_KEY}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }

  const data = await response.json();

  return {
    images: data.results,
  };
}
