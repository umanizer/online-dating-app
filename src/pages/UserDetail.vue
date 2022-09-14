<template>
  <div>
    <HeaderBar></HeaderBar>

    <div class="d-flex">
      <SideBar v-show="activeBtn"></SideBar>

      <v-row justify="center" class="mt-2">
        <v-col cols="12" sm="8">
          <v-card class="container" max-width="600">
            <v-img
              class="white--text align-end"
              height="400px"
              :src="
                $store.getters.getUserById($route.params.index).picture.large
              "
            >
            </v-img>
            <div class="d-flex justify-center my-2">
              <v-btn
                color="primary"
                width="100"
                class="mr-4"
                @click="toChatPage"
              >
                message
              </v-btn>
              <v-btn
                color="orange"
                width="100"
                class="ml-4"
                @click="toUserList"
              >
                BACK
              </v-btn>
            </div>

            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-form-textbox</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title
                    >Name :
                    {{
                      $store.getters.getUserById($route.params.index).name
                        .last +
                      " " +
                      $store.getters.getUserById($route.params.index).name.fast
                    }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider inset></v-divider>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-gender-male-female</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title
                    >Gender :
                    {{
                      $store.getters.getUserById($route.params.index).gender
                    }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-divider inset></v-divider>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-baby-carriage</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title
                    >Age :
                    {{
                      $store.getters.getUserById($route.params.index).dob.age
                    }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-divider inset></v-divider>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title
                    >Country :{{
                      $store.getters.getUserById($route.params.index).location
                        .country
                    }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-divider inset></v-divider>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-state-machine</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title
                    >State :{{
                      $store.getters.getUserById($route.params.index).location
                        .state
                    }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-divider inset></v-divider>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-city</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title
                    >City :{{
                      $store.getters.getUserById($route.params.index).location
                        .city
                    }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-divider inset></v-divider>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title
                    >Email :{{
                      $store.getters.getUserById($route.params.index).email
                    }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-divider inset></v-divider>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "UserDetail",
  components: {
    HeaderBar,
    SideBar,
  },
  methods: {
    toChatPage() {
      this.sideBar("transition");
      this.$router.push({ path: `/user/${this.$route.params.index}/chat` });
      // this.sideBar();
    },
    toUserList() {
      this.$router.push({ path: `/` });
      this.sideBar("transition");
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
