<template>
    <div>

        <div class="messagelist">
            <div @click="popups(item)"
                 v-for="(item,index) in storelist"
                 :key="index">
                <van-skeleton animate :row="2" avatar-size="100px" avatar :loading="loading">
                    <div class="listms">
                        <div class="listms-img">
                            <img src="../../assets/Message-1.png"/>
                            <div class="yuan"></div>
                        </div>
                        <div class="listms-ce">
                            <div class="ce-title">
                                <div class="name">{{item.title}}</div>
                                <div class="time">{{item.create_time}}</div>
                            </div>
                            <div class="ce-details">{{item.desc}}</div>
                        </div>
                    </div>
                </van-skeleton>
            </div>
        </div>



        <!-- 新订单信息  -->
        <div class="New-order" v-if="conceal==1" @touchmove.prevent>
            <div class="orderBox">
                <div class="title">安装单：新订单消息</div>
                <div class="order-xq">您有一笔新的订单，请尽快处理！</div>
                <div class="order-odd">
                    <span>订单号：</span>
                    <span class="odd2">{{info.id}}</span>
                </div>
                <div class="order-odd">
                    <span>安装产品：</span>
                    <span class="odd2">{{info.product_title}}</span>
                </div>
                <div class="order-odd">
                    <span>车型：</span>
                    <span class="odd2">{{info.model_title}}</span>
                </div>
                <div class="order-odd">
                    <span>派单客服：</span>
                    <span class="odd2">{{info.realName}}</span>
                </div>

                <div class="order-odd">
                    <span>派单日期：</span>
                    <span class="odd2">{{info.create_time}}</span>
                </div>
                <div class="order-query">请尽快处理此单，如有疑问可联系电商客服！</div>
                <div class="return-close">
                    <div class="close-left" @click="toggleTab">关闭</div>
                    <div class="close-right" @click="Orderdetails(info.id)">查看详情</div>
                </div>
            </div>
        </div>



        <!-- 订单退货信息  -->
        <div class="return" v-if="conceal==3" @touchmove.prevent>
            <div class="returnBox">
                <div class="title">安装单：订单退货信息</div>
                <div class="return-xq">您有一笔安装订单已退货，此安装已取消！请 您知晓</div>
                <div class="return-odd">
                    <span>订单号：</span>
                    <span class="odd2">{{info.order_id}}</span>
                </div>
                <div class="return-odd">
                    <span>安装产品：</span>
                    <span class="odd2">{{info.product_title}}</span>
                </div>
                <div class="return-odd">
                    <span>车型：</span>
                    <span class="odd2">{{info.model_title}}</span>
                </div>
                <div class="return-odd">
                    <span>取消时间：</span>
                    <span class="odd2">{{info.create_time}}</span>
                </div>
                <div class="return-query">如有疑问可联系电商客服！感谢您的支持与配合。</div>
                <div class="return-close" @click="toggleTab">关闭</div>
            </div>
        </div>


        <!--门店审核通知弹窗  -->
        <div class="audit" v-if="conceal==6||conceal==4" @touchmove.prevent>
            <div class="auditBox">
                <div class="title">门店审核通知</div>
                <div class="feedback">{{info.title}}</div>
                <div class="shops">
                    <span class="shops-name">审核门店：</span>
                    <span class="shops-titles">{{info.shopname}}</span>
                </div>
                <div class="shops">
                    <span class="shops-name">审核结果：</span>
                    <span class="shops-titles">{{info.content}}</span>
                </div>
                <div class="shop-close" @click="toggleTab">
                    <div style="text-align: center;width: 50%">
                        关闭
                    </div>
                    <div @click="toshop" v-if="conceal===6" style="text-align: center;width: 50%">
                        修改信息
                    </div>

                </div>
            </div>
        </div>

        <!-- 用户评价信息  -->
        <div class="evaluate" v-if="conceal==5" @touchmove.prevent>
            <div class="evaluateBox">
                <div class="title">新安装单评价信息</div>
                <div class="ev-xq">您的店铺服务非常好，车主给了您5星好评，请再接再励，用心服务好每个车主哦</div>
                <div class="ev-odd">
                    <span>订单号：</span>
                    <span class="odd2">{{info.order_id}}</span>
                </div>
                <div class="ev-odd">
                    <span>店铺评分：</span>
                    <span class="odd2">{{info.eva.shop}}分</span>
                </div>
                <div class="ev-odd">
                    <span class="odd1">用户评价：</span>
                    <span class="odd2">{{info.eva.content}}</span>
                </div>
                <!-- 图片  -->
                <div class="ev-imgs">
                    <img v-for="item in imglist" :src="item"/>

                </div>
                <div class="ev-close">
                    <div class="close-left" @click="toggleTab">关闭</div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: 'Messagelist',
        //   props:['Storelist'],
        props: ["storelist"],
        data() {
            return {
                imglist:'',
                imgs: 2,
                conceal: 0,
                imgs: 2,
                conceal: 0,
                loading: true,
                info: {},
            }
        },
        filters: {
            parseTime(time, cFormat) {
                if (arguments.length === 0) {
                    return null
                }
                if (!time) {
                    return null
                }
                const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
                let date
                if (typeof time === 'object') {
                    date = time
                } else {
                    if (('' + time).length === 10) time = parseInt(time) * 1000
                    date = new Date(time)
                }
                const formatObj = {
                    y: date.getFullYear(),
                    m: date.getMonth() + 1,
                    d: date.getDate(),
                    h: date.getHours(),
                    i: date.getMinutes(),
                    s: date.getSeconds(),
                    a: date.getDay()
                }
                const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
                    let value = formatObj[key]
                    // Note: getDay() returns 0 on Sunday
                    if (key === 'a') {
                        return ['日', '一', '二', '三', '四', '五', '六'][value]
                    }
                    if (result.length > 0 && value < 10) {
                        value = '0' + value
                    }
                    return value || 0
                })
                return time_str
            }

        },
        methods: {
            toshop(){
                this.$router.push("/add-shop"); // 动态跳转
            },
            Orderdetails(id){
                this.$router.push({path:'/order-detail',query:{id}})
            },
            popups(row) {
                console.log(row)
                this.conceal = row.type;
                this.info=row
                if(this.info.type==5){
                    this.imglist=this.info.eva.img.split(',');
                }
                // this.ModalHelper.afterOpen();
            },
            toggleTab() {
                this.conceal = 0;
                // this.ModalHelper.beforeClose();
            },
            //进入门店
            toggleShop() {
                this.$router.push({path: '/shop/business'})
            },
            //查看评论
            toggleProduct() {
                this.$router.push({path: '/product'})
            }
        },
        mounted() {
            setTimeout(
                function () {
                    this.loading = false;
                }.bind(this),
                1000
            );
        }
    }
