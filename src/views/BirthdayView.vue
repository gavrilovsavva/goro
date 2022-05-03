<template>
  <main class="main">
    <div class="line-container">
      <div class="line"></div>
    </div>
    <form class="question">
      <h3 class="question-title">Введите дату своего рождения:</h3>
      <div class="question-items question-column">
        <select class="day-select" name="day" id="day" v-model="birthday.day">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <select
          class="day-select"
          name="month"
          id="month"
          v-model="birthday.month"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12" selected>12</option>
        </select>
        <select
          class="day-select"
          name="year"
          id="month"
          v-model="birthday.year"
        >
          <option value="Год">Год</option>
          <option value="1970">1970</option>
          <option value="1971">1971</option>
          <option value="1972">1972</option>
          <option value="1973">1973</option>
          <option value="1974">1974</option>
          <option value="1975">1975</option>
          <option value="1976">1976</option>
          <option value="1977">1977</option>
          <option value="1978">1978</option>
          <option value="1979">1979</option>
          <option value="1980">1980</option>
          <option value="1981">1981</option>
          <option value="1982">1982</option>
          <option value="1983">1983</option>
          <option value="1984">1984</option>
          <option value="1985">1985</option>
          <option value="1986">1986</option>
          <option value="1987">1987</option>
          <option value="1988">1988</option>
          <option value="1989">1989</option>
          <option value="1990">1990</option>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
          <option value="1994">1994</option>
          <option value="1995">1995</option>
          <option value="1996">1996</option>
          <option value="1997">1997</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
        </select>
      </div>
    </form>

    <div>
      <div
        class="birthday-img"
        v-if="
          (birthday.day >= 20 && birthday.month == 3) ||
          (birthday.day <= 20 && birthday.month == 4)
        "
      >
        <img src="@/assets/aries.png" alt="aries" />
      </div>
      <div
        class="birthday-img"
        v-if="
          (birthday.day >= 21 && birthday.month == 4) ||
          (birthday.day <= 21 && birthday.month == 5)
        "
      >
        <img src="@/assets/taurus.png" alt="taurus" />
      </div>
      <div
        class="birthday-img"
        v-if="
          (birthday.day >= 22 && birthday.month == 5) ||
          (birthday.day <= 21 && birthday.month == 6)
        "
      >
        <img src="@/assets/gemini.png" alt="gemini" />
      </div>
      <div
        class="birthday-img"
        v-if="
          (birthday.day >= 22 && birthday.month == 6) ||
          (birthday.day <= 22 && birthday.month == 7)
        "
      >
        <img src="@/assets/rak.png" alt="rak" />
      </div>
      <div
        class="birthday-img"
        v-if="
          (birthday.day >= 23 && birthday.month == 7) ||
          (birthday.day <= 21 && birthday.month == 8)
        "
      >
        <img src="@/assets/leo.png" alt="leo" />
      </div>
      <div
        class="birthday-img"
        v-if="
          (birthday.day >= 22 && birthday.month == 8) ||
          (birthday.day <= 23 && birthday.month == 9)
        "
      >
        <img src="@/assets/virgo.png" alt="virgo" />
      </div>
      <div
        class="birthday-img"
        v-if="
          (birthday.day >= 24 && birthday.month == 9) ||
          (birthday.day <= 23 && birthday.month == 10)
        "
      >
        <img src="@/assets/libra.png" alt="libra" />
      </div>
      <div
        class="birthday-img"
        v-if="
          (birthday.day >= 24 && birthday.month == 10) ||
          (birthday.day <= 23 && birthday.month == 11)
        "
      >
        <img src="@/assets/scorpio.png" alt="scorpio" />
      </div>
      <div
        class="birthday-img"
        v-if="
          (birthday.day >= 24 && birthday.month == 11) ||
          (birthday.day <= 22 && birthday.month == 12)
        "
      >
        <img src="@/assets/sagittarius.png" alt="sagittarius" />
      </div>
      <div
        class="birthday-img"
        v-if="
          (birthday.day >= 23 && birthday.month == 12) ||
          (birthday.day <= 20 && birthday.month == 1)
        "
      >
        <img src="@/assets/capricorn.png" alt="capricorn" />
      </div>
      <div
        class="birthday-img"
        v-if="
          (birthday.day >= 21 && birthday.month == 1) ||
          (birthday.day <= 19 && birthday.month == 2)
        "
      >
        <img src="@/assets/aquarius.png" alt="aquarius" />
      </div>
      <div
        class="birthday-img"
        v-if="
          (birthday.day >= 20 && birthday.month == 2) ||
          (birthday.day <= 20 && birthday.month == 3)
        "
      >
        <img src="@/assets/pisces.png" alt="pisces" />
      </div>
    </div>

    <btn-app
      v-if="birthday.year != 'Год'"
      @click="$router.push('/Completed'), complete()"
    ></btn-app>
  </main>
</template>

<script>
import BtnApp from "@/components/BtnApp.vue";
export default {
  components: { BtnApp },

  methods: {
    complete() {
      setTimeout(() => {
        this.$store.dispatch("complete", true);
      }, 2000);
    },
  },

  computed: {
    birthday() {
      return new Proxy(this.$store.state.birthday, {
        set: (target, prop, value) => {
          this.$store.commit("birthday", { [prop]: value });
          return true;
        },
      });
    },
  },
};
</script>

<style>
.day-select {
  padding: 12px 15px;
  outline: none;
  border: 1px #e4e4e4 solid;
}
.line {
  width: 100%;
}
.birthday-img {
  display: flex;
  justify-content: center;
}
</style>
