<template>
  <main class="main">
    <div class="line-container">
      <div class="line"></div>
    </div>
    <form class="question">
      <h3 class="question-title">Какой Вы видите свою жизнь через 5 лет?</h3>
      <div class="question-items question-column">
        <div class="radio-flex">
          <input
            type="radio"
            id="years-1"
            class="question-radio"
            name="fm"
            value="Брак, семья, дети, дом"
            v-model="years"
          />
          <label class="question-txt" for="years-1"
            >Брак, семья, дети, дом</label
          >
        </div>
        <div class="radio-flex">
          <input
            type="radio"
            id="years-2"
            class="question-radio"
            name="fm"
            value="Путешествия по Миру"
            v-model="years"
          />
          <label class="question-txt" for="years-2">Путешествия по Миру</label>
        </div>
        <div class="radio-flex">
          <input
            type="radio"
            id="years-3"
            class="question-radio"
            name="fm"
            value="Успешная карьера"
            v-model="years"
          />
          <label class="question-txt" for="years-3">Успешная карьера</label>
        </div>
        <div class="radio-flex">
          <input
            type="radio"
            id="years-4"
            class="question-radio"
            name="fm"
            value="Всё вместе"
            v-model="years"
          />
          <label class="question-txt" for="years-4">Всё вместе</label>
        </div>
      </div>
    </form>
    <btn-app v-if="years != ''" @click="$router.push('/Birthday')"></btn-app>
  </main>
</template>

<script>
import BtnApp from "@/components/BtnApp.vue";
export default {
  computed: {
    years: {
      get() {
        return this.$store.state.years;
      },
      set(value) {
        this.$store.commit("years", value);
      },
    },
  },
  components: { BtnApp },
};
</script>

<style>
.line {
  width: 80%;
}
</style>
