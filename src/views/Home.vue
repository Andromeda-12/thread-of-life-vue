<template>
  <v-row justify="center" class="mt-10">
    <v-col cols="4">
      <button-component class="mb-10" @click="test"> ABOBUS </button-component>
      <input-component name="Login" label="Пользователь"></input-component>
      <input-component name="Password" label="Пароль"></input-component>
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
