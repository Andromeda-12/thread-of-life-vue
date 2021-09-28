<template>
  <v-row justify="center" align="center">
    <v-col lg="7" md="8" sm="10" cols="12">
      <event-calendar></event-calendar>
    </v-col>
  </v-row>
</template>

<script>
import EventCalendar from '@/components/EventCalendar'
export default {
  components: {
    EventCalendar,
  },
}
</script>
