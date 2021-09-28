<template>
  <v-navigation-drawer
    app
    :mini-variant="isClose"
    class="sidebar py-5"
    mobile-breakpoint="xs"
    :class="{ 'pl-2 pr-2': !isClose }"
  >
    <div
      class="sidebar__icon-menu"
      :class="{ 'sidebar__icon-menu-collapsed': isClose }"
    >
      <v-btn icon right @click="collapseSidebar">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>

    <v-list-item class="px-2">
      <v-list-item-avatar class="sidebar__avatar">
        <v-img contain src="../assets/default-avatar.png"></v-img>
      </v-list-item-avatar>

      <v-list-item-group>
        <v-list-item-title> {{ user.name }} </v-list-item-title>
        <v-list-item-subtitle> {{ user.email }} </v-list-item-subtitle>
      </v-list-item-group>
    </v-list-item>

    <v-list-item :class="{ 'px-2': isClose }">
      <v-list-item-action>
        <button-component small :fab="isClose">
          <v-icon color="pr-5">mdi-plus</v-icon>
          <span v-if="!isClose">Добавить событие</span>
        </button-component>
      </v-list-item-action>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <router-link
        v-for="item in items"
        :key="item.title"
        :to="{ name: item.rout }"
      >
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
  name: 'SidebarComponent',
  components: {
    ButtonComponent,
  },
  props: {
    close: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      user: {
        avatar: '',
        name: 'Zheneva',
        email: 'zheneva@ikit.com',
      },
      isClose: false,
      items: [
        { title: 'Календарь', icon: 'mdi-calendar-heart', rout: 'Dashboard' },
        { title: 'Воспоминания', icon: 'mdi-image', rout: 'EventsFeed' },
        { title: 'About', icon: 'mdi-help-box', rout: 'Home' },
        { title: 'Настройки', icon: 'mdi-cog' },
      ],
    }
  },
  methods: {
    collapseSidebar() {
      this.isClose = !this.isClose
    },
  },
}
</script>
