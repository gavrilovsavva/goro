<template>
  <main class="main">
    <div class="line-container">
      <div class="line"></div>
    </div>
    <form class="question">
      <h3 class="question-title">
        Чувствуете ли Вы в последнее время, что вам никак не удается осуществить
        ваши планы?
      </h3>
      <div class="question-items question-column">
        <div class="radio-flex">
          <input
            type="radio"
            id="plans-1"
            class="question-radio"
            name="fm"
            value="Да"
            v-model="plans"
          />
          <label class="question-txt" for="plans-1">Да</label>
        </div>
        <div class="radio-flex">
          <input
            type="radio"
            id="plans-2"
            class="question-radio"
            name="fm"
            value="Нет"
            v-model="plans"
          />
          <label class="question-txt" for="plans-2">Нет</label>
        </div>
        <div class="radio-flex">
          <input
            type="radio"
            id="plans-3"
            class="question-radio"
            name="fm"
            value="Иногда"
            v-model="plans"
          />
          <label class="question-txt" for="plans-3">Иногда</label>
        </div>
      </div>
    </form>
    <btn-app v-if="plans != ''" @click="$router.push('/Years')"></btn-app>
  </main>
</template>

<script>
import BtnApp from "@/components/BtnApp.vue";

export default {
  computed: {
    plans: {
      get() {
        return this.$store.state.plans;
      },
      set(value) {
        this.$store.commit("plans", value);
      },
    },
  },
  components: { BtnApp },
};
</script>

<style>
.line {
  width: 60%;
}
</style>
