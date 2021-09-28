<template>
  <v-date-picker
    v-model="picker"
    class="calendar"
    locale="ru-ru"
    full-width
    picker
    :events="arrayEvents"
    show-adjacent-months
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

<style>
.calendar {
  height: 50% !important;
}

.v-date-picker-table {
  height: 430px !important;
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
  height: 80px;
}

.v-date-picker-table th {
  font-size: 16px !important;
}

.v-application .primary {
  background-color: #9d331f !important;
}

.theme--light.v-picker__body {
  background-color: #f8a071 !important;
}

.theme--light.v-date-picker-header
  .v-date-picker-header__value:not(.v-date-picker-header__value--disabled)
  button:not(:hover):not(:focus),
.theme--light.v-date-picker-table th,
.theme--light.v-date-picker-table .v-date-picker-table--date__week {
  color: #fff !important;
}

.v-application .accent {
  background-color: #9d331f !important;
}

.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar),
.v-card > .v-card__progress + *:not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-radius: 20px 20px 0 0 !important;
}

.v-card > *:last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-bottom-left-radius: 20px !important;
  border-bottom-right-radius: 20px !important;
}

.theme--light.v-card {
  background-color: rgba(255, 255, 255, 0) !important;
}

.v-application .accent--text {
  color: rgba(255, 255, 255, 0.651) !important;
}

/* //цвет года */
.active.primary--text {
  color: #9d331f !important;
}

.v-date-picker-table.v-date-picker-table--date.theme--light
  > table
  > tbody
  > tr:nth-child(5)
  > td:nth-child(2)
  > button {
  color: #fff !important;
  border-color: #9d331f !important;
}

.theme--light.v-btn.v-btn--disabled {
  color: rgba(255, 255, 255, 0.493) !important;
}

.v-date-picker-table--date .v-date-picker-table__events {
  bottom: 0 !important;
  border: 2px #fff solid !important;
  border-radius: 50% !important;
  height: 50px !important;
  width: 50px !important;
}

/* // чтобы не было стандартных точек */
.v-picker__body.theme--light
  > div
  > div.v-date-picker-table.v-date-picker-table--date.theme--light
  > table
  > tbody
  > tr
  > td
  > button
  > div.v-date-picker-table__events
  > div {
  display: none !important;
}
</style>
