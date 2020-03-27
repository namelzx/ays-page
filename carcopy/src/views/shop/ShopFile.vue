<template>
  <div class="change-file">
    <div @click="toggleRetun">
      <Toptitle :title="title" />
    </div>
    <div class="md">
      <!-- <template> -->
      <div class="change-name" @click="togglePop('shopname',shopInfo.shopname,'店铺名称修')">
        <div class="na-title">门店名称</div>
        <div class="na-right">
          <div class="right-names">{{shopInfo.shopname}}</div>
          <div class="right-icon">
            <img src="../../assets/right-fx.png" />
          </div>
        </div>
      </div>

      <div class="change-name" @click="toggleAddr">
        <div class="na-title">门店地址</div>
        <div class="na-right">
          <div class="right-names">{{shopInfo.cityName}}</div>
          <div class="right-icon">
            <img src="../../assets/right-fx.png" />
          </div>
        </div>
      </div>

      <div class="change-name" @click="togglePop('location',shopInfo.location,'具体地址修改')">
        <div class="na-title"></div>
        <div class="na-right">
          <div class="right-names">{{shopInfo.location}}</div>
          <div class="right-icon">
            <img src="../../assets/right-fx.png" />
          </div>
        </div>
      </div>

      <div class="change-name" @click="togglePop('shopkeeper',shopInfo.shopkeeper,'联系人修改')">
        <div class="na-title">联系人</div>
        <div class="na-right">
          <div class="right-names">{{shopInfo.shopkeeper}}</div>
          <div class="right-icon">
            <img src="../../assets/right-fx.png" />
          </div>
        </div>
      </div>

      <div class="change-name" @click="togglePop('tel',shopInfo.tel,'修改手机输入')">
        <div class="na-title">联系电话</div>
        <div class="na-right">
          <div class="right-names">{{shopInfo.tel}}</div>
          <div class="right-icon">
            <img src="../../assets/right-fx.png" />
          </div>
        </div>
      </div>

      <div class="change-name" @click="togglePop('Introduction',shopInfo.Introduction,'店铺简介')">
        <div class="na-title">店铺简介</div>
        <div class="na-right">
          <div class="right-names">{{shopInfo.Introduction}}</div>
          <div class="right-icon">
            <img src="../../assets/right-fx.png" />
          </div>
        </div>
      </div>

      <div class="change-name" @click="togglePop('photo',shopInfo.photo,'店铺环境相片修改')">
        <div class="na-title">门店环境相片</div>
        <div class="na-right2">
          <div class="right-names">修改相片</div>
          <div class="right-icon">
            <img src="../../assets/right-fx.png" />
          </div>
        </div>
      </div>

      <div class="change-name" @click="togglePop('license',shopInfo.license,'店铺营业执照修改')">
        <div class="na-title">营业执照</div>
        <div class="na-right">
          <div class="right-names">修改相片</div>
          <div class="right-icon">
            <img src="../../assets/right-fx.png" />
          </div>
        </div>
      </div>
      <div class="change-name" @click="togglePop('front',shopInfo.front,'门店正面照片')">
        <div class="na-title">门店正面照</div>
        <div class="na-right">
          <div class="right-names">修改相片</div>
          <div class="right-icon">
            <img src="../../assets/right-fx.png" />
          </div>
        </div>
      </div>
    </div>
    <!--弹出层-->
    <van-popup v-model="showAddr" position="bottom">
      <van-area
        :area-list="areaList"
        :value="shopInfo.cityCode"
        @confirm="pickAddr"
        @cancel="toggleAddr"
      />
    </van-popup>
  </div>
</template>

<script>
import detail from "../../router/detail";
import areaList from "@/assets/js/area.js";
import Toptitle from "@/components/Toptitle/Toptitle";
import { PostDataByfield } from "@/api/shop";

import { mapGetters } from "vuex";

export default {
  name: "ShopFlie",

  data() {
    return {
      title: "店铺管理",
      showAddr: false,
      areaList,
      citylist: [],
      cityName: "广东省广州市白云区",
      shopInfo: {
        name: "阿帕车灯（凯斯店）",
        addrDetail: "请输入具体地址",
        user: "周某某",
        phone: "15878030909",
        desc: "啊打上句号九大世界黑压",
        photo: "修改相片",
        license: "修改相片"
      }
    };
  },
  computed: {
    ...mapGetters(["sele_shop"])
  },
  created() {
    this.shopInfo = this.sele_shop;
    console.log(this.shopInfo);
    if (this.$route.query.datas !== undefined) {
      let name = this.$route.query.datas.curPop;
      let datas = this.$route.query.datas.datas;
      this.shopInfo[name] = datas;

      var temp = {
        value: datas,
        field: name,
        id: this.sele_shop.id
      };
      PostDataByfield(temp).then(res => {});
      this.$store.dispatch("shop/setShop", this.shopInfo);
    } else {
      console.log("没有进来");
    }
  },

  methods: {
    toggleRetun() {
      this.$router.push("/shop/business"); //返回上一层
    },
    togglePop(e, detail, ti) {
      let curPop = e;
      let curValue = detail;
      let title = ti;
      this.$router.push({
        path: "/manage-shop-input",
        query: { curPop: curPop, detail: curValue, title: ti }
      });
    },
    toggleAddr() {
      this.showAddr = !this.showAddr;
    },
    pickAddr(e) {
      console.log(e);
      let datas = e;
      let result = [];

      datas.map((item, index) => {
        // console.log(item, index);
        this.shopInfo.cityCode = item.code;
        result.push(item.name);
      });

      var temp = {
        value: this.shopInfo.cityCode,
        field: "cityCode",
        id: this.sele_shop.id
      };
      PostDataByfield(temp).then(res => {});
      this.shopInfo.cityName = result.join("-");
      var temp = {
        value: this.shopInfo.cityName,
        field: "cityName",
        id: this.sele_shop.id
      };
      PostDataByfield(temp).then(res => {});

      this.$store.dispatch("shop/setShop", this.shopInfo);

      this.toggleAddr();
    }
  },
  components: {
    Toptitle
  }
};
</script>

<style lang="stylus" scoped>
.md {
  margin-top: 1rem;
}

.change-name {
  margin: 0 auto;
  width: 10rem;
  display: flex;
  justify-content: space-between;
  height: 1.21rem;
  line-height: 1.21rem;
  border-bottom: 1px solid rgba(225, 225, 225, 1);

  .na-title {
    color: #000000;
    font-size: 0.4rem;
    margin-left: 0.35rem;
  }

  .na-right {
    margin-right: 0.35rem;
    color: #adadad;
    font-size: 0.4rem;
    width: 7.24rem;
    display: flex;
    justify-content: flex-end;

    .right-names {
      width: 6rem;
      height: 1.21rem;
      line-height: 1.21rem;
      text-align: right;
      margin-right: 0.3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .right-icon {
      width: 0.3rem;
      height: 0.3rem;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .na-right2 {
    margin-right: 0.35rem;
    color: #adadad;
    font-size: 0.4rem;
    width: 6.61rem;
    display: flex;
    justify-content: flex-end;

    .right-names {
      width: 6rem;
      height: 1.21rem;
      line-height: 1.21rem;
      text-align: right;
      margin-right: 0.3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .right-icon {
      width: 0.3rem;
      height: 0.3rem;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
