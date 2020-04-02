<template>
  <!--https://kedand.oss-cn-beijing.aliyuncs.com/uploads/add.png-->
  <div class="add-shop" v-if="homeshow">
    <div @click="toggleRetun" class="toptitle">
      <Toptitle :title="title" />
    </div>
    <div class="user-info">
      <div class="user-avatar">
        <img :src="userinfo.headimgurl" alt />
      </div>
      <div class="user-name">{{ userinfo.nickname }}</div>
    </div>
    <div class="apply-info">
      <!--  门店名称  -->
      <div class="info-name">
        <div class="name-title">门店名称</div>
        <div class="name-right">
          <div class="right-input">
            <input v-model="temp.shopname" placeholder="请输入门店全称" />
            <div class="hint-icon" v-if="temp.shopname !== ''">
              <img v-if="temp.shopname !== '阿帕旗舰店'" src="../../assets/correct.png" />
              <img v-if="temp.shopname == '阿帕旗舰店'" src="../../assets/mistake.png" />
            </div>
          </div>
          <div class="right-hint">
            <span v-if="temp.shopname === ''">名称若被占用,如是分店请加上地区,例如阿帕改灯（广州）</span>
            <span v-if="!checkUser">*此名称已被使用，请重新检查</span>
            <span v-if="checkUser || temp.shopname !== ''">*此名称可使用</span>
          </div>
        </div>
      </div>

      <!--  门店地址   -->
      <div class="info-location">
        <div class="location-title">门店地址</div>
        <div class="location-right">
          <div class="right-city" @click="toggleAddr">
            <div class="city-name">{{ temp.cityName }}</div>
            <div class="city-icon">
              <img src="../../assets/below.png" />
            </div>
          </div>
          <div class="right-street">
            <input v-model="temp.location" placeholder="请输入具体地址" />
          </div>
        </div>
      </div>

      <!--  联系人 -->
      <div class="info-contact">
        <div class="contact-title">联系人</div>
        <div class="contact-right">
          <input v-model="temp.shopkeeper" placeholder="请输入联系人姓名" />
        </div>
      </div>

      <!--  联系电话 -->
      <div class="info-contact">
        <div class="contact-title">联系电话</div>
        <div class="contact-right">
          <input v-model="temp.tel" placeholder="请输入联系号码" />
        </div>
      </div>

      <div class="upload-pic">
        <p>门店环境照片</p>
        <Upload
          :front="fileList"
          :count="10"
          @handelDelete="handelDelete"
          @handelUploade="afterFileList"
        ></Upload>
      </div>
      <div class="shop-font-license">
        <div class="shop-font">
          <p>门店正面照片</p>
          <Upload :front="front" :count="1" @handelUploade="afterFront"></Upload>
        </div>

        <div class="shop-license">
          <p>营业执照</p>
          <Upload :front="license" :count="1" @handelUploade="afterLicense"></Upload>
        </div>
      </div>
    </div>
    <div class="action-btn" v-show="hideshow">
      <div class="cancel-btn" @click="toggleRetun">取消</div>
      <div class="confirm-btn" @click="toggledata" v-if="temp.status === 2">重新提交</div>
      <div class="confirm-btn" @click="toggledata" v-else-if="temp.status === 1">等待处理</div>
      <div class="confirm-btn" @click="toggledata" v-else>提交申请</div>
    </div>
    <!--弹出层-->
    <!--<van-popup v-model="showAddr" position="bottom">-->

    <Address v-if="showAddr" :areaJson="areaJson" @toggleAddress="pickAddr"></Address>
    <!--<van-area :area-list="areaList" :value="temp.cityCode" @confirm="pickAddr" @cancel="toggleAddr"/>-->
    <!--</van-popup>-->
    <!--  弹出重新填写  -->
    <div class="anew" v-if="showAnew" @touchmove.prevent>
      <div class="anewBox" :style="turnbg">
        <div class="an-top">
          <img src="@/assets/re-ico.png" />
          <div>
            <span>您的申请</span>
            <span>被驳回</span>
          </div>
        </div>
        <div class="an-bottom" style="margin-top: 2rem">
          <div class="title">
            <span class="title-s">{{ redesc }}</span>
            <span class="title-x">请重填</span>
          </div>
          <div class="btnfill" @click="clickAnew">重新填写</div>
        </div>
      </div>
    </div>

    <div class="anew" v-if="auditshow" @touchmove.prevent>
      <div class="anewBox" :style="turnbg">
        <div class="an-top">
          <img src="@/assets/re-ico.png" />
          <div>
            <span>门店正在</span>
            <span>申请中</span>
          </div>
        </div>
        <div class="an-bottom">
          <div class="title">
            <span class="title-s">{{ redesc }}</span>
            <span class="title-x">请勿重复提交</span>
          </div>

          <div class="btntext" @click="back">关闭</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import areaList from "@/assets/js/area.js";
