<template>
  <div class="user__page">
    <ul>
      <li>
        <nuxt-link
          active-class="active"
          exact-active-class="active-exact"
          to="/user"
        >
          User Page
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          active-class="active"
          exact-active-class="active-exact"
          to="/user/20"
        >
          User Detail
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          active-class="active"
          exact-active-class="active-exact"
          to="/user/setting"
        >
          User Setting
        </nuxt-link>
      </li>
    </ul>
    <h1>Uses Page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam optio
      ratione minus accusantium soluta modi voluptatibus! Aliquid autem quo
      eligendi vel maxime sint ipsum! Nemo soluta doloribus dolores molestiae
      iusto.
    </p>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  layout(context) {
    if (context.isMobile) {
      return 'mobile'
    } else {
      return 'admin'
    }
  },

  middleware: 'check-visit',
}
</script>
