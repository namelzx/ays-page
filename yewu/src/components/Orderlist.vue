<template>
  <div class="orderlist">

      <div class="content" v-for="(item,index) in orderlist" :key="index" @click="Orderdetails(item.id)" >
          <van-skeleton
        title
        animate
        :row="5"
        :loading="loading"
      >
        <div class="contentBox">
            <div class="price">
                <div class="price-left">
                    <span class="nums">{{item.ins_cost}}</span>
                    <span class="unit">RMB</span>
                </div>
                <div class="price-time">
                    <div>{{item.create_time}}</div>
                    <div class="time-num">编号：{{item.id}}</div>
                </div>
            </div>
            <div class="state">
                <!-- <div class="state-num">{{item.numbers}}</div> -->
                <div class="state-status">
                    <span>状态：</span>

                    <span class="judge" style="color: red;" v-if="item.status==='驳回'">待处理</span>
                    <span class="judge" style="color: red;" v-else>{{item.status}}

                    </span>
                </div>
            </div>
            <div class="product">
                <span>产品：</span>
                <span class="product-names" v-if="item.product_title">{{item.product_title}}</span>
                <span class="product-names"  v-else>商品已下架</span>
            </div>
            <div class="product">
                <span>车型：</span>
                <span class="product-names">{{item.model_title}}</span>
            </div>
            <div class="product">
                <span>客服：</span>
                <span class="product-names" v-if="item.pre">{{item.pre.realName}}</span>
            </div>
            <div class="product">
                <span>安装店：</span>
                <span class="product-names">{{item.shop_title}}</span>
            </div>
            <div class="product">
                <span>备注：</span>
                <span class="product-names">{{item.desc}}</span>
            </div>

            <div class="reject" v-if="item.is_rejected===1">
                <span>*驳回原因：</span>

                <span class="cause">{{item.note.ucontent}} ({{item.rejected}} 驳回)</span>

            </div>
            <div class="reject" v-if="item.schedule==10">
                <span>*退货原因：</span>
                <span class="cause">货不对板</span>
            </div>
        </div>
        </van-skeleton>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Orderlist',
  props:['orderlist','num'],
  data() {
      return{
         loading: true
      }
  },
  methods:{
      Orderdetails(e) {
          let index = e;
          this.$router.push({path:'/order/Orderdetails',query:{index}})
      }
  },
  mounted() {
    setTimeout(function(){
      this.loading = false;
    }.bind(this),1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.orderlist{
    // margin-top: 3.5rem;
    padding-bottom: 1.6rem;
    width: 10rem;
    overflow: hidden;
    /deep/ .van-skeleton__content {
        margin-top: .7rem;
    }
   .content{
        margin: 0 auto;
        margin-top: .4rem;
        width:9.15rem;
        min-height:5.92rem;
        border-radius:0.27rem;
        box-shadow:0px 3px 14px 0px rgba(153,153,153,0.2);
        overflow: hidden;
        .contentBox{
            margin: 0  0.2rem;
            height: 100%;
            padding-bottom: .2rem;
            .price{
                display: flex;
                justify-content: space-between;
                .price-left{
                    color: $color;
                    display: flex;
                    margin-left: .2rem;
                    span{
                        display: block;
                    }
                    .nums{
                        font-size:0.96rem;
                        font-weight:bold;
                    }
                    .unit{
                        font-size:0.32rem;
                        font-weight:400;
                        margin-left: .15rem;
                        margin-top: .6rem;
                    }
                }
                .price-time{
                    font-size:0.27rem;
                    font-weight:400;
                    color: #2B2B2B;
                    margin-top: .2rem;
                    margin-right: .4rem;
                    .time-num{
                        font-size:0.4rem;
                        font-family:Source Han Sans CN;
                        font-weight:400;
                        color:rgba(43,43,43,1);

                    }
                }
            }
            .state{
                margin-left: .2rem;
                display: flex;
                font-size: .32rem;
                .state-num{
                    color: #2B2B2B;
                    font-size:0.4rem;
                    font-weight:400;
                    width: 4.7rem;
                }
                .state-status{
                    font-size: 0.32rem;
                    font-weight:400;
                    color: #666666;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    .judge{
                        color: $color;
                        margin-left: .2rem;
                    }
                }
            }
            .product{
                margin-top: .25rem;
                margin-left: .2rem;
                font-size: 0.32rem;
                color: #666666;
                font-weight:400;
                .product-names{
                    color: #333333;
                }
            }
            .rate{
                margin-left: .2rem;
                margin-top: .2rem;
                padding-bottom: .8rem;
                font-size: 0.32rem;
                color: #999999;
                display: flex;
                .ratetitle{
                    color: #666666;
                }
                .ratesp{
                    margin-right: .1rem;
                }
                .ra-active{
                    color: $color;
                }
            }
            .reject{
                margin-left: .2rem;
                margin-top: .2rem;
                padding-bottom: .4rem;
                font-size: 0.32rem;
                color: $color;
                .cause{
                    color: #333333;
                }
                .await{
                    color: $color;
                    margin-left: .2rem;
                }
            }
        }
    }
}

</style>
