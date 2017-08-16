import * as types from '../actions/actionTypes';
import initialState from './initialState';

export const addColorReducer = (state = initialState.colors, action) => {
  switch (action.type) {
    case types.ADD_COLOR_SUCCESS:
      return [...state, action.color];
    default:
      return state;
  }
};
