<template>
    <!-- 订单详情  -->
    <div class="Orderdetails">
        <div class="pink" :style ="note">
            <div class="pink-title">
                <span class="title-nums">5502：</span>
                <span>待处理</span>
            </div>
        </div>
        <div class="message" :style="message">
            <div class="me-main">
                <div class="mainTime">2019.08.08   12:00</div>
                <!-- 车主信息  -->
                <div class="Carowner" v-if="schedule===4">
                    <div class="Carowner-pr">
                        <div class="pr-heng"></div>
                        <div class="pr-name">车主信息</div>
                    </div>
                    <div class="Carowner-cla">
                        <div class="cla-ti">
                            <span class="ti-title">账号：</span>
                            <span class="ti-names">122354545875457874</span>
                        </div>
                        <div class="cla-ti">
                            <span class="ti-title">平台：</span>
                            <span class="ti-names">途虎</span>
                        </div>
                        <div class="cla-ti">
                            <span class="ti-title">产品：</span>
                            <span class="ti-names">守护者S</span>
                        </div>
                        <div class="cla-ti">
                            <div class="ti-rela">
                                <span class="ti-title">联系人：</span>
                                <span class="ti-names">李某某</span>
                            </div>
                            <div class="ti-rela">
                                <span class="ti-title">电话：</span>
                                <span class="ti-names">13755555555</span>
                            </div>
                            
                        </div>
                        <div class="cla-ti">
                            <span class="ti-title">车牌：</span>
                            <span class="ti-names">粤A·00000</span>
                        </div>
                        <div class="cla-ti">
                            <span class="ti-title">车型：</span>
                            <span class="ti-names">别克2017君威1.5t精英版</span>
                        </div>
                        <div class="cla-ti">
                            <span class="ti-title">备注：</span>
                            <span class="ti-names">阿凡达快速健康爱上蓝调；就；</span>
                        </div>
                    </div>
                </div>
                <!-- 附带配件  -->
                <div class="Carowner" v-if="schedule===4">
                    <div class="Carowner-pr">
                        <div class="pr-heng"></div>
                        <div class="pr-name">附带配件</div>
                    </div>
                    <div class="Carowner-cla">
                        <div class="cla-ti">
                            <span class="ti-title">支架：</span>
                            <span class="ti-names">随货发    /    供应商代发</span>
                        </div>
                        <div class="cla-ti">
                            <span class="ti-title">易改件：</span>
                            <span class="ti-names">随货发    /    供应商代发</span>
                        </div>
                        <div class="cla-ti">
                            <span class="ti-title">装饰罩：</span>
                            <span class="ti-names">有</span>
                        </div>
                        <div class="cla-ti">
                            <span class="ti-title">解码：</span>
                            <span class="ti-names">有解码器  /  解码线组  /  宝典到店</span>
                        </div>
                    </div>
                </div>
                <!-- 门店信息  -->
                <div class="Carowner" v-if="schedule===4">
                    <div class="Carowner-pr">
                        <div class="pr-heng"></div>
                        <div class="pr-name">门店信息</div>
                    </div>
                    <div class="Carowner-cla-md">
                        <div class="cla-ti">
                            <span class="ti-title">门店：</span>
                            <span class="ti-names">阿帕车灯（凯斯店） 姜卫卫</span>
                        </div>
                        <div class="cla-ti">
                            <span class="ti-title">地址：</span>
                            <span class="ti-names">广西省 贵港市 港北区 盛世名门北门F25商铺</span>
                        </div>
                        <div class="cla-ti">
                            <span class="ti-title">门店电话：</span>
                            <span class="ti-names">15878030909</span>
                        </div>
                        <div class="cla-ti">
                            <span class="ti-title">业务员：</span>
                            <span class="ti-names"><span>黄某某</span><span class="names-num">13755555555</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 我的评价  -->
        <div class="my-eval">
            <div class="evalBox">
                <div class="Carowner-pr">
                    <div class="pr-heng"></div>
                    <div class="pr-name">我的评价</div>
                </div>
                <div class="ev-grade">
                    <div class="grade-user">10-23</div>
                    <div class="grade-user">守护者S</div>
                    <van-rate class="score-fen" readonly v-model="value" :size="24" :gutter="15" allow-half color="#FF5861" :count="5" />
                    <div class="minute-nums">{{value}}分</div>
                </div>
                <div class="ev-decs">好，很好，非常好，好得很呢！好，很好，非常好，好得很呢！好，很好，非常好，好得很呢！好，很好，非常好，好得很呢！好，很好，非常好，好得很呢！好，很好，非常好，好得很呢！好，很好，非常好，好得很呢！</div>
                <div class="ev-imgs">
                    <div class="imgs"><img src="../../assets/tuwen.png" /></div>
                    <div class="imgs"><img src="../../assets/tuwen.png" /></div>
                    <div class="imgs"><img src="../../assets/tuwen.png" /></div>
                </div>
            </div>
        </div>

        <!-- 评价按钮  -->
        <div class="evalBtn" @click="topublish">评价</div>



    </div>
