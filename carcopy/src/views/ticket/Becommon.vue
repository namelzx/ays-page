<!--  通用券详情 -->
<template>
    <div>
        <div @click="toggleRetun" class="toptitle">
            <Toptitle :title="title" />
        </div>
        <div class="vo-title">阿帕品牌通用券</div>
        <div class="vo-desc">
            <div class="desc-condition">
                <div>使用条件</div>
                <div>满2899使用</div>
            </div>
            <div class="desc-condition">
                <div>有效期</div>
                <div>2019.12.31</div>
            </div>
            <div class="desc-condition">
                <div>领取须知</div>
                <div class="condition-right">到店送精美礼品一份到店送精美礼品一份到店送精美礼品一份</div>
            </div>
        </div>
    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
    name:'Becommon',
    data() {
        return {
            title:'通用券详情'
        }
    },
    methods:{
        toggleRetun() {
            this.$router.go(-1);//返回上一层
       },
    },
    components:{
        Toptitle
    }
}
</script>
<style lang="stylus" scoped>
.vo-title{
    font-size:0.48rem;
    font-family:Source Han Sans CN;
    font-weight:500;
    text-align center;
    margin 0.7rem 0;
    color #333333;
}
.vo-desc{
    padding-top .5rem;
    margin 0 0.44rem;
    font-size:0.4rem;
    font-family:Source Han Sans CN;
    font-weight:400;
    color #333333;
    .desc-condition{
        display flex;
        justify-content space-between;
        margin-bottom .8rem;
        .condition-right{
            width 6.87rem;
        }
    }
}
</style>