import dayjs from 'dayjs';

export const getDifference = (day: string): string => {
  const inputDate = dayjs(day, 'M/D/YYYY');
  const currentDate = dayjs();
  const diffDays = currentDate.diff(inputDate, 'day');
  return `${diffDays} days ago`;
};
