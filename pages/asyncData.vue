<template>
  <div>
    <h1>Demo AsyncData</h1>
    <nuxt-link to="/"> Trang chủ </nuxt-link>
    <ul>
      <li v-for="item in listCategories" :key="item.id">
        {{ item.name }} - slug: {{ item.slug }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AsyncData',

  layout: 'fetch-data',

  // asyncData({ $axios }) {
  //   return (
  //     $axios
  //       .$get('http://localhost/wp-api-test/wp-json/wp/v2/categories')
  //       // eslint-disable-next-line no-console
  //       .then((data) => ({ listCategories: data }))
  //   )
  // },

  async asyncData({ $axios, req }) {
    if (req) {
      try {
        const promiseCategories = $axios.$get(
          'http://localhost/wp-api-test/wp-json/wp/v2/categories'
        )

        const promisePosts = $axios.$get(
          'http://localhost/wp-api-test/wp-json/wp/v2/posts'
        )

        const [listCategories, listPosts] = await Promise.all([
          promiseCategories,
          promisePosts,
        ])
        return {
          listCategories,
          listPosts,
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }
  },

  data() {
    return {
      counter: 10,
      listCategories: [],
      listPosts: [],
    }
  },
}
</script>
