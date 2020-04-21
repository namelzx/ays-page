<template>
    <!-- 账单详情详情  -->
    <div class="Orderdetails">
        <div @click="toggleRetun">
            <Toptitle :title="title"/>
        </div>
        <div class="bill_warp">
            <div class="warp-top">
                <div class="top-head">
                    <!--<div class="head-imgs"><img :src="details.headimgurl"/></div>-->
                    <!--<div class="head-name">{{details.nickname}}</div>-->
                </div>
                <div class="top-price">
                    <!-- <span>+</span> -->
                    <span v-if="details.price_type===1">+</span>
                    <span v-else>-</span>
                    <span>{{details.price}}</span>

                </div>
            </div>
            <!-- 明细 -->
            <div class="warp-detail">
                <div class="details-name" v-if="details.pay_type===2">
                    <div class="name-title">收款账户</div>
                    <div class="name-desc">{{details.user.nickname}}-{{details.realName }}</div>
                </div>
                <div class="details-name">
                    <div class="name-title">款项说明</div>
                    <div class="name-desc">{{details.title}}</div>
                </div>
                <!--<div class="details-name">-->
                <!--<div class="name-title">商品说明</div>-->
                <!--<div class="name-desc">{{details.product_titile}}</div>-->
                <!--</div>-->
                <div class="details-name">
                    <div class="name-title">当前状态</div>
                    <div class="name-desc">交易成功</div>
                </div>
                <div class="details-name">
                    <div class="name-title">创建时间</div>
                    <div class="name-desc">{{details.create_time}}</div>
                </div>
                <div class="details-name">
                    <div class="name-title">记账编号</div>
                    <div class="name-desc">{{details.time}}</div>
                </div>

                <div class="details-name" v-if="details.partner_trade_no">
                    <div class="name-title">商户订单号</div>
                    <div class="name-desc">{{details.partner_trade_no}}</div>
                </div>

            </div>
        </div>


    </div>
</template>
<script>
    import Toptitle from "@/components/Toptitle/Toptitle";
    import {GetBillBydetails} from "@/api/money";

    export default {
        name: 'Orderdetails',
        data() {
            return {
                title: '账单详情',
                details: {},

            }
        },
        methods: {
            toggleRetun() {
                this.$router.go(-1);//返回上一层
            },
        },
        created() {

            let id = this.$route.query.id;
            GetBillBydetails(id).then(res => {
                console.log(res)
                this.details = res.data
            })
        },
        components: {
            Toptitle
        }
    }
</script>
<style lang="stylus" scoped>
    .Orderdetails {
        width: 10rem;
        .bill_warp {
            width 8.52rem;
            margin 0 auto;
            .warp-top {
                padding .7rem 0;
                border-bottom 1px solid #F1F1F1;
                position relative;
                .top-head {
                    margin 0 auto;
                    display flex;
                    align-items center;
                    width 3.2rem;
                    .head-imgs {
                        width: 0.77rem;
                        height: 0.77rem;
                        border-radius 50%;
                        overflow hidden;
                        img {
                            width 100%;
                            height 100%;
                        }
                    }
                    .head-name {
                        width 2rem;
                        color #333333;
                        margin-left .27rem;
                        font-size: 0.4rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
                .top-price {
                    margin-top .4rem;
                    padding-bottom .6rem;
                    font-size: 1.2rem;
                    font-family: PingFang SC;
                    font-weight: bold;
                    color #333333;
                    text-align center;
                }
            }
            .warp-detail {
                margin-top 0.6rem;
                .details-name {
                    display flex;
                    margin-bottom .39rem;
                    .name-title {
                        font-size: 0.32rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color #999999;
                        margin-top .1rem;
                    }
                    .name-desc {
                        width 6rem;
                        font-size: 0.4rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color #333333;
                        margin-left .55rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
</style>
