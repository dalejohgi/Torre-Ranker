<template>
  <div class="HomePage">
    <h1>Torre Ranker</h1>
    <form>
      <v-text-field type="text" label="Torre Username" v-model="user" />
    </form>
    <v-btn color="primary" @click="onBtnClick"> Rank me! </v-btn>
  </div>
</template>

<script>
import { rank } from "../functions/rank";
export default {
  name: "HomePage",
  data: () => ({
    user: "",
  }),
  methods: {
    async onBtnClick() {
      const user = await rank(this.user);
      this.$router.push({path: '/ranked-profile',
      props: {
        user
      }});
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->