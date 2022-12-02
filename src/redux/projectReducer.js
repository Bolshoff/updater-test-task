import { ADD_PROJECT, REMOVE_PROJECT } from './actionTypes';

const projectState = {
  projects: [],
};

export const projectReducer = (action, state = projectState) => {
  switch (action) {
    case ADD_PROJECT:
      return {
        ...state, projects: [...state.projects, action.payload],
      };
    case REMOVE_PROJECT:
      // eslint-disable-next-line no-case-declarations
      const newProjectList = state.projects.filter((item) => item.id !== action.id);
      return {
        ...state,
        projects: newProjectList,
      };

    default:
      return state;
  }
};
