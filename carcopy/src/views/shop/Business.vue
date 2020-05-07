<template>
    <div class="business">
        <div @click="toggleRetun">
            <Toptitle :title="title"/>
        </div>
        <div class="bus-wrap">
            <div style="display:flex">
                <div class="bus-title">
          <span v-if="shopName===''" @click="togglePick">
            {{shopname}}
            <van-icon name="arrow-down"/>
          </span>
                    <span v-else @click="togglePick">
            {{sele_shop.shopName}}
            <van-icon name="arrow-down"/>
          </span>
                </div>
                <div class="putaway" @click="showCons">
                    <div class="putawayBox">
                        <div class="pu-imgs">
                            <img src="../../assets/serve-icon.png"/>
                        </div>
                        <div>上架中</div>
                        <div class="pu-icon">
                            <img src="../../assets/remind.png"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pick-wrap" v-if="showItem">
                <div
                        class="pick-item"
                        v-for="item of shopList"
                        :key="item.id"
                        @click="pickItem(item)"
                >{{item.shopname}}
                </div>
            </div>
            <!-- 背景需在 下面style 里面添加-->
            <router-link tag="div" to="/manage-shop" class="bus-item">
                <div class="itemBox">
                    <div>
                        <span class="shop-icon"></span>店铺管理
                    </div>
                    <div class="item-img">
                        <img src="../../assets/right-fx.png"/>
                    </div>
                </div>
            </router-link>

            <router-link tag="div" to="/assistant" class="bus-item">
                <div class="itemBox">
                    <div>
                        <span class="dianyuan-icon"></span>店员管理
                    </div>
                    <div class="item-img">
                        <img src="../../assets/right-fx.png"/>
                    </div>
                </div>
            </router-link>
            <!--<div tag="div" @click="handelUrl('/manage-business')" class="bus-item">-->
                <!--<div class="itemBox">-->
                    <!--<div>-->
                        <!--<span class="business-icon"></span>业务管理-->
                    <!--</div>-->
                    <!--<div class="item-img">-->
                        <!--<img src="../../assets/right-fx.png"/>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div tag="div"  @click="handelUrl('/shop/product/manage')"  class="bus-item">-->
                <!--<div class="itemBox">-->
                    <!--<div>-->
                        <!--<span class="product-icon"></span>产品管理-->
                    <!--</div>-->
                    <!--<div class="item-img">-->
                        <!--<img src="../../assets/right-fx.png"/>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <!---->
            <!--<div tag="div"   @click="handelUrl('/shop/Guarantee')" class="bus-item">-->
                <!--<div class="itemBox">-->
                    <!--<div>-->
                        <!--<span class="cash-icon"></span>保证金-->
                    <!--</div>-->
                    <!--<div class="item-img">-->
                        <!--<img src="../../assets/right-fx.png"/>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div tag="div"  @click="handelUrl('/category')" class="bus-item">-->
                <!--<div class="itemBox">-->
                    <!--<div>-->
                        <!--<span class="category-icon"></span>服务类目-->
                    <!--</div>-->
                    <!--<div class="item-img">-->
                        <!--<img src="../../assets/right-fx.png"/>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->

            <!--<div tag="div" @click="handelUrl('/ticket')"  class="bus-item">-->
                <!--<div class="itemBox">-->
                    <!--<div>-->
                        <!--<span class="ticket-icon"></span>卡券-->
                    <!--</div>-->
                    <!--<div class="item-img">-->
                        <!--<img src="../../assets/right-fx.png"/>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        </div>

        <!-- 弹出层 《消费者保障服务协议》  -->
        <div class="showConsumer" v-if="showConsumer" @touchmove.prevent>
            <div class="ConsuBox">
                <div class="ConsuBoxhe">
                    <div class="cons-logo">
                        <img src="../../assets/shield.png"/>
                    </div>
                    <div class="cons-title" @click="toggleAgree">《消费者保障服务协议》</div>
                    <div class="cons-desc">
                        <div class="desc-constens">
                            <!-- <span>一、</span> -->
                            <span>一、店铺上架成功且进行店铺经营活动则视为签署《消费者保障服务协议》</span>
                        </div>
                        <div class="desc-constens">
                            <!-- <span>二、</span> -->
                            <span>二、保证金最低缴纳100元。如缴纳到1000元，则安亿仕网站上您的店铺将出现相应保障标识，更加利于用户转化。</span>
                        </div>
                        <div class="desc-constens">
                            <!-- <span>三、</span> -->
                            <span>三、当您的官派单已全部核销成功的情况下，保证金可退。</span>
                        </div>
                        <div class="desc-constens">
                            <!-- <span>四、</span> -->
                            <span>四、当保证金金额低于100元时，您在安亿仕网站上的店铺将自动下架。</span>
                        </div>
                        <div class="desc-constens">
                            <!-- <span>五、</span> -->
                            <span>五、保证金主要用于门店商品及服务保障，当出现纠纷时赔付所用。</span>
                        </div>
                    </div>
                    <div class="cons-btn" @click="showCons">确定</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Toptitle from "@/components/Toptitle/Toptitle";
    import { Toast } from 'vant';

    import {mapGetters} from 'vuex'

    export default {
        name: "Business",
        data() {
            return {
                title: '店铺资料',
                showItem: false,
                showConsumer: false, //保障协议
                shopName: "",

                curShop: this.$route.query.name,
                shopList: [
                    {
                        id: "1",
                        name: "幻影车灯音响"
                    },
                    {
                        id: "2",
                        name: "钟祥启程车灯服务店"
                    },
                    {
                        id: "3",
                        name: "亮途汽车灯光升级服务店"
                    }
                ]
            };
        },
        computed: {
            ...mapGetters([
                'sele_shop',
                'shoplist'
            ])
        },
        created() {
            this.shopname = this.sele_shop.shopname
            this.shopList=this.shoplist
        },
        methods: {
            handelUrl(url){
                console.log(url)
                // Toast('此板块暂未开放');
                this.$router.push({path: url});
            },
            togglePick() {
                this.showItem = !this.showItem;
            },
            pickItem(item) {
                this.$store.dispatch('shop/setShop', item)

                this.shopname = item.shopname;
                this.togglePick();
            },
            showCons() {
                // this.showConsumer = !this.showConsumer
            },
            toggleAgree() {
                this.$router.push({path: "/shop/agreement"});
            },
            toggleRetun() {
                this.$router.push('/shop');//返回上一层
                console.log("点击");
            }
        },
        components: {
            Toptitle
        }
    };
