<template>
  <form-card title="Вход">
    <v-form>
      <div class="card__input">
        <input-component
          v-model="credential.email"
          label="Логин"
          name="login"
          :rules="$options.rules.emailRules"
        ></input-component>
      </div>

      <div class="card__input">
        <input-component
          v-model="credential.password"
          label="Пароль"
          name="password"
          :type="passwordType"
          :rules="$options.rules.passwordRules"
          :append-icon="passwordIcon"
          @click:append="passwordIconClick"
        ></input-component>
      </div>

      <div>
        <span class="mr-3">Еще нет аккаунта?</span>
        <router-link :to="{ name: 'Registration' }">
          Зарегистрироваться
        </router-link>
      </div>

      <div class="card__btn">
        <button-component>Войти</button-component>
      </div>
    </v-form>
  </form-card>
</template>

<script>
import FormCard from '../components/FormCard.vue'
import InputComponent from '../components/InputComponent.vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import { emailRules, passwordRules } from '@/constants'

export default {
  name: 'Authorization',
  components: {
    InputComponent,
    ButtonComponent,
    FormCard,
  },
  rules: {
    emailRules,
    passwordRules,
  },

  data: () => ({
    isShowPassword: false,
    credential: {
      email: '',
      password: '',
    },
  }),
  computed: {
    passwordType() {
      return this.isShowPassword ? 'text' : 'password'
    },
    passwordIcon() {
      return this.isShowPassword ? 'mdi-eye' : 'mdi-eye-off'
    },
  },
  methods: {
    passwordIconClick() {
      this.isShowPassword = !this.isShowPassword
    },
  },
}
</script>
