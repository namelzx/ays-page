<template>
  <div class="qualitylist">

      <div class="list">
          <div class="qulist" :style="backgroundDiv2" v-for="(item,index) in list" :key="index">
            <van-skeleton
            title

            :row="3"
            :loading="loading"
            >
              <div class="qulist-s">
                <div class="s-names">
                  <div class="names-left">
                    <span>{{item.product_title}}</span>
                    <span class="left-time">{{item.buytime}}</span>
                  </div>
                  <div class="names-right">{{item.code}}</div>
                </div>
                <div class="s-days">剩余：<span>{{item.day>0?item.day:'已过期'}}</span>天</div>
              </div>
              <div class="qulist-x">
                <div class="x-left">
                  <div class="xl-title">{{item.car_type}}</div>
                  <div>
                    <span>{{item.user}}</span>
                    <span>{{item.user_phone}}</span>
                  </div>
                  <div>
                    <span>{{item.user_address}}</span>

                  </div>
                </div>
                <div class="x-right">
                  <div class="xl-title">
                    <span>{{item.shop_user}}</span>
                    <span>{{item.shop_phone}}</span>
                  </div>
                  <div>
                    <span>{{item.shop_address}}</span>
                  </div>

                </div>
              </div>
            </van-skeleton>
          </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Qualitylist',
  props:{
    list:{
      type:Array,
      default:(res=>{
        return []
      })
    }
  },
  // props:['qualitylist'],
  data() {
      return {
        backgroundDiv2: {
            backgroundImage: 'url(' + require('../assets/quality.png') + ')'
        },
        loading: true
      }
  },
  methods:{
    //跳转
    Prepared() {
        this.$router.push({path:'/order/prepared'})
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
.qualitylist{
    padding-bottom: .5rem;
    width: 10rem;
    overflow: hidden;
    font-family:SourceHanSans;
    /deep/ .van-skeleton{
      padding: .3rem 0.4rem;
    }
    /deep/ .van-skeleton__avatar{
        background: #fff;
    }
    /deep/ .van-skeleton__row, .van-skeleton__title{
        background: #fff;
    }
    .list{
      width: 9.15rem;
      overflow: hidden;
      margin-top: .67rem;
      .qulist{
          width: 9.15rem;
          // height: 4.33rem;
          background-repeat: no-repeat;
          background-size: cover;
          margin-bottom: .3rem;
          padding-bottom: .3rem;
          overflow: hidden;
          border-radius: .2rem;
          .qulist-s{
            position: relative;
            overflow: hidden;
            color: #ffffff;
            font-size:0.32rem;
            padding-bottom: .3rem;
            .s-names{
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 8.21rem;
              margin: 0.29rem auto 0;
              .names-left{
                span{
                  display: block;
                }
                .left-time{
                  font-size: 0.27rem;
                }
              }
              .names-right{
                font-size:0.4rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(255,255,255,1);
              }
            }
            .s-days{
              text-align: center;
              font-size: 0.27rem;
              margin-bottom: -.2rem;
              span{
                font-size: 0.96rem;
              }
            }
          }
          .qulist-x{
            margin-top: .25rem;
            display: flex;
            justify-content: space-between;
            overflow: hidden;
            .x-left{
              width: 50%;
              color: #ffffff;
              font-size: 0.29rem;
              font-family:Source Han Sans CN;
              font-weight:400;
              margin-left: .3rem;
              span{
                margin-right: .15rem;
              }
            }
            .x-right{
              margin-right: .3rem;
              text-align: right;
              width: 50%;
              color: #ffffff;
              font-size: 0.29rem;
              font-family:Source Han Sans CN;
              font-weight:400;
              margin-left: .3rem;
              span{
                margin-left: .15rem;
              }
            }
          }
          .qulist-s:before{
            position: absolute;
            content: '';
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 1px;
            border-bottom: 1px dashed  #ffffff;
            // background-image: linear-gradient(to right, #707070 0%, #707070 50%, transparent 50%);
            // background: #FFFFFF;
            // background-size: 10px 1px;
            // background-repeat: repeat-x;
          }
      }
    }

}

</style>
