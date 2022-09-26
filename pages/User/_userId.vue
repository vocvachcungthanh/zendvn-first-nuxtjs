<template>
  <h1>User index Id {{ $route.params.userId }}</h1>
</template>

<script>
export default {
  validate(context) {
    const userId = Number(context.params.userId)

    if (!userId) return false

    return true
  },
}
</script>
