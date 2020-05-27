<template>
    <div class="help">
        <div @click="toggleRetun"><Toptitle :title="title" /></div>
        <div class="helpBox" >
            <div v-for="(item,index) in list"  @click="toggle(item.type,item.url,item.content,item)" class="help-contens" >
                <div class="contens-left">
                   <img :src="item.img_url" />
                </div>
                <div class="contens-right">{{item.title}}</div>
            </div>

        </div>
        <div class="help-base">
            <div class="base-heng"></div>
            <div>这...有底线</div>
            <div class="base-heng"></div>
        </div>
    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";

import { GetIdByInfo,GetDataByList} from "@/api/help";


export default {
    name:'help',
    data() {
        return {
            list:[],
            title:'帮助'
        }
    },
    created() {
        GetDataByList().then(res=>{
            this.list=res.data
        })
    },
    methods:{
        toggleRetun() {
            this.$router.push('/');//返回上一层
        },
        togoIntr(data){
            this.$router.push(data)
        },

        toggle(type, url, content, row) {
            if (type == 2) {
                window.location.href = url
            }
            if (type == 1) {
                this.$router.push({path: '/help/intrOper', query: {id: row.id}})
            }
        }
    },
    components:{
        Toptitle
    }
}
</script>
<style lang="stylus" scoped>
.help{

}
.helpBox{
    // width 8rem;
    margin 1rem auto;

    margin-top 1.2rem;

    .help-contens{
        display flex;
        justify-content space-between;
        margin-bottom .7rem;
        margin-left .44rem;
        .contens-left{
            width 2.27rem;
            height 1.28rem;
            background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/help_perfect.png') no-repeat;
            background-size: cover;
            color #ffffff;
            font-size 0.32rem;
            img{
                width 120px;

            }
            .left-name1{
                margin-top .4rem;
                margin-left .19rem;
            }
            .left-name2{
                margin-left .7rem;
            }
        }
        .contens-left2{
            width 2.27rem;
            height 1.28rem;
            line-height 1.28rem;
            text-align center;
            background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/help_operation.png') no-repeat;
            background-size: cover;
            color #ffffff;
            font-size 0.32rem;
        }
        .contens-left3{
            width 2.27rem;
            height 1.28rem;
            text-align center;
            background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/help_reject.png') no-repeat;
            background-size: cover;
            color #0422BD;
            font-weight:500;
            font-size 0.32rem;
            .left-name1{
                margin-top .2rem;
            }
        }
        .contens-right{
            width:6.84rem;
            height 1.4rem;
            margin-left 40px;
            line-height 1.4rem;
            border-bottom 1px solid #dcdcdc38;
            color #333333;
            font-size:0.4rem;
        }
    }
}
.help-base{
    position absolute;
    bottom 1rem;
    left 0;
    right 0;
    width 7.5rem;
    margin 0 auto;
    display flex;
    justify-content space-between;
    color #999999;
    align-items center;
    .base-heng{
        width 2.4rem;
        height 1px;
        background #dcdcdc38;
    }
}
</style>
