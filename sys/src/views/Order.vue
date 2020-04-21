<template>
  <div class="Order">
    <div class="OrderHe">
      <!-- 搜索框  -->
      <div class="Da-search">
        <div class="search-tabs">
          <div
            class="tabs-name"
            @click="toggleBar(index)"
            :class="{active:index==Tinum}"
            v-for="(item,index) in bars"
            :key="index"
          >{{item}}</div>
        </div>
        <div class="searchBox" v-if="Tinum===0">
          <div class="int" @click="toggleHistory">输入关键词搜索</div>
        </div>

        <div class="inpmark" v-else>
          <div class="inpmark_warp" @click="togglemark">输入关键词搜索</div>
          <div class="Tabslist">
            <div class="TabslistBox">
              <div
                class="tab-btn"
                v-for="(item,index) in marklist"
                :key="index"
                :class="{active:index==offnum}"
                @click="toggleTaboffnum(index)"
              >{{item.tabname}}</div>
            </div>
          </div>
        </div>
      </div>

      <!--  tab栏  安装单内容  -->
      <div class="Tabs" v-if="Tinum===0">
        <div class="Tabslist">
          <div class="tab-class"></div>
          <van-tabs
            v-model="num"
            color="#333333"
            :swipe-threshold="5"
            line-height="4px"
            :border="false"
            title-active-color="#333333"
            :ellipsis="false"
            title-inactive-color="#666666"
          >
            <van-tab v-for="(item,index) in tabs" :title="item.tabname"></van-tab>
          </van-tabs>
        </div>
        <!--  tab内容  -->
        <div class="taborder">
          <Orderlist :orderlist="orderlist" @handelist="getlist()" :num="num" />
        </div>
      </div>

      <!-- 营销单内容 -->
      <div class="marketing" v-if="Tinum===1">
        <Offorderlist :orderlist="Offorderlist" :num="offnum" />
      </div>
    </div>

    <!-- 提交按钮 -->
    <div class="or_submit" @click="headSubit">添加</div>

    <Tabbar />
  </div>
</template>
<script>
import Tabbar from "@/components/Tabbar";
import Orderlist from "@/components/Orderlist";
import Offorderlist from "@/components/Offorderlist";

import { Toast } from "vant";

import { getUser, removeUser, setUser } from "@/utils/auth";

import { GetDataByList } from "@/api/order";
import { getInfo, login } from "@/api/user";

