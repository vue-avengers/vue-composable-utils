import { useState } from './useState';

const useStringCase = initialState => {
  const [string, setString] = useState(initialState);

  const camelCase = () => {
    setString(initialState);
    const camelCaseType = string.value
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '');
    console.log(camelCaseType);
    setString(camelCaseType);
  };
  const kebabCase = () => {
    setString(
      string.value
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(item => item.toLowerCase())
        .join('-'),
    );
  };
  const pascalCase = () => {
    setString(string.value.replace(/\w\S*/g, word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()));
  };
  return {
    string,
    setString,
    camelCase,
    kebabCase,
    pascalCase,
  };
};

export default useStringCase;
