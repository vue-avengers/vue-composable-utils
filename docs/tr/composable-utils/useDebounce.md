# :sparkles: useDebounce

> `useDebounce` fonksiyonu işlem tekrar çalıştırılmadan önce belirli bir süre beklemeyi sağlar. Fonksiyonun çağırılma sayısını sınırlamak için oluşturlmuştur.(Örn. Kullanıcının bir butona kaç kez bastığına bakılmaksızın belirlenen sabit zamandan sonra işlemi gerçekleştirir.)

## :convenience_store: Kullanım

`useDebounce` fonksiyonunun kullanım şekli aşağıdaki gibidir.

```js
import { useDebounce } from 'vue-composable-utils';
const { debounceVal, value, debounceListener } = useDebounce(1000);
```

## :rocket: Özellikleri

`useDebounce` 1 adet parametre alır ve 3 adet özelliğe sahiptir.

`Özellikler`

1 - `debounceVal` --> Belirlenen zamandan sonra gelen değer.

2 - `value` --> Kullanıcı tarafından girilen ilk değer.

3 - `debounceListener` --> Verilen zamanın sonunda `debounce` değeri atamak için kullanılır.

`Parametreler` --> `useDebounce(delay)`

1- `delay` --> Milisaniye cinsinden gecikme süresidir.

## :computer: Uygulama

Aşağıdaki örneği kullanarak reaktif olarak nasıl çalıştığını görebilirsiniz.

<DebounceComponent />

```vue
<template>
  <div>
    <p>Value : {{ debounceVal }}</p>
    <input :value="value" @input="debounceListener" placeholder="search here" />
    <small>Delay is set to 1000ms.</small>
  </div>
</template>

<script>
import { useDebounce } from 'vue-composable-utils';

export default {
  name: 'Debounce',
  setup() {
    const { debounceVal, value, debounceListener } = useDebounce(1000);
    return {
      debounceVal,
      value,
      debounceListener,
    };
  },
};
</script>

<style scoped>
p {
  margin: 10px;
  padding: 0.8em 0.8em;
  text-transform: uppercase;
  font-weight: 700;
  color: #8e44ad;
}

input {
  border: 2px solid #8e44ad;
  margin: 10px;
  padding: 0.8em 0.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: #8e44ad;
}
</style>
```

<ToggleDarkMode/>
