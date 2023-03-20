<template>
  <div id="app">
    <div class="main-container">
      <div class="top">this is top bar</div>
      <router-view />
      <div class="bottom">this is bottom bar</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.main-container {
  min-height: 100vh;
  min-width: 100vw;
  border: 1px solid red;
}

.top,
.bottom {

  width: 100%;
  height: 60px;
  border: 1px solid blue;
  text-align: center;
  line-height: 60px;
}

.top {
  position: fixed;
  top: 0;
  left: 0;
}

.bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  border: 1px solid green;
}
</style>
