<template>
  <div class="orderlist">
      <div class="content" v-for="(item,index) in datalist" :key="index" @click="Orderdetails">
        <div class="contentBox">
            <div class="price">
                <div class="price-time">{{item.time}}</div>
            </div>
            <div class="state">
                <div class="state-num">{{item.numbers}}</div>
                <div class="state-status">
                    <span>状态：</span>
                    <span class="judge">{{item.states}}</span>
                </div>
            </div>
            <div class="product">
                <span>产品：</span>
                <span class="product-names">{{item.product}}</span>
            </div>
            <div class="product">
                <span>车型：</span>
                <span class="product-names">{{item.model}}</span>
            </div>
            <div class="product">
                <span>联系人：</span>
                <span class="product-names">{{item.service}}</span>
            </div>
            <div class="product">
                <span>安装店：</span>
                <span class="product-names">{{item.trade}}</span>
            </div>
            <div class="product">
                <span>安装联系：</span>
                <span class="product-names">{{item.explain}}</span>
            </div>
            <div class="product">
                <span>地址：</span>
                <span class="product-names">{{item.location}}</span>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
    import {GetIdBydetails,PostNoteByAdd,GetIdByStatus} from "@/api/order";

    export default {
  name: 'Datalist',
  props:['datalist'],
  data() {
      return{

      }
  },

  methods:{
      Orderdetails() {
          this.$router.push({path:'/data/Datadetails'})
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.orderlist{
    // margin-top: 1.6rem;
    padding-bottom: 1.6rem;
    width: 10rem;
    overflow: hidden;
   .content{
        margin: 0 auto;
        margin-top: .4rem;
        width:9.15rem;
        min-height:5.92rem;
        border-radius:0.27rem;
        border:1px solid rgba(229,229,229,1);
        box-shadow:0px 3px 14px 0px rgba(153,153,153,0.2);
        background: #ffffff;
        overflow: hidden;
        .contentBox{
            margin: 0  0.2rem;
            height: 100%;
            .price{
                text-align: right;
                .price-time{
                    font-size:0.27rem;
                    font-weight:400;
                    color: #2B2B2B;
                    margin-top: .2rem;
                }
            }
            .state{
                margin-left: .2rem;
                display: flex;
                font-size: .32rem;
                align-items: center;
                .state-num{
                    color: #2B2B2B;
                    font-size:0.4rem;
                    font-weight:400;
                    width: 4.7rem;
                    font-size: 0.8rem;
                }
                .state-status{
                    font-size: 0.32rem;
                    font-weight:400;
                    color: #666666;
                    .judge{
                        color: #CD4B4C;
                        margin-left: .2rem;
                    }
                }
            }
            .product{
                // margin-top: .25rem;
                margin-bottom: .17rem;
                margin-left: .2rem;
                font-size: 0.32rem;
                color: #666666;
                font-weight:400;
                .product-names{
                    color: #333333;
                    margin-left: .2rem;
                }
            }
        }
    }
}

</style>
