<template>
  <div>
    <v-card height="300px" class="pa-5" elevation="5">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="90%"
        width="100%"
      ></v-img>
    </v-card>

    <v-card class="mt-3" dark>
      <v-card-title> Top western road trips </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        {{ memory.description }}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio in
        quisquam vel beatae optio nihil.
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    memory: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    show: false,
  }),
}
</script>

<style></style>
