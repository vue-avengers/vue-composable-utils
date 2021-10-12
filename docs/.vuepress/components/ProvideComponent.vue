<template>
<div>
  <h4>Parent Component</h4>
  <div class="id-card">
    <label>The identity:</label>
    <ul>
      <li>{{identity.name}}</li>
      <li>{{identity.gender}}</li>
      <li>{{identity.age}}</li>
      <li>{{identity.job}}</li>
    </ul>
  </div>
  <button @click="provideId">Provide the id</button>
  <p>You can change the values of the identity</p>
  <input v-model="identity.name" />
  <input v-model="identity.gender" />
  <input v-model="identity.age" />
  <input v-model="identity.job" />
  <inject-component v-if="dataProvided" />
</div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useProvideInject } from '../../../src';
import InjectComponent from './InjectComponent';

export default {
  components: {
    InjectComponent
  },
  setup() {
    const dataProvided = ref(false);
    const identity = ref({ name: 'Jane Wilson', gender: 'Female', age: 23, job: 'Web Developer' });

    const { useProvide } = useProvideInject();

    useProvide('identity', identity);

    const provideId = () => {
      dataProvided.value = true;
    };

    return {
      provideId,
      dataProvided,
      identity,
    };
  },
}
</script>

<style lang="scss">
$green: #42B983;

.id-card {
  border-radius: 0.6em;
  background-color: rgba(66, 185, 131, 0.3);
  color: #666;
  padding: 1em 3em 1em 1em;
  width: fit-content;
  margin-bottom: 1em;
}

button {
  background-color: transparent;
  border: 2px solid $green;
  border-radius: 0.6em;
  color: $green;
  cursor: pointer;
  align-self: center;
  line-height: 1;
  padding: 0.8em 0.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 12px;
  transition: background-color 0.5s;

  &:hover,
  &:focus {
    color: #fff;
    background-color: $green;
  }
}

input {
  padding: 0.5em;
  border-radius: 0.6em;
  border: 0.5px solid #666;
  color: #666;

  &:focus {
    outline: none;
    border-color: $green;
  }
}
</style>
