# :sparkles: useDarkMode

> The `useDarkMode ()` function is used to return a copy of the filtered object using the given `key` value. This function provides the desired condition by specifying which properties are selected from the object.

## :maple_leaf: Usage

The example usage of `useDarkMode` function is shown below.

```js
import { useDarkMode } from 'vue-composable-utils';
const { darkMode, setDarkMode } = useDarkMode();
```

## :rocket: Features

`useDarkMode` takes two parameters.

| Parameter     | Description                                        |
| :------------ | :------------------------------------------------- |
| `darkMode`    | The object to be processed.                        |
| `setDarkMode` | Optional. The `key` value that should be selected. |

## :bouquet: Example

You can see how it changes reactively using the example below.

<DarkModeComponent />

:::: tabs type:border-card
::: tab template lazy

```html
<template>
  <div>
    <a @click="setDarkMode((darkMode = !darkMode))">
      <p v-if="darkMode">🌞 Light</p>
      <p v-if="!darkMode">🌜 Dark</p>
    </a>
  </div>
</template>
```

:::
::: tab javascript lazy

```js
import { useDarkMode } from 'vue-composable-utils';

export default {
  setup() {
    const { darkMode, setDarkMode } = useDarkMode();
    return { darkMode, setDarkMode };
  },
};
```

:::
::: tab scss lazy

```scss
.theme-dark {
  background: black;
  color: white;
}

a {
  cursor: pointer;
  text-decoration: none !important;
}

p {
  font-size: 1.5em;
}
```

:::
::::

<ToggleDarkMode/>
