<template>
    <!--   瀑布流     -->
    <div class="marketing_warp">
        <div class="mar_item" v-for="(item,index) in list" :key="index">
            <img v-if="item.type==1" :src="item.image_url" />
            <video v-else src="movie.ogg" controls="controls">
            </video>
            <div class="mar_item_desc">{{item.desc}}</div>
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
        return{}
    }
}
</script>


<style lang="stylus" scoped>
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
</style>