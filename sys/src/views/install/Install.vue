<template>
  <div>
    <div class="install-container">
      <!--<div @click="toggleRetun" class="top_title">-->
      <!--<Toptitle :title="title"/>-->
      <!--</div>-->
      <div class="head-bg" :style="note">
        <div class="header-desc">·改灯之家·</div>
        <div class="header-title">填写用户派单信息</div>
      </div>
      <div class="input-wrapper">
        <div class="input-item">
          <div class="item-title">
            <span>*</span>
            <span>订单编号：</span>
          </div>
          <div :class="['item-content',{'active-item': curActive === 'buy_order_no'}]">
            <input
              type="text"
              @focus="inputFocus('buy_order_no')"
              @blur="inputBlur"
              v-model="postData.buy_order_no"
              placeholder="请输入购买平台订单编号"
            />
            <div class="tips" v-if="err_text">此订单已存在，请重写填写</div>
          </div>
        </div>
        <div class="input-item">
          <div class="item-title">
            <span>*</span>
            <span>联系人：</span>
          </div>
          <div :class="['item-content',{'active-item': curActive === 'contact'}]">
            <input
              type="text"
              @focus="inputFocus('contact')"
              @blur="inputBlur"
              v-model="postData.contact"
              placeholder="请输入联系人姓名"
            />
          </div>
        </div>
        <div class="input-item">
          <div class="item-title">
            <span>*</span>
            <span>联系手机：</span>
          </div>
          <div :class="['item-content',{'active-item': curActive === 'tel'}]">
            <input
              type="text"
              @focus="inputFocus('tel')"
              @blur="inputBlur"
              v-model="postData.tel"
              placeholder="请输入联系人手机号码"
            />
          </div>
        </div>
        <div class="input-item">
          <div class="item-title">
            <span>*</span>
            <span>地址：</span>
          </div>
          <div class="item-content special-item" @click="toggleAddress">
            <div class="fake-input has-text">{{postData.pick_addr}}</div>
            <div class="caret">
              <img src="@/assets/caret.png" alt />
            </div>
          </div>
          <div :class="['item-content', 'address', {'active-item':curActive === 'city_desc'}]">
            <input
              type="text"
              @focus="inputFocus('city_desc')"
              @blur="inputBlur"
              v-model="postData.city_desc"
              placeholder="详细地址"
            />
          </div>
        </div>
        <div class="input-item">
          <div class="item-title">
            <span>*</span>
            <span>车牌号</span>
          </div>
          <div :class="['item-content',{'active-item': curActive === 'number_plate'}]">
            <input
              type="text"
              @focus="inputFocus('number_plate')"
              @blur="inputBlur"
              v-model="postData.number_plate"
              placeholder="请填写完整车牌号码"
            />
          </div>
        </div>
        <div class="input-item">
          <div class="item-title">
            <span>*</span>
            <span>车型信息</span>
          </div>
          <div class="item-content special-item" @click="toggleShow">
            <div class="fake-input has-text">{{this.carType}}</div>
            <div class="caret">
              <img src="@/assets/caret.png" alt />
            </div>
          </div>
        </div>
        <div class="input-item">
          <div class="item-title">
            <span></span>
            <span>备注</span>
          </div>
          <div :class="['item-content','remark',{'active-item': curActive === 'remark'}]">
            <textarea
              @focus="inputFocus('desc')"
              @blur="inputBlur"
              v-model="postData.desc"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="tip-infor">
        <div class="infor-title">信息提示！</div>
        <div
          class="infor-content"
        >尊敬的车主，请正确填写完善以上信息，方便我们更准确为您提供优质的安装服务，填写不完整或者不正确，可能会影响到安装服务的质量，谢谢配合！</div>
      </div>
      <div class="adv-banner">
        <img src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/adv-banner.png" alt />
      </div>

      <Address v-if="showAddress" :areaJson="areaJson" @toggleAddress="toggleAddress"></Address>

      <!--</van-popup>-->

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

    <div class="bm" v-if="!opneCars&&!showAddress" v-show="hideshow">
      <div class="post-btn" @click="clickToPost">提交</div>
    </div>
  </div>
</template>

<script>
import { Citylist } from "@/api/city";

import BScroll from "better-scroll";

import Toptitle from "@/components/Toptitle/Toptitlebai";
import Address from "@/components/address/index";
import { getInfo, login } from "@/api/user";

import areaList from "@/assets/js/area.js";
import { Getcar, GetIdByModel, GetIdBySeries } from "@/api/car";
import { PostDataByAdd } from "@/api/order";

import { getUser, removeUser, setUser } from "@/utils/auth";

import { mapGetters } from "vuex";

