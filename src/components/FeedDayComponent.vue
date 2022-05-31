<template>
  <div>
    <div class="day">
      <h1 class="day__title">{{ formatDate }}</h1>
      <hr class="day__divider" />
    </div>

    <v-row v-if="memories">
      <v-col
        v-for="memory in memories"
        :key="memory.id"
        lg="4"
        xl="3"
        md="6"
        sm="9"
        cols="12"
      >
        <memory-component
          :memory="memory"
          @click="redirectToMemory(memory.id)"
        ></memory-component>
      </v-col>
    </v-row>

    <v-row v-else justify="center">
      <v-col cols="auto">
        <div>Воспоминаний на этот день нет</div>
        <div>Вы можете добавить воспоминание на этот день</div>
        <button-component>
          <v-icon>mdi-plus</v-icon>
          <span>Добавить воспоминание</span>
        </button-component>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MemoryComponent from '@/components/MemoryComponent.vue'
import ButtonComponent from './ButtonComponent.vue'
import moment from 'moment'

export default {
  components: {
    MemoryComponent,
    ButtonComponent,
  },
  props: {
    date: {
      type: String,
      default: 'Day Month Year',
    },
    memories: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    formatDate() {
      return moment(this.date).locale('ru').format('LL').toUpperCase()
    },
  },
  methods: {
    redirectToMemory(id) {
      console.log(id)
      this.$router.push({ name: 'Memory', params: { id } })
    },
  },
}
</script>
