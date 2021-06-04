import { ACTION_TYPES_MINUS, ACTION_TYPES_PLUS, ACTION_TYPES_SUBMIT_VALUE } from "../actionTypes";

const initialState = {
  number: 0,
  text: "",
};

export const numberReducer = (state = initialState, action) => {
  if (action.type === ACTION_TYPES_PLUS) {
    console.log("state in state plus ", state);
    const newState = { ...state };
    newState.number = newState.number + 1;
    return newState;
  }
  if (action.type === ACTION_TYPES_MINUS) {
    console.log("state in state minus ", state);
    const newState = { ...state };
    newState.number = newState.number - 1;
    return newState;
  }

  if (action.type === ACTION_TYPES_SUBMIT_VALUE) {
    console.log("state in state submit_value ", state);
    console.log("state in action submit_value ", action);
    const newState = { ...state };
    newState.number = Number(action.value);
    return newState;
  }
  return state;
};
