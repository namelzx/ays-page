<template>
    <div class="upload-container">
        <div @click="toggleRetun">
            <Toptitle :title="title"/>
        </div>
        <!-- 注意事项-->
        <div class="bg-wrap" v-if="showAds">
            <div class="bg-img">
                <div class="bg-title">提示！</div>
                <div class="bg-content">
                    <p>1.视频上传限2天内安装完成的订单</p>
                    <p>
                        2.请提供电商派单产品的安装前后视频，视频内可内置门店信息。
                        视频将会推广到快手、抖音、优酷、土豆、微博、爱奇艺、懂车帝、汽车之家、淘宝。
                        视频要求15秒内，高清无码无压缩。
                    </p>
                </div>
            </div>
            <div class="close-btn" @click="toggleAds">
                <van-icon name="close"/>
            </div>
        </div>
        <!--彩色底层背景-->
        <div class="color-bg"></div>
        <div class="order-wrap">
            <p class="tips">*仅限上传2天内安装完成订单</p>
            <div
                    class="order-card"

                    v-for="item of uploadList"
                    :key="item.id"
            >
                <div class="card-item">
                    <div class="order-num-time">
                        <div class="order-num">{{item.id}}</div>
                        <div class="order-time">{{item.create_time}}</div>
                    </div>
                    <div class="car-type">
                        <div class="item-left">车型:</div>
                        <div class="item-right">{{item.model_title}}</div>
                    </div>
                    <div class="order-product">
                        <div class="item-left">产品:</div>
                        <div class="item-right">{{item.product_titile}}</div>
                    </div>
                    <div class="shop-assit">
                        <div class="shop">{{item.shop_title}}</div>
                        <div class="assit">  {{item.shopkeeper}}</div>
                    </div>
                    <div class="upload-btn" @click="toggleConfirm(item.id,item.id)">上传视频</div>
                </div>
            </div>
        </div>
        <div class="big-tips" v-if="showBigTips">
            <p>请提供电商派单产品的安装前后视频,视频内可内置门店信息。视频将会推广到快手、抖音、优酷等平台。视频要求15秒内,高清无码无压缩。</p>
            <van-icon name="cross" class="dismiss-btn" @click="toggleBigTips"/>
        </div>

        <!-- 点击确定是否上传视频  -->
        <div class="big-confirm" v-if="showBinConfirm">
            <div class="confirmBox">
                <div class="conf-imgs">
                    <img src="../../assets/vidicon.png"/>
                </div>
                <div class="conf-character">
                    <div class="conf-order">
                        是否为
                        <span>{{orderId}}</span>订单上传
                    </div>
                    <div class="conf-order">安装前后视频</div>
                </div>
                <div class="conf-btn">
                    <div class="conf-ca" @click="clickCancel">取消</div>
                    <div class="conf-en" @click="clickToUpload">确定</div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Toptitle from "@/components/Toptitle/Toptitle";
    import {GetIdBy2DayOrder} from "@/api/order";
    import {mapGetters} from 'vuex'


    export default {
        name: "Upload",
        data() {
            return {
                title: '视频上传',
                showAds: true,
                showBigTips: true,
                showBinConfirm: false,
                orderNums: '',
                orderId: '',
                listQuery: {
                    limit: 20,
                    page: 1,
                    user_id: undefined,
                },
                uploadList: [
                    {
                        id: "1",
                        order_num: "5502",
                        type: "别克2017君威1.5t精英版",
                        prod: "征服者S",
                        shop: "阿帕车灯（凯斯店）",
                        assit: "姜卫卫",
                        time: "2019-09-08 12:00"
                    },
                    {
                        id: "2",
                        order_num: "5502",
                        type: "别克2017君威1.5t精英版",
                        prod: "征服者S",
                        shop: "阿帕车灯（凯斯店）",
                        assit: "姜卫卫",
                        time: "2019-09-08 12:00"
                    },
                    {
                        id: "3",
                        order_num: "5502",
                        type: "别克2017君威1.5t精英版",
                        prod: "征服者S",
                        shop: "阿帕车灯（凯斯店）",
                        assit: "姜卫卫",
                        time: "2019-09-08 12:00"
                    }
                ],

            };
        },
        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },
        methods: {
            toggleRetun() {
                this.$router.push({path: '/'});//返回上一层
            },
            toggleAds() {
                this.showAds = !this.showAds;
            },
            toggleBigTips() {
                this.showBigTips = !this.showBigTips;
            },
            toggleConfirm(idx, name) {
                this.orderId = idx;
                this.orderNums = name;
                this.showBinConfirm = !this.showBinConfirm
            },
            clickCancel() {
                this.showBinConfirm = false
            },
            clickToUpload() {
                let id = this.orderId;
                this.$router.push({path: "/upload-video", query: {id: id}});
            },
            getlist(){
                GetIdBy2DayOrder(this.listQuery).then(res=>{
                    console.log(res)
                    this.uploadList=res.data.data
                })
            },

        },
        components: {
            Toptitle
        },
        created() {

            this.listQuery.user_id = this.userInfo.id
            this.getlist()
            if (this.$route.query.showAds !== undefined) {
                this.showAds = false
            }
        }
    };
