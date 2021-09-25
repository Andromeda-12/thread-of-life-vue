<template>
  <v-row justify="center" class="mt-10">
    <v-col cols="4">
      <router-link :to="{ name: 'Authorization' }">
        <button-component @click="test"> ABOBUS </button-component>
      </router-link>
    </v-col>
  </v-row>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent'
import InputComponent from '@/components/InputComponent'

export default {
  name: 'Home',

  components: {
    ButtonComponent,
    InputComponent,
  },
  methods: {
    test() {
      console.log('test')
    },
  },
}
</script>
