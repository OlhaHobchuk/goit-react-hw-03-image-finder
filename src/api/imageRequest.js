const API_KEY = '33499449-ef034a74262b4ba1fb6bf3d8d';

export const fetchImages = (searchWord, page) => {
  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${searchWord}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  ).then(response => response.json());
};
