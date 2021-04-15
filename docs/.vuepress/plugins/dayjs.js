import Vue from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';
import 'dayjs/locale/ar';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

Object.defineProperties(Vue.prototype, {
  $dayjs: {
    get() {
      return dayjs;
    },
  },
});
