<template>
  <div>
    <h1>Demo Fetch component</h1>
    <ul>
      <li v-for="item in listTags" :key="item.id">
        {{ item.name }} slug: {{ item.slug }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listTags: [],
    }
  },

  async fetch() {
    const data = await this.$axios.$get(
      'http://localhost/wp-api-test/wp-json/wp/v2/tags'
    )

    this.listTags = data
  },

  created() {
    // eslint-disable-next-line no-console
    console.log('[Create demo fetch component run]')
  },
}
</script>
