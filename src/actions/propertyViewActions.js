import * as types from './actionTypes';

export const switchPropertyViewSuccess = view => {
  return { type: types.SWITCH_PROPERTY_VIEW_SUCCESS, view };
};

export const loadPropertySuccess = view => {
  return { type: types.LOAD_PROPERTY_VIEW_SUCCESS, view };
};

export const switchPropertyView = view => {
  // API logic goes here.
  return (dispatch, getState) => {
    dispatch(switchPropertyViewSuccess(view));
  };
};

export const loadProperty = () => {
  // API Logic
  // return(dispatch, getState) => {
  //   dispatch(loadPropertySuccess())
  // }
};
