<template>
    <div class="content-box">
        <div>
            <template v-for="(item,idx) in list">
                <div class="box-item" @click="clickToDetail(item.id,item.status)">
                    <template>
                        <div class="price-date">
                            <div class="bill-price">
                                <span>{{item.ins_cost}}</span><span>RMB</span>
                            </div>
                            <div class="bill-date">
                                <div class="data-time">{{item.create_time}}</div>
                                <div class="data-number">编号：{{item.id}}</div>
                            </div>
                        </div>
                        <div class="bill-info">

                            <div class="info-item"><span class="info-title">状态：</span>
                                <span class="info-content" style="color: red;" v-if="item.status==='驳回'">待处理</span>
                                <span class="info-content" style="color: red;" v-else>{{item.status}}

                                </span>
                            </div>
                            <div class="info-item"><span class="info-title">产品：</span>
                                <span class="info-content" v-if="item.product_titile">{{item.product_titile}}</span>
                                <span class="info-content" v-else>商品已下架</span>
                            </div>
                            <div class="info-item"><span class="info-title">车型：</span><span class="info-content">{{item.model_title}}</span>
                            </div>
                            <div class="info-item"><span class="info-title">门店：</span><span class="info-content">{{item.shop_title}} </span>
                            </div>
                            <div class="info-item" v-if="item.pre"><span class="info-title">客服：</span><span class="info-content">{{item.pre.realName}}</span>
                            </div>
                            <div class="info-item"><span class="info-title">备注：</span><span
                                    class="info-content">客服留言</span>
                            </div>
                            <div class="info-item" v-if="item.status===6"><span
                                    class="info-title inft-title-out">*退货原因：</span><span
                                    class="info-content">{{item.reason}}</span>
                            </div>
                        </div>
                        <div class="re-reason" v-if="item.is_rejected==1&&item.rejected!=='财审1'&&item.rejected!=='财审2'&&item.rejected!=='待结算'">
                            <span class="type">*驳回原因：</span>
                            <span>{{item.note.ucontent}} {{item.rejected}} 驳回</span>
                            <!--<span class="type"></span>-->
                        </div>
                    </template>
                    <!--<div v-if="item.eva_info">-->
                        <!--<div class="rate" v-if="item.is_eva===1"-->
                             <!--@click.stop="clickRate(item.id)">评价-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div v-else>-->
                        <!--<div class="nrate" v-if="item.status==='待审核'||item.status==='已结算'||item.status==='已评价'"-->
                        <!--&gt;评价-->
                        <!--</div>-->
                    <!--</div>-->
                </div>
                <!--<div class="rate-content" v-if="item.is_eva===1">-->
                    <!--<div class="star">-->
                        <!--<van-rate color="#FF5861" void-color="#eee" readonly :value="item.eva_info.score"/>-->
                        <!--<div class="star_name">{{item.eva_info.score}}分</div>-->
                    <!--</div>-->
                    <!--<div class="rate-text">-->
                        <!--<span>{{item.eva_info.content}}</span>-->
                    <!--</div>-->
                    <!--<div class="img-list">-->
                        <!--<div class="img-item" v-for="pic of item.eva_info.img_list">-->
                            <!--<img :src="pic" alt=""/>-->
                        <!--</div>-->
                    <!--</div>-->

                <!--</div>-->
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InstallCard",
        props: {
            list: {
                type: Array
            },
            curIndex: {
                type: Number
            }
        },
        data() {
            return {
                showRate: false,
                rate: 4,
                value: '',
                curRate: 0
            }
        },
        methods: {
            clickRate(index) {
                if (this.curRate === index) {
                    this.curRate = undefined;
                    return;
                }
                this.curRate = index
                this.showRate = !this.showRate
            },
            clickToDetail(idx, sta) {
                let id = idx;
                let status = sta;
                this.$router.push({path: '/order-detail', query: {id}})
                // this.$router.push('/order-detail/' + id)
                // this.$router.push({path:'/order-detail/',params:{id:id,status:status}})
            }
        }

    }
</script>

<style lang="stylus" scoped>
    //   卡片信息
    .content-box {
        padding: 15px 16px;
        /*margin-top 1rem;*/
    }

    .box-item {
        padding 0 15px 12px;
        border-radius: 10px;
        margin-bottom: 15px;
        position: relative;
        box-shadow: 0rem 0.03rem 0.13rem 0rem rgba(153, 153, 153, 0.2);
    }

    .price-date, .bill-order-status {
        display flex;
    }

    .price-date {
        padding: 10px 0 0;

    }

    .bill-price {
        font-size: 0.96rem;
        font-family: DIN;
        font-weight: bold;
        width 70%;
        color #CD4B4C;
    }

    .bill-price span:last-child {
        font-size: 12px;
        margin-left: 11px;
    }

    .bill-date {
        color: #2B2B2B;
        font-size: 12px;
        width: 30%;
        .data-time {

        }
        .data-number {
            font-size: 0.4rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            margin-top: .1rem;
        }
    }

    .bill-order-status {
        margin-top: 8px;
        // margin-bottom: 12px;
    }

    .bill-order {
        font-size: 15px;
        width: 50%;
    }

    .bill-status {
        font-size: 12px;
        color #666;
    }

    .bill-status span:last-child {
        color: #CD4B4C
    }

    //  产品信息
    .bill-info {
        color: #666;
        font-size 12px;
        overflow hidden;
    }

    .bill-info .inft-title-out {
        color #CD4B4C;
    }

    .bill-info .info-item {
        margin: 10px 0 0;
    }

    .bill-info .info-item .info-content {
        color: #333;
        margin-left: 4px;
    }

    .re-reason {
        margin: 10px 0 0;
    }

    .re-reason .type {
        color: #CD4B4C;
        font-size: 12px;
    }

    .re-reason span:nth-child(2) {
        color: #333;
        font-size: 12px;
    }

    //评价
    .rate {
        position: absolute;
        right: 15px;
        bottom 12px;
        font-size: 12px;
        color: #000;
        border-bottom: 3px solid #cd4b4c;
        padding: 0 2px;
        border-radius: 2px;
        line-height: 8px;
        padding: 4px;
    }

    .nrate {
        position: absolute;
        right: 15px;
        bottom 12px;
        font-size: 12px;
        color: #909399;
        border-bottom: 3px solid #cd4b4c;
        border-radius: 2px;
        line-height: 8px;
        padding: 4px;
    }

    .rate:hover {
        cursor: pointer;
    }

    .rate-content {
        border: 1px solid #e5e5e5;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        margin-bottom: 15px;
        padding-bottom .3rem;
    }

    .rate-content .star {
        margin: 10px .3rem;
        display flex;
        color #FF5861;
        .star_name {
            margin-left .3rem;
            font-size: 0.32rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(255, 88, 97, 1);
            margin-top -.05rem;
        }
        /deep/ .van-rate__icon {
            font-size 0.35rem;
        }
    }

    .rate-text {
        font-size: 0.35rem;
        font-family: Adobe Heiti Std;
        font-weight: normal;
        color: rgba(0, 0, 0, 1);
        overflow hidden;
        // width: 99%;
        margin 0 .3rem;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        display -webkit-box;
        -webkit-box-orient vertical;
        -webkit-line-clamp: 3;
    }

    .img-list {
        // margin 0rem;
        margin-left .2rem;
    }

    .img-list .img-item {
        display: inline-block;
        margin-top: 13px;
        margin-right: 6px;
    }

    .img-list .img-item img {
        width: 2.77rem;
        height: 2.77rem;
    }
</style>
