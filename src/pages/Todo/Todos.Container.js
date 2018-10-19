import { connect } from 'react-redux';
import Todos from './Todos';
import {
  selectTodos,
} from '../../selectors/data';

const mapStateToProps = state => ({
  todos: selectTodos(state),
});


export default connect(mapStateToProps, null)(Todos);
