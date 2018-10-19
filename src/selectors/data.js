import { createSelector } from 'reselect';
import { List, Map } from 'immutable';

const selectData = state => state.data;

export const selectUsers = createSelector(
  selectData,
  data => data.get('users'),
);

const selectUserId = (state, props) => props.navigation.getParam('id');

export const selectUser = createSelector(
  [selectUsers, selectUserId],
  (users, userId) => {
    const user = users.find(o => o.get('id') === userId);
    return user;
  },
);

export const selectAlbums = createSelector(
  selectData,
  data => data.get('albums'),
);

export const selectPhotos = createSelector(
  selectData,
  data => data.get('photos'),
);

export const selectAlbumsPreview = createSelector(
  selectAlbums,
  selectPhotos,
  (albums, photos) => {
    if (photos.size === 0) return List();
    // Get first 5 albums.
    const preview = albums.slice(0, 5);
    // Get thumbnail for each album.
    const result = preview.reduce((acc, album) => {
      const photo = photos.find(o => o.get('albumId') === album.get('id'));
      if (photo) {
        const thumbnailUrl = photo.get('thumbnailUrl');
        return acc.push(album.set('thumbnailUrl', thumbnailUrl));
      }

      return acc;
    }, List());

    const placeholder = Map({
      id: 0,
      isPlaceholder: true,
      title: `+${albums.size - 5} albums...`,
      thumbnailUrl: '',
    });

    return result.push(placeholder);
  },
);


export const selectPosts = createSelector(
  selectData,
  data => data.get('posts'),
);

export const selectTodos = createSelector(
  selectData,
  data => data.get('todos'),
);
