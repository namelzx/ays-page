<template>
    <div>
        <div class="top_warp">
            <div @click="toggleRetun">
                <Toptitle :title="title"/>
            </div>
            <div class="seach-bar">
                <input @click="toggleHistory" v-if="endTime==''" placeholder="请输入搜索内容" class="cinput"/>
                <div class="barBox">
                    <!-- <div class="input" @click="toggleHistory">
                      <img src="@/assets/sou.png" />
                    </div>-->
                    <div class="bar-icon" @click="calendar">
                        <img src="../../assets/calendar.png"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="install-container">
            <!-- <div class="seach-bar">
                    <div class="barBox">
                      <div class="input" @click="toggleHistory">输入关键词搜索</div>
                      <div class="bar-icon" @click="calendar"><img src="../../assets/calendar.png" /></div>
                    </div>
            </div>-->
            <!-- 如果订单时间为空，则显示 -->
            <div class="content-tabs" v-if="endTime==''">
                <div class="cate-bar">
                    <div
                            class="bar-item"
                            :class="{active: curIndex === index}"
                            @click="changeBar(index)"
                            v-for="(item,index) of actionBar"
                            :key="item.id"
                    >
                        <span>{{ item.name }}</span>
                        <span>{{item.total}}</span>
                    </div>
                </div>
                <div class="mad">
                    <Card :list="list" :curIndex="curIndex"/>
                </div>
            </div>

            <!-- 如果选择有了时间，则显示 -->
            <div v-else style="margin-top: 1rem">
                <div class="content-data">
                    <div class="data-count">
                        共
                        <span>{{total}}</span>单
                    </div>
                    <div class="data-day">
                        <span>日期筛选：</span>
                        <span class="day-time">{{startTime}}-{{endTime}}</span>
                    </div>
                    <div class="data-eliminate" @click="eliminClick">
                        <div class="eliminate-icon">
                            <img src="@/assets/eliminate.png"/>
                        </div>
                        <div>清除日期</div>
                    </div>
                </div>
                <Card :tabs="tabs" :list="tolist" :curIndex="curIndex"/>
            </div>
        </div>
        <!--  日期 -->

        <van-popup class="popup" v-model="show" position="bottom">
            <div class="times">
                <div class="times-title">选择日期</div>
                <div class="times-day">
                    <div class="day-start" @click="reelect">{{startTime}}</div>
                    <div class="day-suspend"></div>
                    <div class="day-end">{{endTime}}</div>
                </div>
            </div>
            <van-datetime-picker
                    v-if="pickerShow"
                    v-model="currentDate"
                    type="date"
                    :show-toolbar="false"
            />
            <van-datetime-picker v-else v-model="currentDate2" type="date" :show-toolbar="false"/>

            <div class="operation">
                <div class="open-on" @click="onCancel">取消</div>
                <div class="open-on on-ok" @click="confirm">确定</div>
            </div>
        </van-popup>
    </div>
</template>

