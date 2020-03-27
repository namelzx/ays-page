<template>
    <div class="shop-container">
        <!-- <template v-if="!showBusiness"> -->
        <template>
            <div class="shop-file">
                <div class="file-title">
                    <!--占位-->
                    <p>{{curShop}}</p>
                    <p>请选择进入门店</p>
                    <router-link tag="p" to="/add-shop"><span>添加门店</span></router-link>
                </div>
            </div>
            <div class="shop-list">
                <div class="list-item" @click="pickShop(item)" v-for="item of shopList" :key="item.id">
                    <span>{{item.shopname}}</span><span><van-icon name="arrow" class="right-arrow"/></span>
                </div>
            </div>
        </template>
        <!-- <template v-else>
            <business :curShop="curShop" :shopList="shopList"/>
        </template> -->
        <my-footer class="home-footer"/>
    </div>
</template>

<script>
    // import Business from './Business'
    import MyFooter from '../../components/Footer/Footer'
    import {getUser, removeUser, setUser} from '@/utils/auth'

    import {GetDataByList} from '@/api/shop'


    export default {
        name: "Shop",
        data() {
            return {
                showBusiness: false,
                curShop: '',
                userinfo:{},
                shopList: [
                    // {
                    //     id: '1',
                    //     name: '幻影车灯音响'
                    // },
                    // {
                    //     id: '2',
                    //     name: '钟祥启程车灯服务店'
                    // },
                    // {
                    //     id: '3',
                    //     name: '亮途汽车灯光升级服务店'
                    // }
                ]
            }
        },
        created() {
            this.userinfo = JSON.parse(getUser())
            this.getlist()
        },
        methods: {
            getlist(){
                GetDataByList(this.userinfo.id).then(res=>{
                    this.shopList=res.data
                    this.$store.dispatch('shop/setShoplist', res.data)


                })
            },
            pickShop(item) {
                this.$store.dispatch('shop/setShop', item)
                this.$router.push({path: "/shop/business", query: {name: item.shopname}});
            }
        },
        components: {
            // Business,
            MyFooter
        }
    }
</script>

<style lang="stylus" scoped>
    .shop-container {
        position fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .shop-file {
        overflow hidden;
        height 0;
        padding-bottom: 36%;
        // background: url(https://kedand.oss-cn-beijing.aliyuncs.com/uploads/bj.png);
        background: url(https://kedand.oss-cn-beijing.aliyuncs.com/uploads/shop-bj.png);
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        background-color #f4f4f4;
        border-radius: 100% 100% 100% 100% / 0% 0% 50px 50px;
    }

    .file-title {
        display: flex;
        height: 140px;
        line-height: 140px;
    }

    .file-title p {
        flex: 1;
        color: #fff;
        margin: 0;
    }

    .file-title p:nth-child(2) {
        flex: 2;
        text-align center;
        font-size 18px;
    }

    .file-title p:last-child span {
        // font-size: 12px;
        // color: #fff;
        // padding: 2px;
        // border-radius: 4px;
        // border: 1px solid #fff;
        // width:1.68rem;
        // height:0.83rem;
        padding .2rem .2rem;
        border: 1px solid rgba(255, 255, 255, 1);
        border-radius: 0.41rem;
        // display inline-block;
    }

    .shop-list {
        overflow: hidden;
        position: absolute;
        width: 100%;
        // margin-top: -50px;
    }

    .list-item {
        // border: 1px solid #e5e5e5;
        // width: 80%;
        // margin: 30px auto;
        text-align: center;
        color: #333;
        font-size: 15px;
        padding: 18px 20px;
        // border-radius: 10px;
        // box-shadow: 0 0 4px 0 #d1d1d1;
        background #fff;
        position: relative;
        display: flex;
        border-bottom 1px solid #F1F1F1;
    }

    .list-item span:first-child {
        width: 80%;
        display: inline-block;
        text-align left;
    }

    .list-item .right-arrow {
        position: absolute;
        top: 18px;
        width: 20%;
        text-align right;
    }
</style>
