import dayjs from 'dayjs';

export const getDifference = (day) => {
  const inputDate = dayjs(day, 'M/D/YYYY');
  const currentDate = dayjs();
  const diffDays = currentDate.diff(inputDate, 'days');
  return `${diffDays} days ago`;
};
