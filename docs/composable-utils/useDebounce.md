# :sparkles: useDebounce

> `useDebounce` function is used to wait for the given period of time before the next operation is run again. Limits the number of requests for the next operation.(eg. The operation is run after the given period of time regardless how many times the user clicks the button.)

## :maple_leaf: Usage

The example usage of `useDebounce` function is shown below.

```js
import { useDebounce } from 'vue-composable-utils';
const { debounceVal, value, debounceListener } = useDebounce(1000);
```

## :rocket: Features

`useDebounce` has one parameter and three properties.

`Properties`

| Name               |                                                  Description |
| :----------------- | -----------------------------------------------------------: |
| `debounceVal`      |                            Final value after the given time. |
| `value`            |              The initial value that is inserted by the user. |
| `debounceListener` | Is used to assign `debounce` value at the end of given time. |

`Parameter` --> `useDebounce(delay)`

| Name    |                               Description |
| :------ | ----------------------------------------: |
| `delay` | The given period of time in milliseconds. |

## :bouquet: Example

You can see how it changes reactively using the example below.

<DebounceComponent />

:::: tabs type:border-card
::: tab template lazy

```html
<template>
  <div>
    <p>Value : {{ debounceVal }}</p>
    <input :value="value" @input="debounceListener" placeholder="search here" />
    <small>Delay is set to 1000ms.</small>
  </div>
</template>
```

:::
::: tab javascript lazy

```js
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
```

:::
::: tab scss lazy

```scss
p {
  margin: 10px;
  padding: 0.8em 0.8em;
  text-transform: uppercase;
  font-weight: 700;
  color: #8e44ad;
}

input {
  border: 2px solid #8e44ad;
  margin: 10px;
  padding: 0.8em 0.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: #8e44ad;
}
```

:::
::::

<ToggleDarkMode/>
