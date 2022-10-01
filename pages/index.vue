<template>
  <div>
    <h1>Index Page</h1>

    <ul>
      <li v-for="item in listCategories" :key="item.id">
        {{ item.name }} - slug: {{ item.slug }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      listCategories: [],
    }
  },

  created() {
    // eslint-disable-next-line no-console
    this.$axios
      .$get('http://localhost/wp-api-test/wp-json/wp/v2/categories')
      // eslint-disable-next-line no-console
      .then((res) => console.log(res))
  },
}
</script>