import { Citylist } from "@/api/city";

import Address from "@/components/address/index";
import Toptitle from "@/components/Toptitle/Toptitle";
import { mapGetters } from "vuex";

import Upload from "@/components/uploader";
import { getUser, removeUser, setUser } from "@/utils/auth";

import { GetUserIdByCheck, PostDataAdd } from "@/api/shop";

import { Toast } from "vant";

export default {
  name: "AddShop",
  data() {
    return {
      docmHeight: document.documentElement.clientHeight, //默认屏幕高度
      showHeight: document.documentElement.clientHeight, //实时屏幕高度
      hideshow: true, //显示或者隐藏bm
      homeshow: false,
      areaJson: [],
      auditshow: false,
      temp: {},
      checkUser: true,
      userinfo: {},
      title: "填写申请资料",
      username: "",
      redesc: "", //驳回信息
      contact: "",
      phone: "",
      value: "",
      fileList: [
        // { url: "https://img.yzcdn.cn/vant/leaf.jpg" }
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: 'https://cloud-image', isImage: true }
      ],
      front: [],
      license: [],
      showAddr: false,
      areaList,
      cityName: "北京市-北京市-东城区",
      backgroundDiv: {
        backgroundImage: "url(" + require("../../assets/addshop3.png") + ")"
      },
      turnbg: {
        backgroundImage: "url(" + require("../../assets/turn-bg.png") + ")"
      },
      showAnew: false
    };
  },
  computed: {
    ...mapGetters(["userInfo", "sele_shop"])
  },
  mounted() {
    // window.onresize监听页面高度的变化
    //安卓输入框顶起底部按钮解决
    window.onresize = () => {
      return (() => {
        this.showHeight = document.documentElement.clientHeight;
      })();
    };
    document.addEventListener("WeixinJSBridgeReady", function onBridgeReady() {
      // 通过下面这个API隐藏底部导航栏
      WeixinJSBridge.call("hideToolbar");
    });
  },
  created() {
    var that = this;
    setTimeout(function() {
      that.homeshow = true;
    }, 1000);

    Citylist(1).then(res => {
      this.areaJson = res.data;
    });
    this.userinfo = JSON.parse(getUser());
    GetUserIdByCheck(this.userinfo.id).then(res => {
      if (res.data !== null) {
        this.temp = res.data;
        if (this.temp.status === 1) {
          this.auditshow = true;
        }
        this.front.push({ url: this.temp.front });
        this.license.push({ url: this.temp.license });
        for (let i = 0; i < this.temp.env.length; i++) {
          this.fileList.push({ url: this.temp.env[i].url });
        }
        //状态 1 待审核
        //状态 2 驳回
        // 3通过

        if (this.temp.status !== 3) {
          // Toast('您已有门店在申请，请耐心等待，如有多个门店请等待通过后再申请。');
        }
        if (this.temp.status === 2) {
          this.showAnew = true;
          this.redesc = this.temp.rejected[this.temp.rejected.length - 1].desc;
        }
      }
    });
  },
  methods: {
    back() {
      if (this.sele_shop === undefined) {
        this.auditshow = false;
      } else {
        this.$router.go(-1); //返回上一层
      }
    },
    handelDelete(e) {
      this.fileList = e;
    },
    toggleRetun() {
      this.$router.go(-1); //返回上一层
    },
    afterLicense(file) {
      this.license = [];
      this.license.push({ url: file.data.data });
    },
    afterFileList(file) {
      this.fileList.push({ url: file.data.data });
    },
    afterFront(file) {
      this.front = [];
      this.front.push({ url: file.data.data });
    },
    toggleAddr() {
      this.showAddr = !this.showAddr;
    },
    pickAddr(e) {
      this.temp.cityName = e.cityname;
      this.temp.cityCode = e.city_code;
      //
      this.toggleAddr();
    },
    toggledata() {
      if (this.temp.status === 1) {
        Toast("等待后台审核");
        return;
      }
      this.temp.user_id = this.userinfo.id;

      if (this.front[0] === undefined) {
        Toast("门店正面照片必须上传");
        return;
      }

      // if (this.license[0] === undefined) {
      //     Toast('营业执照必须上传');
      //     return
      // }
      if (this.license[0] === undefined) {
        this.temp.license = [];
      } else {
        this.temp.license = this.license[0].url;
      }
      this.temp.front = this.front[0].url;
      //   this.temp.license = this.license[0].url;

      var postFrom = {
        imglist: this.fileList,
        from: this.temp
      };
      this.temp.status = 1;
      PostDataAdd(postFrom).then(res => {
        console.log(res.code);
        if (res.code === 10001) {
          Toast(res.msg);
          this.temp.status = "";
        } else {
          this.$router.push("/addshop-data"); // 动态跳转
        }
      });
    },
    clickAnew() {
      this.showAnew = !this.showAnew;
    }
  },
  components: {
    Toptitle,
    Upload,
    Address
  },
  watch: {
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

<!--background url("https://kedand.oss-cn-beijing.aliyuncs.com/uploads/add.png")-->

<style lang="stylus" scoped>
.add-shop {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.user-info {
  padding: 1.35rem 0 0.6rem;
}

.user-avatar {
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
}

.user-avatar img {
  width: 100%;
  border-radius: 50%;
}

.user-name {
  text-align: center;
  margin-top: 5px;
  // color: #fff;
  font-size: 0.4rem;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
}

.special >>> .van-cell__title {
  flex: none;
  width: 90px;
}

.special >>> .van-cell__value {
  text-align: left;
}

.apply-info {
  padding-bottom: 3rem;

  .info-name {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    width: 9.15rem;

    .name-title {
      margin-top: 0.3rem;
      color: #333333;
      font-size: 0.4rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
    }

    .name-right {
      width: 7.55rem;

      .right-input {
        height: 1rem;
        line-height: 1rem;
        border-bottom: 1px solid #E1E1E1;
        display: flex;
        justify-content: space-between;

        input {
          width: 6rem;
          border: 0;
          background: none;
          color: #333333;
          font-size: 0.4rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          margin-left: 0.63rem;
        }

        input::-webkit-input-placeholder {
          opacity: 0.3;
          color: #999;
        }

        .hint-icon {
          width: 0.32rem;
          height: 0.32rem;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .right-hint {
        margin-left: 0.2rem;
        padding: 0.3rem 0;
        font-size: 0.27rem;
        color: #666666;
        font-family: Source Han Sans CN;
        font-weight: 400;
      }
    }
  }

  .info-location {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    width: 9.15rem;

    .location-title {
      color: #333333;
      font-size: 0.4rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      margin-top: 0.3rem;
    }

    .location-right {
      width: 7.55rem;

      .right-city {
        border-bottom: 1px solid #E1E1E1;
        height: 1rem;
        line-height: 1rem;
        display: flex;
        justify-content: space-between;

        .city-name {
          color: #333;
          margin-left: 0.63rem;
          font-size: 0.4rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
        }

        .city-icon {
          width: 0.3rem;
          height: 0.3rem;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .right-street {
        border-bottom: 1px solid #E1E1E1;
        height: 1rem;
        line-height: 1rem;

        input {
          width: 6.5rem;
          border: 0;
          background: none;
          line-height: 1rem;
          line-height: 1rem;
          font-size: 0.4rem;
          color: #333333;
          font-family: Source Han Sans CN;
          font-weight: 400;
          margin-left: 0.63rem;
        }

        input::-webkit-input-placeholder {
          opacity: 0.3;
          color: #999999;
        }
      }
    }
  }

  .info-contact {
    margin: 0.6rem auto 0.2rem;
    display: flex;
    justify-content: space-between;
    width: 9.15rem;

    .contact-title {
      color: #333333;
      font-size: 0.4rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      margin-top: 0.3rem;
    }

    .contact-right {
      width: 7.55rem;
      border-bottom: 1px solid #E1E1E1;
      height: 1rem;
      line-height: 1rem;

      input {
        width: 6.5rem;
        border: 0;
        background: none;
        line-height: 1rem;
        line-height: 1rem;
        font-size: 0.4rem;
        color: #333333;
        font-family: Source Han Sans CN;
        font-weight: 400;
        margin-left: 0.63rem;
      }

      input::-webkit-input-placeholder {
        opacity: 0.3;
        color: #999;
      }
    }
  }
}

.apply-info >>> .van-cell-group {
  background: transparent;
}

.apply-info >>> .van-cell {
  background: transparent;
}

.apply-info >>> .van-field__label, .apply-info >>> .van-cell__title {
  color: #e8e8e8;
}

.apply-info >>> .van-field__body input::placeholder, .apply-info >>> .van-cell__value, .apply-info >>> .van-field__body input, .special >>> .van-icon-arrow-down {
  color: #fff;
}

// 图片上传
.upload-pic {
  padding: 0 16px;
  margin: 20px 0;

  /deep/ .van-uploader__upload {
    width: 2.8rem;
    height: 2.8rem;
  }

  /deep/ .van-uploader__preview-image {
    width: 2.8rem;
    height: 2.8rem;
  }
}

.upload-pic p, .shop-font p, .shop-license p {
  margin: 4px 0 14px;
  font-size: 13px;
  font-size: 0.32rem;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
}

.shop-font-license {
  display: flex;
  padding-bottom: 20px;
}

.shop-font {
  /deep/ .van-uploader__upload {
    width: 4rem;
    height: 4rem;
  }

  /deep/ .van-uploader__preview-image {
    width: 4rem;
    height: 4rem;
  }
}

.shop-license {
  /deep/ .van-uploader__upload {
    width: 4rem;
    height: 4rem;
  }

  /deep/ .van-uploader__preview-image {
    width: 4rem;
    height: 4rem;
  }
}

.shop-font, .shop-license {
  margin-left: 16px;
}

.action-btn {
  display: flex;
  justify-content: space-between;
  width: 8.5rem;
  margin: 1rem auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  width: 8.5rem;
  margin: 1rem auto;
  position: fixed;
  bottom: 0;
  /* left: 5%; */
  margin-bottom: 0;
  background: #ffffff;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid #E4E7ED;
  width: 100%;
}

.confirm-btn {
  width: 3.89rem;
  height: 1.09rem;
  line-height: 1.09rem;
  text-align: center;
  background: rgba(248, 89, 17, 1);
  border-radius: 1rem;
  font-size: 0.4rem;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  margin-right: 5%;
  border: 1px solid rgba(248, 89, 17, 1);
}

.cancel-btn {
  width: 3.89rem;
  height: 1.09rem;
  line-height: 1.09rem;
  text-align: center;
  border: 1px solid rgba(248, 89, 17, 1);
  border-radius: 1rem;
  color: #F85911;
  font-size: 0.4rem;
  font-family: Source Han Sans CN;
  font-weight: 400;
  margin-left: 5%;
}

// 重新填写弹框
.anew {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;

  .anewBox {
    margin: 3rem auto;
    width: 8.83rem;
    height: 10.83rem;
    // border-radius: 0.4rem;
    overflow: hidden;
    // background: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;

    .an-top {
      width: 8.4rem;
      overflow: hidden;
      margin-top: 1.5rem;
      display: flex;
      margin-left: 20%;

      span {
        text-align: right;
        margin-top: 0.2rem;
        margin-right: 1rem;
        display: block;
        font-size: 0.71rem;
        font-weight: bold;
        color: #fff;
        text-align: left;
      }
    }

    .an-bottom {
      overflow: hidden;
      margin-top: 3rem;

      .title {
        text-align: center;
        color: #666666;
        font-size: 0.48rem;

        span {
          display: block;
        }

        .title-s {
          margin-top: 0.5rem;
        }

        .title-x {
          margin-top: 0.2rem;
          color: #E84671;
        }
      }

      .btnfill {
        width: 6.93rem;
        height: 1.17rem;
        line-height: 1.17rem;
        text-align: center;
        color: #E84071;
        font-size: 0.48rem;
        border: 1px solid rgba(232, 63, 113, 1);
        border-radius: 1rem;
        margin: 1rem auto 0;
      }

      .btntext {
        width: 6.93rem;
        height: 1.17rem;
        line-height: 1.17rem;
        text-align: center;
        color: #E84071;
        font-size: 0.48rem;
        border: 1px solid rgba(232, 63, 113, 1);
        border-radius: 1rem;
        margin: 1rem auto 0;
      }
    }
  }
}
</style>
