<template>
    <div class="cont-commit">
        <div class="commit-list commit-list1">
            <div class="pie-cont">
                <div id="pie-graph" class="pie-graph">

                </div>
            </div>
            <div class="pie-list">
                <ul>
                    <li><span class="icon"></span><span class="name">黄金类</span><span class="val">(12.7%)</span></li>
                    <li><span class="icon"></span><span class="name">黄金类</span><span class="val">(12.7%)</span></li>
                    <li><span class="icon"></span><span class="name">黄金类</span><span class="val">(12.7%)</span></li>
                    <li><span class="icon"></span><span class="name">黄金类</span><span class="val">(12.7%)</span></li>
                    <li><span class="icon"></span><span class="name">黄金类</span><span class="val">(12.7%)</span></li>                                                                                
                </ul>        
            </div>
            <div class="pie-table">
                <table border="" cellspacing="" cellpadding="">
                    <tr><th></th><th>本组合</th><th>你的预期</th><th>对比</th></tr>
                    <tr><td>年化收益率</td><td class="red fontBlod">X.XX%</td><td class="red fontBlod">X.XX%</td><td class="red fontBlod">X.XX%</td></tr>
                    <tr><td>年化波动率</td><td class="green fontBlod">X.XX%</td><td class="green fontBlod">X.XX%</td><td class="green fontBlod">X.XX%</td></tr>
                </table>
            </div>
            <div class="pie-conclude">
                <p>本组合年化收益率预期<span class="expectIncome red fontBlod">XX.XX%</span> , 波动率<span class="possibleLose green fontBlod">XX.XX%</span> , <span class="investMonney fontBlod">XX.XX</span>万本金投入 , 一年预期收入<span class="incomeMonney red fontBlod">XX.XX</span>万元 , 可能回撤<span class="loseMonney green fontBlod">XX</span>元。</p>
            </div>
        </div>
        <div class="commit-list commit-list2">
            <div class="line-tip">
                <div class="line-tipL">
                    <span>最近一年组合收益曲线图</span>
                </div>
                <div class="line-tipR">
                    <div class="line-tipR-name">
                        <span><span class="name">组合收益曲线</span><span class="line"></span></span>
                        <span><span class="name">大盘收益曲线</span><span class="line"></span></span>
                    </div>
                </div>
            </div>
            <div class="line-cont">
                <div id="line-graph" class="line-graph">

                </div>
            </div>
        </div>
        <div class="commit-list commit-list3">
            <div class="peizhi-cont-tip">组合资产配置明细</div>
            <div class="peizhi-tip">
                <span class="peizhi-tipL">
                    配置类型
                </span>
                <span class="peizhi-tipR">
                    购买金额
                </span>
            </div>
            <div class="peizhi-cont">
                <ul>
                    <li>
                        <span class="peizhi-contL">
                            债券
                        </span>
                        <span class="peizhi-contR">
                            <div class="peizhi-item-parent">
                                <span>33.4万元</span>
                                <span class="parent-bar"><span class="parent-radio"></span></span>
                                <span>33.33%</span>
                            </div>
                            <ul>
                                <li>
                                    <span></span>
                                    <span>
                                        <span class="child-name"></span>
                                        <span class="child-bar">
                                            <span class="child-barL"><span class="child-radio"></span></span>
                                            <span class="child-barR">44.3%</span>
                                        </span>
                                    </span>
                                    <router-link to="/detail" data-stockid="" data-stockname="" data-stockpct="" data-stockmoney="">详情</router-link>
                                </li>
                                                                <li>
                                    <span></span>
                                    <span>
                                        <span class="child-name"></span>
                                        <span class="child-bar">
                                            <span class="child-barL"><span class="child-radio"></span></span>
                                            <span class="child-barR">44.3%</span>
                                        </span>
                                    </span>
                                    <router-link to="/detail" data-stockid="" data-stockname="" data-stockpct="" data-stockmoney="">详情</router-link>
                                </li>                                
                            </ul>
                        </span>                        
                    </li>
                    <li>
                        <span class="peizhi-contL">
                            债券
                        </span>
                        <span class="peizhi-contR">
                            <div class="peizhi-item-parent">
                                <span>33.4万元</span>
                                <span class="parent-bar"><span class="parent-radio"></span></span>
                                <span>33.33%</span>
                            </div>
                            <ul>
                                <li>
                                    <span></span>
                                    <span>
                                        <span class="child-name"></span>
                                        <span class="child-bar">
                                            <span class="child-barL"><span class="child-radio"></span></span>
                                            <span class="child-barR">44.3%</span>
                                        </span>
                                    </span>
                                    <router-link to="/detail" data-stockid="" data-stockname="" data-stockpct="" data-stockmoney="">详情</router-link>
                                </li>
                                <li>
                                    <span></span>
                                    <span>
                                        <span class="child-name"></span>
                                        <span class="child-bar">
                                            <span class="child-barL"><span class="child-radio"></span></span>
                                            <span class="child-barR">44.3%</span>
                                        </span>
                                    </span>
                                    <router-link to="/detail" data-stockid="" data-stockname="" data-stockpct="" data-stockmoney="">详情</router-link>
                                </li>                                
                            </ul>
                        </span>                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/pie");
