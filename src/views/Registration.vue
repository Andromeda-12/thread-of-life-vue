<template>
  <div>
    <form-card title="Регистрация">
      <v-form
        ref="form"
        v-model="isValidForm"
        :disabled="isFormDisabled"
        @submit.prevent="onSubmit"
      >
        <div class="card__input">
          <input-component
            v-model="credential.login"
            label="Логин"
            name="login"
            :rules="$options.rules.emptyFieldRule"
          ></input-component>
        </div>

        <div class="card__input">
          <input-component
            v-model="credential.email"
            label="E-mail"
            name="email"
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
          <span class="mr-3">Уже есть аккаунт?</span>
          <router-link :to="{ name: 'Authorization' }"> Войти </router-link>
        </div>

        <div class="card__btn">
          <button-component :loading="loading" type="submit"
            >Зарегистрироваться</button-component
          >
        </div>
      </v-form>
    </form-card>

    <alert-component
      class="auth-alert"
      :is-show="isShowAlert"
      @close="isShowAlert = false"
      >{{ obtainErrorMessage }}</alert-component
    >
  </div>
</template>

<script>
import FormCard from '@/components/FormCard.vue'
import InputComponent from '@/components/InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import AlertComponent from '@/components/AlertComponent.vue'
import { emptyFieldRule, emailRules, passwordRules } from '@/constants'
import { mapActions } from 'vuex'

export default {
  name: 'Authorization',
  components: {
    InputComponent,
    ButtonComponent,
    FormCard,
    AlertComponent,
  },
  rules: {
    emptyFieldRule,
    emailRules,
    passwordRules,
  },
  data: () => ({
    isFormDisabled: false,
    isValidForm: true,
    isShowPassword: false,
    isShowAlert: false,
    loading: false,
    credential: {
      login: '',
      email: '',
      password: '',
    },
    obtainErrorMessage: '',
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
    ...mapActions('authModule', ['register']),
    passwordIconClick() {
      this.isShowPassword = !this.isShowPassword
    },
    validate() {
      this.$refs.form.validate()
    },
    onSubmit() {
      if (this.isValidForm) {
        this.isFormDisabled = true
        this.loading = true

        this.register(this.credential)
          .then(() => {
            this.$router.push({ name: 'Authorization' })
          })
          .catch(({ response }) => {
            this.isShowAlert = true
            this.isFormDisabled = false
            this.loading = false
            this.obtainErrorMessage = response.data.message
          })
      } else {
        this.validate()
      }
    },
  },
}
</script>
