<template>
  <v-btn
    class="btn"
    block
    rounded
    :loading="loading"
    :small="small"
    :fab="fab"
    @click="$emit('click')"
  >
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
    small: {
      type: Boolean,
      default: false,
    },
    fab: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
