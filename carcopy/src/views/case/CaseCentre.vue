<template>
<!--    :style="backgroundDiv"-->
    <div class="case">
        <div class="case_warp">
            <div class="imgs"><img src="@/assets/3-5.png"></div>
            <div class="title">案例图片上传</div>
            <div class="title_en">CASE PICTURE UPLIAD</div>
            <div class="desc">/  改装过程展示  /</div>

            <!--    上传        -->
            <div class="up_warp">
                <div class="example">
                    <div class="example-module">
                        <div class="module_x">*</div>
                        <div class="module_tu">
                            <van-uploader v-model="temp.assembly" :after-read="afterRead('assembly')" multiple :max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus" />
                                </div>
                            </van-uploader>
                            <div>拆前杠或卸下总成</div>
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
                            <van-uploader v-model="temp.vehiclebreaking" :after-read="afterRead('vehiclebreaking')" multiple :max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus" />
                                </div>
                            </van-uploader>
                            <div>拆车后正面图</div>
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
                            <van-uploader v-model="temp.coating" :after-read="afterRead('coating')" multiple :max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus" />
                                </div>
                            </van-uploader>
                            <div>总成覆膜图</div>
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
                            <van-uploader v-model="temp.open_assembly" :after-read="afterRead('open_assembly')" multiple :max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus" />
                                </div>
                            </van-uploader>
                            <div>开总成图</div>
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
                            <van-uploader v-model="temp.gelresin" :after-read="afterRead('gelresin')" multiple max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus" />
                                </div>
                            </van-uploader>
                            <div>清胶图</div>
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
                            <van-uploader v-model="temp.lens" :after-read="afterRead('lens')" multiple :max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus" />
                                </div>
                            </van-uploader>
                            <div>透镜安装图</div>
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
                            <van-uploader v-model="temp.situdimming" :after-read="afterRead('situdimming')" multiple :max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus" />
                                </div>
                            </van-uploader>
                            <div>原位调光图</div>
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
                            <van-uploader v-model="temp.inject_glue" :after-read="afterRead('inject_glue')" multiple :max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus" />
                                </div>
                            </van-uploader>
                            <div>注胶过程图</div>
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
                            <van-uploader v-model="temp.truck_loading" :after-read="afterRead(temp.truck_loading)" multiple :max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus" />
                                </div>
                            </van-uploader>
                            <div>密封总成或装车图</div>
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
                            <van-uploader v-model="temp.other_tow" :after-read="afterRead('other_tow')" multiple :max-count="1">
                                <div class="tu_box">
                                    <van-icon name="plus" />
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
                <div class="lan" @click="toggleNext">下一步</div>
            </div>

        </div>
    </div>
</template>

