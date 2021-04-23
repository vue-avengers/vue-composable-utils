import { ref } from '@vue/composition-api';

const useStringCase = (lang = 'en') => {
  const locale = ref(lang);

  const camelCase = str =>
    str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLocaleLowerCase(locale) : word.toLocaleUpperCase(locale);
      })
      .replace(/\s+/g, '');

  const kebabCase = str =>
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(item => item.toLocaleLowerCase(locale))
      .join('-');

  const pascalCase = str =>
    str.replace(/\w\S*/g, word => word.charAt(0).toLocaleUpperCase(locale) + word.substr(1).toLocaleLowerCase(locale));

  const capitalizeCase = str => {
    const camelized = str.replace(/[-_](\w)/g, (_, c) => c.toLocaleUpperCase(locale));
    return camelized[0].toLocaleUpperCase(locale) + camelized.slice(1);
  };

  const lowerCase = str => str.toLocaleLowerCase(locale);

  const upperCase = str => str.toLocaleUpperCase(locale);

  const sentenceCase = str => str.toLocaleLowerCase(locale).replace(/(^\s*\w|[.!?]\s*\w)/g, s => s.toLocaleUpperCase(locale));

  return {
    camelCase,
    kebabCase,
    pascalCase,
    upperCase,
    lowerCase,
    sentenceCase,
    capitalizeCase,
  };
};

export default useStringCase;