export default {
  name: "Install",
  data() {
    return {
      isScroll: false, //显示固定元素
      alphabet: "", //置顶字母
      docmHeight: document.documentElement.clientHeight, //默认屏幕高度
      showHeight: document.documentElement.clientHeight, //实时屏幕高度
      hideshow: true, //显示或者隐藏bm
      strToObj: {},
      is_addcity: false,
      title: "填写用户派单信息",
      curActive: "",
      err_text: false,
      note: {
        backgroundImage:
          "url(https://kedand.oss-cn-beijing.aliyuncs.com/uploads/head.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        width: "10rem",
        height: "4.73rem"
      },
      areaList: areaList,
      showAddress: false,
      opneCars: false,
      itemCount: 3,
      itemHeight: 80,
      cities: [],
      carlist2: [],
      carlist3: [],
      carsubscript: 1,
      carbrand: "品牌", //车型品牌
      carsuit: "", // 车型型号
      carseries: "", //车型版本
      letter: "",
      touchStatus: false,
      areaJson: [],
      uinfo: {},
      postData: {
        openid: "",
        buy_order_no: "",
        contact: "",
        tel: "",
        city_code: "",
        city_desc: "",
        number_plate: "",
        car_model: ""
      }
    };
  },
  computed: {
    letters() {
      var letters = [];
      for (let i = 0; i < 24; i++) {
        if (this.cities[i] !== undefined) {
          var element = this.cities[i].title;
          letters.push(element);
        }
      }
      return letters;
    },
    carType() {
      if (this.carbrand !== "" && this.carsuit !== "" && this.carseries !== "")
        return this.carbrand + this.carsuit + this.carseries;
      else return "车辆选择";
    },
    ...mapGetters(["userInfo"])
  },
  created() {
    document.addEventListener("WeixinJSBridgeReady", function onBridgeReady() {
      // 通过下面这个API隐藏底部导航栏
      WeixinJSBridge.call("hideToolbar");
    });
    Citylist(1).then(res => {
      this.areaJson = res.data;
    });
    Getcar().then(res => {
      this.cities = res.data;
      // console.log(res.data);
    });

    let id = this.$route.params.id;
    if (id !== undefined) {
      getInfo(id).then(res => {
        //执行某个方法dispatch 要指定modules下面的文件里面的方法才起作用
        this.$store.dispatch("user/login", res.data);
        setUser(res.data);
        this.uinfo = res.data;
      });
    } else {
      var temp = {
        url: this.$route.path
      };
      login(temp).then(res => {
        window.location.href = res.data;
      });
    }
  },
  methods: {
    toggleRetun() {
      this.$router.go(-1); //返回上一层
    },
    inputFocus(val) {
      this.curActive = val;
    },
    inputBlur() {
      this.curActive = "";
      let u = navigator.userAgent;
      let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (isiOS) {
        window.scrollTo(0, 0);
      }
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
    // 打开车型弹出层
    toggleShow() {
      this.opneCars = !this.opneCars;
      this.setRef();
    },
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
    handleTouchEnd() {
      this.touchStatus = false;
    },

    //取消返回
    tolast() {
      this.$router.go(-1); //返回上一层
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
    clickToPost() {
      let postData = this.postData;

      postData.openid = this.uinfo.openid;
      if (postData.buy_order_no === "") {
        this.$toast("请填写订单号码");
      } else if (postData.contact === "") {
        this.$toast("请填写联系人");
      } else if (postData.tel === "") {
        this.$toast("请填写联系号码");
      } else if (postData.city_code === "") {
        this.$toast("请选择地址");
      } else if (postData.city_desc === "") {
        this.$toast("请填写详细地址");
      } else if (postData.number_plate === "") {
        this.$toast("请填写车牌号");
      } else if (postData.series_id === "") {
        this.$toast("请选择车型");
      }

      PostDataByAdd(postData).then(res => {
        console.log(res);
        if (res.code === 10001) {
          this.err_text = true;
          this.$toast(res.msg);
          return true;
        }
        this.$toast(res.msg);
        this.$router.push({ path: "/my" });
      });
    }
  },
  components: {
    Toptitle,
    Address
  },
  mounted() {
    // window.onresize监听页面高度的变化
    //安卓输入框顶起底部按钮解决
    window.onresize = () => {
      return (() => {
        this.showHeight = document.documentElement.clientHeight;
      })();
    };
  },
  watch: {
    letter() {
      if (this.letter) {
        const wrappers = this.$refs[this.letter][0];
        this.scroll.scrollToElement(wrappers);
      }
    },
    alphabet(newVal) {
      // console.log(newVal, "ppp");
      this.alphabet = newVal;
    },

    $route(to, from) {
      console.log(to);
    },
    //安卓输入框顶起底部按钮解决
    showHeight: function() {
      if (this.docmHeight > this.showHeight) {
        this.hideshow = false;
      } else {
        this.hideshow = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.install-container {
  position: fixed;
  overflow: auto;
  height: 100%;
  background: #f7f7f7;
  width: 100%;
  .top_title {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .head-bg {
    .header-desc {
      padding-top: 0.58rem;
      text-align: center;
      font-size: 0.48rem;
      color: #fff;
    }
    .header-title {
      margin-top: 0.53rem;
      text-align: center;
      color: #fff;
      font-size: 0.64rem;
    }
  }
  .input-wrapper {
    width: 9.15rem;
    min-height: 667px;
    background: #fff;
    border-radius: 0.13rem;
    position: absolute;
    margin: 0 0.435rem;
    top: 3.16rem;
    padding: 0.6rem 0.45rem;
    box-shadow: 0.03rem 0 0.13rem 0 rgba(181, 181, 181, 0.2);
    .input-item {
      margin-bottom: 0.79rem;
      .item-title {
        margin-bottom: 0.36rem;
        span {
          font-size: 0.48rem;
          font-family: SourceHanSansCN-Regular;
          &:first-child {
            color: #ff0000;
          }
          &:last-child {
            color: #000000;
            font-weight: normal;
          }
        }
      }
      .item-content {
        width: 8.29rem;
        height: 0.91rem;
        border: 1px solid #999999;
        padding: 0.1rem 0.24rem;
        input {
          width: 100%;
          height: 0.64rem;
          color: #000000;
          font-size: 0.48rem;
          caret-color: #6121fc;
          &::-webkit-input-placeholder {
            color: #999999;
            font-size: 0.48rem;
          }
        }
        .tips {
          margin-top: 0.2rem;
          color: #f00;
          font-weight: 500;
        }
        .fake-input {
          color: #999999;
          font-size: 0.48rem;
        }
      }
      .special-item {
        display: flex;
        .fake-input {
          width: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .has-text {
          color: #000;
        }
        .caret {
          width: 10%;
          text-align: right;
          img {
            width: 70%;
            margin-top: 0.18rem;
          }
        }
      }
      .address {
        margin-top: 0.8rem;
      }
      .remark {
        height: 2.57rem;
        textarea {
          font-size: 0.48rem;
          color: #000;
          width: 100%;
          border: none;
          height: 100%;
          caret-color: #6121fc;
          &::-webkit-input-placeholder {
            color: #999999;
            font-size: 0.48rem;
          }
        }
      }
      .active-item {
        border-color: #6121fc;
      }
    }
  }

  .tip-infor {
    margin-top: 0.4rem;
    position: absolute;
    top: 27.6rem;
    margin: 0 0.43rem 0.4rem;
    border-radius: 0.13rem;
    overflow: hidden;
    box-shadow: 0.03rem 0 0.13rem 0 rgba(181, 181, 181, 0.2);
    .infor-title {
      padding: 0.44rem 0.44rem 0.27rem;
      color: #000000;
      background: #fff;
      font-size: 0.48rem;
      font-family: SourceHanSansCN-Regular;
      border-bottom: 1px solid #e7e7e7;
    }
    .infor-content {
      color: #333333;
      font-size: 0.4rem;
      line-height: 0.64rem;
      padding: 0.44rem;
      background: #fff;
    }
  }

  .adv-banner {
    width: 10rem;
    height: 4.53rem;
    position: absolute;
    top: 33.8rem;
    margin-bottom: 3rem;
    img {
      width: 100%;
    }
  }
  /deep/ .van-picker {
    height: 4.87rem;
  }
  .btn-group {
    margin: 0.2rem 0.88rem 0.47rem;
    display: flex;
    .btns {
      flex: 1;
      width: 3.89rem;
      height: 1.09rem;
      text-align: center;
      border: 1px solid #6121fc;
      line-height: 1.09rem;
      border-radius: 0.55rem;
      font-size: 0.4rem;
    }
    .cancel {
      margin-right: 0.45rem;
      color: #6121fc;
    }
    .comfirm {
      background: #6121fc;
      color: #fff;
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
}
.post-btn {
  width: 9.01rem;
  height: 1.09rem;
  border-radius: 0.55rem;
  background: #6121fc;
  color: #fefefe;
  font-size: 0.4rem;
  font-family: SourceHanSansCN-Regular;
  text-align: center;
  line-height: 1.09rem;
  /*position: absolute;*/
  margin-bottom: 0.2rem;
  margin-top: 0.2rem;

  margin-left: 0.49rem;
}
.bm {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  width: 100%;
}
</style>
