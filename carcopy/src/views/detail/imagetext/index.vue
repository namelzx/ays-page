<template>
    <div class="marketing">
        <!--   输入框内容      -->
        <div class="seek_top">
            <div class="marketing_seek">
                <img src="@/assets/return.png" @click="toggleRetun()">
                <div class="seek_toggle" @click="toggleSeeklist">输入关键字</div>
            </div>
        </div>
        <!--  轮播  -->
        <div class="my-swipe-top">
            <van-swipe  class="my-swipe" :autoplay="3000" indicator-color="#2B73FB">
                <van-swipe-item  v-for="(item,index) in imglist" :key="index">
                    <img :src="item" />
                </van-swipe-item>
            </van-swipe>
        </div>

        <!--   瀑布流     -->
        <div class="marketing_pul">
            <list :list="list" />
        </div>


        <!--   底部栏      -->
        <div class="marketing_base">
            <div class="base_waro">
                <div class="base_waro_list" @click="toggleRetun()">
                    <img src="@/assets/icon_fatuwen.png">
                    <div class="name">发图文</div>
                </div>
                <div class="base_waro_list" @click="toggleVideo()">
                    <img src="@/assets/icon_fashiping.png">
                    <div class="name">发视频</div>
                </div>
                <div class="base_waro_list" @click="toggleRecoed()">
                    <img src="@/assets/icon_jilu.png">
                    <div class="name">记录</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import list from './../component/Marketinglist'
    export default {
        name: "index",
        data() {
            return {
                imglist: [
                    'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/cover.png',
                    'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/cover.png',
                    'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/cover.png'
                ],
                list:[
                    {
                        image_url:"https://kedand.oss-cn-beijing.aliyuncs.com/uploads/tu1.png",
                        video:"movie.ogg",
                        desc:"十代雅阁爆改阿帕守护者S套 装改灯教程",
                        type:1,
                    },
                    {
                        image_url:"https://kedand.oss-cn-beijing.aliyuncs.com/uploads/tu2.png",
                        video:"movie.ogg",
                        desc:"十代雅阁爆改阿帕守护者S套 装改灯教程2",
                        type:1,
                    },
                    {
                        image_url:"https://kedand.oss-cn-beijing.aliyuncs.com/uploads/tu3.png",
                        video:"movie.ogg",
                        desc:"十代雅阁爆改阿帕守护者S套 装改灯教程3",
                        type:2,
                    },
                    {
                        image_url:"https://kedand.oss-cn-beijing.aliyuncs.com/uploads/tu1.png",
                        video:"movie.ogg",
                        desc:"十代雅阁爆改阿帕守护者S套 装改灯教程",
                        type:1,
                    }
                ]
            }
        },
        components: {
            list
        },
        methods:{
            //记录
            toggleRecoed() {
                this.$router.push('/imagetext/record')
            },

            //搜索结果
            toggleSeeklist() {
                this.$router.push('/imagetext/seeklist')
            },
            toggleVideo(){
                this.$router.push('/upload')

            },
            toggleRetun() {
                this.$router.push('/case')

                // this.$router.push('/upload')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .seek_top{
        position fixed;
        top 0;
        left 0;
        right 0;
        background-color #ffffff;
        z-index 20;
    }
    .marketing_seek{

        height 1.2rem;
        width 9.25rem;
        margin 0 auto;
        display flex
        flex-direction row;
        justify-content space-between;
        align-items center;
        position relative;
        .empty_close{
            position absolute;
            top: .3rem;
            right 0.2rem;
            width: .6rem;
            height .6rem;
        }
        img{
            width:0.6rem;
            height:0.6rem;
        }
        .seek_toggle{
            text-align center;
            width:8.44rem;
            height:0.85rem;
            line-height 0.85rem;
            background:rgba(239,239,239,1);
            border-radius:1rem;
        }
    }
    .my-swipe-top{
        padding-top 1.2rem;
    }
    .my-swipe {
        padding-bottom: .6rem;
        margin .2rem auto;
        width: 9.12rem;
        height: 4.25rem;
        .van-swipe-item {
            width: 9.12rem;
            height: 4.25rem;
            img {
                width: 9.12rem;
                height: 4.25rem;
            }

        }
        /deep/ .van-swipe__indicator{
            width:4px !important;
            height:4px !important;
            background:rgba(153,153,153,1) !important;
            border-radius:50% !important;
            opacity 1 !important;
            bottom:-.6rem !important;
            z-index 100 !important;
        }
        /deep/ .van-swipe__indicator--active{
            opacity:1 !important;
            width: .35rem !important;
            height 3px !important;
            border-radius: .2rem !important;
            background-color: #2B73FB !important;
        }
    }

    .marketing_pul{
        padding-bottom 2.5rem;
    }
    .marketing_base{
        position:fixed;
        left: 0;
        right: 0;
        bottom:0;
        /*background-color: #ffffff;*/
        height: 2.5rem;
        display flex;
        justify-content center;
        .base_waro{
            margin: auto;
            width:6.72rem;
            height:1.55rem;
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 14px 0px rgba(0, 0, 0, 0.08);
            border-radius:1rem;
            display flex;
            flex-direction row;
            justify-content center;
            align-items center;
            .base_waro_list{
                display flex;
                flex-direction column;
                align-items center;
                justify-content center;
                width 2.3rem;
                border-right 1px solid #DCDCDC;
                &:nth-child(3){
                    border-right none;
                }
                img{
                    width .45rem;
                    height .64rem;
                }
                .name{
                    font-family:Source Han Sans CN;
                    color:rgba(51,51,51,1);
                    padding-top .2rem;
                    font-size 0.27rem;
                    text-align center;
                }
            }

        }
    }
</style>
