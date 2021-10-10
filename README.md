<p align="center"><a href="https://vue-composable-utils.netlify.app" target="_blank" rel="noopener noreferrer"><img width="250" src="https://vue-composable-utils.netlify.app/assets/vue-composable-utils-logo.svg" alt="Vue Composable Utils logo"></a></p>
<h1 align="center">Vue Composable Utils</h1>
<p align="center">Reusability and Composition functions.</p>

## :sunflower: Introduction

Vue Composable Utils implemented as vue composition functions. currently usable with the `@vue/composition-api`.

## :package: Installation

```bash
# install with yarn
yarn add @vue/composition-api vue-composable-utils
# install with npm
npm install @vue/composition-api vue-composable-utils
```

## :books: Documentation

Check our [documentation](https://vue-composable-utils.netlify.app/)

## :rocket: Composable Utils

| Name                                                                                                | Arguments | Returns                                                                                     |
| --------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------- |
| [`UseBind`](https://vue-composable-utils.netlify.app/composable-utils/useBind.html)                 | initial   | value, changed, reset                                                                       |
| [`UseEmbed`](https://vue-composable-utils.netlify.app/composable-utils/useEmbed.html)               | initial   | isEmbedBlock, clear                                                                         |
| [`UseState`](https://vue-composable-utils.netlify.app/composable-utils/useState.html)               | initial   | value, set                                                                                  |
| [`UseDebounce`](https://vue-composable-utils.netlify.app/composable-utils/useDebounce.html)         | initial   | value, delay, debounceVal, debounceListener                                                 |
| [`UseDebounceFn`](https://vue-composable-utils.netlify.app/composable-utils/useDebounceFn.html)     | initial   | delay, immediate, fn                                                                        |
| [`UsePick`](https://vue-composable-utils.netlify.app/composable-utils/usePick.html)                 | Parameter | Object, Keys                                                                                |
| [`UseResize`](https://vue-composable-utils.netlify.app/composable-utils/useResize.html)             | initial   | screenWidth, screenHeight, ratiowh, ratiohw, rect                                           |
| [`UseLocalStorage`](https://vue-composable-utils.netlify.app/composable-utils/useLocalStorage.html) | initial   | value, key,                                                                                 |
| [`UseQuene`](https://vue-composable-utils.netlify.app/composable-utils/useQuene.html)               | initial   | set, state, remove, first, last, size                                                       |
| [`UseModal`](https://vue-composable-utils.netlify.app/composable-utils/useModal.html)               | initial   | visible, setVisible, current, openModal, closeModal                                         |
| [`UseDarkMode`](https://vue-composable-utils.netlify.app/composable-utils/useDarkMode.html)         | initial   | darkMode, setDarkMode                                                                       |
| [`UseStringCase`](https://vue-composable-utils.netlify.app/composable-utils/useStringCase.html)     | initial   | string, camelCase,capitalizeCase, sentenceCase, kebabCase, pascalCase, lowerCase, upperCase |
| [`UseDate`](https://vue-composable-utils.netlify.app/composable-utils/useDate.html)                 | initial   | format, timeAgo, getDate, utc, timezone, difference                                         |
| [`Usei18nDate`](https://vue-composable-utils.netlify.app/composable-utils/usei18nDate.html)         | initial   | format, timeAgo, getDate, utc, timezone, difference,                                        |
| [`UseCookie`](https://vue-composable-utils.netlify.app/composable-utils/useCookie.html)             | initial   | cookie, appendCookie,setCookie, parseCookie ,getCookie, deleteCookie                        |
| [`UseClipboard`](https://vue-composable-utils.netlify.app/composable-utils/useClipboard.html)       | initial   | copy, set                                                                                   |
| [`UseList`](https://vue-composable-utils.netlify.app/composable-utils/useList.html)                 | initial   | list, set, reduce, sort, first, deleteFirst, deleteLast, last,filter, push, reset           |

- [UseBind](https://vue-composable-utils.netlify.app/composable-utils/useBind.html).
- [UseEmbed](https://vue-composable-utils.netlify.app/composable-utils/useEmbed.html).
- [UseState](https://vue-composable-utils.netlify.app/composable-utils/useState.html).
- [UseList](https://vue-composable-utils.netlify.app/composable-utils/useList.html).

## :computer: Usage

# :sparkles: useBind

```vue
<template>
  <div>
    <p>Input : {{ value }}</p>
    <input type="text" :value="value" @input="changed" />
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
import { useBind } from 'vue-composable-utils';

export default {
  setup() {
    const { value, changed, reset } = useBind('Type here....');
    return { value, changed, reset };
  },
};
</script>
```

```vue
<template>
  <div>
    <p>Select : {{ value }}</p>
    <div>
      <select @change="changed">
        <option value="apple">apple</option>
        <option value="orange">orange</option>
        <option value="watermelon">Watermelon</option>
        <option value="strawberry">Strawberry</option>
      </select>
    </div>
  </div>
</template>

<script>
import { useBind } from 'vue-composable-utils';

export default {
  setup() {
    const { value, changed, reset } = useBind('Type a here....');
    return { value, changed, reset };
  },
};
</script>
```

# :sparkles: useModal

```vue
<template>
  <div class="modal-vue">
    <!-- button show -->
    <button class="btn yellow" @click="handleButton">show</button>

    <!-- overlay -->
    <div class="overlay" v-if="visible"></div>

    <!-- modal -->
    <div class="modal" v-if="visible">
      <div class="modal-header">Modal Header</div>
      <button class="close" @click="closeModal">x</button>
      <div class="modal-content" v-for="curr in current" :key="curr.id">
        <ul>
          <li>
            <p>{{ curr.emoji }}</p>
            <h1>{{ curr.fullname }}</h1>
            <span>{{ curr.job }}</span>
          </li>
        </ul>
      </div>
      <div class="modal-footer">Modal Footer</div>
    </div>
  </div>
</template>

<script>
import { useModal } from 'vue-composable-utils';

export default {
  setup() {
    const contrubitors = [
      {
        id: 1,
        emoji: '👨',
        fullname: 'Abdulnasır Olcan',
        job: 'Frontend Developer',
      },
      {
        id: 2,
        emoji: '👩',
        fullname: 'Büşra Şanlıbayrak',
        job: 'Frontend Developer',
      },
      {
        id: 3,
        emoji: '👨',
        fullname: 'Mehmet Varol',
        job: 'Frontend Developer',
      },
    ];
    const { visible, setVisible, current, openModal, closeModal } = useModal();

    const handleButton = () => {
      openModal(contrubitors);
      setVisible(true);
    };

    return { handleButton, visible, current, closeModal };
  },
};
</script>
```

# :sparkles: usePick

```vue
<template>
  <p>{{ JSON.stringify(pick) }}</p>
</template>

<script>
import { usePick } from 'vue-composable-utils';

export default {
  setup() {
    const pick = usePick(
      {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      },
      ['a', 'd'],
    );

    return {
      pick,
    };
  },
};
</script>
```

# :sparkles: useResize

```vue
<template>
  <div ref="resizeRef">
    <pre class="resize">{{ JSON.stringify({ screenWidth, screenHeight, ratiowh, ratiohw, rect }, undefined, 2) }}</pre>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useResize } from 'vue-composable-utils';

export default {
  setup() {
    const resizeRef = ref(null);
    const { screenWidth, screenHeight, ratiowh, ratiohw, rect } = useResize(resizeRef);

    return { screenWidth, screenHeight, ratiowh, ratiohw, rect, resizeRef };
  },
};
</script>
```

# :sparkles: useState

```vue
<template>
  <p>{{ count }}</p>
  <button @click="setCount(count - 1)">Decrement</button>
  <button @click="setCount(count + 1)">Increment</button>
</template>

<script>
import { useState } from 'vue-composable-utils';

export default {
  setup() {
    const [count, setCount] = useState(0);

    return {
      count,
      setCount,
    };
  },
};
</script>
```

# :sparkles: useStringCase

```vue
<template>
  <div>
    <p><b>CamelCase: </b>{{ camelCase(state.about) }}</p>
    <p><b>CapitalizeCase: </b>{{ capitalizeCase(state.name) }}</p>
    <p><b>SentenceCase: </b>{{ sentenceCase(state.company) }}</p>
    <p><b>KebabCase: </b>{{ kebabCase(state.balance) }}</p>
    <p><b>PascalCase: </b>{{ pascalCase(state.address) }}</p>
    <p><b>LowerCase: </b>{{ lowerCase(state.email) }}</p>
    <p><b>UpperCase: </b>{{ upperCase(state.gender) }}</p>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
import { useStringCase } from 'vue-composable-utils';

export default {
  setup() {
    const state = reactive({
      name: 'imelda white',
      gender: 'female',
      company: 'NEUROCELL',
      email: 'Imeldawhite@nr.com',
      balance: '3,814.49',
      about: 'Veniam fugiat pariatur adipisicing do consequat.',
      address: 'bulwer place, lemoyne, district of columbia, 5597',
    });

    const { camelCase, kebabCase, pascalCase, upperCase, lowerCase, sentenceCase, capitalizeCase } = useStringCase();

    return {
      state,
      camelCase,
      kebabCase,
      pascalCase,
      upperCase,
      lowerCase,
      sentenceCase,
      capitalizeCase,
    };
  },
};
</script>
```

# :sparkles: useQueue

```vue
<template>
  <div>
    <p>First: {{ first }}</p>
    <p>Last: {{ last }}</p>
    <p>Size: {{ size }}</p>
    <button @click="set([...state, ...data])">Add</button>
    <button @click="remove()">Remove</button>
  </div>
</template>

<script>
import { useQueue } from 'vue-composable-utils';

export default {
  setup() {
    const data = [
      { id: 9, name: 'John', age: 15, occupation: 'gardener' },
      { id: 10, name: 'Lenny', age: 51, occupation: 'programmer' },
    ];
    const { set, state, remove, first, last, size } = useQueue([
      { id: 1, name: 'John', age: 25, occupation: 'gardener' },
      { id: 2, name: 'Lenny', age: 51, occupation: 'programmer' },
      { id: 3, name: 'Andrew', age: 43, occupation: 'teacher' },
      { id: 4, name: 'Peter', age: 52, occupation: 'gardener' },
      { id: 5, name: 'Anna', age: 43, occupation: 'teacher' },
      { id: 6, name: 'Albert', age: 46, occupation: 'programmer' },
      { id: 7, name: 'Adam', age: 47, occupation: 'teacher' },
      { id: 8, ame: 'Robert', age: 32, occupation: 'driver' },
    ]);

    return { data, set, state, remove, first, last, size };
  },
};
</script>
```

# :sparkles: useClipboard

```vue
<template>
  <div class="clipboard" ref="clipboardRef">
    <div>
      <p>{{ copyText }}</p>
      <button class="btn" @click="onCopy">Copy</button>
    </div>
    <div>
      <input type="text" v-model="clipboardModel" />
      <button class="btn" @click="onCopyInput">Copy</button>
      <p>{{ clipboardModel }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useClipboard } from 'vue-composable-utils';

export default {
  name: 'ClipboardComponent',
  setup() {
    const clipboardRef = ref(null);
    const clipboardModel = ref(null);
    const copyText = ref('Kopyalanmak istenilen veri...');

    const { copy } = useClipboard();

    const onCopy = () => {
      copy(copyText.value, clipboardRef.value);
    };

    const onCopyInput = () => {
      copy(clipboardModel.value, clipboardRef.value);
    };

    return {
      copy,
      onCopy,
      copyText,
      onCopyInput,
      clipboardRef,
      clipboardModel,
    };
  },
};
</script>
```

# :sparkles: useDarkMode

```vue
<template>
  <div>
    <a @click="setDarkMode((darkMode = !darkMode))">
      <p v-if="darkMode">🌞 Light</p>
      <p v-if="!darkMode">🌜 Dark</p>
    </a>
  </div>
</template>

<script>
import { useDarkMode } from 'vue-composable-utils';

export default {
  setup() {
    const { darkMode, setDarkMode } = useDarkMode();
    return { darkMode, setDarkMode };
  },
};
</script>
```

# :sparkles: useDate

```vue
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
import { useDate } from 'vue-composable-utils';

export default {
  setup(props) {
    // The useDate function is added and the desired properties are used.
    // The parameter sent from useDate represents the language option.
    const { format, timeAgo, getDate, utc, timezone, difference } = useDate();

    const dateFormat = format(date, 'LLLL'); // Friday, April 9, 2021 11:47 PM
    const timeAgoFormat = timeAgo(date, '2021-04-07:23:00'); // 2 days ago
    const getDateFormat = getDate('date'); // 10
    const differenceFormat = difference(date, '2018-06-05', 'day'); // 1400
    const utcFormat = utc(date, 'LLLL');
    const timezoneFormat = timezone('2014-06-01 12:00', 'America/New_York', 'L LT');

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
```

# :sparkles: useDebounce

```vue
<template>
  <div>
    <p>Value : {{ debounceVal }}</p>
    <input :value="value" @input="debounceListener" placeholder="search here" />
    <small>Delay is set to 1000ms.</small>
  </div>
</template>

<script>
import { useDebounce } from 'vue-composable-utils';

export default {
  name: 'Debounce',
  setup() {
    const { debounceVal, value, debounceListener } = useDebounce(1000);
    return {
      debounceVal,
      value,
      debounceListener,
    };
  },
};
</script>
```

# :sparkles: useDebounceFn

```vue
<template>
  <div>
    <p>Event handler : {{ updated }}</p>
    <input :value="updated" @input="debouncedFn" placeholder="input" />
    <input disabled placeholder="output" :value="updated" />
    <small>Delay is set to 1000ms.</small>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useDebounceFn } from 'vue-composable-utils';

export default {
  setup() {
    const updated = ref('');
    const fn = e => (updated.value = e.target.value);

    const debouncedFn = useDebounceFn({ delay: 1000, immediate: true }, fn);

    return { updated, debouncedFn };
  },
};
</script>
```

# :sparkles: usei18nDate

```vue
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
import { ref, computed } from '@vue/composition-api';
import { usei18nDate } from 'vue-composable-utils';

export default {
  setup(props) {
    const date = new Date();
    const langUnit = ref('en');

    // The usei18nDate function is added and the desired properties are used.
    // The parameter sent from usei18nDate represents the language option.
    const { format, timeAgo, getDate, utc, timezone, difference } = usei18nDate(langUnit);

    const dateFormat = computed(() => format(date, 'LLLL')); // Friday, April 9, 2021 11:47 PM
    const timeAgoFormat = computed(() => timeAgo(date, '2021-04-07:23:00')); // 2 days ago
    const getDateFormat = computed(() => getDate('date')); // 10
    const differenceFormat = computed(() => difference(date, '2018-06-05', 'day')); // 1400
    const utcFormat = computed(() => utc(date, 'LLLL'));
    const timezoneFormat = computed(() => timezone('2014-06-01 12:00', 'America/New_York', 'L LT'));

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
```

# :sparkles: useEmbed

```vue
<template>
  <div class="example-container">
    <div class="flex-container">
      <textarea rows="5" cols="50" placeholder="Place embed code here" v-model="code"></textarea>
      <button type="button" class="clear-button" @click="clear">Clear</button>
    </div>
    <div v-if="isEmbedBlock" v-html="code" class="embed-block"></div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useEmbed } from 'vue-use-embed';

export default {
  setup() {
    const code = ref(null);

    const { isEmbedBlock, clear } = useEmbed(code);

    return {
      code,
      clear,
      isEmbedBlock,
    };
  },
};
</script>
```

# :sparkles: useLocalStorage

```vue
<template>
  <div>
    <p>value is: {{ value }}</p>
    <button @click="value = '2'">Change</button>
  </div>
</template>

<script>
import { useLocalStorage } from 'vue-composable-utils';

export default {
  setup() {
    const { value } = useLocalStorage('test', 1);

    return { value };
  },
};
</script>
```

# :sparkles: useList

```vue
<template>
  <div>
    <p>list: {{ JSON.stringify(list) }}</p>
    <button @click="sort((a, b) => a - b)">Sort List</button>
    <button @click="set([...list, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])">Set list</button>
    <button
      @click="
        reduce((total, next) => {
          return total + next;
        })
      "
    >
      Sum list
    </button>
    <button @click="reduce((t, n) => Math.max(t, n))">Max list</button>
    <button @click="reduce((t, n) => (t.includes(n) ? t : [...t, n]))">Unique List</button>
    <button @click="reduce((t, n) => [n, ...t])">Reverse List</button>
    <button @click="set([[...list], [11, [12], 13], [14, [15], 16, 17], [18, [19], 20]])">Set Multi Array</button>
    <button @click="reduce((t, n) => t.concat(n))">Flatten List</button>
    <button
      @click="
        reduce((t, n) => {
          t.push(n * 2);
          return t;
        })
      "
    >
      Map List
    </button>
    <button @click="deleteFirst">Delete First</button>
    <button @click="deleteLast">Delete Last</button>
    <button @click="first">First</button>
    <button @click="last">Last</button>
    <button @click="filter(a => a >= 5)">Greater than or equal to 5</button>
    <button @click="push(11, 12, 13, 14, 15, 16, 17, 18, 19, 20)">Push</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
import { useList } from 'vue-composable-utils';

export default {
  setup() {
    const { list, sort, set, reduce, first, deleteFirst, deleteLast, last, filter, push, reset } = useList([
      5,
      1,
      4,
      7,
      10,
      4,
      9,
      6,
      2,
      5,
      8,
      3,
    ]);

    return {
      list,
      set,
      reduce,
      sort,
      first,
      deleteFirst,
      deleteLast,
      last,
      filter,
      push,
      reset,
    };
  },
};
</script>
```

## :man: :woman: Contributors

<table>
  <tr>
    <td align="center"><a href="#"><img src="https://vue-composable-utils.netlify.app/contributors/logo-1.png" width="100px;" alt=""/><br /><sub><b>Abdulnasır Olcan</b></sub></a></td>
    <td align="center"><a href="#"><img src="https://vue-composable-utils.netlify.app/contributors/logo-2.png" width="100px;" alt=""/><br /><sub><b>Büşra Şanlıbayrak</b></sub></a></td>
    <td align="center"><a href="#"><img src="https://vue-composable-utils.netlify.app/contributors/logo-3.png" width="100px;" alt=""/><br /><sub><b>Mehmet Varol</b></sub></a></td>
    <td align="center"><a href="#"><img src="https://vue-composable-utils.netlify.app/contributors/logo-2.png" width="100px;" alt=""/><br /><sub><b>Rukiye Demir</b></sub></a></td>
    <td align="center"><a href="#"><img src="https://vue-composable-utils.netlify.app/contributors/logo-3.png" width="100px;" alt=""/><br /><sub><b>Burak Küçükali</b></sub></a></td>
    <td align="center"><a href="#"><img src="https://vue-composable-utils.netlify.app/contributors/logo-4.png" width="100px;" alt=""/><br /><sub><b>İlker İsmailoğlu</b></sub></a></td>
    <td align="center"><a href="#"><img src="https://vue-composable-utils.netlify.app/contributors/logo-1.png" width="100px;" alt=""/><br /><sub><b>Güvenç Terzierol</b></sub></a></td>
  </tr>
</table>

## License

MIT
