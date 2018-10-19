import { connect } from 'react-redux';
import { selectAlbumsPreview } from '../../selectors/data';
import Albums from './Albums';

const mapStateToProp = state => ({
  albums: selectAlbumsPreview(state),
});

export default connect(mapStateToProp, null)(Albums);
