<template>
    <!-- 订单详情  -->

    <div class="Orderdetails" v-if="!showinfo">
        <div @click="toggleRetun" class="top_title">
            <Toptitle :title="title"/>
        </div>
      <div >
          <div class="pink" :style="note">
              <div class="pink-title">
                  <span class="title-nums">{{datainfo.id}}：</span>
                  <span v-if="datainfo.status==='驳回'">待处理</span>

                  <span v-else>{{datainfo.status}}</span>
                  <!--<span>{{datainfo.status}}</span>-->

              </div>
              <div class="pink-bohui" v-if="datainfo.is_rejected===1">
                  <span>*驳回原因：</span>
                  <span v-if="datainfo.note">{{datainfo.note.ucontent}} ({{datainfo.rejected}} 驳回)</span>
              </div>
          </div>
          <div class="message" :style="message">
              <div class="me-main">
                  <div class="mainTime">{{datainfo.create_time}}</div>
                  <!-- 车主信息  -->
                  <div class="Carowner">
                      <div class="Carowner-pr">
                          <div class="pr-heng"></div>
                          <div class="pr-name">车主信息</div>
                      </div>
                      <div class="Carowner-cla">
                          <div class="cla-ti">
                              <span class="ti-title">产品：</span>
                              <span class="ti-names" v-if="datainfo.product_title">{{datainfo.product_title}}</span>
                              <span class="ti-names" v-else>该产品已下架</span>
                          </div>
                          <div class="cla-ti">
                              <span class="ti-title">车型：</span>
                              <span class="ti-names">{{datainfo.model_title}}</span>
                          </div>
                          <div class="cla-ti">
                              <span class="ti-title">联系人：</span>
                              <span class="ti-names">{{datainfo.contact}}</span>
                          </div>
                          <div class="cla-ti">
                              <span class="ti-title">车牌：</span>
                              <span class="ti-names">{{datainfo.number_plate}}</span>
                          </div>
                          <div class="cla-ti">
                              <span class="ti-title">备注：</span>
                              <span class="ti-names">{{datainfo.desc}}</span>
                          </div>
                      </div>
                  </div>
                  <!-- 附带配件  -->
                  <div class="Carowner" v-if="datainfo.low_beam!=='无'||datainfo.in_the!=='无'||datainfo.holder!=='无'||datainfo.ygj!=='无'||datainfo.decorate!=='无'||datainfo.is_code!=='无'">
                      <div class="Carowner-pr">
                          <div class="pr-heng"></div>
                          <div class="pr-name">附带配件</div>
                      </div>
                      <div class="Carowner-cla">
                          <div class="cla-ti" v-if="datainfo.holder!=='无'">
                              <span class="ti-title">支架：</span>
                              <span class="ti-names">
                {{datainfo.holder}}
              </span>
                          </div>


                          <div class="cla-ti" v-if="datainfo.ygj!=='无'">
                              <span class="ti-title">易改件：</span>
                              <span class="ti-names">
                  {{datainfo.ygj}}
              </span>
                          </div>
                          <div class="cla-ti" v-if="datainfo.decorate!=='无'">
                              <span class="ti-title">装饰罩：</span>
                              <span class="ti-names">
                {{datainfo.decorate}}
              </span>
                          </div>
                          <div class="cla-ti" v-if="datainfo.is_code!=='无'">
                              <span class="ti-title">解码：</span>
                              <span class="ti-names">{{datainfo.is_code}}</span>
                          </div>

                          <div class="cla-ti" v-if="datainfo.in_the!=='无'">
                              <span class="ti-title">远光转接线：</span>
                              <span class="ti-names">{{datainfo.in_the}}</span>
                          </div>

                          <div class="cla-ti" v-if="datainfo.low_beam!=='无'">
                              <span class="ti-title">近光转接线：</span>
                              <span class="ti-names">{{datainfo.low_beam}}</span>
                          </div>
                      </div>
                  </div>

                  <!-- 门店信息  -->
                  <div class="Carowner">
                      <div class="Carowner-pr">
                          <div class="pr-heng"></div>
                          <div class="pr-name">门店信息</div>
                      </div>
                      <div class="Carowner-cla-md">
                          <div class="cla-ti">
                              <span class="ti-title">门店：</span>
                              <span class="ti-names">{{datainfo.shop_title}}</span>
                          </div>
                          <div class="cla-ti">
                              <span class="ti-title">地址：</span>
                              <span class="ti-names">{{datainfo.shop_location}}</span>
                          </div>
                          <div class="cla-ti">
                              <span class="ti-title">电话：</span>
                              <span class="ti-names">{{datainfo.shop_tel}}</span>
                          </div>
                          <div class="cla-ti">
                              <span class="ti-title">业务员：</span>
                              <span class="ti-names" v-if="datainfo.salesman">{{datainfo.salesman.realName}}{{datainfo.salesman.phone}}</span>
                              <span class="ti-names" v-else>改业务员已删除</span>
                          </div>
                      </div>
                  </div>
              </div>
              <!--  安装费  -->
              <div class="me-cost">
                  <div class="cost-price">
                      <span>¥</span>
                      <span class="price-money">{{datainfo.ins_cost}}</span>
                  </div>
                  <div class="Carowner-pr">
                      <div class="pr-heng"></div>
                      <div class="pr-name">安装费</div>
                  </div>
                  <div class="Carowner-cla-md">
                      <div class="cla-ti">
                          <span class="ti-title">客服：</span>
                          <span class="ti-names" v-if="datainfo.pre">{{datainfo.pre.realName}}</span>
                      </div>
                      <div class="cla-ti">
                          <span class="ti-title">备注：</span>
                          <span class="ti-names">{{datainfo.service_desc}}</span>
                      </div>
                  </div>
              </div>
          </div>

          <!-- 驳回按钮  -->
          <div class="turn" v-if="datainfo.status=='待确认(业务)'&&saleshow">
              <div class="turn-left" @click="pullBtn">驳回</div>
              <div class="turn-right" @click="showHints">同意派单</div>
          </div>

          <!-- 弹出驳回下拉选择框  -->
          <div class="pull" v-if="popup">
              <div class="pullBox">
                  <div class="Hebao" v-if="trun_show">
                      <div class="Hebao-title">驳回理由</div>
                      <Select v-model="model1" @on-change="acquire" style="width:8.48rem">
                          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                      <div class="Hebao-btn">
                          <span class="cancel" @click="cancel">取消</span>
                          <span class="oks" @click="oksBtn">确定</span>
                      </div>
                  </div>

                  <div class="trun" v-else>
                      <div class="trun_icon" @click.stop="returnClick"><img src="@/assets/trun_left.png"/></div>
                      <div class="Hebao-title">驳回其他原因</div>
                      <div class="trun_text">
                          <textarea v-model="causeValue"/>
                      </div>
                      <div class="Hebao-btn">
                          <span class="cancel" @click="cancelTrun">取消</span>
                          <span class="oks" @click="oksBtnTrun">确定</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    </div>

    <div v-else class="dele">

        <div @click="toggleRetun" class="top_title">
            <Toptitleu :title="title"/>
        </div>
        <img src="@/assets/404.png"/>
        <div class="te">{{datainfo.id}} 暂无此订单数据!</div>
    </div>
