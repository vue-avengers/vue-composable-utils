# :sparkles: useDebounceFn

> `useDebounceFn()` fonksiyonu işlemin tekrar çalıştırılmadan önce belirli bir süre beklemeyi sağlar. Fonksiyonun çağırılma sayısını sınırlamak için oluşturlmuştur.(Örn. Kullanıcının bir butona kaç kez basıldığına bakılmaksızın belirlenen sabit zamandan sonra işlemi gerçekleştirir.)

## :convenience_store: Kullanım

`UseDebounceFn` fonksiyonunun kullanım şekli aşağıdaki gibidir.

```js
import { ref } from 'vue';
import { useDebouncefn } from 'vue-composable-utils';
const updated = ref('');
const fn = e => (updated.value = e.target.value);
const debouncedFn = useDebouncefn({ delay: 1000, immediate: true }, fn);
```

## :rocket: Özellikler

`useDebounceFn` fonksiyonu nesne içerisinde iki parametre `{delay: 1000, immediate: true}` özelliklerini içerir ve callback fonksiyon alır.

`delay` --> Milisaniye cinsinden geçikme süresidir.

`immediate` --> Eğer immediate true ise fonksiyon hemen tetiklenir.

`fn` --> Debounce zamanından sonra yürütmek istediğimiz callback fonksiyondur.

## :computer: Uygulama

Aşağıdaki örneği kullanarak reaktif olarak nasıl çalıştığını görebilirsiniz.

<DebouncedFnComponent />

```vue
<template>
  <div>
    <p>Event handler : {{ updated }}</p>
    <input :value="updated" @input="debouncedFn" placeholder="input" />
    <input disabled placeholder="output" :value="updated" />
    <small>Delay is set to 1000ms.</small>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useDebounceFn } from 'vue-composable-utils';

export default {
  setup() {
    const updated = ref('');
    const fn = e => (updated.value = e.target.value);

    const debouncedFn = useDebounceFn({ delay: 1000, immediate: true }, fn);

    return { updated, debouncedFn };
  },
};
</script>

<style scoped>
input {
  margin: 0.5em;
  padding: 0.8em;
}
</style>
```

<ToggleDarkMode/>
