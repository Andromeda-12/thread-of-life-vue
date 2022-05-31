<template>
  <div>
    <v-row justify="center" align="center">
      <v-col lg="8" md="8" sm="10" cols="12">
        <event-calendar :events="memoriesDates" @addEvent="$emit('addEvent', $event)"></event-calendar>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import EventCalendar from '@/components/EventCalendar'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    EventCalendar,
  },
  computed: {
    ...mapState('userModule', ['userId']),
    ...mapState('memoryModule', ['memories']),
    memoriesDates() {
      const result = this.memories.map((memory) => memory.date)
      return result
        .filter((item, index) => result.indexOf(item) == index)
        .sort()
        .reverse()
    },
  },
  async mounted() {
    await this.getUserMemories(this.userId)
  },
  
  methods: {
    ...mapActions('memoryModule', ['getUserMemories']),
  },
}
</script>
