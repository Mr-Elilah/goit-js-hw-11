const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '48226781-c314bf294542f2e13595e23de'; // твой ключ API

export function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      throw new Error(error.message);
    });
}
