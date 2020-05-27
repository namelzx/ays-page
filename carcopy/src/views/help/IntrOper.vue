<template>
    <div class="main">
        <div class="head">{{info.title}}</div>
        <div v-html="info.content"></div>
    </div>
</template>

<script>
    import {GetIdByInfo} from '@/api/help'

    export default {
        name: "index",
        data(){
            return{
                info:{},
            }
        },
        created() {
            this.getParams();
        },
        methods:{
            getParams() {
                const query = this.$route.query
                console.log(query, 11000)
                GetIdByInfo(query.id).then(res=>{
                    this.info=res.data
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>

    .main{
        margin 10px;
    }
    .head{
        width 100%;
        text-align center;
        font-size 25px;
        margin-top 10px;
    }
    .main >>>   img{
        width: 100%;
    }


</style>