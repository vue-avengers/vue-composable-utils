<template>
  <div class="headerButtonDKM">
    <label for="theme-toggle" class="firsLabelDKM colored">
      <input type="checkbox" id="theme-toggle" @click="toggleDarkTheme" />
      <label>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </label>
    </label>
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
      body.classList.toggle('theme-dark');
      if (body.classList.contains('theme-dark')) {
        localStorage.setItem('dark-theme', 'true');
      } else {
        body.classList.remove('theme-dark');
        setTimeout(function () {
          localStorage.removeItem('dark-theme');
        }, 100);
      }
    },
    checkUserPreference() {
      if (localStorage.getItem('dark-theme')) {
        document.body.classList.add('theme-dark');
        document.getElementById('theme-toggle').checked = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.headerButtonDKM {
  display: inline-block;
  height: 46px;
  width: 46px;
  position: fixed;
  bottom: 3rem;
  right: 1rem;
  padding: 1rem;
  margin: 1px;
}

.firsLabelDKM {
  cursor: pointer;
  display: flex;
  margin: 0;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  input[type='checkbox'] {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    ~ label {
      width: 80%;
      height: 80%;
      display: flex;
      background: #e5e5e5;
      border-radius: 50% !important;
      margin: 0;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: -9;
      transition: all 0.5s;
      span {
        transition: all 0.5s;
        &:nth-child(1) {
          width: 45%;
          height: 45%;
          display: block;
          background: #5f6368;
          border-radius: 50% !important;
          border: 2px solid #dadada;
          position: relative;
          transition: all 0.5s;
        }
        &:nth-child(n + 2):nth-child(-n + 5) {
          height: 80%;
          width: 8%;
          display: block;
          position: absolute;
          background: #5f6368;
          z-index: -9;
          border-radius: 50% !important;
          transition: all 0.5s;
        }

        &:nth-child(3) {
          transform: rotate(90deg);
        }
        &:nth-child(4) {
          transform: rotate(45deg);
        }
        &:nth-child(5) {
          transform: rotate(-45deg);
        }
      }
    }
    &:checked {
      ~ label {
        background: #798996;
        transition: all 0.5s;

        span {
          transition: all 0.5s;
          &:nth-child(1) {
            background: #798996;
            height: 60%;
            width: 60%;
            box-shadow: inset 5px -5px 0px 2px #ffffff;
            border: 0;
            transition: all 0.5s;
          }
          &:nth-child(n + 2):nth-child(-n + 5) {
            height: 0%;
            width: 0%;
            transition: all 0.5s;
          }
        }
      }
    }
  }

  &.colored {
    input[type='checkbox'] {
      ~ label {
        background: radial-gradient(#36495e, #36495e);
        span {
          &:nth-child(1) {
            border-color: #36495e;
          }
          &:nth-child(1n + 1) {
            background: radial-gradient(#ffbf00, #ff9800);
          }
        }
      }

      &:checked {
        ~ label {
          background: #36495e;
          span {
            &:nth-child(1) {
              background: radial-gradient(#36495e, #36495e);
            }
          }
        }
      }
    }
  }
}
</style>
