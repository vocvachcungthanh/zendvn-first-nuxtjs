export const state = () => ({
  counter: 0,
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}

export const actions = {
  nuxtServerInit(vuexContent, nuxtContext) {
    // eslint-disable-next-line no-console
    console.log({ vuexContent }, { nuxtContext })
  },

  increment(context) {
    context.commit('increment')
  },
}
