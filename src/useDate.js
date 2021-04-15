import Vue from 'vue';

const useDate = (lng) => {
  const vm = Vue.prototype;
  const lang = ref(lng);

  watch(lng, currentValue => {
    lang.value = currentValue;
  });

  const format = (date, dateFormat) => {
    return vm.$dayjs(date).locale(lang.value).format(dateFormat);
  };

  const timeAgo = (date, time) => {
    return vm.$dayjs(date).locale(lang.value).to(vm.$dayjs(time));
  };

  const getDate = unit => {
    return vm.$dayjs().get(unit);
  };

  const utc = (date, format) => {
    return vm.$dayjs(date).utc().locale(lang.value).format(format);
  };

  const timezone = (date, local, format) => {
    return vm.$dayjs(date).tz(local).locale(lang.value).format(format);
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
};

export default useDate;
