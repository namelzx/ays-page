<template>
    <div>
        <div @click="toggleRetun" class="toptitle">
            <Toptitle :title="title" />
        </div>
        <div class="offside">
            <div class="offside-manage" @click="selecClick">管理</div>
            <div class="offside-add" v-if="!selectShow" @click="toggleAdd">添加卡券</div>
            <div class="offside-add" v-else></div>
        </div>
        <div class="tabs">
            <div class="tabs-name" :class="{active: curIndex === index}" @click="changeBar(index)"  v-for="(item,index) in tabs" :key="index">{{item}}</div>
        </div>
        <div class="tabs-list" v-for="(item,index) in list" :key="index" v-if="curIndex===item.status">
            <div class="list-warp" v-if="item.title=='代金券'">
                <div class="warp-se" v-if="selectShow">
                    <van-checkbox v-model="item.checked" checked-color="#ea3756" icon-size="16px"></van-checkbox>
                </div>
                <div class="warp-bank" @click="toggleDetails(1)">
                    <div class="bank-box">
                        <div class="box-full">
                            <div class="full-name">{{item.title}}</div>
                            <div class="full-icon"><img src="@/assets/right-fx.png" /></div>
                        </div>
                        <div class="box-details">
                            <div class="details-left">
                                <div class="left-title">{{item.desc}}</div>
                                <div class="left-condition">{{item.criteria}}</div>
                                <div class="left-time">有效期：{{item.time}}</div>
                            </div>
                            <div class="details-right">
                                <div class="right-price"><span>￥</span><span class="price-num">{{item.money}}</span></div>
                                <div class="right-name">{{item.use}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-be" v-if="item.title=='通用券'">
                <div class="warp-se" v-if="selectShow">
                    <van-checkbox v-model="item.checked" checked-color="#ea3756" icon-size="16px"></van-checkbox>
                </div>
                <div class="warp-bank" @click="toggleDetails(2)">
                    <div class="bank-box">
                        <div class="box-full">
                            <div class="full-name">{{item.title}}</div>
                            <div class="full-icon"><img src="@/assets/right-fx.png" /></div>
                        </div>
                        <div class="box-details">
                            <div class="details-left">
                                <div class="left-title">{{item.desc}}</div>
                                <div class="left-condition">{{item.criteria}}</div>
                                <div class="left-time">有效期：{{item.time}}</div>
                            </div>
                            <div class="details-right">
                                <div class="right-name">{{item.use}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tabs-list" v-for="(item,index) in list" :key="index" v-if="curIndex===item.all">
            <div class="list-warp" v-if="item.title=='代金券'">
                <div class="warp-se" v-if="selectShow">
                    <van-checkbox v-model="item.checked" checked-color="#ea3756" icon-size="16px"></van-checkbox>
                </div>
                <div class="warp-bank" @click="toggleDetails(1)">
                    <div class="bank-box">
                        <div class="box-full">
                            <div class="full-name">{{item.title}}</div>
                            <div class="full-icon"><img src="@/assets/right-fx.png" /></div>
                        </div>
                        <div class="box-details">
                            <div class="details-left">
                                <div class="left-title">{{item.desc}}</div>
                                <div class="left-condition">{{item.criteria}}</div>
                                <div class="left-time">有效期：{{item.time}}</div>
                            </div>
                            <div class="details-right">
                                <div class="right-price"><span>￥</span><span class="price-num">{{item.money}}</span></div>
                                <div class="right-name">{{item.use}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-be" v-if="item.title=='通用券'">
                <div class="warp-se" v-if="selectShow">
                    <van-checkbox v-model="item.checked" checked-color="#ea3756" icon-size="16px"></van-checkbox>
                </div>
                <div class="warp-bank" @click="toggleDetails(2)">
                    <div class="bank-box">
                        <div class="box-full">
                            <div class="full-name">{{item.title}}</div>
                            <div class="full-icon"><img src="@/assets/right-fx.png" /></div>
                        </div>
                        <div class="box-details">
                            <div class="details-left">
                                <div class="left-title">{{item.desc}}</div>
                                <div class="left-condition">{{item.criteria}}</div>
                                <div class="left-time">有效期：{{item.time}}</div>
                            </div>
                            <div class="details-right">
                                <div class="right-name">{{item.use}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 删除按钮 -->
        <div v-if="selectShow" class="detalis-btn" @click="cilckShowbottom">删除</div>
    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
    name:'Ticket',
    data() {
        return {
            title:'卡券',
            tabs:['全部','代金券','通用券'],
            curIndex:0,
            selectShow:false,
            list:[
                {
                    id:1,
                    title:'代金券',
                    desc:'满1699减400代金券',
                    criteria:'有条件有条件',
                    time:'2019.11.11',
                    money:400,
                    use:'满1699使用',
                    checked:false,
                    status:1,
                    all:0
                },
                {
                    id:2,
                    title:'通用券',
                    desc:'满1699减400代金券',
                    criteria:'有条件有条件',
                    time:'2019.11.11',
                    use:'通用券',
                    checked:false,
                    status:2,
                    all:0
                }
                
            ]
        }
    },
    methods:{
       toggleRetun() {
        this.$router.go(-1);//返回上一层
       },
       changeBar(idx) {
            this.curIndex = idx;
       },
       selecClick() {
           console.log(111)
           this.selectShow = !this.selectShow
       },
       //删除
        cilckShowbottom() {
            this.selectShow = !this.selectShow
            for(let i=0;i<this.list.length;i++){
                if(this.list[i].checked===true){
                this.list.splice(i, 1);
                console.log(i);
                }
            }
        },
       //添加卡券
       toggleAdd() {
           this.$router.push('/ticket/add')
       },
       //跳转详情
       toggleDetails(e){
           if(!this.selectShow){
               if(e===1){
                    this.$router.push('/ticket/voucher')
                }
                else{
                    this.$router.push('/ticket/becommon')
                }
           }
           
       }
    },
    components:{
        Toptitle
    }
}
</script>
<style lang="stylus" scoped>
.toptitle{
    position relative;
    overflow hidden;
}
.offside{
    position absolute;
    top 0;
    right 0.42rem;
    height 1.2rem;
    line-height 1.2rem;
    display flex;
    font-size:0.35rem;
    font-family:Source Han Sans CN;
    font-weight:400;
    z-index 10;
    .offside-manage{

    }
    .offside-add{
        width 2rem;
        text-align right;
        color #EA3756;
    }
}
.tabs{
    display flex;
    width 9.15rem;
    margin 0 auto;
    height 1.04rem;
    line-height 1.04rem;
    .tabs-name{
        margin-right .56rem;
        font-size:0.35rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color #666666;
    }
    .tabs-name.active{
        color #333333;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
    }
}
.tabs-list{
    overflow hidden;
    margin-top .2rem;
    margin-left .43rem;
    .list-warp{
        display flex;
        align-items center;
        .warp-se{
            margin-right 0.43rem;
        }
        .warp-bank{
            width:9.15rem;
            height:3.84rem;
            background:rgba(255,255,255,1);
            box-shadow:0rem 0rem 0.13rem 0.1rem rgba(234,234,234,0.3);
            border-radius:0.13rem;
            margin-bottom .4rem;
            .bank-box{
                margin .27rem .29rem;
                .box-full{
                    display flex;
                    justify-content space-between;
                    align-items center;
                    .full-name{
                        width:1.53rem;
                        height:0.69rem;
                        line-height 0.69rem;
                        text-align center;
                        font-size:0.32rem;
                        font-family:Source Han Sans CN;
                        font-weight:400;
                        background:rgba(255,244,230,1);
                        border-radius:0.13rem;
                        color #EA3756;
                    }
                    .full-icon{
                        width .3rem;
                        height .3rem;
                        img{
                            width 100%;
                            height 100%;
                        }
                    }
                }
                .box-details{
                    margin-top .27rem;
                    display flex;
                    justify-content space-between;
                    align-items center;
                    height 2.35rem;
                    border-radius:0.13rem;
                    background #faf7fa;
                    .details-left{
                        margin .41rem  0;
                        width 5.01rem;
                        margin-left .55rem;
                        .left-title{
                            font-size:0.4rem;
                            font-family:Source Han Sans CN;
                            font-weight:400;
                            color #333333;
                            margin-bottom .25rem;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                        }
                        .left-condition{
                            color #333333;
                            font-size:0.32rem;
                            font-family:Source Han Sans CN;
                            font-weight:400;
                            margin-bottom .25rem;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                        }
                        .left-time{
                            color #666666;
                            font-size:0.32rem;
                            font-family:Source Han Sans CN;
                            font-weight:400;
                        }
                    }
                    .details-right{
                        background #FFF4E6;
                        width 2.95rem;
                        text-align center;
                        height 2.35rem;
                        align-items center;
                        .right-price{
                            color #EA3756;
                            margin-top .7rem;
                            font-size:0.27rem;
                            font-family:Source Han Sans CN;
                            font-weight:400;
                            .price-num{
                                font-size 0.64rem;
                            }
                        }
                        .right-name{
                            font-size:0.32rem;
                            font-family:Source Han Sans CN;
                            font-weight:400;
                            color #EA3756;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
    }
    .list-be{
        display flex;
        align-items center;
        .warp-se{
            margin-right 0.43rem;
        }
        .warp-bank{
            width:9.15rem;
            height:3.84rem;
            background:rgba(255,255,255,1);
            box-shadow:0rem 0rem 0.13rem 0.1rem rgba(234,234,234,0.3);
            border-radius:0.13rem;
            margin-bottom .4rem;
            .bank-box{
                margin .27rem .29rem;
                .box-full{
                    display flex;
                    justify-content space-between;
                    align-items center;
                    .full-name{
                        width:1.53rem;
                        height:0.69rem;
                        line-height 0.69rem;
                        text-align center;
                        font-size:0.32rem;
                        font-family:Source Han Sans CN;
                        font-weight:400;
                        background:#bdf6e8;
                        border-radius:0.13rem;
                        color #EA3756;
                    }
                    .full-icon{
                        width .3rem;
                        height .3rem;
                        img{
                            width 100%;
                            height 100%;
                        }
                    }
                }
                .box-details{
                    margin-top .27rem;
                    display flex;
                    justify-content space-between;
                    align-items center;
                    height 2.35rem;
                    border-radius:0.13rem;
                    background #faf7fa;
                    .details-left{
                        margin .41rem  0;
                        width 5.01rem;
                        margin-left .55rem;
                        .left-title{
                            font-size:0.4rem;
                            font-family:Source Han Sans CN;
                            font-weight:400;
                            color #333333;
                            margin-bottom .25rem;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                        }
                        .left-condition{
                            color #333333;
                            font-size:0.32rem;
                            font-family:Source Han Sans CN;
                            font-weight:400;
                            margin-bottom .25rem;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                        }
                        .left-time{
                            color #666666;
                            font-size:0.32rem;
                            font-family:Source Han Sans CN;
                            font-weight:400;
                        }
                    }
                    .details-right{
                        background #bdf6e8;
                        width 2.95rem;
                        text-align center;
                        height 2.35rem;
                        line-height 2.35rem;
                        align-items center;
                        .right-name{
                            font-size:0.32rem;
                            font-family:Source Han Sans CN;
                            font-weight:400;
                            color #EA3756;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
    }
}
.detalis-btn{
    margin 1rem auto;
    width:9.01rem;
    height:1.09rem;
    line-height 1.09rem;
    text-align center;
    background:rgba(234,55,86,1);
    border-radius:1rem;
    font-size:0.4rem;
    font-family:Source Han Sans CN;
    font-weight:400;
    color #ffffff;
}
</style>