<template>
  <div class="list">
    <div class="filter">
      是否是被派发给自己的工单：
      <Select style="width:200px" @on-change="onChange">
        <Option v-for="item in opts" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <Table :columns="columns" :data="filteredList"></Table>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('list')
export default {
  name: 'List',
  computed: {
    ...mapGetters([
      'filteredList'
    ])
  },
  watch: {
    '$route.params.status': {
      handler (newVal, oldVal) {
        this.reqList(newVal)
      },
      immediate: true
    }
  },
  data () {
    return {
      opts: [
        {
          label: '是',
          value: 0
        },
        {
          label: '否',
          value: 1
        }
      ],
      columns: [
        {
          key: 'title',
          title: '标题'
        },
        {
          key: 'date',
          title: '时间'
        },
        {
          key: 'isMine',
          title: '是否是被派发给自己的工单',
          render: (h, params) => {
            return h('div', ['是', '否'][params.row.isMine])
          }
        },
        {
          key: 'status',
          title: '状态'
        }
      ]
    }
  },
  methods: {
    ...mapActions([
      'reqList',
      'filterList'
    ]),
    onChange (value) {
      this.filterList({
        key: 'isMine',
        value
      })
    }
  }
}
</script>
<style scoped lang="less">
  .filter {
    margin-bottom: 24px;
  }
</style>