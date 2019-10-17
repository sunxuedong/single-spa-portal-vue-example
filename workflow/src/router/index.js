import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routes'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = location => originalPush.call(this, location).catch(err => err)

export default new Router({
  routes
})