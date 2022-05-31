<template>
  <div class="alert">
    <v-alert v-model="isShow" type="error" dismissible>
      <slot></slot>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'AlertComponent',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    timeout: {
      type: Number,
      default: 10000,
    },
  },
  mounted() {
    setTimeout(() => {
      this.$emit('close')
    }, this.timeout)
  },
}
</script>
