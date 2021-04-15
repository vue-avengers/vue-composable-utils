<template>
  <div>
    <p>Value is: {{ value }}</p>
    <button class="fourth" @click="value = '2'">Change</button>
  </div>
</template>

<script>
import { useLocalStorage } from '../../../src';

export default {
  name: 'LocalStorage',
  setup() {
    const { value } = useLocalStorage('test', 1);

    return { value };
  },
};
</script>

<style lang="scss" scoped>
$green: #2ecc71;
$red: #e74c3c;
$blue: #3498db;
$yellow: #f1c40f;
$purple: #8e44ad;
$turquoise: #1abc9c;

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
  text-transform: uppercase;
  font-weight: 700;
  color: #8e44ad;
}
button {
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid $red;
  border-radius: 0.6em;
  color: $red;
  cursor: pointer;
  // display: flex;
  align-self: center;
  line-height: 1;
  margin: 10px;
  padding: 1.2em 1.2em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 12px;

  &:hover,
  &:focus {
    outline: 0;
  }
}

.fourth {
  border-color: $yellow;
  color: #000;
  background: {
    image: linear-gradient(45deg, $yellow 50%, transparent 50%);
    position: 100%;
    size: 400%;
  }
  transition: background 300ms ease-in-out;

  &:hover {
    color: #fff;
    background-position: 0;
  }
}
</style>
