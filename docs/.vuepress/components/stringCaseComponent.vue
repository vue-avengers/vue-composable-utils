<template>
  <div>
    <p>String: {{ string }}</p>
    <button class="btn btn-first" @click="camelCase">camelCase</button>
    <button class="btn btn-second" @click="kebabCase">kebab-case</button>
    <button class="btn btn-second" @click="pascalCase">Pascal case</button>
  </div>
</template>

<script>
import { useStringCase } from "../../../src"
export default {
  name: "stringCaseComponent",
  setup() {
    const { string, setString, camelCase, kebabCase, pascalCase} = useStringCase("Hello World")

    return {
      string,
      setString,
      camelCase,
      kebabCase,
      pascalCase
    }
  }
}
</script>

<style>

</style>
