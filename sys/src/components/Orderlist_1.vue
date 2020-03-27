<template>
  <div class="orderlist">
    <div v-if="orderlist!==''">
      <div class="list" v-for="(item,index) in orderlist" :key="index" v-if="num===item.all">
        <!-- 待核销  -->
        <van-skeleton
        title
        avatar
        :row="3"
        :loading="loading"
        :avatar-size="avatarSize"
        >
          <div class="content"  v-if="item.progress===1">
            <!--  分类标签 -->
            <div class="middle" :style="backgroundDiv">
              <div class="middle-name">待核销</div>
            </div>
            <div class="contentHe">
              <div class="con-title">{{item.title}}</div>
              <div class="con-matter">
                <div class="matter-imgs">
                  <img :src="item.icon" />
                </div>
                <div class="matter-letter">
                  <div class="letter-title">{{item.shopname}}</div>
                  <div class="letter-owner">
                    车主：
                    <span>{{item.owner}}</span>
                    <span>{{item.number}}</span>
                  </div>
                  <div class="letter-time">
                    <div class="time-num">
                      <span>{{item.time}}</span>
                      <span class="num-sum">共{{item.sum}}件</span>
                    </div>
                    <div class="time-price">
                      ¥
                      <span>{{item.money}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="con-btn">
                <span @click="pullBtn(index,item.money)">退款</span>
                <span @click="proceed">核销</span>
              </div>
            </div>
          </div>
        </van-skeleton>

        <!-- 已核销 -->
        <van-skeleton
        title
        avatar
        :row="3"
        :loading="loading"
        :avatar-size="avatarSize"
        >
          <div class="content"  v-if="item.progress===2">
            <!--  分类标签 -->
            <div class="middle" :style="backgroundDiv">
              <div class="middle-name">已核销</div>
            </div>
            <div class="contentHe">
              <div class="con-title">{{item.title}}</div>
              <div class="con-matter">
                <div class="matter-imgs">
                  <img :src="item.icon" />
                </div>
                <div class="matter-letter">
                  <div class="letter-title">{{item.shopname}}</div>
                  <div class="letter-owner">
                    车主：
                    <span>{{item.owner}}</span>
                    <span>{{item.number}}</span>
                  </div>
                  <div class="letter-time">
                    <div class="time-num">
                      <span>{{item.time}}</span>
                      <span class="num-sum">共{{item.sum}}件</span>
                    </div>
                    <div class="time-price">
                      ¥
                      <span>{{item.money}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="con-btn">
                <span @click="Prepared">评价</span>
              </div>
            </div>
          </div>
        </van-skeleton>

        <!--  已评价  -->
        <van-skeleton
        title
        avatar
        :row="3"
        :loading="loading"
        :avatar-size="avatarSize"
        >
          <div class="evaluate"  v-if="item.progress===3">
            <div class="content">
              <!--  分类标签 -->
              <div class="middle" :style="backgroundDiv">
                <div class="middle-name">已评价</div>
              </div>
              <div class="contentHe">
                <div class="con-title">{{item.title}}</div>
                <div class="con-matter">
                  <div class="matter-imgs">
                    <img :src="item.icon" />
                  </div>
                  <div class="matter-letter">
                    <div class="letter-title">{{item.shopname}}</div>
                    <div class="letter-owner">
                      车主：
                      <span>{{item.owner}}</span>
                      <span>{{item.number}}</span>
                    </div>
                    <div class="letter-time">
                      <div class="time-num">
                        <span>{{item.time}}</span>
                        <span class="num-sum">共{{item.sum}}件</span>
                      </div>
                      <div class="time-price">
                        ¥
                        <span>{{item.money}}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="con-btn">
                  <span class="btn-hui">评价</span>
                  <span>评价</span>
                </div> -->
                <div :class='["con-btn",evaluateCom===true && curRate===index?"con-ash":""]'>
                    <span @click="evaluate(index)">评价</span>
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
                      v-model="item.evaluate.minute"
                      :size="24"
                      :gutter="15"
                      allow-half
                      color="#FF5861"
                      :count="5"
                    />
                    <div class="minute-nums">{{item.evaluate.minute}}分</div>
                  </div>
                  <div
                    class="details"
                  >{{item.evaluate.desc}}</div>
                  <div class="minImg">
                    <div class="Imgs-list" v-for="(imgs,index) in item.evaluate.img_url" :key="index">
                      <img :src="imgs.icon" />
                    </div>
                  </div>
                </div>
              </div>
              <!-- 装饰三角  -->
              <div class="sanjiao">
                <img src="../assets/sanjiao.png" />
              </div>
            </div>
          </div>
        </van-skeleton>
      </div>
    </div>
    <div v-if="orderlist!==''">
      <div class="list" v-for="(item,index) in orderlist" :key="index" v-if="num===item.progress">
        <!-- 待核销  -->
        <van-skeleton
        title
        avatar
        :row="3"
        :loading="loading"
        :avatar-size="avatarSize"
        >
          <div class="content"  v-if="item.progress===1">
            <!--  分类标签 -->
            <div class="middle" :style="backgroundDiv">
              <div class="middle-name">待核销</div>
            </div>
            <div class="contentHe">
              <div class="con-title">{{item.title}}</div>
              <div class="con-matter">
                <div class="matter-imgs">
                  <img :src="item.icon" />
                </div>
                <div class="matter-letter">
                  <div class="letter-title">{{item.shopname}}</div>
                  <div class="letter-owner">
                    车主：
                    <span>{{item.owner}}</span>
                    <span>{{item.number}}</span>
                  </div>
                  <div class="letter-time">
                    <div class="time-num">
                      <span>{{item.time}}</span>
                      <span class="num-sum">共{{item.sum}}件</span>
                    </div>
                    <div class="time-price">
                      ¥
                      <span>{{item.money}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="con-btn">
                <span @click="pullBtn(index,item.money)">退款</span>
                <span @click="proceed">核销</span>
              </div>
            </div>
          </div>
        </van-skeleton>

        <!-- 已核销 -->
        <van-skeleton
        title
        avatar
        :row="3"
        :loading="loading"
        :avatar-size="avatarSize"
        >
          <div class="content"  v-if="item.progress===2">
            <!--  分类标签 -->
            <div class="middle" :style="backgroundDiv">
              <div class="middle-name">已核销</div>
            </div>
            <div class="contentHe">
              <div class="con-title">{{item.title}}</div>
              <div class="con-matter">
                <div class="matter-imgs">
                  <img :src="item.icon" />
                </div>
                <div class="matter-letter">
                  <div class="letter-title">{{item.shopname}}</div>
                  <div class="letter-owner">
                    车主：
                    <span>{{item.owner}}</span>
                    <span>{{item.number}}</span>
                  </div>
                  <div class="letter-time">
                    <div class="time-num">
                      <span>{{item.time}}</span>
                      <span class="num-sum">共{{item.sum}}件</span>
                    </div>
                    <div class="time-price">
                      ¥
                      <span>{{item.money}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="con-btn">
                <span @click="Prepared">评价</span>
              </div>
            </div>
          </div>
        </van-skeleton>

        <!--  已评价  -->
        <van-skeleton
        title
        avatar
        :row="3"
        :loading="loading"
        :avatar-size="avatarSize"
        >
          <div class="evaluate"  v-if="item.progress===3">
            <div class="content">
              <!--  分类标签 -->
              <div class="middle" :style="backgroundDiv">
                <div class="middle-name">已评价</div>
              </div>
              <div class="contentHe">
                <div class="con-title">{{item.title}}</div>
                <div class="con-matter">
                  <div class="matter-imgs">
                    <img :src="item.icon" />
                  </div>
                  <div class="matter-letter">
                    <div class="letter-title">{{item.shopname}}</div>
                    <div class="letter-owner">
                      车主：
                      <span>{{item.owner}}</span>
                      <span>{{item.number}}</span>
                    </div>
                    <div class="letter-time">
                      <div class="time-num">
                        <span>{{item.time}}</span>
                        <span class="num-sum">共{{item.sum}}件</span>
                      </div>
                      <div class="time-price">
                        ¥
                        <span>{{item.money}}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="con-btn">
                  <span class="btn-hui">评价</span>
                  <span>评价</span>
                </div> -->
                <div :class='["con-btn",evaluateCom===true && curRate===index?"con-ash":""]'>
                    <span @click="evaluate(index)">评价</span>
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
                      v-model="item.evaluate.minute"
                      :size="24"
                      :gutter="15"
                      allow-half
                      color="#FF5861"
                      :count="5"
                    />
                    <div class="minute-nums">{{item.evaluate.minute}}分</div>
                  </div>
                  <div
                    class="details"
                  >{{item.evaluate.desc}}</div>
                  <div class="minImg">
                    <div class="Imgs-list" v-for="(imgs,index) in item.evaluate.img_url" :key="index">
                      <img :src="imgs.icon" />
                    </div>
                  </div>
                </div>
              </div>
              <!-- 装饰三角  -->
              <div class="sanjiao">
                <img src="../assets/sanjiao.png" />
              </div>
            </div>
          </div>
        </van-skeleton>
      </div>
    </div>
    <div v-else class="list-not">暂无数据哦~</div>

    <!-- 订单核销码  -->
    <div class="orderCode" v-if="cancel" @touchmove.prevent>
      <div class="CodeHe">
        <div class="Co-title">订单核销码</div>
        <div class="Co-number">134646446</div>
        <div class="Co-scan">
          <img src="../assets/code.png" />
        </div>
        <div class="Co-remind">
          <img src="../assets/remind.png" />
          <span>提供核销码即视为订单完成！</span>
        </div>
        <div class="Co-Btns">
          <div class="Btns-left" @click="Btns">取消</div>
          <div class="Btns-right" @click="Btns">确认</div>
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
  </div>
</template>

<script>
export default {
  name: "Orderlist",
  props: ["orderlist","num"],
  data() {
    return {
      avatarSize:'80',
      backgroundDiv: {
        backgroundImage: "url(" + require("../assets/signboard.png") + ")"
      },
      evaluateCom: false, //评价
      cancel: false,
      refund: false,
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
      loading: true,
      curRate:0,
      idx:null, //订单id
      money:null, //退款金额
      refs:[] //退款信息
    };
  },
  methods: {
      //评价内容显示
    evaluate(e) {
      this.curRate = e;
      this.evaluateCom = !this.evaluateCom
    },
    //跳转评论页面
    Prepared() {
      this.$router.push({ path: "/order/prepared" });
    },
    //点击弹出核销订单
    proceed() {
      this.cancel = !this.cancel;
    },
    //关闭订单核销
    Btns() {
      this.cancel = !this.cancel;
    },
    //弹出退款窗口
    pullBtn(idx,money) {
      this.idx = idx;
      this.money = money;
      this.refund = true;
      // this.ModalHelper.afterOpen();
    },
    //取消取消
    orcancel() {
      this.refund = false;
      this.model1 = "";
      // this.ModalHelper.beforeClose();
    },
    //确定退款
    oksBtn() {
      if (this.model1 == "") {
        this.$toast("请选择退款原因");
      } else {
        this.refund = false;
        let idx = this.idx;
        let money = this.money;
        let ref = this.model1;
        let temp = {
          order_id: idx,
          money:money,
          ref:ref
        }
        this.refs.push(temp);
        console.log(this.refs,"退款信息");
        this.$router.push({ path: "/order/prepared/orderrefund",query:{id:idx,money}});
      }
    }
  },
   mounted() {
    setTimeout(function(){
      this.loading = false;
    }.bind(this),1000)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.orderlist {
  padding-bottom: 1.6rem;
  width: 10rem;
  overflow: hidden;
  font-family: SourceHanSans;
  .list-not{
      color: #333;
      font-size: .45rem;
      text-align: center;
      margin-top: 2rem;
  }
  .content {
    margin: 0 auto 0.4rem;
    width: 9.15rem;
    height: 4.03rem;
    border-radius: 0.13rem;
    background-color: #ffffff;
    border: 1px solid rgba(229, 229, 229, 1);
    box-shadow: 0rem 0rem 0.19rem 0rem rgba(181, 181, 181, 0.3);
    overflow: hidden;
    position: relative;
    font-family: SourceHanSans;
    .middle {
      position: absolute;
      top: 0;
      right: 0;
      width: 1.6rem;
      height: 1.6rem;
      background: no-repeat center top;
      background-size: contain;
      .middle-name {
        position: absolute;
        top: 0.25rem;
        right: -0.01rem;
        color: #ffffff;
        font-size: 0.3rem;
        transform: rotate(45deg);
      }
    }
    .contentHe {
      margin: 0.2rem;
      .con-title {
        color: #000000;
        font-size: 0.32rem;
      }
      .con-matter {
        display: flex;
        margin-top: 0.27rem;
        .matter-imgs {
          width: 2.08rem;
          height: 2.08rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .matter-letter {
          margin-left: 0.55rem;
          .letter-title {
            font-size: 0.27rem;
            color: #333333;
          }
          .letter-owner {
            color: #666666;
            font-size: 0.27rem;
            margin-top: 0.4rem;
            span {
              margin-left: 0.1rem;
            }
          }
          .letter-time {
            display: flex;
            align-items: center;
            margin-top: 0.2rem;
            .time-num {
              font-size: 0.24rem;
              color: #666666;
              width: 4.1rem;
              .num-sum {
                margin-left: 0.5rem;
              }
            }
            .time-price {
              color: $color;
              font-size: 0.32rem;
              span {
                font-size: 0.48rem;
                margin-left: 0.05rem;
              }
            }
          }
        }
      }
      .con-btn {
        text-align: right;
        margin-top: 0.17rem;
        span {
          display: inline-block;
          width: 1.57rem;
          height: 0.45rem;
          line-height: 0.45rem;
          text-align: center;
          color: $color;
          border: 1px solid $color;
          border-radius: 0.23rem;
          margin-left: 0.48rem;
          font-size: 0.27rem;
        }
        .btn-hui {
          border: 1px solid rgba(153, 153, 153, 1);
          color: #999999;
        }
      }
      .con-ash {
            span {
              display: inline-block;
              width: 1.57rem;
              height: 0.45rem;
              line-height: 0.45rem;
              text-align: center;
              border: 1px solid rgba(153, 153, 153, 1);
              color: #999999;
              border-radius: 0.23rem;
              font-size: 0.27rem;
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
      height: 3.76rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0rem 0rem 0.19rem 0rem rgba(181, 181, 181, 0.3);
      border-radius: 0.27rem;
      overflow: hidden;
      .discussBox {
        width: 8.8rem;
        margin: 0.27rem auto;
        .minute {
          display: flex;
          .minute-nums {
            margin-top: -0.05rem;
            margin-left: 0.3rem;
            font-size: 0.32rem;
            color: #ff5861;
          }
        }
        .details {
          width: 8.8rem;
          font-size: 0.27rem;
          color: #333333;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3; /*截取第三行*/
          overflow: hidden;
          margin-top: 0.2rem;
          margin-bottom: 0.2rem;
        }
        .minImg {
          display: flex;
          .Imgs-list {
            width: 1.15rem;
            height: 1.15rem;
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
      top: -0.2rem;
      right: 1.2rem;
      width: 0.3rem;
      height: 0.3rem;
      .img {
        width: 100%;
        height: 100%;
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
      width: 7.2rem;
      height: 7.53rem;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.27rem;
      overflow: hidden;
      text-align: center;
      position: relative;
      .Co-title {
        margin-top: 0.5rem;
        font-size: 0.4rem;
        font-weight: bold;
        color: #333333;
      }
      .Co-number {
        font-size: 0.4rem;
        font-weight: bold;
        color: #333333;
      }
      .Co-scan {
        width: 3.33rem;
        height: 3.33rem;
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
          margin-top: 0.02rem;
          margin-left: 1.3rem;
          margin-right: 0.2rem;
        }
        span {
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
            border: 0.01rem solid rgba(242, 46, 46, 1);
            border-radius: 0.13rem;
            color: #e91414;
            font-size: #e91414;
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
            background: linear-gradient(
              180deg,
              rgba(255, 85, 85, 1) 0%,
              rgba(227, 3, 3, 1) 100%
            );
            border-radius: 0.13rem;
            margin-right: 0.7rem;
          }
        }
      }
    }
  }
  /deep/ .van-skeleton{
      padding: .3rem 0.4rem;
  }
  /deep/ .van-skeleton__avatar{
      background: #fff;
  }
  /deep/ .van-skeleton__row, .van-skeleton__title{
      background: #fff;
  }
}
</style>
