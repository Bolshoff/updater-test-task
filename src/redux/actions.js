import {
  // eslint-disable-next-line import/named
  ADD_PROJECT, SET_CURRENT_PROJECT, REMOVE_PROJECT, ADD_TASK,
} from './actionTypes';

export const addNewProject = (project) => ({
  type: ADD_PROJECT,
  payload: {
    id: Date.now(),
    title: project?.title,
    description: project?.description,
    tasks: [],
  },
});

export const deleteProject = (id) => ({
  type: REMOVE_PROJECT,
  id,
});

export const setCurrentProject = (movie) => ({
  type: SET_CURRENT_PROJECT,
  payload: movie,

});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now(),
    title: task?.title,
    description: task?.description,
    subtasks: [],
  },
});