<script>
    import aliOss from "../../utils/aliOss";
    import myconfig from "@/config";
    import { PostAddByData,GetInfoById} from '@/api/marketing'
    import {mapGetters} from 'vuex'

    export default {
        name: "Case",
        computed: {
            ...mapGetters(["userInfo", "sele_shop"])
        },
        data(){
            return{
                temp:{
                    assembly:[],
                    vehiclebreaking:[],
                    coating:[],
                    open_assembly:[],
                    gelresin:[],
                    lens:[],
                    situdimming:[],
                    inject_glue:[],
                    truck_loading:[],
                    other_tow:[],
                },
                fileList: [
                    { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
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
        created() {
            GetInfoById(this.userInfo.id).then(res=>{
                let data=res.data
                if(res.data.assembly!==null){
                    this.temp.assembly.push({url:res.data.assembly})
                    this.temp.vehiclebreaking.push({url:res.data.vehiclebreaking})
                    this.temp.coating.push({url:res.data.coating})
                    this.temp.open_assembly.push({url:res.data.open_assembly})
                    this.temp.gelresin.push({url:res.data.gelresin})

                    this.temp.lens.push({url:res.data.lens})
                    this.temp.situdimming.push({url:res.data.situdimming})
                    this.temp.inject_glue.push({url:res.data.inject_glue})
                    this.temp.truck_loading.push({url:res.data.truck_loading})
                    this.temp.other_tow.push({url:res.data.other_tow})
                }
            })
        },
        methods:{

            handleSave() {
                if (this.temp.assembly.length === 0) {
                    this.$toast('总成未上传');
                    return
                }
                if (this.temp.vehiclebreaking.length === 0) {
                    this.$toast('拆车后未上传');
                    return
                }
                if (this.temp.coating.length === 0) {
                    this.$toast('总成覆膜图未上传');
                    return
                }

                if (this.temp.open_assembly.length === 0) {
                    this.$toast('开总成图未上传');
                    return
                }



                if (this.temp.gelresin.length === 0) {
                    this.$toast('清胶图未上传');
                    return
                }
                if (this.temp.lens.length === 0) {
                    this.$toast('透镜安装未上传');
                    return
                }
                if (this.temp.situdimming.length === 0) {
                    this.$toast('原位调光图未上传');
                    return
                }

                if (this.temp.inject_glue.length === 0) {
                    this.$toast('注胶过程图未上传');
                    return
                }
                if (this.temp.truck_loading.length === 0) {
                    this.$toast('装车图未上传');
                    return
                }



                var temp = {
                    assembly: this.temp.assembly[0].url,
                    vehiclebreaking: this.temp.vehiclebreaking[0].url,
                    coating:  this.temp.coating[0].url,
                    open_assembly: this.temp.open_assembly[0].url,
                    gelresin: this.temp.gelresin[0].url,
                    lens: this.temp.lens[0].url,
                    situdimming: this.temp.situdimming[0].url,
                    inject_glue: this.temp.inject_glue[0].url,
                    truck_loading: this.temp.truck_loading[0].url,
                    other_tow: '',
                };
                if (this.temp.other_tow.length > 0) {
                    temp.other_tow = this.temp.other_tow[0].url
                }
                console.log(temp)
                temp.user_id=this.userInfo.id
                temp.status = 3;
                PostAddByData(temp).then(res=>{
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
            toggleback(){
                this.$router.go(-1)
            },
            toggleNext(){

                if (this.temp.assembly.length === 0) {
                    this.$toast('总成未上传');
                    return
                }
                if (this.temp.vehiclebreaking.length === 0) {
                    this.$toast('拆车后未上传');
                    return
                }
                if (this.temp.coating.length === 0) {
                    this.$toast('总成覆膜图未上传');
                    return
                }

                if (this.temp.open_assembly.length === 0) {
                    this.$toast('开总成图未上传');
                    return
                }



                if (this.temp.gelresin.length === 0) {
                    this.$toast('清胶图未上传');
                    return
                }
                if (this.temp.lens.length === 0) {
                    this.$toast('透镜安装未上传');
                    return
                }
                if (this.temp.situdimming.length === 0) {
                    this.$toast('原位调光图未上传');
                    return
                }

                if (this.temp.inject_glue.length === 0) {
                    this.$toast('注胶过程图未上传');
                    return
                }
                if (this.temp.truck_loading.length === 0) {
                    this.$toast('装车图未上传');
                    return
                }



                var temp = {
                    assembly: this.temp.assembly[0].url,
                    vehiclebreaking: this.temp.vehiclebreaking[0].url,
                    coating:  this.temp.coating[0].url,
                    open_assembly: this.temp.open_assembly[0].url,
                    gelresin: this.temp.gelresin[0].url,
                    lens: this.temp.lens[0].url,
                    situdimming: this.temp.situdimming[0].url,
                    inject_glue: this.temp.inject_glue[0].url,
                    truck_loading: this.temp.truck_loading[0].url,
                    other_tow: '',
                };
                if (this.temp.other_tow.length > 0) {
                    temp.other_tow = this.temp.other_tow[0].url
                }
                console.log(temp)
                temp.user_id=this.userInfo.id
                temp.status = 3;
                PostAddByData(temp).then(res=>{
                    this.$router.push({
                        path:'/caseover'
                    })
                })

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .case{
        background-size:cover;
        position: fixed;
        overflow: auto;
        height: 100%;
        width: 100%;
        .case_warp{
            margin 1rem auto 0;
            width 9.15rem;
            min-height 10rem;
            background-color #ffffff;
            border-radius .3rem .3rem 0 0;
            position relative;
            padding-bottom 1.5rem;
            .imgs{
                position absolute;
                top .5rem;
                right 1rem;
                width: 0.72rem;
                height 0.72rem;
                img{
                    width: 100%;
                    height 100%;
                }
            }
            .title{
                padding-top .5rem;
                padding-bottom .2rem;
                text-align center;
                font-size .5rem;
                color #303030;
            }
            .title_en{
                text-align center;
                font-size .3rem;
                color #606060;
            }
            .desc{
                text-align center;
                font-size:0.48rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color #333333;
                margin-top .4rem;
            }
        }
        .up_warp{
            margin 0 auto;
            width: 6.5rem;
            .example{
                display flex;
                flex-direction row;
                justify-content space-between;
                align-items center;
                margin-top .6rem;
                .example-module{
                    display flex;
                    flex-direction row;
                    align-items center;
                    font-size 0.25rem;
                    color #666666;
                    .module_x{
                        color #E50000;
                        font-size .5rem;
                        margin-right .2rem;
                    }

                    .module_tu{
                        width: 2.4rem;
                        text-align center;
                        font-size 0.25rem;
                        .tu_box{
                            width:2.4rem;
                            height:1.6rem;
                            line-height 1.6rem;
                            text-align center;
                            color #666666;
                            font-size .4rem;
                            background:rgba(245,245,245,1);
                            margin-bottom .2rem;
                        }
                        /deep/ .van-uploader__preview{
                            margin 0 !important;
                        }
                        /deep/ .van-uploader__preview-image{
                            display: block;
                            border-radius 0 !important;
                            width: 2.4rem !important;
                            height: 1.6rem !important;
                            padding-bottom: .2rem;
                        }
                    }
                }
                .example_imgs{
                    display flex;
                    flex-direction column;
                    text-align center;
                    font-size 0.25rem;
                    color #666666;
                    img{
                        width:2.4rem;
                        height:1.6rem;
                        object-fit: cover;
                        margin-bottom .3rem;
                    }
                }
            }
        }
        .operation{
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
            .operation_warp{
                margin 0 auto;
                width: 9rem;
                display flex;
                flex-direction row;
                align-items center;
                justify-content space-between;
                font-family:Source Han Sans CN;
                font-size:0.4rem;font-size:0.4rem;
                .lan-s{
                    width: 3rem;
                    text-align center;
                }
                .lan-z{
                    width: 3rem;
                    text-align center;
                    color #0084FF;
                    border-right 1px solid #333333;
                    border-left: 1px solid #333333;
                }
                .lan{
                    width: 3rem;
                    text-align center;
                    color #0084FF;
                }
            }

        }
    }
</style>