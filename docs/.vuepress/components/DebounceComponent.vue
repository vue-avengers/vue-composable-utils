<template>
  <div>
    <p><b>Value: </b>{{ debounceVal }}</p>
    <input :value="value" @input="debounceListener" placeholder="Type a here..." /><br />
    <small>Delay is set to 1000ms.</small>
  </div>
</template>

<script>
import { useDebounce } from '../../../src';

export default {
  name: 'DebounceComponent',
  setup() {
    const { debounceVal, value, debounceListener } = useDebounce(1000);
    return {
      debounceVal,
      value,
      debounceListener,
    };
  },
};
</script>

<style scoped>
p {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 4px solid #c9c9c9;
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
