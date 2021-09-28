<template>
  <v-date-picker
    v-model="picker"
    class="calendar"
    locale="ru-ru"
    full-width
    show-adjacent-months
    :weekday-format="weekdayFormat"
    :events="arrayEvents"
    :first-day-of-week="1"
  ></v-date-picker>
</template>

<script>
import moment from 'moment'

export default {
  name: 'EventCalendar',
  data() {
    return {
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dates: ['2021-09-15', '2021-09-20', '2021-09-24'],
      arrayEvents: ['2021-09-15', '2021-09-20', '2021-09-24'],
    }
  },
  methods: {
    weekdayFormat(date) {
      return moment(date).locale('ru').format('dd')
    },
  },
}
</script>
