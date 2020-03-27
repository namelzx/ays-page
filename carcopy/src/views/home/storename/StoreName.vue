<template>
    <div>
        <div @click="toggleRetun"><Toptitle :title="title" /></div>
        <div class="choose-shop" style="margin-top: 60px;">
            <div class="choose-item">
                <div class="item-title">请选择门店</div>
                <div class="item-content">
                    <div class="item" @click="toggleShop(item)" v-for="(item,index) in shopName">
                        <div class="item-warp">
                            <div class="warp-name">{{item.shopname}}</div>
                            <div class="warp-icon"><img src="@/assets/right-fx.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
import {mapGetters} from 'vuex'

import {GetDataByList} from '@/api/shop'

export default {
    name:'Storename',
    computed: {
        ...mapGetters([
            'userInfo',
            'sele_shop'
        ])
    },
    data() {
        return {
            title:'店铺选择',
            shopName:[
                {
                    id:1,
                    name:'幻影车灯音响 王龙飞'
                },
                {
                    id:2,
                    name:'钟祥启程车灯服务店'
                },
                {
                    id:3,
                    name:'亮途汽车灯光升级服务店'
                }
            ]
        }
    },
    created(){
        GetDataByList(this.userInfo.id).then(res => {
            this.shopName = res.data
            // if (this.sele_shop.shopname === undefined) {
            //     this.$store.dispatch('shop/setShop', res.data[0])
            //     console.log(this.sele_shop)
            // }
        })
    },
    methods:{
        toggleRetun() {
            this.$router.go(-1);//返回上一层
        },
        toggleShop(item) {

            this.$store.dispatch('shop/setShop', item)
            console.log(item)
            this.$router.push({path:'/'})
        }
    },
    components:{
        Toptitle
    }
}
</script>
<style lang="stylus" scoped>
.choose-item .item-title {
    text-align center;
    font-size: 18px;
    color: #000;
    margin: 30px 0;
    font-size:0.48rem;
    font-family:Source Han Sans CN;
    font-weight:400;
}
.choose-item .item-content .item {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #F1F1F1;
    padding: 18px 0;
    .item-warp{
        width 9rem;
        margin 0 auto;
        display flex;
        justify-content space-between;
        .warp-name{
            font-size:0.4rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:#333333;
        }
        .warp-icon{
            width .3rem;
            height .3rem;
            img{
                width 100%;
                height 100%;
            }
        }
    }
}
</style>
