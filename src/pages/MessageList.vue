<template>
  <div>
    <v-app style="100vh">
      <HeaderBar></HeaderBar>

      <v-main>
        <div class="d-flex">
          <SideBar v-show="activeBtn"></SideBar>
          <v-container>
            <v-row>
              <v-col>
                <v-card
                  class="mx-auto rounded-lg mb-2"
                  max-width="800"
                  outlined
                  v-for="(info, index) in $store.getters.getMessageList"
                  :key="index"
                  @click="toChatPage(info[4])"
                >
                  <v-list-item three-line>
                    <v-list-item-avatar tile size="80" color="grey"
                      ><v-img :src="info[3]"></v-img
                    ></v-list-item-avatar>
                    <v-list-item-content>
                      <div class="text-overline mb-4">{{ info[2] }}</div>
                      <v-list-item-subtitle class="ml-1"
                        >lastMessage</v-list-item-subtitle
                      >
                      <v-card>
                        <v-list-item-title class="text-h5 my-1 ml-1">
                          {{ info[0] }}
                        </v-list-item-title>
                      </v-card>
                      <v-list-item-subtitle class="mt-2">{{
                        info[1]
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "MessageList",
  components: {
    HeaderBar,
    SideBar,
  },
  methods: {
    toChatPage(index) {
      console.log(index)
      this.sideBar("transition");
      this.$router.push({ path: `/user/${index}/chat` });
      // this.sideBar();
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