</template>
<script>
    import Toptitle from "@/components/Toptitle/Toptitlebai";
    import Toptitleu from "@/components/Toptitle/toptitleu";

    import {GetIdBydetails, GetIdByStatus, PostNoteByAdd} from '@/api/order'
    import {mapGetters} from 'vuex'
    import {getInfo, login} from '@/api/user'
    import {getUser, removeUser, setUser} from '@/utils/auth'


    export default {
        name: "Orderdetails",
        data() {
            return {
                salesman_id:0,
                user_id:undefined,
                title: "订单详情",
                saleshow:true,
                trun_show: true,
                schedule: 1,
                progress: 2,
                popup: false,
                showinfo:false,
                note: {
                    backgroundImage: "url(" + require("../assets/order-pink.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%"
                },
                message: {
                    backgroundImage: "url(" + require("../assets/order-bg.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%"
                },
                cityList: [
                    {
                        value: "门店不接受安装费",
                        label: "门店不接受安装费"
                    },
                    {
                        value: "门店没有营业",
                        label: "门店没有营业"
                    },
                    {
                        value: "门店不想接单",
                        label: "门店不想接单"
                    },
                    {
                        value: "安装技术不行",
                        label: "安装技术不行"
                    },
                    {
                        value: "我不想派单给他",
                        label: "我不想派单给他"
                    },
                    {
                        value: "其他原因",
                        label: "其他原因"
                    }
                ],
                datainfo: {},
                id: undefined,
                model1: "",
                causeValue: '近期没时间安装' //驳回理由
            };
        },
        computed: {
            ...mapGetters([
                'userInfo'

            ])
        },
        filters: {
            holder(str){
                const statusMap = {
                    1: '无',
                    2: '有'}
                return statusMap[str]
            },
            iscode(str) {
                const statusMap = {
                    1: '无',
                    2: '解码器',
                    3: '解码线组',
                    3: '解码线组',
                    4: '宝典到店'
                }
                return statusMap[str]
            },
            decorate
                (str) {
                const statusMap = {
                    1: '无',
                    2: '随机发',
                    3: '供应商代发'
                }
                return statusMap[str]
            }
            ,
        },
        created() {
            this.id = this.$route.query.index
            let user_id=this.$route.query.user_id

            if(user_id!==undefined){
                this.user_id= parseInt(user_id)

                getInfo(user_id).then(res=>{
                    this.$store.dispatch('user/login', res.data)
                    setUser(res.data)
                    if(this.userInfo.sale){
                        this.salesman_id=parseInt(this.userInfo.sale.id)
                    }
                })
            }
            console.log(this.userInfo)
            if(this.userInfo.sale!==undefined){
                this.salesman_id=parseInt(this.userInfo.sale.id)
            }


            this.getInfo();
        },
        methods: {

            getInfo() {
                GetIdBydetails(this.id).then(res => {
                    this.datainfo = res.data

                    if(this.datainfo.status==='删除'||this.datainfo.salesman_id!==this.salesman_id){
                        this.showinfo=true;
                    } else{
                        this.showinfo=false;
                    }

                    if(this.datainfo.in_salesman_id===this.salesman_id){
                        this.showinfo=false;
                        this.saleshow=false
                        console.log('次业务员')
                    }

                    console.log(this.showinfo)
                })
            },
            acquire(e) {
                if (e === "其他原因") {
                    // console.log("显示")
                    this.trun_show = !this.trun_show
                }
            },
            toggleRetun() {
                if(this.datainfo.status=='删除'||this.user_id!==undefined){
                    this.$router.push('/')
                }else{
                    this.$router.go(-1); //返回上一层

                }
            },
            showHints() {
                GetIdByStatus(this.id).then(res => {
                    this.$router.push({path: '/order', query: {num: 2}})

                })
            },
            //弹出驳回窗口
            pullBtn() {
                this.popup = true;

            },
            //取消
            cancel() {
                this.popup = false;
                this.model1 = "";

            },
            //确定
            oksBtn() {
                console.log(this.model1);
                if (this.model1 !== '') {
                    this.popup = false;

                    var temp = {
                        content: this.model1,

                        user_id: this.userInfo.id,
                        order_id: this.id
                    }
                    PostNoteByAdd(temp).then(res => {
                        this.$router.push({path: '/order', query: {num: 1}})

                    })
                }
                else {
                    this.$toast('还没选择！');
                }
            },
            returnClick() {
                this.trun_show = !this.trun_show
                this.model1 = ''
            },
            //驳回理由填写取消
            cancelTrun() {
                this.popup = false;
                this.trun_show = !this.trun_show
                this.model1 = "";
            },
            //驳回理由填写确定
            oksBtnTrun() {
                if (this.causeValue !== '') {
                    this.popup = false;
                    this.model1 = "";
                    this.trun_show = !this.trun_show
                    var temp = {
                        content: this.causeValue + ' ' + '待确认（业务）驳回',
                        user_id: this.userInfo.id,
                        order_id: this.id
                    }
                    PostNoteByAdd(temp).then(res => {
                        console.log(res)
                    })
                    this.$router.push({path: '/order', query: {num: 1}})
                }
                else {
                    this.$toast('请填写驳回理由！');
                }
            },
        },
        components: {
            Toptitle,
            Toptitleu
        }
    };
</script>
<style lang="scss" scoped>
    .dele{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            margin-top: 30%;
        }
        .te{
            font-size: 18px;
            margin-top: 10px;
            color: #999999;
        }
        .top_title {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
        }
    }
    .Orderdetails {
        width: 10rem;
        min-height: 667px;
        overflow: hidden;
        background-color: #f5f5f5;
        padding-bottom: 2rem;
        .top_title {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
        }
        .pink {
            width: 10rem;
            height: 4.99rem;
            overflow: hidden;
            .pink-title {
                font-size: 0.48rem;
                font-weight: 500;
                color: #ffffff;
                text-align: center;
                margin-top: 1.17rem;
                .title-nums {
                    margin-right: 0.2rem;
                }
            }
            .pink-bohui {
                text-align: center;
                color: #ffffff;
                margin: 0.15rem 0;
            }
        }
        .message {
            width: 9.15rem;
            min-height: 15.02rem;
            margin: -2.3rem auto 0.37rem;
            overflow: hidden;
            .me-main {
                margin: 0.3rem;
                .mainTime {
                    text-align: right;
                    color: #2b2b2b;
                    font-size: 0.32rem;
                    font-weight: 400;
                }
                .Carowner {
                    margin-top: 0.3rem;
                    .Carowner-pr {
                        display: flex;
                        align-items: center;
                        .pr-heng {
                            width: 0.08rem;
                            height: 0.35rem;
                            background: rgba(243, 192, 102, 1);
                            border-radius: 0.04rem;
                            margin-right: 0.2rem;
                        }
                        .pr-name {
                            color: #333333;
                            font-size: 0.4rem;
                            font-weight: 400;
                        }
                    }
                    .Carowner-cla {
                        margin-left: 0.3rem;
                        height: 100%;
                        margin-top: 0.3rem;
                        margin-bottom: 0.6rem;
                        .cla-ti {
                            font-size: 0.32rem;
                            font-weight: 400;
                            margin-bottom: 0.15rem;
                            .ti-title {
                                color: #666666;
                            }
                            .ti-names {
                                color: #333333;
                            }
                        }
                    }
                    .Carowner-cla-md {
                        margin-left: 0.3rem;
                        height: 100%;
                        margin-top: 0.3rem;
                        margin-bottom: 0.4rem;
                        .cla-ti {
                            font-size: 0.32rem;
                            font-weight: 400;
                            margin-bottom: 0.15rem;
                            .ti-title {
                                color: #666666;
                            }
                            .ti-names {
                                color: #333333;
                            }
                        }
                    }
                }
            }
            .me-cost {
                border-top: 1px solid #e5e5e5;
                overflow: hidden;
                position: relative;
                .cost-price {
                    position: absolute;
                    right: 1rem;
                    top: 1rem;
                    color: #cd4b4c;
                    font-size: 0.32rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    .price-money {
                        display: inline-block;
                        font-size: 0.64rem;
                        margin-left: 0.1rem;
                    }
                }
                .Carowner-pr {
                    display: flex;
                    align-items: center;
                    margin-left: 0.35rem;
                    margin-top: 0.3rem;

                    .pr-heng {
                        width: 0.08rem;
                        height: 0.35rem;
                        background: rgba(243, 192, 102, 1);
                        border-radius: 0.04rem;
                        margin-right: 0.2rem;
                    }

                    .pr-name {
                        color: #333333;
                        font-size: 0.4rem;
                        font-weight: 400;
                    }
                }
                .Carowner-cla-md {
                    margin-left: 0.6rem;
                    height: 100%;
                    margin-top: 0.3rem;
                    margin-bottom: 0.4rem;

                    .cla-ti {
                        font-size: 0.32rem;
                        font-weight: 400;
                        margin-bottom: 0.15rem;

                        .ti-title {
                            color: #666666;
                        }

                        .ti-names {
                            color: #333333;
                        }
                    }
                }
            }
        }

        .turn {
            /* width: 8.7rem; */

            display: flex;
            justify-content: space-between;
            text-align: center;
            color: #fff;
            font-size: 0.48rem;
            font-weight: 500;

            line-height: 1.09rem;
            border-radius: 0rem;
            font-family: Source Han Sans CN;
            display: flex;
            /* padding-left: 0.5rem; */
            position: fixed;
            z-index: 3;
            bottom: 0;
            background: #fff;
            width: 100%;
            margin-bottom: 0;
            padding-top: 10px;
            padding-bottom: 10px;
            border-top:1px solid #EBEEF5;

            .turn-left {
                width: 3.89rem;
                height: 1.09rem;
                line-height: 1.09rem;
                text-align: center;
                border: 1px solid rgba(219, 66, 68, 1);
                border-radius: 0.55rem;
                color: #E9375B;
                font-size: 0.4rem;
                margin-left: 5%;
                background: #f5f5f5;
            }

            .turn-right {
                border: 1px solid rgba(219, 66, 68, 1);
                width: 3.89rem;
                height: 1.09rem;
                line-height: 1.09rem;
                background: rgba(233, 55, 91, 1);
                border-radius: 0.55rem;
                color: #FFFFFF;
                font-size: 0.4rem;
                margin-right :5%;
                text-align: center;
            }
        }

        .pull {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 10000;

            .pullBox {
                position: absolute;
                top: 3.5rem;
                left: 0;
                right: 0;
                margin: 0 auto;
                width: 9.15rem;
                height: 8.5rem;
                background-color: #FFFFFF;
                border-radius: .27rem;

                .Hebao {
                    margin: 0.2rem 0.3rem;
                    .Hebao-title {
                        font-size: 0.48rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: rgba(51, 51, 51, 1);
                        margin-bottom: 0.3rem;
                        text-align: center;
                    }

                    .Hebao-btn {
                        margin-top: 5rem;
                        text-align: right;
                        display: flex;
                        justify-content: space-between;

                        span {
                            display: inline-block;
                        }
                        .cancel {
                            width: 3.89rem;
                            height: 1.09rem;
                            line-height: 1.09rem;
                            text-align: center;
                            border-radius: 1rem;
                            border: 1px solid rgba(234, 55, 86, 1);
                            color: #EA3756;
                            font-size: 0.4rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                        }
                        .oks {
                            width: 3.89rem;
                            height: 1.09rem;
                            line-height: 1.09rem;
                            text-align: center;
                            color: #ffffff;
                            background: rgba(234, 55, 86, 1);
                            border-radius: 1rem;
                            font-size: 0.4rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                        }
                    }
                }
                .trun {
                    margin: 0.2rem 0.3rem;
                    position: relative;
                    .trun_icon {
                        position: absolute;
                        left: 0;
                        top: .1rem;
                        width: .65rem;
                        height: .65rem;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .Hebao-title {
                        font-size: 0.48rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: rgba(51, 51, 51, 1);
                        margin-bottom: 0.3rem;
                        text-align: center;
                    }
                    .trun_text {
                        width: 8.48rem;
                        height: 5.15rem;
                        border: 1px solid #a0a0a063;
                        border-radius: 0.13rem;
                        textarea {
                            width: 7.8rem;
                            height: 4.5rem;
                            border: 0;
                            margin: .3rem;
                            color: #333333;
                            font-size: 0.4rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                        }
                    }

                    .Hebao-btn {
                        margin-top: .5rem;
                        text-align: right;
                        display: flex;
                        justify-content: space-between;

                        span {
                            display: inline-block;
                        }
                        .cancel {
                            width: 3.89rem;
                            height: 1.09rem;
                            line-height: 1.09rem;
                            text-align: center;
                            border-radius: 1rem;
                            border: 1px solid rgba(234, 55, 86, 1);
                            color: #EA3756;
                            font-size: 0.4rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                        }
                        .oks {
                            width: 3.89rem;
                            height: 1.09rem;
                            line-height: 1.09rem;
                            text-align: center;
                            color: #ffffff;
                            background: rgba(234, 55, 86, 1);
                            border-radius: 1rem;
                            font-size: 0.4rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                        }
                    }
                }
            }
        }
    }
</style>
