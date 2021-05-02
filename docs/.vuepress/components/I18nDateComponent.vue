<template>
  <div class="date">
    <div class="wrapper">
      <div class="select">
        <select v-model="selectedLang">
          <option v-for="lang in languages" :value="lang.key" :key="lang.key">{{ lang.name }}</option>
        </select>
        <h4>Language: {{ langUnit }}</h4>
      </div>
    </div>
    <p><b>Format: </b>{{ dateFormat }}</p>
    <p><b>TimeAgo: </b>{{ timeAgoFormat }}</p>
    <p><b>GetDate: </b>{{ getDateFormat }}</p>
    <p><b>Difference: </b>{{ differenceFormat }}</p>
    <p><b>Utc: </b>{{ utcFormat }}</p>
    <p><b>Timezone: </b>{{ timezoneFormat }}</p>
  </div>
</template>

<script>
import { usei18nDate } from '../../../src';
import { ref, computed, watch } from '@vue/composition-api';
export default {
  name: 'I18nDateComponent',
  setup() {
    const date = new Date();
    const selectedLang = ref('tr');
    const langUnit = ref('tr');
    const languages = ref([
      {
        key: 'tr',
        name: 'Turkish',
      },
      {
        key: 'en',
        name: 'English',
      },
      {
        key: 'ar',
        name: 'Arabic',
      },
    ]);

    const { format, timeAgo, getDate, utc, timezone, difference } = usei18nDate(langUnit);

    watch(selectedLang, currentValue => {
      langUnit.value = currentValue;
    });

    const dateFormat = computed(() => format(date, 'LLLL'));
    const timeAgoFormat = computed(() => timeAgo(date, '2021-04-07:23:00'));
    const getDateFormat = computed(() => getDate('date'));
    const differenceFormat = computed(() => difference(date, '2018-06-05', 'day'));
    const utcFormat = computed(() => utc(date, 'LLLL'));
    const timezoneFormat = computed(() => timezone(date, 'America/New_York', 'L LT'));

    return {
      dateFormat,
      timeAgoFormat,
      getDateFormat,
      differenceFormat,
      utcFormat,
      timezoneFormat,
      languages,
      langUnit,
      selectedLang,
    };
  },
};
</script>

<style lang="scss" scoped>
$purple: #8e44ad;

.date {
  .wrapper {
    margin-top: 30px;

    .select {
      display: flex;
      align-items: center;
      height: 30px;

      select {
        border: 2px solid $purple;
        border-radius: 0.6em;
        padding: 0.8em 0.8em;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 12px;

        &:hover,
        &:focus {
          outline: 0;
        }
      }
    }

    h4 {
      margin-left: 20px;
    }
  }

  p {
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 0.3rem solid #42b983;
    color: #666;
    font-family: monospace;
    padding: 1em 1.5em;
    display: block;
  }
}
</style>