import { mapGetters } from "vuex";
/* 订单状态   1待处理  2.待安装  3.已安装  4.已评价  */
export default {
  name: "Order",
  data() {
    return {
      num: 0, //tab栏
      Tinum: 0, //安装单，营销单
      offnum: 0, //营销单栏目
      show_tabs: false,
      bars: [
        // '安装单',
        // '营销单'
      ],
      listQuery: {
        limit: 20,
        page: 1,
        shop_id: undefined
      },
      tabs: [
        { tabname: "全部" },
        { tabname: "待处理" },
        { tabname: "待安装" },
        { tabname: "已安装" },
        { tabname: "已评价" }
      ],
      orderlist: [],
      marklist: [
        { tabname: "全部" },
        { tabname: "待核销" },
        { tabname: "已核销" },
        { tabname: "已评价" },
        { tabname: "已退款" }
      ],
      Offorderlist: []
    };
  },
  components: {
    Tabbar,
    Orderlist,
    Offorderlist
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    getlist() {
        this.listQuery.openid=this.userInfo.openid
        // console.log(this.userInfo)
      GetDataByList(this.listQuery).then(res => {
        if (res) {
          if (res.code === 20000) {
            this.orderlist = res.data.data;
          }
        }
      });
    },
    //安装单搜索
    toggleHistory() {
      this.$router.push("/order/ordersou");
    },
    //营销单搜索
    togglemark() {
      this.$router.push({ path: "/order/offordersou" });
    },
    tabsShow() {
      this.show_tabs = !this.show_tabs;
    },
    acviteClick(index) {
      this.show_tabs = !this.show_tabs;
      this.num = index;
    },
    toggleBar(index) {
      if (index === 1) {
        Toast("此板块暂未开放");
        return true;
      }
      this.Tinum = index;
      console.log(index);
    },
    toggleTab(index) {
      this.num = index;
    },
    toggleTaboffnum(index) {
      this.offnum = index;
    },
    toggleTab(index) {
      this.num = index;
    },
    //添加
    headSubit() {
      this.$router.push({ path: "/install" });
    }
  },
  watch: {
    num: function(e) {
      console.log(e);
      this.listQuery.status = e;
      this.getlist();
    }
  },
  created() {
    this.listQuery.openid =
      this.userInfo.openid === undefined ? "kong" : this.userInfo.openid;
    // if (this.listQuery.openid === 'kong') {
    //     this.$router.push('/login'); // 动态跳转
    // }
    // if (this.userInfo.tel === '') {
    //     this.$router.push('/login'); // 动态跳转
    // }
    console.log(this.$route.params.id);
    getInfo(this.$route.params.id).then(res => {
      this.listQuery.openid = res.data.openid;
      this.getlist();
    });
    this.getlist();
    if (this.$route.query.num == 1) {
      this.num = this.$route.query.num;
    }
  }
};
</script>
<style lang="scss" scoped>
.OrderHe {
  .Da-search {
    background: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-bottom: 0.2rem;
    z-index: 10;
    .search-tabs {
      font-size: 0.32rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      width: 3rem;
      display: flex;
      justify-content: space-between;
      margin: 0.1rem auto 0.6rem;
      .tabs-name {
        color: #999999;
        width: 1.3rem;
        text-align: center;
      }
      .tabs-name.active {
        color: #333333;
        position: relative;
      }
      .tabs-name.active:before {
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        top: 0.6rem;
        width: 100%;
        height: 1px;
        border-radius: 0.2rem;
        background: #333;
      }
    }
    .searchBox {
      width: 9.15rem;
      margin: 0 auto;
      align-items: center;
      .int {
        width: 9.15rem;
        height: 0.83rem;
        line-height: 0.83rem;
        text-align: center;
        background: rgba(241, 241, 241, 1);
        border-radius: 0.41rem;
        font-size: 0.4rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }
    }
    .inpmark {
      position: fixed;
      left: 0;
      right: 0;
      top: 1.5rem;
      padding-bottom: 0.3rem;
      background: #ffffff;
      .inpmark_warp {
        margin: 0 auto;
        width: 9.15rem;
        height: 0.83rem;
        line-height: 0.83rem;
        text-align: center;
        background: rgba(241, 241, 241, 1);
        border-radius: 0.41rem;
        font-size: 0.4rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }
      .Tabslist {
        width: 10rem;
        vertical-align: bottom !important;
        .TabslistBox {
          margin: 0 auto;
          width: 9.15rem;
          display: flex;
          justify-content: space-between;
          height: 1.2rem;
          line-height: 1.2rem;
          position: relative;
          .tab-btn {
            font-size: 0.4rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #999999;
          }
          .tab-btn.active {
            color: #333333;
            font-size: 0.48rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            position: relative;
          }
          .tab-btn.active:before {
            position: absolute;
            content: "";
            left: 0;
            right: 0;
            top: 1rem;
            width: 100%;
            height: 2px;
            border-radius: 0.2rem;
            background: #333;
          }
        }
      }
    }
  }
  .Tabs {
    width: 9.15rem;
    .Tabslist {
      position: fixed;
      width: 10rem;
      background-color: #ffffff;
      top: 1.5rem;
      vertical-align: bottom !important;
      z-index: 10;

      /deep/ .van-tabs--line .van-tabs__wrap {
        border: 0;
      }
      /deep/ .van-tab {
        font-size: 0.4rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
      }
      /deep/ .van-tab--active {
        font-size: 0.48rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
      }
    }
    .taborder {
      margin-top: 2.5rem;
    }
  }
  .marketing {
    margin-top: 3.5rem;
    padding-bottom: 1.5rem;
  }
}
.or_submit {
  position: fixed;
  right: 0.3rem;
  bottom: 10%;
  width: 1rem;
  height: 1rem;
  line-height: 1rem;

  border-radius: 70%;
  text-align: center;
  background: #e9375b;
  color: #ffffff;
}
</style>
