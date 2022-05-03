<template>
  <section class="home">
    <div class="home-img-container">
      <img src="@/assets/circle.png" alt="circle" class="home-circle" />
      <img src="@/assets/tian.png" alt="tian" class="home-tian" />
    </div>
    <h2 class="home-title">
      Узнайте, как 2021 год изменит жизнь каждого из нас!
    </h2>
    <p class="home-txt">
      К сожалению, 2020 год принес нам немало неприятностей, даже откровенных
      проблем и несчастий. Не смотря на это, 3 знака зодиака очень скоро обретут
      долгожданное счастье! 2021 год затронет своими потрясениями каждого из
      нас.
    </p>
    <form class="question">
      <h3 class="question-title">Укажите свой пол:</h3>
      <div class="question-items question-row">
        <div class="radio-flex">
          <input
            v-model="gender"
            type="radio"
            id="female"
            class="question-radio"
            name="fm"
            value="Женщина"
          />
          <label class="question-txt" for="female">Женщина</label>
        </div>
        <div class="radio-flex">
          <input
            v-model="gender"
            type="radio"
            id="male"
            class="question-radio"
            name="fm"
            value="Мужчина"
          />
          <label class="question-txt" for="male">Мужчина</label>
        </div>
      </div>
    </form>
    <btn-app v-if="gender != ''" @click="$router.push('/Days')"></btn-app>
  </section>
</template>

<script>
import BtnApp from "@/components/BtnApp.vue";

export default {
  computed: {
    gender: {
      get() {
        return this.$store.state.gender;
      },
      set(value) {
        this.$store.commit("gender", value);
      },
    },
  },
  components: { BtnApp },
};
</script>

<style>
.home {
  padding: 10px 0;
}

.home-img-container {
  position: relative;
}

.home-circle {
  position: absolute;
  left: 15px;
  width: 50%;
  /* animation: 10s linear 0s infinite circle; */
}

.home-tian {
  width: 100%;
}

.home-title {
  font-size: var(--h1);
  font-weight: 700;
  color: #315df9;
  margin-bottom: 10px;
  line-height: 22px;
}

.home-txt {
  font-size: var(--h2);
  color: #343b4d;
  line-height: 19px;
  margin-bottom: 10px;
}

@keyframes circle {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
