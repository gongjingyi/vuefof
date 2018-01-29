<template>
  <div class="app-vue">
    <Index></Index>
     <router-view></router-view>
  </div>
</template>

<script>
import Index from "../src/components/index/index";
export default {
  name: "app",
  components: {
    Index
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.app-vue
    height 100%
    width 100%
</style>

