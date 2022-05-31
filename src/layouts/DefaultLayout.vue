<template>
  <v-container fill-height fluid>
    <sidebar-component></sidebar-component>

    <router-view @addEvent="addEventHandler" />
  </v-container>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent'

export default {
  components: {
    SidebarComponent,
  },
  methods: {
    addEventHandler(date) {
      console.log(date)
    },
  },
}
</script>
