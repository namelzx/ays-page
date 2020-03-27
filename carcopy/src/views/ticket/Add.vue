<template>
    <div>
        <div @click="toggleRetun" class="toptitle">
            <Toptitle :title="title" />
        </div>
        <div class="add-voucher" @click="toggleAdd('/ticket/add/voucheradd')">
            <div class="voucher">
                <div>代金券</div>
                <div class="voucher-icon"><img src="@/assets/right-fx.png" /></div>
            </div>
        </div>
        <div class="add-voucher" @click="toggleAdd('/ticket/add/becommonadd')">
            <div class="voucher">
                <div>通用券</div>
                <div class="voucher-icon"><img src="@/assets/right-fx.png" /></div>
            </div>
        </div>
    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
    name:'TicketAdd',
    data() {
        return {
            title:'添加卡券'
        }
    },
    methods:{
        toggleRetun() {
            this.$router.go(-1);//返回上一层
       },
       toggleAdd(data){
           this.$router.push(data)
       }
    },
    components:{
        Toptitle
    }
}
</script>
<style lang="stylus" scoped>
.add-voucher{
    height 1.17rem;
    line-height 1.17rem;
    align-items center;
    border-bottom 1px solid #DCDCDC;
    .voucher{
        margin 0 .43rem;
        display flex;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        justify-content space-between;
        color #333333;
        
        .voucher-icon{
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