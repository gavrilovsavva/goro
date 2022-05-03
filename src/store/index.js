import { createStore } from "vuex";

export default createStore({
  state: {
    gender: "",
    day: "",
    dream: "",
    plans: "",
    years: "",
    birthday: {
      day: "2",
      month: "1",
      year: "Год",
    },
    complete: false,
  },
  getters: {},
  mutations: {
    gender(state, value) {
      state.gender = value;
    },
    day(state, value) {
      state.day = value;
    },
    dream(state, value) {
      state.dream = value;
    },
    plans(state, value) {
      state.plans = value;
    },
    years(state, value) {
      state.years = value;
    },
    birthday(state, payload) {
      Object.assign(state.birthday, payload);
    },
    complete(state, value) {
      state.complete = value;
    },
  },
  actions: {
    complete({ commit }, value) {
      commit("complete", value);
    },
  },
  modules: {},
});
