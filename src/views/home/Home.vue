<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div class="nav-center" slot="nav-center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from './childComps/HomeSwiper'

import {getHomeMultidata} from 'network/api/home'
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res)
      this.banners = res.banner.list
      console.log(this.banners)
      this.recommends = res.recommends
    })
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
.home-nav {
  background-color: var(--color-tint);
  .nav-center {
    color: #fff;
  }
}
</style>