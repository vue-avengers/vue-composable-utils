<template>
  <div>
    <p><b>Select:</b> {{ value }}</p>
    <select class="fourth" @change="changed">
      <option value="apple">Apple</option>
      <option value="orange">Orange</option>
      <option value="watermelon">Watermelon</option>
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
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 4px solid #c9c9c9;
  color: #666;
  font-family: monospace;
  padding: 1em 1.5em;
  display: block;
}

select {
  border: 2px solid $yellow;
  border-radius: 0.6em;
  padding: 0.8em 0.8em;
  letter-spacing: 0.15rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;

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
