<template>
  <div class="Storelist">
      <div class="StoreHe" v-for="(item,index) in Storelist" :key="index">
          <van-skeleton
            :row="2"
            :loading="loading"
            >
        <div class="StoreHeBox">
            <div class="trade">
                <span class="title">店名</span>
                <span class="nameStore">{{item.shopname}}</span>
            </div>
            <div class="sumNum">
                <div class="sumNum-scale">
                    <span class="scale-sp">总接单量</span>
                    <span class="scale-limit">{{item.order_count}}</span>
                </div>
                <div class="sumNum-scale">
                    <span class="scale-sp">总费用</span>
                    <span class="scale-limit">￥{{item.order_sum}}</span>
                </div>
            </div>
        </div>
          </van-skeleton>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Storelist',
  props:['Storelist'],
  data() {
      return {
          loading:true
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
.Storelist{
    width: 9.15rem;
    height: 100%;
    margin: 0 auto;
    padding-bottom: 1.5rem;
    .StoreHe{
        overflow: hidden;
        margin-bottom: .27rem;
        width:9.15rem;
        height:1.59rem;
        background: #ffffff;
        box-shadow:0rem 0.03rem 0.11rem 0rem rgba(153,153,153,0.2);
        border-radius:0.13rem;
        .StoreHeBox{
            width: 8.61rem;
            margin: 0 auto;
            .trade{
                margin-top: .15rem;
                font-size:0.4rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                .title{
                    color: #666666;
                }
                .nameStore{
                    color: #333333;
                    margin-left: .28rem;
                }
            }
            .sumNum{
                display: flex;
                .sumNum-scale{
                    width: 4.4rem;
                    .scale-sp{
                        color: #666666;
                        font-size:0.32rem;
                        font-weight:400;
                        margin-right: .4rem;
                    }
                    .scale-limit{
                        color: $color;
                        font-size:0.48rem;
                        font-family:DIN;
                        font-weight:500;
                    }
                }
            }
        }
    }
    /deep/ .van-skeleton__content {
        padding: .2rem 0;
    }
}
</style>
