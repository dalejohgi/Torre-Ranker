<template>
  <div class="DevRanker">
    <h1>Dev Ranker</h1>
    <v-img class="Logo" src="https://torre-media.s3-us-west-2.amazonaws.com/subtorres/teletrabajo/torre.png" />
    <v-col cols="12">
      <v-card class="DevCard">
        <v-card-title class="headline">{{ user.name }}</v-card-title>
        <v-card-subtitle>{{ user.profession }}</v-card-subtitle>
        <v-card-text>
          <v-row align="start" justify="space-between">
            <v-col cols="7">
              Great {{user.name}}! You have been ranked by our algorithm as a <b>{{user.level}}</b> according to your experience developing.
              Keep committing to become a Hero Dev someday.
              <br />
              <b class="DevScore">Your Score: {{user.points}}</b>
              <h2>{{user.level}}</h2>
              <v-progress-linear
                color="light-green"
                height="10"
                :value="user.points"
                striped
              ></v-progress-linear>
            </v-col>
            <v-col cols="3">
              <v-img class="DevImage" :src="user.picture" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import { rank } from "../functions/rank";

export default {
  name: "RankedProfile",
  data: () => ({
    user: {}
  }),
  async created() {
    this.user = await rank(this.username);
  },
  props: {
    username: String
  }
};
</script>

<style>
.DevImage {
  border-radius: 8px;
  width: 300px; height: 300px;
}
.Logo {
  float: right;
  border-radius: 8px;
  width: 110px; height: 100px;
  margin-right: 3rem;
}
.DevScore {
  text-transform: capitalize;
  display: block;
  margin: 1rem 0;
}
.DevCard {
  margin-top: 100px;
}
h1 {
  margin-top: 50px;
  text-align: center; 
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
