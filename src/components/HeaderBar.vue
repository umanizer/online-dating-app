<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dark>
      <div class="hamburger_btn" @click="sideBar('')">
        <span
          class="line line_01"
          v-bind:class="{ btn_line01: activeBtn }"
        ></span>
        <span
          class="line line_02"
          v-bind:class="{ btn_line02: activeBtn }"
        ></span>
        <span
          class="line line_03"
          v-bind:class="{ btn_line03: activeBtn }"
        ></span>
      </div>
      <v-toolbar-title>ONLINE DATING APP</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon large color="white darken-2" @click="toMessageList">mdi-message-text</v-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    sideBar(payload) {
      this.$store.dispatch("sideBar", payload);
    },
    toMessageList(){
      this.$router.push("/message-list");
      this.sideBar("transition");
    }
  },
  computed: {
    activeBtn() {
      return this.$store.getters.getActiveBtn;
    },
  },

};
</script>
