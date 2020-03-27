<template>
    <div class="area-box">
        <div class="main-box">
            <div class="fs-24 color333 text-c title-box" v-if="province!=='选择省份'">

                <van-steps direction="vertical" :active="active">
                    <van-step>
                        <span @click="active=0">{{province}}</span>
                    </van-step>
                    <van-step>
                        <span @click="active=1">{{city}}</span>
                    </van-step>
                    <van-step>
                        <span @click="active=2">{{district}}</span>
                    </van-step>
                    <!--<van-step>-->
                    <!--<span @click="active=3"> {{street}}</span>-->
                    <!--</van-step>-->

                </van-steps>
            </div>
            <div class="select">
                <!--{{active}}-->
                <van-tabs v-model="active" @touchmove.prevent>
                    <van-tab :title="province">

                        <div class="area-list">
                            <div class="fs-24 color999">选择省区</div>
                            <div class="area-item" @click="clickProvince(area,key)" v-for="(area,key) in areaJson">
                                {{area.label}}
                            </div>
                        </div>
                    </van-tab>
                    <van-tab :title="city">
                        <div class="area-list">
                            <div class="fs-24 color999">选择城市</div>
                            <div class="area-item" @click="clickCity(area,key)" v-for="(area,key) in cityData">
                                {{area.label}}
                            </div>
                        </div>
                    </van-tab>
                    <van-tab :title="district">
                        <div class="area-list">
                            <div class="fs-24 color999">选择区域</div>
                            <div class="area-item" @click="clickDistrict(area,key)" v-for="(area,key) in districtData">
                                {{area.label}}
                            </div>
                        </div>
                    </van-tab>
                </van-tabs>
            </div>
            <div class="close-icon" @click="saveData">
                <van-icon name="close" size=".7rem" color="#cfcfcf"/>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            showAddress: Boolean,
            areaJson: {
                type: Array,
                default: [],
            },
        },
        mounted() {
            if (this.data) {
                this.province = this.data.province;
                if (this.data.city) {
                    this.city = this.data.city;
                    this.cityData = this.data.cityJson;
                }
                if (this.data.district) {
                    this.district = this.data.district;
                    this.districtData = this.data.districtJson;
                }
                if (this.data.street) {
                    this.street = this.data.street;
                    this.streetData = this.data.streetJson;
                }
            }
        },

        data() {
            return {
                pid: 0,
                active: 0,
                province: "选择省份",
                province_code: undefined,
                city: "选择城市",
                city_code: undefined,
                district: "选择区域",
                district_code: "",
                street: "选择街道",
                hotCity: [
                    ["北京", "上海", "重庆", "天津"],
                    ["杭州市", "南京市", "苏州市", "深圳市"],
                    ["武汉市", "长沙市", "广州市", "成都市"],
                ],
                cityData: {}, // 当前城市的json数据
                districtData: {}, // 当前区域的json数据
                streetData: {}, // 当前街道的json数据
            }
        },
        created() {

        },
        methods: {
            clickHotCity(name) {
                this.$toast('热门城市未开放');
                // for (let province in areas) {
                //     // 取出所有的市区数据
                //     let cityObj = areas[province];
                //     for (let city in cityObj) {
                //         // 热门城市字符直接配合当前循环出来的市的名称
                //         console.log(cityObj)
                //         // if (city.name == name) {
                //         //     this.province = province;
                //         //     this.city = name;
                //         //     this.cityData = cityObj;
                //         //     this.districtData = this.cityData[name];
                //         //     this.active = 2;
                //         // }
                //     }
                // }
            },
            clickProvince(row, key) {

                this.province_code = row.value
                // name就是当前选中的省份
                if (this.province == row.label) {
                    // 判断它是否跟当前已经选中的省份相同,如果相同,就把tab栏切换到市的选择.不用做其他操作,因为在选中的省有数据的情况下,市的数据是肯定有的.
                    this.active = 1;
                } else {
                    // 如果不相同,就代表选择了其他的省份
                    this.province = row.label; // 把选中的省份赋值给之前绑定好的tab栏上显示省的值
                    this.active = 1; // 当前的tab栏切换到市

                    this.cityData = this.areaJson[key].children; // 在地区的json数据中拿选中的省当key值,就可以取出对应的市区数据
                    // 联动到下级的值,防止显示上的错误,比如已选择,广东,广州,天河,如果直接跳回省份选择了广西,那对应的市与区的值就要重置
                    this.city = "选择城市";
                    this.district = "选择区域";
                    this.districtData = {};
                }
            },
            clickCity(city, key) {
                this.city_code = city.value
                if (this.city == city.label) {
                    this.active = 2;
                } else {
                    this.city = city.label;
                    this.active = 2;
                    this.districtData = this.cityData[key].children;
                }
            },
            clickDistrict(district, key) {
                this.active = 3;
                this.district_code = district.value
                this.district = district.label;
                this.streetData = this.districtData[key].children;
                this.saveData();
            },
            clickStree(street) {
                this.street = street.label;
                this.saveData();
            },
            saveData() {
                let data = {};
                if (this.province != "选择省份") {
                    data.province = this.province;
                }
                if (this.city != "选择城市") {
                    data.city = this.city;
                    data.cityJson = this.cityData;
                }
                if (this.district != "选择区域") {
                    data.district = this.district;
                    data.districtJson = this.districtData;
                }
                if (this.street != "选择街道") {
                    data.street = this.street;
                    data.streetJson = this.streetData;
                }
                var temp = {
                    city_code: this.province_code + ',' + this.city_code + ',' + this.district_code,
                    cityname: this.province + ' ' + this.city + ' ' + this.district
                }
                this.$emit('toggleAddress', temp)

            }
        }
    }
