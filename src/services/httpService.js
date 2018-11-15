import api from '@/services/api'

export default {
  getQuests () {
    return api().get('quests');
  },

  getQuestById (alias,globalId) {
    return api().get('quest/'+alias+'/'+globalId);
  }
}
