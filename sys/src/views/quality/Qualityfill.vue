<template>
    <!-- 填写质保卡信息  -->
    <div class="quality">
        <div @click="toggleRetun" class="top_title">
            <Toptitle :title="title"/>
        </div>
        <div class="QualityBox">
            <!-- 产品信息 -->
            <div class="Qu-product">
                <div class="product-title">
                    <div class="title-heng"></div>
                    <div class="title-name">产品信息</div>
                </div>
                <div class="product-select">
                    <!-- 产品  -->
                    <div class="select-pr">
                        <div class="prBox">
                            <div class="title">产品</div>
                            <div class="names" @click="handelProduct">
                                <div class="names-character">
                                    <span>{{temp.product_title}}</span>
                                </div>
                                <div class="names-img">
                                    <img src="@/assets/you.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 购买日期  -->
                    <div class="select-day">
                        <div class="dayBox">
                            <div class="title">购买日期</div>
                            <input v-model="temp.buytime" @click="showTI" placeholder="如：2019-9-15"/>
                        </div>
                    </div>
                    <div class="select-day">
                        <div class="dayBox">
                            <div class="title">质保编码：</div>
                            <input disabled v-model="temp.code" placeholder="123456"/>
                        </div>
                    </div>
                    <div class="select-day">
                        <div class="dayBox">
                            <div class="title">质保期：</div>
                            <input v-model="temp.codeday" placeholder="365天"/>
                        </div>
                    </div>

                </div>
            </div>

            <!-- 背景 -->
            <div class="qu-heng"></div>

            <!-- 请填写车主信息  -->
            <div class="Qu-car">
                <div class="car-title">
                    <div class="title-heng"></div>
                    <div class="title-name">请填写车主信息</div>
                </div>
                <div class="car-select">
                    <!-- 车型  -->
                    <div class="select-pr">
                        <div class="prBox">
                            <div class="title">车型</div>
                            <div class="names" @click="toggleShow">
                                <!-- <div class="names-character">本田飞度2018款1.5LCVT舒适天窗版</div> -->
                                <div class="names-character">{{temp.car_type}}</div>
                                <div class="names-img">
                                    <img src="@/assets/you.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--  车牌 -->
                    <div class="select-plate">
                        <div class="plate-left">
                            <div class="title">车牌</div>
                            <div class="province" @click="btnProvince">
                                <div class="province-xz">{{temp.provincial}}</div>
                                <div class="province-img">
                                    <img src="../../assets/you.png"/>
                                </div>
                            </div>
                        </div>
                        <div class="plate-right">
                            <input v-model="temp.plate_numer" placeholder="请输入车牌号码：A·00000"/>
                        </div>
                    </div>
                    <!-- 姓名  -->
                    <div class="select-day">
                        <div class="dayBox">
                            <div class="title">姓名</div>
                            <input v-model="temp.user" placeholder="输入您的姓名"/>
                        </div>
                    </div>
                    <!-- 电话  -->
                    <div class="select-day">
                        <div class="dayBox">
                            <div class="title">电话</div>
                            <input v-model="temp.user_phone"
                                   pattern="[0-9]*"
                                   type="number"
                                   oninput="if(value.length>6)value=value.slice(0,12)" placeholder="输入您联系电话"/>
                        </div>
                    </div>
                    <!-- 地址  -->
                    <div class="select-pr">
                        <div class="prBox active">
                            <div class="title">地址</div>
                            <div class="names" @click="toggleAddressShow(1)">
                                <div class="names-character">
                                    <span>{{temp.user_address}}</span>

                                </div>
                                <div class="names-img">
                                    <img src="@/assets/you.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="qu-heng"></div>


            <!-- 请填写门店信息  -->
            <div class="Qu-car">
                <div class="car-title">
                    <div class="title-heng"></div>
                    <div class="title-name">请填写门店信息</div>
                </div>
                <div class="car-select">
                    <!-- 店名  -->
                    <div class="select-day">
                        <div class="dayBox">
                            <div class="title">店名</div>
                            <input v-model="temp.shop_user" placeholder="输入门店名称"/>
                        </div>
                    </div>
                    <!-- 电话  -->
                    <div class="select-day">
                        <div class="dayBox">
                            <div class="title">电话</div>
                            <input v-model="temp.shop_phone" pattern="[0-9]*"
                                   type="number"
                                   oninput="if(value.length>6)value=value.slice(0,12)" placeholder="输入门店联系电话"/>
                        </div>
                    </div>
                    <!-- 地址  -->
                    <div class="select-pr">
                        <div class="prBox active">
                            <div class="title">地址</div>
                            <div class="names" @click="toggleAddressShow(2)">
                                <div class="names-character">
                                    <span>{{temp.shop_address}}</span>

                                </div>
                                <div class="names-img">
                                    <img src="@/assets/you.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="qu-heng"></div>

            <!-- 取消 确认添加  -->
            <div class="Qu-Btn">
                <span class="btn-cancel" @click="tolast">取消</span>
                <span class="btn-okadd" @click="toqusucee">确认添加</span>
            </div>
        </div>


        <!-- 弹出省份选择  -->
        <div class="pull-province" v-if="sfShow">
            1{{sfShow}}

            <div class="provinceBox">
                <div class="prHe">
                    <div class="prHe-title">
                        <div class="title-name">请选择省份</div>
                        <img @click="coloseProvince" src="../../assets/close2.png"/>
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

        <Address v-if="showAddress" :areaJson="areaJson" @toggleAddress="toggleAddress"></Address>

        <product-from ref="productFrom" @updateRow="updateRow"></product-from>
        <car-from ref="carFrom" @updateRow="updateCar"></car-from>
        <!-- 车型 -->

        <van-popup position="bottom" v-model="showtime">

            <van-datetime-picker
                    @cancel="showtime=false"
                    @confirm="handelTime"
                    v-model="temp.buytime"
                    :min-date="minDate"
                    :max-date="maxDate"
                    type="date"
                    title="选择年月日"
            />
        </van-popup>

    </div>
