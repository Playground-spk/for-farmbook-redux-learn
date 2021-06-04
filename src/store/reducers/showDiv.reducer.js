import { ACTION_TYPES_IS_SHOW } from "../actionTypes";

const initialState = {
  isShow: true,
};

export const showDivReducer = (state = initialState, action) => {
  if (action.type === ACTION_TYPES_IS_SHOW) {
    const newState = { ...state };
    newState.isShow = false;
    return newState;
  }
  return state;
};
