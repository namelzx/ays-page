<template>
<!-- 消息数据搜索  -->
    <div class="Search">
        <div class="Da-search">

            <div class="searchBox">
                <!--<div class="return-icon" @click="calendar">-->
                    <!--<img src="@/assets/return.png" />-->
                <!--</div>-->
                <div class="inputs">
                    <!-- <img src="../../assets/sou.png"> -->
                    <input class="inp" placeholder="搜索" v-model="value" />
                </div>
                <!--<div class="calendar" @click="souClick('搜索')" v-if="!showMes">搜索</div>-->
                <!--<div class="calendar" @click="souClick('取消')" v-else>取消</div>-->
            </div>
        </div>

        <!-- 消息列表  -->
        <div class="content" v-if="showMes">
            <Messagelist class="Messagelist" />
        </div>

        <!--<my-footer v-if="homeshow" class="home-footer"/>-->
    </div>
</template>
<script>
import Messagelist from './Messagelist';
import MyFooter from "./../../components/Footer/Footer";
export default {
    name:'MessageResult',
    data () {
        return {
            value:'',
            showMes:false,
            homeshow:true
        }
    },
    components:{
        Messagelist,
        MyFooter
    },
    methods:{
        calendar(){
            this.$router.go(-1);//返回上一层
        },
        souClick(e) {
            if(e==='搜索'){
                if(this.value!==''){
                    this.showMes = true
                }
            }
            else{
                this.showMes = false
                this.value = ''
            }


        }
        // toggleResult() {
        //     this.$router.push({path:'/message/messageResult'})
        // }
    }
}
</script>
<style lang="stylus" scoped>
.Search{
    .Da-search{
        z-index: 10;
        background-color: #ffffff;
        padding-top: .2rem;
        padding-bottom: .2rem;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        .searchBox{
            width: 9rem;
            margin:0 auto;
            display: flex;
            justify-content: space-between;
            height: 0.75rem;
            align-items: center;
            .return-icon{
                width 0.7rem;
                height 0.7rem;
                margin-top .2rem;
                img{
                    width 100%;
                    height 100%;
                }
            }
            .inputs{
                width:9rem;
                height:0.75rem;
                .inp{
                    border-radius:0.36rem;
                    padding-left .5rem;
                    font-size:0.32rem;
                    width:8.45rem;
                    height:0.75rem;
                    line-height: 0.75rem;
                    font-size:0.4rem;
                    border: 0;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color: #000000;
                    background #f1f1f1;

                }
                input::-webkit-input-placeholder{
                    color: #999999;
                          text-align center;
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
        margin-top: 1.8rem;
    }
}
</style>
