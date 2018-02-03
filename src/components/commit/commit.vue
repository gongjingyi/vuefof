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
                                    <span data-stockid="" data-stockname="" data-stockpct="" data-stockmoney="" class="detail-but-link">详情</span>
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
                                    <span data-stockid="" data-stockname="" data-stockpct="" data-stockmoney="" class="detail-but-link">详情</span>
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
                                    <span data-stockid="" data-stockname="" data-stockpct="" data-stockmoney="" class="detail-but-link">详情</span>
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
                                    <span data-stockid="" data-stockname="" data-stockpct="" data-stockmoney="" class="detail-but-link">详情</span>
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
      data_numAry:[],
      data_priAry:[],
      data_dateAry:[],
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
      dateAry: [
        20170203,
        20170206,
        20170207,
        20170208,
        20170209,
        20170210,
        20170213,
        20170214,
        20170215,
        20170216,
        20170217,
        20170220,
        20170221,
        20170222,
        20170223,
        20170224,
        20170227,
        20170228,
        20170301,
        20170302,
        20170303,
        20170306,
        20170307,
        20170308,
        20170309,
        20170310,
        20170313,
        20170314,
        20170315,
        20170316,
        20170317,
        20170320,
        20170321,
        20170322,
        20170323,
        20170324,
        20170327,
        20170328,
        20170329,
        20170330,
        20170331,
        20170405,
        20170406,
        20170407,
        20170410,
        20170411,
        20170412,
        20170413,
        20170414,
        20170417,
        20170418,
        20170419,
        20170420,
        20170421,
        20170424,
        20170425,
        20170426,
        20170427,
        20170428,
        20170502,
        20170503,
        20170504,
        20170505,
        20170508,
        20170509,
        20170510,
        20170511,
        20170512,
        20170515,
        20170516,
        20170517,
        20170518,
        20170519,
        20170522,
        20170523,
        20170524,
        20170525,
        20170526,
        20170531,
        20170601,
        20170602,
        20170605,
        20170606,
        20170607,
        20170608,
        20170609,
        20170612,
        20170613,
        20170614,
        20170615,
        20170616,
        20170619,
        20170620,
        20170621,
        20170622,
        20170623,
        20170626,
        20170627,
        20170628,
        20170629,
        20170630,
        20170703,
        20170704,
        20170705,
        20170706,
        20170707,
        20170710,
        20170711,
        20170712,
        20170713,
        20170714,
        20170717,
        20170718,
        20170719,
        20170720,
        20170721,
        20170724,
        20170725,
        20170726,
        20170727,
        20170728,
        20170731,
        20170801,
        20170802,
        20170803,
        20170804,
        20170807,
        20170808,
        20170809,
        20170810,
        20170811,
        20170814,
        20170815,
        20170816,
        20170817,
        20170818,
        20170821,
        20170822,
        20170823,
        20170824,
        20170825,
        20170828,
        20170829,
        20170830,
        20170831,
        20170901,
        20170904,
        20170905,
        20170906,
        20170907,
        20170908,
        20170912,
        20170913,
        20170914,
        20170915,
        20170918,
        20170919,
        20170920,
        20170921,
        20170922,
        20170925,
        20170926,
        20170927,
        20170928,
        20170929,
        20171009,
        20171010,
        20171011,
        20171012,
        20171013,
        20171016,
        20171017,
        20171018,
        20171019,
        20171020,
        20171023,
        20171024
      ],
      zuheAry: [
        0,
        0.4817864497234092,
        0.6400294885640756,
        0.9542052280488544,
        1.021149720443626,
        1.0721620071266758,
        1.5955432994301466,
        1.7267652602703354,
        1.7347513360594702,
        1.8045522666207958,
        1.563378742690813,
        2.0040146558723437,
        1.9771460683868591,
        2.261727601373398,
        2.2292460464580888,
        1.9504948308161074,
        1.8825753270124812,
        1.7492034698684433,
        1.819224907490491,
        1.774504322297954,
        1.847222079282651,
        2.2949456058598994,
        2.310475385817723,
        2.3620142025940316,
        2.147424983921664,
        2.327565166941148,
        2.7894684503663836,
        2.662328687869353,
        2.731317776877562,
        3.1587579684786204,
        3.1423691861190317,
        3.320519659316412,
        3.549371628487785,
        3.4362096776356044,
        3.6198925235193524,
        3.9155716409810415,
        3.4326765322861386,
        3.523217072177176,
        3.553692033215161,
        3.314986774380957,
        3.524470226288967,
        4.329193990866931,
        4.163638351542631,
        4.362527807090921,
        4.212423717703007,
        4.13976967140659,
        4.2362782119791165,
        4.198270374214652,
        4.023546773850795,
        4.008507598582223,
        3.9400759916834005,
        4.049795147523794,
        4.472916927822523,
        4.459379535872254,
        4.313825532986448,
        4.846913545353448,
        4.992920052803829,
        5.043786094933633,
        5.12807643515556,
        5.166479263082691,
        5.060680399420647,
        4.810389174975804,
        4.404288440751758,
        4.164711743258653,
        4.551674138340944,
        4.692956398970161,
        4.6583732644857045,
        4.509163070030531,
        4.687955562557633,
        5.140869999519393,
        4.892061457579144,
        4.394267054754031,
        4.544988319813537,
        4.828970115759557,
        4.617956380468891,
        4.682652991112279,
        4.783123474286621,
        4.70539003662509,
        4.660587303286978,
        4.670737495533639,
        4.637077060176531,
        4.67767807592141,
        4.750689756429316,
        5.320016628867985,
        5.76772493266664,
        5.886433872349794,
        5.472951775118329,
        5.737131662461814,
        5.572408313000099,
        5.433594985267787,
        5.507838129176501,
        6.023567889841708,
        6.000045342676996,
        6.225517656028234,
        6.1162899364964884,
        6.398083613419714,
        6.796816549158824,
        6.842975883565616,
        6.280525868846376,
        6.472523898901583,
        6.416043389053461,
        6.444713522080758,
        5.944445620841021,
        6.471480590619394,
        6.599767943749657,
        6.474423333921897,
        6.571421680408895,
        7.026883414395502,
        7.048555917230903,
        7.401107475293434,
        7.455981504105935,
        7.436141344874558,
        7.7952319885924215,
        8.673960496646682,
        8.900222722753416,
        8.542232356489453,
        8.850001360960613,
        8.660859662939767,
        8.339628643664042,
        8.401250472979216,
        8.43233765890854,
        8.810383836954362,
        8.825525320491545,
        9.006425762442927,
        8.591902088776514,
        8.722999794281572,
        9.183733020129804,
        9.56577164822361,
        9.57882877355618,
        9.216143535815347,
        8.152465346288684,
        9.10255602350829,
        9.16244339830341,
        9.342838180125824,
        9.240314881364743,
        8.893892044748352,
        9.264760812789996,
        9.377113857122698,
        9.329293656391568,
        9.285000178433789,
        9.613286523085085,
        9.8124561287253,
        9.779657698481415,
        10.00215259436159,
        10.085693953906993,
        10.249317631054545,
        10.114894972883048,
        10.163643437723824,
        9.994353411792867,
        9.943397567411981,
        9.780339521821023,
        10.333191458418156,
        10.777064443477325,
        10.81490154196052,
        10.562271125081235,
        10.974527310399406,
        10.993578926309656,
        11.542666791962786,
        11.745166505069715,
        11.42041359997641,
        10.392199542747505,
        10.309358337372831,
        10.946378716644922,
        10.667293748262608,
        11.014797755104212,
        12.272840798110241,
        12.41274684445095,
        12.14782352789452,
        12.527286698387163,
        12.745634639768921,
        12.866843732827027,
        12.929302463975079,
        13.162364816453586,
        12.629361053379817,
        13.039596024371548,
        13.320267151444632,
        13.21463885626859
      ],
      lineParmName: "沪深300",
      dapanAry: [
        0,
        0.25896329143033636,
        0.03544665565144989,
        0.5586429786152314,
        0.945167863811136,
        1.4562226817995683,
        2.133537354209447,
        2.119544158267206,
        1.700726139275166,
        2.2719861775281958,
        1.6926654877468472,
        3.17730850506035,
        3.517044755905663,
        3.7231293410895816,
        3.2347020083832723,
        3.250398284460343,
        2.429207521146659,
        2.6250022923220984,
        2.792257839318002,
        2.0985038366710063,
        1.8835085459996348,
        2.4369709510109416,
        2.659069839452455,
        2.5037655755669297,
        1.8561938750758955,
        1.8843645443920254,
        2.78216419160775,
        2.7404164366790162,
        2.9469914376085704,
        3.4779184960536336,
        2.4167925722403893,
        2.5299597208173097,
        3.027336397827396,
        2.542966140834979,
        2.897492141682134,
        3.7184629609644304,
        3.374839050753664,
        3.1302493989955105,
        2.9930518788823024,
        2.1478931605817486,
        2.721293194815755,
        4.143296746436298,
        4.445086707435775,
        4.546632488949376,
        4.180330565773627,
        4.5426081076185065,
        4.308121020220512,
        4.460521428448505,
        3.626466911515891,
        3.4314062778505905,
        2.920220682329999,
        2.418902846054971,
        2.884708637912481,
        3.0404052343945054,
        1.9844420508853489,
        2.2732107307839478,
        2.3983083569547814,
        2.443991326715178,
        2.23691104895678,
        1.8452798955729488,
        1.4455643129277052,
        1.1857390786716993,
        0.5367199086768748,
        -0.1688159607320161,
        -0.3554741379553694,
        -0.7963043933849945,
        -0.23321200645933793,
        0.6207890563459051,
        1.0314007851942364,
        1.9068790854418038,
        1.3515649894636494,
        0.9992711233133278,
        1.1697723308803587,
        1.3894042795104644,
        1.774463861902742,
        1.7736583911932335,
        3.601310069872965,
        3.4460533614536715,
        3.816094333162834,
        3.9603568122298816,
        3.626553105798469,
        3.0988776523578343,
        3.816008138880278,
        5.034325684145569,
        5.839998504380595,
        6.291528739715058,
        6.23859653356913,
        6.472747760486786,
        5.074979663350687,
        4.883360856554808,
        4.585202944289701,
        5.6226313848303455,
        5.4094848129092155,
        6.641795554116747,
        6.708230540459259,
        7.679934354434392,
        9.044597902631546,
        9.232334994495318,
        8.376553573922575,
        9.045409317774332,
        8.954043378253541,
        8.485194036556432,
        7.6020949728432985,
        8.783250893455751,
        8.786220137879353,
        8.653231276528706,
        8.560189006822828,
        9.112727052459002,
        8.753100727857221,
        9.583264613207776,
        10.059785246053332,
        8.885468395930051,
        8.996153743612378,
        10.88489636311547,
        11.398709398146046,
        10.821998314574843,
        11.263996651144081,
        10.553351541330635,
        10.132158721243023,
        10.334471563510505,
        10.62266957781417,
        11.097689241256404,
        12.063944982129993,
        11.780680847449121,
        10.799076579845357,
        10.197297821130391,
        10.768415192984705,
        10.92944989055258,
        10.894710622461524,
        10.445216355525622,
        8.407155516450437,
        9.81398887433922,
        10.126951397689332,
        10.014244942691652,
        10.604408278776578,
        10.70540420021171,
        11.190446178164848,
        11.52642554717691,
        11.63908444670836,
        11.0017579769762,
        12.818043899223674,
        14.213725500278308,
        13.97075273437245,
        13.963714525368376,
        13.60087820679512,
        13.851899735362739,
        14.300050560377265,
        14.6397868112226,
        14.413993457497277,
        13.832069105939105,
        13.71668765596521,
        14.07171298920793,
        14.210586839506224,
        13.834565767916907,
        13.874441026362284,
        14.226529809564447,
        13.898801313945652,
        14.205498404618133,
        14.068253329038672,
        14.065661556128406,
        13.473037224665374,
        13.561906502208366,
        13.5743422566311,
        13.614122404144013,
        14.029127069186643,
        15.387620295638671,
        15.615173201615008,
        15.996306485825507,
        16.301458023845083,
        16.540662019051133,
        16.316093218581607,
        16.304882017414645,
        17.229051170662512,
        16.845254780342355,
        16.714548581371403,
        16.83183224999505,
        17.68180298703612
      ],
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
      _this.requstpie(_this);
    });
  },
  methods: {
    requstpie(thisval) {},
    getCookieName(name) {
      let value = "";
      let cookieStr = document.cookie;
      if (cookieStr.indexOf(name) !== -1) {
        let splitName = name + "=";
        let valueAry = cookieStr.split(splitName);
        if (valueAry && valueAry.length > 1) {
          let splitAry = valueAry[1].split("; ");
          if (splitAry && splitAry.length > 0) {
            value = splitAry[0];
          } else {
            value = valueAry[1];
          }
        }
      }
      return value;
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
      if (_this.data_line && _this.data_line.dataAry && _this.data_line.dataAry.length > 0) {
        for (var i = 0; i < _this.data_line.dataAry.length; i++) {
          _this.data_dateAry = _this.data_line.date;
          if (_this.data_line.dataAry[i].name == "组合收益曲线") {
            _this.data_priAry = _this.data_line.dataAry[i].value;
          } else if (_this.data_line.dataAry[i].name == _this.lineParmName) {
            _this.data_numAry = _this.data_line.dataAry[i].value;
          }
        }
        if (_this.data_priAry && _this.data_priAry.length > 0) {
          var maxLine1 = _this.data_priAry[0];
          var minLine1 = _this.data_priAry[0];
          var maxLine2 = _this.data_numAry[0];
          var minLine2 = _this.data_numAry[0];
          $.each(_this.data_priAry, function(index, value) {
            maxLine1 >= value ? (maxLine1 = maxLine1) : (maxLine1 = value);
            minLine1 <= value ? (minLine1 = minLine1) : (minLine1 = value);
          });
          $.each(_this.data_numAry, function(index, value) {
            maxLine2 >= value ? (maxLine2 = maxLine2) : (maxLine2 = value);
            minLine2 <= value ? (minLine2 = minLine2) : (minLine2 = value);
          });
          maxLine1 >= maxLine2 ? (_this.maxline = maxLine1) : (_this.maxline = maxLine2);
          minLine1 <= minLine2 ? (_this.minline = _this.minline1) : (_this.minline = minLine2);
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
            data: _this.data_priAry
          },
          {
            name: _this.lineParmName,
            type: "line",
            symbol: "none",
            smooth: true,
            itemStyle: { normal: { color: "#477aac" } },
            data: _this.data_numAry
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
