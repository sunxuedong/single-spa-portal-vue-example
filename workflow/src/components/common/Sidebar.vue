<template>
  <Menu :active-name="activeName" theme="light" width="auto" :open-names="['list']" @on-select="onSelect">
      <Submenu v-for="(sidebarItem, idx) in siderList" :key="idx" :name="sidebarItem.name">
          <template slot="title">
              <Icon :type="sidebarItem.icon"></Icon>
              {{ sidebarItem.name }}
          </template>
          <MenuItem v-for="(item, idx) in sidebarItem.children" :key="idx" :name="item.href">
            <!-- <a class="link" :href="item.href">{{ item.name }}</a> -->
            <!-- <router-link :to="item.href.slice(1)">{{ item.name }}</router-link> -->
            {{ item.name }}
          </MenuItem>
      </Submenu>
  </Menu>
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      activeName: 'todo',
      siderList: [
        {
          name: 'list',
          icon: 'ios-analytics',
          children: [
            {
              name: 'todo',
              href: '/workflow/list/todo'
            },
            {
              name: 'done',
              href: '/workflow/list/done'
            }
          ]
        }
      ]
    }
  },
  created () {
    this.activeName = location.hash.slice(1)
  },
  methods: {
    onSelect (path) {
      path !== this.$route.path && this.$router.replace({path: path})
    }
  }
}
</script>
<style lang="less" scoped>
</style>