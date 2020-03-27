<template>
  <div>
    <!--最新消息 -->
    <div class="messagelist">
      <div @click="popups(item)"
          v-for="(item,index) in storelist"
          :key="index">
          <van-skeleton animate :row="2" avatar-size="100px" avatar :loading="loading">
            <div class="listms">
                <div class="listms-img">
                    <img src="../assets/Message-1.png" />
                    <div class="yuan"></div>
                </div>
                <div class="listms-ce">
                    <div class="ce-title">
                    <div class="name">{{item.title}}</div>
                    <div class="time">2019/10/14 18:00</div>
                    </div>
                    <div class="ce-details">{{item.desc}}</div>
                </div>
            </div>
          </van-skeleton>
      </div>
    </div>



    <!-- 新订单信息  -->
    <div class="New-order" v-if="conceal==1" @touchmove.prevent>
      <div class="orderBox">
        <div class="title">安装单：新订单消息</div>
        <div class="order-xq">您有一笔新的订单，请尽快处理！</div>
        <div class="order-odd">
          <span>订单号：</span>
          <span class="odd2">{{info.id}}</span>
        </div>
        <div class="order-odd">
          <span>安装产品：</span>
          <span class="odd2">{{info.product_title}}</span>
        </div>
        <div class="order-odd">
          <span>车型：</span>
          <span class="odd2">{{info.model_title}}</span>
        </div>
        <div class="order-odd">
          <span>派单客服：</span>
          <span class="odd2">{{info.realName}}</span>
        </div>

        <div class="order-odd">
          <span>派单日期：</span>
          <span class="odd2">{{info.create_time|parseTime}}</span>
        </div>
        <div class="order-query">请尽快处理此单，如有疑问可联系电商客服！</div>
        <div class="return-close">
          <div class="close-left" @click="toggleTab">关闭</div>
          <div class="close-right" @click="Orderdetails(info.id)">查看详情</div>
        </div>
      </div>
    </div>
    <!--<div class="New-order" v-if="conceal==1" @touchmove.prevent>-->
      <!--<div class="orderBox">-->
        <!--<div class="title">安装单：新订单消息</div>-->
        <!--<div class="order-xq">您有一笔新的订单，请尽快处理！</div>-->
        <!--<div class="order-odd">-->
          <!--<span>订单号：</span>-->
          <!--<span class="odd2">6666</span>-->
        <!--</div>-->
        <!--<div class="order-odd">-->
          <!--<span>安装产品：</span>-->
          <!--<span class="odd2">守护者S</span>-->
        <!--</div>-->
        <!--<div class="order-odd">-->
          <!--<span>车型：</span>-->
          <!--<span class="odd2">本田飞度2018款</span>-->
        <!--</div>-->
        <!--<div class="order-odd">-->
          <!--<span>派单客服：</span>-->
          <!--<span class="odd2">张三</span>-->
        <!--</div>-->

        <!--<div class="order-odd">-->
          <!--<span>派单日期：</span>-->
          <!--<span class="odd2">2019.08.08 18：00</span>-->
        <!--</div>-->
        <!--<div class="order-query">请尽快处理此单，如有疑问可联系电商客服！</div>-->
        <!--<div class="return-close">-->
          <!--<div class="close-left" @click="toggleTab">关闭</div>-->
          <!--<div class="close-right"  @click="toggleOrder">查看详情</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

        <!-- 订单驳回信息  -->
    <div class="reject" v-if="conceal==2" @touchmove.prevent>
      <div class="rejectBox">
        <div class="title">安装单：订单驳回信息</div>
        <div class="feedback">您有一笔安装订单被驳回，请查收!</div>
        <div class="shops">
          <span class="shops-name">订单号：</span>
          <span class="shops-titles">666666</span>
        </div>
        <div class="shops">
          <span class="shops-name">安装产品：</span>
          <span class="shops-titles">守护者S</span>
        </div>
        <div class="shops">
          <span class="shops-name">车型：</span>
          <span class="shops-titles">本田飞度2018款</span>
        </div>
        <div class="shops">
          <span class="shops-name">驳回原因：</span>
          <span class="shops-titles">近期没时间安装</span>
        </div>
        <div class="shops">
          <span class="shops-name">驳回人：</span>
          <span class="shops-titles">张三 2019.08.08 18：00: 00</span>
        </div>
        <div class="reject-query">如有疑问可联系电商客服！</div>
        <div class="return-close" @click="toggleTab">关闭</div>
      </div>
    </div>

    <!-- 订单退货信息  -->
    <div class="return" v-if="conceal==3" @touchmove.prevent>
      <div class="returnBox">
        <div class="title">安装单：订单退货信息</div>
        <div class="return-xq">您有一笔安装订单已退货，此安装已取消！请 您知晓</div>
        <div class="return-odd">
          <span>订单号：</span>
          <span class="odd2">6666</span>
        </div>
        <div class="return-odd">
          <span>安装产品：</span>
          <span class="odd2">守护者S</span>
        </div>
        <div class="return-odd">
          <span>车型：</span>
          <span class="odd2">本田飞度2018款</span>
        </div>
        <div class="return-odd">
          <span>取消时间：</span>
          <span class="odd2">2019.08.08 18：00</span>
        </div>
        <div class="return-query">如有疑问可联系电商客服！感谢您的支持与配合。</div>
        <div class="return-close" @click="toggleTab">关闭</div>
      </div>
    </div>





    <!--门店审核通知弹窗  -->
    <div class="audit" v-if="conceal==4" @touchmove.prevent>
      <div class="auditBox">
        <div class="title">门店审核通知</div>
        <div class="feedback">您的门店审核未通过，请修改您的信息!</div>
        <div class="shops">
          <span class="shops-name">审核门店：</span>
          <span class="shops-titles">阿帕广州旗舰店</span>
        </div>
        <div class="shops">
          <span class="shops-name">审核结果：</span>
          <span class="shops-titles">已通过</span>
        </div>
        <div class="shop-close" @click="toggleTab">关闭</div>
      </div>
    </div>

    <!-- 用户评价信息  -->
    <div class="evaluate" v-if="conceal==5" @touchmove.prevent>
      <div class="evaluateBox">
        <div class="title">新安装单评价信息</div>
        <div class="ev-xq">您的店铺服务非常好，车主给了您5星好评，请再接再励，用心服务好每个车主哦</div>
        <div class="ev-odd">
          <span>订单号：</span>
          <span class="odd2">6666</span>
        </div>
        <div class="ev-odd">
          <span>店铺评分：</span>
          <span class="odd2">5分</span>
        </div>
        <div class="ev-odd">
          <span class="odd1">用户评价：</span>
          <span class="odd2">本田飞度2018款改灯大气服务周到还说话技术高无手尾值得推荐再接再砺</span>
        </div>
        <!-- 图片  -->
        <div class="ev-imgs">
          <img src="../assets/tuwen.png" />
          <img src="../assets/tuwen.png" />
          <img src="../assets/tuwen.png" />
        </div>
        <div class="ev-close">
          <div class="close-left" @click="toggleTab">关闭</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessagelistNewest",
  props: ["storelist"],
  data() {
    return {
      imgs: 2,
      conceal: 0,
      loading: true
    };
  },
  methods: {
    popups(row) {
      this.conceal = row.type;
        this.info = row

        // this.ModalHelper.afterOpen();
    },
    toggleTab() {
      this.conceal = 0;
      // this.ModalHelper.beforeClose();
    },

      Orderdetails(index){
          this.$router.push({path:'/order/Orderdetails',query:{index}})
      },
  },
  mounted() {
    setTimeout(
      function() {
        this.loading = false;
      }.bind(this),
      1000
    );
  }
};
</script>


