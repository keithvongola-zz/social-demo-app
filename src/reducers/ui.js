import { fromJS } from 'immutable';
import { createReducer } from '../helpers';
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
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAIL,
} from '../actions/data';

const initialState = fromJS({
  loading: {
    users: false,
    posts: false,
    comments: false,
    albums: false,
    photos: false,
    todos: false,
  },
});

const actionsMap = {
  [GET_USERS]: state => state.setIn(['loading', 'users'], true),
  [GET_USERS_SUCCESS]: state => state.setIn(['loading', 'users'], false),
  [GET_USERS_FAIL]: state => state.setIn(['loading', 'users'], false),

  [GET_POSTS]: state => state.setIn(['loading', 'posts'], true),
  [GET_POSTS_SUCCESS]: state => state.setIn(['loading', 'posts'], false),
  [GET_POSTS_FAIL]: state => state.setIn(['loading', 'posts'], false),

  [GET_COMMENTS]: state => state.setIn(['loading', 'comments'], true),
  [GET_COMMENTS_SUCCESS]: state => state.setIn(['loading', 'comments'], false),
  [GET_COMMENTS_FAIL]: state => state.setIn(['loading', 'comments'], false),

  [GET_TODOS]: state => state.setIn(['loading', 'todos'], true),
  [GET_TODOS_SUCCESS]: state => state.setIn(['loading', 'todos'], false),
  [GET_TODOS_FAIL]: state => state.setIn(['loading', 'todos'], false),

  [GET_ALBUMS]: state => state.setIn(['loading', 'albums'], true),
  [GET_ALBUMS_SUCCESS]: state => state.setIn(['loading', 'albums'], false),
  [GET_ALBUMS_FAIL]: state => state.setIn(['loading', 'albums'], false),

  [GET_PHOTOS]: state => state.setIn(['loading', 'photos'], true),
  [GET_PHOTOS_SUCCESS]: state => state.setIn(['loading', 'photos'], false),
  [GET_PHOTOS_FAIL]: state => state.setIn(['loading', 'photos'], false),
};

export default createReducer(initialState, actionsMap);
