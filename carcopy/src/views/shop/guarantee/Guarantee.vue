<template>
<!-- 保证金  -->
    <div class="guarantee">
        <div @click="toggleRetun"><Toptitlebai :title="title" /></div>
        <div class="gu-head">

            <div class="head-title">我的余额</div>
            <div class="head-money">
                <!-- <span class="money-un">¥</span> -->
                <span class="money-nums" v-if="money">{{money.sum}}</span>
            </div>
        </div>
        <div class="gu-centre">
            <div class="centre-topup" @click="goToDetail('/embody')">
                <div class="topup-title">提现</div>
                <div class="topup-icon"><img src="../../../assets/right-fx.png" /></div>
            </div>
            <!--<div class="centre-topup" @click="toggleTopup">-->
                <!--<div class="topup-title">充值</div>-->
                <!--<div class="topup-icon"><img src="../../../assets/right-fx.png" /></div>-->
            <!--</div>-->
            <div class="centre-topup" @click="goToDetail('/bill')">
                <div class="topup-title">账单</div>
                <div class="topup-icon"><img src="../../../assets/right-fx.png" /></div>
            </div>
        </div>
    </div>
</template>
<script>
import Toptitlebai from "@/components/Toptitle/Toptitlebai";
import {GetShopByHome} from '@/api/money'
import {mapGetters} from 'vuex'

export default {
    name:'Guarantee',
    data() {
        return {
            title:'钱包',
            money:{
                sum:0,
            }
        }
    },
    computed: {
        ...mapGetters([
            'userInfo',
            'sele_shop'
        ])
    },
    created(){
        GetShopByHome(this.userInfo.id).then(res => {
            this.money = res.data
        })
    },
    methods:{
        toggleTopup() {
            let money =this.money
            this.$router.push({ path: "/shop/Guarantee/topup",query:{money} });
        },
        toggleRetreat() {
            let money =this.money
            this.$router.push({ path: "/shop/Guarantee/returned",query:{money} });
        },
        toggleRetun() {
            // this.$router.push({path:'/shop/business'});//返回上一层
            this.$router.go(-1);//返回上一层
        },
        goToDetail(data) {

            this.$router.push(data)
        }
    },
    components:{
        Toptitlebai
    }
}
</script>
<style lang="stylus" scoped>
.guarantee{
    .gu-head{
        width 10rem;
        height 5.17rem;
        overflow hidden;
        background #ea3756;
        padding-top 0.9rem;
        color #fff;
        .head-title{
            margin-top .56rem;
            margin-left .41rem;
            font-size 0.27rem;
            font-size:0.4rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(255,255,255,1);
            margin-bottom .88rem;
        }
        .head-money{
            margin-top .56rem;
            margin-left .41rem;
            display flex;
            span{
                display block;
            }
            .money-un{
                margin-top .4rem;
                font-size 0.32rem;
            }
            .money-nums{
                font-size:0.96rem;
                font-family:Source Han Sans CN;
                font-weight:bold;
            }
        }
    }
    .gu-centre{
        width 9.15rem;
        margin 0 auto;
        .centre-topup{
            height 1.24rem;
            display flex;
            justify-content space-between;
            align-items center;
            border-bottom 1px solid #DCDCDC;
            .topup-title{
                color #000000;
                font-size:0.4rem;
                font-family:Source Han Sans CN;
                font-weight:400;
            }
            .topup-icon{
                width 0.3rem;
                height 0.3rem;
                img{
                    width 100%;
                    height 100%;
                }
            }
        }
    }
}
</style>