</template>
<script>
    import {Citylist} from "@/api/city";
    import {PostDataByAdd} from "@/api/code";


    import Toptitle from "@/components/Toptitle/Toptitle";
    import Address from "@/components/address/index";
    import ProductFrom from "./components/product"
    import CarFrom from "./components/Car"
    import {Popup, DatetimePicker} from 'vant';
    import {mapGetters} from 'vuex'

    export default {
        name: "Qualityfill",
        data() {
            return {
                is_post: false,
                showtime: false,
                areaJson: [],
                showAddress: false,
                title: "添加质保卡",
                temp: {
                    car_type: "",
                    model_id: "",
                    code: '',
                    product_title: '请选择',
                    plate: '',
                    shop_user: '',
                    shop_phone: '',

                },
                showAddressType: 1,
                sfShow: false,
                district1: '',
                city1: '',
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                isScroll: false, //显示固定元素
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
            };
        },
        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },
        components: {
            CarFrom,
            Toptitle,
            Address,
            ProductFrom,
        },
        created() {
            this.temp.code = this.$route.query.value
            Citylist(1).then(res => {
                this.areaJson = res.data;
            });

        },
        methods: {
            handelTime(e) {
                console.log(e)
                let d = this.GMTToStr(e)
                this.showtime = false
                this.temp.buytime = d
            },
            GMTToStr(time) {
                let date = new Date(time)
                let Str = date.getFullYear() + '-' +
                    (date.getMonth() + 1) + '-' +
                    date.getDate()
                return Str
            },
            showTI() {
                this.showtime = !this.showtime
            },
            toggleAddressShow(type) {
                this.showAddress = !this.showAddress;
                this.showAddressType = type

            },
            // 弹出地址弹出层
            toggleAddress(e) {
                if (this.showAddressType == 2) {
                    this.temp.shop_city_code = e.city_code;
                    this.temp.shop_address = e.cityname;
                }

                if (this.showAddressType == 1) {
                    this.temp.user_city_code = e.city_code;
                    this.temp.user_address = e.cityname;
                }
                this.showAddress = !this.showAddress;


            },
            //选择车型
            updateCar(row) {
                console.log(row)
                this.temp.car_type = row.car_type
                this.temp.model_id = row.model_id
            },
            toggleShow() {
                this.$refs.carFrom.toggleShow()
            },
            toggleRetun() {

            },
            updateRow(row) {
                this.temp.product_title = row.title
                this.temp.product_id = row.pid
                console.log(this.temp)
            },
            handelProduct() {
                this.$refs.productFrom.handelView()
            },

            //选择省份车牌
            Province(name) {
                this.temp.provincial = name;
                this.sfShow = !this.sfShow;
            },
            coloseProvince() {
                this.sfShow = !this.sfShow;
            },
            btnProvince() {
                this.coloseProvince();
            },

            //车主信息地址
            showPopup() {
                this.show = true;
            },

            //监听获取车主省市区
            onChange(picker) {
                let val = picker.getValues();
                let province = val[0].name;
                let city = val[1].name;
                let district = val[2].name;
                this.province = province;
                this.city = city;
                this.district = district;

            },

            //门店信息地址
            showPopup1() {
                this.show1 = true;
            },


            //取消返回
            tolast() {
                this.$router.push({path: '/quality'}); //返回上一层
            },

            //添加成功，跳转成功页面
            toqusucee() {
                if (this.is_post) {
                    return
                }
                this.temp.user_id = this.userInfo.id
                this.is_post = true;
                PostDataByAdd(this.temp).then(res => {
                    if (res.code === 10001) {
                        this.$toast(res.msg)
                        this.$router.push({path: "/quality"});
                        return;
                    }
                    this.is_post = false
                    this.$router.push({path: "/quality/qualiyadd/qualitysucee"});

                })
            }
        },
    };
