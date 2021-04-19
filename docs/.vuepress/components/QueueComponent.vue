<template>
  <div>
    <p>First: {{ first }}</p>
    <p>Last: {{ last }}</p>
    <p>Size: {{ size }}</p>
    <button class="fourth" @click="set([...state, ...data])">Add</button>
    <button class="first" @click="remove()">Remove</button>
  </div>
</template>

<script>
import { useQueue } from '../../../src';

export default {
  name: 'QueueComponent',
  setup() {
    const data = [
      { id: 9, name: 'John', age: 15, occupation: 'gardener' },
      { id: 10, name: 'Lenny', age: 51, occupation: 'programmer' },
    ];
    const { set, state, remove, first, last, size } = useQueue([
      { id: 1, name: 'John', age: 25, occupation: 'gardener' },
      { id: 2, name: 'Lenny', age: 51, occupation: 'programmer' },
      { id: 3, name: 'Andrew', age: 43, occupation: 'teacher' },
      { id: 4, name: 'Peter', age: 52, occupation: 'gardener' },
      { id: 5, name: 'Anna', age: 43, occupation: 'teacher' },
      { id: 6, name: 'Albert', age: 46, occupation: 'programmer' },
      { id: 7, name: 'Adam', age: 47, occupation: 'teacher' },
      { id: 8, ame: 'Robert', age: 32, occupation: 'driver' },
    ]);

    return { data, set, state, remove, first, last, size };
  },
};
</script>

<style lang="scss" scoped>
$red: #e74c3c;
$yellow: #f1c40f;

p {
  text-decoration: none;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
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
