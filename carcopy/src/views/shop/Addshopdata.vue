<template>
    <div class="data">
        <div @click="toggleRetun" class="toptitle">
            <Toptitle :title="title" />
        </div>
        <div class="dataBox">
            <div class="imgs"><img src="../../assets/uploading.png" /></div>
            <div class="title">上传成功</div>
            <div class="names">请耐心等待审核</div>


        </div>
        <div class="btnfill" @click="clickAnew">回到首页</div>

    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
    name:'Addshopdata',
    data() {
        return {
            title:'资料上传成功'
        }
    },
    methods:{
        toggleRetun() {
            this.$router.go(-1);//返回上一层
       },
        clickAnew(){
            this.$router.push('/'); // 动态跳转
        },
    },
    components:{
        Toptitle
    }
}
</script>
<style lang="stylus" scoped>
    .data{
        .dataBox{
            width 4.72rem;
            margin 3rem auto;
            .imgs{
                width 4.72rem;
                height 4.88rem;
                img{
                    width 100%;
                    height 100%;
                }
            }
            .title{
                margin-top .9rem;
                text-align center;
                font-size 0.48rem;
                font-weight:bold;
            }
            .names{
                margin-top .36rem;
                font-size 0.32rem;
                text-align center;
                color #666666;
            }
        }
    }
    .btnfill {
        width: 6.93rem;
        height: 1.17rem;
        line-height 1.17rem;
        text-align center;
        color #E84071;
        font-size 0.48rem;
        border: 1px solid rgba(232, 63, 113, 1);
        border-radius: 1rem;
        margin 1rem auto 0;
    }
</style>
