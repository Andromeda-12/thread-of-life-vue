<template>
  <v-btn class="btn" block rounded @click="$emit('click')">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonComponent',
}
</script>
