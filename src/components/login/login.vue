<template>
    <div class="cont-login" v-if="loginshow>0">
        <div class="login">
            <div class="login-title font12">请登录您的账号！</div>
            <div class="login-error red" v-if="errorshow">用户名或者密码错误！</div>
            <div class="login-name">
                <div class="user-icon"><span></span></div>
                <div class="user-text"><input type="text" placeholder="请输入用户名" value="" id="username" v-model="username"></div>
            </div>
            <div class="login-password">
                <div class="password-icon"><span></span></div>
                <div class="password-text"><input type="password" placeholder="请输入密码" value="" id="password" v-model="password"></div>
            </div>
            <div class="login-but" @click="login">
                <!-- <span>登录</span> -->
                <router-link to="/survey" class="tab-login-a"><span>登录</span></router-link>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
  data() {
    return {
      imgAry: [],
      username: "",
      password: "",
      loginshow: 1,
      errorshow: 0
    };
  },
  created() {},
  methods: {
    login() {
      const url = "https://dev.gupiaoxianji.com/fof/";
      const parm = {
        id: 54321,
        jsonrpc: "2.0",
        method: "Fof.Fof_Login",
        params: { username: this.username, passwd: this.password }
      };
      this.$http.post(url, parm).then(
        response => {
          //   alert(JSON.stringify(response.body));
          if (
            response.body["result"]["status"] === 0 &&
            response.body["result"]["username"] === "admin"
          ) {
            this.loginshow = 0;
            this.errorshow = 0;
            window.location.href = "/survey";
          } else {
            this.errorshow = 1;
          }
        },
        response => {
          //   error callback
        }
      );
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixin.styl';
    scalval = 1.172    
    .cont-login
        height 100%
        width 100%
        position relative
        .login
            width 216px * scalval
            height 201px * scalval         
            bg-img('img/login_bg.png')
            x-center('50%')
            top 100px * scalval
            .login-title
                color #333333
                line-height 12px * scalval  
                margin-top 17px * scalval      
                text-align center
            .login-error
                width 100%
                text-align center
                font-size 12px * scalval
                pos-y(42px * scalval)
            .login-name,.login-password
                height 25px * scalval
                width 150px * scalval    
                pos-x(33px * scalval)
                display flex
            .login-name
                pos-y(58px * scalval)
                .user-icon
                    width 19.5px * scalval
                    height 100%
                    position absolute
                    font-size 0
                    span 
                        display inline-block
                        height 11px * scalval
                        width 8.5px * scalval
                        bg-img('img/locked.png')
                        margin-left 11px * scalval
                        margin-top 7px * scalval
                .user-text
                    width 100%
                    input 
                        height 25px * scalval - 2px
                        width 150px * scalval - 26.5px * scalval - 2px
                        padding-left 26.5px * scalval   
            .login-password
                pos-y(93px * scalval) 
                .password-icon
                    width 19.5px * scalval
                    height 100%
                    position absolute
                    font-size 0
                    span 
                        display inline-block
                        height 11px * scalval
                        width 8.5px * scalval
                        bg-img('img/user.png')
                        margin-left 11px * scalval
                        margin-top 7px * scalval
                .password-text
                    width 100%
                    input 
                        height 25px * scalval - 2px
                        width 150px * scalval - 26.5px * scalval - 2px
                        padding-left 26.5px * scalval    
            .login-but
                width 150px * scalval                            
                height 25px * scalval
                x-center('50%')
                pos-y(138px * scalval)
                span 
                    display inline-block
                    height 100%
                    width 100%
                    line-height 25px * scalval   
                    text-align center
                    background #ff0038
                    border-radius 12.5px * scalval
                    color #fff
                    font-size 12px * scalval
                a
                    height 100%
                    width 100%    
</style>