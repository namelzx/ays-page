<template>
    <div class="embody">
        <div @click="toggleRetun" style=background:#fff>
            <Toptitle :title="title"/>
        </div>
        <div class="embodyBox">
            <div class="em-cons">
                <div class="cons-title">
                    <span class="title1">提现至微信零钱</span>
                    <span class="title2">提现后查看微信零钱</span>
                </div>
                <div class="cons-money">
                    <div class="money-title">提现金额</div>
                    <div class="money-impot">
                        <div class="impot-unit">￥</div>
                        <input type="number" v-model="money"/>
                    </div>
                    <div class="money-bal">
                        <span class="bal-left">当前可提现余额{{balance}}</span>
                        <span class="bal-right" @click="allmoney">全部提现</span>
                    </div>

                </div>
            </div>
        </div>
        <div @click="togodeposit('/embody/deposit')"
             :class='["money-btn",money<100 ||money===undefined || money > balance ? "money-btn-acvite":""]'>提现
        </div>
        <div class="embodyWarn">单次提现不少于￥100， 每日上限￥20，000</div>
    </div>
</template>
<script>
    import Toptitle from "@/components/Toptitle/Toptitle";
    import {mapGetters} from 'vuex'
    import {GetUserByBalance} from '@/api/money'

    import {PostDataByAdd} from '@/api/withdrawal'
    import {Toast} from "vant";

    export default {
        name: 'embody',
        data() {
            return {
                title: "提现",
                money: 0, //金额
                balance: 1000, //可用余额
                pay: true,
            }
        },
        computed: {
            ...mapGetters([
                'userInfo',
                'sele_shop'
            ])
        },
        created() {
            GetUserByBalance(this.userInfo.id).then(res => {
                this.balance = res.data
                // this.balance=1000;
            })
        },
        methods: {
            toggleRetun() {
                this.$router.go(-1);//返回上一层
            },
            allmoney() {
                this.money = this.balance
            },
            togodeposit(data) {
                if (this.money < 100 || this.money > this.balance) {
                    return
                } else {

                    var temp = {
                        shop_id: this.sele_shop.id,
                        price: this.money,
                        user_id: this.userInfo.id
                    }
                    if (this.pay === false) {
                        Toast('提现请求中');
                        return
                    }
                    this.pay = false;

                    PostDataByAdd(temp).then(res => {
                        if (res.code === 10001) {
                            Toast(res.msg)
                            this.pay = true
                            return false
                        }
                        this.$router.push({path: data, query: {balance: this.money}})

                    })
                }

            }
        },
        components: {
            Toptitle
        }
    }
</script>
<style lang="stylus" scoped>
    .embody {

    }

    .embodyBox {
        overflow hidden;
        width: 9.15rem;
        margin 0rem auto .2rem;
        background #ffffff;
        margin-top 40px;

        .em-cons {
            width 8.32rem;
            margin 0.3rem auto;

            .cons-title {
                display flex;
                justify-content space-between;

                .title1 {
                    width 50%;
                    display inline-block;
                    text-align left;
                    font-scale 0.32rem;
                    color #333333;
                }

                .title2 {
                    text-align right;
                    width 50%;
                    display inline-block;
                    font-size: 0.27rem;
                    color #666666;
                }
            }

            .cons-money {
                margin-top .9rem;

                .money-title {
                    color #333333;
                    font-size: 0.32rem;
                }

                .money-impot {
                    width 8.32rem;
                    height 1.3rem;
                    line-height 1.3rem;
                    border-bottom 1px solid #666666;
                    display flex;
                    color #333333;
                    font-size: 0.8rem;
                    margin-top .2rem;

                    .impot-unit {
                        /*margin-right .2rem;*/
                        border 0;
                    }

                    input {
                        width 6rem;

                        border 0;
                    }
                }

                .money-bal {
                    margin-top .2rem;
                    color #666666;
                    font-size: 0.32rem;

                    .bal-left {
                        width 50%;
                        display inline-block;
                        text-align left;
                    }

                    .bal-right {
                        width 50%;
                        display inline-block;
                        text-align right;
                        color #E9375B;
                    }
                }

            }
        }
    }

    .money-btn {
        text-align center;
        font-size: 0.4rem;
        font-weight 500;
        color #FEFEFE;
        margin 0.67rem auto .2rem;
        width: 9.01rem;
        height: 1.09rem;
        line-height 1.09rem;
        background: rgba(233, 55, 91, 1);
        border-radius: 1rem;
    }

    .money-btn-acvite {
        background-color #E9E9E9;
    }

    .embodyWarn {
        width 9.15rem;
        margin 0 auto;
        color #666666;
        font-size: 0.32rem;
        text-align right;
    }
</style>
