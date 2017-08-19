import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function propertyViewReducer(
  state = initialState.propertyView,
  action
) {
  switch (action.type) {
    case types.SWITCH_PROPERTY_VIEW_SUCCESS:
      return { activeWindow: action.view };
    default:
      return state;
  }
}
