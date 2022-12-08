import { ADD_PROJECT, ADD_TASK, REMOVE_PROJECT } from './actionTypes';

const defaultState = {
  projects: [],
};
// eslint-disable-next-line default-param-last
export const projectReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      // eslint-disable-next-line no-case-declarations
      const { id, title, description } = action.payload;
      return {
        ...state,
        projects: [
          ...state.projects,
          {
            id,
            title,
            description,
            isCompleted: false,
            tasks: [],
          }],
      };
    case REMOVE_PROJECT:
      // eslint-disable-next-line no-case-declarations
      const newProjectList = state.projects.filter((item) => item.id !== action.id);
      return {
        ...state,
        projects: newProjectList,
      };
    case ADD_TASK:
      return {
        ...state,
        projects: [
          ...state.projects,
          tasks
        ],
      };

    default:
      return state;
  }
};
