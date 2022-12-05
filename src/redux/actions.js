import { ADD_PROJECT, SET_CURRENT_PROJECT } from './actionTypes';

export const addNewProject = (project) => ({
  type: ADD_PROJECT,
  payload: {
    id: Date.now(),
    title: project?.title,
    description: project?.description,
    tasks: [],
  },
});
// export function addNewProject(project) {
//   return {
//     type: ADD_PROJECT,
//     payload: {
//       id: Date.now(),
//       title: project?.title,
//       description: project?.description,
//     },
//   };
// }

// export const deleteProject = (id) => ({
//   type: REMOVE_PROJECT,
//   id,
// });
export const setCurrentProject = (movie) => ({
  type: SET_CURRENT_PROJECT,
  payload: movie,

});
