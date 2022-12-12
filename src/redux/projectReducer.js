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
      // eslint-disable-next-line no-case-declarations
      const {
        projectId, task, status, priority,
      } = action.payload;

      console.log('p.id', state.projects.map((p) => (p.id)));
      console.log('action id', action.payload.projectId.id);
      return {
        ...state,
        // eslint-disable-next-line max-len
        projects: state.projects.map((p, i) => (p.id === action.payload.projectId.id ? p.tasks.push({
          number: i.tasks.indexOf(task),
          projectId,
          id: Date.now(),
          title: task,
          description: task?.description,
          status,
          priority,
          subtasks: [],
        }) && p : p)),
      };

    default:
      return state;
  }
};
