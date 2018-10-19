import { connect } from 'react-redux';
import { selectAlbumsPreview } from '../../selectors/data';
import Albums from './Albums';

const mapStateToProp = state => ({
  albums: selectAlbumsPreview(state),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProp, mapDispatchToProps)(Albums);
