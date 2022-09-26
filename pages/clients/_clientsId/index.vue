<template>
  <h1>Client Page Id: {{ $route.params.clientsId }}</h1>
</template>

<script>
export default {
  name: 'ClientsId',

  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$route.params.clientsId)
  },
}
</script>
