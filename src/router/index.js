import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '../pages/UserList.vue'
import UserDetail from '../pages/UserDetail.vue'
import ChatPage from '../pages/ChatPage.vue'
import MessageList from '../pages/MessageList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "userList",
    component: UserList,
  },
  {
    path: "/user/:index?",
    name: "userDetail",
    component: UserDetail,
  },
  {
    path: "/user/:index/chat",
    name: "chatPage",
    component: ChatPage,
  },
  {
    path: "/message-list",
    name: "messageList",
    component: MessageList,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
