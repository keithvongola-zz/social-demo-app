import { fromJS } from 'immutable';
import { createReducer } from '../helpers';
import {
  GET_USERS_SUCCESS,
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_ALBUMS,
  GET_ALBUMS_SUCCESS,
  GET_PHOTOS_SUCCESS,
} from '../actions/data';

const initialState = fromJS({
  users: [],
  albums: [],
  photos: [],
  posts: [],
  comments: [],
  todos: [],
});

const actionsMap = {
  [GET_POSTS]: state => state.merge({ posts: [] }),
  [GET_COMMENTS]: state => state.merge({ comments: [] }),
  [GET_TODOS]: state => state.merge({ todos: [] }),
  [GET_ALBUMS]: state => state.merge({ album: [], photos: [] }),

  [GET_USERS_SUCCESS]: (state, action) => state.mergeDeep(action.data),
  [GET_POSTS_SUCCESS]: (state, action) => state.mergeDeep(action.data),
  [GET_COMMENTS_SUCCESS]: (state, action) => state.mergeDeep(action.data),
  [GET_TODOS_SUCCESS]: (state, action) => state.mergeDeep(action.data),
  [GET_ALBUMS_SUCCESS]: (state, action) => state.mergeDeep(action.data),
  [GET_PHOTOS_SUCCESS]: (state, action) => state.mergeDeep(action.data),
};

export default createReducer(initialState, actionsMap);
