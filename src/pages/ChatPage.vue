<template>
  <div>
    <v-app style="100vh">
      <HeaderBar></HeaderBar>

      <v-main>
        <div class="d-flex">
          <SideBar v-show="activeBtn"></SideBar>
          <v-row justify="center" class="mt-2">
            <v-col cols="12" sm="10">
              <v-container
                v-for="(message, index) in $store.getters.getMessageById(
                  $route.params.index
                )"
                :key="index"
              >
                <v-row justify="end">
                  <div class="d-flex my-3">
                    <div class="d-flex flex-column w-150 mr-3">
                      <v-card
                        elevation="5"
                        class="rounded-lg pa-2 mb-2"
                        height="40"
                      >
                        <p>{{ message }}</p>
                      </v-card>
                      <p class="text-right font08rem">{{$store.getters.getTimeStamp($route.params.index)[index]}}</p>
                    </div>
                    <v-avatar color="grey darken-1"> </v-avatar>
                  </div>
                </v-row>

                <p class="mb-2">
                  {{
                    $store.getters.getUserById($route.params.index).name.last +
                    " " +
                    $store.getters.getUserById($route.params.index).name.first
                  }}
                </p>
                <v-row justify="start">
                  <div class="d-flex my-3">
                    <v-avatar color="grey darken-1">
                      <img
                        :src="
                          $store.getters.getUserById($route.params.index)
                            .picture.thumbnail
                        "
                      />
                    </v-avatar>
                    <div class="d-flex flex-column w-150 ml-3">
                      <v-card
                        elevation="5"
                        class="rounded-lg pa-2 mb-2"
                        height="40"
                      >
                        <p>{{ message }}</p>
                      </v-card>
                      <p class="text-right font08rem">{{$store.getters.getTimeStamp($route.params.index)[index]}}</p>
                    </div>
                  </div>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </div>
      </v-main>
      <v-footer>
        <v-row>
          <v-textarea
            class="mx-2"
            label="send-message"
            rows="1"
            auto-grow
            v-model="message"
            @keydown.enter.prevent="sendMessage"
          ></v-textarea>
          <v-icon large color="blue darken-2" @click="sendMessage">
            mdi-send
          </v-icon>
        </v-row>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "ChatPage",
  components: {
    HeaderBar,
    SideBar,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.message === "") return;
      this.$store.dispatch("setMessages", {
        id: this.$route.params.index,
        message: this.message,
      });
      this.message = "";

      //現在の時刻を取得。
      const now = new Date()
      // console.log(now)
      const timeStamp =  now.toLocaleString()

      // storeのアクションに
      this.$store.dispatch("setTimeStamp",{
        id: this.$route.params.index,
        timeStamp: timeStamp,
      })
    },
  },
  computed: {
    activeBtn() {
      return this.$store.getters.getActiveBtn;
    },
  },

};
</script>

<style scoped>
p {
  margin: 0;
}
.font08rem {
  font-size: 0.8rem;
}
.w-150 {
  width: 150px;
}
</style>
