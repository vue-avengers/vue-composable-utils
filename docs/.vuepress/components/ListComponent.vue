<template>
  <div>
    <p>list: {{ JSON.stringify(list) }}</p>
    <button class="btn fourth" @click="sort((a, b) => a - b)">Sort List</button>
    <button class="btn fifth" @click="set([...list, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])">Set list</button>
    <button
      class="btn fourth"
      @click="
        reduce((total, next) => {
          return total + next;
        })
      "
    >
      Sum list
    </button>
    <button class="btn fifth" @click="reduce((t, n) => Math.max(t, n))">Max list</button>
    <button class="btn fourth" @click="reduce((t, n) => (t.includes(n) ? t : [...t, n]))">Unique List</button>
    <button class="btn fifth" @click="reduce((t, n) => [n, ...t])">Reverse List</button>
    <button class="btn fourth" @click="set([[...list], [11, [12], 13], [14, [15], 16, 17], [18, [19], 20]])">Set Multi Array</button>
    <button class="btn fifth" @click="reduce((t, n) => t.concat(n))">Flatten List</button>
    <button
      class="btn fourth"
      @click="
        reduce((t, n) => {
          t.push(n * 2);
          return t;
        })
      "
    >
      Map List
    </button>
    <button class="btn first" @click="deleteFirst">Delete First</button>
    <button class="btn first" @click="deleteLast">Delete Last</button>
    <button class="btn fifth" @click="first">First</button>
    <button class="btn fifth" @click="last">Last</button>
    <button class="btn fourth" @click="filter(a => a >= 5)">Greater than or equal to 5</button>
    <button class="btn fourth" @click="push(11, 12, 13, 14, 15, 16, 17, 18, 19, 20)">Push</button>
    <button class="btn first" @click="reset">Reset</button>
  </div>
</template>

<script>
import { useList } from '../../../src';

export default {
  name: 'ListComponent',
  setup() {
    const { list, sort, set, reduce, first, deleteFirst, deleteLast, last, filter, push, reset } = useList([
      5,
      1,
      4,
      7,
      10,
      4,
      9,
      6,
      2,
      5,
      8,
      3,
    ]);

    return {
      list,
      set,
      reduce,
      sort,
      first,
      deleteFirst,
      deleteLast,
      last,
      filter,
      push,
      reset,
    };
  },
};
</script>

<style lang="scss" scoped>
//Colours
$green: #2ecc71;
$red: #e74c3c;
$blue: #3498db;
$yellow: #f1c40f;
$purple: #8e44ad;
$turquoise: #1abc9c;

p {
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
}

.btn {
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

.fifth {
  border-color: $purple;
  border-radius: 0;
  color: $purple;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: $purple;
    z-index: -1;
    transition: width 150ms ease-in-out;
  }

  &:hover {
    color: #fff;
    &:after {
      width: 110%;
    }
  }
}
</style>