require("echarts/lib/chart/line");
export default {
  data() {
    return {
      piedata: [],
      minline: 1,
      maxline: 10
    };
  },
  created() {
    this.$nextTick(function() {
      let _this = this;
      _this.darwpie(_this);
      _this.drawline(_this);
    });
  },
  methods: {
    requstpie(thisval) {},
    darwpie() {
      let mycharts = echarts.init(document.getElementById("pie-graph"));
      mycharts.setOption({
        color: [
          "#e869ff",
          "#6f7cff",
          "#ffb361",
          "#f67744",
          "#35cefc",
          "#ff557b",
          "#66b543",
          "#fc5939"
        ],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "100%"],
            itemStyle: {
              normal: { labelLine: { show: false }, label: { show: false } }
            },
            center: ["50%", "50%"],
            data: [
              { value: "10", name: "名字1" },
              { value: "45", name: "名字2" },
              { value: "32", name: "名字3" }
            ]
          }
        ]
      });
    },
    drawline(thisval) {
      let _this = thisval;
      let mycharts = echarts.init(document.getElementById("line-graph"));
      mycharts.setOption({
        tooltip: {
          trigger: "axis",
          formatter: function(params, ticket, callback) {
            var res = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              res +=
                "<br/>" +
                params[i]["seriesName"] +
                " : " +
                parseFloat(params[i]["value"]).toFixed(2) +
                "%";
            }
            setTimeout(function() {
              // 仅为了模拟异步回调
              callback(ticket, res);
            }, 10);
            return "loading";
          }
        },
        calculable: true,
        grid: {
          borderWidth: 0,
          x: "13%",
          y: "5%",
          x2: "2%",
          y2: "22%"
        },
        xAxis: [
          {
            boundaryGap: false,
            type: "category",
            axisLine: { show: false },
            splitLine: { show: false },
            axisTick: { show: false },
            data: ["01-1", "01-2", "01-3", "01-4", "01-5", "01-6", "01-7"]
          }
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            axisTick: { show: false },
            axisLine: { show: false },
            splitNumber: 4,
            min: _this.minline,
            max: _this.maxline,
            axisLabel: {
              formatter: function(value) {
                return parseFloat(value).toFixed(1) + "%";
              }
            }
          }
        ],
        series: [
          {
            name: "组合收益曲线",
            type: "line",
            symbol: "none",
            smooth: true,
            itemStyle: {
              normal: { color: "#c00019" },
              lineStyle: { width: 1 }
            },
            data: [1.2, 3.3, 4.1, 5.5, 3.2, 4.6, 6.1]
          },
          {
            name: "大盘收益曲线",
            type: "line",
            symbol: "none",
            smooth: true,
            itemStyle: { normal: { color: "#477aac" } },
            data: [1.8, 3.4, 6.4, 5.6, 7.8, 7.7, 5.6, 9.5]
          }
        ]
      });
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixin.styl';
    scalval = 1.172
    .commit-list
        .pie-list
            padding 20px*scalval 0
            overflow hidden
            ul
                padding 0
                margin 0
                list-style none
                li
                    height 11px * scalval
                    font-size 0
                    line-height 11px * scalval
                    vertical-align middle
                    width 50%
                    float left
                    span 
                        font-size 11px * scalval
                    span+span
                        margin-left 8px*scalval
                    &>span:nth-child(1)
                        display inline-block
                        height 11px*scalval
                        width 11px*scalval
                        border-radius 6px*scalval    
                        background #ff0000
                &>li:nth-child(n+3)
                    margin-top 15px * scalval        
        .pie-table
            table 
                border 0
                width 100%
                border-collapse collapse
                border 1px * scalval solid #e5e6e8
                tr+tr
                    border-top 1px * scalval solid #e5e6e8
                tr
                    border 0
                    height 30px * scalval
                    text-align center
                    th,td
                        border 0
                        font-size 10px * scalval
                    th
                        font-weight normal
                    th+th
                        border-left 1px * scalval solid #e5e6e8
                    td+td
                        border-left 1px * scalval solid #e5e6e8
        .pie-conclude
            padding 15px*scalval 0 10px*scalval 0
            p 
                padding 0
                margin 0
                line-height 22px * scalval       
                font-size 10px * scalval
        .line-tip
            display flex
            height 40px * scalval
            padding 0 10px *scalval
            border-1px-bottom(#dcdbe1)
            .line-tipL
                width 160px * scalval
                flex 0 0 160px * scalval
                span
                    display inline-block
                    font-size 14px * scalval
                    line-height 40px * scalval                    
            .line-tipR
                flex 1
                font-size 0
                .line-tipR-name
                    width 100%
                    display flex
                    span 
                        display inline-block
                    &>span+span
                        margin-left 7px * scalval
                    &>span:nth-child(1)
                        width 60px * scalval
                        flex 0 0 60px * scalval
                    &>span:nth-child(2)
                        flex 1                                            
                    &>span
                        font-size 0
                        height 100%
                        &>span+span
                            margin-top 4px * scalval
                        span
                            font-size 9px * scalval
                            width 100%
                            text-align center
                        .name     
                            height 9px * scalval
                            margin-top 13.5px * scalval
                        .line
                            height 1.5px * scalval
                            width 100%
                            background #ff0000
        .peizhi-cont-tip
            height 40px*scalval
            font-size 14px * scalval
            line-height 40px * scalval
            padding 0 10px * scalval
            border-1px-bottom(#dcdbe1)
        .peizhi-tip    
            padding 0 10px * scalval
    .commit-list+.commit-list
        border-top 10px * scalval solid #e5e6e8
    .commit-list1
        padding 27px * scalval 10px*scalval 11px*scalval 10px*scalval
        .pie-cont
            width 100%
            .pie-graph
                width 126px * scalval
                height 126px * scalval
                margin 0 auto
    .commit-list2
        .line-cont
            width 100%
            padding 0 10px *scalval
            .line-graph
                width 100%
                height 131px * scalval
                                
</style>
