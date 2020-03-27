<template>
<!-- 已核销 --发表评论成功  -->
    <div class="Succeed">
        <div @click="toggleRetun" class="top_title">
            <Toptitle :title="title" />
        </div>
        <div class="Succeed-icon">
            <img src="../assets/succeed.png" />
        </div>
        <div class="Succeed-title">评论发表成功</div>
        <div class="Succeed-title2">感谢你的支持</div>
        <div class="Succeed-heng"></div>
        <div class="Succeed-btn" @click="toggleOrder">完成</div>
    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
    name:'Ordersucceed',
    data() {
        return {
            title: "已安装评论"
        }
    },
    methods:{
        toggleRetun() {
            this.$router.go(-1); //返回上一层
        },
        toggleOrder() {
            this.$router.push({ path: "/" });
        }
    },
    components: {
        Toptitle
    }
}
</script>
<style lang="scss" scoped>
.Succeed{
    overflow: hidden;
    font-family:SourceHanSans;
    padding-bottom: .5rem;
    .Succeed-icon{
        width:2.08rem;
        height:2.08rem;
        margin: 1.43rem auto 0.8rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .Succeed-title{
        text-align: center;
        font-size: 0.48rem;
        color: #333333;
    }
    .Succeed-title2{
        text-align: center;
        margin-top: .47rem;
        font-size:0.32rem;
        color: #666666;
    }
    .Succeed-heng{
        margin: 0.8rem auto 0;
        width:8.73rem;
        height:0.02rem;
        border:1px solid rgba(238,238,238,1);
    }
    .Succeed-btn{
        width:9.01rem;
        height:1.09rem;
        line-height: 1.09rem;
        text-align: center;
        border:1px solid rgba(0,160,233,1);
        border-radius:1rem;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(0,160,233,1);
        position: absolute;
        bottom: 1.5rem;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
}
</style>