import { connect } from 'react-redux';
import PostDetail from './PostDetail';
import { getComments } from '../../actions/data';
import { selectPostWithPostId, selectComments } from '../../selectors/data';

const mapStateToProps = (state, props) => ({
  post: selectPostWithPostId(state, props),
  comments: selectComments(state),
});

const mapDispatchToProps = dispatch => ({
  getComments: postId => dispatch(getComments(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
