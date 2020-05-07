<template>
    <div class="bg">
        <div @click="toggleRetun">
            <Toptitle :title="title"/>
        </div>
        <div>
            <div class="head">
                <div class="img">
                    <img :src="userinfo.headimgurl"/>
                </div>
                <div class="name">
                    <span>{{userinfo.nickname}}</span>
                    <span>{{sele_shop.shopkeeper}} 邀请您加入!请确认</span>
                </div>
            </div>
            <div class="conent">
                <van-cell-group>
                    <van-field v-model="sele_shop.shopname" label="门店名称"/>
                    <van-field v-model="sele_shop.cityName" label="门店地址"/>
                    <van-field v-model="sele_shop.shopkeeper" label="联系人"/>
                    <van-field v-model="sele_shop.tel" label="联系电话"/>
                </van-cell-group>
                <div class="environment">
                    <div class="name">
                        门店环境照片
                    </div>
                    <div class="img-list">
                        <img v-for="(item,index ) in sele_shop.env" :src="item.url">
                    </div>

                </div>

            </div>

        </div>


        <div class="action-btn">
            <div class="cancel-btn" @click="toggleRetun()">取消</div>
            <div class="confirm-btn" @click="handelSave()">确认加入</div>

        </div>
    </div>
</template>

<script>
    import Toptitle from "@/components/Toptitle/Toptitle";
    import {Field, Popup, SwipeCell} from "vant";
    import {mapGetters} from "vuex";
    import {getInfo, login} from "@/api/user";
    import {GetShopIdByInfo, GetShopIdByInfoBind, PostBindByShop} from "@/api/shop";

    import {getUser, removeUser, setUser} from "@/utils/auth";

    export default {
        name: "bind",
        computed: {
            // ...mapGetters(["sele_shop"])
        },
        data() {
            return {
                bind_id: 0,
                title: '添加店员',
                userinfo: {},
                sele_shop: {},
                postForm: {},
                temp: {}

            }
        },

        components: {
            Toptitle
        },
        created() {
            var that = this;
            let {user_id, shop_id, is_bind, bind_id} = this.$route.query;
            this.bind_id = bind_id
            console.log(shop_id)
            let url = this.$route.path;
            var temp = {
                url,
                is_bind,
                user_id,
                shop_id,
                bind_id
            };
            if (parseInt(is_bind) === 2) {
                login(temp).then(res => {
                    window.location.href = res.data
                })
            }

            var dtemp = {
                shop_id,
                user_id
            }
            this.temp = temp

            GetShopIdByInfoBind(dtemp).then(res => {
                this.sele_shop = res.data
                that.$store.dispatch('user/login', res.data)
                setUser(res.data)
            })

            getInfo(user_id).then(res => {
                console.log(res)

                this.userinfo = res.data
            })

        },
        methods: {
            handelSave() {
                var that = this;
                PostBindByShop(this.temp).then(res => {
                        removeUser()
                    setUser(res.data)
                    let url='/'+res.data.id
                    this.$router.push(url); // 动态跳转
                        // window.location.href = 'http://pd.aesups.com/shop/#/5'
                    }
                )
            },
            toggleRetun() {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background #f4f4f4

    }

    .head {
        display flex;
        flex-direction row;
        padding .5rem;
        background #fff;
        padding-top: 2rem;

        .img {
            img {
                width 1.5rem;
                height 1.5rem;
                border-radius 100%;
            }
        }

        .name {
            display flex;
            flex-direction column;
            justify-content space-between;

            span {
                padding 0.2rem;
            }

        }
    }

    .conent {
        position: absolute;
        width 100%;
        background #fff;
        margin-top .3rem;
        height 67%;
        /*padding .5rem;*/
        padding-top .5rem;

        .environment {
            margin-top .2rem;
            margin-left: .35rem;

            .img-list {
                display flex;
                flex-direction row;
                margin-top 10px;
                margin-right 5px;

                img {
                    width 2rem;
                    height 2rem;
                }
            }
        }

        .btn {
            padding .5rem
        }

    }


    .action-btn {
        display: flex;
        justify-content: space-between;
        width: 8.5rem;
        margin: 1rem auto;
        width: 100%;
        display: flex;
        justify-content: space-between;
        width: 8.5rem;
        margin: 1rem auto;
        position: fixed;
        bottom: 0;
        /* left: 5%; */
        margin-bottom: 0;
        background: #ffffff;
        padding-top: 10px;
        padding-bottom: 10px;
        /*border-top: 1px solid #E4E7ED;*/
        width: 100%;
    }

    .confirm-btn {
        width: 3.89rem;
        height: 1.09rem;
        line-height: 1.09rem;
        text-align: center;
        background: rgba(248, 89, 17, 1);
        border-radius: 1rem;
        font-size: 0.4rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
        margin-right: 5%;
        border: 1px solid rgba(248, 89, 17, 1);
    }

    .cancel-btn {
        width: 3.89rem;
        height: 1.09rem;
        line-height: 1.09rem;
        text-align: center;
        border: 1px solid rgba(248, 89, 17, 1);
        border-radius: 1rem;
        color: #F85911;
        font-size: 0.4rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        margin-left: 5%;
    }

</style>