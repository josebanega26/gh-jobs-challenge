import { IJob } from 'models/jobs.model';

export const jobsTypes = {
  FETCH_SUCCESSFULLY: '[Jobs] FETCH_SUCCESSFULLY',
  FETCH_FAILED: '[Jobs] FETCH_FAILED',
  SET_JOBS: '[Jobs] SET_JOBS',
};

export type FetchSuccessfully = {
  type: typeof jobsTypes.FETCH_SUCCESSFULLY;
  payload: IJob[];
};

export type JobsInterface = FetchSuccessfully;
