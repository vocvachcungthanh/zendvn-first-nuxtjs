export default {
  actAddPosts({ commit }, item) {
    commit('addPosts', item)
  },

  actSetListPosts({ commit }, listPosts) {
    commit('setListPost', listPosts)
  },
}
