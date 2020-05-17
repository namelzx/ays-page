<template>
  <!-- 填写质保卡信息  -->
  <div class="quality">
    <div @click="toggleRetun" class="top_title">
        <Toptitle :title="title" />
    </div>
    <div class="QualityBox">
      <!-- 产品信息 -->
      <div class="Qu-product">
        <div class="product-title">
          <div class="title-heng"></div>
          <div class="title-name">产品信息</div>
        </div>
        <div class="product-select">
          <!-- 产品  -->
          <div class="select-pr">
            <div class="prBox">
              <div class="title">产品</div>
              <div class="names" @click="guanbipr">
                <div class="names-character">
                  <span>{{brand}}</span>
                  <span>{{suit}}</span>
                  <span>{{series}}</span>
                </div>
                <div class="names-img">
                  <img src="@/assets/you.png" />
                </div>
              </div>
            </div>
          </div>
          <!-- 购买日期  -->
          <div class="select-day">
            <div class="dayBox">
              <div class="title">购买日期</div>
              <input v-model="day" placeholder="如：2019-9-15" />
            </div>
          </div>
          <div class="select-day">
            <div class="dayBox">
              <div class="title">质保编码：</div>
              <input v-model="code" placeholder="123456" />
            </div>
          </div>
          <div class="select-day">
            <div class="dayBox">
              <div class="title">质保期：</div>
              <input v-model="codeday" placeholder="365天" />
            </div>
          </div>
          <!-- 质保编码  -->
          <!-- <div class="select-coding">
            <div class="codingBox">
              <div class="codingBox-s">
                <span>质保编码：</span>
                <span class="s-nums">123456786*</span>
              </div>
              <div class="codingBox-x">
                <span>质保期：</span>
                <span class="x-nums">365天</span>
              </div>
            </div>
          </div> -->
        </div>
      </div>

      <!-- 背景 -->
      <div class="qu-heng"></div>

      <!-- 请填写车主信息  -->
      <div class="Qu-car">
        <div class="car-title">
          <div class="title-heng"></div>
          <div class="title-name">请填写车主信息</div>
        </div>
        <div class="car-select">
          <!-- 车型  -->
          <div class="select-pr">
            <div class="prBox">
              <div class="title">车型</div>
              <div class="names" @click="toggleShow">
                <!-- <div class="names-character">本田飞度2018款1.5LCVT舒适天窗版</div> -->
                <div class="names-character">{{carbrand}}{{carsuit}}{{carseries}}</div>
                <div class="names-img">
                  <img src="@/assets/you.png" />
                </div>
              </div>
            </div>
          </div>
          <!--  车牌 -->
          <div class="select-plate">
            <div class="plate-left">
              <div class="title">车牌</div>
              <div class="province" @click="btnProvince">
                <div class="province-xz">{{provincial}}</div>
                <div class="province-img">
                  <img src="../../assets/you.png" />
                </div>
              </div>
            </div>
            <div class="plate-right">
              <input v-model="plate_numer" placeholder="请输入车牌号码：A·00000" />
            </div>
          </div>
          <!-- 姓名  -->
          <div class="select-day">
            <div class="dayBox">
              <div class="title">姓名</div>
              <input v-model="user" placeholder="输入您的姓名" />
            </div>
          </div>
          <!-- 电话  -->
          <div class="select-day">
            <div class="dayBox">
              <div class="title">电话</div>
              <input v-model="phone" 
              pattern="[0-9]*"
              type="number"
              oninput="if(value.length>6)value=value.slice(0,12)" placeholder="输入您联系电话" />
            </div>
          </div>
          <!-- 地址  -->
          <div class="select-pr">
            <div class="prBox active">
              <div class="title">地址</div>
              <div class="names" @click="showPopup()">
                <div class="names-character">
                  <span>{{province}}</span>
                  <span>{{city}}</span>
                  <span>{{district}}</span>
                </div>
                <div class="names-img">
                  <img src="@/assets/you.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="qu-heng"></div>


      <!-- 请填写门店信息  -->
      <div class="Qu-car">
        <div class="car-title">
          <div class="title-heng"></div>
          <div class="title-name">请填写门店信息</div>
        </div>
        <div class="car-select">
          <!-- 店名  -->
          <div class="select-day">
            <div class="dayBox">
              <div class="title">店名</div>
              <input v-model="shop_user" placeholder="输入门店名称" />
            </div>
          </div>
          <!-- 电话  -->
          <div class="select-day">
            <div class="dayBox">
              <div class="title">电话</div>
              <input v-model="shop_phone" pattern="[0-9]*"
              type="number"
              oninput="if(value.length>6)value=value.slice(0,12)" placeholder="输入门店联系电话" />
            </div>
          </div>
          <!-- 地址  -->
          <div class="select-pr">
            <div class="prBox active">
              <div class="title">地址</div>
              <div class="names" @click="showPopup1">
                <div class="names-character">
                  <span>{{province1}}</span>
                  <span>{{city1}}</span>
                  <span>{{district1}}</span>
                </div>
                <div class="names-img">
                  <img src="@/assets/you.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="qu-heng"></div>

      <!-- 取消 确认添加  -->
      <div class="Qu-Btn">
        <span class="btn-cancel" @click="tolast">取消</span>
        <span class="btn-okadd" @click="toqusucee">确认添加</span>
      </div>
    </div>

    <!--  弹出产品选择  -->
    <div class="pull-pr" v-if="guanbiprs" @touchmove.prevent>
      <div class="prBox">
        <div class="title">
          <div class="ti-headline">
            <span>选择产品</span>
            <img @click="closepr" src="@/assets/close.png" />
          </div>
          <div class="ti-names">
            <span @click="brandBnt">{{brand}}</span>
            <span @click="suitBtn">{{suit}}</span>
            <span>{{series}}</span>
          </div>
        </div>

        <!-- 产品列表  -->
        <div class="prlist" v-if="subscript===1">
          <div
            :class="['prlist-name',{'prlist-arcit':brand===item.name}]"
            v-for="(item,index) in prlist"
            :key="index"
            @click="Control(item.name)"
          >{{item.name}}</div>
        </div>

        <div class="prlist" v-if="subscript===2">
          <div
            :class="['prlist-name',{'prlist-arcit':suit===item.name}]"
            v-for="(item,index) in prlist2"
            :key="index"
            @click="Controler(item.name)"
          >{{item.name}}</div>
        </div>

        <div class="prlist" v-if="subscript===3">
          <div
            :class="['prlist-name',{'prlist-arcit':series===item.name}]"
            v-for="(item,index) in prlist3"
            :key="index"
            @click="Controlsan(item.name)"
          >{{item.name}}</div>
        </div>
      </div>
    </div>

    <!--  弹出选择车型  -->

    <!-- <div class="pull-pr" v-if="opneCars">
            <div class="prBox">
                <div class="title">
                    <div class="ti-headline">
                        <span>选择车型</span>
                        <img @click="closecar" src="../../assets/close.png" />
                    </div>
                    <div class="ti-names">
                        <span @click="carbrandBnt">{{carbrand}}</span>
                        <span @click="carsuitBtn">{{carsuit}}</span>
                        <span>{{carseries}}</span>
                    </div>
                </div>



                <div class="prlist" v-if="carsubscript===1">
                    <div :class="['prlist-name',{'prlist-arcit':carbrand===item.name}]" v-for="(item,index) in carlist" :key="index" @click="Controlcar(item.name)">{{item.name}}</div>
                </div>
                
                <div class="prlist" v-if="carsubscript===2">
                    <div :class="['prlist-name',{'prlist-arcit':carsuit===item.name}]" v-for="(item,index) in carlist2" :key="index" @click="Controlercar(item.name)">{{item.name}}</div>
                </div>

                <div class="prlist" v-if="carsubscript===3">
                    <div :class="['prlist-name',{'prlist-arcit':carseries===item.name}]" v-for="(item,index) in carlist3" :key="index" @click="Controlsancar(item.name)">{{item.name}}</div>
                </div>

            </div>
    </div>-->

    <div class="pull-car" v-if="opneCars" @touchmove.prevent>
      <div class="prBox">
        <div class="title">
          <div class="ti-headline">
            <span>选择车型</span>
            <img @click="toggleShow" src="../../assets/close.png" />
          </div>
          <div class="ti-names">
            <span @click="carbrandBnt">
              {{carbrand}}
              <span v-if="carsuit!==''">></span>
            </span>
            <span @click="carsuitBtn" v-if="carbrand!=='品牌'">
              {{carsuit}}
              <span v-if="carseries!==''">></span>
            </span>
            <span v-if="carsuit!=='车系'">{{carseries}}</span>
          </div>
        </div>

        <!-- 字母列表  -->
        <div class="letter" v-if="carsubscript===1">
          <div
            v-for="(item,index) in letters"
            :key="index"
            :ref="index"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="hendletterClick(item)"
          ><div class="letters-name">{{item}}</div></div>
        </div>

        <div class="prlist wrappers" v-if="carsubscript===1" ref="wrappers">
          <div>
            <div  class="aaa" v-for="(item,index) in cities" :key="index" :ref="item.title">
              <div class="prlist-title">
                <span class="titles">{{item.title}}</span>
              </div>
              <div
                :class="['prlist-name',{'prlist-arcit':carbrand===items.name}]"
                v-for="(items,index) in item.list"
                :key="index"
                @click="Controlcar(items.name)"
              >{{items.name}}</div>
            </div>
          </div>
        </div>

        <div class="prlist wrappers" v-if="carsubscript===2" ref="wrappers">
          <div>
            <div
              :class="['prlist-name',{'prlist-arcit':carsuit===item.name}]"
              v-for="(item,index) in carlist2"
              :key="index"
              @click="Controlercar(item.name)"
            >{{item.name}}</div>
          </div>
        </div>

        <div class="prlist wrappers" v-if="carsubscript===3" ref="wrappers">
          <div>
            <div
              :class="['prlist-name',{'prlist-arcit':carseries===item.name}]"
              v-for="(item,index) in carlist3"
              :key="index"
              @click="Controlsancar(item.name,item)"
            >{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹出省份选择  -->
    <div class="pull-province" v-if="sfShow">
      <div class="provinceBox">
        <div class="prHe">
          <div class="prHe-title">
            <div class="title-name">请选择省份</div>
            <img @click="coloseProvince" src="../../assets/close2.png" />
          </div>
          <div class="prHefor">
            <div
              class="prHefor-name"
              v-for="(item,index) in abbreviation"
              :key="index"
              @click="Province(item.name)"
            >{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>




    <!-- 选择车主信息地址  -->
    <div>
      <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
        <van-area
          ref="area"
          value="440000"
          :area-list="areaList"
          title="请选择区域"
          :item-height="100"
          :visible-item-count="3"
          @change="onChange"
          @confirm="show = false"
          cancel-button-text=" "
        />
      </van-popup>
    </div>

    <!-- 选择门店信息地址  -->
    <div>
      <van-popup v-model="show1" position="bottom" :style="{ height: '40%' }">
        <van-area
          ref="area"
          value="440000"
          :area-list="areaList"
          title="请选择区域"
          :item-height="100"
          :visible-item-count="3"
          @change="onChange1"
          @confirm="show1 = false"
          cancel-button-text=" "
        />
      </van-popup>
    </div>

    <Address  v-if="showAddress" :areaJson="areaJson" @toggleAddress="toggleAddress"></Address>

    <!-- 车型 -->
    <div class="pull-car" v-if="opneCars">
      <div class="prBox" ref="heightBox">
        <div class="backward-btn" v-if="carsubscript===2">
          <van-icon name="arrow-left" @click="clickToBack(1)" />
        </div>
        <div class="backward-btn" v-if="carsubscript===3">
          <van-icon name="arrow-left" @click="clickToBack(2)" />
        </div>
        <div class="stick" v-if="isScroll && carsubscript===1">{{alphabet}}</div>
        <!-- 字母列表  -->
        <div class="letter" v-if="carsubscript===1" ref="letterHeight">
          <div
                  v-for="(item,index) in letters"
                  :key="index"
                  :ref="index"
                  @touchstart="handleTouchStart"
                  @touchmove.stop.prevent="handleTouchMove"
                  @touchend="handleTouchEnd"
                  @click="hendletterClick(item)"
          >
            <div class="letters-name" ref="zimu">{{item}}</div>
          </div>
        </div>
        <div class="prlist wrappers" v-if="carsubscript===1" ref="wrappers">
          <div>
            <div class="aaa" v-for="(item,index) in cities" :key="index" :ref="item.title">
              <div class="prlist-title">
                <span class="titles">{{item.title}}</span>
              </div>
              <div
                      :class="['prlist-name',{'prlist-arcit':carbrand===items.name}]"
                      v-for="(items,index) in item.list"
                      :key="index"
                      @click="Controlcar(items)"
              >{{items.name}}</div>
            </div>
          </div>
        </div>
        <div class="prlist wrappers2 wrappers" v-if="carsubscript===2" ref="wrappers">
          <div>
            <div
                    :class="['prlist-name',{'prlist-arcit':carsuit===item.series_name}]"
                    v-for="(item,index) in carlist2"
                    :key="index"
                    @click="Controlercar(item)"
            >{{item.series_name}}</div>
          </div>
        </div>
        <div class="prlist wrappers2 wrappers" v-if="carsubscript===3" ref="wrappers">
          <div>
            <div
                    :class="['prlist-name',{'prlist-arcit':carseries===item.model_name}]"
                    v-for="(item,index) in carlist3"
                    :key="index"
                    @click="Controlsancar(item)"
            >{{item.model_name}}</div>
          </div>
        </div>
        <div class="close-btn" @click="toggleShow">
          <van-icon name="close" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import { Citylist } from "@/api/city";

    import BScroll from "better-scroll";
import areaList from "../../assets/js/area.js";
import Toptitle from "@/components/Toptitle/Toptitle";
import Address from "@/components/address/index";
    import { Getcar, GetIdByModel, GetIdBySeries } from "@/api/car";

export default {
  name: "Qualityfill",
  data() {
    return {
        isScroll: false, //显示固定元素

        postData:{},
        showAddress:false,
        areaJson:[],
        showAddress: false,
        opneCars: true,
        itemCount: 3,
        itemHeight: 80,
        cities: [],
        carlist2: [],
        carlist3: [],
        carsubscript: 1,
        carbrand: "品牌", //车型品牌
        carsuit: "", // 车型型号
        carseries: "", //车型版本
      title:'填写质保卡信息',
      day: "", //购买日期
      code:'', //质保编码
      codeday:'',  //质保日期
      user: "", //车主姓名
      phone: "", //联系电话
      shop_user: "", //门店店名
      shop_phone: "", //门店电话
      provincial: "省份", //省份
      plate_numer: "", //车牌号码
      brand: "请选择", //产品品牌
      suit: "", //产品套装
      series: "", //产品系列
      subscript: 1, //列表下标
      guanbiprs: false, //产品弹框
      carbrand: "品牌", //车型品牌
      carsuit: "", // 车型型号
      carseries: "", //车型版本
      carsubscript: 1, //列表下标
      sfShow: false, //省份弹窗
      show: false,
      show1: false,
      prlist: [
          {
              id: 1,
              name: "阿帕"
          },
        {
          id: 2,
          name: "飞利浦"
        },
        {
          id: 3,
          name: "金刚"
        },
        {
          id: 4,
          name: "欧司朗"
        },
        {
          id: 5,
          name: "海拉"
        },
        {
          id: 6,
          name: "GS"
        },
        {
          id: 7,
          name: "AES"
        }
      ],
      prlist2: [
        {
          id: 1,
          name: "氙气灯套装"
        },
        {
          id: 2,
          name: "LED套装"
        },
        {
          id: 3,
          name: "雾灯套装"
        },
        {
          id: 4,
          name: "大灯总成"
        },
        {
          id: 5,
          name: "双光透镜"
        },
        {
          id: 6,
          name: "氙气灯"
        },
        {
          id: 7,
          name: "安定器"
        },
        {
          id: 8,
          name: "LED头灯"
        }
      ],
      prlist3: [
        {
          id: 1,
          name: "飞利浦黑暗战士"
        },
        {
          id: 2,
          name: "征服者"
        },
        {
          id: 3,
          name: "征服者S"
        },
        {
          id: 4,
          name: "捍卫者"
        },
        {
          id: 5,
          name: "守护者"
        }
      ],
      carlist: [
        {
          id: 1,
          name: "大众"
        },
        {
          id: 2,
          name: "丰田"
        },
        {
          id: 3,
          name: "福特"
        },
        {
          id: 4,
          name: "本田"
        },
        {
          id: 5,
          name: "现代"
        },
        {
          id: 6,
          name: "标志"
        },
        {
          id: 7,
          name: "吉利"
        },
        {
          id: 8,
          name: "宝马"
        },
        {
          id: 9,
          name: "奇瑞"
        }
      ],
      carlist2: [
        {
          id: 1,
          name: "本田SVT"
        },
        {
          id: 2,
          name: "艾力绅"
        },
        {
          id: 3,
          name: "冠道"
        },
        {
          id: 4,
          name: "飞度"
        },
        {
          id: 5,
          name: "哥瑞"
        },
        {
          id: 6,
          name: "本田HR-V"
        },
        {
          id: 7,
          name: "锋范"
        },
        {
          id: 8,
          name: "雅阁"
        },
        {
          id: 9,
          name: "奥德赛"
        }
      ],
      carlist3: [
        {
          id: 1,
          name: "2018款 1.5L CVT舒适天窗版"
        },
        {
          id: 2,
          name: "2018款 1.5L CVT潮跑版"
        },
        {
          id: 3,
          name: "2018款 2.0L CVT潮跑版"
        }
      ],
      abbreviation: [
        { id: "1", name: "京" },
        { id: "2", name: "津" },
        { id: "3", name: "沪" },
        { id: "4", name: "渝" },
        { id: "5", name: "豫" },
        { id: "6", name: "冀" },
        { id: "7", name: "云" },
        { id: "8", name: "辽" },
        { id: "9", name: "黑" },
        { id: "10", name: "湘" },
        { id: "11", name: "鲁" },
        { id: "12", name: "皖" },
        { id: "13", name: "新" },
        { id: "14", name: "苏" },
        { id: "15", name: "浙" },
        { id: "16", name: "赣" },
        { id: "17", name: "桂" },
        { id: "18", name: "鄂" },
        { id: "19", name: "晋" },
        { id: "20", name: "蒙" },
        { id: "21", name: "陕" },
        { id: "22", name: "闽" },
        { id: "23", name: "吉" },
        { id: "24", name: "粤" },
        { id: "25", name: "青" },
        { id: "26", name: "藏" },
        { id: "27", name: "宁" },
        { id: "28", name: "琼" },
        { id: "29", name: "港" },
        { id: "30", name: "澳" },
        { id: "31", name: "台" },
        { id: "32", name: "贵" },
        { id: "33", name: "川" }
      ],
      areaList,
      province: "请选择", //车主省份
      city: "请选择", //车主城市
      district: "请选择", //车主城区
      province1: "请选择", //门店省份
      city1: "请选择", //门店城市
      district1: "请选择", //门店城区
      cities: [
        {
          id: "1",
          title: "A",
          list: [{ id: "1", name: "奥迪" }, { id: "2", name: "阿尔特" }]
        },
        {
          id: "2",
          title: "B",
          list: [
            { id: "1", name: "本田" },
            { id: "2", name: "比亚迪" },
            { id: "3", name: "标志" },
            { id: "4", name: "别克" },
            { id: "5", name: "宝马" },
            { id: "6", name: "奔驰" }
          ]
        },
        {
          id: "3",
          title: "C",
          list: [{ id: "1", name: "长城" }, { id: "2", name: "长安" }]
        },
        {
          id: "4",
          title: "D",
          list: [
            { id: "1", name: "东方" },
            { id: "2", name: "大众" },
            { id: "3", name: "道奇" }
          ]
        },
        {
          id: "5",
          title: "E",
          list: [
            { id: "1", name: "东方" },
            { id: "2", name: "大众" },
            { id: "3", name: "道奇" }
          ]
        },
        {
          id: "6",
          title: "F",
          list: [
            { id: "1", name: "东方" },
            { id: "2", name: "大众" },
            { id: "3", name: "道奇" }
          ]
        }
      ],
      letter: "",
      touchStatus: false,
      package:[]
    };
  },

  computed:{
    letters(){
      const  letters = []
      for (let i = 0; i < this.cities.length; i++) {
        const element = this.cities[i].title;
        letters.push(element)
      }
      return letters
    }
  },
  components: {
      Toptitle,
      Address
  },
    created() {
        Citylist(1).then(res => {
            this.areaJson = res.data;
        });
        Getcar().then(res => {
            this.cities = res.data;
            // console.log(res.data);
        });
    },
    methods: {
        // 挂载ref节点
        setRef() {
            let _this = this;
            const options = {
                scrollY: true,
                scrollX: false,
                mouseWheel: true,
                click: true,
                taps: true,
                stopPropagation: true,
                probeType: 3 // 开启滚动监听
            };
            setTimeout(() => {
                let wrappers = document.querySelector(".wrappers");
                _this.scroll = new BScroll(wrappers, options);

                //监听内容滑动
                _this.scroll.on("scroll", pos => {
                    const A =
                        this.$refs["A"][0].offsetHeight + this.$refs["A"][0].offsetTop - 10;
                    const B =
                        this.$refs["B"][0].offsetHeight + this.$refs["B"][0].offsetTop - 10;
                    const C =
                        this.$refs["C"][0].offsetHeight + this.$refs["C"][0].offsetTop - 10;
                    const D =
                        this.$refs["D"][0].offsetHeight + this.$refs["D"][0].offsetTop - 10;
                    const F =
                        this.$refs["F"][0].offsetHeight + this.$refs["F"][0].offsetTop - 10;
                    const G =
                        this.$refs["G"][0].offsetHeight + this.$refs["G"][0].offsetTop - 10;
                    const H =
                        this.$refs["H"][0].offsetHeight + this.$refs["H"][0].offsetTop - 10;
                    const I =
                        this.$refs["I"][0].offsetHeight + this.$refs["I"][0].offsetTop - 10;
                    const J =
                        this.$refs["J"][0].offsetHeight + this.$refs["J"][0].offsetTop - 10;
                    const K =
                        this.$refs["K"][0].offsetHeight + this.$refs["K"][0].offsetTop - 10;
                    const L =
                        this.$refs["L"][0].offsetHeight + this.$refs["L"][0].offsetTop - 10;
                    const M =
                        this.$refs["M"][0].offsetHeight + this.$refs["M"][0].offsetTop - 10;
                    const N =
                        this.$refs["N"][0].offsetHeight + this.$refs["N"][0].offsetTop - 10;
                    const O =
                        this.$refs["O"][0].offsetHeight + this.$refs["O"][0].offsetTop - 10;
                    const P =
                        this.$refs["P"][0].offsetHeight + this.$refs["P"][0].offsetTop - 10;
                    const Q =
                        this.$refs["Q"][0].offsetHeight + this.$refs["Q"][0].offsetTop - 10;
                    const R =
                        this.$refs["R"][0].offsetHeight + this.$refs["R"][0].offsetTop - 10;
                    const S =
                        this.$refs["S"][0].offsetHeight + this.$refs["S"][0].offsetTop - 10;
                    const T =
                        this.$refs["T"][0].offsetHeight + this.$refs["T"][0].offsetTop - 10;
                    const W =
                        this.$refs["W"][0].offsetHeight + this.$refs["W"][0].offsetTop - 10;
                    const X =
                        this.$refs["X"][0].offsetHeight + this.$refs["X"][0].offsetTop - 10;

                    let scrollY = Math.abs(Math.round(pos.y));
                    if (scrollY <= A) {
                        this.isScroll = true;
                        this.alphabet = "A";
                    } else if (scrollY > A && scrollY < B) {
                        this.isScroll = true;
                        this.alphabet = "B";
                    } else if (scrollY > B && scrollY < C) {
                        this.isScroll = true;
                        this.alphabet = "C";
                    } else if (scrollY > C && scrollY < D) {
                        this.isScroll = true;
                        this.alphabet = "D";
                    } else if (scrollY > D && scrollY < F) {
                        this.isScroll = true;
                        this.alphabet = "F";
                    } else if (scrollY > F && scrollY < G) {
                        this.isScroll = true;
                        this.alphabet = "G";
                    } else if (scrollY > G && scrollY < H) {
                        this.isScroll = true;
                        this.alphabet = "H";
                    } else if (scrollY > H && scrollY < I) {
                        this.isScroll = true;
                        this.alphabet = "I";
                    } else if (scrollY > I && scrollY < J) {
                        this.isScroll = true;
                        this.alphabet = "J";
                    } else if (scrollY > J && scrollY < K) {
                        this.isScroll = true;
                        this.alphabet = "K";
                    } else if (scrollY > K && scrollY < L) {
                        this.isScroll = true;
                        this.alphabet = "L";
                    } else if (scrollY > L && scrollY < M) {
                        this.isScroll = true;
                        this.alphabet = "M";
                    } else if (scrollY > M && scrollY < N) {
                        this.isScroll = true;
                        this.alphabet = "N";
                    } else if (scrollY > N && scrollY < O) {
                        this.isScroll = true;
                        this.alphabet = "O";
                    } else if (scrollY > O && scrollY < P) {
                        this.isScroll = true;
                        this.alphabet = "P";
                    } else if (scrollY > P && scrollY < Q) {
                        this.isScroll = true;
                        this.alphabet = "Q";
                    } else if (scrollY > Q && scrollY < R) {
                        this.isScroll = true;
                        this.alphabet = "R";
                    } else if (scrollY > R && scrollY < S) {
                        this.isScroll = true;
                        this.alphabet = "S";
                    } else if (scrollY > S && scrollY < T) {
                        this.isScroll = true;
                        this.alphabet = "T";
                    } else if (scrollY > T && scrollY < W) {
                        this.isScroll = true;
                        this.alphabet = "W";
                    } else if (scrollY > X && scrollY < X) {
                        this.isScroll = true;
                        this.alphabet = "X";
                    } else {
                        this.isScroll = false;
                    }
                });
            }, 300);
        },

        //点击字母表
        hendletterClick(e) {
            this.letter = e;
            this.alphabet = e;
        },
        handleTouchStart() {
            this.touchStatus = true;
        },
        handleTouchMove(e) {
            // console.log(e);
            if (this.touchStatus) {
                const height = this.$refs.zimu[0].offsetHeight;
                const startY = this.$refs["A"][0].offsetTop;
                const topHeight =
                    this.$refs["A"][0].offsetTop + this.$refs.heightBox.offsetTop;
                const letterHeight = this.$refs.letterHeight.offsetTop;
                const sumHeight = topHeight + letterHeight;
                // const touchY = e.touches[0].clientY - 140;
                const touchY = e.touches[0].clientY - sumHeight;
                const index = Math.floor((touchY - startY) / height);
                if (index >= 0 && index < this.letters.length) {
                    this.letter = this.letters[index];
                } else {
                }
            } else {
            }
        },
        //第一级
        Controlcar(row) {
            this.carbrand = row.name;
            this.postData.brand_id = row.brandid;
            GetIdBySeries(row.brandid).then(res => {
                this.carlist2 = res.data;
            });
            this.carsuit = "车系";
            this.carsubscript = 2;
        },
        //第二级
        Controlercar(row) {
            this.carsuit = row.series_name;
            this.carseries = "车型";
            this.postData.series_id = row.series_id;

            GetIdByModel(row.series_id).then(res => {
                this.carlist3 = res.data;
            });
            this.carsubscript = 3;
        },
        //第三极
        Controlsancar(row) {
            this.carseries = row.model_name;
            this.postData.model_id = row.model_id;
            this.postData.car_type = this.carbrand + this.carsuit + this.carseries;
            this.postData.car_model =
                this.postData.brand_id +
                "," +
                this.postData.series_id +
                "," +
                this.postData.model_id;
            this.opneCars = false;
        },
        // 点击车型弹出层返回键
        clickToBack(num) {
            this.carsubscript = num;
        },
        // 弹出地址弹出层
        toggleAddress(e) {
            this.postData.city_code = e.city_code;
            this.postData.pick_addr = e.cityname;
            this.showAddress = !this.showAddress;
        },
        // 选择地址
        pickAddress(e) {
            console.log(e);
            this.postData.pick_addr = e[0].name + e[1].name + e[2].name;
            this.postData.city_code = e[0].code + "," + e[1].code + "," + e[2].code;
            this.toggleAddress();
        },
    toggleRetun() {
            this.$router.go(-1); //返回上一层
        },
    // 挂载ref节点
    setRef() {
      const options = {
        scrollY: true,
        scrollX: false,
        mouseWheel: true,
        click: true,
        taps: true
      };

      setTimeout(() => {
        let wrappers = document.querySelector(".wrappers");
        this.scroll = new BScroll(wrappers, options);
      }, 300);
    },
    //第一级
    Control(name) {
      this.brand = name;
      this.suit = "请选择";
      this.subscript = 2;
    },
    //第二级
    Controler(name) {
      this.suit = name;
      this.series = "请选择";
      this.subscript = 3;
    },
    //第三极
    Controlsan(name) {
      this.series = name;
      this.guanbiprs = !this.guanbiprs;
    },

    //点击第一级标题
    brandBnt() {
      this.subscript = 1;
      this.suit = "";
      this.series = "";
    },
    // 点击第二级标题
    suitBtn() {
      this.subscript = 2;
      this.series = "";
    },
    //打开产品
    guanbipr() {
      this.guanbiprs = !this.guanbiprs;
    },
    closepr() {
      this.guanbipr();
    },

    //打开车型
    toggleShow() {
      this.opneCars = !this.opneCars;
      this.setRef();
    },
    //第一级
    Controlcar(name) {
      this.carbrand = name;
      this.carsuit = "车系";
      this.carsubscript = 2;
    },
    //第二级
    Controlercar(name) {
      this.carsuit = name;
      this.carseries = "车型";
      this.carsubscript = 3;


    },
    //第三极
    Controlsancar(name,row) {
      this.carseries = name;
      this.opneCars = false;
    },
    //点击第一级标题
    carbrandBnt() {
      this.carsubscript = 1;
      this.carsuit = "";
      this.carseries = "";
      this.setRef();
    },
    // 点击第二级标题
    carsuitBtn() {
      this.carsubscript = 2;
      this.carseries = "";
      this.setRef();
    },

    //选择省份车牌
    Province(name) {
      this.provincial = name;
      this.sfShow = !this.sfShow;
    },
    coloseProvince() {
      this.sfShow = !this.sfShow;
    },
    btnProvince() {
      this.coloseProvince();
    },

    //车主信息地址
    showPopup() {
      this.show = true;
    },

    //监听获取车主省市区
    onChange(picker) {
      let val = picker.getValues();
      let province = val[0].name;
      let city = val[1].name;
      let district = val[2].name;
      this.province = province;
      this.city = city;
      this.district = district;
      // let ass = '';
      // for(var i= 0; i<val.length;i++){
      //     ass = ass + val[i].name + ''
      // }
      // console.log(ass);
    },

    //门店信息地址
    showPopup1() {
      this.show1 = true;
    },

    //监听获取门店省市区
    onChange1(picker) {
      let val = picker.getValues();
      let province1 = val[0].name;
      let city1 = val[1].name;
      let district1 = val[2].name;
      this.province1 = province1;
      this.city1 = city1;
      this.district1 = district1;
    },

    //点击字母表
    hendletterClick(e) {
      this.letter = e;
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if(this.touchStatus){
        //122
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY -400
        const index = Math.floor((touchY - startY) / 75)
        if (index >=0 && index <this.letters.length) {
          this.letter = this.letters[index]
        }
      }
      else{

      }
    },
    handleTouchEnd(){
      this.touchStatus = false 
    },

    //取消返回
    tolast() {
      this.$router.push({path:'/quality'}); //返回上一层
    },

    //添加成功，跳转成功页面
    toqusucee() {
      let code = this.code;  //质检内容
      let product = this.brand + this.suit + this.series; //产品信息
      let day = this.day; //购买日期
      let model = this.carbrand + this.carsuit + this.carseries; //车型
      let plate = this.provincial;  //车牌省份
      let platephone = this.plate_numer; // 车牌号码
      let carnusename = this.user; //车主姓名
      let carphone = this.phone;   //车主电话
      // let carsite = this.province + this.city + this.district   //车主地址
      let car_province = this.province;   //车主所在省份
      let car_city = this.city;   //车主所在城市
      let car_district = this.district; //车主所在城市城区
      let shop_user = this.shop_user;  //门店店名
      let shop_phone = this.shop_phone;  //门店电话
      // let shop_site = this.province1 + this.city1 + this.district1; //门店地址
      let shop_province = this.province1; //门店所在省份
      let shop_city = this.city1;  //门店所在城市
      let shop_district = this.district1; //门店所在城市城区
      this.package.push({
        code:code,
        product:product,
        day:day,
        model:model,
        plate:plate,
        platephone:platephone,
        carnusename:carnusename,
        carphone:carphone,
        car_province:car_province,
        car_city:car_city,
        car_district:car_district,
        shop_user:shop_user,
        shop_phone:shop_phone,
        shop_province:shop_province,
        shop_city:shop_city,
        shop_district:shop_district
      })
      if(this.series===""){
        this.$toast('请选择产品信息！');
      }
      else if(this.day===""){
        this.$toast('请填写购买日期！');
      }
      else if(this.carseries===""){
        this.$toast('请选择车型品牌！');
      }
      else if(this.provincial==="省份"){
        this.$toast('请选择车牌省份！');
      }
      else if(this.plate_numer===""){
        this.$toast('请填写车牌号码！');
      }
      else if(this.user===""){
        this.$toast('请填写车主姓名！');
      }
      else if(this.phone===""){
        this.$toast('请填写车主电话！');
      }
      else if(this.district===""){
        this.$toast('请选择车主地址！');
      }
      else if(this.shop_user===""){
        this.$toast('请填写门店店名！');
      }
      else if(this.shop_phone===""){
        this.$toast('请填写门店电话！');
      }
      else if(this.district1===""){
        this.$toast('请选择门店地址！');
      }
      else{
        this.$router.push({path:'/quality'});
        console.log(this.package,"提交数据成功");
        // this.$router.push({ path: "/quality/qualiyadd/qualitysucee" });
      }
      
    }
  },
  watch: {
    letter () {
      if(this.letter) {
        const wrappers = this.$refs[this.letter][0]
        this.scroll.scrollToElement(wrappers);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.quality {
  width: 10rem;
  .QualityBox {
    margin-top: 0.3rem;
    width: 10rem;
    overflow: hidden;
    .Qu-product {
      .product-title {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #dcdcdc63;
        padding-bottom: .4rem;
        
        font-family:Source Han Sans CN;
        font-weight:500;
        color:rgba(51,51,51,1);
        .title-heng {
          width: 0.05rem;
          height: 0.32rem;
          background: rgba(216, 30, 6, 1);
          border-radius: 0.03rem;
        }
        .title-name {
          margin-left: 0.44rem;
          color: #333333;
          font-size:0.43rem;
        }
      }
      .product-select {
        width: 9.15rem;
        margin: 0 auto;
        .select-pr {
          width: 9.15rem;
          height: 1.17rem;
          line-height: 1.17rem;
          background: rgba(255, 255, 255, 1);
          // margin-top: 0.19rem;
          border-bottom: 1px solid #dcdcdc29;
          .prBox {
            margin: 0 auto;
            // width: 8.35rem;
            display: flex;
            justify-content: space-between;
            .title {
              color: #333333;
              font-size:0.4rem;
              font-family:Source Han Sans CN;
              font-weight:400;
            }
            .names {
              width: 7.5rem;
              display: flex;
              height: 1.17rem;
              line-height: 1.17rem;
              justify-content: space-between;
              font-size:0.4rem;
              font-family:Source Han Sans CN;
              font-weight:400;
              .names-character {
                width: 100%;
                span {
                  display: inline-block;
                  width: 33%;
                  text-align: center;
                  
                }
              }
              .names-img {
                width: 0.65rem;
                height: 0.65rem;
                margin-top: 0.2rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
        .select-day {
          width: 9.15rem;
          height: 1.17rem;
          line-height: 1.17rem;
          background: rgba(255, 255, 255, 1);
          
          // border-radius: 0.13rem;
          // margin-top: 0.2rem;
          .dayBox {
            margin: 0 auto;
            // width: 8.35rem;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #dcdcdc29;
            .title {
              color: #333333;
              font-size:0.4rem;
              font-family:Source Han Sans CN;
              font-weight:400;
            }
            input {
              text-align: right;
              width: 6.5rem;
              margin-left: 0.59rem;
              color: #999999;
              font-size:0.4rem;
              font-family:Source Han Sans CN;
              font-weight:400;
            }
          }
        }
        .select-coding {
          width: 9.15rem;
          // height: 1.75rem;
          
          // border-radius: 0.13rem;
          // margin-top: 0.19rem;
          overflow: hidden;
          .codingBox {
            margin: 0 auto;
            .codingBox-s {
              font-size:0.4rem;
              font-family:Source Han Sans CN;
              border-bottom: 1px solid #dcdcdc29;
              font-weight:400;
              color: #333333;
              // margin-top: 0.3rem;
              display: flex;
              justify-content: space-between;
              background: rgba(255, 255, 255, 1);
              height: 1.17rem;
              line-height: 1.17rem;
              
              .s-nums {
                color: #999999;
                margin-left: 0.43rem;
              }
              span{
                display:block;
              }
            }
            .codingBox-x {
              font-size:0.4rem;
              font-family:Source Han Sans CN;
              background: rgba(255, 255, 255, 1);
              
              font-weight:400;
              color: #333333;
              // margin-top: 0.2rem;
              display: flex;
              justify-content: space-between;
              height: 1.17rem;
              line-height: 1.17rem;
              .x-nums {
                color: #999999;
                margin-left: 0.43rem;
              }
              span{
                display:block;
              }
            }
          }
        }
      }
    }
    .qu-heng{
      height: .4rem;
      background: #f8f8f8;
    }
    .Qu-car {
      .car-title {
        display: flex;
        align-items: center;
        height: 1.17rem;
        line-height: 1.17rem;
        border-bottom: 1px solid #dcdcdc63;
        .title-heng {
          width: 0.05rem;
          height: 0.32rem;
          background: rgba(216, 30, 6, 1);
          border-radius: 0.03rem;
        }
        .title-name {
          margin-left: 0.44rem;
          color: #333333;
          font-size:0.43rem;
          font-family:Source Han Sans CN;
          font-weight:500;
          color:rgba(51,51,51,1);
        }
      }
      .car-select {
        width: 9.15rem;
        margin: 0 auto;
        .select-pr {
          width: 9.15rem;
          height: 1.17rem;
          line-height: 1.17rem;
          background: rgba(255, 255, 255, 1);
          .prBox {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            height: 1.17rem;
            line-height: 1.17rem;
            border-bottom: 1px solid #dcdcdc29;
            .title {
              color: #333333;
              font-size:0.4rem;
              font-family:Source Han Sans CN;
              font-weight:400;
            }
            .names {
              width: 7.5rem;
              display: flex;
              height: 1.17rem;
              line-height: 1.17rem;
              justify-content: space-between;
              font-size:0.4rem;
              font-family:Source Han Sans CN;
              font-weight:400;
              .names-character {
                text-align: right;
                margin-right: .3rem;
                width: 100%;
                span {
                  display: inline-block;
                  width: 33%;
                  text-align: right;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }
              }
              .names-img {
                width: 0.65rem;
                 height: 0.65rem;
                margin-top: 0.2rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
          .prBox.active{
            border-bottom: 0;
          }
        }
        .select-day {
          width: 9.15rem;
          height: 1.17rem;
          line-height: 1.17rem;
          border-bottom: 1px solid #dcdcdc29;
          .dayBox {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            .title {
              color: #333333;
              font-size:0.4rem;
              font-family:Source Han Sans CN;
              font-weight:400;
            }
            input {
              text-align: right;
              height: 1.1rem;
              line-height: 1.1rem;
              font-size:0.4rem;
              font-family:Source Han Sans CN;
              font-weight:400;
              width: 5rem;
              margin-left: 0.59rem;
              color: #999999;
            }
          }
        }
        .select-plate {
          width: 9.15rem;
          margin: 0 auto;
          display: flex;
          height: 1.17rem;
          line-height: 1.17rem;
          border-bottom: 1px solid #dcdcdc29;
          justify-content: space-between;
          .plate-left {
            display: flex;
            .title {
              width: 1.44rem;
              height: 1.17rem;
              line-height: 1.17rem;
              font-size:0.4rem;
              font-family:Source Han Sans CN;
              font-weight:400;
              color: #333333;
            }
            .province {
              margin-left: 0.19rem;
              width: 1.96rem;
              height: 1.17rem;
              line-height: 1.17rem;
              display: flex;
              justify-content: space-between;
              .province-xz {
                width: 1.2rem;
                text-align: center;
                font-size:0.4rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color: #999999;
              }
              .province-img {
                width: 0.6rem;
                height: 0.6rem;
                margin-right: 0.5rem;
                margin-top: 0.2rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
          .plate-right {
            width: 5.37rem;
            height: 1.17rem;
            line-height: 1.17rem;
            input {
              text-align: right;
              margin-left: 0.4rem;
              width: 4.9rem;
              height: 1.1rem;
              line-height: 1.1rem;
              color: #999999;
              font-size:0.4rem;
              font-family:Source Han Sans CN;
              font-weight:400;
            }
          }
        }
      }
    }
    .Qu-Btn {
      width: 9.15rem;
      display: flex;
      justify-content: space-between;
      margin: .6rem auto;
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      span {
        display: inline-block;
      }
      .btn-cancel {
        width:3.89rem;
        height:1.09rem;
        line-height: 1.09rem;
        border:1px solid rgba(233,55,91,1);
        border-radius:1rem;
        text-align: center;
        color: rgba(233,55,91,1);
      }
      .btn-okadd {
        width:3.89rem;
        height:1.09rem;
        line-height: 1.09rem;
        text-align: center;
        color: #ffffff;
        border-radius:1rem;
        background: rgba(233,55,91,1);
      }
    }
  }
  .pull-pr {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 10;
    .prBox {
      position: absolute;
      width: 10rem;
      height: 8.15rem;
      background: #ffffff;
      bottom: 0;
      .title {
        width: 10rem;
        height: 1.39rem;
        border-bottom: 1px solid #eeeeee;
        .ti-headline {
          text-align: center;
          position: relative;
          color: #333333;
          font-size: 0.4rem;
          margin-top: 0.23rem;
          img {
            position: absolute;
            right: 0.5rem;
            top: 0.1rem;
            width: 0.25rem;
            height: 0.25rem;
          }
        }
        .ti-names {
          margin-left: 0.44rem;
          span {
            margin-right: 1rem;
            color: #333333;
            font-size: 0.32rem;
          }
        }
      }
      .prlist {
        height: 6.7rem;
        margin-left: 0.44rem;
        margin-top: 0.25rem;
        color: #333333;
        font-size: 0.32rem;
        overflow: auto; //超出高度滚动
        padding-bottom: 0.4rem;
        .prlist-name {
          margin-bottom: 0.2rem;
        }
        .prlist-arcit {
          color: #f00505;
        }
      }
    }
  }
  .pull-car {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 10;
    .prBox {
      position: absolute;
      width: 10rem;
      height: 12.39rem;
      background: #ffffff;
      bottom: 0;
      .letter {
        position: absolute;
        top: 1.6rem;
        right: 0;
        bottom: 0;
        width: 1rem;
        text-align: center;
        font-size: 0.27rem;
        z-index: 10;
        .letters-name{
          height: .5rem;
          line-height: .5rem;
        }
      }
      .title {
        width: 10rem;
        height: 1.39rem;
        border-bottom: 0.02rem solid #dcdcdc63;
        .ti-headline {
          text-align: center;
          position: relative;
          color: #333333;
          font-size: 0.4rem;
          margin-top: 0.23rem;
          img {
            position: absolute;
            right: 0.5rem;
            top: 0.1rem;
            width: 0.25rem;
            height: 0.25rem;
          }
        }
        .ti-names {
          // margin-left: .44rem;
          text-align: center;
          span {
            // margin-right: 1rem;
            color: #333333;
            font-size: 0.32rem;
          }
        }
      }
      .prlist {
        height: 10.03rem;
        // margin-top: .25rem;
        color: #333333;
        font-size: 0.32rem;
        // overflow: auto; //超出高度滚动
        overflow: hidden;
        padding-bottom: 0.4rem;
        .prlist-title {
          background-image: linear-gradient(
            to right,
            #ffdae1 45%,
            #fff2f4,
            #ffffff
          );
          width: 9.09rem;
          height: 0.61rem;
          line-height: 0.61rem;
          margin-bottom: 0.2rem;
          .titles {
            margin-left: 0.44rem;
            font-size: 0.4rem;
          }
        }
        .prlist-name {
          padding-bottom: 0.3rem;
          padding-left: 0.44rem;
          font-size: 0.4rem;
        }
        .prlist-arcit {
          color: #f00505;
        }
      }
    }
  }
  .pull-province {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 10;
    .provinceBox {
      width: 10rem;
      height: 12.93rem;
      position: absolute;
      bottom: 0;
      background: #ffffff;
      overflow: hidden;
      .prHe {
        width: 9.15rem;
        margin: 0.43rem auto;
        .prHe-title {
          display: flex;
          justify-content: space-between;
          .title-name {
            color: #333333;
            font-size: 0.4rem;
          }
          img {
            width: 0.28rem;
            height: 0.28rem;
          }
        }
        .prHefor {
          margin-top: 0.79rem;
          height: 11rem;
          overflow: auto;
          .prHefor-name {
            float: left;
            width: 0.99rem;
            height: 1.39rem;
            line-height: 1.39rem;
            text-align: center;
            color: #333333;
            font-size: 0.4rem;
            background: rgba(229, 237, 250, 1);
            border-radius: 0.07rem;
            margin-right: 0.64rem;
            margin-bottom: 0.43rem;
          }
          .prHefor-name:nth-child(6n) {
            margin-right: 0;
          }
        }
      }
    }
  }
}

.pull-car {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;
  .prBox {
    border-radius: 15px;
    position: absolute;
    width: 9.15rem;
    height: 13.67rem;
    background: #ffffff;
    // bottom: 2rem;
    top: 1rem;
    left: 0.43rem;
    padding: 0.29rem 0;
    z-index: 10;
    .stick {
      top: 0rem;
      position: absolute;
      height: 0.8rem;
      line-height: 0.8rem;
      padding-left: 0.44rem;
      // background: #dcdcdc;
      background-image: linear-gradient(to right, #dcdcdc 45%, #ffffff);
      z-index: 100;
      left: 0;
      right: 0;
      border-radius: 15px 15px 0 0;
      color: #333333;
      font-size: 0.4rem;
    }
    .letter {
      position: absolute;
      top: 1rem;
      right: 0;
      bottom: 0;
      width: 1rem;
      text-align: center;
      font-size: 0.27rem;
      z-index: 20;
      .letters-name {
        height: 0.5rem;
        line-height: 0.5rem;
      }
    }
    .title {
      width: 10rem;
      height: 1.39rem;
      border-bottom: 0.02rem solid #eeeeee;
      .ti-headline {
        text-align: center;
        position: relative;
        color: #333333;
        font-size: 0.4rem;
        margin-top: 0.23rem;
        img {
          position: absolute;
          right: 0.5rem;
          top: 0.1rem;
          width: 0.25rem;
          height: 0.25rem;
        }
      }
      .ti-names {
        // margin-left: .44rem;
        text-align: center;
        span {
          // margin-right: 1rem;
          color: #333333;
          font-size: 0.32rem;
        }
      }
    }
    .prlist {
      // height: 14rem;
      height: 100%;
      // margin-top: .25rem;
      color: #333333;
      font-size: 0.32rem;
      overflow: auto; //超出高度滚动
      /*overflow: hidden;*/
      // padding-bottom: 0.4rem;
      // margin-bottom: .4rem;

      .prlist-title {
        background-image: linear-gradient(to right, #dcdcdc 45%, #ffffff);
        width: 9.09rem;
        height: 0.61rem;
        line-height: 0.61rem;
        margin-bottom: 0.2rem;
        .titles {
          margin-left: 0.44rem;
          font-size: 0.4rem;
        }
      }
      .prlist-name {
        padding-bottom: 0.3rem;
        padding-left: 0.44rem;
        font-size: 0.4rem;
        line-height: 2.5;
      }
      .prlist-arcit {
        color: #409eff;
      }
    }
    .wrappers2 {
      .prlist-name {
        &:last-child {
          padding-bottom: 1.5rem;
        }
      }
    }
  }
  .close-btn {
    position: absolute;
    top: -1rem;
    right: 0.05rem;
    text-align: center;
    /* width: .65rem; */
    font-size: 0.8rem;
    color: #333333;
    font-weight: 800;
    z-index: 100;
  }
  .backward-btn {
    color: #333333;
    margin-left: 0.4rem;
    font-size: 0.5rem;
  }
}
</style>