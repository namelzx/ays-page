<template>
    <!--   瀑布流     -->
    <div class="marketing_warp">
        <div class="mar_item" v-for="(item,index) in list" :key="index" >
            <img v-if="item.type=='图文'" @click="toggleCase(item.type,item.video,item.desc)" :src="item.imagetext.assembly" />
           <div  class="mb"  v-else  >
            <div class="ma" @click="toggleCase(item.type,item.video,item.totitle)"></div>
               <video  class="mc"  :src="item.video[0].url" controls="controls">
               </video>
           </div>
            <div class="mar_item_desc">{{item.desc}}</div>
        </div>

        <!--   视频弹窗     -->
        <div class="keep" v-if="show">
            <video  :src="video[0].url" controls="controls"></video>
            <div    class="desc">#{{desc}}</div>
            <img @click.stop="clickClose"  src="@/assets/close.png"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "Marketinglist",
    props: {
        list: {
            type: Array,
            default: ''
        },

    },
    data() {
        return{
            show:false,
            video:"",
            desc:""
        }
    },
    methods:{
        toggleCase(type,video,desc){
            if(type=='图文'){
                // this.$router.push('/imagetext/case')
                window.location.href = 'http://www.baidu.com';
            }
            if(type=='视频'){
                console.log("视频")
                this.video = video
                this.desc = desc
                this.show = true

            }
        },
        clickClose(){
            this.show = false
        }
    }
}
</script>


<style lang="stylus" scoped>
    .mb{
        .mc{
            position inherit;
        }
        .ma{
            position inherit;
            width: 100px;
            width: 100px;
            position: fixed;
            z-index: 99999999999999;
            width: 4.4rem;
            height: 8rem;
        }
    }
    .marketing_warp{
        width 9.25rem;
        margin .3rem auto;
        column-count:2;
        column-gap: .35rem;
        column-width:4.37rem;
        .mar_item{
            break-inside: avoid;
            float:left;
            padding-bottom: .5rem;
            img{
                width:4.37rem;
                max-height:10rem;
            }
            video{
                width:4.37rem;
                max-height:10rem;
            }
            .mar_item_desc{
                color: #000000;
                font-size:0.32rem;
                line-height: 1.5;
                font-weight: bold;
            }
        }
    }
    .keep{
        position fixed;
        top 0;
        left 0;
        right 0;
        bottom 0;
        z-index 100;
        background-color #2b2b2b;
        display flex;
        flex-direction column;
        /* 模糊度 */
        video{
            width: 100%;
            height 50%;
        }
        .desc{
            margin .3rem auto;
            width 9.25rem;
            font-size .4rem;
            color #ffffff;
            line-height 1.5;
        }
        img{
            width: 1rem;
            height 1rem;
            margin 1rem auto;
        }


    }
</style>