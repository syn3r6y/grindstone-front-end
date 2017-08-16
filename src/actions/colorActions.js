import * as types from './actionTypes';

export const addColorSuccess = color => {
  console.log(color);
  return { type: types.ADD_COLOR_SUCCESS, color };
};

export const addColor = color => {
  //API logic goes here.
  return (dispatch, getState) => {
    dispatch(addColorSuccess(color));
  };
};
