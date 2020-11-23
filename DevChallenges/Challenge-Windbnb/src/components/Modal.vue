<template>
    <div v-if="show">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    overflow: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show() {
      if (this.overflow) document.body.style.overflow = this.show ? 'hidden' : 'visible'
    }
  }
}
</script>
