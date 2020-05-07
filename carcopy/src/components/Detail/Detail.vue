<template>
    <!-- 订单详情  -->
    <div class="Orderdetails" v-if="!showinfo">
        <div @click="toggleRetun" style="background:#ffffff">
            <Toptitle :title="title"/>
        </div>
        <div class="pink" :style="note">
            <div class="pink-title">
                <span class="title-nums">{{ datainfo.id }}：</span>

                <span v-if="schedule === '驳回'">待处理</span>

                <span v-else>{{ schedule }}</span>

                <!--<span v-if="schedule===1">待确认</span>-->
                <!--<span v-if="schedule===2">待安装</span>-->
                <!--<span v-if="schedule===3">待审核</span>-->
                <!--<span v-if="schedule===4">驳回</span>-->
                <!--<span v-if="schedule===5">已结算</span>-->
                <!--<span v-if="schedule===6">已退货</span>-->
            </div>
            <div
                    class="pink-bohui"
                    v-if="
          datainfo.is_rejected === 1 &&
            datainfo.rejected !== '财审1' &&
            datainfo.rejected !== '财审2' &&
            datainfo.rejected !== '待结算'
        "
            >
                <span>*驳回原因：</span>
                <span v-if="datainfo.note">{{ datainfo.note.ucontent }} {{ datainfo.rejected }} 驳回</span>
            </div>
            <!--<div class="pink-bohui" v-if="schedule==='退货'">-->
            <!--<span>*原因：</span>-->
            <!--<span>货不对板</span>-->
            <!--</div>-->
        </div>
        <div class="message" :style="message">
            <div class="me-main">
                <div class="mainTime">{{ datainfo.create_time }}</div>
                <!-- 车主信息  -->
                <div class="Carowner">
                    <div class="Carowner-pr">
                        <div class="pr-heng"></div>
                        <div class="pr-name">车主信息</div>
                    </div>
                    <div class="Carowner-cla">
                        <div class="cla-ti">
                            <span class="ti-title">产品：</span>

                            <span class="ti-names" v-if="datainfo.product_titile">
                {{
                datainfo.product_titile
                }}
              </span>
                            <span class="ti-names" v-else>该产品已下架</span>
                        </div>

                        <!--<div class="cla-ti">-->
                        <!--<span class="ti-title">平台：</span>-->

                        <!--<span class="ti-names" v-if="datainfo.lazada_title">{{datainfo.lazada_title}}</span>-->
                        <!--<span class="ti-names" v-else>该产品已下架</span>-->
                        <!--</div>-->

                        <div class="cla-ti">
                            <span class="ti-title">车型：</span>
                            <span class="ti-names">{{ datainfo.model_title }}</span>
                        </div>
                        <div class="cla-ti">
                            <span class="ti-title">联系人：</span>
                            <span class="ti-names">{{ datainfo.contact }}</span>
                        </div>
                        <div class="cla-ti">
                            <span class="ti-title">车牌：</span>
                            <span class="ti-names">{{ datainfo.number_plate }}</span>
                        </div>
                        <div class="cla-ti">
                            <span class="ti-title">备注：</span>
                            <span class="ti-names">{{ datainfo.desc }}</span>
                        </div>
                    </div>
                </div>
                <!-- 附带配件  -->

                <div
                        class="Carowner"
                        v-if="
            datainfo.low_beam !== '无' ||
              datainfo.in_the !== '无' ||
              datainfo.holder !== '无' ||
              datainfo.ygj !== '无' ||
              datainfo.decorate !== '无' ||
              datainfo.is_code !== '无'
          "
                >
                    <div class="Carowner-pr">
                        <div class="pr-heng"></div>
                        <div class="pr-name">附带配件</div>
                    </div>
                    <div class="Carowner-cla">
                        <div class="cla-ti" v-if="datainfo.holder !== '无'">
                            <span class="ti-title">支架：</span>
                            <span class="ti-names">{{ datainfo.holder }}</span>
                        </div>

                        <div class="cla-ti" v-if="datainfo.ygj !== '无'">
                            <span class="ti-title">易改件：</span>
                            <span class="ti-names">{{ datainfo.ygj }}</span>
                        </div>
                        <div class="cla-ti" v-if="datainfo.decorate !== '无'">
                            <span class="ti-title">装饰罩：</span>
                            <span class="ti-names">{{ datainfo.decorate }}</span>
                        </div>
                        <div class="cla-ti" v-if="datainfo.is_code !== '无'">
                            <span class="ti-title">解码：</span>
                            <span class="ti-names">{{ datainfo.is_code }}</span>
                        </div>

                        <div class="cla-ti" v-if="datainfo.in_the !== '无'">
                            <span class="ti-title">远光转接线：</span>
                            <span class="ti-names">{{ datainfo.in_the }}</span>
                        </div>

                        <div class="cla-ti" v-if="datainfo.low_beam !== '无'">
                            <span class="ti-title">近光转接线：</span>
                            <span class="ti-names">{{ datainfo.low_beam }}</span>
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
                            <span class="ti-names">{{ datainfo.shop_title }}</span>
                        </div>
                        <div class="cla-ti">
                            <span class="ti-title">地址：</span>
                            <span class="ti-names">{{ datainfo.shop_location }}</span>
                        </div>
                        <div class="cla-ti">
                            <span class="ti-title">电话：</span>
                            <span class="ti-names">{{ datainfo.shop_tel }}</span>
                        </div>
                        <div class="cla-ti" v-if="datainfo.is_sale !== 1">
                            <span class="ti-title">业务员：</span>
                            <span class="ti-names" v-if="datainfo.salesman">
                {{ datainfo.salesman.realName
                }}{{ datainfo.salesman.phone }}
              </span>
                            <span class="ti-names" v-else>该业务员已删除</span>
                        </div>
                    </div>
                </div>
            </div>
            <!--  安装费  -->
            <div class="me-cost">
                <div class="cost-price">
                    <span>¥</span>
                    <span class="price-money">{{ datainfo.ins_cost }}</span>
                </div>
                <div class="Carowner-pr">
                    <div class="pr-heng"></div>
                    <div class="pr-name">安装费</div>
                </div>
                <div class="Carowner-cla-md">
                    <div class="cla-ti">
                        <span class="ti-title">客服：</span>
                        <span class="ti-names" v-if="datainfo.pre">
              {{
              datainfo.pre.realName
              }}
            </span>
                    </div>
                    <div class="cla-ti">
                        <span class="ti-title">电话：</span>
                        <span class="ti-names" v-if="datainfo.pre">
              {{
              datainfo.pre.phone
              }}
            </span>
                    </div>
                    <div class="cla-ti">
                        <span class="ti-title">备注：</span>
                        <span class="ti-names">{{ datainfo.service_desc }}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 服务评价  -->
        <!--<div class="my-eval" v-if="datainfo.eva_info">-->
        <!--<div class="evalBox">-->
        <!--<div class="Carowner-pr">-->
        <!--<div class="pr-heng"></div>-->
        <!--<div class="pr-name">服务评价</div>-->
        <!--</div>-->
        <!--<div class="ev-grade">-->
        <!--<div class="grade-user">{{datainfo.eva_info.create_time|subtime}}</div>-->
        <!--<div class="grade-user">{{datainfo.product_titile}}</div>-->
        <!--<van-rate-->
        <!--class="score-fen"-->
        <!--readonly-->
        <!--v-model="datainfo.eva_info.score"-->
        <!--:size="6"-->
        <!--:gutter="15"-->
        <!--allow-half-->
        <!--color="#FF5861"-->
        <!--:count="5"-->
        <!--/>-->
        <!--<div class="minute-nums">{{datainfo.eva_info.score}}分</div>-->
        <!--</div>-->
        <!--<div-->
        <!--class="ev-decs"-->
        <!--&gt;-->
        <!--{{datainfo.eva_info.content}}-->
        <!--</div>-->
        <!--<div class="ev-imgs">-->
        <!--<div class="imgs" v-for="(pic,ipic) in datainfo.eva_info.img_list">-->
        <!--<img :src="pic"/>-->
        <!--</div>-->

        <!--</div>-->
        <!--</div>-->
        <!--</div>-->

        <div class="fixed">
            <!-- 驳回按钮  -->
            <!--待确认(门店)-->
            <div class="turn" v-if="schedule === '待确认(门店)'">
                <div class="turn-left" @click="pullBtn">驳回</div>
                <div class="turn-right" @click="showHints">接单</div>
            </div>

            <div class="turn" v-if="schedule === '待安装'">
                <div class="have-btn" v-if="schedule === '待安装'" @click="showInput">安装完成</div>
            </div>
            <!-- 待安装页面的  安装完成按钮  -->

            <!-- 驳回页面的  确认安装完成按钮  -->
            <div class="have-btn" v-if="schedule === 4" @click="showInput">确认安装完成</div>
        </div>
        <!--  请输入核销码 -->

        <van-popup v-model="showCode">
            <div class="code-input">
                <div class="code-wrap">
                    <template>
                        <h6 class="code-title">请输入核销码</h6>
                        <h6 class="code-desc">为订单{{ datainfo.id }}进行核销</h6>
                        <!-- <van-search placeholder="请输入核销码" input-align="center" v-model="value" /> -->
                        <input
                                :class="['code-hexiao', is_err_msg == true ? 'code-hxNo' : '']"
                                placeholder="请输入核销码"
                                v-model="value"
                        />
                        <p class="err-msg" v-if="is_err_msg">*核销码有误，请重新输入</p>
                        <div class="action-btn">
                            <span @click="toggleShowCode">取消</span>
                            <span @click="clickToSlip">确认</span>
                        </div>
                    </template>
                </div>
            </div>
        </van-popup>

        <!-- 弹出驳回下拉选择框  -->
        <div class="pull" v-if="popup">
            <div class="pullBox">
                <div class="Hebao">
                    <div class="Hebao-title">驳回理由</div>

                    <el-select v-model="model1" placeholder="请选择">
                        <el-option
                                v-for="item in cityList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                        ></el-option>
                    </el-select>
                    <el-input
                            class="el-desc"
                            v-if="model1=='其他原因'"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入其他原因"
                            v-model="textarea"
                    ></el-input>

                    <!--<Select v-model="model1" style="width:8.48rem">-->
                    <!--<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
                    <!--</Select>-->
                    <div class="Hebao-btn">
                        <span class="cancel" @click="cancel">取消</span>
                        <span class="oks" @click="oksBtn">确定</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 点击接单弹出提示  -->
        <div class="hint" v-if="showHint" @click="toggleInstall">
            <div class="hintBox" :style="hintimgs">
                <div class="hintBox-name">尊敬的店主，请在拆车之前，对改装产品进行通电测试功能的完整性（包括灯泡点亮、透镜档片切换等）。</div>
                <div class="hintBox-name2">请记得改装完成后，向车主索要核销码进行核销，否则将会影响安装费到账，感谢您的辛勤付出！</div>
            </div>
        </div>
    </div>

    <div v-else class="dele">
        <div @click="toggleRetun" style="background:#ffffff">
            <Toptitle :title="title"/>
        </div>
        <div @click="toggleRetun" class="top_title">
            <Toptitleu :title="title"/>
        </div>
        <img src="@/assets/404.png"/>
        <div class="te">{{ datainfo.id }} 暂无此订单数据!</div>
    </div>
