<template>
<!-- 质保卡 --添加成功  -->
    <div class="succeed">
        <div class="succeed-icon">
            <img src="../../assets/succeed.png" />
        </div>
        <div class="succeed-title">质保卡添加成功</div>
        <div class="succeed-title2">可在质保卡页面查看</div>
        <div class="succeed-heng"></div>
        <div class="succeed-btn" @click="Toqualiys">完成</div>
    </div>
</template>
<script>
export default {
    name:'Qualitysucee',
    methods:{
            //添加成功，跳转成功页面
        Toqualiys(){
            this.$router.push({path:'/quality'})
        }
    }
}
</script>
<style lang="scss" scoped>
.succeed{
    // overflow: hidden;
    font-family:SourceHanSans;
    margin-top: .5rem;
    .succeed-icon{
        width:2.08rem;
        height:2.08rem;
        margin: 1.43rem auto 0.8rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .succeed-title{
        text-align: center;
        font-size: 0.48rem;
        color: #333333;
    }
    .succeed-title2{
        text-align: center;
        margin-top: .47rem;
        font-size:0.32rem;
        color: #666666;
    }
    .succeed-heng{
        margin: 0.8rem auto 0;
        width:8.73rem;
        height:0.02rem;
        border:1px solid rgba(238,238,238,1);
    }
    .succeed-btn{
        width:2.53rem;
        height:0.75rem;
        line-height: 0.75rem;
        text-align: center;
        color: #00A0E9;
        font-size:0.4rem;
        border:1px solid rgba(0,160,233,1);
        border-radius:0.13rem;
        margin: 5rem auto 0;
    }
}
</style>