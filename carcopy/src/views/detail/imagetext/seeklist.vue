<template>
    <div class="seek">
        <!--   输入框内容      -->
        <div class="seek_top">
            <div class="marketing_seek">
                <img src="@/assets/return.png" @click="toggleRetun()">
                <input class="seek_toggle" v-model="listQuery.name" placeholder="输入关键字" />
                <img v-if="listQuery.name!==''" @click.stop="bingempty()" class="empty_close" src="@/assets/empty.png" />
            </div>
        </div>
        <!--    内容    -->
        <div class="list_warp">

            <div v-if="list.length>0">
                <list :list="list" />
            </div>
            <div v-else>暂无数据</div>

        </div>
    </div>
</template>

<script>
    import list from './../component/Marketinglist'
export default {
    name: "seeklist",
    data() {
        return{
            listQuery: {
                limit: 20,
                page: 1,
                name:"",
            },
            list:[
                {
                    image_url:"https://kedand.oss-cn-beijing.aliyuncs.com/uploads/tu1.png",
                    desc:"十代雅阁爆改阿帕守护者S套 装改灯教程",
                    type:1,
                },
                {
                    image_url:"https://kedand.oss-cn-beijing.aliyuncs.com/uploads/tu2.png",
                    desc:"十代雅阁爆改阿帕守护者S套 装改灯教程2",
                    type:1,
                },
                {
                    image_url:"https://kedand.oss-cn-beijing.aliyuncs.com/uploads/tu3.png",
                    desc:"十代雅阁爆改阿帕守护者S套 装改灯教程3",
                    type:2,
                },
                {
                    image_url:"https://kedand.oss-cn-beijing.aliyuncs.com/uploads/tu1.png",
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
        //点击清空输入框内容
        bingempty(){
            this.listQuery.name = ''
        },
        toggleRetun() {
            this.$router.go(-1);//返回上一层
        },
    }
}
</script>

<style  lang="stylus" scoped>
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

            width:8rem;
            height:0.85rem;
            line-height 0.85rem;
            background:rgba(239,239,239,1);
            border-radius:1rem;
            padding-left .5rem;
            border: 0;
        }
        .seek_toggle::-ms-input-placeholder{
            text-align: center;
        }
        .seek_toggle::-webkit-input-placeholder{
            text-align: center;
        }
    }
    .list_warp{
        padding-top 1.2rem;
    }
</style>