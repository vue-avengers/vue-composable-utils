<template>
  <div>
    <p>Select : {{ value }}</p>
    <select class="fourth" @change="changed">
      <option value="apple">Apple</option>
      <option value="orange">Orange</option>
      <option value="orange">Watermelon</option>
      <option value="strawberry">Strawberry</option>
    </select>
  </div>
</template>

<script>
import { useBind } from '../../../src';

export default {
  name: 'BindSelectComponent',
  setup() {
    const { value, changed, reset } = useBind('Type a here....');

    return { value, changed, reset };
  },
};
</script>

<style lang="scss" scoped>
$red: #e74c3c;
$yellow: #f1c40f;

p {
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
}

select {
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
  padding: 0.8em 0.8em;
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
