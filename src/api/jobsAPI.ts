import { IJob } from 'models/jobs.model';

const PROXY_PATH = 'https://cors-anywhere.herokuapp.com/';
const BASE_PATH = 'https://jobs.github.com/positions.json';

const params = {
  description: 'description=',
  location: 'location=',
  page: 'page=',
};

export const getAllJobs = async (description?: string, localitation?: string) => {
  try {
    const response = await fetch(`${PROXY_PATH}${BASE_PATH}`);
    console.log(response);
    const data = await response.json();
    console.log('data', data);
    return data as IJob[];
  } catch (e) {
    console.log(e);
  }
};
