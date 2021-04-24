# :calendar: useDate

> `useDate` It is a function that we have completed date operations in functions.

## :convenience_store: Usage

`useDate` function import.

```js
import { useDate } from 'vue-composable-utils';
const { format, timeAgo, getDate, utc, timezone, difference } = useDate();
```

## :rocket: Example

<DateComponent />

Example.vue

```js
<template>
  <div id="app">
    <p>{{ dateFormat }}</p>
    <p>{{ timeAgoFormat }}</p>
    <p>{{ getDateFormat }}</p>
    <p>{{ differenceFormat }}</p>
    <p>{{ utcFormat }}</p>
    <p>{{ timezoneFormat }}</p>
  </div>
</template>

<script>
import { useDate } from "vue-composable-utils";

export default {
  name: "Examples",
  setup(props) {
    // The useDate function is added and the desired properties are used.
		// The parameter sent from useDate represents the language option.
    const { format, timeAgo, getDate, utc, timezone, difference } = useDate();

    const dateFormat = format(date, 'LLLL'); // Friday, April 9, 2021 11:47 PM
    const timeAgoFormat = timeAgo(date, '2021-04-07:23:00')  // 2 days ago
    const getDateFormat = getDate('date'); // 10
    const differenceFormat = difference(date, '2018-06-05', 'day');  // 1400
    const utcFormat = utc(date, 'LLLL');
    const timezoneFormat = timezone('2014-06-01 12:00', 'America/New_York', 'L LT');

    return {
      dateFormat,
      timeAgoFormat,
      getDateFormat,
      differenceFormat,
      utcFormat,
      timezoneFormat
    };
  }
};
</script>
```

## :star2: Features

### format() Func

is used to format sent date. Gets two parameters. First one is the date that is going to be formatted, second one is format style.

```js
const dateFormat = format(date, 'dddd'); //  Friday, April 9, 2021 11:47 PM
const dateFormat = format(date, 'YYYY'); // 2021
const dateFormat = format(date, 'MMM'); // Jan-Dec
```

| Format |      Output      |                           Description |
| :----- | :--------------: | ------------------------------------: |
| `YY`   |        18        |                        Two-digit year |
| `YYYY` |       2018       |                       Four-digit year |
| `M`    |       1-12       |             The month, beginning at 1 |
| `MM`   |      01-12       |                   The month, 2-digits |
| `MMM`  |     Jan-Dec      |            The abbreviated month name |
| `MMMM` | January-December |                   The full month name |
| `D`    |       1-31       |                  The day of the month |
| `DD`   |      01-31       |        The day of the month, 2-digits |
| `d`    |       0-6        | The day of the week, with Sunday as 0 |
| `dd`   |      Su-Sa       |   The min name of the day of the week |
| `ddd`  |     Sun-Sat      | The short name of the day of the week |
| `dddd` | Sunday-Saturday  |       The name of the day of the week |
| `H`    |       0-23       |                              The hour |
| `HH`   |      00-23       |                    The hour, 2-digits |
| `h`    |       1-12       |               The hour, 12-hour clock |
| `hh`   |      01-12       |     The hour, 12-hour clock, 2-digits |
| `m`    |       0-59       |                            The minute |
| `mm`   |      00-59       |                  The minute, 2-digits |
| `s`    |       0-59       |                            The second |
| `ss`   |      00-59       |                  The second, 2-digits |
| `SSS`  |     000-999      |             The millisecond, 3-digits |
| `Z`    |      +05:00      |           The offset from UTC, ±HH:mm |
| `ZZ`   |      +0500       |            The offset from UTC, ±HHmm |
| `A`    |      AM PM       |                                       |
| `a`    |      am pm       |                                       |

Yerelleştirilmiş formatların listesi
| Format | English Locale | Sample Output|
| :--- | :----: | ---: |
| `LT` | h:mm A | 8:02 PM |
| `LTS` | h:mm:ss A | 8:02:18 PM |
| `L` | MM/DD/YYYY | 08/16/2018 |
| `LL` | MMMM D, YYYY | August 16, 2018 |
| `LLL` | MMMM D, YYYY h:mm A | August 16, 2018 8:02 PM |
| `LLLL` | dddd, MMMM D, YYYY h:mm A | Thursday, August 16, 2018 8:02 PM |
| `l` | M/D/YYYY | 8/16/2018 |
| `ll` | MMM D, YYYY | Aug 16, 2018 |
| `lll` | MMM D, YYYY h:mm A | Aug 16, 2018 8:02 PM |
| `llll` | ddd, MMM D, YYYY h:mm A | Thu, Aug 16, 2018 8:02 PM |

Sample

```js
const dateFormat = format(date, 'LLLL'); // Friday, April 9, 2021 9:23 PM
const dateFormat = format(date, 'llll'); // Fri, Apr 9, 2021 9:23 PM
const dateFormat = format(date, 'll'); // Apr 9, 2021
```

### getDate() Func

```js
const getDateFormat = getDate('date'); // date => Ayın Tarihi
```

| Uni          | Shorted |                              Description |
| :----------- | :-----: | ---------------------------------------: |
| `date`       |    D    |                            Date of Month |
| `day`        |    d    | Day of Week (Sunday as 0, Saturday as 6) |
| `month`      |    M    |     Month (January as 0, December as 11) |
| `year`       |    y    |                                     Year |
| `hour`       |    h    |                                     Hour |
| `minute`     |    m    |                                   Minute |
| `second`     |    s    |                                   Second |
| `milisecond` |   ms    |                              Millisecond |

### difference() Func

Gives the difference of two dates according to the determined time unit.

Gets three parameters

1- First Date

2- Second Date

3- Time Unit

```js
// It tells you how many days are between two dates.
const differenceFormat = difference(date1, date2, 'day');

// Reports how many months are between two dates.
const differenceFormat = difference(date1, date2, 'mount');
```

### utc() Func

Gets two parameters. First one is the sent date, second one is date format unit.

```js
const utcFormat = utc(date, 'llll');
```

### timezone() Func

It takes 3 parameters.

1- Date

2- Location

3- Format Unit

```js
const timezoneFormat = timezone('2014-06-01 12:00', 'Europe/Istanbul', 'LLLL');
```

<ToggleDarkMode/>
