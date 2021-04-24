# :sparkles: useStringCase

> `useStringCase` is a function that alters string predetermined cases of strings

## :convenience_store: State

The `useStringCase` function is used as the following reactive state:

```js
import { useStringCase } from 'vue-composable-utils';
const { string, camelCase } = useStringCase('');
```

## :rocket: Features

The initial value is sent to the function `useStringCase()`.

`useStringCase` has 4 reactive properties

1 - `this section will be update` --> The value that is going to be binded.

2 - `this section will be update` --> The value that is going to be changed.

3 - `this section will be update` --> The value that is going to be changed.

4 - `this section will be update` --> The value that is going to be changed.

## :computer: Example

You can see how it changes reactively using the example below.

<CaseComponent />

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
    name: "imelda white",
    gender: "female",
    company: "NEUROCELL",
    email: "Imeldawhite@nr.com",
    balance: "3,814.49",
    about: "Veniam fugiat pariatur adipisicing do consequat.",
    address: "bulwer place, lemoyne, district of columbia, 5597",
    })

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

<ToggleDarkMode/>
