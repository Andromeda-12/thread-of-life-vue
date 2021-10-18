<template>
  <div class="home-page">
    <v-row justify="center" class="mt-10">
      <v-col cols="6">
        <div class="home__title">
          <h1> Thread of life</h1>
        </div>
        <div class="home__subtitle">
          <h2> Сервис для хранения воспоминаний</h2>
        </div>
        <div class="home_text">
          <h3>gtgthythjnyjjj cbghbfthygh gbnhyhy gfhhyyn fdnbtgtdf fhtbfvgr </h3>
        </div>
        <router-link :to="{ name: 'Registration' }">
          <button-component @click="test"> Присоедениться </button-component>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent'

export default {
  name: 'Home',
  components: {
    ButtonComponent,
  },
  methods: {
    test() {
      console.log('test')
    },
  },
}
</script>
