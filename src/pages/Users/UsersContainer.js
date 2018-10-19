
import { connect } from 'react-redux';
import Users from './Users';
import { getUsers } from '../../actions/data';
import { selectUsers } from '../../selectors/data';

const mapStateToProps = state => ({
  users: selectUsers(state),
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
