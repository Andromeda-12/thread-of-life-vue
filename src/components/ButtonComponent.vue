<template>
  <v-btn rounded class="btn" color="color1" @click="$emit('click')">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {}
</script>
