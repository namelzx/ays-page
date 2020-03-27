<template>
  <div class="product">
    <div @click="toggleRetun" style=background:#fff>
      <Toptitle :title="title" />
    </div>
    <div class="product-warp">
      <div class="warp-head">
        <div class="head-imgs">
          <img src="@/assets/tuwen.png" />
        </div>
        <div class="head-content">
          <div class="content-title">
            <span v-if="subscript===1">待核销</span>
            <span v-if="subscript===2">已核销</span>
            <span v-if="subscript===3">已退货</span>
          </div>
          <div class="content-name">
            <span>张三</span>
            <span>13755555555</span>
          </div>
          <div class="content-name">本田 飞度 2018款天窗版1.5L</div>
        </div>
      </div>
      <!-- 产品信息 -->
      <div class="warp-message">
        <div class="message-title">欧大师车灯升级</div>
        <div class="message-desc">
          <div class="desc-imgs">
            <img src="@/assets/tuwen.png" />
          </div>
          <div class="desc-details">
            <div class="details-title">欧司朗CBN套装 采用德国光源</div>
            <div class="details-contens">本田2016款飞度1.5L天窗版本田2016款 度1.5L天窗版</div>
            <div class="details-price">
              <div class="price-nums">
                  <span>¥</span>
                  <span class="nums-money">1200</span>
                  </div>
              <div class="price-count">X1</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 订单信息 -->
      <div class="warp-order">
          <div class="order-title">订单信息</div>
          <div class="order-mes">
              <span class="mes-title">订单号：</span>
              <span class="mes-num">666</span>
          </div>
          <div class="order-mes">
              <span class="mes-title">微信单号：</span>
              <span class="mes-num">123456789</span>
          </div>
          <div class="order-mes">
              <span class="mes-title">下单日期：</span>
              <span class="mes-num">2019.11.11</span>
          </div>
      </div>
      <!-- 车主评价 -->
      <div class="warp-car" v-if="subscript===2">
          <div class="car-title">车主评价</div>
          <!-- 评分数 -->
          <div class="car-grade">
              <!--  头部信息  -->
              <div class="grade-head">
                  <div class="head-imgs"><img src="@/assets/tuwen.png" /></div>
                  <div class="head-name">用户名称001</div>
              </div>
              <!-- 评分 -->
              <div class="grade-rate">
                <van-rate v-model="value" readonly color="#FF5861" void-color="#eee" />
                <div class="rate-num">{{value}}分</div>
              </div>
          </div>
          <!-- 评价 -->
          <div class="car-desc">好，很好，非常好，好得很呢！好，很好，非常好，好得很呢！好，很好，非常好，好得很呢！好，很好，非常好，好得很呢！好，很好，非常好，好得很呢！</div>
          <!-- 图片 -->
          <div class="car-imgs">
            <div class="imgs-list"><img src="@/assets/tuwen.png" /></div>
            <div class="imgs-list"><img src="@/assets/tuwen.png" /></div>
            <div class="imgs-list"><img src="@/assets/tuwen.png" /></div>
          </div>
      </div>

      <!-- 核销 -->
      <!-- <div class="warp-cancel" @click="toggleOffrder" v-if="subscript===1">核销</div> -->
    </div>
  </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
  name: "Product",
  data() {
    return {
      title: "产品详情",
      value: 4,
      subscript:this.$route.query.index
    };
  },
  methods: {
    toggleRetun() {
      this.$router.go(-1);//返回上一层
    },
    toggleOffrder() {
      this.$router.go(-1);
    }
  },
  components: {
    Toptitle
  }
};
</script>
<style lang="scss" scoped>
.product {
  position: fixed;
  overflow: auto;
  height: 100%;
  background: #f7f8fa;
  width: 100%;

  .warp-head {
    background: #ffffff;
    padding: 0.36rem 0;
    display: flex;
    border-radius: 0 0 0.3rem 0.3rem;

    .head-imgs {
      width: 2.11rem;
      height: 2.11rem;
      border-radius: 50%;
      overflow: hidden;
      margin-left: 1.33rem;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .head-content {
      margin-left: 0.68rem;

      .content-title {
        font-size: 0.64rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #333333;
      }

      .content-name {
        font-size: 0.32rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #333333;
        margin-top: 0.25rem;
        width: 5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        span {
          margin-right: 0.2rem;
        }
      }
    }
  }

  .warp-message {
    margin-top: 0.32rem;
    background: #ffffff;
    padding: 0.36rem 0;
    border-radius: 0.3rem;

    .message-title {
      margin-bottom: 0.39rem;
      margin-left: 0.43rem;
      font-size: 0.4rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #333333;
      width: 8.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .message-desc {
      display: flex;
      margin-left: 0.43rem;

      .desc-imgs {
        width: 2.51rem;
        height: 2.51rem;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .desc-details {
        margin-left: 0.4rem;
        width: 5.6rem;

        .details-title {
          font-size: 0.37rem;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #333333;
          margin-bottom: 0.32rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .details-contens {
          font-size: 0.32rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #999999;
          margin-bottom: .4rem;
          display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        }
        .details-price{
            display: flex;
            .price-nums{
                font-size:0.32rem;
                font-family:Source Han Sans CN;
                font-weight:500;
                color: #EA3756;
                margin-right: .33rem;
                span{
                    display: inline-block;
                }
                .nums-money{
                    font-size: .6rem;
                    font-weight: bold;
                }
            }
            .price-count{
                font-size:0.27rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color: #666666;
                margin-top: .25rem;
            }
        }
      }
    }
  }
  .warp-order{
      margin-top: 0.32rem;
    background: #ffffff;
    padding: 0.36rem 0;
    border-radius: 0.3rem;
    .order-title{
        margin-left: .45rem;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:500;
        color: #333333;
    }
    .order-mes{
        margin-left: .45rem;
        margin-top: .27rem;
        font-size:0.32rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color: #666666;
        span{
            display: inline-block;
        }
        .mes-title{
            width: 1.6rem;
        }
        .mes-num{
            margin-left: .1rem;
            color: #333333;
        }
    }
  }
  .warp-car{
      margin-top: 0.32rem;
    background: #ffffff;
    padding: 0.36rem 0;
    border-radius: 0.3rem;
    margin-bottom: .3rem;
    .car-title{
        margin-left: .45rem;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:500;
        color: #333333;
    }
    .car-grade{
        display: flex;
        justify-content: space-between;
        width: 9.25rem;
        margin: 0.37rem auto;
        align-items: center;
        .grade-head{
            display: flex;
            .head-imgs{
                width: 0.77rem;
                height: 0.77rem;
                border-radius: 50%;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .head-name{
                color: #333333;
                font-size:0.4rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                margin-left: 0.29rem;
                width: 2.5rem;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                margin-top: .15rem;
            }
        }
        .grade-rate{
          display: flex;
          /deep/ .van-rate__icon{
            font-size: 0.4rem;
          }
          .rate-num{
            color: #FF5861;
            font-size:0.32rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            margin-left: .2rem;
          }
        }
        
    }
    .car-desc{
      margin: 0 auto;
      width: 9.1rem;
      font-size:0.35rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color: #333333;
      line-height: .41rem;
    }
    .car-imgs{
      display: flex;
      width: 9.1rem;
      margin: 0.37rem auto 0;
      .imgs-list{
        width:2.77rem;
        height:2.77rem;
        margin-right: 0.35rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .imgs-list:nth-child(3){
        margin-right: 0;
      }
    }
  }
  .warp-cancel{
    margin: 0 auto;
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    width:9.01rem;
    height:1.09rem;
    line-height: 1.09rem;
    text-align: center;
    color: #ffffff;
    font-size:0.4rem;
    font-family:Source Han Sans CN;
    font-weight:400;
    background:rgba(234,55,86,1);
    border-radius:1rem;
  }
}
</style>