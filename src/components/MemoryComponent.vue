<template>
  <div class="memory" @click="$emit('click')">
    <v-card height="300px" class="pa-5" elevation="5">
      <v-img
        :src="`http://localhost:5000/${memory.imageUrl}`"
        height="90%"
        width="100%"
      ></v-img>
    </v-card>

    <v-card class="mt-3">
      <v-card-title class="memory__title"> {{ memory.title }} </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="memory__description">
        {{ memory.description }}
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

<style lang="scss" scoped>
.memory {
  &__title {
    color: #000 !important; 
  }
  &__description{
    color: #000 !important; 
    font-weight: $--font-weight-normal;
  }

  :hover {
    cursor: pointer;
  }
}
</style>
