<template>
  <main class="main">
    <div class="line-container">
      <div class="line"></div>
    </div>
    <form class="question">
      <h3 class="question-title">
        В какое время суток Вы чувствуете себя наиболее комфортно?
      </h3>
      <div class="question-items question-column">
        <div class="radio-flex">
          <input
            type="radio"
            id="days-1"
            class="question-radio"
            name="fm"
            value="Утро"
            v-model="day"
          />
          <label class="question-txt" for="days-1">Утро</label>
        </div>
        <div class="radio-flex">
          <input
            type="radio"
            id="days-2"
            class="question-radio"
            name="fm"
            value="Ночь"
            v-model="day"
          />
          <label class="question-txt" for="days-2">Ночь</label>
        </div>
        <div class="radio-flex">
          <input
            type="radio"
            id="days-3"
            class="question-radio"
            name="fm"
            value="Вечер"
            v-model="day"
          />
          <label class="question-txt" for="days-3">Вечер</label>
        </div>
        <div class="radio-flex">
          <input
            type="radio"
            id="days-4"
            class="question-radio"
            name="fm"
            value="День"
            v-model="day"
          />
          <label class="question-txt" for="days-4">День</label>
        </div>
      </div>
    </form>
    <btn-app v-if="day != ''" @click="$router.push('/Dream')"></btn-app>
  </main>
</template>

<script>
import BtnApp from "@/components/BtnApp.vue";

export default {
  computed: {
    day: {
      get() {
        return this.$store.state.day;
      },
      set(value) {
        this.$store.commit("day", value);
      },
    },
  },
  components: { BtnApp },
};
</script>

<style>
.line {
  width: 20%;
}
</style>