<script>
    import Toptitle from "@/components/Toptitle/Toptitle";
    import Card from "./component/InstallCard";

    import {GetDataByList} from "@/api/order";
    import {mapGetters} from "vuex";

    /**
     * status: 1待确认，2待安装，3待审核，4驳回，5已结算 6.已退货
     */
    export default {
        name: "Install",
        data() {
            return {
                // title: "安装单列表",
                title: "",
                showRate: true,
                rate: 3.5,
                value: "",
                tolist: [],
                actionBar: [
                    {
                        id: "1",
                        name: "全部",
                        status: 0,
                        total: 0
                    },
                    {
                        id: "2",
                        name: "待确认",
                        status: 2,
                        total: 0
                    },
                    {
                        id: "3",
                        name: "待安装",
                        status: 3,
                        total: 0
                    },
                    {
                        id: "4",
                        name: "待审核",
                        status: 4,
                        total: 0
                    },
                    {
                        id: "5",
                        name: "驳回",
                        status: 2,
                        total: 0
                    },
                    {
                        id: "6",
                        name: "已结算",
                        status: 2,
                        total: 0
                    },
                    {
                        id: "7",
                        name: "已退货",
                        status: 2,
                        total: 0
                    }
                ],
                total: 0,
                listQuery: {
                    limit: 20,
                    page: 1,
                    shop_id: undefined
                },
                tabs: [],
                list: [],
                curIndex: 0,
                show: false,
                pickerShow: true,
                startTime: "", //开始时间
                endTime: "", //截止时间
                currentDate: new Date(),
                currentDate2: new Date()
            };
        },
        computed: {
            ...mapGetters(["userInfo", "sele_shop"])
        },
        components: {
            Card,
            Toptitle
        },
        created() {
            this.listQuery.user_id = this.userInfo.id;
            this.listQuery.shop_id = this.sele_shop.id;

            if (this.$route.query.id) {
                this.curIndex = this.$route.query.id;
            }
            this.listQuery.status = this.curIndex;
            this.getlist();
            console.log("更新");
        },
        methods: {
            getlist() {
                GetDataByList(this.listQuery).then(res => {
                    this.list = res.data.data;
                    console.log(this.list);
                    let coudata = res.data.coudata;
                    this.actionBar[0].total = coudata["sumtotal"];
                    this.actionBar[1].total = coudata["confirmtotal"];
                    this.actionBar[2].total = coudata["installtotal"];
                    this.actionBar[3].total = coudata["audittotal"];
                    this.actionBar[4].total = coudata["retotal"];
                    this.actionBar[5].total = coudata["settotal"];
                    this.actionBar[6].total = coudata["salestotal"];


                });
            },
            toggleRetun() {
                this.$router.push("/"); //返回上一层
            },
            changeBar(idx) {
                this.curIndex = idx;
                this.listQuery.status = idx;
                if (idx > 0) {
                    this.listQuery.status = idx;
                }
                this.listQuery.page = 1;
                this.getlist();
            },
            toggleHistory() {
                this.$router.push({path: "/install/history"});
            },
            timeFormat(time) {
                // 时间格式化 2019-09-08
                let year = time.getFullYear();
                let month = time.getMonth() + 1;
                let day = time.getDate();
                if (day < 10) {
                    day = "0" + day;
                }
                return year + "-" + month + "-" + day;
            },
            calendar() {
                this.show = true;
            },
            //确定
            confirm() {
                //   this.show = false;
                if (this.pickerShow) {
                    this.startTime = this.timeFormat(this.currentDate);
                    this.pickerShow = false;
                } else {
                    this.endTime = this.timeFormat(this.currentDate2);
                    // this.pickerShow = true
                    this.show = false;
                    this.pickerShow = true;
                }
                var temp = this.listQuery;
                temp.page = 1;
                temp.startTime = this.startTime;
                temp.endTime = this.endTime;
                GetDataByList(temp).then(res => {
                    this.total = res.data.total;
                    this.tolist = res.data.data;
                });
            },
            //取消
            onCancel() {
                this.show = false;
            },
            //选择第一个起始时间
            reelect() {
                this.pickerShow = true;
                this.endTime = "";
            },
            eliminClick() {
                this.startTime = "";
                this.endTime = "";
            }
        },
        watch: {
            $route: {
                handler: function (val, oldVal) {
                    console.log(val);
                },
                // 深度观察监听
                deep: true
            }
        }
    };
</script>

