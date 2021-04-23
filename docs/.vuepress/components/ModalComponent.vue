<template>
  <div class="modal-vue">
    <!-- button show -->
    <button class="btn fourth" @click="handleButton">show model</button>

    <!-- overlay -->
    <div class="overlay" v-if="visible"></div>

    <!-- modal -->
    <div class="modal" v-if="visible">
      <div class="modal-header">Modal Header</div>
      <button class="close" @click="closeModal">x</button>
      <div class="modal-content" v-for="contrubitor in current" :key="contrubitor.id">
        <ul>
          <li>
            <p>{{ contrubitor.emoji }}</p>
            <h1>{{ contrubitor.fullname }}</h1>
            <span>{{ contrubitor.programmer }}</span>
          </li>
        </ul>
      </div>
      <div class="modal-footer">Modal Footer</div>
    </div>
  </div>
</template>

<script>
import { useModal } from '../../../src';

export default {
  name: 'ModalComponent',
  setup() {
    const contrubitors = [
      {
        id: 1,
        emoji: '👨',
        fullname: 'Abdulnasır Olcan',
        programmer: 'Frontend Developer',
      },
      {
        id: 2,
        emoji: '👩',
        fullname: 'Büşra Şanlıbayrak',
        programmer: 'Frontend Developer',
      },
      {
        id: 3,
        emoji: '🧑‍',
        fullname: 'Mehmet Varol',
        programmer: 'Frontend Developer',
      },
    ];
    const { visible, setVisible, current, openModal, closeModal } = useModal();

    const handleButton = () => {
      openModal(contrubitors);
      setVisible(true);
    };

    return { handleButton, visible, current, closeModal };
  },
};
</script>

<style lang="scss">
$red: #e74c3c;
$yellow: #f1c40f;
.btn {
  width: 100%;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid $red;
  border-radius: 0.6em;
  color: $red;
  cursor: pointer;
  align-self: center;
  line-height: 1;
  margin: 10px;
  padding: 0.8em 0.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 12px;

  &:hover,
  &:focus {
    outline: 0;
  }
}

.fourth {
  border-color: $yellow;
  color: #000;
  background: {
    image: linear-gradient(45deg, $yellow 50%, transparent 50%);
    position: 100%;
    size: 400%;
  }
  transition: background 300ms ease-in-out;

  &:hover {
    color: #fff;
    background-position: 0;
  }
}

.modal-vue .overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-header {
  margin: 0;
  padding: 20px;
  display: block;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
  text-transform: uppercase;
  background: rgba(2, 162, 239, 1);
  color: #fff;
  border-radius: 4px 4px 0 0;
}

.modal-vue .modal {
  position: fixed;
  overflow: auto;
  z-index: 9999;
  margin: 0 auto;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.modal-vue .close {
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  padding: 17px 22px;
  border: 0;
  color: #fff;
  font-size: 20px;
  background: rgba(0, 0, 0, 0.1);
}

.modal-vue .close:hover {
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}

.modal-footer {
  bottom: 15px;
  border-radius: 0 0 3px 3px;
  padding: 20px;
  text-transform: uppercase;
  background: rgba(2, 162, 239, 1);
  color: #fff;
  margin-top: 45px;
  text-align: center;
}

.modal-content {
  ul li {
    list-style: none;
    text-align: center;

    p {
      width: 70%;
      font-size: 44px;
    }

    h1 {
      margin-top: -100px;
      margin-right: 50px;
      margin-left: 50px;
      font-size: 17px;
      font-weight: 550;
    }

    span {
      margin: 0px 50px;
    }
  }
}
</style>
