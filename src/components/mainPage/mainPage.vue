<template>
  <div class="container">
  <h1>Quests {{heart}}</h1>
  <ul id="example-1" class="list-inline inline row">
    <div v-for="quest in quests" class="list-inline-item list-group-item-action col-sm-4" style="margin-right:0;padding:0">
<router-link :to=url+quest.alias+slash+quest.globalId>
      <div class="border">{{ quest.alias }}</div>
      <div v-if="quest.status=='SUCCESS'" class="border border-top-0"><i class="fas fa-check"></i></div>
      <div v-else-if="quest.status=='CRASH'" class="border border-top-0"><i class="fas fa-times"></i></div>
      <div v-else class="border border-top-0"><i class="fas fa-question"></i></div>
</router-link>
</div>
  </ul>
  </div>
</template>
<script src="https://cdn.rawgit.com/download/glyphicons/0.1.0/glyphicons.js"></script>
<script>
import httpService from "@/services/httpService";
export default {
  name: "mainPage",
  data() {
    return {
      quests: [],
      url: "quest/",
      slash: "/"
    };
  },
  methods: {
    async getQuests() {
      const response = await httpService.getQuests();
      console.log(response);
      // this.posts = response.data.posts
      this.quests = response.data;
    }
  },
  mounted() {
    this.getQuests();
  }
};
</script>
