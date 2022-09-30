<template>
  <h2>Custom Loading</h2>
</template>

<script>
export default {
  name: 'CustomLoading',

  asyncData() {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => {
        resolve({})
      }, 5000)
    })
  },
}
</script>
