import { provide, inject } from '@vue/composition-api';

const useProvideInject = () => {
  const useProvide = (key, value) => {
    const valueSymbol = Symbol.for(key);
    //const valueRef = withRef ? ref(value) : value;

    provide(valueSymbol, value);
  };

  const useInject = value => {
    const injected = inject(Symbol.for(value));

    return injected;
  };

  return {
    useProvide,
    useInject,
  };
};

export default useProvideInject;
