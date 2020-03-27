<template>
    <div class="home-container">
        <div class="header-content-m">
            <div class="shop-info">
                <div class="shop-avatar-name" @click="toggleShop">
                    <div class="shop-name">
                        <div class="name_warp" v-if="shop.length>0">
                            <span v-if="sele_shop">{{sele_shop.shopname}}</span>
                            <div class="warp_icon"><img src="@/assets/xia_icon.png"/></div>
                        </div>
                        <!-- <van-icon name="arrow-down" class="arrow-icon"/> -->
                        <p>旗下共有{{shop.length}}家门店</p>
                    </div>
                </div>
                <div class="message">
                    <div class="msg-img" @click="goToMsg('/message')">
                        <img src="@/assets/image/msg@2x.png" alt="">
                    </div>
                </div>
            </div>
            <div class="total">
                <p class="total-title">总金额</p>
                <p class="total-price">
                    <span class="price-unit">¥</span>
                    <span v-if="money.sum">{{ money.sum}}</span>
                    <span v-else>0</span>
                    <span class="price-unit">元</span>
                </p>
            </div>
            <div class="active-cards">
                <div class="card-item">
                    <p>待结算</p>
                    <p v-if="money.ins_cost">
                        <span class="price-unit">¥</span>{{money.ins_cost}}
                    </p>
                    <p v-else>
                        <span class="price-unit">¥</span>0
                    </p>

                </div>
                <div class="card-item" @click="goToEn('/embody')">
                    <p class="special" v-if="is_withdrawal">可提现</p>
                    <p class="special gz" v-else>挂帐</p>
                    <p v-if="money.withdrawal"><span class="price-unit">¥</span>{{money.withdrawal}}</p>
                    <p v-else><span class="price-unit">¥</span>0</p>


                </div>
                <div class="card-item">
                    <p>本月金额</p>
                    <p v-if="money.y_sum"><span class="price-unit">¥</span>{{money.y_sum }}</p>
                    <p v-else><span class="price-unit">¥</span>0</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    import {GetDataByList} from '@/api/shop'

    import {GetShopByHome} from '@/api/money'

    export default {
        name: "UserInfo",
        // props: {
        //     shop: {
        //         type: String
        //     }
        // },

        computed: {
            ...mapGetters([
                'userInfo',
                'sele_shop'
            ])
        },
        data() {
            return {

                is_withdrawal:true,
                shop: [],
                money: {},
                listQuery: {
                    page: 1,
                    limit: 20,
                    shop_id: undefined,
                },
            }
        },
        created() {

            let id = this.userInfo.openid === undefined ? 'kong' : this.userInfo.id;

            if (id) {

                GetDataByList(id).then(res => {
                    this.shop = res.data
                    if (res.data==3) {
                        this.$router.push('/add-shop'); // 动态跳转
                    } else {
                        // this.$store.dispatch('shop/setShop', res.data[0])

                        if (this.sele_shop.id === undefined) {
                            this.sele_shop.id = this.$route.params.id;
                        }
                    }

                    if (this.sele_shop.shopname === undefined) {

                        this.$store.dispatch('shop/setShop', res.data[0])
                        GetShopByHome(this.sele_shop.id).then(res => {
                            this.money = res.data
                        })
                    } else {
                        GetShopByHome(this.sele_shop.id).then(res => {
                            this.money = res.data
                        })

                    }
                    if(this.sele_shop.withdrawal===1){
                        this.is_withdrawal=true
                    }else{
                        this.is_withdrawal=false
                    }

                })


            }


            if(this.sele_shop.withdrawal===1){
                this.is_withdrawal=true
            }else{
                this.is_withdrawal=false
            }

        },
        methods: {
            getlist() {
                this.listQuery.user_id = this.userInfo.id
                GetDataByList(this.listQuery).then(res => {
                    this.orderlist = [];
                    this.orderlist = res.data.data
                    this.total = res.data.total
                    this.seekShow = false

                })
            },
            goToMsg(data) {
                console.log(data);
                this.$router.push(data)
            },
            toggleShop() {
                // this.showShop = !this.showShop
                this.$router.push('/home/name')
            },
            goToEn(data) {
                if(this.is_withdrawal){
                    this.$router.push(data)
                }

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .gz{
        background :#999999;
    }
    .home-container {

    }

    .header-content-m {
        overflow hidden;
        height 0;
        padding-bottom: 53%;
        background: url(https://kedand.oss-cn-beijing.aliyuncs.com/uploads/bj.png);
        background-position: 0 -25px;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        // background-color #f4f4f4;
    }

    .shop-info {
        display: flex;
        margin-top: 17px;
        padding: 0 16px;
    }

    .shop-avatar-name {
        width: 80%;
        display: flex;
    }

    .message {
        width: 20%;
        text-align: center;
    }

    .shop-avatar-name .shop-avatar img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    .shop-name {
        font-size: 15px;
        font-weight: 400;
        color: #fff;
        line-height 30px;
        margin-left: 13px;
        position: relative;
        .name_warp {
            display flex;
            span {
                display block;
            }
            .warp_icon {
                margin-top .1rem;
                width .5rem;
                height .5rem;
                img {
                    width 100%;
                    height 100%;
                }
            }
        }
    }

    .arrow-icon {
        position: absolute;
        top: 6px;
        right: -.2rem;

    }

    .shop-name p {
        margin: 0;
        line-height 10px;
        font-size: 12px;
    }

    .msg-img img {
        width: 20px;
        height: 20px;
        margin-top: 7px;
    }

    .total {
        margin-top: 9.5px;
    }

    .total p {
        margin: 0;
        padding: 0;
        text-align: center;
        color: #fff;
    }

    .total .total-title {
        font-size 15px;
        font-weight: 400;
    }

    .total .total-price {
        font-size: 30px;
        margin-top: 7px;
    }

    .total .total-price span.price-unit {
        font-size: 15px;
        margin: 0 3.5px;
    }

    .active-cards {
        display: flex;
        position: absolute;
        width: 100%;
        bottom: 3px;
    }

    .card-item {
        flex 1;
        text-align center;
        border: 1px solid #fff;
        margin: 0 9px;
        border-radius: 10px;
        padding: 9px 0;
        background #fff;
        box-shadow 0 0 7px 2px rgba(234, 234, 234, 0.63)
        overflow: hidden;
        p {
            margin 0;
            font-size: 18px;
            color: #333;
        }
        p:first-child {
            text-align left;
            font-size: 12px;
            color: #666666;
            margin-left: 4px;
        }
        p.special {
            width: 50%;
            background: linear-gradient(to right, #F6C794, #F2AD6A);
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            padding-top: 2px;
            padding-bottom: 2px;
            text-align: center;
            color: #fff;
            margin-left: 0;
        }
        p.gz {

            background: #999999;

        }
        p:last-child {
            font-size 18px;
            margin-top: 7.5px;
        }
        p:last-child span.price-unit {
            font-size 12px;
            margin-top: 13px;
            padding-right: 2px;
        }

    }

</style>
