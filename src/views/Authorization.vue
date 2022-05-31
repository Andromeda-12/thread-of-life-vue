<template>
  <div>
    <form-card title="Вход">
      <v-form
        ref="form"
        v-model="isValidForm"
        :disabled="isFormDisabled"
        @submit.prevent="onSubmit"
      >
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
          <span class="mr-3">Еще нет аккаунта?</span>
          <router-link :to="{ name: 'Registration' }">
            Зарегистрироваться
          </router-link>
        </div>


        <div class="card__btn">
          <button-component :loading="loading" type="submit"
            >Войти</button-component
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
import { emailRules, passwordRules } from '@/constants'
import { mapActions, mapState } from 'vuex'
import jwt_decode from "jwt-decode"

export default {
  name: 'Authorization',
  components: {
    InputComponent,
    ButtonComponent,
    FormCard,
    AlertComponent,
  },
  rules: {
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
      email: '',
      password: '',
    },
    obtainErrorMessage: '',
  }),
  computed: {
     ...mapState('authModule', ['token']),
    passwordType() {
      return this.isShowPassword ? 'text' : 'password'
    },
    passwordIcon() {
      return this.isShowPassword ? 'mdi-eye' : 'mdi-eye-off'
    },
  },
  methods: {
    ...mapActions('authModule', ['obtain']),
    ...mapActions('userModule', ['getUser']),
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

        this.obtain(this.credential)
          .then(() => {
            const userFromToken = jwt_decode(this.token);
            this.getUser(userFromToken.id)
            this.$router.push({ name: 'Dashboard' })
          })
          .catch(({ response }) => {
            console.log(response);
            this.isFormDisabled = false
            this.loading = false
            this.isShowAlert = true
            this.obtainErrorMessage = response.data.message
          })
      } else {
        this.validate()
      }
    },
  },
}
</script>
