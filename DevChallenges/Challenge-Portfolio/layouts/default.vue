<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import Portfolio from '@/assets/images/Portfolio_screen.png'

export default {
  head() {
    return {
      meta: [
        { hid: 'og:image', property: 'og:image', content: 'https://www.cosme-gressier.com' + Portfolio}
      ]
    }
  },
}
</script>
