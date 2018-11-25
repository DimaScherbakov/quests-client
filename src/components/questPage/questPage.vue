<template>
  <div class="container">
  <!-- <h1>lol</h1> -->
<table class="table">
  <thead>
    <tr>
      <th scope="col">Build ID</th>
      <th scope="col">Platform</th>
      <th scope="col">Quest Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{quest.id}}</td>
      <td>{{quest.platform}}</td>
      <td>{{quest.name}}</td>
    </tr>
  </tbody>
</table>
<div class="h2">Pathways</div>
<table class="table">
  <thead>
    <tr>
      <!-- <th scope="col">Build ID</th> -->
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{quest.pathway}}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>
<script>
import httpService from "@/services/httpService";
export default {
  name: "questPage",
  data() {
    return {
      quest: {}
    };
  },
  methods: {
    async getQuestById(alias, globalId) {
      const response = await httpService.getQuestById(alias, globalId);
      if (response) {
        this.quest = response.data;
        console.log(this.quest);
      } else {
        this.$router.push("/404");
      }
    }
  },
  mounted() {
    this.getQuestById(this.$route.params.alias, this.$route.params.globalId);
  }
};
</script>
