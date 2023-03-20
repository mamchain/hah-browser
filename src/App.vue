<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view />
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import BottomBar from '@/components/BottomBar'

export default {
  name: 'App',
  components: { TopBar, BottomBar }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
