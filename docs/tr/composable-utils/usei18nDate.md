# :sparkles: usei18nDate

> `usei18nDate` fonksiyonu bileşenlerde tarih işlemlerini kolayca yaptığımız bir fonksiyondur.

## :convenience_store: Kullanım

`usei18nDate` fonksiyonunun import edilmesi.

```js
import { usei18nDate } from 'vue-composable-utils';
const { format, timeAgo, getDate, utc, timezone, difference } = usei18nDate('Type a here....');
```

## :hammer_and_wrench: Kurulum

### :key: 1. Adım

src/dayjs.js

`src` klasörünün içine `dayjs.js` adında bir dosya açılır aşağıdaki kodları eklenir. Dayjs.js dosyasını src'ye eklememizin nedeni dayjs kütüphanesinin özelleştirilebilir olmasıdır.

#### dayjs.js

```js
import Vue from 'vue';
import dayjs from 'dayjs';
// Farklı dil seçeneklerinin eklenmesi için "dayjs/locale/{dil kodu}" şeklinde kullanılır.
// For the other language options, add "dayjs/locale/{langCode}"
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
```

### :key: 2. Adım

`main.js` dosyasının içerisine `dayjs.js` dosyasını import edilir.

#### main.js

```js
import Vue from 'vue';
import App from './App.vue';
import VueCompositionApi from '@vue/composition-api';
// "dayjs.js" import edilir
import './dayjs.js';

Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
```

## :rocket: Example.vue

<I18nDateComponent />

```js
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
import {ref, computed} from '@vue/composition-api'
import { usei18nDate } from "vue-composable-utils";

export default {
  name: "Example",
  setup() {
    const date = new Date();
    const langUnit = ref('tr')

    // usei18nDate fonksiyonu eklenir ve istenilen özellikleri kullanılır.
		// usei18nDate gönderilen parametre dil seçeneğini temsil eder.
    const { format, timeAgo, getDate, utc, timezone, difference } = usei18nDate(langUnit);

    const dateFormat = computed(() => format(date, 'LLLL'));
    const timeAgoFormat = computed(() => timeAgo(date, '2021-04-07:23:00'))
    const getDateFormat = computed(() => getDate('date'));
    const differenceFormat = computed(() => difference(date, '2018-06-05', 'day'));
    const utcFormat = computed(() => utc(date, 'LLLL'));
    const timezoneFormat = computed(() => timezone('2014-06-01 12:00', 'America/New_York', 'L LT'));


    return {
      dateFormat,
      timeAgoFormat,
      getDateFormat,
      differenceFormat,
      utcFormat,
      timezoneFormat,
      langUnit,
    };
  };
};
</script>

```

## :star2: Özellikler

### format() Fonksiyonu

Gönderilen tarihi formatlamak için kullanılır. 2 tane parametre alır. Birinci parametre olarak formatlanmak istenilen tarih. İkinci parametre ise format biçimi verilir.

```js
const dateFormat = format(date, 'dddd'); // Cuma, 9 Nisan 2021 21:14
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
| Format | İngilizce Yerel Ayarları | Örnek Çıktı|
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

Örnek

```js
const dateFormat = format(date, 'LLLL'); // Friday, April 9, 2021 9:23 PM
const dateFormat = format(date, 'llll'); // Fri, Apr 9, 2021 9:23 PM
const dateFormat = format(date, 'll'); // Apr 9, 2021
```

### getDate() Fonksiyonu

```js
const getDateFormat = getDate('date'); // date => Ayın Tarihi
```

| Birim        | Kısa gösterim |                             Açıklama |
| :----------- | :-----------: | -----------------------------------: |
| `date`       |       D       |                          Ayın Tarihi |
| `day`        |       d       | Haftanın Günü (Pazar 0, Cumartesi 6) |
| `month`      |       M       |               Ay (Ocak 0, Aralık 11) |
| `year`       |       y       |                                  Yıl |
| `hour`       |       h       |                                 Saat |
| `minute`     |       m       |                               Dakika |
| `second`     |       s       |                               Saniye |
| `milisecond` |      ms       |                           Milisaniye |

### difference() Fonksiyonu

Belirlenen zaman birimine göre iki tarih arasındaki farkı verir.

3 parametre alır.

1- Birinci Tarih

2- İkinci Tarih

3- İki tarih arasındaki zaman birimi

```js
// İki tarih arasında kaç gün olduğunu bildirir.
const differenceFormat = difference(date1, date2, 'day');

// İki tarih arasında kaç ay olduğunu bildirir.
const differenceFormat = difference(date1, date2, 'mount');
```

### utc() Fonksiyonu

2 parametre alır. Birinci parametre gönderilen tarih. İkinci parametre tarih birimi.

```js
const utcFormat = utc(date, 'llll');
```

### timezone() Fonksiyonu

3 tane parametre alır.

1- Tarih

2- Lokasyon Location

3- Biçimlendirilmek istenilen birim Format Unit

```js
const timezoneFormat = timezone('2014-06-01 12:00', 'Europe/Istanbul', 'LLLL');
```

<ToggleDarkMode/>
