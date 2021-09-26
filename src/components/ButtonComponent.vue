<template>
  <v-btn class="btn" block rounded :loading="loading" @click="$emit('click')">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  }
}
</script>
