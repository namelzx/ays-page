<template>
    <!--    :style="backgroundDiv"-->
    <div class="case">
        <div class="case_warp">
            <div class="imgs"><img src="@/assets/4-5.png"></div>
            <div class="title">案例图片上传</div>
            <div class="title_en">CASE PICTURE UPLIAD</div>
            <div class="desc">/ 改装后展示 /</div>

            <!--    上传        -->
            <div class="up_warp">
                <div class="example">
                    <div class="example-module">
                        <div class="module_x">*</div>
                        <div class="module_tu">
                            <van-uploader v-model="temp.rear_passing_light_qt"
                                          :after-read="afterRead('rear_passing_light_qt')" multiple :max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus"/>
                                </div>
                            </van-uploader>
                            <div>近光照墙图</div>
                        </div>
                    </div>
                    <div class="example_imgs">
                        <img src="@/assets/IMG_6533.png">
                        <div>示例图</div>
                    </div>
                </div>
                <div class="example">
                    <div class="example-module">
                        <div class="module_x">*</div>
                        <div class="module_tu">
                            <van-uploader v-model="temp.rear_distance_light_qt"
                                          :after-read="afterRead('rear_distance_light_qt')" multiple :max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus"/>
                                </div>
                            </van-uploader>
                            <div>远光照墙图</div>
                        </div>
                    </div>
                    <div class="example_imgs">
                        <img src="@/assets/IMG_6533.png">
                        <div>示例图</div>
                    </div>
                </div>
                <div class="example">
                    <div class="example-module">
                        <div class="module_x">*</div>
                        <div class="module_tu">
                            <van-uploader v-model="temp.rear_front" :after-read="afterRead('rear_front')" multiple
                                          :max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus"/>
                                </div>
                            </van-uploader>
                            <div>车辆正面图</div>
                        </div>
                    </div>
                    <div class="example_imgs">
                        <img src="@/assets/IMG_6533.png">
                        <div>示例图</div>
                    </div>
                </div>
                <div class="example">
                    <div class="example-module">
                        <div class="module_x">*</div>
                        <div class="module_tu">
                            <van-uploader v-model="temp.rear_light_feature"
                                          :after-read="afterRead('rear_light_feature')" multiple :max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus"/>
                                </div>
                            </van-uploader>
                            <div>车灯特写图</div>
                        </div>
                    </div>
                    <div class="example_imgs">
                        <img src="@/assets/IMG_6533.png">
                        <div>示例图</div>
                    </div>
                </div>
                <div class="example">
                    <div class="example-module">
                        <div class="module_x">*</div>
                        <div class="module_tu">
                            <van-uploader v-model="temp.rear_passing_light_way"
                                          :after-read="afterRead('rear_passing_light_way')" multiple max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus"/>
                                </div>
                            </van-uploader>
                            <div>近光照路图</div>
                        </div>
                    </div>
                    <div class="example_imgs">
                        <img src="@/assets/IMG_6533.png">
                        <div>示例图</div>
                    </div>
                </div>
                <div class="example">
                    <div class="example-module">
                        <div class="module_x">*</div>
                        <div class="module_tu">
                            <van-uploader v-model="temp.rear_distance_light_way"
                                          :after-read="afterRead('rear_distance_light_way')" multiple :max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus"/>
                                </div>
                            </van-uploader>
                            <div>远光照路图</div>
                        </div>
                    </div>
                    <div class="example_imgs">
                        <img src="@/assets/IMG_6533.png">
                        <div>示例图</div>
                    </div>
                </div>
                <div class="example">
                    <div class="example-module">
                        <div class="module_x">*</div>
                        <div class="module_tu">
                            <van-uploader v-model="temp.other_tow_three" :after-read="afterRead('other_tow_three')"
                                          multiple :max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus"/>
                                </div>
                            </van-uploader>
                            <div>其他</div>
                        </div>
                    </div>
                    <div class="example_imgs">
                        <!--                        <img src="">-->
                        <div></div>
                    </div>
                </div>
            </div>
        </div>

        <!--   底部栏     -->
        <div class="operation">
            <div class="operation_warp">
                <div class="lan-s" @click="toggleback">上一步</div>
                <div class="lan-z" @click="handleSave">保存</div>
                <div class="lan" @click="toPost">确认上传</div>
            </div>

        </div>
    </div>
