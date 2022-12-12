import { SET_CURRENT_TASK } from './actionTypes';

const defaultState = {
  currentTask: null,
};

// eslint-disable-next-line default-param-last
export const currentProjectReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_TASK:
      return { currentTask: action.payload };
    default:
      return state;
  }
};
