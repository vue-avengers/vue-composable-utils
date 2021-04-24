<template>
  <div ref="resizeRef">
    <pre class="resize">{{ JSON.stringify({screenWidth, screenHeight, ratiowh, ratiohw, rect}, undefined, 2) }}</pre>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useResize } from "../../../src";

export default {
  name: "ResizeComponent",
  setup() {
    const resizeRef = ref(null);
    const { screenWidth, screenHeight, ratiowh, ratiohw, rect } = useResize(resizeRef);

    return { screenWidth, screenHeight, ratiowh, ratiohw, rect, resizeRef };
  },
};
</script>

<style lang="scss">
.resize {
  background-color: #f4f4f4 !important;
  border: 1px solid #ddd;
  border-left: 4px solid #c9c9c9;
  color: #666;
  font-family: monospace;
  padding: 1em 1.5em;
  display: block;
}

</style>
