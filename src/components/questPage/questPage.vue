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
          <th scope="col">Status</th>
          <th scope="col">Path name</th>
          <th scope="col">Leafs Info</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{quest.pathway.status}}</td>
          <td>{{quest.pathway.name}}</td>
          <td>
            <span v-for="leaf in quest.pathway.leafs">
              <span v-if="quest.pathway.leafs.indexOf(leaf)<quest.passedQuestsCount">
                <i class="fas fa-check" style="color:green"></i>
                <span v-if="quest.pathway.leafs.indexOf(leaf)<quest.pathway.leafs.length-1">
                  <i class="fas fa-long-arrow-alt-right" style="color:grey"></i>
                </span>
              </span>
              <span v-else>
                <i class="fas fa-times" style="color:red"></i>
                <span v-if="quest.pathway.leafs.indexOf(leaf)<quest.pathway.leafs.length-1">
                  <i class="fas fa-long-arrow-alt-right" style="color:grey"></i>
                </span>
              </span>
            </span>
          </td>
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
      quest: {},
      passedQuests: 0,
      notPassedQuests: 0
    };
  },
  methods: {
    countQuests: function(quest) {},
    async getQuestById(alias, globalId) {
      const response = await httpService.getQuestById(alias, globalId);
      if (response) {
        this.quest = response.data;
        console.log(this.quest);

        this.passedQuests = this.quest.passedQuestsCount;
        this.notPassedQuests =
          this.quest.pathway.leafs.length - this.quest.passedQuestsCount;
        console.log(this.passedQuests);
        console.log(typeof this.passedQuests);
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