</template>
<script>
export default {
    name:'Datadetails',
    data () {
        return {
            schedule:4,
            progress:2,
            value:4,
            note:{
                backgroundImage: "url(" + require("../../assets/order-pink.png") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize:'100% 100%'
            },
            message:{
                backgroundImage: "url(" + require("../../assets/order-bg.png") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize:'100% 100%'
            }
        }
    },
    methods:{
        //发表评论
        topublish() {
            this.$router.push({path:'/data/datapublish'})
        }
    }
}
</script>
<style lang="scss" scoped>
.Orderdetails{
    width: 10rem;
    min-height: 667px;
    overflow: hidden;
    background-color: #f5f5f5;
    .pink{
        width: 10rem;
        height: 4.99rem;
        overflow: hidden;
        .pink-title{
           font-size:0.48rem;
           font-weight:500;
           color: #FFFFFF;
           text-align: center;
           margin-top: 1.17rem;
           .title-nums{
               margin-right: .2rem;
           }
        }
    }
    .message{
        width: 9.15rem;
        min-height: 6.8rem;
        margin: -2.3rem auto .37rem;
        overflow: hidden;
        .me-main{
            margin: 0.3rem;
            .mainTime{
                text-align: right;
                color: #2B2B2B;
                font-size:0.32rem;
                font-weight:400;
            }
            .Carowner{
                margin-top: .3rem;
                .Carowner-pr{
                    display: flex;
                    align-items: center;
                    .pr-heng{
                        width:0.08rem;
                        height:0.35rem;
                        background:rgba(243,192,102,1);
                        border-radius:0.04rem;
                        margin-right: .2rem;
                    }
                    .pr-name{
                        color: #333333;
                        font-size: 0.4rem;
                        font-weight:400;
                    }
                }
                .Carowner-cla{
                    margin-left: .3rem;
                    height: 100%;
                    margin-top: .3rem;
                    margin-bottom: .6rem;
                    .cla-ti{
                        font-size:0.32rem;
                        font-weight: 400;
                        margin-bottom: .15rem;
                        display: flex;
                        .ti-rela{
                            width: 3rem;
                        }
                        .ti-title{
                            color: #666666;
                        }
                        .ti-names{
                            color: #333333;
                        }
                    }
                }
                .Carowner-cla-md{
                    margin-left: .3rem;
                    height: 100%;
                    margin-top: .3rem;
                    margin-bottom: .4rem;
                    .cla-ti{
                        font-size:0.32rem;
                        font-weight: 400;
                        margin-bottom: .15rem;
                        .ti-title{
                            color: #666666;
                        }
                        .ti-names{
                            color: #333333;
                            .names-num{
                                margin-left: .2rem;
                            }
                        }
                    }
                }
            }
        }
    }
    .my-eval{
        margin: 0.4rem auto 0;
        width:9.15rem;
        background:rgba(255,255,255,1);
        border:1px solid rgba(255,255,255,1);
        border-radius:0.27rem;
        overflow: hidden;
        .evalBox{
            margin: 0.4rem auto;
            width: 8.45rem;
            .Carowner-pr{
                display: flex;
                align-items: center;
                .pr-heng{
                    width:0.08rem;
                    height:0.35rem;
                    background:rgba(243,192,102,1);
                    border-radius:0.04rem;
                    margin-right: .2rem;
                }
                .pr-name{
                    color: #333333;
                    font-size: 0.4rem;
                    font-weight:400;
                }
            }
            .ev-grade{
                display: flex;
                height: .6rem;
                line-height: .6rem;
                align-items: center;
                .grade-user{
                    color: #999999;
                    font-size: 0.27rem;
                    margin-right: .27rem;
                }
                .score-fen{
                    margin-top: -.1rem;
                    margin-left: .2rem;
                }
                .minute-nums{
                    margin-left: .29rem;
                }
            }
            .ev-decs{
                color: #000000;
                font-size: 0.32rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
            }
            .ev-imgs{
                display: flex;
                margin-top: .3rem;
                .imgs{
                    width:2.4rem;
                    height:2.4rem;
                    margin-right: .64rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .imgs:nth-child(3){
                    margin-right: 0;
                }
            }
        }
    }
    .evalBtn{
        margin: .6rem auto.3rem;
        width:7.81rem;
        height:0.96rem;
        line-height: 0.96rem;
        text-align: center;
        color: #ffffff;
        font-size: 0.4rem;
        background:rgba(233,55,91,1);
        border-radius:0.48rem;
    }
}
</style>