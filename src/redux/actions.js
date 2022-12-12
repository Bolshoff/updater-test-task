import {
  // eslint-disable-next-line import/named
  ADD_PROJECT, SET_CURRENT_PROJECT, REMOVE_PROJECT, ADD_TASK, SET_CURRENT_TASK,
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

export const setCurrentProject = (project) => ({
  type: SET_CURRENT_PROJECT,
  payload: project,

});

export const addTask = (task, projectId, status, priority, number) => ({
  type: ADD_TASK,
  payload: {
    number,
    projectId,
    id: Date.now(),
    task,
    description: task?.description,
    status,
    priority,
    subtasks: [],
    comments: [],
  },
});

export const setCurrentTask = (task) => ({
  type: SET_CURRENT_TASK,
  payload: task,

});
