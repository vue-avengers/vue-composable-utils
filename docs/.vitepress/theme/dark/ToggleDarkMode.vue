<template>
  <div class="wrapper">
    <input type="checkbox" id="theme-toggle" @click="toggleDarkTheme" />
    <div class="icon"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.checkUserPreference();
  },
  methods: {
    toggleDarkTheme() {
      const body = document.body;
      body.classList.toggle('dark-mode');
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-theme', 'true');
      } else {
        body.classList.remove('dark-mode');
        setTimeout(function () {
          localStorage.removeItem('dark-theme');
        }, 100);
      }
    },
    checkUserPreference() {
      if (localStorage.getItem('dark-theme')) {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').checked = true;
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 1rem;
  margin: 1px;
}
input {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  width: 48px;
  height: 48px;
  position: absolute;
}
input,
input:focus {
  z-index: 1;
  outline: unset;
  border: none;
}
.icon {
  background-color: black;
  border-radius: 50%;
  position: relative;
  transition: all 0.5s ease;
  width: 48px;
  height: 48px;
}
.icon::before {
  content: '';
  width: 48px;
  height: 48px;
  position: absolute;
  right: -16px;
  top: -16px;
  background-color: white;
  border-radius: 50%;
}
input:checked ~ .background {
  background: black;
}
input:checked ~ .background::before {
  content: 'Click to go light mode.';
  color: white;
}
input:checked + div {
  background-color: white;
  position: relative;
  transform: scale(0.55);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  transition: transform 0.5s ease;
}
input:checked + div:before {
  box-shadow: white 0px -48px 0px, white 0px 48px 0px, white 48px 0px 0px, white -48px 0px 0px, white 35px 35px 0px, white -35px 35px 0px,
    white 35px -35px 0px, white -35px -35px 0px;
  content: '';
  width: 16px;
  height: 16px;
  left: 50%;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  margin: -8px 0px 0px -8px;
}
</style>
