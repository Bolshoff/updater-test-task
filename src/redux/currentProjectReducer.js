import { SET_CURRENT_PROJECT } from './actionTypes';

const defaultState = {
  currentProject: null,
};

// eslint-disable-next-line default-param-last
export const currentProjectReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_PROJECT:
      return { currentProject: action.payload };
    default:
      return state;
  }
};
