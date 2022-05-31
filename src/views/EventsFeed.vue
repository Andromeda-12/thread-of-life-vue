<template>
  <v-row justify="center">
    <v-col cols="11">
      <div class="feed">
        <feed-day-component
          class="feed__day"
          v-for="date in memoriesDates"
          :key="date"
          :date="date"
          :memories="getMemoriesByDate(date)"
        ></feed-day-component>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import FeedDayComponent from '@/components/FeedDayComponent.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    FeedDayComponent,
  },
  computed: {
    ...mapState('memoryModule', ['memories']),
    ...mapState('userModule', ['userId']),
    memoriesDates() {
      const result = this.memories.map((memory) => memory.date)
      return result.filter((item, index) => result.indexOf(item) == index).sort().reverse()
    },
  },
  async mounted() {
    await this.getUserMemories(this.userId)
  },
  methods: {
    ...mapActions('memoryModule', ['getUserMemories']),
    getMemoriesByDate(date) {
      return this.memories.filter((item) => item.date === date)
    },
  },
}
</script>

<style lang="scss">
.day {
  &__title {
    color: $--primary;
  }

  &__divider {
    width: 105%;
    margin-left: -2.5%;
    background-color: #dc8762;
    border-radius: 20px;
    border-width: 0;
    height: 4px;
    margin-bottom: 40px;
  }
}

.feed__day {
  margin-bottom: 40px;
}
</style>
