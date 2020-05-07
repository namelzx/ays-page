<template>
    <div class="main">
        <div class="code-bg">
            <div class="head">
                <img :src="userInfo.headimgurl">
                <div class="name">
                    <span>{{shop.shopkeeper}}</span>
                    <span>
                        {{shop.shopname}}
                    </span>
                </div>

            </div>
            <div class="code-q">
                <div id="qrcode" ref="qrcode"></div>
            </div>
            <div class="jc-data">
                {{bind_info_user.realName}}:请微信扫描上方二维码，成为店员
            </div>


        </div>
    </div>
</template>


<script>
    import {mapGetters} from "vuex";
    import QRCode from 'qrcodejs2';

    import {getInfo} from '@/api/user';

    export default {
        name: "code",
        computed: {
            ...mapGetters(["sele_shop","userInfo"])
        },
        data() {
            return {
                shop: {},
                bind_user:0,
                bind_info_user:{},
            }
        },
        created() {

            this.shop = this.sele_shop
            this.bind_user=this.$route.query.user_id
            getInfo(this.bind_user).then(res=>{
                console.log(res)
                this.bind_info_user=res.data
            })
            this.payOrder()
        },
        methods: {
            // 展示二维码
            payOrder() {
                this.innerVisible = true
                // 二维码内容,一般是由后台返回的跳转链接,这里是写死的一个链接
                this.qrcode = 'http://pd.aesups.com/shop/#/assistant/bind?user_id='+this.bind_user
                    +'&shop_id='+this.sele_shop.id+'&is_bind=2'
                console.log( this.qrcode)
                // 使用$nextTick确保数据渲染
                this.$nextTick(() => {
                    this.crateQrcode()
                })
            },
            // 生成二维码
            crateQrcode() {
                this.qr = new QRCode('qrcode', {
                    width: 150,
                    height: 150, // 高度
                    text: this.qrcode // 二维码内容
                    // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
                    // background: '#f0f'
                    // foreground: '#ff0'
                })
                // console.log(this.qrcode)
            },
            // 关闭弹框,清除已经生成的二维码
            closeCode() {
                this.$refs.qrcode.innerHTML = ''
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .main {
        background: #ededed;
        position: absolute;
        width: 100%;
        height: 100%;

        .code-bg {
            width 80%;
            height 60%;
            margin auto;
            margin-top 20%;
            border-radius 10px;
            background #fff;
            position relative;

            .head {
                display flex;
                flex-direction row
                margin 0.5rem;
                padding-top: 0.5rem;

                img {
                    width 1.5rem;
                    height 1.5rem;
                    border-radius 100%;
                }

                .name {
                    display flex;
                    flex-direction column;
                    margin-left: 0.3rem;
                    line-height: 2;
                }

            }

            .code-q {
                width 100%;
                text-align center;
                display: flex;
                justify-content: center;

                #qrcode {
                    img {
                        width 190px;
                    }
                }
            }

            .jc-data {
                text-align: center;
                bottom: 10%;
                position: absolute;
                width: 100%;
            }
        }
    }
</style>