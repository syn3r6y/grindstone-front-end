import * as types from './actionTypes';

export const switchPropertyViewSuccess = view => {
  return { type: types.SWITCH_PROPERTY_VIEW_SUCCESS, view };
};

export const switchPropertyView = view => {
  //API logic goes here.
  return (dispatch, getState) => {
    dispatch(switchPropertyViewSuccess(view));
  };
};
