<template>
  <v-row justify="center">
    <v-col cols="11">
      <div class="feed">
        <feed-day-component
          class="feed__day"
          :date="date"
          :memories="memories"
        ></feed-day-component>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import FeedDayComponent from '@/components/FeedDayComponent.vue'
import moment from 'moment'

export default {
  components: {
    FeedDayComponent,
  },
  data: () => ({
    date: moment('2021-09-24').locale('ru').format('LL').toUpperCase(),
    memories: [],
  }),
  mounted() {
    console.log(moment('2021-09-24').locale('ru').format('LL').toUpperCase())
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
</style>
