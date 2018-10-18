export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

export const GET_ALBUMS = 'GET_ALBUMS';
export const GET_ALBUMS_SUCCESS = 'GET_ALBUM_SUCCESS';
export const GET_ALBUMS_FAIL = 'GET_ALBUMS_FAIL';

export const GET_PHOTOS = 'GET_PHOTOS';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL';

export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAIL = 'GET_TODOS_FAIL';

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL';

export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAIL = 'GET_COMMENTS_FAIL';

export const getUsers = () => ({
  type: GET_USERS,
});

export const getAlbums = userId => ({
  type: GET_ALBUMS,
  userId,
});

export const getPhotos = albumId => ({
  type: GET_PHOTOS,
  albumId,
});

export const getTodos = userId => ({
  type: GET_TODOS,
  userId,
});

export const getPosts = userId => ({
  type: GET_POSTS,
  userId,
});

export const getComments = postId => ({
  type: GET_COMMENTS,
  postId,
});
