<template>
  <div>
    <h1>
      Clients Page
      <strong>
        {{ JSON.stringify(listPost) }}
      </strong>
    </h1>

    <button @click="handleCreatePosts">Add Item</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ClientsPage',
  head: {
    title: 'Client Page',
  },

  computed: {
    ...mapState({
      listPost: (state) => state.posts.INIT_POSTS,
    }),
  },

  mounted() {
    setTimeout(() => {
      this.$notify({
        group: 'foo',
        title: 'Import message',
        text: 'Hello user! This is a notification',
      })
    }, 2000)
  },

  methods: {
    ...mapActions({
      actAddPost: 'posts/actAddPosts',
    }),

    handleCreatePosts() {
      this.actAddPost('[Item 2]')
    },
  },
}
</script>
