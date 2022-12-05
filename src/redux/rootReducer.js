import { combineReducers } from 'redux';
import { projectReducer } from './projectReducer';
import { currentProjectReducer } from './currentProjectReducer';

export const rootReducer = combineReducers({
  projectReducer,
  currentProjectReducer,

});
