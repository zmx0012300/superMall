<template>
  <div id="app" class="wrapper">
    <router-view/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}

</script>
<style>
  @import url('assets/css/base.css');
</style>
