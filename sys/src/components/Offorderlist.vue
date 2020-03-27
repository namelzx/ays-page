<template>
  <div class="orderlist">

    <div class="list" v-for="(item,index) in orderlist" :key="index"  v-if="num===item.all">
      <!-- 待核销  -->
      <div class="cancel" v-if="item.progress==1" @click="toggleProduct(1)">
        <div class="cancel-title">
          <div class="title-name">欧大师车灯升级</div>
          <div class="title-status">待核销</div>
        </div>
        <div class="cancel-content">
          <div class="content-imgs">
            <img src="@/assets/mortgage-img.png" />
          </div>
          <div class="content-details">
            <div class="details-title">欧司朗CBN套装  采用德国光源</div>
            <div class="details-desc">本田2016款飞度1.5L</div>
            <div class="details-price">
              <div class="price-left">
                <div class="left-un">
                  <span class="un-dw">¥</span>
                  <span class="un-num">2680</span>
                </div>
                <div class="left-nums">
                  <span>X</span>
                  <span>1</span>
                </div>
              </div>
              <div class="price-btn" @click.stop="proceed">核销</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 已核销  -->
      <div class="cancel" v-if="item.progress==2" @click="toggleProduct(2)">
        <div class="cancel-title">
          <div class="title-name">欧大师车灯升级</div>
          <div class="title-status">已核销</div>
        </div>
        <div class="cancel-content">
          <div class="content-imgs">
            <img src="@/assets/mortgage-img.png" />
          </div>
          <div class="content-details">
            <div class="details-title">欧司朗CBN套装  采用德国光源</div>
            <div class="details-desc">本田2016款飞度1.5L</div>
            <div class="details-price">
              <div class="price-left">
                <div class="left-un">
                  <span class="un-dw">¥</span>
                  <span class="un-num">2680</span>
                </div>
                <div class="left-nums">
                  <span>X</span>
                  <span>1</span>
                </div>
              </div>
              <div class="price-btn" @click.stop="Prepared">评价</div>
            </div>
          </div>
        </div>
      </div>
      <!--  已评价  -->
      <div v-if="item.progress==3" @click="toggleProduct(3)">
        <div class="cancel">
          <div class="cancel-title">
            <div class="title-name">欧大师车灯升级</div>
            <div class="title-status">已评价</div>
          </div>
          <div class="cancel-content">
            <div class="content-imgs">
              <img src="@/assets/mortgage-img.png" />
            </div>
            <div class="content-details">
              <div class="details-title">欧司朗CBN套装  采用德国光源</div>
              <div class="details-desc">本田2016款飞度1.5L天窗版本田2016款 度1.5L天窗版</div>
              <div class="details-price">
                <div class="price-left">
                  <div class="left-un">
                    <span class="un-dw">¥</span>
                    <span class="un-num">2680</span>
                  </div>
                  <div class="left-nums">
                    <span>X</span>
                    <span>1</span>
                  </div>
                </div>
                <div :class='[evaluateCom===true && curRate===index?"price-btn":"price-ash"]' @click.stop="evaluate(index)">评价</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 评价内容  -->
          <div class="discuss" v-if="curRate===index && evaluateCom">
            <div class="discussHe">
              <div class="discussBox">
                <div class="minute">
                  <van-rate
                    class="score-fen"
                    readonly
                    v-model="value"
                    :gutter="15"
                    allow-half
                    color="#FF5861"
                    :count="5"
                  />
                  <div class="minute-nums">{{value}}分</div>
                </div>
                <div
                  class="details"
                >买了小四有一个月了，总体来说都比较满意，唯一的遗憾就是灯光不是很给力，毕竟刚提车也不久，还不舍得拆大灯，就一直忍着。直到前几天晚上回家，因为对向车道车，因为对向车道车，因为对向车道车，因为对向车道车，因为对向车道车，因为对向车道车，因为对向车道车，因为对向车道车</div>
                <div class="minImg">
                  <div class="Imgs-list">
                    <img src="@/assets/tuwen.png" />
                  </div>
                  <div class="Imgs-list">
                    <img src="@/assets/tuwen.png" />
                  </div>
                  <div class="Imgs-list">
                    <img src="@/assets/tuwen.png" />
                  </div>
                </div>
              </div>
            </div>
            <!-- 装饰三角  -->
            <div class="sanjiao">
              <img src="@/assets/sanjiao.png" />
            </div>
          </div>
      </div>
      <!-- 已退款 -->
      <div v-if="item.progress==4" @click="toggleProduct(4)">
        <div class="cancel">
          <div class="cancel-title">
            <div class="title-name">欧大师车灯升级</div>
            <div class="title-status">已退款</div>
          </div>
          <div class="cancel-content">
            <div class="content-imgs">
              <img src="@/assets/mortgage-img.png" />
            </div>
            <div class="content-details">
              <div class="details-title">欧司朗CBN套装  采用德国光源</div>
              <div class="details-desc">本田2016款飞度1.5L天窗版本田2016款 度1.5L天窗版</div>
              <div class="details-price">
                <div class="price-left">
                  <div class="left-un">
                    <span class="un-dw">¥</span>
                    <span class="un-num">2680</span>
                  </div>
                  <div class="left-nums">
                    <span>X</span>
                    <span>1</span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="list" v-for="(item,index) in orderlist" :key="index"  v-if="num===item.progress">
      <!-- 待核销  -->
      <div class="cancel" v-if="item.progress==1" @click="toggleProduct(1)">
        <div class="cancel-title">
          <div class="title-name">欧大师车灯升级</div>
          <div class="title-status">待核销</div>
        </div>
        <div class="cancel-content">
          <div class="content-imgs">
            <img src="@/assets/mortgage-img.png" />
          </div>
          <div class="content-details">
            <div class="details-title">欧司朗CBN套装  采用德国光源</div>
            <div class="details-desc">本田2016款飞度1.5L</div>
            <div class="details-price">
              <div class="price-left">
                <div class="left-un">
                  <span class="un-dw">¥</span>
                  <span class="un-num">2680</span>
                </div>
                <div class="left-nums">
                  <span>X</span>
                  <span>1</span>
                </div>
              </div>
              <div class="price-btn" @click.stop="proceed">核销</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 已核销  -->
      <div class="cancel" v-if="item.progress==2" @click="toggleProduct(2)">
        <div class="cancel-title">
          <div class="title-name">欧大师车灯升级</div>
          <div class="title-status">已核销</div>
        </div>
        <div class="cancel-content">
          <div class="content-imgs">
            <img src="@/assets/mortgage-img.png" />
          </div>
          <div class="content-details">
            <div class="details-title">欧司朗CBN套装  采用德国光源</div>
            <div class="details-desc">本田2016款飞度1.5L</div>
            <div class="details-price">
              <div class="price-left">
                <div class="left-un">
                  <span class="un-dw">¥</span>
                  <span class="un-num">2680</span>
                </div>
                <div class="left-nums">
                  <span>X</span>
                  <span>1</span>
                </div>
              </div>
              <div class="price-btn" @click.stop="Prepared">评价</div>
            </div>
          </div>
        </div>
      </div>
      <!--  已评价  -->
      <div v-if="item.progress==3" @click="toggleProduct(3)">
        <div class="cancel">
          <div class="cancel-title">
            <div class="title-name">欧大师车灯升级</div>
            <div class="title-status">已评价</div>
          </div>
          <div class="cancel-content">
            <div class="content-imgs">
              <img src="@/assets/mortgage-img.png" />
            </div>
            <div class="content-details">
              <div class="details-title">欧司朗CBN套装  采用德国光源</div>
              <div class="details-desc">本田2016款飞度1.5L天窗版本田2016款 度1.5L天窗版</div>
              <div class="details-price">
                <div class="price-left">
                  <div class="left-un">
                    <span class="un-dw">¥</span>
                    <span class="un-num">2680</span>
                  </div>
                  <div class="left-nums">
                    <span>X</span>
                    <span>1</span>
                  </div>
                </div>
                <div :class='[evaluateCom===true && curRate===index?"price-btn":"price-ash"]' @click.stop="evaluate(index)">评价</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 评价内容  -->
          <div class="discuss" v-if="curRate===index && evaluateCom">
            <div class="discussHe">
              <div class="discussBox">
                <div class="minute">
                  <van-rate
                    class="score-fen"
                    readonly
                    v-model="value"
                    :gutter="15"
                    allow-half
                    color="#FF5861"
                    :count="5"
                  />
                  <div class="minute-nums">{{value}}分</div>
                </div>
                <div
                  class="details"
                >买了小四有一个月了，总体来说都比较满意，唯一的遗憾就是灯光不是很给力，毕竟刚提车也不久，还不舍得拆大灯，就一直忍着。直到前几天晚上回家，因为对向车道车，因为对向车道车，因为对向车道车，因为对向车道车，因为对向车道车，因为对向车道车，因为对向车道车，因为对向车道车</div>
                <div class="minImg">
                  <div class="Imgs-list">
                    <img src="@/assets/tuwen.png" />
                  </div>
                  <div class="Imgs-list">
                    <img src="@/assets/tuwen.png" />
                  </div>
                  <div class="Imgs-list">
                    <img src="@/assets/tuwen.png" />
                  </div>
                </div>
              </div>
            </div>
            <!-- 装饰三角  -->
            <div class="sanjiao">
              <img src="@/assets/sanjiao.png" />
            </div>
          </div>
      </div>
      <!-- 已退款 -->
      <div v-if="item.progress==4" @click="toggleProduct(4)">
        <div class="cancel">
          <div class="cancel-title">
            <div class="title-name">欧大师车灯升级</div>
            <div class="title-status">已退款</div>
          </div>
          <div class="cancel-content">
            <div class="content-imgs">
              <img src="@/assets/mortgage-img.png" />
            </div>
            <div class="content-details">
              <div class="details-title">欧司朗CBN套装  采用德国光源</div>
              <div class="details-desc">本田2016款飞度1.5L天窗版本田2016款 度1.5L天窗版</div>
              <div class="details-price">
                <div class="price-left">
                  <div class="left-un">
                    <span class="un-dw">¥</span>
                    <span class="un-num">2680</span>
                  </div>
                  <div class="left-nums">
                    <span>X</span>
                    <span>1</span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  订单退款  -->
    <div class="orderRefund" v-if="refund" @touchmove.prevent>
      <div class="RefundHe">
        <div class="RefundHeBox">
          <div class="title">退款原因</div>
          <div class="selects">
            <Select v-model="model1" style="width:6rem">
              <Option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
              >{{ item.label }}</Option>
            </Select>
            <div class="Hebao-btn">
              <span class="cancel" @click="orcancel">取消</span>
              <span class="oks" @click="oksBtn">确定退款</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 输入核销码  -->

    <div class="orderCode" v-if="cancel" @touchmove.prevent>
      <div class="CodeHe">
        <div class="Co-title">订单核销码</div>
        <div class="Co-number">134646446</div>
        <div class="Co-scan">
          <img src="@/assets/code.png" />
        </div>
        <div class="Co-remind">
          <img src="@/assets/remind.png" />
          <span>提供核销码即视为订单完成！</span>
        </div>
        <div class="Co-Btns">
          <div class="Btns-left" @click="toggleShowCode">取消</div>
          <div class="Btns-right" @click="clickToSlip">确认</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["orderlist","num"],
  data() {
    return {
      cancel: false,
      refund: false,
      evaluateCom: false, //评价
      value: 4,
      cityList: [
        {
          value: "不想买了",
          label: "不想买了"
        },
        {
          value: "距离太远",
          label: "距离太远"
        },
        {
          value: "没时间安装",
          label: "没时间安装"
        },
        {
          value: "有更适合的产品",
          label: "有更适合的产品"
        },
        {
          value: "其他原因",
          label: "其他原因"
        }
      ],
      model1: "",
    //   codevalue: "", // 核销码
    //   slipSucc: false,
      curRate:0
    };
  },
  methods: {
    //评价内容显示
    evaluate(e) {
      console.log("122",e);
      this.curRate = e;
      this.evaluateCom = !this.evaluateCom
    },
    //跳转评论页面
    Prepared() {
      this.$router.push({ path: "/order/prepared",query:{id:2} });
    },
    //点击弹出核销订单
    proceed() {
      this.cancel = !this.cancel;
    },
    toggleShowCode() {
      this.proceed();
    //   this.codevalue = "";
    },
    clickToSlip() {
        this.proceed();
    //   this.slipSucc = !this.slipSucc;

    },
    goBack() {
      this.toggleShowCode();
    },
    //弹出退款窗口
    pullBtn() {
      this.refund = true;
      this.ModalHelper.afterOpen();
    },
    //取消取消
    orcancel() {
      this.refund = false;
      this.model1 = "";
      this.ModalHelper.beforeClose();
    },
    //确定退款
    oksBtn() {
      if (this.model1 == "") {
        this.$toast("请选择退款原因");
      } else {
        this.refund = false;
        this.ModalHelper.beforeClose();
        this.$router.push({ path: "/order/prepared/orderrefund" });
      }
    },
    toggleProduct(e) {
      let index = e;
      this.$router.push({path:'/order/product',query:{index}})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.orderlist {
  padding-bottom: 0.5rem;
  width: 10rem;
  overflow: hidden;
  font-family: SourceHanSans;

  .cancel{
    margin: 0 .44rem;
    padding-top: .4rem;
    .cancel-title{
      display: flex;
      justify-content: space-between;
      padding-bottom: .4rem;
      .title-name{
        color: #000000;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
      }
      .title-status{
        color: #EA3756;
        font-size:0.32rem;
        font-family:Source Han Sans CN;
        font-weight:400;
      }
    }
    .cancel-content{
      display: flex;
      justify-content: space-between;
      // margin-bottom .4rem;
      
      .content-imgs{
        width:2.51rem;
        height:2.51rem;
        margin-bottom: .27rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .content-details{
        width:6.61rem;
        border-bottom: 1px solid #F1F1F1;
        .details-title{
          font-size:0.37rem;
          font-family:Source Han Sans CN;
          font-weight:400;
          margin-left: .44rem;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .details-desc{
          width: 5.7rem;
          font-size:0.32rem;
          font-family:Source Han Sans CN;
          font-weight:400;
          color: #999999;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          margin: .2rem 0 .2rem .44rem;
        }
        .details-price{
          margin-left: .44rem;
          display: flex;
          justify-content: space-between;
          .price-left{
            display: flex;
            .left-un{
              color: #EA3756;
              font-size:0.32rem;
              font-family:Source Han Sans CN;
              font-weight:500;
              display: flex;
              span{
                display: block;
              }
              .un-dw{
                font-size:0.32rem;
                font-family:Source Han Sans CN;
                font-weight:500;
                margin-top: .3rem;
              }
              .un-num{
                font-size: 0.64rem;
                font-family:Source Han Sans CN;
                font-weight:500;
              }
            }
            .left-nums{
              margin-left: .3rem;
              margin-top: .35rem;
              color: #666666;
              font-size:0.27rem;
              font-family:Source Han Sans CN;
              font-weight:400;
            }
          }
          .price-btn{
            width:1.57rem;
            height:0.83rem;
            line-height: 0.83rem;
            text-align: center;
            border:1px solid rgba(234,55,86,1);
            border-radius:0.41rem;
            font-size:0.32rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color: #EA3756;
            margin-top: -.2rem;
          }
          .price-ash{
            width:1.57rem;
            height:0.83rem;
            line-height: 0.83rem;
            text-align: center;
            border:1px solid #999999;
            border-radius:0.41rem;
            font-size:0.32rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color: #999999;
            margin-top: -.2rem;
          }
        }
      }
    }
  }

  .discuss {
    position: relative;
    margin: 0 auto;
    width: 9.15rem;
    .discussHe {
      margin: 0 auto 0.4rem;
      width: 9.15rem;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.27rem;
      overflow: hidden;
      .discussBox {
        margin: 0.27rem auto;
        .minute {
          display: flex;
          /deep/ .van-rate__icon{
            font-size: 0.35rem;
          }
          .minute-nums {
            margin-top: -0.05rem;
            margin-left: 0.3rem;
            font-size: 0.32rem;
            color: #FF5861;
          }
        }

        .details {
          color: #333333;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3; /* 截取第三行 */
          overflow: hidden;
          margin-top: 0.2rem;
          margin-bottom: 0.2rem;
          font-size:0.35rem;
          font-family:Source Han Sans CN;
          font-weight:400;
          line-height: .5rem;
        }
        .minImg {
          display: flex;
          .Imgs-list {
            width: 2.77rem;
            height: 2.77rem;
            margin-right: 0.37rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }

    .sanjiao {
      position: absolute;
      top: -0.3rem;
      right: 0.5rem;
      width: 0.5rem;
      height: 0.5rem;

      .img {
        width: 100%;
        height: 100%;
      }
    }
  }  

  .orderRefund {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 20;

    .RefundHe {
      margin: 3rem auto 0;
      width: 6.8rem;
      height: 7.55rem;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.27rem;
      overflow: hidden;

      .RefundHeBox {
        width: 6rem;
        margin: 0.4rem auto;

        .title {
          font-size: 0.4rem;
          color: #333333;
        }

        .selects {
          margin-top: 0.4rem;
        }

        .Hebao-btn {
          margin-top: 4rem;
          text-align: right;

          span {
            display: inline-block;
          }

          .cancel {
            width: 2.08rem;
            height: 0.72rem;
            line-height: 0.72rem;
            text-align: center;
            border: 1px solid rgba(242, 46, 46, 1);
            border-radius: 0.13rem;
            color: #E91414;
            font-size: #E91414;
            margin-right: 0.49rem;
            font-size: 0.4rem;
          }

          .oks {
            text-align: center;
            color: #ffffff;
            font-size: 0.4rem;
            width: 2.08rem;
            height: 0.72rem;
            line-height: 0.72rem;
            background: linear-gradient(180deg, rgba(255, 85, 85, 1) 0%, rgba(227, 3, 3, 1) 100%);
            border-radius: 0.13rem;
            margin-right: 0.7rem;
          }
        }
      }
    }
  }
.orderCode {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 20;
    .CodeHe {
      margin: 5rem auto 0;
      width:7.2rem;
      height:8.61rem;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.27rem;
      overflow: hidden;
      text-align: center;
      position: relative;
      .Co-title {
        margin-top: 0.37rem;
        font-size:0.45rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color: #333333;
      }
      .Co-number {
        font-size:0.45rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color: #333333;
      }
      .Co-scan {
        width: 4.47rem;
        height: 4.47rem;
        margin: 0.2rem auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .Co-remind {
        display: flex;
        img {
          display: inline-block;
          width: 0.37rem;
          height: 0.37rem;
          margin-top: 0.15rem;
          margin-left: 1.3rem;
          margin-right: 0.2rem;
        }
        span {
          margin-top: .1rem;
          font-size: 0.32rem;
          color: #000000;
          display: inline-block;
        }
      }
      .Co-Btns {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        border-top: 0.01rem solid #e5e5e5;
        font-size: 0.45rem;
        .Btns-left {
          width: 50%;
          border-right: 0.01rem solid #e5e5e5;
          box-sizing: border-box;
          color: #999999;
        }
        .Btns-right {
          width: 50%;
        }
      }
    }
  }

  .code-wrap {
    background: #fff;
    width: 80%;
    margin: 40% 10%;
    border-radius: 10px;
    text-align: center;
    overflow: hidden;
  }

  .code-title {
    font-size: 0.45rem;
    font-weight: bold;
    color: #333;
    margin: 14px 0;
  }

  .code-desc {
    font-size: 14px;
    color: #666;
    font-weight: 400;
    margin: 0;
  }

  .code-ipns {
    display: flex;
    align-items: center;

    .ipns-icon {
      width: 0.8rem;
      height: 0.69rem;
      margin-top: 0.5rem;
      margin-left: 0.8rem;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .action-btn {
    margin-top: 30px;
    display: flex;
    border-top: 1px solid #e5e5e5;
  }

  .action-btn span {
    flex: 1;
    font-size: 16px;
    color: #999;
    padding: 15px 0;
  }

  .action-btn span:last-child {
    border-left: 1px solid #e5e5e5;
    color: #000;
  }

  .code-wrap >>> .van-field__left-icon {
    display: none;
  }

  .van-search {
    margin-top: 20px;
  }

  .status-msg {
    color: #EF705C;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
