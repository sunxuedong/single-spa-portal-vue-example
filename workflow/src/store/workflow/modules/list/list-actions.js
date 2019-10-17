import * as type from './list-mutations-types'
export default {
  filterList ({ commit }, keyAndValue) {
    commit(type.SET_VALUE, keyAndValue)
  },
  reqList ({ commit }, status) {
    let list = []
    if (status === 'todo') {
      list = [
        {
          title: '工单1',
          date: '2019-10-16',
          status: '待办',
          isMine: 0
        },
        {
          title: '工单2',
          date: '2019-10-16',
          status: '待办',
          isMine: 1
        },
        {
          title: '工单3',
          date: '2019-10-16',
          status: '待办',
          isMine: 1
        },
        {
          title: '工单4',
          date: '2019-10-16',
          status: '待办',
          isMine: 1
        },
        {
          title: '工单5',
          date: '2019-10-16',
          status: '待办',
          isMine: 0
        }
      ]
    } else if (status === 'done') {
      list = [
        {
          title: '工单5',
          date: '2019-10-16',
          status: '已办',
          isMine: 1
        },
        {
          title: '工单7',
          date: '2019-10-16',
          status: '已办',
          isMine: 0
        },
        {
          title: '工单8',
          date: '2019-10-16',
          status: '已办',
          isMine: 1
        },
        {
          title: '工单9',
          date: '2019-10-16',
          status: '已办',
          isMine: 0
        },
        {
          title: '工单10',
          date: '2019-10-16',
          status: '已办',
          isMine: 0
        }
      ]
    }
    commit(type.SET_VALUE, {
      key: 'workflowList',
      value: list
    })
  }
}