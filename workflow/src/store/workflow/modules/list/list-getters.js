export default {
  filteredList: state => state.isMine === '' ? state.workflowList : state.workflowList.filter(item => item.isMine === state.isMine)
}