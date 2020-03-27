<template>
<!-- 订单 --发表评论成功  -->
    <div class="Succeed">
        <div class="Succeed-icon">
            <img src="../../assets/succeed.png" />
        </div>
        <div class="Succeed-title">评论发表成功</div>
        <div class="Succeed-title2">感谢你的支持</div>
        <div class="Succeed-heng"></div>
        <div class="Succeed-btn">完成</div>
    </div>
</template>
<script>
export default {
    name:'Datasucceed'
}
</script>
<style lang="scss" scoped>
.Succeed{
    overflow: hidden;
    font-family:SourceHanSans;
    margin-top: .5rem;
    .Succeed-icon{
        width:2.08rem;
        height:2.08rem;
        margin: 1.43rem auto 0.8rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .Succeed-title{
        text-align: center;
        font-size: 0.48rem;
        color: #333333;
    }
    .Succeed-title2{
        text-align: center;
        margin-top: .47rem;
        font-size:0.32rem;
        color: #666666;
    }
    .Succeed-heng{
        margin: 0.8rem auto 0;
        width:8.73rem;
        height:0.02rem;
        border:1px solid rgba(238,238,238,1);
    }
    .Succeed-btn{
        width:2.53rem;
        height:0.75rem;
        line-height: 0.75rem;
        text-align: center;
        color: #00A0E9;
        font-size:0.4rem;
        border:1px solid rgba(0,160,233,1);
        border-radius:0.13rem;
        margin: 7rem auto 0;
    }
}
</style>