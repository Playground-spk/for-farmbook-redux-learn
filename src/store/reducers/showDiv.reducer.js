const initialState = {
  isShow: true,
};

export const showDivReducer = (state = initialState, action) => {
  if (action.type === "isShow") {
    const newState = { ...state };
    newState.isShow = false;
    return newState;
  }
  return state;
};
