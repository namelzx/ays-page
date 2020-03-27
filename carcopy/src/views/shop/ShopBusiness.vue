<template>
    <div class="manage-business">
      <div @click="toggleRetun"><Toptitle :title="title" /></div>
        <!-- <van-cell-group>
         
            <van-cell @click="toggleNews('/manage-business/hours')" title="营业时间" is-link value="09:00-21:00" icon="underway-o"/>
            <van-cell @click="toggleNews('/manage-business/mainbuiss')" title="主营业务" is-link value="" icon="hotel-o"/>
            <van-cell @click="toggleNews('/manage-business/deduction')" title="抵扣券" is-link value="" icon="coupon-o"/>
            <van-cell @click="toggleNews('/manage-business/category')" title="服务类目" is-link value="汽车改装" icon="label-o"/>
            <van-cell @click="toggleNews('/manage-business/safeguard')" title="服务保障" is-link value="" icon="photo-o"/>
            <van-cell @click="toggleNews('/manage-business/slogan')" title="标语" is-link value="" icon="photo-o"/>
            <van-cell @click="toggleNews('/manage-business/advt')" title="广告图" is-link value="" icon="photo-o"/>
        </van-cell-group> -->
        <div class="group">
            <div class="group_warp" @click="toggleNews('/manage-business/hours')" title="营业时间">
              <div class="warp_left">
                <div class="left_icon"><img src="@/assets/icon-1.png" /></div>
                <div class="left_title">营业时间</div>
              </div>
              <div class="warp_right">
                <input v-model="timeValue" />
                <div class="right_icon"><img src="@/assets/right-fx.png" /></div>
              </div>
            </div>
            <div class="group_warp" @click="toggleNews('/manage-business/mainbuiss')">
              <div class="warp_left">
                <div class="left_icon2"><img src="@/assets/icon-2.png" /></div>
                <div class="left_title">主营业务</div>
              </div>
              <div class="warp_right">
                <div class="right_icon"><img src="@/assets/right-fx.png" /></div>
              </div>
            </div>
            <div class="group_warp" @click="toggleNews('/manage-business/safeguard')">
              <div class="warp_left">
                <div class="left_icon2"><img src="@/assets/icon-3.png" /></div>
                <div class="left_title">服务保障</div>
              </div>
              <div class="warp_right">
                <div class="right_icon"><img src="@/assets/right-fx.png" /></div>
              </div>
            </div>
            <div class="group_warp" @click="toggleNews('/manage-business/slogan')">
              <div class="warp_left">
                <div class="left_icon2"><img src="@/assets/icon-4.png" /></div>
                <div class="left_title">标语</div>
              </div>
              <div class="warp_right">
                <div class="right_icon"><img src="@/assets/right-fx.png" /></div>
              </div>
            </div>
            <div class="group_warp" @click="toggleNews('/manage-business/advt')">
              <div class="warp_left">
                <div class="left_icon5"><img src="@/assets/icon-5.png" /></div>
                <div class="left_title">广告图</div>
              </div>
              <div class="warp_right">
                <div class="right_icon"><img src="@/assets/right-fx.png" /></div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
  export default {
    name: "ShopBusiness",
    data() {
      return {
        title:'业务管理',
        timeValue:'09:00-21:00'
      }
    },
    components:{
      Toptitle
    },
    methods:{
      toggleRetun() {
        this.$router.push('/shop/business');//返回上一层
      },
      toggleNews(data) {
        this.$router.push(data);
      }
    }
  }
</script>

<style lang="stylus" scoped>
.group{
  .group_warp{
    display flex;
    justify-content space-between;
    border-bottom 1px solid #dcdcdc2b;
    height 1.2rem;
    align-items center;
    padding 0 .45rem;
    .warp_left{
      display flex;
      .left_icon{
        width .4rem;
        height .43rem;
        margin-right .25rem;
        img{
          width 100%;
          height 100%;
        }
      }
      .left_icon2{
        width .4rem;
        height .4rem;
        margin-top: .06rem;
        margin-right .25rem;
        img{
          width 100%;
          height 100%;
        }
      }
      .left_icon5{
        width .4rem;
        height .35rem;
        margin-right .25rem;
        margin-top: .06rem;
        img{
          width 100%;
          height 100%;
        }
      }
      .left_title{
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(51,51,51,1);
      }
    }
    .warp_right{
      display flex;
      input{
        border 0;
        text-align right;
        margin-right .3rem;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(153,153,153,1);
      }
      .right_icon{
        margin-top .1rem;
        width .32rem;
        height .32rem;
        img{
          width 100%;
          height 100%;
        }
      }
    }
  }
}
</style>