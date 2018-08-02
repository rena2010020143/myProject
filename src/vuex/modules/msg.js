/**
 * Created by lina.zhang on 2018/7/30.
 */
import * as types from '../types'

const state = {
  msg: 'dsdsds'
}

const actions = {
  msg ({commit}, status) {
    commit(types.DEMO_MSG, status)
  }
}

const getters = {
  msg: state => state.msg
}

const mutations = {
  [types.DEMO_MSG] (state, status) {
    state.msg = status
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
