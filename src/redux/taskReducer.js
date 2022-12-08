import { ADD_TASK } from './actionTypes';

const defaultState = {
  tasks: [],
};
// eslint-disable-next-line default-param-last
export const taskReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
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
      // case REMOVE_PROJECT:
      //     // eslint-disable-next-line no-case-declarations
      //     const newProjectList = state.projects.filter((item) => item.id !== action.id);
      //     return {
      //         ...state,
      //         projects: newProjectList,
      //     };

    default:
      return state;
  }
};
