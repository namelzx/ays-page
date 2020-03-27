<template>
    <div class="slip-succ-container">
        <div @click="toggleRetun" style=background:#fff>
            <Toptitle :title="title" />
        </div>
        <div class="succ-logo">
            <img src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/succ.png" alt="">
        </div>
        <div class="succ-text">视频上传成功</div>

        <div class="succ-heng"></div>

        <div class="check-order" @click="goBack">完成</div>
    </div>
</template>

<script>
import Toptitle from "@/components/Toptitle/Toptitle";
  export default {
    name: "UploadSucc",
    data() {
        return {
            title:'视频上传结果'
        }
    },
    methods: {
        toggleRetun() {
            this.$router.go(-1);//返回上一层
        },
        goBack() {
            this.$router.push({path:'/upload',query:{showAds:false}})
        }
    },
    components:{
        Toptitle
    }
  }
</script>

<style lang="stylus" scoped>
    .slip-succ-container {
        overflow: hidden;
    }

    .succ-logo {
        margin 2rem auto 1rem;
        width:2.08rem;
        height:2.08rem;
        background:rgba(0,160,233,1);
        border-radius:50%;
        position relative;
    }

    .succ-logo img {
        width: 1.36rem;
        height: 0.89rem;
        position absolute;
        left 0;
        right 0;
        bottom 0;
        top 0;
        margin  auto;
    }

    .succ-text {
        text-align center;
        font-size:0.48rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(51,51,51,1);
    }

    .action-btns {
        display: flex;
        margin-top: 320px
    }
    .succ-heng{
        margin 0.85rem auto 0;
        width:8.73rem;
        height:1px;
        border-bottom :1px solid rgba(238,238,238,1);
    }

    .check-order{
        position absolute;
        bottom 1.5rem;
        left 0;
        right 0;
        margin 0 auto;
        width:9.01rem;
        height:1.09rem;
        line-height 1.09rem;
        text-align center;
        border:1px solid rgba(0,160,233,1);
        border-radius:1rem;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(0,160,233,1);
    }
</style>