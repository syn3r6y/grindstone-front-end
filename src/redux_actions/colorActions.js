import * as types from './actionTypes';

export const addColorSuccess = color => {
  return { type: types.ADD_COLOR_SUCCESS, color };
};

export const switchActiveColorSuccess = color => {
  return { type: types.SWITCH_ACTIVE_COLOR_SUCCESS, color };
};

export const addColor = color => {
  //API logic goes here.
  return (dispatch, getState) => {
    dispatch(addColorSuccess(color));
  };
};

export const switchActiveColor = color => {
  return (dispatch, getState) => {
    dispatch(switchActiveColorSuccess(color));
  };
};
