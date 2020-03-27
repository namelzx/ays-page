<template>

    <!-- 营销单  -->
    <div class="Order">
        <div class="order_warp">
            <div @click="toggleRetun"><Toptitle :title="title" /></div>
            <div class="warp_sou" @click="ordersou">
                <img src="@/assets/sou.png" />
            </div>
        </div>
        
        <div class="OrderHe">
            <!--  tab栏  -->
            <div class="Tabs">
                <!-- 输入框 -->
                <!-- <div class="tabs-inp" @click="ordersou">请输入关键词搜索</div> -->
                <div class="Tabslist">
                    <div class="TabslistBox">
                        <div class="tab-btn"
                            v-for="(item,index) in tabs"
                            :key="index"
                            :class="{active:index==num}"
                            @click="toggleTab(index)"
                        >
                            {{item.tabname}}
                        </div>
                    </div>
                </div>
                <!--  tab内容  -->
                <div v-if="num==0" class="orderlist">
                    <Offorderlist :orderlist="orderlist" />
                </div>
                <div v-if="num==1" class="orderlist">
                    <Offorderlist :orderlist="orderlist" />
                </div>
                <div v-if="num==2" class="orderlist">
                    <Offorderlist :orderlist="orderlist" />
                </div>
                <div v-if="num==3" class="orderlist">
                    <Offorderlist :orderlist="orderlist" />
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import Offorderlist from '@/components/Offoreder/Offorderlist';
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
    name:'Offorder',
    data () {
        return {
            title:'营销单',
            value:'',
            num:0,//tab栏
            tabs:[
                { tabname:'全部' },
                { tabname:'待核销' },
                { tabname:'已核销' },
                { tabname:'已退货' }
            ],
            orderlist:[
                {
                    title:'欧司朗CBN套装  采用德国光源',
                    icon:require('../../assets/mortgage-img.png'),
                    shopname:'本田2016款飞度1.5L天窗版',
                    owner:'陈某某',
                    number:'13755555555',
                    time:'2019.08.08  12:00',
                    money:800,
                    sum:1,
                    progress:1
                },
                {
                    title:'欧司朗CBN套装  采用德国光源',
                    icon:require('../../assets/mortgage-img.png'),
                    shopname:'本田2016款飞度1.5L天窗版',
                    owner:'陈某某',
                    number:'13755555555',
                    time:'2019.08.08  12:00',
                    money:800,
                    sum:1,
                    progress:2
                },
                {
                    title:'欧司朗CBN套装  采用德国光源',
                    icon:require('../../assets/mortgage-img.png'),
                    shopname:'本田2016款飞度1.5L天窗版',
                    owner:'陈某某',
                    number:'13755555555',
                    time:'2019.08.08  12:00',
                    money:800,
                    sum:1,
                    progress:3
                },
                {
                    title:'欧司朗CBN套装  采用德国光源',
                    icon:require('../../assets/mortgage-img.png'),
                    shopname:'本田2016款飞度1.5L天窗版',
                    owner:'陈某某',
                    number:'13755555555',
                    time:'2019.08.08  12:00',
                    money:800,
                    sum:1,
                    progress:2
                },
                {
                    title:'欧司朗CBN套装  采用德国光源',
                    icon:require('../../assets/mortgage-img.png'),
                    shopname:'本田2016款飞度1.5L天窗版',
                    owner:'陈某某',
                    number:'13755555555',
                    time:'2019.08.08  12:00',
                    money:800,
                    sum:1,
                    progress:3
                }
            ]
        }
    },
    components:{
        Offorderlist,
        Toptitle
    },
    methods:{
        toggleRetun() {
            this.$router.go(-1);//返回上一层
        },
        toggleTab(index){
            this.num = index;
        },
        // //搜索
        ordersou() {
            this.$router.push({path:'/offorder/offordersou'})
        }
    },
    created() {
        if(this.$route.query.id==2){
            this.num = this.$route.query.id;
        }
    }

}
</script>
<style lang="stylus" scoped>
.Order{
    width: 10rem;
    .order_warp{
        position relative;
        .warp_sou{
            position absolute;
            right 0.5rem;
            top .25rem;
            width .65rem;
            height .65rem;
            img{
                width 100%;
                height 100%;
            }
        }
    }
    .OrderHe{
        .Tabs{
            width: 10rem;
            .tabs-inp{
                width:9.15rem;
                height:0.83rem;
                line-height 0.83rem;
                background:rgba(241,241,241,1);
                border-radius:0.41rem;
                margin 0 auto;
                display block;
                text-align center;
                font-size:0.4rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color #999999;
            }
            .Tabslist{
                width: 10rem;
                vertical-align:bottom !important;
                .TabslistBox{
                    margin: 0 auto;
                    width: 9.15rem;
                    display: flex;
                    justify-content space-between;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    position: relative;
                    .tab-btn{
                        font-size:0.4rem;
                        font-family:Source Han Sans CN;
                        font-weight:400;
                        // margin-right: .67rem;
                        color #999999;
                    }
                    .tab-btn.active{
                        color #333333;
                        font-size:0.48rem;
                        font-family:Source Han Sans CN;
                        font-weight:500;
                        position: relative;
                    }
                    .tab-btn.active:before{
                        position absolute;
                        content '';
                        left 0;
                        right 0;
                        top 1rem;
                        width 100%;
                        height 2px;
                        border-radius .2rem;
                        background #333;
                    }
                }
            }
            .orderlist{
                // margin-top: .3rem;
            }
            
        }
    }
}
    
</style>