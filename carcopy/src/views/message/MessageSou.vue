<template>
<!-- 消息数据搜索  -->
    <div class="Search">
        <div class="Da-search">
            <div class="searchBox">
                <div class="inputs">
                    <img src="../../assets/sou.png">
                    <input class="inp" @click="toggleResult" placeholder="搜索" v-model="value" />
                </div>
                <div class="calendar" @click="calendar">取消</div>
            </div>
        </div>

        
    </div>
</template>
<script>
export default {
    name:'MessageSou',
    data () {
        return {
            value:''
        }
    },
    methods:{
        calendar(){
            this.$router.go(-1);//返回上一层
        },
        toggleResult() {
            this.$router.push({path:'/message/messageResult'})
        }
    }
}
</script>
<style lang="stylus" scoped>
.Search{
    position: fixed;
    overflow: auto;
    height: 100%;
    background-color: #f4f4f4;
    width: 100%;
    .Da-search{
        z-index: 10;
        background-color: #f4f4f4;
        padding-top: .5rem;
        padding-bottom: .2rem;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        .searchBox{
            width: 9.15rem;
            margin:0 auto;
            display: flex;
            justify-content: space-between;
            height: 0.75rem;
            align-items: center;
            .inputs{
                display: flex;
                align-items: center;
                background:rgba(255,255,255,1);
                border-radius:0.36rem;
                width:7.95rem;
                height:0.75rem;
                img{
                    margin-left: .45rem;
                    width: .5rem;
                    height: .5rem;
                }
                .inp{
                    font-size:0.32rem;
                    width:5.95rem;
                    height:0.7rem;
                    line-height: 0.7rem;
                    font-size:0.4rem;
                    border: 0;
                    margin-left: .25rem;
                    color: #000000;
                }
                input::-webkit-input-placeholder{
                    color: #999999;
                }
            }
            
            .calendar{
                font-size: 0.4rem;
                font-weight:400;
                color: #666666;
            }
        }
    }
    .content{
        overflow: hidden;
        margin-top: 1.2rem;
    }
}
</style>