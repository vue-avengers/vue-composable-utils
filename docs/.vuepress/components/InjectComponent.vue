<template>
<div>
  <h4>Child Component</h4>
  <div class="card">
    <p>Id 👩</p>
    <p>{{ identity.name }}</p>
    <p>{{ identity.gender }}</p>
    <p>{{ identity.age }}</p>
    <p>{{ identity.job }}</p>
  </div>
</div>
</template>

<script>
import { useProvideInject } from '../../../src';

export default {
  name: 'inject-component',
  setup() {
    const { useInject } = useProvideInject();

    return {
      identity: useInject('identity'),
    };
  },
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 0.3rem solid #42b983;
  color: #666;
  font-family: monospace;
  padding: 1em 1.5em;
  display: block;
}
</style>
