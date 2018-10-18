import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
  GET_ALBUMS,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAIL,
  GET_PHOTOS,
  GET_PHOTOS_FAIL,
  GET_PHOTOS_SUCCESS,
} from '../actions/data';
import {
  getUsers,
  getPosts,
  getTodos,
  getAlbums,
  getComments,
  getPhotos,
} from '../api/data';

// Users
function* handleGetUsers() {
  try {
    const users = yield call(getUsers);
    yield put({ type: GET_USERS_SUCCESS, data: { users } });
  } catch (e) {
    yield put({ type: GET_USERS_FAIL });
  }
}

function* getUserWatcher() {
  yield takeLatest(GET_USERS, handleGetUsers);
}

// Posts & Comments
function* handleGetPosts(actions) {
  try {
    const { userId } = actions;
    const posts = yield call(getPosts, userId);
    yield put({ type: GET_POSTS_SUCCESS, data: { posts } });
  } catch (e) {
    yield put({ type: GET_POSTS_FAIL });
  }
}

function* getPostsWatcher() {
  yield takeLatest(GET_POSTS, handleGetPosts);
}

function* handleGetComments(actions) {
  try {
    const { postId } = actions;
    const comments = yield call(getComments, postId);
    yield put({ type: GET_COMMENTS_SUCCESS, data: { comments } });
  } catch (e) {
    yield put({ type: GET_COMMENTS_FAIL });
  }
}

function* getCommentsWatcher() {
  yield takeLatest(GET_COMMENTS, handleGetComments);
}

// Todos
function* handleGetTodos(actions) {
  try {
    const { userId } = actions;
    const todos = yield call(getTodos, userId);
    yield put({ type: GET_TODOS_SUCCESS, data: { todos } });
  } catch (e) {
    yield put({ type: GET_TODOS_FAIL });
  }
}

function* getTodosWatcher() {
  yield takeLatest(GET_TODOS, handleGetTodos);
}

// Albums & Photos
function* handleGetAlbums(actions) {
  try {
    const { userId } = actions;
    const albums = yield call(getAlbums, userId);
    yield put({ type: GET_ALBUMS_SUCCESS, data: { albums } });
  } catch (e) {
    yield put({ type: GET_ALBUMS_FAIL });
  }
}

function* getAlbumsWatcher() {
  yield takeLatest(GET_ALBUMS, handleGetAlbums);
}

function* handleGetPhotos(actions) {
  try {
    const { albumId } = actions;
    const photos = yield call(getPhotos, albumId);
    yield put({ type: GET_PHOTOS_SUCCESS, data: { photos } });
  } catch (e) {
    yield put({ type: GET_PHOTOS_FAIL });
  }
}

function* getPhotosWatcher() {
  yield takeLatest(GET_PHOTOS, handleGetPhotos);
}


export default [
  getUserWatcher(),
  getPostsWatcher(),
  getCommentsWatcher(),
  getAlbumsWatcher(),
  getPhotosWatcher(),
  getTodosWatcher(),
];
