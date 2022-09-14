<template>
  <transition name="menu">
    <div class="menu">
      <!-- <ul>
        <li ><router-link to="/">User List</router-link></li>
        <li ><router-link to="/message-list">Message List</router-link></li>
        <li ><router-link to="/">Setting</router-link></li>
      </ul> -->
      <input type="btn" value="User List" name="/" @click="transition" />
      <input
        type="btn"
        value="message list"
        name="/message-list"
        @click="transition"
      />
      <input type="btn" value="test" name="test" @click="transition" />
      <!-- <v-btn @click="sideBar">messageList</v-btn>
      <v-btn @click="sideBar">test</v-btn> -->
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: false,
    };
  },
  methods: {
    transition(event) {
      console.log(event.target.name);
      const currPath = this.$router.currentRoute.fullPath;
      console.log(currPath);
      if (currPath === event.target.name) {
        return;
      } else {
        this.$router.push(event.target.name);
        this.sideBar("transition");
      }
    },
    sideBar(payload) {
      this.$store.dispatch("sideBar",payload);
    },
  },
  
};
</script>
