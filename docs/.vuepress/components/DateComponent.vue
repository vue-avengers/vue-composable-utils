<template>
  <div class="date">
    <div>
      <p>format() --></p>
      <p>{{ dateFormat }}</p>
    </div>
    <div>
      <p>timeAgo() --></p>
      <p>{{ timeAgoFormat }}</p>
    </div>
    <div>
      <p>getDate() --></p>
      <p>{{ getDateFormat }}</p>
    </div>
    <div>
      <p>difference() --></p>
      <p>{{ differenceFormat }}</p>
    </div>
    <div>
      <p>utc() --></p>
      <p>{{ utcFormat }}</p>
    </div>
    <div>
      <p>timezone() --></p>
      <p>{{ timezoneFormat }}</p>
    </div>
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
$green: #2ecc71;
$red: #e74c3c;
$blue: #3498db;
$yellow: #f1c40f;
$purple: #8e44ad;
$turquoise: #1abc9c;

.date {
  .wrapper {
    margin-top: 30px;

    .select {
      display: flex;
      align-items: center;
      height: 30px;
    }

    h4 {
      margin-left: 20px;
    }
  }

  div {
    font-size: 16px;
    display: flex;
    p {
      margin: 10px;
      font-size: 16px;
      font-weight: 700;
      color: #8e44ad;

      &:first-child {
        color: #000;
      }
    }
  }
}
</style>