<style lang="stylus" scoped>
    .nb {
        background: #ffffff;
    }

    .mad {
        margin-top: 2rem;
    }

    .install-container {
        margin-top: 1.3rem;
    }

    .top_warp {
        position: relative;
        background: #ffff;
    }

    .seach-bar {
        position: absolute;
        right: 0.45rem;
        top: 0.1rem;
        position: fixed;
        display: flex;
        flex-direction: row;
        z-index: 9;

        .barBox {
            display: flex;

            .input {
                width: 0.65rem;
                height: 0.65rem;
                margin-right: 0.5rem;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .bar-icon {
                width: 0.64rem;
                height: 0.64rem;
                margin-top: 0.1rem;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .cate-bar {
        overflow-y: auto; /* 可滑动 */
        white-space: nowrap;
        display: -webkit-box;
        /* height 1.2rem; */
        line-height: 1.2rem;
        position: fixed;
        top: 1rem;
        background: #fff;
        width: 100%;
        z-index: 100;
    }

    .bar-item {
        // width 17%;
        padding: 0 0.1rem;
        text-align: center;
        color: #666;
        font-size: 0.4rem;
    }

    .bar-item span {
        width: 18%;
        text-align: center;
        color: #666;
        font-size: 14px;
        padding: 4px;
        border: 1px solid transparent;
        transition: color 1.2s, border 1.2s;
        -webkit-transition: color 0.7s, border 0.7s;
    }

    .bar-item span:nth-child(2) {
        color: #ea3756;
    }

    .bar-item.active {
        position: relative;
    }

    .bar-item.active::before {
        position: absolute;
        content: '';
        top: 1rem;
        left: 0;
        right: 0;
        width: 40%;
        margin: 0 auto;
        height: 2px;
        background: #434343;
        z-index: 10;
        transition: all 1s;
    }

    .bar-item.active span:nth-child(1) {
        color: #333333;
    }

    // .cate-bar .bar-item.active span {
    // padding: 4px;
    // border-bottom: 2px solid #434343;
    // color: #333;
    // border-radius: 2px;
    // font-size: 0.45rem;

    // }
    .popup {
        padding-bottom: 0.8rem;

        .times {
            width: 10rem;
            margin-top: 0.5rem;
            height: 2rem;

            .times-title {
                text-align: center;
                font-size: 0.4rem;
                color: #333333;
            }

            .times-day {
                margin: 0 auto;
                width: 7rem;
                display: flex;
                justify-content: space-between;
                color: #999999;

                .day-start {
                    text-align: center;
                    width: 2.13rem;
                    height: 0.6rem;
                    padding-bottom: 0.05rem;
                    color: #333333;
                    font-size: 0.37rem;
                    border-bottom: 1px solid rgba(220, 220, 220, 1);
                }

                .day-suspend {
                    width: 0.6rem;
                    height: 1px;
                    background: #333333;
                    margin-top: 0.4rem;
                }

                .day-end {
                    text-align: center;
                    width: 2.13rem;
                    height: 0.6rem;
                    padding-bottom: 0.1rem;
                    color: #333333;
                    font-size: 0.37rem;
                    border-bottom: 1px solid rgba(220, 220, 220, 1);
                }
            }
        }

        .operation {
            width: 8.5rem;
            margin: 0.2rem auto 0;
            padding-bottom: 0.2rem;
            height: 1rem;
            display: flex;
            justify-content: space-between;
            font-size: 0.4rem;
            align-items: center;

            .open-on {
                width: 3.89rem;
                height: 1.09rem;
                line-height: 1.09rem;
                text-align: center;
                border: 1px solid rgba(234, 55, 86, 1);
                border-radius: 1rem;
                color: #EA3756;
                margin-top: 30px;
            }

            .on-ok {
                background: #EA3756;
                color: #ffffff;
            }
        }
    }

    .content-data {
        width: 9.15rem;
        padding: 0.3rem 0;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        .data-count {
            font-size: 0.32rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #333333;

            span {
                color: #CD4B4C;
                margin: 0 0.1rem;
            }
        }

        .data-day {
            color: #666666;
            font-size: 0.27rem;
            font-family: Source Han Sans CN;
            font-weight: 400;

            .day-time {
                margin-left: 0.1rem;
            }
        }

        .data-eliminate {
            color: #666666;
            font-size: 0.32rem;
            display: flex;

            .eliminate-icon {
                width: 0.32rem;
                height: 0.32rem;
                margin-right: 0.25rem;
                margin-top: 0.04rem;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .cinput {
        width: 7rem;
        height: 0.8rem;
        line-height: 0.8rem;
        background-color: #F1F1F1;
        padding-left: 0.32rem;
        color: #999999;
        border: 0;
        // margin-left: 0.32rem;
        border-radius: 1rem;
        font-size: 0.4rem;
        margin-right: 15px;
        z-index: 999999;
    }
</style>
