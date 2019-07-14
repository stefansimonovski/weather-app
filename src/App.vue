<template>
  <v-app>
    <template>
      <v-toolbar class="primary">
        <v-toolbar-title class="yellow--text">Weather App</v-toolbar-title>
      </v-toolbar>
    </template>
    <main>
      <home/>
    </main>
  </v-app>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>
