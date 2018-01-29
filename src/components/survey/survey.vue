<template>
    <div class="cont-survey">
        <div class="tab-sury-item font24">
            <div class="tab-sury-title fontbold">您的收益和风险期望</div>
            <div class="tab-sury-cont">
                <div class="tab-sury-sub">
                    <span>预期收益</span><span class="fontbold orange">{{incomeval}}%</span><span>,可能波动率</span><span class="fontbold green">{{deficitValue}}%</span>
                </div>
                <div class="tab-sury-rule">
                    <div class="tab-show-value"></div>
                    <div class="tab-rule-partnum tab-rule-partnum1">
                        <span>0</span>
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
                    <span>资金值：</span><span class="fontbold orange">{{fundVal}}</span>
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
                    <span>比例区间：</span><span class="fontbold orange">{{radioVal}}</span>
                </div>
                <div class="tab-sury-part-cont">
                    <div class="tab-sury-part">
                        <span class="active">0~29%</span>                        
                        <span>30~49%</span>                        
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
                    <span>年限值：</span><span class="fontbold orange">{{timeVal}}</span>
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
          <span class="tab-survey-but-a">完成</span>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      scalval: 1.172,
      leftval0: 0,
      slideTotalWidth: 0,
      incomeval: 0,
      deficitValue: 0,
      fundVal: 0,
      radioVal: 0,
      timeVal: 0,
      timechose: 0,
      widthorg: 0
    };
  },
  computed: {
    // incomeval: function() {
    //   return parseFloat(this.leftval0 + 8 * this.scalval).toFixed(2);
    // }
  },
  created() {
    this.$nextTick(function() {
      let _this = this;
      _this.slideTotalWidth = document.getElementsByClassName(
        "tab-rule-sild"
      )[0].clientWidth;
      _this.leftval0 = -8 * _this.scalval;
      _this.slidel0(_this);
      _this.slidel1(_this);
      _this.slidel2(_this);
      _this.slidel3(_this);
      _this.commit_sury(_this);
    });
  },
  methods: {
    slidel0: function(thisval) {
      let _this = thisval;
      const slideLogoEle0 = document.getElementsByClassName(
        "tab-rule-button"
      )[0];
      const slidorange = document.getElementsByClassName(
        "tab-rule-sild-orange"
      )[0];
      slideLogoEle0.addEventListener("touchmove", function(e) {
        let clientX = e.touches[0].clientX;
        let offsetX = clientX - 20 * _this.scalval + _this.leftval0;
        if (offsetX <= _this.leftval0) {
          slideLogoEle0.style.left = _this.leftval0 + "px";
          slidorange.style.width = 0 + "px";
          _this.incomeval = 0;
        } else if (
          offsetX > _this.leftval0 &&
          offsetX < _this.slideTotalWidth + _this.leftval0
        ) {
          slideLogoEle0.style.left = offsetX + "px";
          slidorange.style.width = offsetX - _this.leftval0 + "px";
          _this.incomeval = (
            parseFloat((offsetX - _this.leftval0) / _this.slideTotalWidth) * 20
          ).toFixed(2);
        } else {
          slideLogoEle0.style.left = _this.slideTotalWidth + _this.leftval0;
          slidorange.style.width = _this.slideTotalWidth;
          _this.incomeval = 20;
        }
        _this.return_rate(_this.incomeval, _this);
      });
    },
    slidel1: function(thisval) {
      let _this = thisval;
      const slideLogoEle1 = document.getElementsByClassName(
        "tab-rule-button"
      )[1];
      const slidorange1 = document.getElementsByClassName(
        "tab-rule-sild-orange"
      )[1];
      slideLogoEle1.addEventListener("touchmove", function(e) {
        let clientX = e.touches[0].clientX;
        let offsetX = clientX - 20 * _this.scalval + _this.leftval0;
        if (offsetX <= _this.leftval0) {
          slideLogoEle1.style.left = _this.leftval0 + "px";
          slidorange1.style.width = 0 + "px";
          _this.fundVal = 0;
        } else if (
          offsetX > _this.leftval0 &&
          offsetX <= _this.slideTotalWidth / 2 + _this.leftval0
        ) {
          slideLogoEle1.style.left = offsetX + "px";
          slidorange1.style.width = offsetX - _this.leftval0 + "px";
          _this.fundVal = (
            parseFloat((offsetX - _this.leftval0) * 2 / _this.slideTotalWidth) *
            100
          ).toFixed(2);
        } else if (
          offsetX > _this.slideTotalWidth / 2 + _this.leftval0 &&
          offsetX < _this.slideTotalWidth + _this.leftval0
        ) {
          slideLogoEle1.style.left = offsetX + "px";
          slidorange1.style.width = offsetX - _this.leftval0 + "px";
          _this.fundVal = (
            parseFloat(
              (offsetX - _this.leftval0 - _this.slideTotalWidth / 2) *
                2 /
                _this.slideTotalWidth
            ) *
              (500 - 100) +
            100
          ).toFixed(2);
        } else {
          slideLogoEle1.style.left = _this.slideTotalWidth + _this.leftval0;
          slidorange1.style.width = _this.slideTotalWidth;
          _this.fundVal = 500;
        }
      });
    },
    slidel2: function(thisval) {
      let _this = thisval;
      let spanary = document
        .getElementsByClassName("tab-sury-part")[0]
        .getElementsByTagName("span");
      for (let i = 0; i < spanary.length; i++) {
        spanary[i].onclick = function() {
          for (let j = 0; j < spanary.length; j++) {
            spanary[j].setAttribute("class", "");
          }
          this.setAttribute("class", "active");
          _this.radioVal = i;
        };
      }
    },
    slidel3: function(thisval) {
      let _this = thisval;
      const slideLogoEle3 = document.getElementsByClassName(
        "tab-rule-button"
      )[2];
      const slidorange2 = document.getElementsByClassName(
        "tab-rule-sild-orange"
      )[2];
      slideLogoEle3.addEventListener("touchmove", function(e) {
        let clientX = e.touches[0].clientX;
        let offsetX = clientX - 20 * _this.scalval + _this.leftval0;
        if (offsetX <= _this.leftval0) {
          slideLogoEle3.style.left = _this.leftval0 + "px";
          slidorange2.style.width = 0 + "px";
          _this.timeVal = 0;
        } else if (
          offsetX > _this.leftval0 &&
          offsetX <= _this.slideTotalWidth / 2 + _this.leftval0
        ) {
          slideLogoEle3.style.left = offsetX + "px";
          slidorange2.style.width = offsetX - _this.leftval0 + "px";
          _this.timeVal = parseInt(
            parseFloat((offsetX - _this.leftval0) * 2 / _this.slideTotalWidth) *
              12
          );
        } else if (
          offsetX > _this.slideTotalWidth / 2 + _this.leftval0 &&
          offsetX < _this.slideTotalWidth + _this.leftval0
        ) {
          slideLogoEle3.style.left = offsetX + "px";
          slidorange2.style.width = offsetX - _this.leftval0 + "px";
          _this.timeVal = parseInt(
            parseFloat(
              (offsetX - _this.leftval0 - _this.slideTotalWidth / 2) *
                2 /
                _this.slideTotalWidth
            ) *
              (36 - 12) +
              12
          );
        } else {
          slideLogoEle3.style.left = _this.slideTotalWidth + _this.leftval0;
          slidorange2.style.width = _this.slideTotalWidth;
          _this.timeVal = 36;
        }
        if (_this.timeVal <= 6) {
          _this.timechose = 0;
        } else if (_this.timeVal > 6 && _this.timeVal <= 12) {
          _this.timechose = 1;
        } else if (_this.timeVal > 12 && _this.timeVal <= 24) {
          _this.timechose = 2;
        } else {
          _this.timechose = 3;
        }
      });
    },
    return_rate: function(incomeRate, thisval) {
      let _this = thisval;
      var returnVal = 0;
      if (incomeRate > 4) {
        returnVal =
          -0.008475 * incomeRate * incomeRate + 0.6425 * incomeRate - 1.195;
      } else {
        returnVal = 0;
      }
      _this.deficitValue = parseFloat(returnVal.toFixed(5)).toFixed(2);
    },
    commit_sury: function(thisval) {
      let _this = thisval;
      document
        .getElementsByClassName("tab-survey-but-a")[0]
        .addEventListener("click", function(e) {
          if (_this.incomeval > 0 && _this.fundVal > 0 && _this.timeVal > 0) {
            document.cookie = "shouyi=" + _this.incomeval;
            document.cookie = "kuisun=" + _this.deficitValue;
            document.cookie =
              "total_amount=" + parseInt(parseFloat(_this.fundVal) * 10000);
            document.cookie =
              "surveyStr=" + _this.radioVal + "_" + _this.timechose;
            _this.$router.push({ path: "/commit" });
          } else {
            alert("请将表单填写完整！");
          }
        });
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixin.styl';
    scalval = 1.172
    .cont-survey
        background #e7e7e7
        padding 15px * scalval 10px * scalval
        .tab-sury-item+.tab-sury-item
            margin-top 15px * scalval
        .tab-sury-item
            background #ffffff
            .tab-sury-title
                height 40px * scalval
                text-align center
                line-height 40px * scalval
            .tab-sury-cont    
                border-1px-top(#dadada)
                padding 11px * scalval 10px * scalval 20px * scalval 10px * scalval
                .tab-sury-sub
                    line-height 12px * scalval
                .tab-sury-sub
                    margin-bottom  20px * scalval    
                .tab-sury-rule    
                    position relative
                    .tab-rule-partnum
                        height 12px * scalval    
                        line-height 12px * scalval
                        padding 0 0 37px * scalval 0
                        font-size 0
                        span
                            display inline-block
                            font-size 12px * scalval
                    .tab-rule-partnum1
                        span:nth-child(1)    
                            width 95%
                        span:nth-child(3)    
                            width 5%
                    .tab-rule-partnum2
                        span:nth-child(1)    
                            width 50%
                        span:nth-child(2)    
                            width 42%
                        span:nth-child(3)    
                            width 8%
                    .tab-rule-partnum4
                        span:nth-child(1)    
                            width 50%
                        span:nth-child(2)    
                            width 44%
                        span:nth-child(3)    
                            width 6%                
                    .tab-rule-button
                        position absolute
                        top 21px * scalval
                        height 25px * scalval
                        width 24px * scalval
                        bg-img('img/point.png')
                        z-index 101
                        left -8px * scalval
                    .tab-rule-sild    
                        position absolute
                        height 6px * scalval
                        top 31px * scalval                    
                    .tab-rule-sild-gray
                        background #e1e1e1
                        width 100%
                        z-index 99
                    .tab-rule-sild-orange
                        width 0px
                        background #fa6d35
                        z-index 100
                .tab-sury-part-cont
                    height 100%
                    width 100%
                    .tab-sury-part
                         height 29px * scalval
                         width 279px * scalval
                         border 0.5px * scalval solid #fa6d35
                         background #fee9e1
                         font-size 0
                         span 
                            display inline-block
                            height 100%
                            width 20% - 0.5px * scalval
                            line-height 29px * scalval
                            text-align center                            
                            border-right 0.5px * scalval solid #fa6d35
                            color #fa6d35
                            font-size 12px * scalval
                            &.active
                                background #fa6d35
                                color #ffffff
                            &:last-child
                                border 0
                                width 20%
        .tab-survey-but
            margin-top 15px * scalval
            .tab-survey-but-a
                display inline-block
                height 35px * scalval
                width 100%
                line-height 35px * scalval
                color #ffffff
                font-size 12px * scalval
                background #ff632c
                text-align center
</style>        
  