<template>
    <div class="content">
        <div class="cont-index" v-if="indexshow>0">
            <div class="img-bg">
            </div>
            <div class="but redB white font18 button1" @click="indexshow=0">
                <router-link to="/login">去登录</router-link>
            </div>
            <div class="but redB white font18 button2" @click="indexshow=0">
                <router-link to="/survey">开始定制</router-link>
            </div>        
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    data () {
        return {
            indexshow: 1
        };
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl';

.content,.cont-index
    height 100%
    width 100%
    .img-bg
        height 100%
        bg-img('img/bg.png')
    .button1,.button2
        x-center()
    .button1
        bottom calc(calc(15px + 42px + 15px) * 1.172)
    .button2
        bottom calc(15px * 1.172)
</style>
