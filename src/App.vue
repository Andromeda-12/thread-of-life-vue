<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import jwt_decode from "jwt-decode"

export default {
  name: 'App',
  methods: {
    ...mapActions('userModule', ['getUser']),

  },
  async mounted() {
    const token = localStorage.getItem('token')
    // console.log(token);
    if (token) {
      const userFromToken = jwt_decode(token);
      await this.getUser(userFromToken.id)
    }
    
  }
}
</script>
