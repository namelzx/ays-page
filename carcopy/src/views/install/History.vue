<template>
    <div class="history">
        <div class="seach-bar">
            <div class="barBox">
                <div class="bar-left">
                    <div class="bar-imgs" @click="toggleRetun">
                        <img src="@/assets/return.png"/>
                    </div>
                    <div class="bar-inp">
                        <input class="input"  type="search" ref="input1" @keyup.13="SeekClick(1)"  @input="handeseekShow" v-model="name" placeholder="输入关键词搜索"/>
                    </div>
                </div>
                <div class="bar-right" @click="SeekClick(1)" v-if="seekShow">搜索</div>
                <div class="bar-right" @click="SeekClick(2)" v-else>取消</div>
            </div>
        </div>
        <!-- 历史记录  -->
        <div class="record" v-if="seekShow">
            <!--<div class="record-title">历史记录</div>-->
            <!--<div-->
                    <!--class="record-list"-->
                    <!--v-for="(item,index) in recordlist"-->
                    <!--:key="index"-->
                    <!--@click="toggleGra(item.name)"-->
            <!--&gt;{{item.name}}-->
            <!--</div>-->
            <div class="record-clear" @click="clearClick" v-if="recordlist.length>0">清除历史</div>
        </div>
        <div class="list" v-else>
            <!-- 如果搜索有对应的数据，则显示 -->
            <div v-if="total>0">
                <!--<div class="list-time" @click.stop="calendar">-->
                    <!--&lt;!&ndash; 选择日期为空显示 &ndash;&gt;-->
                    <!--<div class="list-select" v-if="endTime==''">-->
                        <!--<div>选择时间</div>-->
                        <!--<div class="select-icon">-->
                            <!--<img src="@/assets/down-icon.png"/>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--&lt;!&ndash; 不为空显示 &ndash;&gt;-->
                    <!--<div class="list-format" v-else>-->
                        <!--<div class="data-day">-->
                            <!--<span>日期筛选：</span>-->
                            <!--<span class="day-time">{{startTime}}-{{endTime}}</span>-->
                        <!--</div>-->
                        <!--<div class="data-eliminate" @click.stop="eliminClick">-->
                            <!--<div class="eliminate-icon"><img src="@/assets/eliminate.png"/></div>-->
                            <!--<div>清除日期</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <Card :tabs="tabs" :list="list" :curIndex="curIndex"/>
            </div>

            <!-- 如果搜索没有对应的数据 -->
            <div v-else class="list-not">暂无更多的信息</div>

        </div>

        <!-- 选择日期 -->
        <!--<van-popup class="popup" v-model="show" position="bottom">-->
            <!--<div class="times">-->
                <!--<div class="times-title">选择日期</div>-->
                <!--<div class="times-day">-->
                    <!--<div class="day-start" @click="reelect">{{startTime}}</div>-->
                    <!--<div class="day-suspend"></div>-->
                    <!--<div class="day-end">{{endTime}}</div>-->
                <!--</div>-->
            <!--</div>-->
            <!--<van-datetime-picker v-if="pickerShow" v-model="currentDate" type="date" :show-toolbar="false"/>-->
            <!--<van-datetime-picker v-else v-model="currentDate2" type="date" :show-toolbar="false"/>-->

            <!--<div class="operation">-->
                <!--<div class="open-on" @click="onCancel">取消</div>-->
                <!--<div class="open-on on-ok" @click="confirm">确定</div>-->
            <!--</div>-->
        <!--</van-popup>-->
    </div>
