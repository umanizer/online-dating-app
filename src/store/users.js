import axios from "axios";
import Vue from "vue";

export default {
  nameSpaced: true,
  state: {
    users: {},
    activeBtn: false,
  },
  getters: {
    getUserById: (state) => (id) => {
      return state.users[Number(id)];
    },
    getActiveBtn: (state) => {
      return state.activeBtn;
    },
  },
  mutations: {
    setUsers(state, payload) {
      for (let [index, user] of payload.entries()) {
        Vue.set(state.users, index, user);
      }
    },
    sideBar(state,payload) {
      if(payload)state.activeBtn=false
      else state.activeBtn = !state.activeBtn;
    },
  },
  actions: {
    fetchUsers(context) {
      axios
        .get("https://randomuser.me/api/", {
          params: {
            results: "30",
          },
        })
        .then((response) => {
          context.commit("setUsers", response.data.results);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    sideBar(context,payload) {
      context.commit("sideBar",payload);
    },
  },
  modules: {},
};