</template>

<script>
    import aliOss from "../../utils/aliOss";
    import myconfig from "@/config";
    import {PostAddByData, GetInfoById} from '@/api/marketing'
    import {mapGetters} from 'vuex'

    export default {
        name: "Case",
        data() {
            return {
                temp: {
                    rear_passing_light_qt: [],
                    rear_front: [],
                    rear_distance_light_qt: [],
                    rear_light_feature: [],
                    rear_passing_light_way: [],
                    rear_distance_light_way: [],
                    other_tow_three: []
                },
                fileList: [
                    {url: 'https://img.yzcdn.cn/vant/leaf.jpg'},
                    // Uploader 根据文件后缀来判断是否为图片文件
                ],
                // backgroundDiv: {
                //     backgroundImage:"url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/timg.jpeg')",
                //     backgroundPosition: "center center",
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: "cover",
                // }
            }
        },
        computed: {
            ...mapGetters(["userInfo", "sele_shop"])
        },
        created() {
            GetInfoById(this.userInfo.id).then(res => {
                let data = res.data
                if (res.data.rear_passing_light_qt !== null) {
                    this.temp.rear_passing_light_qt.push({url: res.data.rear_passing_light_qt})
                    this.temp.rear_front.push({url: res.data.rear_front})
                    this.temp.rear_distance_light_qt.push({url: res.data.rear_distance_light_qt})
                    this.temp.rear_light_feature.push({url: res.data.rear_light_feature})
                    this.temp.rear_passing_light_way.push({url: res.data.rear_passing_light_way})
                    this.temp.rear_distance_light_way.push({url: res.data.rear_distance_light_way})
                    this.temp.other_tow_three.push({url: res.data.other_tow_three})

                }
            })
        },
        methods: {

            handleSave() {
                if (this.temp.rear_passing_light_qt.length === 0) {
                    this.$toast('近光墙图未上传');
                    return
                }
                if (this.temp.rear_front.length === 0) {
                    this.$toast('正面图未上传');
                    return
                }
                if (this.temp.rear_distance_light_qt.length === 0) {
                    this.$toast('远光墙图未上传');
                    return
                }

                if (this.temp.rear_light_feature.length === 0) {
                    this.$toast('车灯特写图未上传');
                    return
                }


                if (this.temp.rear_passing_light_way.length === 0) {
                    this.$toast('近光照路未上传');
                    return
                }
                if (this.temp.rear_distance_light_way.length === 0) {
                    this.$toast('rear_distance_light_way图未上传');
                    return
                }

                var temp = {
                    rear_passing_light_qt: this.temp.rear_passing_light_qt[0].url,
                    rear_front: this.temp.rear_front[0].url,
                    other_tow_three: '',
                    rear_distance_light_qt: this.temp.rear_distance_light_qt[0].url,
                    rear_light_feature: this.temp.rear_light_feature[0].url,
                    rear_passing_light_way: this.temp.rear_passing_light_way[0].url,
                    rear_distance_light_way: this.temp.rear_distance_light_way[0].url,
                };
                if (this.temp.other_tow_three.length > 0) {
                    temp.other_tow_three = this.temp.other_tow_three[0].url
                }
                temp.user_id=this.userInfo.id
                temp.status = 3;
                PostAddByData(temp).then(res=>{
                    console.log(res)
                    this.$toast('保存成功');

                })
            },
            toPost(){
                if (this.temp.rear_passing_light_qt.length === 0) {
                    this.$toast('近光墙图未上传');
                    return
                }
                if (this.temp.rear_front.length === 0) {
                    this.$toast('正面图未上传');
                    return
                }
                if (this.temp.rear_distance_light_qt.length === 0) {
                    this.$toast('远光墙图未上传');
                    return
                }

                if (this.temp.rear_light_feature.length === 0) {
                    this.$toast('车灯特写图未上传');
                    return
                }


                if (this.temp.rear_passing_light_way.length === 0) {
                    this.$toast('近光照路未上传');
                    return
                }
                if (this.temp.rear_distance_light_way.length === 0) {
                    this.$toast('rear_distance_light_way图未上传');
                    return
                }

                var temp = {
                    rear_passing_light_qt: this.temp.rear_passing_light_qt[0].url,
                    rear_front: this.temp.rear_front[0].url,
                    other_tow_three: '',
                    rear_distance_light_qt: this.temp.rear_distance_light_qt[0].url,
                    rear_light_feature: this.temp.rear_light_feature[0].url,
                    rear_passing_light_way: this.temp.rear_passing_light_way[0].url,
                    rear_distance_light_way: this.temp.rear_distance_light_way[0].url,
                };
                if (this.temp.other_tow_three.length > 0) {
                    temp.other_tow_three = this.temp.other_tow_three[0].url
                }
                temp.user_id=this.userInfo.id
                temp.status = 2;
                PostAddByData(temp).then(res=>{
                    console.log(res)
                    this.$toast('保存成功');

                })
            },
            afterRead(field) {
                var that = this;
                let obj = that.temp;
                return file => {
                    const op = aliOss.ossUploadFile(file)
                    op.then(res => {
                        obj[field] = [{url: myconfig.oss_url + res.url}]
                        that.temp = obj
                        console.log(that.temp)
                    })

                };
            },
            toggleback() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .case {
        background-size: cover;
        position: fixed;
        overflow: auto;
        height: 100%;
        width: 100%;

        .case_warp {
            margin 1rem auto 0;
            width 9.15rem;
            min-height 10rem;
            background-color #ffffff;
            border-radius .3rem .3rem 0 0;
            position relative;
            padding-bottom 1.5rem;

            .imgs {
                position absolute;
                top .5rem;
                right 1rem;
                width: 0.72rem;
                height 0.72rem;

                img {
                    width: 100%;
                    height 100%;
                }
            }

            .title {
                padding-top .5rem;
                padding-bottom .2rem;
                text-align center;
                font-size .5rem;
                color #303030;
            }

            .title_en {
                text-align center;
                font-size .3rem;
                color #606060;
            }

            .desc {
                text-align center;
                font-size: 0.48rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color #333333;
                margin-top .4rem;
            }
        }

        .up_warp {
            margin 0 auto;
            width: 6.5rem;

            .example {
                display flex;
                flex-direction row;
                justify-content space-between;
                align-items center;
                margin-top .6rem;

                .example-module {
                    display flex;
                    flex-direction row;
                    align-items center;
                    font-size 0.25rem;
                    color #666666;

                    .module_x {
                        color #E50000;
                        font-size .5rem;
                        margin-right .2rem;
                    }

                    .module_tu {
                        width: 2.4rem;
                        text-align center;
                        font-size 0.25rem;

                        .tu_box {
                            width: 2.4rem;
                            height: 1.6rem;
                            line-height 1.6rem;
                            text-align center;
                            color #666666;
                            font-size .4rem;
                            background: rgba(245, 245, 245, 1);
                            margin-bottom .2rem;
                        }

                        /deep/ .van-uploader__preview {
                            margin 0 !important;
                        }

                        /deep/ .van-uploader__preview-image {
                            display: block;
                            border-radius 0 !important;
                            width: 2.4rem !important;
                            height: 1.6rem !important;
                            padding-bottom: .2rem;
                        }
                    }
                }

                .example_imgs {
                    display flex;
                    flex-direction column;
                    text-align center;
                    font-size 0.25rem;
                    color #666666;

                    img {
                        width: 2.4rem;
                        height: 1.6rem;
                        object-fit: cover;
                        margin-bottom .3rem;
                    }
                }
            }
        }

        .operation {
            position fixed;
            bottom 0;
            left 0;
            right 0;
            height 1.2rem;
            background-color #ffffff;
            z-index 10;
            font-size .4rem;
            color #666666;
            display flex;
            flex-direction column;
            justify-content center;

            .operation_warp {
                margin 0 auto;
                width: 9rem;
                display flex;
                flex-direction row;
                align-items center;
                justify-content space-between;
                font-family: Source Han Sans CN;
                font-size: 0.4rem;
                font-size: 0.4rem;

                .lan-s {
                    width 3rem;
                    text-align center;
                }

                .lan-z {
                    width: 3rem;
                    text-align center;
                    color #0084FF;
                    border-right 1px solid #333333;
                    border-left: 1px solid #333333;
                }

                .lan {
                    width: 3rem;
                    text-align center;
                    color #0084FF;
                }
            }

        }
    }
</style>