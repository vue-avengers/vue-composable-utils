<template>
  <div>
    <p><b>First: </b> {{ first }}</p>
    <p><b>Last: </b> {{ last }}</p>
    <p><b>Size: </b> {{ size }}</p>
    <button class="fourth" @click="set([...state, (last || 0) + 1])">Add</button>
    <button class="first" @click="remove()">Remove</button>
  </div>
</template>

<script>
import { useQueue } from '../../../src';

export default {
  name: 'QueueComponentTwo',
  setup() {
    const { set, state, remove, first, last, size } = useQueue();

    return { set, state, remove, first, last, size };
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

button {
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid $red;
  border-radius: 0.6em;
  color: $red;
  cursor: pointer;
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

.first {
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  &:hover {
    color: #fff;
    box-shadow: 0 0 40px 40px $red inset;
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
