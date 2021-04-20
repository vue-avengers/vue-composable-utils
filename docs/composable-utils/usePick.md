# :sparkles: usePick

> The `usePick ()` function is used to return a copy of the filtered object using the given `key` value. This function provides the desired condition by specifying which properties are selected from the object.

## :sparkles: Usage

The example usage of `usePick` function is shown below.

```js
import { usePick } from 'vue-composable-utils';
const pick = usePick({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'd']);
```

## :rocket: Features

`usePick` takes two parameters.

| Parameter | Description                                                     |
| :-------- | :---------------------------------------------------------------|
| `Object`  | The object to be processed.                                     |
| `Keys`    | Optional. The `key` value that should be selected.              |

## :computer: Example

You can see how it changes reactively using the example below.

<PickComponent />

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

<style lang="scss" scoped>
p {
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
}
</style>
```

<ToggleDarkMode/>
