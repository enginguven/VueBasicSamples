import { createStore } from "vuex";

const state = {
  count: 0,
};
const increment = (state) => {
  state.count++;
};
const decrement = (state) => {
  state.count--;
};
const mutations = {
  increment,
  decrement,
};

export default createStore({
  state,
  mutations,
});
