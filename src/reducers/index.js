import { combineReducers } from 'redux';
import colors from './colorReducers';
import propertyView from './propertyViewReducer';

const rootReducer = combineReducers({ colors, propertyView });

export default rootReducer;
