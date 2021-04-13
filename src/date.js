import Vue from 'vue';

export function useDate(lang = 'en') {
  const vm = Vue.prototype;

  const format = (date, dateFormat) => {
    return vm.$dayjs(date).locale(lang).format(dateFormat);
  };

  const timeAgo = (date, time) => {
    return vm.$dayjs(date).locale(lang).to(vm.$dayjs(time));
  };

  const getDate = unit => {
    return vm.$dayjs().get(unit);
  };

  const utc = (date, format) => {
    return vm.$dayjs(date).utc().locale(lang).format(format);
  };

  const timezone = (date, local, format) => {
    return vm.$dayjs(date).tz(local).locale(lang).format(format);
  };

  const difference = (datePri, dateSec, unit) => {
    const datePrimary = vm.$dayjs(datePri);
    const dateSecondary = vm.$dayjs(dateSec);

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
}
