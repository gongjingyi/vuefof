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
                                    <span>22.33万元</span>
                                    <span>
                                        <span class="child-name">降低欧文司机吴qos就售价为器降低欧文司机吴qos就售价为器</span>
                                        <span class="child-bar">
                                            <span class="child-barL"><span class="child-radio"></span></span>
                                            <span class="child-barR">44.3%</span>
                                        </span>
                                    </span>
                                    <span class="detail-but-link" data-stockid="" data-stockname="" data-stockpct="" data-stockmoney="">详情</span>
                                </li>
                                <li>
                                    <span>10.22万元</span>
                                    <span>
                                        <span class="child-name">降低欧文司机吴qos就售价为器降低欧文司机吴qos就售价为器qos就售价为器qos就</span>
                                        <span class="child-bar">
                                            <span class="child-barL"><span class="child-radio"></span></span>
                                            <span class="child-barR">44.3%</span>
                                        </span>
                                    </span>
                                    <span class="detail-but-link" data-stockid="" data-stockname="" data-stockpct="" data-stockmoney="">详情</span>
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
                                        <span class="child-name">器降低欧文司机吴qos就售价为器</span>
                                        <span class="child-bar">
                                            <span class="child-barL"><span class="child-radio"></span></span>
                                            <span class="child-barR">44.3%</span>
                                        </span>
                                    </span>
                                    <span class="detail-but-link" data-stockid="" data-stockname="" data-stockpct="" data-stockmoney="">详情</span>
                                </li>
                                <li>
                                    <span></span>
                                    <span>
                                        <span class="child-name">器降低欧文司机吴qos就售价为器器降低欧文司机</span>
                                        <span class="child-bar">
                                            <span class="child-barL"><span class="child-radio"></span></span>
                                            <span class="child-barR">44.3%</span>
                                        </span>
                                    </span>
                                    <span class="detail-but-link" data-stockid="" data-stockname="" data-stockpct="" data-stockmoney="">详情</span>
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
      minline: 0,
      peizhiAry: [
        {
          stockname: "债券",
          totalMoney: 178800,
          ary: [
            {
              money: 178800,
              stockid: "000429",
              stockname: "易方达聚盈分级债券型发起式证券投资基金"
            }
          ],
          pct: 24
        },
        {
          stockname: "沪深A股",
          totalMoney: 223500,
          ary: [
            {
              money: 200000,
              stockid: "001878",
              stockname: "嘉实沪港深精选股票型证券投资基金"
            },
            {
              money: 23500,
              stockid: "001975",
              stockname: "景顺长城环保优势股票型证券投资基金"
            }
          ],
          pct: 30
        },
        {
          stockname: "货币基金",
          totalMoney: 342700,
          ary: [
            {
              money: 200000,
              stockid: "472007",
              stockname: "汇添富理财7天债券型证券投资基金"
            },
            {
              money: 142700,
              stockid: "110050",
              stockname: "易方达月月利理财债券型证券投资基金"
            }
          ],
          pct: 46
        }
      ],
      dateAry: ["01-21", "02-21", "03-21", "04-21", "05-21", "06-21", "07-21"],
      zuheAry: [1.4, 6.4, 1.4, 3.4, 7.4, 2.4, 4.4],
      lineParmName: "沪深300",
      dapanAry: [1.3, 2.3, 4.3, 2.3, 5.3, 6.3, 8.3],
      data_line: {
        date: this.dataAry,
        dataAry: [
          { id: "3232", name: "组合收益曲线", value: this.zuheAry },
          { id: "4432", name: this.lineParmName, value: this.dapanAry }
        ]
      },
      maxline: 0
    };
  },
  created() {
    this.$nextTick(function() {
      if (
        document.getElementsByClassName("cont-index") &&
        document.getElementsByClassName("cont-index")[0]
      ) {
        document.getElementsByClassName("cont-index")[0].style.display = "none";
      }
      let _this = this;
      _this.darwpie(_this);
      _this.drawline(_this);
      _this.druplink(_this);
    });
  },
  methods: {
    requstpie(thisval) {},
    druplink(thisval) {
      let linkary = document.getElementsByClassName("detail-but-link");
      for (let i = 0; i < linkary.length; i++) {
        linkary[i].addEventListener("click", function(e) {});
      }
    },
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
      if (
        _this.data_line &&
        _this.data_line.dataAry &&
        _this.data_line.dataAry.length > 0
      ) {
        if (_this.zuheAry && _this.zuheAry.length > 0) {
          let maxLine1 = _this.zuheAry[0];
          let minLine1 = _this.zuheAry[0];
          let maxLine2 = _this.dapanAry[0];
          let minLine2 = _this.dapanAry[0];
          for (let j = 0; j < _this.zuheAry.length; j++) {
            maxLine1 >= _this.zuheAry[j]
              ? (maxLine1 = maxLine1)
              : (maxLine1 = _this.zuheAry[j]);
            minLine1 <= _this.zuheAry[j]
              ? (minLine1 = minLine1)
              : (minLine1 = _this.zuheAry[j]);
          }
          for (let k = 0; k < _this.zuheAry.length; k++) {
            maxLine2 >= _this.zuheAry[k]
              ? (maxLine2 = maxLine2)
              : (maxLine2 = _this.zuheAry[k]);
            minLine2 <= _this.zuheAry[k]
              ? (minLine2 = minLine2)
              : (minLine2 = _this.zuheAry[k]);
          }
          maxLine1 >= maxLine2
            ? (_this.maxline = maxLine1)
            : (_this.maxline = maxLine2);
          minLine1 <= minLine2
            ? (_this.minline = _this.minline1)
            : (_this.minline = minLine2);
        }
      }
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
          x2: "0",
          y2: "22%"
        },
        xAxis: [
          {
            boundaryGap: false,
            type: "category",
            axisLine: { show: false },
            splitLine: { show: false },
            axisTick: { show: false },
            data: _this.dateAry
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
            data: _this.zuheAry
          },
          {
            name: _this.lineParmName,
            type: "line",
            symbol: "none",
            smooth: true,
            itemStyle: { normal: { color: "#477aac" } },
            data: _this.dapanAry
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
        .peizhi-tip
            padding 15px*scalval 10px*scalval 18px*scalval 10px*scalval
            display flex
            font-size 10px *scalval
            .peizhi-tipL
                width 53px*scalval
                flex 0 0 53px*scalval
            .peizhi-tipR
                flex 1    
        .peizhi-cont
            padding 0 10px*scalval 30px*scalval 10px*scalval
            color #333333
            &>ul
                list-style none
                padding 0
                margin 0
                &>li+li
                    margin-top 35px*scalval
                &>li
                    width 100%
                    padding 0
                    margin 0
                    display flex 
                    span 
                        display inline-block
                        font-size 0           
                    .peizhi-contL
                        width 53px*scalval
                        flex 0 0 53px*scalval
                        font-size 10px *scalval
                    .peizhi-contR
                        flex 1
                        .peizhi-item-parent
                            font-size 0
                            display flex
                            span
                                font-size 10px*scalval
                                height 14px*scalval
                                line-height 14px*scalval
                                vertical-align middle
                            &>span:nth-child(1)
                                width 57px*scalval
                                flex 0 0 57px*scalval
                            &>span:nth-child(2)
                                width 110px*scalval
                                flex 0 0 110px*scalval
                                position relative
                                background #ff0000
                            &>span:nth-child(3)
                                flex 1
                                margin-left 8px*scalval
                                color #888888
                        ul
                            list-style none
                            padding 0
                            margin 0
                            &>li+li
                                margin-top 5px *scalval
                            li
                                font-size 0
                                display flex
                                span
                                    font-size 10px *scalval
                                &>span:nth-child(1)    
                                    width 57px*scalval
                                    flex 0 0 57px*scalval
                                    font-size 7px * scalval
                                    padding-top 8px*scalval
                                &>span:nth-child(2)    
                                    width 160px*scalval
                                    flex 0 0 160px*scalval
                                    font-size 0
                                    .child-name
                                        font-size 8px * scalval
                                        line-height 13px * scalval
                                        padding 5px *scalval 0 5px*scalval 0
                                    .child-bar
                                        font-size 0
                                        width 100%
                                        .child-barL
                                            width 110px*scalval
                                            flex 0 0 110px*scalval
                                            background #00ff00
                                        .child-barR
                                            font-size 6px * scalval
                                            margin-left 8px*scalval
                                            flex 1
                                &>span:nth-child(3)    
                                    flex 1
                                    font-size 8px * scalval
                                    height 13px*scalval
                                    width 30px*scalval
                                    background #ff0000
                                    text-align center
                                    line-height 13px*scalval
                                    border-radius 7.5px*scalval
                                    color #ffffff
                                    margin-top 8px*scalval
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
            width 300px * scalval
            margin 0 auto
            .line-graph
                width 100%
                height 131px * scalval
                                
</style>
