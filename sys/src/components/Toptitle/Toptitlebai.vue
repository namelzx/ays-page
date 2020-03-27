<template>
    <div class="toptitle" :class="shadow?'bm':''"  :style="pstyle">
        <div class="toptitle-imgs">
            <img v-if="src===1" src="@/assets/return-bai.png"/>
            <img v-else src="@/assets/trun_left.png"/>
        </div>
        <div class="name" :style="name">{{title}}</div>
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
                src:1,
                pbstyle: {background: '#ffffff', color: this.colorstr,},
                pstyle: undefined,
                name: undefined,
                shadow:false

            }
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll);

        },
        methods: {
            handleScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop > 150) {


                    this.pstyle = this.pbstyle;
                    this.pstyle.color = '#000 !important'
                    this.name = {color: '#000'}
                    this.src=2
                    this.shadow=true
                } else {
                    this.pstyle = '';
                    this.src=1
                    this.name = {color: '#fff'}
                    this.shadow=false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .bm{
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
    .toptitle {
        width: 100%;
        height: 1.2rem;
        line-height: 1.2rem;
        // background: #ffffff;
        color: #333;
        font-size: 0.48rem;
        font-family: Source Han Sans CN;
        display: flex;
        padding-left: 0.2rem;
        position: fixed;
        z-index: 999;
        .toptitle-imgs {
            width: 0.6rem;
            height: 0.6rem;
            margin-top: .15rem;
            position: fixed;
            img {
                width: .8rem;
                height:.8rem;
            }
        }
        .name {
            color: #ffffff;
            margin-left: .2rem;
            text-align: center;
            width: 100%;
        }
    }
</style>