</script>

<style lang="stylus" scoped>
    .bus-item {
        margin: 0.53rem auto 0;
        font-size: 0.4rem;
        color: #333;
        border-bottom 1px solid #DCDCDC;
        height: 1.04rem;
        line-height: 1.04rem;
        .itemBox {
            width: 9rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;

            .item-img {
                width: 0.3rem;
                height: 0.3rem;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .bus-item:nth-last-child(1) {
        border-bottom 0;
    }

    .bus-item span {
        width: 0.45rem;
        height: 0.45rem;
        display: inline-block;
        margin-right: 10px;
        margin-bottom: -2px;
    }

    .bus-item span.shop-icon {
        background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/shop.png');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .bus-item span.dianyuan-icon {
        background: url('https://kedand.oss-cn-beijing.aliyuncs.com/images/icon_dianyuan@3x.png ');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .bus-item span.business-icon {
        background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/business.png');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .bus-item span.product-icon {
        background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/product.png');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .bus-item span.state-icon {
        background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/state.png');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .bus-item span.category-icon {
        background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/category-icon.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width 0.37rem;
        height 0.45rem;
    }

    .bus-item span.cash-icon {
        background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/cash.png');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .bus-item span.ticket-icon {
        background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/ticket.png');
        // background-position 0 0;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

    .bus-title {
        // margin-bottom: 30px;
        padding-left: 20px;
        font-size: 14px;
    }

    .bus-title span {
        border-bottom: 1px solid #e5e5e5;
        padding: 10px 0 5px;
        display: inline-block;
    }

    .bus-wrap {
        position: relative;
        margin-top 1rem;
    }

    .putaway {
        padding-top: 10px;
        margin-left: 0.2rem;

        .putawayBox {
            display: flex;
            align-items: center;
            color: #999999;
            font-size: 0.27rem;

            .pu-imgs {
                width: 0.37rem;
                height: 0.37rem;
                margin-right: 0.17rem;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .pu-icon {
                width: 0.2rem;
                height: 0.2rem;
                margin-top: -0.2rem;
                margin-left: 0.05rem;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .pick-wrap {
        width: 70%;
        margin: 0 auto;
        border: 1px solid #e5e5e5;
        padding: 10px 0;
        position: absolute;
        left: 16px;
        top: 40px;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0 0 8px 0 #e5e5e5;
    }

    .pick-item {
        font-size: 14px;
        padding-left: 10px;
        color: #666;
        margin: 10px 0;
    }

    // 弹出层
    .showConsumer {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 10;

        .ConsuBox {
            width: 9.15rem;
            height: 11.87rem;
            background: rgba(255, 255, 255, 1);
            margin: 2.5rem auto 0;
            overflow: hidden;

            .ConsuBoxhe {
                width: 8.1rem;
                margin: 0 auto;

                .cons-logo {
                    margin: 0 auto;
                    width: 4.73rem;
                    height: 3.28rem;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .cons-title {
                    text-align: center;
                    font-size: 0.4rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: rgba(66, 142, 255, 1);
                }

                .cons-desc {
                    margin-top: 0.63rem;

                    .desc-constens {
                        display: flex;

                        span {
                            display: inline-block;
                            color: #333333;
                            font-size: 0.32rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: rgba(51, 51, 51, 1);
                            line-height: 0.55rem;
                        }
                    }
                }

                .cons-btn {
                    margin 0.3rem auto 0;
                    width: 3.89rem;
                    height: 1.09rem;
                    background: rgba(0, 156, 255, 1);
                    border-radius: 1rem;
                    line-height 1.09rem;
                    background: rgba(0, 156, 255, 1);
                    color #fff;
                    text-align center;
                    font-size: 0.4rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                }
            }
        }
    }
</style>
