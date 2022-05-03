<template>
  <header-app></header-app>

  <component :is="layout"></component>
  <router-view v-slot="{ Component }">
    <div class="container">
      <component :is="Component"></component>
    </div>
  </router-view>

  <footer-app></footer-app>
</template>

<script>
import HomeView from "@/views/HomeView.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";

export default {
  components: { HeaderApp, FooterApp },

  computed: {
    layout() {
      return this.$route.meta.layout || HomeView;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-size: 16px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
}

.container {
  padding: 0 20px;
  width: 100%;
  max-width: 630px;
  margin: 0 auto;
}

:root {
  --h1: 1.0625em; /* 17px */
  --h2: 0.875em; /* 14px */
}

@media screen and (min-width: 1024px) {
  :root {
    --h1: 1.25em; /* 20px */
    --h2: 1em; /* 16px */
  }
}

.main {
  padding: 25px 0;
}

/* questions */

.question-title {
  font-size: var(--h2);
  padding: 15px;
  background: #343b4d;
  color: #fff;
  text-align: center;
}

.question-items {
  padding: 20px 15px;
  background: #f3f4f8;
  font-size: var(--h2);
  margin-bottom: 15px;
}

.radio-flex {
  display: flex;
  align-items: center;
  gap: 10px;
}

.question-txt {
  font-size: var(--h2);
}

.question-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
}

.question-row {
  display: flex;
  justify-content: space-around;
}

.line-container {
  width: 100%;
  height: 8px;
  background: #f3f4f8;
  box-shadow: inset 0px 4px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
}

.line {
  height: 100%;
  width: 25%;
  background: #b53e42;
}
</style>
