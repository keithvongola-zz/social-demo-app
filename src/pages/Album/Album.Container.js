import { connect } from 'react-redux';
import { selectPhotosWithAlbumId } from '../../selectors/data';
import Album from './Album';

const mapStateToProp = (state, props) => ({
  photos: selectPhotosWithAlbumId(state, props),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProp, mapDispatchToProps)(Album);
