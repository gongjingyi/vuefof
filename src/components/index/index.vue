<template>
    <div class="content">
        <div class="cont-index" v-if="index_show>0">
            <div class="img-bg">
            </div>
            <div class="but redB white font18 button1">
                <span class="but-login">去登陆</span>
            </div>
            <div class="but redB white font18 button2">
                <span class="but-survey">开始定制</span>
            </div>        
        </div>
        <router-view></router-view>    
    </div>
</template>

<script>
export default {
  data() {
    return {
      index_show: 1
    };
  },
  created() {
    this.$nextTick(function() {
      let _this = this;
      _this.gologin(_this);
      _this.gosurvey(_this);
    });
  },
  methods: {
    gologin(thisval) {
      let _this = thisval;
      document
        .getElementsByClassName("but-login")[0]
        .addEventListener("click", function(e) {
          _this.index_show = 0;
          _this.$router.push({ path: "/login" });
        });
    },
    gosurvey(thisval) {
      let _this = thisval;
      document
        .getElementsByClassName("but-survey")[0]
        .addEventListener("click", function(e) {
          _this.index_show = 0;
          _this.$router.push({ path: "/survey" });
        });
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl';
scalval = 1.172
.content,.cont-index
    height 100%
    width 100%
    .img-bg
        height 100%
        bg-img('img/bg.png')
    .button1,.button2
        x-center()
    .button1
        bottom (15px + 42px + 15px) * scalval
    .button2
        bottom 15px * scalval
</style>

