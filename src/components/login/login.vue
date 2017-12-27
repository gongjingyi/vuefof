<template>
    <div class="cont-login">
        <div class="login">
            <div class="login-title font12">请登录您的账号！</div>
            <div class="login-name">
                <div class="user-icon"><span></span></div>
                <div class="user-text"><input type="text" placeholder="请输入用户名" value="" id="username"></div>
            </div>
            <div class="login-password">
                <div class="password-icon"><span></span></div>
                <div class="password-text"><input type="password" placeholder="请输入密码" value="" id="userpassword"></div>
            </div>
            <div class="login-but">
                 <span>登录</span>   
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                imgAry: []
            };
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixin.styl';
    .cont-login
        height 100%
        width 100%
        position relative
        .login
            width calc(216px * 1.172)
            height calc(201px * 1.172)         
            bg-img('img/login_bg.png')
            x-center('50%')
            top calc(100px * 1.172)
            .login-title
                color #333333
                line-height calc(12px * 1.172)  
                margin-top calc(17px * 1.172)      
                text-align center
            .login-name,.login-password
                height calc(25px * 1.172)
                width calc(150px * 1.172)    
                pos-x(calc(33px * 1.172))
                display flex
            .login-name
                pos-y(calc(58px * 1.172))
                .user-icon
                    width calc(19.5px * 1.172)
                    height 100%
                    position absolute
                    font-size 0
                    span 
                        display inline-block
                        height calc(11px * 1.172)
                        width calc(8.5px * 1.172)
                        bg-img('img/locked.png')
                        margin-left calc(11px * 1.172)
                        margin-top calc(7px * 1.172)
                .user-text
                    width 100%
                    input 
                        height 100%
                        width calc(100% - calc(26.5px * 1.172) - 2px)
                        padding-left calc(26.5px * 1.172)   
            .login-password
                pos-y(calc(93px * 1.172)) 
                .password-icon
                    width calc(19.5px * 1.172)
                    height 100%
                    position absolute
                    font-size 0
                    span 
                        display inline-block
                        height calc(11px * 1.172)
                        width calc(8.5px * 1.172)
                        bg-img('img/user.png')
                        margin-left calc(11px * 1.172)
                        margin-top calc(7px * 1.172)
                .password-text
                    width 100%
                    input 
                        height 100%
                        width calc(100% - calc(26.5px * 1.172) - 2px)
                        padding-left calc(26.5px * 1.172)    
            .login-but
                width calc(150px * 1.172)                            
                height calc(25px * 1.172)
                x-center('50%')
                pos-y(calc(138px * 1.172))
                span 
                    display inline-block
                    height 100%
                    width 100%
                    line-height calc(25px * 1.172)   
                    text-align center
                    background #ff0038
                    border-radius calc(12.5px * 1.172)
                    color #fff
                    font-size calc(12px * 1.172)
</style>
