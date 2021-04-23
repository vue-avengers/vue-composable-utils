<template>
  <div>
    <p>String: {{ string }}</p>
    <button class="btn" @click="camelCase">camelCase</button>
    <button class="btn" @click="kebabCase">kebab-case</button>
    <button class="btn" @click="pascalCase">Pascal case</button>
  </div>
</template>

<script>
import { useStringCase } from '../../../src';
export default {
  name: 'StringCaseComponent',
  setup() {
    const { string, setString, camelCase, kebabCase, pascalCase } = useStringCase('Hello World');

    return {
      string,
      setString,
      camelCase,
      kebabCase,
      pascalCase,
    };
  },
};
</script>
