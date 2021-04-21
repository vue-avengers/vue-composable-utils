# :sparkles: useDarkMode

> The `useDarkMode ()` function is used to return a copy of the filtered object using the given `key` value. This function provides the desired condition by specifying which properties are selected from the object.

## :sparkles: Usage

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

## :computer: Example

You can see how it changes reactively using the example below.

<DarkModeComponent />

```vue
<template>
  <div>
    <a class="cursor-p" @click="setDarkMode((darkMode = !darkMode))">
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

<style lang="scss" scoped>
.theme-dark {
  background: black;
  color: white;
}

.cursor-p {
  cursor: pointer;
}

p {
  font-size: 1.5em;
}
</style>
```

<ToggleDarkMode/>
