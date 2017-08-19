import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function addColorReducer(state = initialState.colors, action) {
  switch (action.type) {
    case types.ADD_COLOR_SUCCESS:
      return {
        ...state.directory,
        directory: [...state.directory, action.color]
      };
    case types.SWITCH_ACTIVE_COLOR_SUCCESS:
      return { ...state.activeColor, activeColor: action.color };
    default:
      return state;
  }
}
