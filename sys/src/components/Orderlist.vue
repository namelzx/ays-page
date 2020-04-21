<template>
    <div class="orderlist">
        <div class="content" v-for="(item,index) in orderlist" :key="index" >
            <van-skeleton
                    title
                    animate
                    :row="5"
                    :loading="loading"
            >
                <div class="contentBox" @click="Orderdetails(item.id)">
                    <div class="price">
                        <div class="price-left">
                            <span class="nums">{{item.id}}</span>
                        </div>
                        <div class="price-time">
                            <div>{{item.create_time}}</div>
                        </div>
                    </div>
                    <div class="state">
                        <div class="state-status">
                            <span>状态：</span>
                            <span class="judge" v-if="item.status==='驳回'">待处理</span>

                            <span class="judge" v-else>{{item.status}}
                    <span v-if="item.is_eva===1">(已评价)</span>
                    </span>

                        </div>
                    </div>
                    <div class="product">
                        <span>产品：</span>
                        <span class="product-names">{{item.product_titile}}</span>
                        <!--<span class="product-names"  v-else>商品已下架</span>-->
                    </div>
                    <div class="product">
                        <span>车型：</span>
                        <span class="product-names">{{item.model_title}}</span>
                    </div>
                    <div class="product">
                        <span>联系人：</span>
                        <span class="product-names">{{item.contact}}{{item.tel}}</span>
                    </div>
                    <div class="product" v-if="item.status!=='待处理'&&item.status!=='待确认(业务)'&&item.status!=='待确认(门店)'">
                        <span>门店：</span>
                        <span class="product-names">{{item.shop_title}}</span>
                    </div>
                    <div class="product" v-if="item.status!=='待处理'||item.status!=='待确认(业务)'||item.status!=='待确认(门店)'">
                        <span>安装联系：</span>
                        <span class="product-names">{{item.shop_tel}}</span>
                    </div>
                    <div class="product" v-if="item.status!=='待处理'||item.status!=='待确认(业务)'||item.status!=='待确认(门店)'">
                        <span>地址：</span>
                        <span class="product-names">{{item.shop_location}}</span>
                    </div>
                </div>
                <div v-if="item.status==='待安装'" class="price-btn" @click="proceed(item)">核销</div>
            </van-skeleton>
        </div>
          <!---->
        <!--</van-popup>-->
        <div class="orderCode" v-if="cancel" @touchmove.prevent>
            <div class="CodeHe">
                <div class="Co-title">订单核销码</div>
                <div class="Co-number">{{verification_code}}</div>
                <div class="Co-scan">

                    <img src="@/assets/code.png"/>
                    <div id="qrcode" ></div>

                </div>
                <div class="Co-remind">
                    <img src="@/assets/remind.png"/>
                    <span>提供核销码即视为订单完成！</span>
                </div>
                <div class="Co-Btns">
                    <div class="Btns-left" @click="toggleShowCode">取消</div>
                    <div class="Btns-right" @click="clickToSlip">确认</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { Popup } from 'vant';
    import QRCode  from "qrcodejs2"

    export default {
        name: 'Orderlist',
        props: ['orderlist', 'num'],
        data() {
            return {
                loading: true,
                cancel: false,
                verification_code:'',
                link: 'https://baidu.com'

            }
        },
        components:{
            Popup,
            QRCode
        },
        methods: {
            qrcode () {
                let that = this;
                let qrcode = new QRCode('qrcode', {
                    width: 200,
                    height: 200,        // 高度
                    text:  this.link,   // 二维码内容
                    // render: 'canvas' ,   // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
                    // background: '#f0f',   // 背景色
                    // foreground: '#ff0'    // 前景色
                })
            },
            //点击弹出核销订单
            proceed(row) {
                this.cancel = !this.cancel;
                this.verification_code=row.verification_code
                this.link='http://pd.aesups.com/shop/#/slip-voucher?id='+row.id
                this.$nextTick (function () {
                    this.qrcode();
                })
            },
            Orderdetails(index) {
                let id = index
                this.$router.push({path: '/order/orderdetails', query: {id: id}})
            },
            toggleShowCode() {
                this.cancel = !this.cancel;
                //   this.codevalue = "";
            },
            clickToSlip() {
                this.$emit('handelist')
                this.cancel = !this.cancel;
                //   this.slipSucc = !this.slipSucc;

            }
        },
        mounted() {
            setTimeout(function () {
                this.loading = false;
            }.bind(this), 1000)
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .orderlist {
        // margin-top: 3.5rem;
        padding-bottom: 1.6rem;
        width: 10rem;
        overflow: hidden;
        /deep/ .van-skeleton__content {
            margin-top: .7rem;
        }
        .price-btn {
            width: 1.57rem;
            height: 0.83rem;
            line-height: 0.83rem;
            text-align: center;
            border: 1px solid rgba(234, 55, 86, 1);
            border-radius: 0.41rem;
            font-size: 0.32rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #EA3756;
            margin-top: -.2rem;
            position: absolute;
            bottom: 10px;
            right: 10px;
        }
        .content {
            margin: 0 auto;
            margin-top: .4rem;
            width: 9.15rem;

            padding-bottom: .3rem;
            border-radius: 0.27rem;
            box-shadow: 0px 3px 14px 0px rgba(153, 153, 153, 0.2);
            overflow: hidden;
            position: relative;
            .contentBox {
                margin: 0 0.2rem;
                height: 100%;
                .price {
                    display: flex;
                    justify-content: space-between;
                    .price-left {
                        color: $color;
                        display: flex;
                        margin-left: .2rem;
                        span {
                            display: block;
                        }
                        .nums {
                            font-size: 0.8rem;
                            // font-family:Source Han Sans CN;
                            font-weight: 400;
                            color: rgba(43, 43, 43, 1);
                        }

                    }
                    .price-time {
                        font-size: 0.27rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: rgba(43, 43, 43, 1);
                        margin-top: .2rem;
                        margin-right: .4rem;
                        .time-num {
                            font-size: 0.4rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: rgba(43, 43, 43, 1);

                        }
                    }
                }
                .state {
                    margin-left: .2rem;
                    display: flex;
                    font-size: .32rem;
                    .state-num {
                        color: #2B2B2B;
                        font-size: 0.4rem;
                        font-weight: 400;
                        width: 4.7rem;
                    }
                    .state-status {
                        font-size: 0.32rem;
                        font-weight: 400;
                        color: #666666;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        .judge {
                            color: $color;
                            margin-left: .2rem;
                        }
                    }
                }
                .product {
                    margin-top: .25rem;
                    margin-left: .2rem;
                    font-size: 0.32rem;
                    color: #666666;
                    font-weight: 400;
                    .product-names {
                        color: #333333;
                    }
                }
                .rate {
                    margin-left: .2rem;
                    margin-top: .2rem;
                    padding-bottom: .8rem;
                    font-size: 0.32rem;
                    color: #999999;
                    display: flex;
                    .ratetitle {
                        color: #666666;
                    }
                    .ratesp {
                        margin-right: .1rem;
                    }
                    .ra-active {
                        color: $color;
                    }
                }
                .reject {
                    margin-left: .2rem;
                    margin-top: .2rem;
                    padding-bottom: .4rem;
                    font-size: 0.32rem;
                    color: $color;
                    .cause {
                        color: #333333;
                    }
                    .await {
                        color: $color;
                        margin-left: .2rem;
                    }
                }
            }
        }
    }
    .orderCode {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 20;
        .CodeHe {
            margin: 5rem auto 0;
            width:7.2rem;
            height:8.61rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.27rem;
            overflow: hidden;
            text-align: center;
            position: relative;
            .Co-title {
                margin-top: 0.37rem;
                font-size:0.45rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color: #333333;
            }
            .Co-number {
                font-size:0.45rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color: #333333;
            }
            .Co-scan {
                width: 4.47rem;
                height: 4.47rem;
                margin: 0.2rem auto;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                }
                #qrcode{
                    position: absolute;
                    top: 28%;
                    left: 20%;

                }
            }
            .Co-remind {
                display: flex;
                img {
                    display: inline-block;
                    width: 0.37rem;
                    height: 0.37rem;
                    margin-top: 0.15rem;
                    margin-left: 1.3rem;
                    margin-right: 0.2rem;
                }
                span {
                    margin-top: .1rem;
                    font-size: 0.32rem;
                    color: #000000;
                    display: inline-block;
                }
            }
            .Co-Btns {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                display: flex;
                height: 1.2rem;
                line-height: 1.2rem;
                text-align: center;
                border-top: 0.01rem solid #e5e5e5;
                font-size: 0.45rem;
                .Btns-left {
                    width: 50%;
                    border-right: 0.01rem solid #e5e5e5;
                    box-sizing: border-box;
                    color: #999999;
                }
                .Btns-right {
                    width: 50%;
                }
            }
        }
    }


</style>
