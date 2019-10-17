import * as type from './list-mutations-types'
import Vue from 'vue'
export default {
  [type.SET_VALUE] (state, { key, value }) {
    Vue.set(state, key, value)
  }
}