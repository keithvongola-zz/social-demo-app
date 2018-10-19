import { createSelector } from 'reselect';
import { List, Map } from 'immutable';

const selectData = state => state.data;

export const selectUsers = createSelector(
  selectData,
  data => data.get('users'),
);

const selectId = (state, props) => props.navigation.getParam('id');

export const selectUser = createSelector(
  [selectUsers, selectId],
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

export const selectPhotosWithAlbumId = createSelector(
  selectPhotos,
  selectId,
  (photos, albumId) => {
    const albumPhotos = photos.filter(photo => photo.get('albumId') === albumId);
    return albumPhotos;
  },
);

const selectPreviewSize = (state, size) => size;

export const selectAlbumsPreview = createSelector(
  selectAlbums,
  selectPhotos,
  selectPreviewSize,
  (albums, photos, size) => {
    if (photos.size === 0) return List();
    const preview = size ? albums.slice(0, size) : albums;

    // Get thumbnail for each album.
    const result = preview.reduce((acc, album) => {
      const photo = photos.find(o => o.get('albumId') === album.get('id'));
      if (photo) {
        const thumbnailUrl = photo.get('thumbnailUrl');
        return acc.push(album.set('thumbnailUrl', thumbnailUrl));
      }

      return acc;
    }, List());

    if (result.size === 0) return List();
    if (result.size === albums.size) return result;

    const placeholder = Map({
      id: 0,
      isPlaceholder: true,
      title: `+${albums.size - size} albums...`,
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
