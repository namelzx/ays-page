<template>
    <!-- 订单详情  -->
    <div class="Orderdetails">
        <div class="pink" :style ="note">
            <div class="pink-title">
                <span>已提现</span>
            </div>
        </div>
        <div class="message" :style="message">
            <div class="me-main">
                <div class="mainTime">2019.08.08   12:00</div>
                <!-- 提现信息  -->
                <div class="Carowner">
                    <div class="Carowner-pr">
                        <div class="pr-heng"></div>
                        <div class="pr-name">提现信息</div>
                    </div>
                </div>
            </div>
            <div class="me-balance">
                <div class="balanceBox">
                    <div class="bal-color">余额提现</div>
                    <div>已转至微信零钱</div>
                    <div>已到账</div>
                </div>
            </div>
            <div class="me-balance">
                <div class="balanceBox">
                    <div class="bal-color">订单号</div>
                    <div>20190820200040011100260027715483</div>
                </div>
            </div>
            <div class="me-deposit">
                <div class="balanceBox">
                    <div class="bal-color">提现金额</div>
                    <div class="bal-rmb">
                        <span>￥</span>
                        <span class="rem-nums">800.00</span>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    name:'withdraw',
    data () {
        return {
            progress:2,
            note:{
                backgroundImage: "url(" + require("../../assets/order-pink.png") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize:'100% 100%'
            },
            message:{
                backgroundImage: "url(" + require("../../assets/order-bg2.png") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize:'100% 100%'
            },
        }
    },
    methods:{
        
    }
}
</script>
<style lang="stylus" scoped>
.Orderdetails{
    position fixed;
    top: 0;
    left: 0;
    right 0;
    bottom 0;
    background #f5f5f5;
    .pink{
        width: 10rem;
        height: 4.99rem;
        overflow: hidden;
        .pink-title{
           font-size:0.48rem;
           font-weight:500;
           color: #FFFFFF;
           text-align: center;
           margin-top: 1.17rem;
        }
    }
    .message{
        width: 9.15rem;
        min-height 4.7rem;
        margin: -2.3rem auto .37rem;
        overflow: hidden;
        .me-main{
            margin: 0.3rem;
            .mainTime{
                text-align: right;
                color: #2B2B2B;
                font-size:0.32rem;
                font-weight:400;
            }
            .Carowner{
                margin-top: .3rem;
                .Carowner-pr{
                    display: flex;
                    align-items: center;
                    .pr-heng{
                        width:0.08rem;
                        height:0.35rem;
                        background:rgba(243,192,102,1);
                        border-radius:0.04rem;
                        margin-right: .2rem;
                    }
                    .pr-name{
                        color: #333333;
                        font-size: 0.4rem;
                        font-weight:400;
                    }
                }
            }
        }
        .me-balance{
            height 1rem;
            line-height 1rem;
            border-bottom 0.01rem solid  #E5E5E5;
            .balanceBox{
                width 8rem;
                margin 0 auto;
                display flex;
                justify-content space-between;
                font-size 0.32rem;
                color #2B2B2B;
                .bal-color{
                    color #999999;
                }
            }
        }
        .me-deposit{
            height 1rem;
            line-height 1rem;
            .balanceBox{
                width 8rem;
                margin 0 auto;
                display flex;
                justify-content space-between;
                font-size 0.32rem;
                color #2B2B2B;
                .bal-color{
                    color #999999;
                }
                .bal-rmb{
                    font-size 0.48rem;
                    color #333333;
                    .rem-nums{
                        margin-left .15rem;
                    }
                }
            }
        }
    }
}
</style>