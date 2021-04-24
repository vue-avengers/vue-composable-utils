<template>
  <div>
    <p><b>Format: </b>{{ dateFormat }}</p>
    <p><b>TimeAgo: </b>{{ timeAgoFormat }}</p>
    <p><b>GetDate: </b>{{ getDateFormat }}</p>
    <p><b>Difference: </b>{{ differenceFormat }}</p>
    <p><b>Utc: </b>{{ utcFormat }}</p>
    <p><b>Timezone: </b>{{ timezoneFormat }}</p>
  </div>
</template>

<script>
import { useDate } from '../../../src';

export default {
  name: 'DateComponent',
  setup() {
    const date = new Date();

    const { format, timeAgo, getDate, utc, timezone, difference } = useDate();

    const dateFormat = format(date, 'LLLL');
    const timeAgoFormat = timeAgo(date, '2021-04-07:23:00');
    const getDateFormat = getDate('date');
    const differenceFormat = difference(date, '2018-06-05', 'day');
    const utcFormat = utc(date, 'LLLL');
    const timezoneFormat = timezone(date, 'America/New_York', 'L LT');

    return {
      dateFormat,
      timeAgoFormat,
      getDateFormat,
      differenceFormat,
      utcFormat,
      timezoneFormat,
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 4px solid #c9c9c9;
  color: #666;
  font-family: monospace;
  padding: 1em 1.5em;
  display: block;
}
</style>
