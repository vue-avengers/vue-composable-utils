# :sparkles: useProvideInject

> `useProvideInject` allows you to use vue 3/composition-api' s provide - inject feature in a handy way. You can use reactivity api refs for values with unique Symbol keys.

## :maple_leaf: Usage
Provide a key value pair in parent component, then it will be available for all child components.

#### Usage with a regular javascript object

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

#### Usage with Vue Reactivity Api

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

## :bouquet: Example

The changes that you made in the parent component can seen immediately in the child components using `ref()`.

<ProvideComponent />
