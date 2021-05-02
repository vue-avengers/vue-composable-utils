<template>
  <p>{{ JSON.stringify(pick) }}</p>
</template>

<script>
import { usePick } from '../../../src';

export default {
  name: 'PickComponent',
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
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 0.3rem solid #42b983;
  color: #666;
  font-family: monospace;
  padding: 1em 1.5em;
  display: block;
  font-size: 1.1rem;
}
</style>
