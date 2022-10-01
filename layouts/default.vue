<template>
  <div class="root">
    <header>
      <h1>Header {{ counter }}</h1>
    </header>
    <button @click="handleClick">Click Me!</button>
    <ul>
      <li>
        <nuxt-link to="/scroll/long-page"> Long Page </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/scroll/another-long-page">
          Another Long page
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/custom-loading"> Custom loading </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/asyncData"> Async Data </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/fetchMethod"> Fetch Method </nuxt-link>
      </li>
    </ul>
    <Nuxt />
    <footer>
      <h1>Footer</h1>
    </footer>
    <notifications group="foo" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'LayoutDefault',

  computed: {
    ...mapState({
      counter: (state) => state.counter,
    }),
  },

  methods: {
    ...mapActions({
      actionIncrement: 'increment',
    }),

    handleClick() {
      this.actionIncrement()
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
}

.fade-leave-active {
  transform: translateY(50px);
  opacity: 0;
}

.fade-enter-active {
  transform: translateY(0);
  opacity: 1;
}
</style>
