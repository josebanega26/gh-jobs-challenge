import { jobsTypes, JobsInterface } from './jobs.types';

const initialState = {
  currentJobs: [],
};
export default (state = initialState, { payload, type }: JobsInterface) => {
  switch (type) {
    case jobsTypes.FETCH_SUCCESSFULLY:
      return { ...state, currentJobs: payload };
    default:
      return state;
  }
};
