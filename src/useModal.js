import { useState } from './useState';

const useModal = (initItem = {}, initVisible = false) => {
  const [visible, setVisible] = useState(initVisible);

  const [current, setCurrent] = useState(initItem);

  const openModal = item => {
    setCurrent(item);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setCurrent();
  };

  return { visible, setVisible, current, openModal, closeModal };
};

export default useModal;
