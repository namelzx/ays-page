<template>
    <div class="Order">
        <div class="OrderHe">
            <!-- 搜索框  -->
            <!--{{Tinum}}-->

            <div class="Da-search">
                <div class="search-tabs">
                    <!--<div class="tabs-name" @click="toggleBar(index)" :class="{active:index==Tinum}"-->
                    <!--v-for="(item,index) in bars" :key="index">{{item}}-->
                    <!--</div>-->
                </div>
                <div class="searchBox" v-if="Tinum===0">
                    <div class="int" @click="toggleHistory">输入关键词搜索</div>
                    <div class="calendar" @click="calendar">
                        <img src="@/assets/calendar.png"/>
                    </div>
                </div>

                <div class="inpmark" v-else>
                    <div class="inpmark_warp" @click="togglemark">输入关键词搜索</div>
                    <div class="Tabslist">
                        <div class="TabslistBox">
                            <div
                                    class="tab-btn"
                                    v-for="(item,index) in marklist"
                                    :key="index"
                                    :class="{active:index==offnum}"
                                    @click="toggleTaboffnum(index)"
                            >{{item.tabname}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--  tab栏  安装单内容  -->
            <div class="Tabs" v-if="Tinum===0">
                <div class="Tabslist">
                    <div class="tab-class">
                        <div class="tab-class-imgs" @click="tabsShow">
                            <img src="@/assets/class.png"/>
                        </div>
                    </div>

                    <div class="nav_bar">
                        <div
                                v-for="(item,index) in tabs"
                                :key="index"
                                :class="[num === index?'bar_item_active':'bar_item']"
                                @click="toggleTab(index)"
                        >
                            <span>{{item.tabname}}</span>
                            <span>{{item.total}} </span>
                        </div>
                    </div>
                </div>
                <!--  tab内容  -->
                <div class="taborder">
                    <Orderlist :orderlist="orderlist" :num="num"/>
                </div>
            </div>

            <!-- 营销单内容 -->
            <div class="marketing" v-if="Tinum===1">
                <Offorderlist :orderlist="Offorderlist" :num="offnum"/>
            </div>
        </div>

        <!-- 知晓 我的  -->
        <div class="install" v-if="Tinum===0" @click="knowShow">
            <div class="install-Box" v-if="know_show">
                <img src="@/assets/install.png"/>
                <div class="name">知晓</div>
                <div class="heng"></div>
            </div>
            <div class="install-Box" v-else>
                <img src="../assets/install.png"/>
                <div class="name">我的</div>
                <div class="heng"></div>
            </div>
        </div>

        <!--  日期 -->
        <van-popup class="popup" v-model="show" position="bottom" :style="{ height: '60%' }">
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
                    :item-height="65"
                    type="date"
                    :show-toolbar="false"
            />
            <van-datetime-picker
                    v-else
                    v-model="currentDate2"
                    :item-height="65"
                    type="date"
                    :show-toolbar="false"
            />

            <div class="operation">
                <div class="open-cancel" @click="onCancel">取消</div>
                <!-- <div class="open-heng"></div> -->
                <div class="open-okbtn" @click="confirm">确定</div>
            </div>
        </van-popup>

        <!-- 弹出分类选择 -->
        <div class="tab_class" v-if="show_tabs" @click="tabsShow">
            <div class="class_warp">
                <div class="warp-icon">
                    <img src="@/assets/bubble.png"/>
                </div>
                <div class="warp_list">
                    <div
                            class="list_name"
                            @click.stop="acviteClick(index)"
                            v-for="(item,index) in tabs"
                            v-if="item.tabname!=='全部'"
                    >
                        <span>{{item.tabname}}</span>
                    </div>
                </div>
            </div>
        </div>

        <Tabbar/>
    </div>
</template>
<script>
    import Tabbar from "@/components/Tabbar";
    import Orderlist from "@/components/Orderlist";
    import Offorderlist from "@/components/Offoreder/Offorderlist";
    import {GetDataByList, PostNoteByAdd} from "@/api/order";
    import {mapGetters} from "vuex";
    /* 订单状态   1待处理  2.待门店  3.待审核  4.驳回  5.已结算  */
    import {Toast} from "vant";
    import {getUser, removeUser, setUser} from "@/utils/auth";

    export default {
        name: "Order",
        data() {
            return {
                persons: 0,
                user_id: undefined,
                listQuery: {
                    page: 1,
                    limit: 20,
                    user_id: undefined,
                    ordertype: 1
                },
                num: 0, //tab栏
                Tinum: 0, //安装单，营销单
                offnum: 0, //营销单栏目
                show_tabs: false,
                know_show: true,
                bars: ["安装单", "营销单"],
                curIndex: 0,
                tabs: [
                    {tabname: "全部", total: 0},
                    {tabname: "待确认(业务)", status: 1, total: 0},
                    {tabname: "待确认(门店)", status: 2, total: 0},
                    {tabname: "待安装", status: 3, total: 0},
                    {tabname: "已安装", status: 4, total: 0},
                    {tabname: "财审1", status: 5, total: 0},
                    {tabname: "财审2", status: 6, total: 0},
                    {tabname: "待结算", status: 7, total: 0},
                    {tabname: "已结算", status: 8, total: 0},
                    {tabname: "驳回", status: 9, total: 0},
                    {tabname: "退货", status: 10, total: 0}
                ],
                orderlist: [],
                total: 0,
                marklist: [
                    {tabname: "全部"},
                    {tabname: "待核销"},
                    {tabname: "已核销"},
                    {tabname: "已退货"}
                ],
                Offorderlist: [],
                show: false,
                pickerShow: true,
                startTime: "",
                endTime: "",
                rejected: 0,
                currentDate: new Date(),
                currentDate2: new Date()
            };
        },
        components: {
            Tabbar,
            Orderlist,
            Offorderlist
        },
        mounted() {
            this.timeFormat(this.currentDate);
        },
        computed: {
            ...mapGetters(["userInfo", 'ordertype'])
        },

        created() {
            if (this.ordertype === 1) {
                this.know_show = true
            } else {
                this.know_show = false

            }
            this.listQuery.ordertype=this.ordertype
            this.user_id = this.userInfo.id;
            this.listQuery.user_id = this.userInfo.id;
            if (this.$route.query.num !== undefined) {
                this.num = this.$route.query.num;
            }
            // console.log(this.$route.query.num);
            this.listQuery.status = this.$route.query.num;
            this.getinstlist();
        },
        methods: {
            scroll(person) {
                window.onscroll = () => {
                    // 距离底部200px时加载一次
                    let bottomOfWindow =
                        document.documentElement.offsetHeight -
                        document.documentElement.scrollTop -
                        window.innerHeight <=
                        300;
                    if (bottomOfWindow && this.isLoading == false) {
                        if (this.orderlist.length === this.total) {
                            return;
                        }

                        this.listQuery.page++;
                        //
                        this.getlist();
                    }
                };
            },

            handelTabs(e) {
                this.orderlist = [];
                this.listQuery.page = 1;
                this.listQuery.status = e;

                this.getinstlist();
            },
            getinstlist() {
                const strToObj = JSON.parse(getUser());
                this.listQuery.user_id = strToObj.id;

                GetDataByList(this.listQuery).then(res => {
                    for (let i = 0; i < res.data.data.length; i++) {
                        this.orderlist.push(res.data.data[i]);
                    }
                    this.rejected = res.data.rejected
                    this.total = res.data.total;
                    let coun = res.data.coudata;
                    for (let k = 0; k < this.tabs.length; k++) {
                        this.tabs[k].total = 0;
                    }
                    for (let k = 0; k < coun.length; k++) {
                        this.tabs[0].total = this.tabs[0].total + coun[k].total;
                        this.tabs[coun[k].status].total = coun[k].total;

                        this.tabs[9].total = res.data.rejected;
                    }
                });
            },
            knowShow() {
                //切换知晓跟我的数据
                this.know_show = !this.know_show;
                if (this.know_show) {
                    this.listQuery.ordertype = 1;
                } else {
                    this.listQuery.ordertype = 2;
                }
                this.$store.dispatch('user/settype', this.listQuery.ordertype)
                this.orderlist = [];

                this.getinstlist();
            },
            toggleHistory() {
                this.$router.push("/order/orderhistory");
            },
            //营销单搜索
            togglemark() {
                this.$router.push({path: "/offorder/offordersou"});
            },
            tabsShow() {
                this.show_tabs = !this.show_tabs;
            },
            acviteClick(index) {
                this.show_tabs = !this.show_tabs;
                this.num = index;
            },
            toggleBar(index) {
                console.log(index);
                if (index === 1) {
                    Toast("提示此板块暂未开放");
                    return false;
                }
                this.Tinum = index;
            },
            toggleTaboffnum(index) {
                this.offnum = index;

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
            toggleTab(index) {
                this.num = index;
                this.listQuery.status = index
                this.orderlist = [];
                this.getinstlist();
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

                    this.$router.push({
                        path: "/order/install",
                        query: {startTime: this.startTime, endTime: this.endTime}
                    });
                }
            },
            //取消
            onCancel() {
                this.show = false;
            },
            //选择第一个起始时间
            reelect() {
                this.pickerShow = true;
                this.endTime = "";
            }
        },
        mounted() {
            this.scroll(this.persons);
        }
    };
</script>
<style lang="scss" scoped>
    .OrderHe {
        .Da-search {
            background: #ffffff;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            padding-bottom: 0.2rem;
            z-index: 10;
            .search-tabs {
                font-size: 0.32rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                width: 3rem;
                display: flex;
                justify-content: space-between;
                margin: 0.1rem auto 0.6rem;
                .tabs-name {
                    color: #999999;
                    width: 1.3rem;
                    text-align: center;
                }
                .tabs-name.active {
                    color: #333333;
                    position: relative;
                }
                .tabs-name.active:before {
                    position: absolute;
                    content: "";
                    left: 0;
                    right: 0;
                    top: 0.6rem;
                    width: 100%;
                    height: 1px;
                    border-radius: 0.2rem;
                    background: #333;
                }
            }
            .searchBox {
                width: 9.15rem;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                height: 0.83rem;
                align-items: center;
                .int {
                    width: 8rem;
                    height: 0.83rem;
                    line-height: 0.83rem;
                    text-align: center;
                    background: rgba(241, 241, 241, 1);
                    border-radius: 0.41rem;
                    font-size: 0.4rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: rgba(153, 153, 153, 1);
                }
                .calendar {
                    width: 0.64rem;
                    height: 0.64rem;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .inpmark {
                position: fixed;
                left: 0;
                right: 0;
                top: 1.5rem;
                padding-bottom: 0.3rem;
                background: #ffffff;
                .inpmark_warp {
                    margin: 0 auto;
                    width: 9.15rem;
                    height: 0.83rem;
                    line-height: 0.83rem;
                    text-align: center;
                    background: rgba(241, 241, 241, 1);
                    border-radius: 0.41rem;
                    font-size: 0.4rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: rgba(153, 153, 153, 1);
                }
                .Tabslist {
                    width: 10rem;
                    vertical-align: bottom !important;
                    .TabslistBox {
                        margin: 0 auto;
                        width: 9.15rem;
                        display: flex;
                        justify-content: space-between;
                        height: 1.2rem;
                        line-height: 1.2rem;
                        position: relative;
                        .tab-btn {
                            font-size: 0.4rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #999999;
                        }
                        .tab-btn.active {
                            color: #333333;
                            font-size: 0.48rem;
                            font-family: Source Han Sans CN;
                            font-weight: 500;
                            position: relative;
                        }
                        .tab-btn.active:before {
                            position: absolute;
                            content: "";
                            left: 0;
                            right: 0;
                            top: 1rem;
                            width: 100%;
                            height: 2px;
                            border-radius: 0.2rem;
                            background: #333;
                        }
                    }
                }
            }
        }
        .Tabs {
            width: 9.15rem;
            .Tabslist {
                position: fixed;
                width: 10rem;
                background-color: #ffffff;
                top: 1.7rem;
                vertical-align: bottom !important;
                z-index: 10;

                .tab-class {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 1rem;
                    height: 1.3rem;
                    background: #ffffff;
                    z-index: 11;
                    .tab-class-imgs {
                        margin: 0.3rem auto 0;
                        width: 0.64rem;
                        height: 0.64rem;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .nav_bar {
                    display: flex;
                    overflow-y: auto; /*可滑动*/
                    white-space: nowrap;
                    display: -webkit-box;
                    margin-right: 1rem;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    .bar_item {
                        font-size: 0.4rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        margin-left: 0.3rem;
                    }
                    .bar_item span {
                        margin-left: 0.1rem;
                    }
                    .bar_item_active {
                        font-size: 0.48rem;
                        font-family: Source Han Sans CN;
                        font-weight: 500;
                        //   color: #ea3756;
                        margin-left: 0.3rem;
                        position: relative;
                    }
                    .bar_item_active span {
                        margin-left: 0.1rem;
                    }
                    .bar_item_active span:nth-child(1) {
                        color: #333;
                    }
                    .bar_item_active span:nth-child(2) {
                        color: #ea3756;
                    }
                    .bar_item_active::before {
                        position: absolute;
                        content: "";
                        top: 1rem;
                        left: 0;
                        right: 0;
                        width: 50%;
                        margin: 0 auto;
                        height: 2px;
                        background: #434343;
                        z-index: 10;
                        transition: all 1s;
                    }
                }
                /deep/ .van-tabs--line .van-tabs__wrap {
                    margin-right: 1rem;
                }
                /deep/ .van-tab {
                    font-size: 0.4rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    margin-left: 0.3rem;
                }
                /deep/ .van-tab--active {
                    font-size: 0.48rem;
                    font-family: Source Han Sans CN;
                    font-weight: 500;
                }
            }
            .taborder {
                margin-top: 3.6rem;
            }
        }
        .marketing {
            margin-top: 3.5rem;
            padding-bottom: 1.5rem;
        }
    }

    .install {
        position: fixed;
        // bottom: 1.6rem;
        top: 50%;
        right: 0.23rem;
        width: 0.96rem;
        z-index: 10;
        .install-Box {
            width: 0.96rem;
            height: 0.96rem;
            position: relative;
            margin-top: 0.4rem;
            img {
                width: 100%;
                height: 100%;
            }
            .name {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                height: 0.96rem;
                line-height: 0.96rem;
                text-align: center;
                color: #ffffff;
                font-size: 0.32rem;
            }
            .heng {
                position: absolute;
                top: 0.75rem;
                width: 0.33rem;
                height: 0.02rem;
                z-index: 11;
                background-color: #ffffff;
                left: 0.32rem;
            }
        }
    }

    .popup {
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
                    padding-bottom: 0.1rem;
                    color: #333333;
                    font-size: 0.37rem;
                    border-bottom: 1px solid rgba(220, 220, 220, 1);
                }
            }
        }
        .operation {
            width: 8.5rem;
            margin: 0.8rem auto 0;
            padding-bottom: 1rem;
            height: 1rem;
            line-height: 1rem;
            display: flex;
            justify-content: space-between;
            color: #333333;
            font-size: 0.48rem;
            align-items: center;
            .open-cancel {
                width: 3.89rem;
                height: 1.09rem;
                line-height: 1.09rem;
                text-align: center;
                border: 1px solid rgba(234, 55, 86, 1);
                border-radius: 1rem;
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: rgba(234, 55, 86, 1);
            }
            .open-okbtn {
                width: 3.89rem;
                height: 1.09rem;
                line-height: 1.09rem;
                text-align: center;
                background: rgba(234, 55, 86, 1);
                border-radius: 1rem;
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #ffffff;
            }
        }
    }

    .tab_class {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 20;
        .class_warp {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: 3.5rem auto 0;
            background: #ffffff;
            width: 9.15rem;
            height: 5rem;
            border-radius: 0.27rem;
            .warp-icon {
                position: absolute;
                top: -0.3rem;
                right: 0.2rem;
                width: 0.6rem;
                height: 0.6rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .warp_list {
                margin: 0.6rem;
                .list_name {
                    float: left;
                    flex-wrap: wrap;
                    width: 33.3%;
                    font-size: 0.4rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: rgba(51, 51, 51, 1);
                    padding-bottom: 0.45rem;
                }
                .list_name:nth-child(3n + 2) {
                    padding-left: 0.3rem;
                }
                .list_name:nth-child(3n + 3) {
                    padding-left: 1rem;
                }
            }
        }
    }

    .cate-bar {
        overflow-y: auto; /*可滑动*/
        white-space: nowrap;
        display: -webkit-box;
        /*height 1.2rem;*/
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

    .cate-bar .bar-item.active span {
        padding: 4px;
        /*border-bottom: 2px solid #434343;*/
        color: #333;
        border-radius: 2px;
        font-size: 0.45rem;
    }

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
                color: #ea3756;
                margin-top: 30px;
            }
            .on-ok {
                background: #ea3756;
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
                color: #cd4b4c;
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
        background-color: #f1f1f1;
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
