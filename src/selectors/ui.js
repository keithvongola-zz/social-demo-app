import { createSelector } from 'reselect';

const selectUi = state => state.ui;

const selectLoading = createSelector(
  selectUi,
  ui => ui.get('loading'),
);

export const selectUsersLoading = createSelector(
  selectLoading,
  loading => loading.get('users'),
);

export const selectPostsLoading = createSelector(
  selectLoading,
  loading => loading.get('posts'),
);

export const selectCommentsLoading = createSelector(
  selectLoading,
  loading => loading.get('comments'),
);

export const selectAlbumsLoading = createSelector(
  selectLoading,
  loading => loading.get('albums'),
);

export const selectPhotosLoading = createSelector(
  selectLoading,
  loading => loading.get('photos'),
);

export const selectTodosLoading = createSelector(
  selectLoading,
  loading => loading.get('todos'),
);
