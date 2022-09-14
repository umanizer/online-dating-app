<template>
  <div>
    <HeaderBar />
    <div class="d-flex">
      <!--サイドバー-->
      <SideBar v-show="activeBtn"></SideBar>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            v-for="(user, index) in $store.state.users.users"
            :key="index"
            sm="4"
          >
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                :src="user.picture.large"
              >
              </v-img>
              <v-card-title>{{
                user.name.last + " " + user.name.first
              }}</v-card-title>
              <v-card-subtitle class="pb-0">{{
                "Age : " + user.dob.age
              }}</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>{{ "Country : " + user.location.country }}</div>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-around">
                <v-btn color="orange" @click="toUserDetail(index)"
                  >profile</v-btn
                >
                <v-btn color="primary" @click="toChatPage(index)">
                  message
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "UserList",
  components: { HeaderBar, SideBar },
  data() {
    return {};
  },
  methods: {
    toUserDetail(index) {
      this.sideBar("transition");
      this.$router.push({ path: `/user/${index}` });
    },
    toChatPage(index) {
      this.sideBar("transition");
      this.$router.push({ path: `/user/${index}/chat` });
    },
    sideBar(payload) {
      this.$store.dispatch("sideBar", payload);
    },
  },
  computed: {
    activeBtn() {
      return this.$store.getters.getActiveBtn;
    },
  },
};
</script>
