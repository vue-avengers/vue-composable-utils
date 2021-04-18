import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

const useDate = () => {
  const format = (date, dateFormat) => {
    return dayjs(date).format(dateFormat);
  };

  const timeAgo = (date, time) => {
    return dayjs(date).to(dayjs(time));
  };

  const getDate = unit => {
    return dayjs().get(unit);
  };

  const utc = (date, format) => {
    return dayjs(date).utc().format(format);
  };

  const timezone = (date, local, format) => {
    return dayjs(date).tz(local).format(format);
  };

  const difference = (datePri, dateSec, unit) => {
    const datePrimary = dayjs(datePri);
    const dateSecondary = dayjs(dateSec);

    return datePrimary.diff(dateSecondary, unit);
  };

  return {
    format,
    timeAgo,
    getDate,
    utc,
    timezone,
    difference,
  };
};

export default useDate;
