<template>
  <v-date-picker
    v-model="picker"
    class="calendar"
    locale="ru-ru"
    full-width
    show-adjacent-months
    landscape
    :weekday-format="weekdayFormat"
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
    }
  },
  methods: {
    weekdayFormat(date) {
      return moment(date).locale('ru').format('dd')
    },
  },
}
</script>

<style>
.calendar {
  height: 50% !important;
}

.v-date-picker-table {
  height: 450px !important;
}

.v-date-picker-table table {
  height: 400px !important;
}

.v-date-picker-table--date .v-btn {
  font-size: 14px !important;
  height: 50px !important;
  width: 50px !important;
}

.v-date-picker-header {
  height: 100px;
}

.v-date-picker-table th {
  font-size: 16px !important;
}

.v-application .primary {
    background-color: #9d331f !important;
}

.theme--light.v-picker__body {
    background-color: #f0a277 !important;
}

.theme--light.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus),
.theme--light.v-date-picker-table th, .theme--light.v-date-picker-table .v-date-picker-table--date__week {
    color: #fff !important;
}

.v-application .accent {
    background-color: #9d331f !important;
}

/* .v-picker {
    border-radius: 20px !important;
} */
</style>
