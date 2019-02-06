<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-title class="text-uppercase indigo--text text--darken-1">
        <span class="font-weight-light">Employee</span>
        <span>Manager</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" route :to="link.route">
          <v-list-tile-action>
            <v-icon class="grey--text text--darken-2">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="grey--text text--darken-2">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { text: "Home", icon: "home", route: "/" },
      { text: "Employees", icon: "people", route: "/" }
    ]
  })
};
</script>

<style>
</style>
