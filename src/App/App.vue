<template>
  <div id="App"></div>
  <div id="notFound" v-if="this.$route.path.startsWith('/404')">
    <page404></page404>
  </div>
  <div id="View">
    <router-view></router-view>
  </div>
</template>

<script>
  import App from './App';

  export default App;
</script>

<style lang="scss" scoped>
  @import './App.scss';
</style>