<template>
    <div class="help">
        <div @click="toggleRetun"><Toptitle :title="title" /></div>
        <div class="helpBox">
            <div class="help-contens" @click="togoIntr('/help/intrper')">
                <div class="contens-left">
                    <div class="left-name1">如何完善</div>
                    <div class="left-name2">门店信息</div>
                </div>
                <div class="contens-right">如何完善门店信息？</div>
            </div>
            <div class="help-contens" @click="togoIntr('/help/intrOper')">
                <div class="contens-left2">
                    <div class="left-name1">如何操作接单</div>
                </div>
                <div class="contens-right">如何操作接单？</div>
            </div>
            <div class="help-contens" @click="togoIntr('/help/intrTurm')">
                <div class="contens-left3">
                    <div class="left-name1">如何驳回接单？</div>
                </div>
                <div class="contens-right">如何驳回接单？</div>
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
export default {
    name:'help',
    data() {
        return {
            title:'帮助'
        }
    },
    methods:{
        toggleRetun() {
            this.$router.push('/');//返回上一层
        },
        togoIntr(data){
            this.$router.push(data)
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
