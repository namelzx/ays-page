<template>
    <div class="Workbench" v-if="homeshow">
        <div class="work_top">
            <div class="Wobao">
                <!--<div class="title">后台管理中心</div>-->
                <div class="message">
                    <div class="mes-left">August  26. 2019</div>
                    <div class="mes-right" @click="toMessage">
                        <img src="../assets/message.png" />
                        <div v-if="message" class="mes-yuan"></div>
                    </div>
                </div>
                <div class="module">
                    <div class="moduleHe">
                        <div class="moduleHels">
                            <div class="ls-icon"><img src="../assets/month.png" /></div>
                            <div class="ls-name">
                                <span>本月订单</span>
                                <div class="muns">
                                    <span>+</span>
                                    <span>{{datainfo.month.m_count}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="moduleHels">
                            <div class="ls-icon"><img src="../assets/money.png" /></div>
                            <div class="ls-name">
                                <span>本月金额</span>
                                <div class="money">
                                    <span class="rmb">￥</span>
                                    <span v-if="datainfo.month.m_price!==null">{{parseInt(datainfo.month.m_price)}}</span>
                                <span v-else>0  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="moduleHe">
                        <div class="moduleHels">
                            <div class="ls-icon"><img src="../assets/month.png" /></div>
                            <div class="ls-name">
                                <span>总订单</span>
                                <div class="muns">
                                    <span>+</span>
                                    <span>{{datainfo.all.m_count}}</span>

                                </div>
                            </div>
                        </div>
                        <div class="moduleHels">
                            <div class="ls-icon"><img src="../assets/money.png" /></div>
                            <div class="ls-name">
                                <span>总金额</span>
                                <div class="money">
                                    <span class="rmb">￥</span>
                                    <span v-if="datainfo.all.m_price!==null">{{parseInt(datainfo.all.m_price)}}</span>
                                    <span v-else>0 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="work_thought" @click="todemand">
            <div class="thought_warp">
                <div class="warp_moduIdat">
                    <div class="moduIdat-icon"><img src="@/assets/demand.png" /></div>
                    <div class="moduIdat-bring">
                        <div class="bring-title">提交门店想法</div>
                        <div class="bring-title2">门店需求</div>
                    </div>
                </div>
                <div class="warp_right"><img src="@/assets/jt-you.png" /></div>
            </div>
        </div>

        <Tabbar />
    </div>
</template>
<script>
import Tabbar from '@/components/Tabbar';
import {GetSaleByHome} from '@/api/home'
import {mapGetters} from 'vuex'

import {getUser, removeUser, setUser} from '@/utils/auth'
import {getInfo, login} from '@/api/user'

import { Toast } from 'vant';

export default {
    name:'Workbench',
    data () {
        return {
            message: true,
           user_id:undefined,
            homeshow:false,
            datainfo:{
                all:{

                },
                month:{

                }
            },
        }
    },
    computed: {
        ...mapGetters([
            'userInfo'
        ])
    },
    components:{
        Tabbar
    },
    created(){
        this.user_id=this.userInfo.id
        let id=this.$route.params.id;
        if (id !== undefined) {
            getInfo(id).then(res => {
                //执行某个方法dispatch 要指定modules下面的文件里面的方法才起作用
                this.$store.dispatch('user/login', res.data)
                setUser(res.data)
                setUser(res.data)
            })

        }else{

        }

        this.getHomeData();

    },
    methods:{
        getHomeData(){
            const strToObj = JSON.parse(getUser())
            this.user_id=strToObj.id;

            GetSaleByHome(this.user_id).then(res=>{
                this.datainfo=res.data
                if(res.data.chesale===1){
                    this.homeshow=true
                    return
                }
                if(res.data.chesale===4){
                    Toast('无权限进入')
                    return
                }

            })
        },
        toMessage(){
            this.$router.push({path:'/message'})
        },
        todemand() {
            this.$router.push({path:'/demand'})
        }
    }
}
</script>
<style lang="scss" scoped>
.Workbench{
    width: 10rem;
    .work_top{
        // height: 7.5rem;
        background: #fe8081;
        overflow: hidden;
        .Wobao{
            width: 8.93rem;
            margin: 0 auto;
            .title{
                padding-top: .3rem;
                font-size:0.48rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(254,254,254,1);
            }
            .message{
                margin-top: .56rem;
                display: flex;
                justify-content: space-between;
                .mes-left{
                    font-size:0.4rem;
                    font-family:Source Han Sans CN;
                    font-weight:500;
                    color:rgba(254,254,254,1);

                }
                .mes-right{
                    position: relative;
                    width: 0.53rem;
                    height: 0.53rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    .mes-yuan{
                        position: absolute;
                        top: 0;
                        right: 0;
                        width:0.13rem;
                        height:0.13rem;
                        background:rgba(255,0,0,1);
                        border-radius:50%;
                    }
                }
            }
            .module{
                margin-top: 1.23rem;
                .moduleHe{
                    color: #ffffff;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: .73rem;
                    .moduleHels{
                        width:4.16rem;
                        // height:2rem;
                        display: flex;
                        align-items: center;
                        .ls-icon{
                            margin-top: -.45rem;
                            width: 0.91rem;
                            height: 0.93rem;
                            margin-left: .23rem;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .ls-name{
                            margin-left: .27rem;
                            color: #ffffff;
                            .muns{
                                font-size: 0.64rem;
                                font-weight: 500;
                            }
                            .money{
                                font-size:0.64rem;
                                font-family:DIN;
                                font-weight:500;
                                .rmb{
                                    font-size: .4rem;
                                }
                            }
                        }
                    }
                }
                .moduIdat{
                    width:4.16rem;
                    height:2rem;
                    background:rgba(255,255,255,1);
                    box-shadow:0px 2px 8px 0px rgba(240,163,102,0.2);
                    border-radius:0.27rem;
                    display: flex;
                    align-items: center;
                    .moduIdat-icon{
                        width: 0.91rem;
                        height: 0.93rem;
                        margin-left: .23rem;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .moduIdat-bring{
                        margin-left: .27rem;
                        .bring-title{
                            font-size:0.27rem;
                            font-family:Source Han Sans CN;
                            font-weight:500;
                            color: #333333;
                            margin-top: -0.06rem;
                        }
                        .bring-title2{
                            margin-top: .2rem;
                            font-size:0.43rem;
                            font-family:Source Han Sans CN;
                            font-weight:bold;
                            color: #333333;
                        }
                    }
                }
            }
        }
    }
    .work_thought{
        height: 1.57rem;
        border-bottom: 1px solid #DCDCDC;
        .thought_warp{
            height: 1.57rem;
            margin: 0 .33rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .warp_moduIdat{
                height: 1.57rem;
                display: flex;
                align-items: center;
                .moduIdat-icon{
                    margin-left: 0.35rem;
                    width: 0.53rem;
                    height: 0.56rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .moduIdat-bring{
                    margin-left: .53rem;
                    .bring-title{
                        font-size:0.4rem;
                        font-family:Source Han Sans CN;
                        font-weight:bold;
                        color:rgba(51,51,51,1);
                    }
                    .bring-title2{
                        font-size:0.27rem;
                        font-family:Source Han Sans CN;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                    }
                }
            }
            .warp_right{
                width: 0.5rem;
                height: 0.5rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

}
</style>
