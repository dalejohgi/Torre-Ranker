<template>
  <div class="HomePage">
    <v-col cols="12">
      <h1>Torre Ranker</h1>
      <v-img class="HomeLogo" src="https://torre-media.s3-us-west-2.amazonaws.com/subtorres/teletrabajo/torre.png" />
      <form>
        <v-text-field type="text" label="Torre Username" v-model="user" />
      </form>
      <v-btn color="lime" @click="onBtnClick"> Rank me! </v-btn>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: () => ({
    user: "",
  }),
  methods: {
    async onBtnClick() {
      this.$router.push({path: `/ranked-profile/${this.user}`
      });
    },
  },
};
</script>

<style>
.HomeLogo {
  float: right;
  border-radius: 8px;
  width: 100px; height: 100px;
}

.HomePage {
  background-color: #2B2B2B;
}
h1 {
  color: #D7D7D7;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->