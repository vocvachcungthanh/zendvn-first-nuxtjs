export default {
  addPosts(state, item) {
    let initPostsClone = state.INIT_POSTS

    initPostsClone = [...initPostsClone, item]

    state.INIT_POSTS = initPostsClone
  },

  setListPost(state, listPost) {
    state.INIT_POSTS_ITEM = listPost
  },
}
