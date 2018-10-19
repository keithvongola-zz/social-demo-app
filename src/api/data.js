const API_URL = 'https://jsonplaceholder.typicode.com';

const fetchResource = (path, userOptions = {}, domain = API_URL) => {
  const url = domain + path;

  const defaultOptions = {
    header: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const options = {
    ...userOptions,
    ...defaultOptions,
  };


  return fetch(url, options)
    .then(response => response.json())
    .catch((error) => {
      throw (error);
    });
};

export const getUsers = () => fetchResource('/users');

export const getPosts = (userId) => {
  const path = `/posts?userId=${encodeURIComponent(userId)}`;
  return fetchResource(path);
};

export const getComments = (postId) => {
  const path = `/posts?postId=${encodeURIComponent(postId)}`;
  return fetchResource(path);
};

export const getTodos = (userId) => {
  const path = `/todos?userId=${encodeURIComponent(userId)}`;
  return fetchResource(path);
};

export const getAlbums = (userId) => {
  const path = `/albums?userId=${encodeURIComponent(userId)}`;
  return fetchResource(path);
};

export const getPhotos = (albumIds) => {
  let path = '/photos?';
  albumIds.forEach((id) => {
    path += `albumId=${encodeURIComponent(id)}&`;
  });
  return fetchResource(path);
};