</script>


<style lang="stylus" scoped>
    .Da-search{
        z-index: 10;
        background-color: #ffffff;
        padding-top: .2rem;
        padding-bottom: .2rem;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        .searchBox{
            width: 9rem;
            margin:0 auto;
            display: flex;
            justify-content: space-between;
            height: 0.75rem;
            align-items: center;
            .return-icon{
                width 0.7rem;
                height 0.7rem;
                margin-top .2rem;
                img{
                    width 100%;
                    height 100%;
                }
            }
            .inputs{
                width:9rem;
                height:0.75rem;
                .inp{
                    border-radius:0.36rem;
                    padding-left .5rem;
                    font-size:0.32rem;
                    width:8.45rem;
                    height:0.75rem;
                    line-height: 0.75rem;
                    font-size:0.4rem;
                    border: 0;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color: #000000;
                    background #f1f1f1;

                }
                input::-webkit-input-placeholder{
                          color: #999999;
                          text-align center;
                      }
            }
            .calendar{
                font-size: 0.4rem;
                font-weight:400;
                color: #666666;
            }
        }
    }
    .messagelist {
        width: 10rem;
        height: 100%;
        background-color: #ffffff;
        margin-top: .28rem;
        border-radius: 0.27rem 0.27rem 0 0;
        overflow: hidden;
        .older {
            font-size: 0.32rem;
            color: #666666;
            margin-top: .25rem;
            margin-left: .4rem;
        }
        .listms {
            margin-top: .25rem;
            margin-left: .25rem;
            display: flex;
            justify-content: space-between;
            .listms-img {
                width: 1.49rem;
                height: 1.49rem;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                }
                .yuan {
                    position: absolute;
                    top: 0.1rem;
                    right: 0.1rem;
                    width: 0.16rem;
                    height: 0.16rem;
                    background: rgba(255, 0, 0, 1);
                    border-radius: 50%;
                }
            }
            .listms-ce {
                width: 8.16rem;
                height: 1.72rem;
                border-bottom: 1px solid #F4F4F4;
                .ce-title {
                    display: flex;
                    justify-content: space-between;
                    margin-top: .2rem;
                    .name {
                        font-size: 0.4rem;
                        font-weight: 400;
                        color: #010101;
                    }
                    .time {
                        font-size: 0.27rem;
                        color: #666666;
                        margin-right: .4rem;
                    }
                }
                .ce-details {
                    margin-top: .05rem;
                    color: #999999;
                    font-size: 0.32rem;
                }
            }
        }
        .listms:last-child .listms-ce {
            border-bottom: 0;
        }
    }

    .audit {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .1);
        .auditBox {
            width: 9.15rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.13rem;
            margin: 5rem auto 0;
            overflow: hidden;
            position: relative;
            .title {
                margin-top: .53rem;
                text-align: center;
                color: #000000;
                font-size: 0.45rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                position: relative;
            }
            .title:before {
                position: absolute;
                content: '';
                width: 0.67rem;
                height: 0.05rem;
                background: rgba(234, 55, 86, 1);
                border-radius: 0.03rem;
                top: .7rem;
                left: 4.2rem;
            }
            .feedback {
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #000000;
                margin-top: .5rem;
                margin-left: .48rem;
            }
            .shops {
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                margin-left: .48rem;
                margin-top: .5rem;
                padding-bottom 0.3rem;
                .shops-name {
                    color: #999999;
                }
                .shops-titles {
                    color: #000000;
                }
            }
            .shops1 {
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                margin-left: .48rem;
                margin-top: .25rem;
                padding-bottom 1.4rem;
                .shops-name {
                    color: #999999;
                }
                .shops-titles {
                    color: #000000;
                }
            }
            .shop-close {
                /*position: absolute;*/
                display:flex;
                justify-content: space-between;
                text-align: center;
                height: 1.09rem;
                line-height: 1.09rem;
                border-top: 1px solid #DCDCDC;
                text-align: center;
                font-size: 0.4rem;
                color: #000000;
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                .close-shut {
                    width 50%;
                    border-right: 1px solid #DCDCDC;
                    box-sizing border-box;
                }
                .close-enter {
                    width 50%;
                    color: rgba(234, 55, 86, 1);
                }
            }
        }
    }

    .return {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .1);
        .returnBox {
            width: 9.15rem;
            // height:7.63rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.13rem;
            margin: 5rem auto 0;
            overflow: hidden;
            position: relative;
            .title {
                margin-top: .53rem;
                text-align: center;
                color: #000000;
                font-size: 0.45rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                position: relative;
            }
            .title:before {
                position: absolute;
                content: '';
                width: 0.67rem;
                height: 0.05rem;
                background: rgba(234, 55, 86, 1);
                border-radius: 0.03rem;
                top: .7rem;
                left: 4.2rem;
            }
            .return-xq {
                margin-top: .5rem;
                margin-left: .48rem;
                width: 8.37rem;
                line-height: 0.64rem;
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #000000;
            }
            .return-odd {
                margin-left: .48rem;
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                width: 8.37rem;
                margin-top: .3rem;
                color: #999999;
                .odd1 {
                    width 2rem;
                    display: inline-block;
                }
                .odd2 {
                    color: #000000;
                }
            }
            .return-query {
                font-size: .4rem;
                color: #000000;
                width: 8.37rem;
                margin-left: .48rem;
                margin-top: .3rem;
                padding-bottom 1.4rem;
            }
            .return-close {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 1.09rem;
                line-height: 1.09rem;
                border-top: 1px solid #DCDCDC;
                text-align: center;
                font-size: 0.4rem;
                color: #000000;
            }
        }
    }

    .reject {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .1);
        .rejectBox {
            width: 9.15rem;
            height: 7.96rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.13rem;
            margin: 5rem auto 0;
            overflow: hidden;
            position: relative;
            .title {
                margin-top: .73rem;
                text-align: center;
                color: #000000;
                font-size: 0.4rem;
                position: relative;
            }
            .title:before {
                position: absolute;
                content: '';
                width: 0.67rem;
                height: 0.05rem;
                background: rgba(234, 55, 86, 1);
                border-radius: 0.03rem;
                top: .7rem;
                left: 4.2rem;
            }
            .feedback {
                font-size: 0.32rem;
                color: #000000;
                margin-top: .5rem;
                margin-left: .48rem;
            }
            .shops {
                font-size: 0.32rem;
                margin-left: .48rem;
                margin-top: .2rem;
                .shops-name {
                    color: #999999;
                }
                .shops-titles {
                    color: #000000;
                }
            }
            .reject-query {
                font-size: 0.32rem;
                color: #000000;
                margin-left: .48rem;
                margin-top: .2rem;
            }
            .return-close {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 0.95rem;
                line-height: 0.95rem;
                border-top: 1px solid #DCDCDC;
                text-align: center;
                font-size: 0.4rem;
                color: #000000;
            }
        }
    }

    .New-order {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .1);
        .orderBox {
            width: 9.25rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.13rem;
            margin: 5rem auto 0;
            overflow: hidden;
            position: relative;
            .title {
                margin-top: .5rem;
                text-align: center;
                color: #000000;
                font-size: 0.45rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                position: relative;
            }
            .title:before {
                position: absolute;
                content: '';
                width: 0.67rem;
                height: 0.05rem;
                background: rgba(234, 55, 86, 1);
                border-radius: 0.03rem;
                top: .7rem;
                left: 4.2rem;
            }
            .order-xq {
                margin-top: .55rem;
                margin-left: .48rem;
                font-size: 0.4rem;
                color: #000000;
            }
            .order-odd {
                margin-left: .48rem;
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                width: 6.39rem;
                margin-top: .25rem;
                color: #999999;
                .odd1 {
                    width 2rem;
                    display: inline-block;
                }
                .odd2 {
                    color: #000000;
                }
            }
            .order-query {
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #000000;
                margin-left: .48rem;
                margin-top: .25rem;
                padding-bottom 1.4rem;
            }
            .return-close {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 1.09rem;
                line-height: 1.09rem;
                border-top: 1px solid #DCDCDC;
                text-align: center;
                font-size: 0.4rem;
                color: #000000;
                display: flex;
                justify-content: space-between;
                .close-left {
                    width: 50%;
                    color: #666666;
                }
                .close-right {
                    width: 50%;
                    color: #EA3756;
                }
            }
        }
    }

    .evaluate {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .1);
        .evaluateBox {
            width: 9.15rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.13rem;
            margin: 3rem auto 0;
            overflow: hidden;
            position: relative;
            .title {
                margin-top: .73rem;
                text-align: center;
                color: #000000;
                font-size: 0.45rem;
                position: relative;
            }
            .title:before {
                position: absolute;
                content: '';
                width: 0.67rem;
                height: 0.05rem;
                background: rgba(234, 55, 86, 1);
                border-radius: 0.03rem;
                top: .7rem;
                left: 4.2rem;
            }
            .ev-xq {
                width: 8.25rem;
                margin-top: .45rem;
                margin-left: .48rem;
                font-size: 0.4rem;
                color: #000000;
                line-height 0.64rem;
            }
            .ev-odd {
                margin-left: .48rem;
                font-size: 0.4rem;
                margin-top: .3rem;
                color: #999999;
                display: flex;
                span {
                    display: inline-block;
                }
                .odd1 {
                    width: 2rem;
                }
                .odd2 {
                    color: #000000;
                    width: 6.44rem;

                }
            }
            .ev-imgs {
                display: flex;
                margin-left: .42rem;
                margin-top: .6rem;
                padding-bottom 1.4rem;
                img {
                    width: 2.77rem;
                    height: 2.77rem;
                    margin-right: .1rem;
                }
            }
            .ev-close {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 1.09rem;
                line-height: 1.09rem;
                border-top: 1px solid #DCDCDC;
                text-align: center;
                font-size: 0.4rem;
                color: #000000;
                display: flex;
                justify-content: space-between;
                .close-left {
                    width: 50%;
                    color: #666666;
                    border-right: 1px solid #DCDCDC;
                    box-sizing border-box;
                }
                .close-right {
                    width: 50%;
                    color: #EA3756;
                }
            }
        }
    }
</style>
