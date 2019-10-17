import state from '@/store/workflow/modules/list/list-state'
import actions from '@/store/workflow/modules/list/list-actions'
import mutations from '@/store/workflow/modules/list/list-mutations'
import getters from '@/store/workflow/modules/list/list-getters'

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}