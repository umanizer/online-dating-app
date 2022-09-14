import Vue from "vue";

export default {
  nameSpaced: true,
  state: {
    messages: {},
    timeStamp: {},
  },
  getters: {
    getMessageById: (state) => (id) => {
      return state.messages[Number(id)];
    },
    getTimeStamp: (state) => (id) => {
      return state.timeStamp[Number(id)];
    },
    getMessageList: function (state, getters) {
      console.log("getMessageList");
      //state.messagesを展開
      let messageList = [];
      for (const index in state.messages) {
        // 最後のmessageを取得
        const lastCount = state.messages[index].length;
        const lastMessage = state.messages[index][lastCount - 1];
        // userNameを取得
        const userName =
          getters.getUserById(index).name.last +
          " " +
          getters.getUserById(index).name.first;
        // サムネイルを取得
        const thumbnail = getters.getUserById(index).picture.thumbnail;
        // 最後のtimeStampを取得
        const lastCountStamp = getters.getTimeStamp(index).length;
        const lastStamp = getters.getTimeStamp(index)[lastCountStamp - 1];
        // 配列にまとめる
        messageList.push([lastMessage, lastStamp, userName, thumbnail, index]);
      }
      return messageList;
    },
  },
  mutations: {
    setMessages(state, payload) {
      // 過去にデータがなければ
      if (state.messages[payload.id] === undefined) {
        Vue.set(state.messages, payload.id, [payload.message]);
      } else {
        state.messages[payload.id].push(payload.message);
      }
    },
    setTimeStamp(state, payload) {
      console.log(state, payload);
      console.log(payload.id, payload.timeStamp);
      if (state.timeStamp[payload.id] === undefined) {
        Vue.set(state.timeStamp, payload.id, [payload.timeStamp]);
      } else {
        state.timeStamp[payload.id].push(payload.timeStamp);
      }
      console.log(state.timeStamp);
    },
  },
  actions: {
    setMessages(context, payload) {
      context.commit("setMessages", {
        id: payload.id,
        message: payload.message,
      });
    },
    setTimeStamp(context, payload) {
      context.commit("setTimeStamp", {
        id: payload.id,
        timeStamp: payload.timeStamp,
      });
    },
  },
  modules: {},
};
