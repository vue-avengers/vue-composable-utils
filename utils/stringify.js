const stringifyObject = (object, brace = ';') => {
  const keyValuePairs = Object.entries(object).filter(pair => pair[0] || pair[1]);

  return keyValuePairs.reduce((acc, item, index) => {
    if (index === keyValuePairs.length - 1) {
      return (acc = acc + `${item[0]}=${item[1]}`);
    }

    return (acc = acc + `${item[0]}=${item[1]}${brace}`);
  }, '');
};

export { stringifyObject };
