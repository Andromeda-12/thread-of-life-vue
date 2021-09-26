<template>
  <div class="home-page">
    <v-row justify="center" class="mt-10">
      <v-col cols="4">
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
