import { combineReducers } from 'redux';
import colors from './colorReducers';
import propertyViews from './propertyViewReducer';

const rootReducer = combineReducers({ colors, propertyViews });

export default rootReducer;
