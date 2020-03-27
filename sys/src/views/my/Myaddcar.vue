<template>
    <!-- 我的-添加车辆  -->
    <div class="myaddcar">
        <div @click="toggleRetun" class="top_title">
            <Toptitle :title="title"/>
        </div>
        <div class="myaddcarBox">
            <div class="myadd-se">
                <div class="se-title">选择车型</div>
                <div class="se-inp" @click="toggleShow">
                    <div class="inp-span">
                        <span class="span-1">{{carbrand}}</span>
                        <span>{{carsuit}}</span>
                        <span>{{carseries}}</span>
                    </div>
                    <div class="inp-imgs">
                        <img src="../../assets/you.png"/>
                    </div>
                </div>
            </div>

            <!-- 省份 -->
            <div class="myadd-plate">
                <div class="plate-province">
                    <div class="province-title">选择车牌</div>
                    <div class="province-sele" @click="btnProvince">
                        <div class="sele-name">{{provincial}}</div>
                        <div class="sele-icon"><img src="@/assets/you.png"/></div>
                    </div>
                </div>


                <input class="plate-mark" v-model="postFrom.car_number"/>
            </div>

            <!-- 按钮  -->
            <div class="myadd-btn">
                <div class="btn-qx" @click="clickcancel">取消</div>
                <div class="btn-oks" @click="clickSave">确定添加</div>
            </div>
        </div>

        <!--  弹出选择车型  -->
        <div class="pull-car" v-if="opneCars" @touchmove.prevent>
            <div class="prBox">
                <div class="title">
                    <div class="ti-headline">
                        <span>选择车型</span>
                        <img @click="toggleShow" src="../../assets/close.png"/>
                    </div>
                    <div class="ti-names">
            <span @click="carbrandBnt">
              {{carbrand}}
              <span v-if="carsuit!==''">></span>
            </span>
                        <span @click="carsuitBtn" v-if="carbrand!=='品牌'">
              {{carsuit}}
              <span v-if="carseries!==''">></span>
            </span>
                        <span v-if="carsuit!=='车系'">{{carseries}}</span>
                    </div>
                </div>

                <!-- 字母列表  -->

                <div class="letter">
                    <div
                            v-for="(item,index) in letters"
                            :key="index"
                            :ref="index"
                            @touchstart="handleTouchStart"
                            @touchmove="handleTouchMove"
                            @touchend="handleTouchEnd"
                            @click="hendletterClick(item)"
                    >
                        <div class="letters-name">{{item}}</div>
                    </div>
                </div>
                <div class="prlist wrappers" v-if="carsubscript===1" ref="wrappers">
                    <div>
                        <div class="aaa" v-for="(item,index) in cities" :key="index" :ref="item.title">
                            <div class="prlist-title">
                                <span class="titles">{{item.title}}</span>
                            </div>
                            <div
                                    :class="['prlist-name',{'prlist-arcit':carbrand===items.name}]"
                                    v-for="(items,index) in item.list"
                                    :key="index"
                                    @click="Controlcar(items)"
                            >{{items.name}}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="prlist wrappers" v-if="carsubscript===2" ref="wrappers">
                    <div>
                        <div
                                :class="['prlist-name',{'prlist-arcit':carsuit===item.series_name}]"
                                v-for="(item,index) in carlist2"
                                :key="index"
                                @click="Controlercar(item)"
                        >{{item.series_name}}
                        </div>
                    </div>
                </div>

                <div class="prlist wrappers" v-if="carsubscript===3" ref="wrappers">
                    <div>
                        <div
                                :class="['prlist-name',{'prlist-arcit':carseries===item.model_name}]"
                                v-for="(item,index) in carlist3"
                                :key="index"
                                @click="Controlsancar(item)"
                        >{{item.model_name}}
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- 弹出省份选择  -->
        <div class="pull-province" v-if="sfShow">
            <div class="provinceBox">
                <div class="prHe">
                    <div class="prHe-title">
                        <div class="title-name">请选择省份</div>
                        <img @click="coloseProvince" src="@/assets/close2.png"/>
                    </div>
                    <div class="prHefor">
                        <div
                                class="prHefor-name"
                                v-for="(item,index) in abbreviation"
                                :key="index"
                                @click="Province(item.name)"
                        >{{item.name}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BScroll from "better-scroll";
    import Toptitle from "@/components/Toptitle/Toptitle";
    import {Getcar, GetIdByModel, GetIdBySeries, PostDataByAdd} from '@/api/car'
    import {mapGetters} from 'vuex'

    export default {
        name: "Myaddcar",
        data() {
            return {
                title: '添加车辆',
                plateValue: 'A·00000', //车牌
                provincial: "省份", //省份
                sfShow: false,   //省份弹出框
                abbreviation: [
                    {id: "1", name: "京"},
                    {id: "2", name: "津"},
                    {id: "3", name: "沪"},
                    {id: "4", name: "渝"},
                    {id: "5", name: "豫"},
                    {id: "6", name: "冀"},
                    {id: "7", name: "云"},
                    {id: "8", name: "辽"},
                    {id: "9", name: "黑"},
                    {id: "10", name: "湘"},
                    {id: "11", name: "鲁"},
                    {id: "12", name: "皖"},
                    {id: "13", name: "新"},
                    {id: "14", name: "苏"},
                    {id: "15", name: "浙"},
                    {id: "16", name: "赣"},
                    {id: "17", name: "桂"},
                    {id: "18", name: "鄂"},
                    {id: "19", name: "晋"},
                    {id: "20", name: "蒙"},
                    {id: "21", name: "陕"},
                    {id: "22", name: "闽"},
                    {id: "23", name: "吉"},
                    {id: "24", name: "粤"},
                    {id: "25", name: "青"},
                    {id: "26", name: "藏"},
                    {id: "27", name: "宁"},
                    {id: "28", name: "琼"},
                    {id: "29", name: "港"},
                    {id: "30", name: "澳"},
                    {id: "31", name: "台"},
                    {id: "32", name: "贵"},
                    {id: "33", name: "川"}
                ],
                carbrand: "品牌", //车型品牌
                carsuit: "", // 车型型号
                carseries: "", //车型版本
                carsubscript: 1, //列表下标
                opneCars: false, //车型弹窗
                carlist2: [
                    {
                        id: 1,
                        name: "本田SVT"
                    },
                    {
                        id: 2,
                        name: "艾力绅"
                    },
                    {
                        id: 3,
                        name: "冠道"
                    },
                    {
                        id: 4,
                        name: "飞度"
                    },
                    {
                        id: 5,
                        name: "哥瑞"
                    },
                    {
                        id: 6,
                        name: "本田HR-V"
                    },
                    {
                        id: 7,
                        name: "锋范"
                    },
                    {
                        id: 8,
                        name: "雅阁"
                    },
                    {
                        id: 9,
                        name: "奥德赛"
                    }
                ],
                carlist3: [
                    {
                        id: 1,
                        name: "2018款 1.5L CVT舒适天窗版"
                    },
                    {
                        id: 2,
                        name: "2018款 1.5L CVT潮跑版"
                    },
                    {
                        id: 3,
                        name: "2018款 2.0L CVT潮跑版"
                    }
                ],
                cities: [
                    {
                        id: "1",
                        title: "A",
                        list: [{id: "1", name: "奥迪"}, {id: "2", name: "阿尔特"}]
                    },
                    {
                        id: "2",
                        title: "B",
                        list: [
                            {id: "1", name: "本田"},
                            {id: "2", name: "比亚迪"},
                            {id: "3", name: "标志"},
                            {id: "4", name: "别克"},
                            {id: "5", name: "宝马"},
                            {id: "6", name: "奔驰"}
                        ]
                    },
                    {
                        id: "3",
                        title: "C",
                        list: [{id: "1", name: "长城"}, {id: "2", name: "长安"}]
                    },
                    {
                        id: "4",
                        title: "D",
                        list: [
                            {id: "1", name: "东方"},
                            {id: "2", name: "大众"},
                            {id: "3", name: "道奇"}
                        ]
                    },
                    {
                        id: "5",
                        title: "E",
                        list: [
                            {id: "1", name: "东方"},
                            {id: "2", name: "大众"},
                            {id: "3", name: "道奇"}
                        ]
                    },
                    {
                        id: "6",
                        title: "F",
                        list: [
                            {id: "1", name: "东方"},
                            {id: "2", name: "大众"},
                            {id: "3", name: "道奇"}
                        ]
                    }
                ],
                letter: "",
                touchStatus: false,
                carIfon: [],
                postFrom: {
                    car_number: 'A·00000',
                    brand_id: undefined,
                    series_id: undefined,
                    model_id: '',
                },
            };
        },
        computed: {
            letters() {
                var letters = [];
                for (let i = 0; i < 26; i++) {
                    if (this.cities[i] !== undefined) {
                        var element = this.cities[i].title;
                        letters.push(element);
                    }
                }
                return letters;
            },
            ...mapGetters([
                'userInfo'
            ])
        },
        created() {
            Getcar().then(res => {
                this.cities = res.data
            })
        },
        methods: {
            toggleRetun() {
                this.$router.go(-1); //返回上一层
            },
            //省份弹出框
            btnProvince() {
                this.sfShow = !this.sfShow;
            },
            //选择省份
            Province(name) {
                this.provincial = name;
                this.postFrom.provinces = name
                this.sfShow = !this.sfShow;
            },
            coloseProvince() {
                this.btnProvince()
            },
            //取消
            clickcancel() {
                this.$router.go(-1); //返回上一层
            },
            //保存
            clickSave() {
                let carUser = this.carbrand + this.carsuit + this.carseries;
                let provincial = this.provincial;
                let plateValue = this.plateValue;
                let desc = provincial + plateValue
                let temp = {
                    carUser: carUser,
                    desc: desc
                }
                this.carIfon.push(temp);
                if (this.carseries === "") {
                    this.$toast('请选择车辆信息！');
                }
                else if (this.provincial === "省份") {
                    this.$toast('请选择省份信息！');
                }
                else {
                    console.log(this.postFrom)
                    this.postFrom.user_id=this.userInfo.id
                    this.postFrom.model_title=carUser
                    PostDataByAdd(this.postFrom).then(res=>{
                        console.log(res)
                    })
                    this.$router.push({ path: "/my/mycar",query:{temp:temp}});
                }

            },

            // 挂载ref节点
            setRef() {
                const options = {
                    scrollY: true,
                    scrollX: false,
                    mouseWheel: true,
                    click: true,
                    taps: true
                };

                setTimeout(() => {
                    let wrappers = document.querySelector(".wrappers");
                    this.scroll = new BScroll(wrappers, options);
                }, 300);
            },
            //打开车型
            toggleShow() {
                this.opneCars = !this.opneCars;
                this.setRef();
            },
            //第一级
            Controlcar(row) {
                this.carbrand = row.name;
                this.postFrom.brand_id = row.brandid
                GetIdBySeries(row.brandid).then(res => {
                    this.carlist2 = res.data
                })
                this.carsuit = "车系";
                this.carsubscript = 2;
            },
            //第二级
            Controlercar(row) {
                this.carsuit = row.series_name;
                this.carseries = "车型";
                this.postFrom.series_id = row.series_id

                GetIdByModel(row.series_id).then(res => {
                    this.carlist3 = res.data
                })
                this.carsubscript = 3;
            },
            //第三极
            Controlsancar(row) {
                this.postFrom.model_id = row.model_id
                this.carseries = row.model_name;
                this.opneCars = false;
            },
            //点击第一级标题
            carbrandBnt() {
                this.carsubscript = 1;
                this.carsuit = "";
                this.carseries = "";
                this.setRef();
            },
            // 点击第二级标题
            carsuitBtn() {
                this.carsubscript = 2;
                this.carseries = "";
                this.setRef();
            },
            //点击字母表
            hendletterClick(e) {
                this.letter = e;
            },
            handleTouchStart() {
                this.touchStatus = true;
            },
            handleTouchMove(e) {
                if (this.touchStatus) {
                    //122
                    const startY = this.$refs["A"][0].offsetTop;
                    const touchY = e.touches[0].clientY - 400;
                    const index = Math.floor((touchY - startY) / 75);
                    if (index >= 0 && index < this.letters.length) {
                        this.letter = this.letters[index];
                    }
                } else {
                }
            },
            handleTouchEnd() {
                this.touchStatus = false;
            }
        },
        components: {
            Toptitle
        },
        watch: {
            letter() {
                if (this.letter) {
                    const wrappers = this.$refs[this.letter][0];
                    this.scroll.scrollToElement(wrappers);
                }
            }
        }
    };
</script>
<style lang="scss" scoped>
    .myaddcar {
        font-family: SourceHanSans;
        width: 10rem;
        .myaddcarBox {
            width: 9.15rem;
            margin: 0 auto;
            margin-top: 1.2rem;
            .myadd-se {
                display: flex;
                justify-content: space-between;
                height: 1.17rem;
                line-height: 1.17rem;
                align-items: center;
                border-bottom: 1px solid #DCDCDC;
                .se-title {
                    color: #333333;
                    font-size: 0.4rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                }
                .se-inp {
                    width: 7.17rem;
                    display: flex;
                    justify-content: flex-end;
                    .inp-span {
                        color: #000000;
                        font-size: 0.4rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        .span-1 {
                            margin-right: 0.1rem;
                        }
                    }
                    .inp-imgs {
                        margin-top: .15rem;
                        margin-left: 0.15rem;
                        margin-right: -.1rem;
                        width: 0.48rem;
                        height: 0.48rem;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            .myadd-plate {
                display: flex;
                justify-content: space-between;
                height: 1.17rem;
                line-height: 1.17rem;
                align-items: center;
                border-bottom: 1px solid #DCDCDC;
                .plate-province {
                    width: 50%;
                    display: flex;
                    height: 1.17rem;
                    line-height: 1.17rem;
                    justify-content: space-between;
                    .province-title {
                        font-size: 0.4rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #333333;
                    }
                    .province-sele {
                        display: flex;
                        .sele-name {
                            font-size: 0.4rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                        }
                        .sele-icon {
                            width: .6rem;
                            height: .6rem;
                            margin-top: .2rem;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
                .plate-mark {
                    border: 0;
                    width: 50%;
                    text-align: right;
                    font-size: 0.4rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    font-size: 0.4rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: rgba(51, 51, 51, 1);
                }
            }

            .myadd-btn {
                width: 8.5rem;
                display: flex;
                justify-content: space-between;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 1.5rem;
                margin: 0 auto;
                .btn-qx {
                    width: 3.89rem;
                    height: 1.09rem;
                    line-height: 1.09rem;
                    text-align: center;
                    border: 1px solid rgba(233, 55, 91, 1);
                    border-radius: 1rem;
                    font-size: 0.4rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: rgba(233, 55, 91, 1);
                }
                .btn-oks {
                    width: 3.89rem;
                    height: 1.09rem;
                    line-height: 1.09rem;
                    text-align: center;
                    background: rgba(233, 55, 91, 1);
                    border-radius: 1rem;
                    font-size: 0.4rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #ffffff;
                }
            }
        }

        .pull-car {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.3);
            z-index: 10;
            .prBox {
                position: absolute;
                width: 10rem;
                height: 12.39rem;
                background: #ffffff;
                bottom: 0;
                .letter {
                    position: absolute;
                    top: 1.6rem;
                    right: 0;
                    bottom: 0;
                    width: 1rem;
                    text-align: center;
                    font-size: 0.27rem;
                    z-index: 10;
                    .letters-name {
                        height: 0.5rem;
                        line-height: 0.5rem;
                    }
                }
                .title {
                    width: 10rem;
                    height: 1.5rem;
                    border-bottom: 1px solid #eeeeee;
                    .ti-headline {
                        text-align: center;
                        position: relative;
                        color: #333333;
                        font-size: 0.4rem;
                        margin-top: 0.23rem;
                        height: 30px;
                        img {
                            position: absolute;
                            right: 0.5rem;
                            top: 0.1rem;
                            width: 0.25rem;
                            height: 0.25rem;
                        }
                    }
                    .ti-names {
                        margin-left: .44rem;
                        // text-align: center;
                        span {
                            // margin-right: 1rem;
                            color: #333333;
                            font-size: 0.4rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                        }
                    }
                }
                .prlist {
                    height: 10.03rem;
                     margin-top: .25rem;
                    color: #333333;
                    font-size: 0.32rem;
                    // overflow: auto; //超出高度滚动
                    overflow: hidden;
                    padding-bottom: 0.4rem;
                    .prlist-title {
                        background-image: linear-gradient(
                                        to right,
                                        #ffdae1 45%,
                                        #fff2f4,
                                        #ffffff
                        );
                        width: 9.09rem;
                        height: 0.61rem;
                        line-height: 0.61rem;
                        margin-bottom: 0.2rem;
                        .titles {
                            margin-left: 0.44rem;
                            font-size: 0.4rem;
                        }
                    }
                    .prlist-name {
                        padding-bottom: 0.3rem;
                        padding-left: 0.44rem;
                        font-size: 0.4rem;
                    }
                    .prlist-arcit {
                        color: #f00505;
                    }
                }
            }
        }
    }

    .pull-province {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 10;
        .provinceBox {
            width: 10rem;
            height: 12.93rem;
            position: absolute;
            bottom: 0;
            background: #ffffff;
            overflow: hidden;
            .prHe {
                width: 9.15rem;
                margin: 0.43rem auto;
                .prHe-title {
                    display: flex;
                    justify-content: space-between;
                    .title-name {
                        color: #333333;
                        font-size: 0.4rem;
                    }
                    img {
                        width: 0.28rem;
                        height: 0.28rem;
                    }
                }
                .prHefor {
                    margin-top: 0.79rem;
                    height: 11rem;
                    overflow: auto;
                    .prHefor-name {
                        float: left;
                        width: 0.99rem;
                        height: 1.39rem;
                        line-height: 1.39rem;
                        text-align: center;
                        color: #333333;
                        font-size: 0.4rem;
                        background: rgba(229, 237, 250, 1);
                        border-radius: 0.07rem;
                        margin-right: 0.64rem;
                        margin-bottom: 0.43rem;
                    }
                    .prHefor-name:nth-child(6n) {
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>
