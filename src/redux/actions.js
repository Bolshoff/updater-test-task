import { ADD_PROJECT, REMOVE_PROJECT } from './actionTypes';

export const addNewProject = (project) => ({
  type: ADD_PROJECT,
  payload: {
    id: Date.now(),
    title: project?.title,
    description: project?.description,
  },
});

export const deleteProject = (id) => ({
  type: REMOVE_PROJECT,
  id,
});
