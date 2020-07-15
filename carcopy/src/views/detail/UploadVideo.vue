<template>
    <div class="upload-container">
        <div @click="toggleRetun">
            <Toptitle :title="title"/>
        </div>
        <div class="order-wrap">
            <div class="upload-item" v-for="(item,index) in list">
                <div class="upload-title"><span>上传安装视频（{{index+1}}）</span></div>
                <div class="upload-content" @click="handelonIndex(index)">
                    <van-uploader :before-read="beforeRead" accept=".mp4,.mp3,.avi" :after-read="afterRead">
                        <van-button icon="video" v-if="item.url==='3'">上传安装视频</van-button>
                        <div v-else class="video">
                            <video :src="item.url"></video>

                        </div>
                    </van-uploader>

                    <p>点击进入相册选择需要上传的视频</p>
                </div>
            </div>
            <div class="continue" @click="toggleAdd" v-if="list.length<5">
                <van-icon name="add-o" class="add-item"/>
                继续添加视频
            </div>
            <div class="add-tips">最多可上传5段视频({{list.length}}/5)</div>
            <!--<div class="confirm-upload" @click="clickToUpload">确认上传视频</div>-->
        </div>

        <van-overlay :show="show">
            <van-loading size="24px">上传中</van-loading>

        </van-overlay>

        <div class="fixed">
            <div data-v-0f60746f="" class="turn ">
                <!--<div class="up-submit" >提交</div>-->
                <div class="have-btn" @click="clickToUpload">确认上传视频</div>
                <!--<div @click="toggleInstall" class="have-btn">提交</div></div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Toptitle from "@/components/Toptitle/Toptitle";
    import myconfig from "@/config";
    import axios from 'axios'
    import {Toast, Loading, Overlay} from 'vant';

    import {PostDataByVideo} from "@/api/order";


    import aliOss from "../../utils/aliOss";

    export default {
        name: "UploadVideo",
        data() {
            return {
                title: '选择视频',
                index: undefined,
                list: [],
                id: undefined,
                show: false
            }
        },
        created() {
            var arr = [
                {
                    url: '3',
                    order_id: this.$route.query.id
                }
            ]
            this.id = this.$route.query.id
            this.list = arr
        },
        methods: {
            handelonIndex(index) {
                this.index = index

            },
            // 返回布尔值
            beforeRead(file) {
                this.show = true
                // if (file.type !== 'image/jpeg') {
                //     Toast('请上传 jpg 格式图片');
                //     return false;
                // }
                return true;
            },
            afterRead(file) {
                // let url = myconfig.uploadUrl.img
                // let fd = new FormData()
                // fd.append('file', file.file)
                // axios.post(url, fd, {
                //     headers: {
                //         'Content-Type': 'multipart/form-data'
                //     }
                // }).then(res => {
                //     var arr = this.list
                //     arr[this.index].url = res.data.data
                //     this.list = arr
                //     this.show=false
                // }).catch(err => {
                //     alert(err)
                // })

                const op = aliOss.ossUploadFile(file)
                op.then(res => {
                    var arr = this.list
                    arr[this.index].url =  myconfig.oss_url + res.url
                    this.list = arr
                    console.log(this.list)
                    this.show = false
                })


            },
            clickToUpload() {

                for (let i = 0; i < this.list.length; i++) {
                    if (this.list[i].url === '3') {
                        Toast('第' + parseInt(i + 1) + '个视频没有添加视频，请先添加');
                        return false;
                    }
                }
                var temp = {
                    order_id: this.id,
                    video: this.list
                }
                PostDataByVideo(temp).then(res => {
                    this.$router.push({path: '/upload-succ'})

                })

            },
            toggleRetun() {
                this.$router.go(-1);//返回上一层
            },
            toggleAdd() {
                if (this.list.length === 5) {
                } else {
                    this.list.push({
                        order_id: this.id,
                        url: '3'
                    })
                }

            }
        },
        components: {
            Toptitle
        }
    }
</script>

<style lang="stylus" scoped>

    .fixed {
        line-height: 1.09rem;
        /* background: #e9375b; */
        border-radius: 1rem;
        font-family: Source Han Sans CN;

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
            padding-top: 0.266667rem;
            padding-bottom: 0.266667rem;
            border-top: 0.026667rem solid #ebeef5;

            .have-btn {
                margin: 0 auto 0.5rem;
                text-align: center;
                color: #fff;
                font-size: 0.48rem;
                font-weight: 500;
                background: #e9375b;
                border-radius: 1rem;
                width: 9.01rem;
                height: 1.09rem;
                line-height: 1.09rem;
                background: #e9375b;
                margin-left: 5%;
                margin-bottom: 0.24rem;
                font-family: Source Han Sans CN;
                display: flex;
                padding-left: 0.2rem;
                justify-content: center;
                position: fixed;
                z-index: 999;
                bottom: 0;
            }
        }
    }

    .order-wrap {
        position: absolute;
        min-height: 200px;
        background: #fff;
        width: 100%;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        padding-top: 10px;
        margin-top 1rem;
    }

    .upload-item {
        padding: 0 10px;
        overflow hidden;
    }

    .upload-title span {
        border-left: 2px solid #F08109;
        padding-left: 14px;
        color: #333;
        font-size: 0.48rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
    }

    .upload-content {
        text-align: center;
        margin: 20px auto;
    }

    .van-uploader__input-wrapper .van-button {
        width: 7.17rem;
        height: 4.27rem;
        color: #666;
    }

    .van-uploader__input-wrapper video {
        width: 7.17rem;
        height: 4.27rem;
        color: #666;
    }

    .upload-content p {
        color: #333;
        font-size: 12px;
    }

    .continue {
        border: 1px solid #F08109;
        width: 40%;
        text-align: center;
        padding: 6px 0;
        font-size 14px;
        border-radius 40px;
        margin: 20px auto 0;
        color: #F08109;
        position: relative;
        padding-left: 15px;
    }

    .continue .add-item {
        position: absolute;
        top: 0.25rem;
        left: 0.6rem;
    }

    .add-tips {
        font-size: 12px;
        color: #333;
        text-align center;
        margin-top: 10px;
    }

    .confirm-upload {
        margin 0.4rem auto;
        width: 9.01rem;
        height: 1.09rem;
        line-height 1.09rem;
        text-align center;
        font-size: 0.4rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        background: rgba(234, 55, 86, 1);
        border-radius: 1rem;
    }

    .van-loading {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>
