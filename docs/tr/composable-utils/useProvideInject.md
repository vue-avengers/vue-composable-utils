# :sparkles: useProvideInject

> `useProvideInject`, vue 3/composition-api ile birlikte gelen provide - inject özelliğinin kolay şekilde kullanılmasını amaçlayarak geliştirilmiştir. Javascript object, array ve primitive veri tiplerinin yanısıra Vue Reactivity Api kullanan verilerinizi global olarak erişilebilir kılabilirsiniz.

## :maple_leaf: Kullanım
Provide ile yayınladığınız tüm `key - value` ikilileri bütün alt komponentler tarafından erişilebilir hale gelir.

#### Normal bir javascript object ile kullanım

```js
// Parent.vue
import { useProvideInject } from 'vue-composable-utils';

export default {
  setup() {
    const { useProvide } = useProvideInject();

    // pass a key and a value to the method
    useProvide(
      'identity',
      {
        name: 'Jane Wilson'
        gender: 'female',
        age: 23,
        job: 'web developer'
      }
    );
  },
}

// Child.vue
import { useProvideInject } from 'vue-composable-utils';

export default {
  setup() {
    const { useInject } = useProvideInject();

    const theIdentity = useInject('identity');
  },
}
```

#### Vue Reactivity Api ile kullanım

```js
useProvide(
  'identity',
  ref({
    name: 'Jane Wilson'
    gender: 'female',
    age: 23,
    job: 'web developer'
  })
);
```

## :bouquet: Uygulama

Üst komponentte, veride (provide) yaptığınız değişiklikler `ref()` kullanıldığı durumlarda alt komponentlerde de görülür.

<ProvideComponent />
