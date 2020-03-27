<template>
<!-- 已核销 --退款申请  -->
    <div class="Succeed">
        <div @click="toggleRetun" class="top_title">
            <Toptitle :title="title" />
        </div>
        <div class="Succeed-icon">
            <img src="../assets/succeed.png" />
        </div>
        <div class="Succeed-title">退款申请提交成功</div>
        <div class="Succeed-title2">等待客服审核</div>
        <div class="Succeed-heng"></div>
        <div class="Succeed-price">
            <div class="price-name">退款金额</div>
            <div class="price-nums">￥{{money}}.00</div>
        </div>
        <div class="Succeed-btn" @click="toggleOrder">完成</div>
    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
    name:'Ordersucceed',
    data() {
        return {
            title:'退款申请',
            id:this.$route.query.id,
            money:900
        }
    },
    methods:{
        toggleRetun() {
            this.$router.go(-1)
        },
        toggleOrder(){
            this.$router.push({ path: "/"});
        }
    },
    components: {
        Toptitle
    }
}
</script>
<style lang="scss" scoped>
.Succeed{
    font-family:SourceHanSans;
    width: 10rem;
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
    .Succeed-price{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-top: .3rem;
        .price-name{
            font-size:0.32rem;
            color: #666666;
            margin-left: .64rem;
        }
        .price-nums{
            font-size: .4rem;
            margin-right: .99rem;
            color: #333333;
        }
    }
    .Succeed-btn{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 1.5rem;
        width:9.01rem;
        height:1.09rem;
        line-height: 1.09rem;
        border:1px solid rgba(0,160,233,1);
        border-radius:1rem;
        text-align: center;
        margin:0 auto;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(0,160,233,1);
    }
}
</style>