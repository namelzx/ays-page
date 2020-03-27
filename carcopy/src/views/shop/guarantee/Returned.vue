<template>
  <!--  退回 -->
  <div class="topup">
    <div @click="toggleRetun"><Toptitle :title="title" /></div>
    <div class="topup-head">
      <div class="headBox">
        <div class="title">退回金额</div>
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
    <div class="hint">可退回余额{{value}}元，退回到微信零钱</div>
    <div class="topup-buttom" @click="toggleGuar">确认退回</div>
  </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
  name: "Topup",
  data() {
    return {
      value: this.$route.query.money,
      title:'保证金',
    };
  },
  methods:{
      toggleGuar() {
          this.$router.push({ path: "/shop/Guarantee"});
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