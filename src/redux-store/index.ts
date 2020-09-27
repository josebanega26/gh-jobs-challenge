import { combineReducers } from 'redux';

import jobsReducer from './jobs/jobs.reducer';
const reducer = combineReducers({
  jobs: jobsReducer,
});

export type RootState = ReturnType<typeof reducer>;
export const rootReducer = reducer;
