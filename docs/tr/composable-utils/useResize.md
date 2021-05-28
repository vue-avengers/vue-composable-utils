# :sparkles: useResize

> The `useResize ()` function is used to return a copy of the filtered object using the given `key` value. This function provides the desired condition by specifying which properties are selected from the object.

## :sparkles: Usage

The example usage of `useResize` function is shown below.

```js
import { useResize } from 'vue-composable-utils';
const { screenWidth, screenHeight, ratiowh, ratiohw, rect } = useResize(resizeRef);
```

## :rocket: Features

`useResize` takes two parameters.

| Parameter      | Description                                        |
| :------------- | :------------------------------------------------- |
| `screenWidth`  | The object to be processed.                        |
| `screenHeight` | Optional. The `key` value that should be selected. |

## :computer: Example

You can see how it changes reactively using the example below.

<ResizeComponent />

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

<style lang="scss">
.resize {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 4px solid #c9c9c9;
  color: #666;
  font-family: monospace;
  padding: 1em 1.5em;
  display: block;
}
</style>
```

<ToggleDarkMode/>
