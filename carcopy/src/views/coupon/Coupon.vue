<template>
  <div class="coupon">
    <div @click="toggleRetun">
      <Toptitle :title="title" />
    </div>
    <!-- 选项卡  -->
    <!-- <div class="tabbar">
      <div
        :class="['tabbar-name',curIndex===index?'tabbar-avcite':'']"
        v-for="(item,index) in tabbar"
        :key="index"
        @click="tabbarBtn(index)"
      >{{item.name}}</div>
    </div>-->

    <!-- 选项卡内容  -->
    <!-- <div class="tabrlist">
      <div v-for="(item,index) in tabbar" :key="index" v-if="curIndex===index">
        <div class="list" v-for="(list,index) in item.list" :key="index" @click="toggleDetials(index)">
          <div class="listBox">
            <div class="list-money">
              <div class="money-num">
                <span>￥</span>
                <span class="num-figure">{{list.money}}</span>
              </div>
              <div class="money-title">{{list.astrict}}</div>
            </div>
            <div class="list-desc">
              说明：
              <span>{{list.desc}}</span>
            </div>
            <div class="list-valid">有效期2019.11.1 00:00-2019.11.1 23:59</div>


            <div class="list-sign" v-if="list.employ===1">
                <img src="../../assets/sign.png" />
            </div>
            <div class="list-sign-no" v-if="list.employ===2">
                <img src="../../assets/sign-no.png" />
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <div class="tabs">
      <div
        class="tabs-name"
        :class="{active: curIndex === index}"
        @click="changeBar(index)"
        v-for="(item,index) in tabs"
        :key="index"
      >{{item}}</div>
    </div>
    <div class="tabs-list" v-for="(item,index) in list">
      <div class="list-warp" v-if="curIndex===item.status">
        <div class="warp-bank" @click="toggleDetials(index)">
          <div class="bank-box">
            <div class="box-full">
              <div class="full-name">{{item.title}}</div>
              <div class="full-icon">
                <img src="@/assets/right-fx.png" />
              </div>
            </div>
            <div class="box-details">
              <div class="details-left">
                <div class="left-title">{{item.name}}</div>
                <div class="left-condition">说明：{{item.explain}}</div>
                <div class="left-time">有效期：{{item.time}}</div>
              </div>
              <div class="details-right">
                <div class="right-price">
                  <span>￥</span>
                  <span class="price-num">{{item.money}}</span>
                </div>
                <div class="right-name">{{item.condition}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="list-warp" v-if="curIndex===item.all">
        <div class="warp-bank" @click="toggleDetials(index)">
          <div class="bank-box">
            <div class="box-full">
              <div class="full-name">{{item.title}}</div>
              <div class="full-icon">
                <img src="@/assets/right-fx.png" />
              </div>
            </div>
            <div class="box-details">
              <div class="details-left">
                <div class="left-title">{{item.name}}</div>
                <div class="left-condition">说明：{{item.explain}}</div>
                <div class="left-time">有效期：{{item.time}}</div>
              </div>
              <div class="details-right">
                <div class="right-price">
                  <span>￥</span>
                  <span class="price-num">{{item.money}}</span>
                </div>
                <div class="right-name">{{item.condition}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
  /*employ 0默认未使用  1已使用  2已过期  */
  name: "Coupon",
  data() {
    return {
      title: "优惠券",
      tabs:['全部','待使用','已使用','已过期'],
      curIndex:0,
      list:[
        {
          id:1,
          title:'待使用',
          name:'无金额限制',
          explain:'此优惠券为单品使用，只能 使用一次，不可叠加',
          time:'2019.11.11',
          money:400,
          condition:'满1699使用',
          status:1,
          all:0
        },
        {
          id:2,
          title:'已使用',
          name:'无金额限制',
          explain:'此优惠券为单品使用，只能 使用一次，不可叠加',
          time:'2019.11.11',
          money:400,
          condition:'满1699使用',
          status:2,
          all:0
        },
        {
          id:3,
          title:'已过期',
          name:'无金额限制',
          explain:'此优惠券为单品使用，只能 使用一次，不可叠加',
          time:'2019.11.11',
          money:400,
          condition:'满1699使用',
          status:3,
          all:0
        }
      ]
    };
  },
  components: {
    Toptitle
  },
  methods: {
    toggleRetun() {
      this.$router.go(-1); //返回上一层
    },
    changeBar(idx) {
        this.curIndex = idx;
    },
    toggleDetials(idx) {
      this.$router.push({ path: "/coupon/coupondetails", query: { id: idx } });
    }
  }
};
</script>
<style lang="stylus" scoped>
.coupon {
  margin-top 1.2rem
  .tabs {
    display: flex;
    width: 9.15rem;
    margin: 0 auto;
    height: 1.04rem;
    line-height: 1.04rem;

    .tabs-name {
      margin-right: 0.56rem;
      font-size: 0.35rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #666666;
    }

    .tabs-name.active {
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(51,51,51,1);
    }
  }

  .tabs-list {
    margin-top: 0.2rem;
    margin-left: 0.43rem;
    .list-warp {
      display: flex;
      align-items: center;



      .warp-bank {
        width: 9.15rem;
        height: 3.84rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0rem 0rem 0.13rem 0.1rem rgba(234, 234, 234, 0.3);
        border-radius: 0.13rem;
        margin-bottom: 0.4rem;

        .bank-box {
          margin: 0.27rem 0.29rem;

          .box-full {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .full-name {
              width: 1.53rem;
              height: 0.69rem;
              line-height: 0.69rem;
              text-align: center;
              font-size: 0.32rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              background: rgba(255, 244, 230, 1);
              border-radius: 0.13rem;
              color: #EA3756;
            }

            .full-icon {
              width: 0.3rem;
              height: 0.3rem;

              img {
                width: 100%;
                height: 100%;
              }
            }
          }

          .box-details {
            margin-top: 0.27rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 2.35rem;
            border-radius: 0.13rem;
            background: #faf7fa;

            .details-left {
              margin: 0.41rem 0;
              width: 5.01rem;
              margin-left: 0.55rem;

              .left-title {
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #333333;
                margin-bottom: 0.25rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }

              .left-condition {
                color: #333333;
                font-size: 0.32rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                margin-bottom: 0.25rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }

              .left-time {
                color: #666666;
                font-size: 0.32rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
              }
            }

            .details-right {
              background: #FFF4E6;
              width: 2.95rem;
              text-align: center;
              height: 2.35rem;
              align-items: center;

              .right-price {
                color: #EA3756;
                margin-top: 0.7rem;
                font-size: 0.27rem;
                font-family: Source Han Sans CN;
                font-weight: 400;

                .price-num {
                  font-size: 0.64rem;
                }
              }

              .right-name {
                font-size: 0.32rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #EA3756;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
  }
}
</style>
