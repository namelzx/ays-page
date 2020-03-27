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
                    <span class="nums">{{item.id}}</span>
                </div>
                <div class="price-time">
                    <div>{{item.create_time}}</div>
                </div>
            </div>
            <div class="state">
                <div class="state-status">
                    <span>状态：</span>
                    <span class="judge" v-if="item.status==='驳回'">待处理</span>

                    <span class="judge" v-else>{{item.status}}
                    <span v-if="item.is_eva===1">(已评价)</span>
                    </span>

                </div>
            </div>
            <div class="product">
                <span>产品：</span>
                <span class="product-names">{{item.product_titile}}</span>
                <!--<span class="product-names"  v-else>商品已下架</span>-->
            </div>
            <div class="product">
                <span>车型：</span>
                <span class="product-names">{{item.model_title}}</span>
            </div>
            <div class="product">
                <span>联系人：</span>
                <span class="product-names">{{item.contact}}{{item.tel}}</span>
            </div>
            <div class="product" v-if="item.status!=='待处理'&&item.status!=='待确认(业务)'&&item.status!=='待确认(门店)'">
                <span>门店：</span>
                <span class="product-names">{{item.shop_title}}</span>
            </div>
            <div class="product" v-if="item.status!=='待处理'||item.status!=='待确认(业务)'||item.status!=='待确认(门店)'">
                <span>安装联系：</span>
                <span class="product-names">{{item.shop_tel}}</span>
            </div>
            <div class="product" v-if="item.status!=='待处理'||item.status!=='待确认(业务)'||item.status!=='待确认(门店)'">
                <span>地址：</span>
                <span class="product-names">{{item.shop_location}}</span>
            </div>
        </div>
        </van-skeleton>

      </div>
      <!--<div class="content" v-for="(item,index) in orderlist" :key="index" @click="Orderdetails(item.schedule)" v-if="num===item.schedule">-->
          <!--<van-skeleton-->
        <!--title-->
        <!--animate-->
        <!--:row="5"-->
        <!--:loading="loading"-->
      <!--&gt;-->
        <!--<div class="contentBox">-->
            <!--<div class="price">-->
                <!--<div class="price-left">-->
                    <!--<span class="nums">{{item.numbers}}</span>-->
                <!--</div>-->
                <!--<div class="price-time">-->
                    <!--<div>{{item.time}}</div>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="state">-->
                <!--<div class="state-status">-->
                    <!--<span>状态：</span>-->
                    <!--<span class="judge">{{item.states}}</span>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="product">-->
                <!--<span>产品：</span>-->
                <!--<span class="product-names">{{item.product}}</span>-->
            <!--</div>-->
            <!--<div class="product">-->
                <!--<span>车型：</span>-->
                <!--<span class="product-names">{{item.model}}</span>-->
            <!--</div>-->
            <!--<div class="product">-->
                <!--<span>联系人：</span>-->
                <!--<span class="product-names">{{item.service}}</span>-->
            <!--</div>-->
            <!--<div class="product" v-if="item.schedule!==1">-->
                <!--<span>门店：</span>-->
                <!--<span class="product-names">{{item.trade}}</span>-->
            <!--</div>-->
            <!--<div class="product" v-if="item.schedule!==1">-->
                <!--<span>安装联系：</span>-->
                <!--<span class="product-names">{{item.phone}}</span>-->
            <!--</div>-->
            <!--<div class="product" v-if="item.schedule!==1">-->
                <!--<span>地址：</span>-->
                <!--<span class="product-names">{{item.address}}</span>-->
            <!--</div>-->
        <!--</div>-->
        <!--</van-skeleton>-->
      <!--</div>-->
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
      Orderdetails(index) {
          let id = index
          this.$router.push({path:'/order/orderdetails',query:{id:id}})
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

        padding-bottom: .3rem;
        border-radius:0.27rem;
        box-shadow:0px 3px 14px 0px rgba(153,153,153,0.2);
        overflow: hidden;
        .contentBox{
            margin: 0  0.2rem;
            height: 100%;
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
                        font-size:0.8rem;
                        // font-family:Source Han Sans CN;
                        font-weight:400;
                        color:rgba(43,43,43,1);
                    }

                }
                .price-time{
                    font-size:0.27rem;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color:rgba(43,43,43,1);
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
