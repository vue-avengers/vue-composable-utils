const useClipboard = () => {
  const copy = (value, container = document) => {
    try {
      const tempInput = document.createElement('textarea');
      tempInput.value = value;
      tempInput.setAttribute('readonly', '');
      container.appendChild(tempInput);
      tempInput.select();

      document.execCommand('copy');
      container.removeChild(tempInput);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return {
    copy,
  };
};

export default useClipboard;
