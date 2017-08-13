import { combineReducers } from 'redux';
import { addColorReducer } from './colorReducers';

const rootReducer = combineReducers({ addColorReducer });

export default rootReducer;
