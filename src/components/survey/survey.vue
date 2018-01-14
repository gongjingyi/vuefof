<template>
    <div class="cont-survey">
        <div class="tab-sury-item font24">
            <div class="tab-sury-title fontbold">您的收益和风险期望</div>
            <div class="tab-sury-cont">
                <div class="tab-sury-sub">
                    <span>预期收益</span><span class="fontbold orange">7.33%</span><span>,可能波动率</span><span class="fontbold green">4.55%</span>
                </div>
                <div class="tab-sury-rule">
                    <div class="tab-show-value"></div>
                    <div class="tab-rule-partnum tab-rule-partnum1">
                        <span>0</span>
                        <span>4</span>
                        <span>20</span>
                    </div>
                    <div class="tab-rule-button"></div>
                    <div class="tab-rule-sild tab-rule-sild-gray"></div>
                    <div class="tab-rule-sild tab-rule-sild-orange"></div>                    
                </div>                            
                <div class="tab-sury-area">
                    <span>低风险</span>
                    <span class="active">中低风险</span>
                    <span>中等风险</span>
                    <span>高风险</span>
                </div>
            </div>
        </div>
        <div class="tab-sury-item font24">
            <div class="tab-sury-title fontbold">您计划投入的资金(单位：万)</div>
            <div class="tab-sury-cont">
                <div class="tab-sury-sub">
                    <span>资金值：</span><span class="fontbold orange">39</span>
                </div>
                <div class="tab-sury-rule">
                    <div class="tab-show-value"></div>
                    <div class="tab-rule-partnum tab-rule-partnum2">
                        <span>0</span>
                        <span>100</span>
                        <span>500</span>
                    </div>
                    <div class="tab-rule-button"></div>
                    <div class="tab-rule-sild tab-rule-sild-gray"></div>
                    <div class="tab-rule-sild tab-rule-sild-orange"></div>                    
                </div>
            </div>
        </div>
        <div class="tab-sury-item font24">
            <div class="tab-sury-title fontbold">您投资资金的中长期资金占比(单位：%)</div>
            <div class="tab-sury-cont">
                <div class="tab-sury-sub">
                    <span>比例区间：</span><span class="fontbold orange">2</span>
                </div>
                <div class="tab-sury-part-cont">
                    <div class="tab-sury-part">
                        <span>0~29%</span>                        
                        <span class="active">30~49%</span>                        
                        <span>50~69%</span>                        
                        <span>70~89%</span>                        
                        <span>90~100%</span>                                                                                                                        
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-sury-item font24">
            <div class="tab-sury-title fontbold">您中长期投资资金的投资年限(单位：月)</div>
            <div class="tab-sury-cont">
                <div class="tab-sury-sub">
                    <span>年限值：</span><span class="fontbold orange">12</span>
                </div>
                <div class="tab-sury-rule">
                    <div class="tab-show-value"></div>
                    <div class="tab-rule-partnum tab-rule-partnum4">
                        <span>0</span>
                        <span>12</span>
                        <span>36</span>
                    </div>
                    <div class="tab-rule-button"></div>
                    <div class="tab-rule-sild tab-rule-sild-gray"></div>
                    <div class="tab-rule-sild tab-rule-sild-orange"></div>                    
                </div>
            </div>
        </div>
        <div class="tab-survey-but">
            <router-link to="/commit">完成</router-link>
        </div>
    </div>
</template>

<script>
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixin.styl';
    .cont-survey
        background #e7e7e7
        padding calc(15px * 1.172) calc(10px * 1.172)
        .tab-sury-item+.tab-sury-item
            margin-top calc(15px * 1.172)        
        .tab-sury-item
            background #ffffff
            .tab-sury-title
                height calc(40px * 1.172)
                text-align center
                line-height calc(40px * 1.172)
            .tab-sury-cont    
                border-1px-top(#dadada)
                padding calc(11px * 1.172) (10px * 1.172) (20px * 1.172) (10px * 1.172)
                .tab-sury-sub
                    line-height calc(12px * 1.172)
                .tab-sury-sub
                    margin-bottom  calc(20px * 1.172)    
                .tab-sury-rule    
                    position relative
                    .tab-rule-partnum
                        height calc(12px * 1.172)    
                        line-height calc(12px * 1.172)
                        padding 0 0 calc(37px * 1.172) 0
                        font-size 0
                        span
                            display inline-block
                            font-size calc(12px * 1.172)
                    .tab-rule-partnum1
                        span:nth-child(1)    
                            width 50%
                        span:nth-child(2)    
                            width 40%
                        span:nth-child(3)    
                            width 10%
                    .tab-rule-partnum2
                        span:nth-child(1)    
                            width 50%
                        span:nth-child(2)    
                            width 40%
                        span:nth-child(3)    
                            width 10%
                    .tab-rule-partnum4
                        span:nth-child(1)    
                            width 50%
                        span:nth-child(2)    
                            width 40%
                        span:nth-child(3)    
                            width 10%                
                    .tab-rule-button
                        position absolute
                        top calc(21px * 1.172)
                        height calc(25px * 1.172)
                        width calc(24px * 1.172)
                        bg-img('img/point.png')
                        z-index 101
                        left -2%
                    .tab-rule-sild    
                        position absolute
                        height calc(6px * 1.172)
                        top calc(31px * 1.172)                    
                    .tab-rule-sild-gray
                        background #e1e1e1
                        width 100%
                        z-index 99
                    .tab-rule-sild-orange
                        width calc(100px * 1.172)
                        background #fa6d35
                        z-index 100
                .tab-sury-part-cont
                    height 100%
                    width 100%
                    .tab-sury-part
                         height calc(29px * 1.172)
                         width calc(279px * 1.172)
                         border calc(0.5px * 1.172) solid #fa6d35
                         background #fee9e1
                         font-size 0
                         span 
                            display inline-block
                            height 100%
                            width calc(20% - calc(0.5px * 1.172))
                            line-height calc(29px * 1.172)
                            text-align center                            
                            border-right calc(0.5px * 1.172) solid #fa6d35
                            color #fa6d35
                            font-size calc(12px * 1.172)
                            &.active
                                background #fa6d35
                                color #ffffff
                            &:last-child
                                border 0
                                width 20%    






        .tab-survey-but
            margin-top calc(15px * 1.172)
            a
                height calc(35px * 1.172)
                width 100%
                line-height calc(35px * 1.172)
                color #ffffff
                font-size calc(12px * 1.172)
                background #ff632c
                text-align center
</style>        
    
