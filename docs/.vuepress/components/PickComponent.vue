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
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
}
</style>
