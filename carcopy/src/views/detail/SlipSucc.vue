<template>
    <div class="slip-succ-container">
        <div @click="toggleRetun">
            <Toptitle :title="title" />
        </div>
        <div class="succ-logo">
            <img src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/succ.png" alt="">
        </div>
        <div class="succ-text">核销成功</div>
        <div class="succ-heng"></div>

        <div class="action-btns">
            <div class="go-back" @click="goBack">完成</div>
            <!-- <div class="check-order" @click="toggleOff">查看</div> -->
        </div>
    </div>
</template>

<script>
import Toptitle from "@/components/Toptitle/Toptitle";
  export default {
    name: "SlipSucc",
    data() {
        return {
            title: "核销结果提示",
        }
    },
    methods: {
        toggleRetun() {
            this.$router.push('/');
        },
      goBack() {
        this.$router.push('/')
      },
    //   toggleOff() {
    //       this.$router.push({path:'/offorder',query:{id:2}})
    //   }
    },
    components: {
        Toptitle
    }
  }
</script>

<style lang="stylus" scoped>
    .slip-succ-container {
        overflow: hidden;
    }

    .succ-logo {
        width: 2.3rem;
        height: 2.3rem;
        border: 1px solid #e5e5e5;
        border-radius: 50%;
        background: #00a0e9;
        margin: 60px auto 0;
        position relative;
    }

    .succ-logo img {
        position absolute;
        left 0;
        right 0;
        top 0;
        bottom  0;
        width: 1.36rem;
        height: .89rem;
        margin  auto;
    }

    .succ-text {
        text-align center;
        margin-top: 20px;
        font-size:0.48rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(51,51,51,1);
    }
    .succ-heng{
        margin 1rem auto 0;
        width:8.73rem;
        height:1px;
        border-bottom:1px solid rgba(238,238,238,1);
    }

    .action-btns {
        display: flex;
        margin-top: 40px
    }

    .go-back{
        position absolute;
        bottom 2rem;
        left 0;
        right 0;
        width:9.01rem;
        height:1.09rem;
        line-height 1.09rem;
        text-align center;
        margin 0 auto;
        border:1px solid rgba(0,160,233,1);
        border-radius:1rem;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(0,160,233,1);
    }
</style>