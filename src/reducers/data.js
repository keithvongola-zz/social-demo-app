import { fromJS } from 'immutable';
import { createReducer } from '../helpers';

const initialState = fromJS({
  rows: [],
});

const actionsMap = {
};

export default createReducer(initialState, actionsMap);
