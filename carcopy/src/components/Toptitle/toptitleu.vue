<template>
    <div class="toptitle nb" :class="shadow?'bm':''" :style="pstyle">
        <div class="toptitle-imgs"><img src="@/assets/return.png"/></div>
        <div class="name">{{title}}</div>
    </div>
</template>
<script>
    export default {

        props: {
            title: {
                type: String,
                default: ''
            },
            colorstr: {
                type: String,
                default: '#333'
            }
        },
        data() {
            return {
                pbstyle: {background: '#ffffff', color: this.colorstr},
                pstyle: undefined,
                shadow:undefined,
            }
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll);

        },
        methods: {
            handleScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

            }
        }
    }
</script>
<style lang="stylus" scoped>
    .bm{
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
    .toptitle {
        width 100%
        height: 1.2rem;
        line-height: 1.2rem;
        background: #ffffff;
        z-index 9;
        color #333333;

        font-size: 0.48rem;
        font-family: Source Han Sans CN;
        display flex;
        padding-left 0.2rem;
        align-items center
        position fixed;
        top: 0;
        .toptitle-imgs {
            width: 0.8rem;
            height: 0.8rem;
            img {
                width 100%;
                height 100%;
            }
        }
        .name {
            /*color #333333;*/
            /*margin-left .2rem;*/
            width: 80%;
            text-align: center;
        }
    }
</style>
