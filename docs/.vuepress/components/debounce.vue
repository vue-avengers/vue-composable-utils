<template>
  <div>
    <p>Value : {{ debounceVal }}</p>
    <input :value="value" @input="debounceListener" placeholder="Type a here..." /><br />
    <small>Delay is set to 1000ms.</small>
  </div>
</template>

<script>
import { useDebounce } from '../../../src';

export default {
  name: 'Debounce',
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
  margin: 10px;
  padding: 0.8em 0.8em;
  text-transform: uppercase;
  font-weight: 700;
  color: #8e44ad;
}

input {
  border: 2px solid #8e44ad;
  margin: 10px;
  padding: 0.8em 0.8em;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  color: #8e44ad;
}
</style>