</script>
<style lang="scss" lang="stylus" scoped>

    .area-box >>> .van-step__title--active, .van-step__icon--active, .van-step__circle, .van-step__line {
        color: #E6A23C;
    }

    .area-box >>> .van-step__line {
        background-color: #E6A23C
    }

    .area-box >>> .van-step__circle {
        background-color: #E6A23C
    }

    .area-box >>> .van-step__icon--active, .van-step__title--active {
        color: #E6A23C;
    }

    .select {
        .van-tab__text {
            font-size: 12px;
        }
    }

    .area-box {
        z-index: 100;
        .van-step__title--active, .van-step__icon--active, .van-step__circle, .van-step__line {
            color: #E6A23C;
        }
        .van-step--finish {
            .van-step__line {
                background-color: #E6A23C
            }
            .van-step__circle {
                background-color: #E6A23C;
            }
        }

    }

    .close-icon {
        position: absolute;
        right: 20px;
        top: 20px;
    }

    .area-list {
        box-sizing: border-box;
        padding: 20px;
        padding-bottom: 16rem;
        line-height: 1.5;
        color: #909399;
    }

    .hot-province {
        box-sizing: border-box;
        padding: 10px 10px;
    }

    .hot-row {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 30px;
    }

    .area-box {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(178, 178, 178, 0.65);
        z-index: 100;
    }

    .title-box {
        /*height: 98px;*/
        /*line-height: 98px;*/
        border-bottom: 1px solid #F2F6FC;
    }

    [class*=van-hairline]::after {
        border: none;
    }

    .main-box {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 100px;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        background-color: #ffffff;
        z-index: 100;
    }

    .area-item {
        font-size: .35rem;
        font-weight: 400;
        height: 30px;
        color: #606266;
        line-height: 3;
    }

</style>
<style>
    .area-box .van-tabs__wrap.van-hairline--top-bottom {
        height: 30px;
        background-color: #f1f1f1;
        display: none;
    }

    .area-box .van-tabs__wrap.van-hairline--top-bottom .van-ellipsis {
        line-height: 15px;
        font-size: 30px;
        color: #333;
    }

    .area-box .van-tabs__content {
        margin-top: 20px;
        height: 880px;
        overflow-y: auto;
    }
</style>


