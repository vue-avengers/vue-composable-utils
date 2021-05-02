# :sparkles: useModal

> The `useModal ()` function is used to return a copy of the filtered object using the given `key` value. This function provides the desired condition by specifying which properties are selected from the object.

## :maple_leaf: Usage

The example usage of `useModal` function is shown below.

```js
import { useModal } from 'vue-composable-utils';
const { visible, setVisible, current, openModal, closeModal } = useModal();
```

## :rocket: Features

`useModal` takes two parameters.

| Parameter | Description                                        |
| :-------- | :------------------------------------------------- |
| `Object`  | The object to be processed.                        |
| `Keys`    | Optional. The `key` value that should be selected. |

## :bouquet: Example

You can see how it changes reactively using the example below.

<ModalComponent />

:::: tabs type:border-card
::: tab template lazy

```html
<template>
  <div class="modal-vue">
    <!-- button show -->
    <button class="btn yellow" @click="handleButton">show</button>

    <!-- overlay -->
    <div class="overlay" v-if="visible"></div>

    <!-- modal -->
    <div class="modal" v-if="visible">
      <div class="modal-header">Modal Header</div>
      <button class="close" @click="closeModal">x</button>
      <div class="modal-content" v-for="curr in current" :key="curr.id">
        <ul>
          <li>
            <p>{{ curr.emoji }}</p>
            <h1>{{ curr.fullname }}</h1>
            <span>{{ curr.job }}</span>
          </li>
        </ul>
      </div>
      <div class="modal-footer">Modal Footer</div>
    </div>
  </div>
</template>
```

:::
::: tab javascript lazy

```js

<script>
import { useModal } from 'vue-composable-utils';

export default {
  setup() {
    const contrubitors = [
      {
        id: 1,
        emoji: '👨',
        fullname: 'Abdulnasır Olcan',
        job: 'Frontend Developer',
      },
      {
        id: 2,
        emoji: '👩',
        fullname: 'Büşra Şanlıbayrak',
        job: 'Frontend Developer',
      },
      {
        id: 3,
        emoji: '🧑‍',
        fullname: 'Mehmet Varol',
        job: 'Frontend Developer',
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

```

:::
::: tab scss lazy

```scss

<style lang="scss">
.btn {
  width: 100%;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
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

.yellow {
  border-color: #f1c40f;
  color: #000;
  background: {
    image: linear-gradient(45deg, #f1c40f 50%, transparent 50%);
    position: 100%;
    size: 400%;
  }
  transition: background 300ms ease-in-out;

  &:hover {
    color: #fff;
    background-position: 0;

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
  z-index: 9999;
  margin: 0 auto;
  background-color: #fff;
  position: absolute;
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

.modal-vue ul li {
  list-style: none;
    text-align: center;
}

.modal-vue ul li p {
  width: 70%;
  font-size: 44px;
}
.modal-vue ul li h1 {
    margin-top: -100px;
    margin-right: 50px;
    margin-left: 50px;
    font-size: 17px;
    font-weight: 550;
}

.modal-vue ul li span {
    margin: 0px 50px;
}
</style>
```

:::
::::

<ToggleDarkMode/>
