<template>
  <div id="app">
    <layout>
      <router-view/>
    </layout>
  </div>
</template>

<script>
import Layout from './components/layout'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