</script>
<style lang="scss" scoped>
    .van-popup--bottom {
        height: 7rem !important;
    }

    .quality {
        width: 10rem;

        .QualityBox {
            margin-top: 0.3rem;
            width: 10rem;
            overflow: hidden;
            margin-bottom: 5rem;

            .Qu-product {
                .product-title {
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #dcdcdc63;
                    padding-bottom: .4rem;

                    font-family: Source Han Sans CN;
                    font-weight: 500;
                    color: rgba(51, 51, 51, 1);

                    .title-heng {
                        width: 0.05rem;
                        height: 0.32rem;
                        background: rgba(216, 30, 6, 1);
                        border-radius: 0.03rem;
                    }

                    .title-name {
                        margin-left: 0.44rem;
                        color: #333333;
                        font-size: 0.43rem;
                    }
                }

                .product-select {
                    width: 9.15rem;
                    margin: 0 auto;

                    .select-pr {
                        width: 9.15rem;
                        height: 1.17rem;
                        line-height: 1.17rem;
                        background: rgba(255, 255, 255, 1);
                        // margin-top: 0.19rem;
                        border-bottom: 1px solid #dcdcdc29;

                        .prBox {
                            margin: 0 auto;
                            // width: 8.35rem;
                            display: flex;
                            justify-content: space-between;

                            .title {
                                color: #333333;
                                font-size: 0.4rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                            }

                            .names {
                                width: 7.5rem;
                                display: flex;
                                height: 1.17rem;
                                line-height: 1.17rem;
                                justify-content: space-between;
                                font-size: 0.4rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;

                                .names-character {
                                    width: 100%;

                                    span {
                                        display: inline-block;
                                        width: 100%;
                                        text-align: center;

                                    }
                                }

                                .names-img {
                                    width: 0.65rem;
                                    height: 0.65rem;
                                    margin-top: 0.2rem;

                                    img {
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                            }
                        }
                    }

                    .select-day {
                        width: 9.15rem;
                        height: 1.17rem;
                        line-height: 1.17rem;
                        background: rgba(255, 255, 255, 1);

                        // border-radius: 0.13rem;
                        // margin-top: 0.2rem;
                        .dayBox {
                            margin: 0 auto;
                            // width: 8.35rem;
                            display: flex;
                            justify-content: space-between;
                            border-bottom: 1px solid #dcdcdc29;

                            .title {
                                color: #333333;
                                font-size: 0.4rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                            }

                            input {
                                text-align: right;
                                width: 6.5rem;
                                margin-left: 0.59rem;
                                color: #999999;
                                font-size: 0.4rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                            }
                        }
                    }

                    .select-coding {
                        width: 9.15rem;
                        // height: 1.75rem;

                        // border-radius: 0.13rem;
                        // margin-top: 0.19rem;
                        overflow: hidden;

                        .codingBox {
                            margin: 0 auto;

                            .codingBox-s {
                                font-size: 0.4rem;
                                font-family: Source Han Sans CN;
                                border-bottom: 1px solid #dcdcdc29;
                                font-weight: 400;
                                color: #333333;
                                // margin-top: 0.3rem;
                                display: flex;
                                justify-content: space-between;
                                background: rgba(255, 255, 255, 1);
                                height: 1.17rem;
                                line-height: 1.17rem;

                                .s-nums {
                                    color: #999999;
                                    margin-left: 0.43rem;
                                }

                                span {
                                    display: block;
                                }
                            }

                            .codingBox-x {
                                font-size: 0.4rem;
                                font-family: Source Han Sans CN;
                                background: rgba(255, 255, 255, 1);

                                font-weight: 400;
                                color: #333333;
                                // margin-top: 0.2rem;
                                display: flex;
                                justify-content: space-between;
                                height: 1.17rem;
                                line-height: 1.17rem;

                                .x-nums {
                                    color: #999999;
                                    margin-left: 0.43rem;
                                }

                                span {
                                    display: block;
                                }
                            }
                        }
                    }
                }
            }

            .qu-heng {
                height: .4rem;
                background: #f8f8f8;
            }

            .Qu-car {
                .car-title {
                    display: flex;
                    align-items: center;
                    height: 1.17rem;
                    line-height: 1.17rem;
                    border-bottom: 1px solid #dcdcdc63;

                    .title-heng {
                        width: 0.05rem;
                        height: 0.32rem;
                        background: rgba(216, 30, 6, 1);
                        border-radius: 0.03rem;
                    }

                    .title-name {
                        margin-left: 0.44rem;
                        color: #333333;
                        font-size: 0.43rem;
                        font-family: Source Han Sans CN;
                        font-weight: 500;
                        color: rgba(51, 51, 51, 1);
                    }
                }

                .car-select {
                    width: 9.15rem;
                    margin: 0 auto;

                    .select-pr {
                        width: 9.15rem;
                        height: 1.17rem;
                        line-height: 1.17rem;
                        background: rgba(255, 255, 255, 1);

                        .prBox {
                            margin: 0 auto;
                            display: flex;
                            justify-content: space-between;
                            height: 1.17rem;
                            line-height: 1.17rem;
                            border-bottom: 1px solid #dcdcdc29;

                            .title {
                                color: #333333;
                                font-size: 0.4rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                            }

                            .names {
                                width: 7.5rem;
                                display: flex;
                                height: 1.17rem;
                                line-height: 1.17rem;
                                justify-content: space-between;
                                font-size: 0.4rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;

                                .names-character {
                                    text-align: right;
                                    margin-right: .3rem;
                                    width: 100%;

                                    span {
                                        display: inline-block;
                                        width: 100%;
                                        text-align: right;
                                        overflow: hidden;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                    }
                                }

                                .names-img {
                                    width: 0.65rem;
                                    height: 0.65rem;
                                    margin-top: 0.2rem;

                                    img {
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                            }
                        }

                        .prBox.active {
                            border-bottom: 0;
                        }
                    }

                    .select-day {
                        width: 9.15rem;
                        height: 1.17rem;
                        line-height: 1.17rem;
                        border-bottom: 1px solid #dcdcdc29;

                        .dayBox {
                            margin: 0 auto;
                            display: flex;
                            justify-content: space-between;

                            .title {
                                color: #333333;
                                font-size: 0.4rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                            }

                            input {
                                text-align: right;
                                height: 1.1rem;
                                line-height: 1.1rem;
                                font-size: 0.4rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                                width: 5rem;
                                margin-left: 0.59rem;
                                color: #999999;
                            }
                        }
                    }

                    .select-plate {
                        width: 9.15rem;
                        margin: 0 auto;
                        display: flex;
                        height: 1.17rem;
                        line-height: 1.17rem;
                        border-bottom: 1px solid #dcdcdc29;
                        justify-content: space-between;

                        .plate-left {
                            display: flex;

                            .title {
                                width: 1.44rem;
                                height: 1.17rem;
                                line-height: 1.17rem;
                                font-size: 0.4rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                                color: #333333;
                            }

                            .province {
                                margin-left: 0.19rem;
                                width: 1.96rem;
                                height: 1.17rem;
                                line-height: 1.17rem;
                                display: flex;
                                justify-content: space-between;

                                .province-xz {
                                    width: 1.2rem;
                                    text-align: center;
                                    font-size: 0.4rem;
                                    font-family: Source Han Sans CN;
                                    font-weight: 400;
                                    color: #999999;
                                }

                                .province-img {
                                    width: 0.6rem;
                                    height: 0.6rem;
                                    margin-right: 0.5rem;
                                    margin-top: 0.2rem;

                                    img {
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                            }
                        }

                        .plate-right {
                            width: 5.37rem;
                            height: 1.17rem;
                            line-height: 1.17rem;

                            input {
                                text-align: right;
                                margin-left: 0.4rem;
                                width: 4.9rem;
                                height: 1.1rem;
                                line-height: 1.1rem;
                                color: #999999;
                                font-size: 0.4rem;
                                font-family: Source Han Sans CN;
                                font-weight: 400;
                            }
                        }
                    }
                }
            }

            .Qu-Btn {
                display: flex;
                justify-content: space-between;
                margin: .6rem auto;
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                position: fixed;
                z-index: 9999;
                bottom: 0;
                width: 100%;
                background: #fff;
                margin-bottom: 0;
                padding-bottom: 10px;

                span {
                    display: inline-block;
                }

                .btn-cancel {
                    width: 3.89rem;
                    height: 1.09rem;
                    line-height: 1.09rem;
                    border: 1px solid rgba(233, 55, 91, 1);
                    border-radius: 1rem;
                    text-align: center;
                    color: rgba(233, 55, 91, 1);
                }

                .btn-okadd {
                    width: 3.89rem;
                    height: 1.09rem;
                    line-height: 1.09rem;
                    text-align: center;
                    color: #ffffff;
                    border-radius: 1rem;
                    background: rgba(233, 55, 91, 1);
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