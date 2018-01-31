<template>
    <div class="cont-detail">
        <div class="detail-list detail-list1">
            <div class="detail-list-tip first">
                <span class="stockname">汇添富理财7天债券型证券投资基金</span>
            </div>
            <div class="detail-peizhi">
                <div class="detail-peizhiL">
                    <span>组合中的比例配置</span>
                    <span>
                        <span class="radio"></span>
                        <span class="radiobar"></span>
                        <span class="radioval">54.2%</span>
                    </span>
                </div>
                <div class="detail-peizhiR">
                    <span>购买金额</span>
                    <span>99.33万元</span>
                </div>
            </div>
        </div>
        <div class="detail-list detail-list2">
            <div class="detail-list-tip">
                <span>基金推荐评价</span>
            </div>
            <div class="detail-evaluate">基金近收益 , 最大回撤 , 收益-最大回撤比 , 同类基金中排名9 , 比沪深300指数低<span class="red">14.63%</span></div>
        </div>
        <div class="detail-list detail-list3">
            <div class="detail-list-tip">
                <span><span class="netvalue-tip"><span>净值走势图</span><span>近一年收益排名3/43</span></span></span>
            </div>
            <div class="detail-netvalue">
                <div class="netvalue-data-tab">
                    <span>一个月</span>
                    <span>一季度</span>
                    <span>半年</span>
                    <span class="active">一年</span>
                </div>
                <div class="netvalue-compare">
                    <span><span class="compare-line blueB"></span><span class="compare-name">国债+企业债</span><span class="compare-radio blue">43.3%</span></span>
                    <span><span class="self-line redB"></span><span class="self-name">本基金</span><span class="self-radio red">53.3%</span></span>
                </div>
                <div class="netvalue-graph">
                    <div class="netvalue-line" id="netvalue-line">

                    </div>
                </div>
            </div>
        </div>
        <div class="detail-list detail-list4">
            <div class="detail-list-tip">
                <span>基金信息</span>
            </div>
            <div class="fund-information">
                <ul>
                    <li><span>基金类型：</span><span class="fund-type">开放式 </span></li>
                    <li><span>公司评级：</span><span class="fund-rank">AA</span></li>
                    <li><span>基金规模：</span><span class="fund-scale">16.49千万</span></li>
                    <li><span>交易费率：</span><span class="fund-rate">1.2%</span></li>
                    <li><span>成立时间：</span><span class="fund-time">2015年12月21日</span></li>
                    <li><span>公司名称：</span><span class="fund-name">国投瑞银基金</span></li>
                </ul>
            </div>
        </div>
        <div class="detail-list detail-list5">
            <div class="detail-list-tip">
                <span>基金经理</span>
            </div>
            <div class="fund-manager">
                <ul>
                    <li><span>姓名：</span><span>张磊</span></li>
                    <li><span>本基金上线时间：</span><span>5年</span></li>
                    <li><span>成立时间：</span><span>2013年11月14日</span></li>
                    <li>
                        <table>
                            <tbody>
                                <tr><th>管理中的其他基金：</th><th>近一年排名：</th></tr>
                                <tr><td>易方达岁丰添利债券(LOF)</td><td>425/1071</td></tr>
                                <tr><td>易方达岁丰添利债券(LOF)</td><td>425/1071</td></tr>                                
                            </tbody>
                        </table>
                    </li>
                </ul>
            </div>
        </div>
        <div class="detail-list detail-list6">
            <div class="detail-list-tip">
                <span>最新持股详情</span>
            </div>
            <div class="hold-stock">
                <table>
                    <tbody>
                        <tr><th>名称/代码</th><th>持仓比例</th></tr>
                        <tr><td>17中建材SCP006/011778004</td><td>4.68%</td></tr>
                        <tr><td>17中建材SCP006/011778004</td><td>4.68%</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixin.styl';
    scalval = 1.172
    .detail-list+.detail-list
        border-top 10px * scalval solid #e5e6e8
    .detail-list    
        .detail-list-tip
            height 40px * scalval
            line-height 40px * scalval
            font-size 15px * scalval
            padding 0 10px * scalval
            border-1px-bottom(#dcdbe0)
            &>span
                display inline-block
                height 100%
                width 100%
            .netvalue-tip
                &>span:nth-child(1)
                    float left 
                    font-size 15px * scalval
                    font-weight bold
                &>span:nth-child(2)
                    float right
                    font-size 12px * scalval
        .detail-list-tip.first
            text-align center
            border-1px-none();                      
            .stockname
                font-weight bold
        .detail-peizhi
            padding 0 10px * scalval 15px * scalval 10px * scalval
            display flex
            .detail-peizhiL
                width 215px * scalval
                flex 0 0 215px * scalval
                font-size 0
                &>span:nth-child(1)
                    display inline-block
                    width 100%
                    height 27px * scalval
                    line-height 27px * scalval
                    padding-bottom 6px * scalval
                    font-size 10px * scalval                    
                    color #7b7a80
                &>span:nth-child(2)
                    display inline-block
                    width 100%
                    height 12px * scalval
                    position relative
                    font-size 0
                    span 
                        display inline-block
                        position absolute
                        top 0
                    .radio
                        width 20%
                        height 100%
                        background #ff0000                        
                        z-index 10
                    .radiobar
                        width 142px * scalval
                        height 100%
                        background #dddee3        
                        z-index 9
                    .radioval
                        left 150px * scalval
                        y-center()
                        font-size 8px * scalval
                        color #333333
                        font-weight bold
            .detail-peizhiR
                flex 1
                font-size 0
                &>span:nth-child(1)
                    display inline-block
                    width 100%
                    height 27px * scalval
                    line-height 27px * scalval                    
                    padding-bottom 6px * scalval
                    font-size 10px * scalval
                    color #7b7a80
                &>span:nth-child(2)
                    display inline-block
                    width 100%
                    height 12px * scalval
                    position relative
                    line-height 12px * scalval
                    font-size 8px * scalval
                    color #333333
                    font-weight bold
        .detail-evaluate
            padding 10px * scalval 10px * scalval
            line-height 21px * scalval
        .detail-netvalue      
            padding 0 10px * scalval              
            .netvalue-data-tab
                width 300px * scalval
                margin 15px * scalval 0
                font-size 0
                height 15px * scalval
                >span
                    display inline-block
                    height 100%
                    border-right 1px * scalval solid #bfc2c7
                    font-size 8px * scalval
                    width 74px * scalval
                    line-height 15px * scalval
                    text-align center
                    border-top 1.172px solid #bfc2c7
                    border-bottom 1.172px solid #bfc2c7
                >span.active
                    background #bfc2c7
                    color #ffffff
                &>span:nth-child(1)
                    border-left 1px * scalval solid #bfc2c7
                    width 73px * scalval
        .netvalue-compare
            padding 0 0 15px * scalval 0
            span
                display inline-block
            &>span
                font-size 0
                vertical-align middle
                height 10px * scalval         
                &>span
                    margin-left 7px * scalval
                span
                    font-size 10px * scalval
                    line-height 10px * scalval
                    vertical-align middle                    
                .compare-line
                    height 2.5px * scalval
                    width 15px * scalval
                .self-line
                    height 2.5px * scalval
                    width 15px * scalval
            &>span+span
                margin-left 18px * scalval
        .netvalue-graph
            .netvalue-line
                width 100%
                height 120px * scalval
        .fund-information,.fund-manager
            padding 10px * scalval
            &>ul
                list-style none
                padding 0
                margin 0
                &>li
                    font-size 0
                    line-height 22px * scalval
                    span
                        font-size 11px * scalval
                        line-height 11px * scalval
                        vertical-align middle
                        color #333333
        .fund-manager
            table
                width 100%
                tr
                    height 11px * scalval
                    font-size 11px * scalval
                    th
                        color #333333
                        vertical-align middle
                        font-weight normal
                    td 
                        color #7a7b80   
                        vertical-align middle
        .hold-stock
            padding-bottom 15px*scalval
            table
                width 100%
                border-collapse collapse
                tbody
                    tr
                        height 41px * scalval
                        th,td
                            font-weight normal
                            text-align left
                            border-1px-bottom(#e5e6e8)
                        &>th:nth-child(1),&>td:nth-child(1)
                            padding-left 10px*scalval
                            font-size 12px * scalval
                           
</style>
