<template>
  <div>
    <p><b>CamelCase: </b>{{ camelCase(state.about) }}</p>
    <p><b>CapitalizeCase: </b>{{ capitalizeCase(state.name) }}</p>
    <p><b>SentenceCase: </b>{{ sentenceCase(state.company) }}</p>
    <p><b>KebabCase: </b>{{ kebabCase(state.balance) }}</p>
    <p><b>PascalCase: </b>{{ pascalCase(state.address) }}</p>
    <p><b>LowerCase: </b>{{ lowerCase(state.email) }}</p>
    <p><b>UpperCase: </b>{{ upperCase(state.gender) }}</p>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
import { useStringCase } from '../../../src';

export default {
  name: 'CaseComponent',
  setup() {
    const state = reactive({
      name: 'imelda white',
      gender: 'female',
      company: 'NEUROCELL',
      email: 'Imeldawhite@nr.com',
      balance: '3,814.49',
      about: 'Veniam fugiat pariatur adipisicing do consequat.',
      address: 'bulwer place, lemoyne, district of columbia, 5597',
    });

    const { camelCase, kebabCase, pascalCase, upperCase, lowerCase, sentenceCase, capitalizeCase } = useStringCase();

    return {
      state,
      camelCase,
      kebabCase,
      pascalCase,
      upperCase,
      lowerCase,
      sentenceCase,
      capitalizeCase,
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 0.3rem solid #42b983;
  color: #666;
  font-family: monospace;
  padding: 1em 1.5em;
  display: block;
}
</style>
