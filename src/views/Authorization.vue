<template>
  <form-card title="Регистрация">
    <input-component name="Login" label="Пользователь"></input-component>
    <input-component name="Password" label="Пароль"></input-component>
  </form-card>
</template>

<script>
import FormCard from '../components/FormCard.vue'
import InputComponent from '../components/InputComponent.vue'
import ButtonComponent from '../components/ButtonComponent.vue'

export default {
  name: 'Authorization',

  components: {
    InputComponent,
    ButtonComponent,
    FormCard,
  },
}
</script>