</script>

<style lang="stylus" scoped>
    .color-bg{
        margin-top 50px;
    }
    .upload-container {
        position: relative;
    }

    .bg-wrap {
        margin-top 1rem;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #c6c6c6;
        z-index: 9;
    }

    .bg-img {
        width 7.44rem;
        height 9.2rem;
        margin: 2rem auto 20px;
        background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/banner_bg.png'); // kedand.oss-cn-beijing.aliyuncs.com/uploads/banner_bg.png);
        // padding-bottom: 100%;
        // background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        position relative;
    }

    .bg-img img {
        width: 100%;
    }

    .close-btn {
        position absolute;
        text-align: center;
        font-size: 0.8rem;
        color: #f5f5f5;
        top 11.5rem;
        right: 0;
        left: 0;
        margin: 0 auto;
    }

    // 内容
    .bg-title {
        padding: 35px 0 10px;
        text-align: center;
        color: #fff;
        font-size: 22px;
        position absolute;
        left 0;
        right 0;
        top 0;
        z-index 10;
    }

    .bg-content {
        padding: 0 15px;
        font-size: 0.48rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        position absolute;
        left 0;
        right 0;
        top 1.4rem;
        color: #fff;
        line-height: 25px;
    }

    .order-wrap {
        position: absolute;
        min-height: 200px;
        background: #fff;
        width: 100%;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
    }

    .order-wrap p {
        padding-left: 20px;
        font-size: 12px;
        // padding-top: 8px;
        color: #333;
    }

    .order-card {
        padding: 0 20px;
        // margin: 20px 0;
    }

    .card-item {
        border-bottom: 1px solid #e5e5e5;
        // border-radius: 10px;
        padding: 10px 0;
        position: relative;
    }

    .order-num-time, .car-type, .order-product, .shop-assit {
        display: flex;
    }

    .order-num {
        width: 60%;
        font-size: 0.8rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #2B2B2B;
    }

    .order-time {
        font-size: 0.27rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        text-align: right;
        width: 40%;
        color: #2B2B2B;
    }

    .car-type, .order-product {
        margin: 10px 0;
    }

    .item-left {
        font-size: 0.32rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #666;
        margin-right: 10px;
        // min-width: 40px;
    }

    .item-right {
        font-size: 0.32rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color #333333;
        max-width: 250px;
    }

    .shop-assit {
        font-size: 12px;
        color: #666;
    }

    .upload-btn {
        color: #E74F4E;
        font-size: 0.32rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        width: 2.11rem;
        height: 0.83rem;
        line-height 0.83rem;
        border: 1px solid rgba(231, 79, 78, 1);
        border-radius: 0.41rem;
        text-align: center;
        position: absolute;
        width: 21%;
        right: 0;
        bottom: 10px;
    }

    .shop {
        max-width: 170px;
    }

    .shop, .item-right {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .big-tips {
        overflow: hidden;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 20px;
        width: 9.15rem;
        height: 1.6rem;
        background: rgba(109, 111, 123, 1);
        opacity: 0.8;
        border-radius: 0.13rem;
        margin 0 auto;
    }

    .big-tips p {
        width: 7.99rem;
        height: 1.09rem;
        font-size: 0.32rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin-left .27rem;
    }

    .dismiss-btn {
        position: absolute;
        right: 12px;
        top: 10px;
        font-size: 0.32rem;
        color #ffffff;
    }

    // 确认是否要上传视频
    .big-confirm {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 20;

        .confirmBox {
            width: 9.15rem;
            height: 5.89rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.13rem;
            position absolute;
            left 0;
            right 0;
            margin 5rem auto 0;
            .conf-imgs {
                width: 4rem;
                height: 3.68rem;
                margin: -1.07rem auto 0;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .conf-character {
                margin-top -.3rem;
            }

            .conf-order {
                font-size: 0.48rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                line-height: 0.64rem;
                text-align: center;
            }

            .conf-btn {
                width 8rem;
                display flex;
                justify-content space-between;
                margin 0.8rem auto 0;
                .conf-en {
                    width: 3.89rem;
                    height: 1.09rem;
                    line-height 1.09rem;
                    text-align center;
                    font-size: 0.4rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                    background: rgba(234, 55, 86, 1);
                    border-radius: 1rem;
                }
                .conf-ca {
                    width: 3.89rem;
                    height: 1.09rem;
                    line-height 1.09rem;
                    text-align center;
                    font-size: 0.4rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: rgba(234, 55, 86, 1);
                    border: 1px solid rgba(234, 55, 86, 1);
                    border-radius: 1rem;
                }
            }

        }
    }
    .assit{
        margin-left 10px;
    }
</style>
