<template>
    <div>
        <div @click="toggleRetun"><Toptitle :title="title" /></div>
        <div class="category">
            <div class="cat-tabs">
                <div 
                    class="tabs-name" 
                    :class="{active: curIndex === index}" 
                    v-for="(item,index) in tabs" 
                    :key="index"
                    @click="changeBar(index)"
                >{{item.name}}</div>
            </div>
            <div class="cat-list" v-for="(item,index) in tabs" :key="index" v-if="curIndex === index">
                <div class="list-warp" v-for="(list,index) in item.list" :key="index">
                    <van-checkbox class="warp_se" v-model="list.checked" checked-color="#ea3756" icon-size="16px"></van-checkbox>
                    <div>{{list.name}}</div>
                </div>
            </div>

            <!-- 保存 -->
            <div class="cat-btn" @click="toggleBusiness">
                保存
            </div>
        </div>

    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
    name:'Category',
    data() {
        return {
            title:'服务类目',
            curIndex:0,
            tabs:[
                {
                    id:1,
                    name:'汽车后服务',
                    list:[
                        {name:'汽车改色',checked:false},
                        {name:'汽车美容',checked:false},
                        {name:'汽车改装',checked:false},
                        {name:'汽车维修',checked:false},
                        {name:'音响改装',checked:false}
                    ]
                },
                {
                    id:2,
                    name:'营销功能',
                    list:[
                        {name:'案例板块',checked:false},
                        {name:'节日问候',checked:false},
                        {name:'砍价营销',checked:false},
                        {name:'预约服务',checked:false},
                        {name:'分销功能',checked:false},
                        {name:'扫码挪车',checked:false}
                    ]
                }
            ],
            carAdd:[],//汽车后服务
            functionAdd:[] //营销功能
        }
    },
    methods:{
        toggleRetun() {
            this.$router.go(-1);//返回上一层
        },
        toggleBusiness() {
            this.$router.push({path:'/shop/business'})
        },
        changeBar(idx) {
        this.curIndex = idx;
        }
    },
    components:{
      Toptitle
    }
}
</script>
<style lang="stylus" scoped>
.category{
    .cat-tabs{
        width 9.15rem;
        margin 0 auto;
        padding .2rem 0;
        display flex;
        .tabs-name{
            color #666666;
            font-size:0.35rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            margin-right .57rem;
        }
        .tabs-name.active{
            color #333333;
            font-size:0.4rem;
            font-family:Source Han Sans CN;
            font-weight:400;
        }
    }
    .cat-list{
        width 9.15rem;
        margin 0 auto;
        .list-warp{
            border-bottom  1px solid  #EEEEEE;
            height 1.15rem;
            line-height 1.15rem;
            display flex;
            align-items center;
            color #333333;
            font-size:0.4rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            .warp_se{
                margin-right .35rem;
            }
        }
    }
    .cat-btn{
        position absolute;
        bottom 1.3rem;
        left 0;
        right 0;
        width:9.01rem;
        height:1.09rem;
        margin 0 auto;
        line-height 1.09rem;
        text-align center;
        background:rgba(234,55,86,1);
        border-radius:1rem;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color #ffffff;
    }
}
</style>