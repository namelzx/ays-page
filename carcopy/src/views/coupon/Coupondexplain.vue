
<template>
<!-- 优惠券使用说明 -->
    <div>
        <div @click="toggleRetun">
            <Toptitle :title="title" />
        </div>

        <div class="explain">
            <!--<div class="explain_title">使用说明</div>-->
            <div class="explain_desc">
             {{desc}}
            </div>
        </div>

    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
    name:'CoupondExplain',
    data() {
        return {
            title: "优惠券使用说明",
            desc:''
        }
    },
    created(){
      this.desc=this.$route.query.data
    },
    methods:{
        toggleRetun() {
        this.$router.go(-1); //返回上一层
        },
    },
    components: {
        Toptitle
    }
}
</script>
<style lang="stylus" scoped>
.explain{
    width 9.2rem;
    margin .5rem  auto;
    margin-top 1.2rem;
    .explain_title{
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(51,51,51,1);
        position relative;
    }
    .explain_title:before{
        position absolute;
        left 0;
        right 0;
        bottom -.2rem;
        content '';
        height 1px;
        width:1.6rem;
        background #dcdcdc40;
    }
    .explain_desc{
        padding-top .5rem;
        padding-bottom .4rem;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(51,51,51,1);
        border-bottom 1px solid #dcdcdc40;
    }
}
</style>
