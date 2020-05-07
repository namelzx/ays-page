<template>
    <div class="home" v-if="homeshow">
        <!--<user-info v-if="homeshow" :shop="shop"/>-->
        <swiper v-if="homeshow" :imgList="imgList"/>
        <category v-if="homeshow" :cateList="cateList" style="margin-bottom: 60px;"/>
        <my-footer v-if="homeshow" class="home-footer"/>
        <div :class="[packshow===true?'help':'help-pack']" @click="topackshow">
            <img
                    @click.stop="togoHelp('/help')"
                    src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/icon_bangzhu%402x.png"
            />
        </div>
    </div>
</template>

<script>
    import UserInfo from "./userCard/UserInfo";
    import Swiper from "./swiper/Swiper";
    import Category from "./category/Category";
    import MyFooter from "./../../components/Footer/Footer";
    import Toptitle from "@/components/Toptitle/Toptitle";
    import {getUser, removeUser, setUser} from "@/utils/auth";
    import {Gethomebanner} from "@/api/shop";
    import {getInfo, login} from "@/api/user";
    import {mapGetters} from "vuex";
    import {GetDataByList} from "@/api/shop";

    export default {
        name: "home",
        computed: {
            ...mapGetters(["userInfo", "sele_shop"])
        },
        data() {
            return {
                packshow: true, //帮助是否展开，收起
                homeshow: false,
                shop: "阿帕旗舰店（广州）",
                imgList: [
                    {
                        id: "01",
                        url:
                        // "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png"
                            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/homesw.png"
                    },
                    {
                        id: "02",
                        url:
                        // "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png"
                            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/homesw.png"
                    },
                    {
                        id: "03",
                        url:
                        // "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png"
                            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/homesw.png"
                    }
                ],
                cateList: [
                    {
                        id: "1",
                        url:
                            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/install%402x.png",
                        name: "安装单",
                        english: "INSTALLATION LIST"
                    },
                    {
                        id: "2",
                        url:
                            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/bill%402x.png",
                        name: "账单",
                        english: "BILL"
                    },
                    {
                        id: "3",
                        url:
                            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/official.png",
                        name: "官派单",
                        english: "OFFICIAL"
                    },
                    {
                        id: "4",
                        url:
                            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/upload%402x.png",
                        name: "视频上传",
                        english: "VIDEO UPLOAD"
                    },
                    {
                        id: "5",
                        url:
                            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/install%402x.png",
                        name: "核销",
                        english: "VERIFICARTION SLIP"
                    },
                    {
                        id: "6",
                        url:
                            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/discount.png",
                        name: "优惠券",
                        english: "COUPON"
                    }
                ]
            };
        },
        components: {
            UserInfo,
            Swiper,
            Category,
            MyFooter,
            Toptitle
        },
        methods: {
            togoHelp(data) {
                this.$router.push(data);
            },
            //展开收起
            topackshow() {
                this.packshow = !this.packshow;
            }
        },
        created() {
            let that = this;
            Gethomebanner().then(res => {
                that.imgList = res.data.banner;
                console.log(res.data.banner, "轮播图");
            });
            let nd = 0;

            nd = that.$route.params.id
            if (that.$route.params.id === undefined) {
                console.log(getUser())
                if (getUser() !== undefined) {
                    let user = JSON.parse(getUser());
                    nd = user.id
                            that.$store.dispatch('user/login', user)

                    console.log(nd,2)
                }

            }
            if (nd !== undefined) {
                console.log(nd,3)
                GetDataByList(nd).then(res => {
                    that.shop = res.data;
                    if (res.data == 3) {
                        this.$router.push("/add-shop"); // 动态跳转
                    } else {
                        that.homeshow = true;

                    }
                });
                getInfo(nd).then(res=>{
                    setUser(res.data)
                    that.$store.dispatch('user/login', res.data)
                })
            } else {
                var temp = {};
                login(temp).then(res => {
                    window.location.href = res.data
                })
            }
        }
    };
</script>

<style scoped>
    .home {
    }

    .home-footer {
    }

    .help {
        width: 1.39rem;
        height: 0.96rem;
        background: linear-gradient(
                -45deg,
                rgba(232, 61, 112, 1) 0%,
                rgba(239, 125, 91, 1) 100%
        );
        box-shadow: 3px 3px 16px 0px rgba(51, 51, 51, 0.3);
        border-radius: 36px 0px 0px 36px;
        position: fixed;
        right: 0;
        top: 10.5rem;
        z-index: 20;
        display: flex;
        align-items: center;
    }

    .help img {
        margin: 0 auto;
        width: 0.53rem;
        height: 0.53rem;
    }

    .help-pack {
        width: 1.39rem;
        height: 0.96rem;
        background: linear-gradient(
                -45deg,
                rgba(232, 61, 112, 1) 0%,
                rgba(239, 125, 91, 1) 100%
        );
        box-shadow: 3px 3px 16px 0px rgba(51, 51, 51, 0.3);
        border-radius: 36px 0px 0px 36px;
        position: fixed;
        right: -1rem;
        top: 10.5rem;
        z-index: 20;
        display: flex;
        align-items: center;
    }

    .help-pack img {
        margin: 0 auto;
        width: 0.53rem;
        height: 0.53rem;
    }
</style>