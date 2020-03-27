<template>
  <!--  充值 -->
  <div class="topup">
    <div @click="toggleRetun"><Toptitle :title="title" /></div>
    <div class="topup-head">
      <div class="headBox">
        <div class="title">充值金额</div>
        <div class="inputValue">
          <div class="un">¥</div>
          <input
            v-model="value"
            pattern="[0-9]*"
            type="number"
            oninput="if(value.length>10)value=value.slice(0,10)"
          />
        </div>
      </div>
    </div>
    <div class="hint">最低充值100元起</div>
    <div class="topup-buttom" @click="toggleGuar">确认充值</div>
  </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";

import {Topup} from '@/api/pay'

import wx from 'weixin-js-sdk'
export default {
  name: "Topup",
  data() {
      return {
          value: this.$route.query.money,
          title: '保证金',
      };
  },
    created(){
        console.log(wx)
    },
  methods:{
      toggleGuar() {
          var temp={
              total_fee:100,
          }
          Topup(temp).then(res=>{
              console.log(res)
              let data=res.data

              wx.config({
                  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                  appId:data.appId, // 必填，公众号的唯一标识
                  timestamp: data.timeStamp, // 必填，生成签名的时间戳
                  nonceStr: data.nonceStr, // 必填，生成签名的随机串
                  signature: data.signature,// 必填，签名
                  jsApiList: ['openLocation','chooseWXPay'] // 必填，需要使用的JS接口列表 这里填写需要用到的微信api openlocation为使用微信内置地图查看位置接口
              });
              wx.ready(function () {
                  wx.checkJsApi({
                      jsApiList: ['checkJsApi','openLocation'],
                      success: function (res) {}
                  });
              });
              wx.error(function(res){
                  console.log(res);
              });
          })
          // this.$router.push({ path: "/shop/Guarantee"});
      },
      toggleRetun() {
          this.$router.go(-1);//返回上一层
      }
  },
  components:{
      Toptitle
  }
};
</script>
<style lang="stylus" scoped>
.topup {
  .topup-head {
    // height: 2.63rem;
    padding-bottom .4rem;
    border-bottom: 1px solid #DCDCDC;
    overflow: hidden;
    .headBox {
      margin-left: 0.41rem;
      color: #000;
      font-size: 0.27rem;
      margin-top: 0.37rem;
      .title{
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color #333333;
      }
      .inputValue {
        margin-top: 0.5rem;
        display: flex;

        .un {
          font-size: 0.4rem;
          font-weight: bold;
          margin-top: 0.52rem;
        }

        input {
          width: 6rem;
          border: 0;
          background: none;
          color: #000000;
          font-size: 0.96rem;
          font-weight: bold;
          font-family:Source Han Sans CN;
        }
      }
    }
  }
  .hint {
    margin-left: 0.41rem;
        margin-top: 0.3rem;
      }
  .topup-buttom {
      margin 1.33rem auto;
    width: 9.15rem;
    height: 1.07rem;
    line-height 1.07rem;
    text-align center;
    color #FFFFFF;
    font-size 0.4rem;
    background: rgba(234, 55, 86, 1);
    border-radius: 1rem;
  }
}
</style>
