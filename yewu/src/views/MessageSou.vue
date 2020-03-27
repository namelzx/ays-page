<template>
<!-- 消息数据搜索  -->
    <div class="Search">
        <div class="Da-search">

            <div class="searchBox">
                <div class="return-icon" @click="calendar">
                    <img src="@/assets/return.png" />
                </div>
                <input class="inp" placeholder="输入关键字搜索" v-model="value" />
                <div class="calendar" @click="souClick('搜索')" v-if="!showMes">搜索</div>
                <div class="calendar" @click="souClick('取消')" v-else>取消</div>
            </div>
        </div>

        <!-- 消息列表  -->
        <div class="content" v-if="showMes">
            <MessagelistNewest v-if="storelist.length>0" class="Messagelist" :storelist="storelist" />
            <div class="not" v-else>暂无更多信息</div>
        </div>


    </div>
</template>
<script>
import MessagelistNewest from '@/components/MessagelistNewest';

import {GetIdByList} from '@/api/message';
import {mapGetters} from 'vuex'

export default {
    name:'MessageSou',
    data () {
        return {
            value:'',
            showMes:false,
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
    computed: {
        ...mapGetters([
            'userInfo'
        ])
    },
    components:{
        MessagelistNewest
    },
    methods:{
        calendar(){
            this.$router.go(-1);//返回上一层
        },
        souClick(e) {
            if(e==='搜索'){

                var temp={
                    id:this.userInfo.openid,
                    value:this.value
                }
                GetIdByList(temp).then(res=>{
                    console.log(res)
                    this.storelist=res.data
                })
                this.showMes = true
            }
            else{
                this.showMes = false
                this.value = ''
            }


        }
        // toggleResult() {
        //     this.$router.push({path:'/message/messageResult'})
        // }
    }
}
</script>
<style lang="scss" scoped>
.Search{
    .Da-search{
        z-index: 10;
        background-color: #ffffff;
        padding-top: .2rem;
        padding-bottom: .2rem;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        .searchBox{
            width: 9.15rem;
            margin:0 auto;
            display: flex;
            justify-content: space-between;
            height: 0.75rem;
            align-items: center;
            .return-icon{
                width: 0.7rem;
                height: 0.7rem;

                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .inp{
                    border-radius:0.41rem;
                    padding-left: .5rem;
                    font-size:0.32rem;
                    width:7rem;
                    height:0.83rem;
                    line-height: 0.83rem;
                    font-size:0.4rem;
                    border: 0;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color: #000000;
                    background: #f1f1f1;
                }
                input::-webkit-input-placeholder{
                    color: #999999;
                }
            .calendar{
                font-size: 0.4rem;
                font-weight:400;
                color: #666666;
            }
        }
    }
    .content{
        margin-top: 1.2rem;
        .not{
            text-align: center;
            margin-top: 1.5rem;
            font-size:0.4rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color: #666666;
        }
    }
}
</style>
