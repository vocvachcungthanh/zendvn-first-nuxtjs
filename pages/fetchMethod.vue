<template>
  <div>
    <h1>Demo Fetch methods</h1>
    <nuxt-link to="/"> Trang chủ </nuxt-link>

    <ul>
      <li v-for="item in listCategories" :key="item.id">
        {{ item.name }} - slug: {{ item.slug }}
      </li>
    </ul>
    <DemoFetchComponent />
  </div>
</template>

<script>
import DemoFetchComponent from '~/components/DemoFetchComponent.vue'

export default {
  name: 'FetchMethod',

  components: {
    DemoFetchComponent,
  },

  layout: 'fetch-data',

  async asyncData({ store, $axios }) {
    const data = await $axios.$get(
      'http://localhost/wp-api-test/wp-json/wp/v2/posts'
    )

    store.dispatch('posts/actSetListPosts', data)
  },

  data() {
    return {
      listCategories: [],
    }
  },

  // async fetch() {
  //   const data = await this.$axios.$get(
  //     'http://localhost/wp-api-test/wp-json/wp/v2/categories'
  //   )

  //   this.$store.dispatch('posts/actSetListPosts', data)
  // },

  created() {
    // eslint-disable-next-line no-console
    console.log('[create run]')
  },
}
</script>
