<template>
  <v-sheet class="card" rounded="xl" elevation="3" color="color1">
    <h1 class="card__title">{{ title }}</h1>
    <v-row justify='center'>
      <v-col cols='10'>
        <slot></slot>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'DefaultTitle',
    },
  },
}
</script>

<style></style>
