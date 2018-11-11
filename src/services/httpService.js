import api from '@/services/api'

export default {
  getQuests () {
    return api().get('quests')
  }
}
