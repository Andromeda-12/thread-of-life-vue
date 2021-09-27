<template>
  <v-row justify="center" align="center">
    <v-col cols="8">
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
