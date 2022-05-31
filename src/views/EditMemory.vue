<template>
  <div style="margin: 0 auto">
    <form-card title="Создание воспоминания" class="create-card">
      <v-form ref="form" @submit.prevent="onSubmit">
        <div class="card__input">
          <input-component
            v-model="memory.title"
            label="Заголовок"
            name="title"
          ></input-component>
        </div>

        <div class="card__input">
          <input-component
            v-model="memory.content"
            label="Контент"
            name="content"
          ></input-component>
        </div>

        <v-file-input
          v-model="memory.image"
          label="Фото"
          filled
          prepend-icon="mdi-camera"
        ></v-file-input>

        <div style="display: flex; justify-content: center">
          <v-date-picker
            class="calendar1"
            v-model="selectedDate"
            locale="ru-ru"
          ></v-date-picker>
        </div>

        <div class="card__btn">
          <button-component :loading="loading" type="submit"
            >Отредактировать воспоминание</button-component
          >
        </div>

        <div class="card__btn">
          <button-component @click="onClickDeleteMemory"
            >Удалить воспоминание</button-component
          >
        </div>
      </v-form>
    </form-card>
  </div>
</template>

<script>
import InputComponent from '@/components/InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import FormCard from '@/components/FormCard.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    InputComponent,
    ButtonComponent,
    FormCard,
  },
  data() {
    return {
      loading: false,
      memory: {
        title: '',
        content: '',
        image: null,
      },
      selectedDate: null,
    }
  },
  computed: {
    ...mapState('memoryModule', ['currentMemory']),
    ...mapState('userModule', ['userId']),
  },
  async mounted() {
    await this.getMemory(this.$route.params.id)
    this.memory = this.currentMemory
    this.selectedDate = this.currentMemory.date
  },
  methods: {
    ...mapActions('memoryModule', ['getMemory', 'editMemory', 'deleteMemory']),
    onSubmit() {
      const formData = new FormData()
      formData.append('id', this.currentMemory.id)
      formData.append('userId', this.userId)
      formData.append('title', this.memory.title)
      formData.append('content', this.memory.content)
      formData.append('image', this.memory.image)
      formData.append('date', this.selectedDate)
      this.editMemory(formData)
    },
    onClickDeleteMemory() {
      this.deleteMemory(this.currentMemory.id).then(() => {
        this.$router.push({ name: 'EventsFeed' })
      })
    },
  },
}
</script>

<style lang="scss">
.create-card {
  width: 800px !important;
}

.calendar1 {
  height: 50% !important;
  width: 290px !important;

  // дни недели
  .v-date-picker-table th {
    font-size: 16px !important;
  }

  // цвет хедера
  div.v-picker__title.primary {
    background-color: $--primary !important;
  }

  // цвет фона каледнаря
  .theme--light.v-picker__body {
    background-color: $--secondary !important;
  }

  // цвет дней недели

  .theme--light.v-date-picker-header
    .v-date-picker-header__value:not(.v-date-picker-header__value--disabled)
    button:not(:hover):not(:focus),
  .theme--light.v-date-picker-table th,
  .theme--light.v-date-picker-table .v-date-picker-table--date__week {
    color: #fff !important;
  }

  // цвет активного дня или месяца
  .v-date-picker-table .v-btn.v-btn--active {
    background-color: $--primary !important;
  }

  // радиусы календаря
  .v-picker__title {
    border-radius: 20px 20px 0 0 !important;
  }

  // радиусы календаря
  .v-picker__body.theme--light {
    border-bottom-left-radius: 20px !important;
    border-bottom-right-radius: 20px !important;
  }

  // чтобы позади календаря не было белого фона
  .v-picker.theme--light.v-card {
    background-color: rgba(255, 255, 255, 0) !important;
  }

  // цвет месяца при наведении
  .v-application div.accent--text {
    color: $--hover-color !important;
  }

  // цвет года
  li.active.primary--text {
    color: $--primary !important;
  }

  // цвета для текущего дня
  .v-date-picker-table__current {
    border-color: $--primary !important;
    border-width: 2px !important;
  }

  // цвет дней не текущего месяца
  .v-date-picker-table__current div {
    color: $--color !important;
  }

  // цвет дней не текущего месяца
  .theme--light.v-btn.v-btn--disabled {
    color: $--disabled-text-color !important;
  }

  // отображение событий
  .v-date-picker-table--date .v-date-picker-table__events {
    bottom: 0 !important;
    border: 2px $--color solid !important;
    border-radius: 50% !important;
    height: 50px !important;
    width: 50px !important;
  }

  // чтобы не было стандартных точек
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
}
</style>
