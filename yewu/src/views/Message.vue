<template>
<!-- 消息  -->
    <div class="Message">
        <div @click="toggleRetun" class="top_title" style="background:#ffffff;"><Toptitle /></div>
        <!-- 搜索  -->
        <div class="Me-sou">
            <div class="souHe" @click="messageSou">
                <div class="souHe-bao">
                    <img src="../assets/sou.png" />
                    <div class="title">搜索</div>
                </div>
            </div>
        </div>

        <!--  列表 -->
        <Messagelist class="Messagelist" :storelist="storelist" />


    </div>
</template>
<script>
import Messagelist from '@/components/Messagelist';
import Toptitle from "@/components/Toptitle/Toptitle";

import {GetIdByList} from '@/api/message';
import {mapGetters} from 'vuex'

export default {
    name:'Message',
    computed: {
        ...mapGetters([
            'userInfo'
        ])
    },
    data() {
        return {
            title:'消息',
            storelist:[
                {
                    img_url:require('../assets/Message-1.png'),
                    title:'安装单：新订单消息',
                    desc:'您有一笔新的安装单订单，请尽快处理！',
                    conceal:1
                },
                {
                    img_url:require('../assets/Message-2.png'),
                    title:'订单驳回：新的订单驳回消息',
                    desc:'您有一笔安装订单被驳回，请查收',
                    conceal:2
                },
                {
                    img_url:require('../assets/Message-1.png'),
                    title:'订单退货：新的订单退货消息',
                    desc:'您有一笔安装订单被退回，请查收',
                    conceal:3
                },
                {
                    img_url:require('../assets/Message-2.png'),
                    title:'门店审核通知',
                    desc:'您的门店申请已审核，感谢您的支持！',
                    conceal:4
                },
                {
                    img_url:require('../assets/Message-1.png'),
                    title:'用户评价通知',
                    desc:'您有一笔新的官派单评价，请查收',
                    conceal:5
                }
            ]
        }
    },
    components:{
        Messagelist,
        Toptitle
    },
    created(){


        var temp={
            id:this.userInfo.openid
        }
        GetIdByList(temp).then(res=>{
            console.log(res)
            this.storelist=res.data

        })
    },
    methods:{
        toggleRetun() {
            this.$router.go(-1);//返回上一层
        },
        messageSou() {
            this.$router.push({path:'/message/messageSou'})
        }
    }
}
</script>
<style lang="scss" scoped>
    .top_title{
        height: 40px;
        width: 100%;
    }
.Message{
    position: fixed;
    overflow: auto;
    height: 100%;
    background-color: #f4f4f4;
    width: 100%;
    .Me-sou{
        width: 10rem;
        // padding-top: .45rem;
        /*padding-bottom: .27rem;*/
        background-color: #ffffff;
        top: .2rem;
        z-index: 99;
        left: 10%;
        position: fixed;
        .souHe{
            width:8.15rem;
            height:0.83rem;
            background:rgba(244,244,244,1);
            border-radius:0.37rem;
            /*margin: 0 auto;*/
            .souHe-bao{
                height: 0.83rem;
                display: flex;
                align-items: center;
                width: 1.6rem;
                margin: 0 auto;
                img{
                    width: .5rem;
                    height: .5rem;
                }
                .title{
                    font-size: 0.4rem;
                    color: #999999;
                    margin-left: .2rem;
                }
            }
        }
    }
    .Messagelist{
        margin-bottom: .2rem;
    }
}
</style>
