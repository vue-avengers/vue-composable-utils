<template>
  <div>
    <p><b>Event handler called:</b> {{ updated }}</p>
    <input :value="updated" @input="debouncedFn" placeholder="input" />
    <input disabled placeholder="output" :value="updated" /><br />
    <small>Delay is set to 1000ms.</small>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useDebounceFn } from '../../../src';

export default {
  name: 'DebouncedFnComponent',
  setup() {
    const updated = ref('');
    const fn = e => (updated.value = e.target.value);

    const debouncedFn = useDebounceFn({ delay: 1000, immediate: true }, fn);

    return { updated, debouncedFn };
  },
};
</script>

<style scoped>
p {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 0.3rem solid #42b983;
  color: #666;
  font-family: monospace;
  padding: 1em 1.5em;
  display: block;
}

input {
  border: 2px solid #8e44ad;
  padding: 0.8em 0.8em;
  font-weight: 700;
  color: #8e44ad;
  margin-bottom: 0.5rem;
}
</style>
