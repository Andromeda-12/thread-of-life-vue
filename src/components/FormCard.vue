<template>
  <v-sheet class="card" rounded="xl" elevation="10">
    <v-row class="pt-14">
      <v-col>
        <h1 class="card__title">{{ title }}</h1>
      </v-col>
    </v-row>

    <v-row class="pb-14" justify="center">
      <v-col cols="10">
        <slot></slot>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: 'FormCard',
  props: {
    title: {
      type: String,
      default: 'DefaultTitle',
    },
  },
}
</script>
