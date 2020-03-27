<template>
    <div class="toptitle">
        <div class="toptitle-imgs"><img src="@/assets/return.png" /></div>
        <div class="name">{{title}}</div>
    </div>
</template>
<script>
    export default {
        props: ["title"],
    }
</script>
<style lang="scss" scoped>
    .toptitle{
        height: 1.2rem;
        line-height: 1.2rem;
        color: #333;
        font-size: 0.48rem;
        font-family: Source Han Sans CN;
        display: flex;
        width: 100%;
        padding-left: 0.2rem;
        text-align: center;
        position: fixed;
        z-index: 99;
        top: 0;
        background: #fff;
        .toptitle-imgs{
            width: 0.6rem;
            height: 0.6rem;
            margin-top: .15rem;
            position: fixed;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .name{
            color: #333333;
            margin-left: .2rem;
            width: 100%;
        }
    }
</style>
