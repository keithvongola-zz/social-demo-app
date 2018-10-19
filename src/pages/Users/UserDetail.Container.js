import { connect } from 'react-redux';
import UserDetail from './UserDetail';
import {
  selectUser,
  selectAlbumsPreview,
  selectPosts,
} from '../../selectors/data';
import {
  getAlbums,
  getPosts,
  getTodos,
} from '../../actions/data';

const mapStateToProps = (state, props) => ({
  user: selectUser(state, props),
  albums: selectAlbumsPreview(state, 5),
  posts: selectPosts(state),
});

const mapDispatchToProps = dispatch => ({
  getAlbums: userId => dispatch(getAlbums(userId)),
  getPosts: userId => dispatch(getPosts(userId)),
  getTodos: userId => dispatch(getTodos(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