</template>
<script>

    import {GetDataByList, PostNoteByAdd} from '@/api/order'

    import {mapGetters} from 'vuex'

    import Card from "./component/InstallCard";

    export default {
        name: "History",
        computed: {
            ...mapGetters([
                'userInfo',
                'sele_shop'
            ])
        },
        data() {
            return {
                name: "",
                seekShow: true,
                total: 0,
                recordlist: [
                    {id: 1, name: "守护者S"},
                    {id: 2, name: "粤A02155"},
                    {id: 3, name: "别克君威2017"}
                ],
                list: [],
                curIndex: 0,
                tabs: [
                    {
                        list: [
                            {
                                id: "1",
                                name: "征服者",
                                type: "别克2017君威1.5t精英版",
                                servicer: "安亿仕13755555555",
                                shop: "阿帕斯灯(凯斯店)",
                                shop_assit: "姜卫卫",
                                status: "1",
                                price: 800,
                                order_num: 5502,
                                order_date: "2019.09.08",
                                msg: "客服留言",
                                re_msg: "",
                                re_type: ""
                            },
                            {
                                id: "2",
                                name: "征服者",
                                type: "别克2017君威1.5t精英版",
                                servicer: "安亿仕13755555555",
                                shop: "阿帕斯灯(凯斯店)",
                                shop_assit: "姜卫卫",
                                status: "1",
                                price: 800,
                                order_num: 5502,
                                order_date: "2019.09.08",
                                msg: "客服留言",
                                re_msg: "",
                                re_type: ""
                            }
                        ]
                    },
                    {
                        list: [
                            {
                                id: "2",
                                name: "征服者",
                                type: "别克2017君威1.5t精英版",
                                servicer: "安亿仕13755555555",
                                shop: "前途车灯升级服务店",
                                shop_assit: "朱汉振",
                                status: "1",
                                price: 800,
                                order_num: 5502,
                                order_date: "2019.09.08",
                                msg: "客服留言",
                                re_msg: "",
                                re_type: ""
                            },
                            {
                                id: "3",
                                name: "征服者",
                                type: "别克2017君威1.5t精英版",
                                servicer: "安亿仕13755555555",
                                shop: "阿帕斯灯(凯斯店)",
                                shop_assit: "姜卫卫",
                                status: "1",
                                price: 800,
                                order_num: 5502,
                                order_date: "2019.09.08",
                                msg: "客服留言",
                                re_msg: "",
                                re_type: ""
                            },

                            {
                                id: "4",
                                name: "征服者",
                                type: "别克2017君威1.5t精英版",
                                servicer: "安亿仕13755555555",
                                shop: "阿帕斯灯(凯斯店)",
                                shop_assit: "姜卫卫",
                                status: "1",
                                price: 800,
                                order_num: 5502,
                                order_date: "2019.09.08",
                                msg: "客服留言",
                                re_msg: "",
                                re_type: ""
                            }
                        ]
                    },
                    {
                        list: [
                            {
                                id: "4",
                                name: "征服者",
                                type: "别克2017君威1.5t精英版",
                                servicer: "安亿仕13755555555",
                                shop: "阿帕斯灯(凯斯店)",
                                shop_assit: "姜卫卫",
                                status: "2",
                                price: 800,
                                order_num: 5502,
                                order_date: "2019.09.08",
                                msg: "客服留言",
                                re_msg: "",
                                re_type: ""
                            },
                            {
                                id: "5",
                                name: "征服者",
                                type: "别克2017君威1.5t精英版",
                                servicer: "安亿仕13755555555",
                                shop: "阿帕斯灯(凯斯店)",
                                shop_assit: "姜卫卫",
                                status: "2",
                                price: 800,
                                order_num: 5502,
                                order_date: "2019.09.08",
                                msg: "客服留言",
                                re_msg: "",
                                re_type: ""
                            },
                            {
                                id: "6",
                                name: "征服者",
                                type: "别克2017君威1.5t精英版",
                                servicer: "安亿仕13755555555",
                                shop: "阿帕斯灯(凯斯店)",
                                shop_assit: "姜卫卫",
                                status: "2",
                                price: 800,
                                order_num: 5502,
                                order_date: "2019.09.08",
                                msg: "客服留言",
                                re_msg: "",
                                re_type: ""
                            }
                        ]
                    },
                    {
                        list: [
                            {
                                id: "4",
                                name: "征服者",
                                type: "别克2017君威1.5t精英版",
                                servicer: "安亿仕13755555555",
                                shop: "阿帕斯灯(凯斯店)",
                                shop_assit: "姜卫卫",
                                status: "3",
                                price: 800,
                                order_num: 5502,
                                order_date: "2019.09.08",
                                msg: "客服留言",
                                re_msg: "",
                                re_type: ""
                            },
                            {
                                id: "5",
                                name: "征服者",
                                type: "别克2017君威1.5t精英版",
                                servicer: "安亿仕13755555555",
                                shop: "阿帕斯灯(凯斯店)",
                                shop_assit: "姜卫卫",
                                status: "3",
                                price: 800,
                                order_num: 5502,
                                order_date: "2019.09.08",
                                msg: "客服留言",
                                re_msg: "",
                                re_type: ""
                            },
                            {
                                id: "6",
                                name: "征服者",
                                type: "别克2017君威1.5t精英版",
                                servicer: "安亿仕13755555555",
                                shop: "阿帕斯灯(凯斯店)",
                                shop_assit: "姜卫卫",
                                status: "3",
                                price: 800,
                                order_num: 5502,
                                order_date: "2019.09.08",
                                msg: "客服留言",
                                re_msg: "",
                                re_type: ""
                            }
                        ]
                    },
                    {
                        list: [
                            {
                                id: "7",
                                name: "征服者",
                                type: "别克2017君威1.5t精英版",
                                servicer: "安亿仕13755555555",
                                shop: "阿帕斯灯(凯斯店)",
                                shop_assit: "姜卫卫",
                                status: "4",
                                price: 800,
                                order_num: 5502,
                                order_date: "2019.09.08",
                                msg: "客服留言",
                                re_msg: "未安装",
                                re_type: "安装完成被驳回"
                            },
                            {
                                id: "8",
                                name: "征服者",
                                type: "别克2017君威1.5t精英版",
                                servicer: "安亿仕13755555555",
                                shop: "阿帕斯灯(凯斯店)",
                                shop_assit: "姜卫卫",
                                status: "4",
                                price: 800,
                                order_num: 3201,
                                order_date: "2019.09.08",
                                msg: "客服发送说明要求",
                                re_msg: "客户要求临时取消安装",
                                re_type: "待安装被驳回"
                            },
                            {
                                id: "9",
                                name: "征服者",
                                type: "别克2017君威1.5t精英版",
                                servicer: "安亿仕13755555555",
                                shop: "阿帕斯灯(凯斯店)",
                                shop_assit: "朱汉振",
                                status: "4",
                                price: 800,
                                order_num: 6208,
                                order_date: "2019.09.08",
                                msg: "客服留言",
                                re_msg: "未安装",
                                re_type: "安装完成被驳回"
                            }
                        ]
                    },
                    {
                        list: [
                            {
                                id: "10",
                                name: "征服者",
                                type: "别克2017君威1.5t精英版",
                                servicer: "安亿仕13755555555",
                                shop: "阿帕斯灯(凯斯店)",
                                shop_assit: "姜卫卫",
                                status: "5",
                                price: 800,
                                order_num: 5502,
                                order_date: "2019.09.08",
                                msg: "客服留言",
                                re_msg: "",
                                re_type: "",
                                rate: [
                                    {
                                        id: "1",
                                        rate_star: 4.5,
                                        content:
                                            "买了小四有一个月了，总体来说都比较满意，唯一的遗憾就是灯光不是很给力，毕竟刚提车也不久，还不舍得拆大灯，就一直忍着。直到前几天晚上回家，因为对向车道车",
                                        imgList: [
                                            "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=094e628b0824ab18e416e63505fbe69a/f9198618367adab411c59cee8ad4b31c8701e402.jpg",
                                            "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=094e628b0824ab18e416e63505fbe69a/f9198618367adab411c59cee8ad4b31c8701e402.jpg",
                                            "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=094e628b0824ab18e416e63505fbe69a/f9198618367adab411c59cee8ad4b31c8701e402.jpg"
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "11",
                                name: "征服者",
                                type: "别克2017君威1.5t精英版",
                                servicer: "安亿仕13755555555",
                                shop: "阿帕斯灯(凯斯店)",
                                shop_assit: "姜卫卫",
                                status: "5",
                                price: 800,
                                order_num: 5502,
                                order_date: "2019.09.08",
                                msg: "客服留言",
                                re_msg: "",
                                re_type: "",
                                rate: [
                                    {
                                        id: "1",
                                        rate_star: 4.5,
                                        content:
                                            "买了小四有一个月了，总体来说都比较满意，唯一的遗憾就是灯光不是很给力，毕竟刚提车也不久，还不舍得拆大灯，就一直忍着。直到前几天晚上回家，因为对向车道车",
                                        imgList: [
                                            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png",
                                            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png",
                                            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                listQuery: {
                    page: 1,
                    limit: 20,
                    shop_id: undefined,
                },
                show: false,
                pickerShow: true,
                startTime: "", //开始时间
                endTime: "", //截止时间
                currentDate: new Date(),
                currentDate2: new Date()
            };
        },
        created() {
            console.log(this.sele_shop)
            // this.listQuery.shop_id=this.sele_shop.id
        },
        methods: {
            handeseekShow(){
              this.seekShow=true

            },
            toggleGra(name) {
                this.name = name;
                if (name === '守护者S') {
                    this.list = '值';
                    this.seekShow = false
                }
                else {
                    this.seekShow = false
                }
            },
            toggleRetun() {
                this.$router.go(-1);//返回上一层
            },
            //清除历史记录
            clearClick() {
                this.recordlist = "";
            },
            SeekClick(e) {
                this.listQuery.title = this.name
                this.listQuery.user_id = this.userInfo.id

                if (e == 1) {
                    this.list = 1;
                    this.seekShow = false;
                    this.getlist()
                } else {
                    this.list = "";
                    this.name = "";
                    this.seekShow = true;
                }
            },
            getlist() {
                GetDataByList(this.listQuery).then(res => {
                    this.list = res.data.data
                    this.total = res.data.total

                })
            },
            //选择第一个起始时间
            reelect() {
                this.pickerShow = true;
                this.endTime = ''
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
                    this.listQuery.startTime = this.startTime
                    this.listQuery.endTime = this.endTime
                    this.getlist()
                }
            },
            //取消
            onCancel() {
                this.show = false;
            },
            calendar() {
                this.show = true;
            },
            //清除日期
            eliminClick() {
                this.startTime = ''
                this.endTime = ''
            }
        },
        components: {
            Card
        }
    };
</script>
<style lang="stylus" scoped>
    .history {
        .seach-bar {
            width: 10rem;
            height: 1.2rem;

            .barBox {
                width: 9.5rem;
                margin: 0 auto;
                padding: 0.3rem 0;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .bar-left {
                    display: flex;

                    .bar-imgs {
                        width: 0.65rem;
                        height: 0.65rem;
                        margin-top: 0.1rem;
                        margin-right: 0.15rem;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .bar-inp {
                        // width: 7.2rem;
                        // height: 0.83rem;
                        // background: rgba(241, 241, 241, 1);
                        // border-radius: 0.41rem;

                        .input {
                            width: 6.5rem;
                            height: 0.8rem;
                            line-height 0.8rem;
                            background-color: #F1F1F1;
                            padding-left .32rem;
                            color: #999999;
                            border: 0;
                            // margin-left: 0.32rem;
                            border-radius: 0.41rem;
                            font-size: 0.4rem;
                        }
                    }
                }

                .bar-right {
                    font-size: 0.4rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #333333;
                    padding-right: 0.2rem;
                }
            }
        }

        .record {
            margin-top .2rem;
            .record-title {
                margin: 0 auto;
                font-size: 0.4rem;
                width: 9.15rem;
                color: #666666;
                height: 1rem;
                line-height: 1rem;
            }

            .record-list {
                height: 1.07rem;
                line-height: 1.07rem;
                border-bottom: 1px solid #eeeeee;
                color: #333333;
                font-size: 0.4rem;
                padding-left: 0.44rem;
                background: #ffffff;
            }

            .record-clear {
                height: 1.07rem;
                line-height: 1.07rem;
                color: #333333;
                font-size: 0.4rem;
                text-align: center;
                background: #ffffff;
            }
        }

        .list {
            .list-time {
                border-bottom: 1px solid #F1F1F1;
                padding: 0.4rem 0 0.3rem;
                .list-select {
                    width: 2.3rem;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.4rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #999999;
                    .select-icon {
                        width: 0.55rem;
                        height: 0.55rem;
                        margin-top: -0.1rem;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .list-format {
                    display flex;
                    justify-content space-between;
                    width 9.1rem;
                    margin 0 auto;
                    .data-day {
                        color #666666;
                        font-size: 0.27rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        .day-time {
                            margin-left .1rem;
                        }
                    }
                    .data-eliminate {
                        color #666666;
                        font-size 0.32rem;
                        display flex;
                        .eliminate-icon {
                            width 0.32rem;
                            height 0.32rem;
                            margin-right 0.25rem;
                            margin-top .04rem;
                            img {
                                width 100%;
                                height 100%;
                            }
                        }
                    }
                }
            }
            .list-not {
                text-align center;
                padding 1.3rem 0;
                margin 0 auto;
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color #666666;
            }
        }
        .popup {
            padding-bottom .8rem;
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
                        height: .6rem;
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
                        height: .6rem;
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
                padding-bottom: 1rem;
                height: 1rem;
                display: flex;
                justify-content: space-between;
                font-size: 0.4rem;
                align-items: center;
                .open-on {
                    width: 3.89rem;
                    height: 1.09rem;
                    line-height 1.09rem;
                    text-align center;
                    border: 1px solid rgba(234, 55, 86, 1);
                    border-radius: 1rem;
                    color #EA3756;
                }
                .on-ok {
                    background #EA3756;
                    color #ffffff;
                }
            }
        }
        .content-data {
            width 9.15rem;
            padding .3rem 0;
            margin 0 auto;
            display flex;
            justify-content space-between;
            .data-count {
                font-size: 0.32rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color #333333;
                span {
                    color #CD4B4C;
                    margin 0 .1rem;
                }
            }
            .data-day {
                color #666666;
                font-size: 0.27rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                .day-time {
                    margin-left .1rem;
                }
            }
            .data-eliminate {
                color #666666;
                font-size 0.32rem;
                display flex;
                .eliminate-icon {
                    width 0.32rem;
                    height 0.32rem;
                    margin-right 0.25rem;
                    margin-top .04rem;
                    img {
                        width 100%;
                        height 100%;
                    }
                }
            }
        }
    }
</style>
