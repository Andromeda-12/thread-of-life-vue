<template>
  <div>
    <v-row justify="center" align="center">
      <v-col lg="10" md="8" sm="10" cols="12">
        <event-calendar @addEvent="$emit('addEvent', $event)"></event-calendar>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import EventCalendar from '@/components/EventCalendar'
export default {
  components: {
    EventCalendar,
  },
  methods: {},
}
</script>
