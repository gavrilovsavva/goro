<template>
  <main class="main">
    <div class="line-container">
      <div class="line"></div>
    </div>
    <form class="question">
      <h3 class="question-title">
        Подскажите, мучает ли Вас бессонница последнее время?
      </h3>
      <div class="question-items question-column">
        <div class="radio-flex">
          <input
            type="radio"
            id="dream-1"
            class="question-radio"
            name="fm"
            value="Да"
            v-model="dream"
          />
          <label class="question-txt" for="dream-1">Да</label>
        </div>
        <div class="radio-flex">
          <input
            type="radio"
            id="dream-2"
            class="question-radio"
            name="fm"
            value="Нет"
            v-model="dream"
          />
          <label class="question-txt" for="dream-2">Нет</label>
        </div>
        <div class="radio-flex">
          <input
            type="radio"
            id="dream-3"
            class="question-radio"
            name="fm"
            value="Иногда"
            v-model="dream"
          />
          <label class="question-txt" for="dream-3">Иногда</label>
        </div>
      </div>
    </form>
    <btn-app v-if="dream != ''" @click="$router.push('/Plans')"></btn-app>
  </main>
</template>

<script>
import BtnApp from "@/components/BtnApp.vue";
export default {
  computed: {
    dream: {
      get() {
        return this.$store.state.dream;
      },
      set(value) {
        this.$store.commit("dream", value);
      },
    },
  },
  components: { BtnApp },
};
</script>

<style>
.line {
  width: 40%;
}
</style>