<style lang="scss" scoped>
.messagelist {
  width: 10rem;
  height: 100%;
  background-color: #ffffff;
  margin-top: 0.28rem;
  border-radius: 0.27rem 0.27rem 0 0;
  overflow: hidden;
  .older {
    font-size: 0.32rem;
    color: #666666;
    margin-top: 0.25rem;
    margin-left: 0.4rem;
  }
  /deep/ .van-skeleton--animate{
      padding: .3rem .4rem;
  }
  .listms {
    // margin-top: 0.25rem;
    padding-top: 0.25rem;
    // margin-left: 0.25rem;
    padding-left: 0.25rem;
    display: flex;
    justify-content: space-between;
    .listms-img {
      width: 1.49rem;
      height: 1.49rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .yuan {
        position: absolute;
        top: 0.1rem;
        right: 0.1rem;
        width: 0.16rem;
        height: 0.16rem;
        background: rgba(255, 0, 0, 1);
        border-radius: 50%;
      }
    }
    .listms-ce {
      width: 8.16rem;
      height: 1.72rem;
      border-bottom: 1px solid #f4f4f4;
      .ce-title {
        display: flex;
        justify-content: space-between;
        margin-top: 0.2rem;
        .name {
          font-size: 0.4rem;
          font-weight: 400;
          color: #010101;
        }
        .time {
          font-size: 0.27rem;
          color: #666666;
          margin-right: 0.4rem;
        }
      }
      .ce-details {
        margin-top: 0.05rem;
        color: #999999;
        font-size: 0.32rem;
      }
    }
  }
}
.audit {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  .auditBox {
    width: 9.15rem;

    background: rgba(255, 255, 255, 1);
    border-radius: 0.13rem;
    margin: 5rem auto 0;
    overflow: hidden;
    position: relative;
    .title {
      margin-top: 0.23rem;
      text-align: center;
      color: #000000;
      font-size:0.45rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      position: relative;
    }
    .title:before {
      position: absolute;
      content: "";
      width: 0.67rem;
      height: 0.05rem;
      background: rgba(234, 55, 86, 1);
      border-radius: 0.03rem;
      top: 0.8rem;
      left: 4.2rem;
    }
    .feedback {
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color: #000000;
      margin-top: 0.5rem;
      margin-left: 0.48rem;
    }
    .shops {
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      margin-left: 0.48rem;
      margin-top: 0.15rem;
      .shops-name {
        color: #999999;
      }
      .shops-titles {
        color: #000000;
      }
    }
    .shop-close {
      margin-top: .3rem;
      height: 1.11rem;
      line-height: 1.11rem;
      border-top: 0.01rem solid #dcdcdc;
      text-align: center;
      font-size: 0.4rem;
      color: #666666;
    }
  }
}
.return {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  .returnBox {
    width: 9.15rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.13rem;
    margin: 5rem auto 0;
    overflow: hidden;
    position: relative;
    .title {
      margin-top: 0.3rem;
      text-align: center;
      color: #000000;
      font-size:0.45rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      position: relative;
    }
    .title:before {
      position: absolute;
      content: "";
      width: 0.67rem;
      height: 0.05rem;
      background: rgba(234, 55, 86, 1);
      border-radius: 0.03rem;
      top: 0.8rem;
      left: 4.2rem;
    }
    .return-xq {
      margin-top: 0.5rem;
      margin-left: 0.48rem;
      width: 8rem;
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color: #000000;
    }
    .return-odd {
      margin-left: 0.48rem;
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      width: 6.39rem;
      margin-top: 0.15rem;
      color: #999999;
      .odd2 {
        color: #000000;
      }
    }
    .return-query {
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color: #000000;
      // width: 8.7rem;
      margin-left: 0.48rem;
      margin-top: 0.2rem;
      padding-bottom: .3rem;
    }
    .return-close {
      height: 1.1rem;
      line-height: 1.1rem;
      border-top: 0.01rem solid #dcdcdc;
      text-align: center;
      font-size: 0.4rem;
      color: #000000;
    }
  }
}
.reject {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  .rejectBox {
    width: 9.15rem;
    // min-height: 8.1rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.13rem;
    margin: 5rem auto 0;
    overflow: hidden;
    position: relative;
    .title {
      margin-top: 0.32rem;
      text-align: center;
      color: #000000;
      font-size:0.45rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      position: relative;
    }
    .title:before {
      position: absolute;
      content: "";
      width: 0.67rem;
      height: 0.05rem;
      background: rgba(234, 55, 86, 1);
      border-radius: 0.03rem;
      top: 0.8rem;
      left: 4.2rem;
    }
    .feedback {
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(51,51,51,1);
      color: #000000;
      margin-top: 0.5rem;
      margin-left: 0.48rem;
    }
    .shops {
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      margin-left: 0.48rem;
      margin-top: 0.2rem;
      .shops-name {
        color: #999999;
      }
      .shops-titles {
        color: #000000;
      }
    }
    .reject-query {
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color: #000000;
      margin-left: 0.48rem;
      margin-top: 0.2rem;
      padding-bottom: .3rem;
    }
    .return-close {
      height: 1.1rem;
      line-height: 1.1rem;
      border-top: 0.01rem solid #dcdcdc;
      text-align: center;
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color: #666666;
    }
  }
}
.New-order {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  .orderBox {
    width: 9.15rem;
    // height: 8rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.13rem;
    margin: 5rem auto 0;
    overflow: hidden;
    position: relative;
    .title {
      margin-top: 0.32rem;
      text-align: center;
      color: #000000;
      font-size:0.45rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(51,51,51,1);
      position: relative;
    }
    .title:before {
      position: absolute;
      content: "";
      width: 0.67rem;
      height: 0.05rem;
      background: rgba(234, 55, 86, 1);
      border-radius: 0.03rem;
      top: 0.8rem;
      left: 4.2rem;
    }
    .order-xq {
      margin-top: 0.4rem;
      margin-left: 0.48rem;
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(51,51,51,1);
    }
    .order-odd {
      margin-left: 0.48rem;
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      width: 6.39rem;
      margin-top: 0.15rem;
      color: #999999;
      .odd2 {
        color: #000000;
      }
    }
    .order-query {
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color: #000000;
      margin-left: 0.48rem;
      margin-top: 0.25rem;
      padding-bottom: .3rem;
    }
    .return-close {
      // position: absolute;
      // bottom: 0;
      // left: 0;
      // right: 0;
      height: 1.11rem;
      line-height: 1.11rem;
      border-top: 0.01rem solid #dcdcdc;
      text-align: center;
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color: #000000;
      display: flex;
      justify-content: space-between;
      .close-left {
        width: 50%;
        color: #666666;
      }
      .close-right {
        width: 50%;
        color: #ea3756;
      }
    }
  }
}
.evaluate {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  .evaluateBox {
    width: 9.15rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.13rem;
    margin: 3rem auto 0;
    overflow: hidden;
    position: relative;
    .title {
      margin-top: 0.23rem;
      text-align: center;
      color: #000000;
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      position: relative;
    }
    .title:before {
      position: absolute;
      content: "";
      width: 0.67rem;
      height: 0.05rem;
      background: rgba(234, 55, 86, 1);
      border-radius: 0.03rem;
      top: 0.8rem;
      left: 4.2rem;
    }
    .ev-xq {
      width: 8.25rem;
      margin-top: 0.45rem;
      margin-left: 0.48rem;
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color: #000000;
    }
    .ev-odd {
      margin-left: 0.48rem;
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      margin-top: 0.3rem;
      color: #999999;
      display: flex;
      span {
        display: inline-block;
      }
      .odd1 {
        width: 2rem;
      }
      .odd2 {
        color: #000000;
        width: 6.47rem;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
      }
    }
    .ev-imgs {
      display: flex;
      margin-top: 0.6rem;
      padding-bottom: .4rem;
      img {
        width:2.77rem;
        height:2.77rem;
        margin-left: .21rem;
      }
    }
    .ev-close {
      height: 1.11rem;
      line-height: 1.11rem;
      border-top: 0.01rem solid #dcdcdc;
      text-align: center;
      font-size: 0.4rem;
      color: #000000;
      display: flex;
      justify-content: space-between;
      .close-left {
        width: 100%;
        text-align: center;
        color: #666666;
      }
    }
  }
}
</style>
