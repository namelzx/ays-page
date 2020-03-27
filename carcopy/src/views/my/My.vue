<template>
    <!-- 我的页面  -->
    <div class="my">
        <div class="myBox">
            <div class="my-data">
                <div class="data-icon"><img :src="userInfo.headimgurl" /></div>
                <div class="data-look" @click="toggleDatum">
                    <div class="look-name">{{userInfo.nickname}}</div>
                    <div class="look-btn">微信昵称</div>
                </div>
            </div>
            <div class="my-car" @click="toggleCar">
                <div>钱包</div>
                <div class="car-icon"><img src="@/assets/you.png" /></div>
            </div>
        </div>

        <my-footer class="home-footer"/>
    </div>
</template>
<script>
    import MyFooter from "./../../components/Footer/Footer";
    import {getUser, removeUser, setUser} from '@/utils/auth'
    import {mapGetters} from 'vuex'

    export default {
        name:'My',
        components:{
            MyFooter
        },
        computed:{
            ...mapGetters([
                'userInfo'
            ])
        },
        created(){
            console.log(this.userInfo)

        },
        methods:{
            toCompile() {
                this.$router.push({path:'/my/mycompile'})
            },
            //钱包
            toggleCar() {
                this.$router.push({path:'/shop/Guarantee'})
            },
            //编辑我的资料
            toggleDatum() {
                this.$router.push({path:'/my/mydatum'})
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .my{
        font-family:SourceHanSans;
        width: 10rem;
        overflow: hidden;
        border-bottom: 1px solid #DCDCDC;
        .myBox{
            width: 9rem;
            margin:1.19rem auto 0;
            .my-data{
                clear:both;
                display: flex;
                margin-bottom: .45rem;
                .data-icon{
                    width:1.71rem;
                    height:1.71rem;
                    border-radius: 50%;
                    border: 1px solid  #F1F1F1;
                    overflow: hidden;
                    background: #fffdfe;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .data-look{
                    margin-left: .35rem;
                    .look-name{
                        font-size:0.4rem;
                        font-family:Adobe Heiti Std;
                        font-weight:600;
                        color:rgba(51,51,51,1);
                    }
                    .look-btn{
                        margin-top: 0.08rem;
                        font-size:0.32rem;
                        font-family:Adobe Heiti Std;
                        font-weight:normal;
                        color:rgba(51,51,51,1);
                    }
                }
            }
            .my-car{
                padding: .3rem 0;
                font-size:0.4rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                display: flex;
                justify-content: space-between;
                color: #333333;
                .car-icon{
                    width: .6rem;
                    height: .6rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>
