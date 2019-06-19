import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import account from 'ducks/account';

const reducers = combineReducers({
  account,
  toastr: toastrReducer
});

export default reducers;