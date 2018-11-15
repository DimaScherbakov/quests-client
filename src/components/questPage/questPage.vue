<template>
  <div class="container">
  <h1>Id: {{$route.params}}</h1>
    <div v-for="questAttr in quest">
      {{questAttr}}

    </div>

  </div>
</template>
<script>
  import httpService from '@/services/httpService'
  export default {
    name: 'questPage',
    quest:{},
    data () {
      return {
        // quest
      }
    },
    methods: {
      async getQuestById (alias,globalId) {
        const response = await httpService.getQuestById(alias,globalId);
        console.log(response)
        // this.posts = response.data.posts
        this.quest = response.data;
        for(var i in response.data){
          console.log(response.data[i])
          this.quest[i] = response.data[i]
        }
      }
    },
    mounted () {
      this.getQuestById(this.$route.params.alias,this.$route.params.globalId)
    }
  }
</script>
