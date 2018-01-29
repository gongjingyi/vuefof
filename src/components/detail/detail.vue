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
                <span>净值走势图</span>
            </div>
        </div>
        <div class="detail-list detail-list4">
            <div class="detail-list-tip">
                <span>基金信息</span>
            </div>
        </div>
        <div class="detail-list detail-list5">
            <div class="detail-list-tip">
                <span>基金经理</span>
            </div>
        </div>
        <div class="detail-list detail-list6">
            <div class="detail-list-tip">
                <span>最新持股详情</span>
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
        .detail-list-tip.first
            text-align center                       
            .stockname
                font-weight bold
</style>