</template>
<script>
    import Toptitle from "@/components/Toptitle/Toptitlebai";

    import Toptitleu from "@/components/Toptitle/toptitleu";

    import {GetIdBydetails, GetIdByStatus, PostNoteByAdd} from "@/api/order";
    import {GetShopIdByInfo} from "@/api/shop";

    import {mapGetters} from "vuex";
    import {getInfo, login} from "@/api/user";
    import {getUser, removeUser, setUser} from "@/utils/auth";

    import axios from "axios";
    import myconfig from "@/config";
    import {Popup} from "vant";

    // /*schedule *0全部 1待确认 2待安装 3待审核 4驳回 5已结算*/
    export default {
        name: "Orderdetails",
        data() {
            return {
                textarea: "",
                showinfo: false,
                user_id: undefined,
                id: 0,
                is_send: true,
                colorstr: "#fff",
                datainfo: {},
                title: "订单详情",
                schedule: "",
                valueminute: 4,
                popup: false,
                showHint: false, //弹出
                showCode: false,
                is_err_msg: false,
                value: "",
                hintimgs: {
                    backgroundImage: "url(" + require("../../assets/hint.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%"
                },
                note: {
                    backgroundImage: "url(" + require("../../assets/order-pink.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%"
                },
                message: {
                    backgroundImage: "url(" + require("../../assets/order-bg.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%"
                },
                cityList: [
                    {
                        value: "近期没时间安排",
                        label: "近期没时间安排"
                    },
                    {
                        value: "该车型无法安装",
                        label: "该车型无法安装"
                    },
                    {
                        value: "安装费不能接受",
                        label: "安装费不能接受"
                    },
                    {
                        value: "没有经营改灯",
                        label: "没有经营改灯"
                    },
                    {
                        value: "其他原因",
                        label: "其他原因"
                    }
                ],
                model1: ""
            };
        },
        filters: {
            subtime(str) {
                return str.substr(4, 7);
            },
            holder(str) {
                const statusMap = {
                    1: "有",
                    2: "无"
                };
                return statusMap[str];
            },
            decorate(str) {
                const statusMap = {
                    1: "有",
                    2: "随货发",
                    3: "供应商代发"
                };
                return statusMap[str];
            }
        },

        created() {
            this.id = this.$route.query.id;

            this.user_id = user_id;

            let user_id = this.$route.query.user_id;

            if (user_id !== undefined) {
                getInfo(user_id).then(res => {
                    this.$store.dispatch("user/login", res.data);
                    setUser(res.data);
                });
            }

            // this.schedule = this.$route.query.status;
            this.getDataInfo();
        },
        methods: {
            //文件上传
            afterRead(file) {
                let url = myconfig.uploadUrl.img;
                let fd = new FormData();
                fd.append("file", file.file);
                axios
                    .post(url, fd, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    })
                    .then(res => {
                        this.$emit("handelUploade", res);
                    })
                    .catch(err => {
                        alert(err);
                    });
            },
            getDataInfo() {
                GetIdBydetails(this.id).then(res => {
                    this.datainfo = res.data;

                    console.log(this.sele_shop.id);

                    console.log(this.showinfo);
                    var temp = {
                        shop_id: res.data.shop_id,
                        user_id: this.userInfo.id,
                        type:2,
                    };
                    console.log(temp);
                    GetShopIdByInfo(temp).then(res => {
                        if (res.data) {
                            this.$store.dispatch("shop/setShop", res.data);
                            if (this.datainfo.status === "删除") {
                                this.showinfo = true;
                                console.log(1, 3);
                            } else {
                                this.showinfo = false;
                            }
                        } else {
                            this.showinfo = true;
                        }
                    });

                    this.schedule = this.datainfo.status;
                });
            },
            toggleRetun() {
                if (this.user_id === undefined) {
                    this.$router.push("/install"); //返回上一层
                } else {
                    this.$router.push("/"); //返回上一层
                }
            },
            //弹出驳回窗口
            pullBtn() {
                this.popup = true;
                // this.ModalHelper.afterOpen();
            },
            //取消
            cancel() {
                this.popup = false;
                this.model1 = "";
                // this.ModalHelper.beforeClose();
            },
            //确定
            oksBtn() {
                if (this.model1 !== "") {
                    this.popup = false;
                    if (this.model1 == "其他原因") {
                        var temp = {
                            content: this.textarea + " " + "待确认（门店）驳回",
                            user_id: this.userInfo.id,
                            order_id: this.id
                        };
                    } else {
                        var temp = {
                            content: this.model1 + " " + "待确认（门店）驳回",
                            user_id: this.userInfo.id,
                            order_id: this.id
                        };
                    }

                    // var temp = {
                    //   content: this.model1 + " " + "待确认（门店）驳回",
                    //   user_id: this.userInfo.id,
                    //   order_id: this.id
                    // };
                    PostNoteByAdd(temp).then(res => {
                        this.$router.push({path: "/install", query: {curIndex: 4}});
                    });
                } else {
                    this.$toast("还没选择！");
                }
            },
            showHints() {
                this.showHint = !this.showHint;

                // this.$router.push({path:'/install',query:{curIndex:2}})
                // console.log(11223333)
            },
            toggleInstall() {
                var temp = {
                    id: this.id,
                    status: 3,
                    user_id:this.userInfo.id
                };
                if (!this.is_send) {
                    return true;
                }
                this.is_send = false
                GetIdByStatus(temp).then(res => {
                    this.schedule = res.status;
                    this.$router.push({path: "/install", query: {id: 2}});
                });
            },
            //安装完成按钮
            showInput() {
                this.showCode = !this.showCode;
            },
            toggleShowCode() {
                this.showCode = !this.showCode;
            },
            clickToSlip() {
                if (this.value === this.datainfo.verification_code) {
                    this.$router.push({
                        path: "/voucher",
                        query: {id: this.datainfo.id}
                    });
                } else {
                    this.is_err_msg = true;
                }
            }
        },
        computed: {
            ...mapGetters(["userInfo", "sele_shop"])
        },
        watch: {
            value(val) {
                if (this.value === "") {
                    this.is_err_msg = false;
                }
            }
        },

        components: {
            Toptitle,
            Toptitleu
        }
    };
</script>
<style lang="stylus" scoped>
    .dele {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            margin-top: 30%;
            width: 80%;
        }

        .te {
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

    .toptitle {
        z-index: 9;
    }

    .el-select {
        width: 100%;
    }

    .Orderdetails {
        width: 10rem;
        min-height: 667px;
        overflow: hidden;
        background-color: #f5f5f5;
        padding-bottom: 2rem;
        position: absolute;

        .fixed {
            line-height: 1.09rem;
            /* background: #e9375b; */
            border-radius: 1rem;
            font-family: Source Han Sans CN;
        }

        .pink {
            width: 10rem;
            height: 4.99rem;
            overflow: hidden;

            .pink-title {
                font-size: 0.48rem;
                font-weight: 500;
                color: #FFFFFF;
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
            min-height: 4rem;
            margin: -2.3rem auto 0.37rem;
            overflow: hidden;

            .me-main {
                margin: 0.3rem;

                .mainTime {
                    text-align: right;
                    color: #2B2B2B;
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
                                line-height: 1.5;
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
                border-top: 1px solid #E5E5E5;
                overflow: hidden;
                position: relative;

                .cost-price {
                    position: absolute;
                    right: 1rem;
                    top: 1rem;
                    color: #CD4B4C;
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

        .my-eval {
            margin: 0.4rem auto 0.5rem;
            width: 9.15rem;
            background: rgba(255, 255, 255, 1);
            border: 0px solid rgba(255, 255, 255, 1);
            border-radius: 0.27rem;
            overflow: hidden;

            .evalBox {
                margin: 0.4rem auto;
                width: 8.45rem;

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

                .ev-grade {
                    display: flex;
                    height: 0.6rem;
                    line-height: 0.6rem;
                    align-items: center;

                    .grade-user {
                        color: #999999;
                        font-size: 0.27rem;
                        margin-right: 0.27rem;
                    }

                    .score-fen {
                        margin-top: -0.1rem;
                        margin-left: 0.2rem;
                    }

                    .minute-nums {
                        margin-left: 0.29rem;
                    }
                }

                .ev-decs {
                    color: #000000;
                    font-size: 0.32rem;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                }

                .ev-imgs {
                    display: flex;
                    margin-top: 0.3rem;

                    .imgs {
                        width: 2.4rem;
                        height: 2.4rem;
                        margin-right: 0.64rem;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .imgs:nth-child(3) {
                        margin-right: 0;
                    }
                }
            }
        }

        .turn {
            /* width: 8.7rem; */
            height: 1.01rem;
            margin: 0.6rem auto;
            display: flex;
            justify-content: space-between;
            margin: 0 auto 0.5rem;
            text-align: center;
            color: #fff;
            font-size: 0.48rem;
            font-weight: 500;
            border-radius: 0.27rem;
            width: 9.01rem;
            height: 1.09rem;
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
            border-top: 1px solid #EBEEF5;

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
                margin-right: 5%;
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
            z-index: 10;

            .pullBox {
                position: absolute;
                top: 3.5rem;
                left: 0;
                right: 0;
                margin: 0 auto;
                width: 9.15rem;
                // height: 6.79rem;
                background-color: #FFFFFF;
                border-radius: 10px;

                .Hebao {
                    margin: 0.2rem 0.3rem;

                    .Hebao-title {
                        font-size: 0.5rem;
                        margin-bottom: 0.3rem;
                        text-align: center;
                    }

                    .Hebao-btn {
                        margin-top: 1.5rem;
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
                            border: 1px solid #ea3756;
                        }
                    }

                    .el-desc {
                        margin-top: 0.3rem;
                    }
                }
            }
        }

        .have-btn {
            margin: 0 auto 0.5rem;
            text-align: center;
            color: #fff;
            font-size: 0.48rem;
            font-weight: 500;
            background: rgba(233, 55, 91, 1);
            border-radius: 1rem;
            width: 9.01rem;
            height: 1.09rem;
            line-height: 1.09rem;
            background: rgba(233, 55, 91, 1);
            margin-left: 5%;
            margin-bottom: 9px;
            font-family: Source Han Sans CN;
            display: flex;
            padding-left: 0.2rem;
            justify-content: center;
            position: fixed;
            z-index: 999;
            bottom: 0;
        }

        .hint {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 99;

            .hintBox {
                width: 7.16rem;
                height: 9.78rem;
                margin: 2rem auto;
                overflow: hidden;

                .hintBox-name {
                    width: 6.21rem;
                    font-weight: 500;
                    font-size: 0.45rem;
                    margin: 2rem auto 0;
                    line-height: 0.7rem;
                    color: #fff;
                    text-indent: 2em;
                }

                .hintBox-name2 {
                    width: 6.21rem;
                    font-weight: 500;
                    font-size: 0.45rem;
                    margin: 0 auto;
                    color: #fff;
                    text-indent: 2em;
                    line-height: 0.7rem;
                }
            }
        }

        .code-input {
            /* position: fixed; */
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: #000000;
            width: 300px;
        }

        .code-wrap {
            background: #fff;
            border-radius: 10px;
            text-align: center;
            overflow: hidden;
        }

        .code-title {
            font-size: 16px;
            font-weight: 400;
            color: #333;
            margin: 14px 0;
        }

        .code-desc {
            font-size: 14px;
            color: #666;
            font-weight: 400;
            margin: 0;
        }

        .code-hexiao {
            margin: 0.5rem auto 0;
            width: 6.4rem;
            height: 0.83rem;
            line-height: 0.83rem;
            text-align: center;
            color: #333333;
            font-size: 0.32rem;
            border: 1px solid #E5E5E5;
            border-radius: 0.07rem;
        }

        .code-hxNo {
            margin: 0.5rem auto 0;
            width: 6.4rem;
            height: 0.83rem;
            line-height: 0.83rem;
            text-align: center;
            color: #333333;
            font-size: 0.32rem;
            border: 1px solid #FF0000;
            border-radius: 0.07rem;
        }

        .err-msg {
            margin-top: 0.2rem;
            margin-left: 0.8rem;
            text-align: left;
            font-size: 0.27rem;
            color: #FF0000;
        }

        .action-btn {
            margin-top: 30px;
            display: flex;
            border-top: 1px solid #e5e5e5;
        }

        .action-btn span {
            flex: 1;
            font-size: 16px;
            color: #999;
            padding: 15px 0;
        }

        .action-btn span:last-child {
            border-left: 1px solid #e5e5e5;
            color: #000;
        }

        .code-wrap >>> .van-field__left-icon {
            display: none;
        }

        .van-search {
            margin-top: 20px;
        }

        .status-msg {
            color: #EF705C;
            font-size: 16px;
            font-weight: 400;
        }
    }
</style>
