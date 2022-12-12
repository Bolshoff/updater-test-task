import { combineReducers } from 'redux';
import { projectReducer } from './projectReducer';
import { currentProjectReducer } from './currentProjectReducer';
import { currentTaskReducer } from './currentTaskReducer';

export const rootReducer = combineReducers({
  projectReducer,
  currentProjectReducer,
  currentTaskReducer,

});
