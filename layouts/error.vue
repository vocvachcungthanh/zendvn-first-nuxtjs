<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      Page not found {{ error.statusCode }}
    </h1>

    <h1 v-else>An error occurred</h1>

    <p>
      {{ error.message }}
    </p>

    <NuxtLink to="/"> Home Page </NuxtLink>
  </div>
</template>


<script>
export default {
  name: 'LayoutError',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
}
</script>
