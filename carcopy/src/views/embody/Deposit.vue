<template>
<!-- 已核销 --退款申请  -->
    <div class="Succeed">
        <div @click="toggleRetun" class="order_warp">
            <div ><Toptitle :title="title" /></div>

        </div>
        <div class="Succeed-icon">
            <img src="../../assets/succeed.png" />
        </div>
        <div class="Succeed-title">正在处理，三个工作日内到账</div>
        <!--<div class="Succeed-title2">稍后请查看微信零钱</div>-->
        <div class="Succeed-heng"></div>
        <div class="Succeed-price">
            <div class="price-name">提现金额</div>
            <div class="price-nums">￥{{balance}}.00</div>
        </div>
        <div class="Succeed-btn" @click="togohome('/')">完成</div>
    </div>
</template>
<script>
    import Toptitle from "@/components/Toptitle/Toptitle";

    export default {
    name:'deposit',
        components:{
            Toptitle
        },
    data(){
      return{
          balance:0,
          title:'余额提现'
      }
    },
    created(){
        this.balance = this.$route.query.balance;

    },
    methods:{
        toggleRetun() {
            this.$router.go(-1);//返回上一层
        },
        togohome(data) {
            this.$router.push(data)
        }
    }
}
</script>
<style lang="stylus" scoped>
.Succeed{
    font-family:SourceHanSans;
    width: 10rem;
    overflow: hidden;
    margin-top: .5rem;
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
        height:1px;
        border-bottom:1px solid rgba(238,238,238,1);
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
        width:80%;
        height:0.75rem;
        line-height: 0.75rem;
        text-align: center;
        color: #00A0E9;
        font-size:0.4rem;
        border:1px solid rgba(0,160,233,1);
        border-radius:0.13rem;
        margin: 5rem auto 0;
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 30px;
    }
}
</style>
