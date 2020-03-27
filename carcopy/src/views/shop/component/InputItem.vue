<template>
    <div class="change-file">
        <div @click="toggleRetun">
            <Toptitle :title="title"/>
        </div>
        <div class="md">
        <van-cell-group v-if="!is_upload">


            <van-field v-model="datas" :placeholder="placeHolder" clearable/>
        </van-cell-group>


        <div style="    padding: 0.8rem 0.426667rem;">
            <Upload :front="fileList" :count="filecount" @handelUploade="afterFront" v-if="is_upload"></Upload>
        </div>
        <div class="save-btn" @click="saveData">保存</div>
        </div>
    </div>
</template>

<script>

    import Toptitle from "@/components/Toptitle/Toptitle";
    import Upload from "@/components/uploader";
    import {GetIdByenv, PostDataByfield, PostDataShopImg} from "@/api/shop";
    import {mapGetters} from 'vuex'

    export default {
        name: "InputItem",
        data() {
            return {
                title: this.$route.query.title,
                curPop: this.$route.query.curPop,
                datas: this.$route.query.detail,
                shopinfo: {},
                is_upload: false,
                img_url: undefined,
                filecount: 1,
                fileList: [
                    {
                        url:'',
                    }
                    // {url: 'http://aystest.10huisp.com/uploads/20200129/677734c8bdc1318a019872ddcf1d709f.jpg'},
                    // Uploader 根据文件后缀来判断是否为图片文件
                ]
            }
        },
        methods: {
            afterFront(e) {
                if (this.curPop !== 'photo') {
                    this.img_url = e.data
                } else {
                    this.fileList.push({url: e.data.data})
                }
            },
            toggleRetun() {
                this.$router.push('/manage-shop');//返回上一层
            },
            saveData() {
                let datas = {
                    datas: this.datas,
                    curPop: this.curPop
                }
                if (this.curPop === 'photo' || this.curPop === 'license'||this.curPop==='front') {

                    if (this.curPop === 'license') {
                        if (this.img_url !== undefined) {
                            var temp = {
                                value: this.img_url.data,
                                field: this.curPop,
                                id: this.sele_shop.id
                            }
                            this.shopinfo.license = this.img_url.data
                            this.$store.dispatch('shop/setShop', this.shopinfo)

                            PostDataByfield(temp).then(res => {
                            })

                        }
                    }

                    if (this.curPop === 'front') {
                        if (this.img_url !== undefined) {
                            var temp = {
                                value: this.img_url.data,
                                field: this.curPop,
                                id: this.sele_shop.id
                            }
                            this.shopinfo.front = this.img_url.data
                            this.$store.dispatch('shop/setShop', this.shopinfo)
                            PostDataByfield(temp).then(res => {
                            })

                        }
                    }

                    if (this.curPop === 'photo') {

                        let arr = []
                        for (let i = 0; i < this.fileList.length; i++) {
                            arr.push({url: this.fileList[i].url, shop_id: this.sele_shop.id})
                        }
                        let temp = {
                            shop_id: this.sele_shop.id,
                            img: arr
                        }
                        PostDataShopImg(temp).then(res => {
                            console.log(res)
                        })
                    }
                    this.$router.push('/manage-shop');//返回上一层


                }
                else {
                    this.$router.push({path: '/manage-shop', query: {datas}})
                }
            }
        },
        computed: {
            ...mapGetters([
                'sele_shop'
            ]),
            placeHolder() {
                if (this.curPop === 'name') {
                    return this.pHolder = '请输入店铺名'
                }
                if (this.curPop === 'addrDetail') {
                    return this.pHolder = '请输入详细地址'
                }
                if (this.curPop === 'user') {
                    return this.pHolder = '请输入联系人'
                }
                if (this.curPop === 'phone') {
                    return this.pHolder = '请输入联系人号码'
                }
                if (this.curPop === 'desc') {
                    return this.pHolder = '请输入店铺简介'
                }


            }
        },
        created() {

            this.shopinfo = this.sele_shop
            if (this.curPop === 'photo' || this.curPop === 'license'||this.curPop==='front') {
                if (this.curPop === 'photo') {

                    this.filecount = 1;

                    this.filecount = 5
                    GetIdByenv(this.sele_shop.id).then(res => {
                        var arr = []
                        for (let i = 0; i < res.data.length; i++) {
                            arr.push({url: res.data[i].url})
                        }
                        this.fileList = arr


                    })
                }
                if(this.curPop === 'license'){
                        this.fileList[0].url = this.sele_shop.license
                }
                if(this.curPop === 'front'){
                    this.fileList[0].url = this.sele_shop.front
                }
                // this.fileList[0].url=
                return this.is_upload = true
            }
        },
        components: {
            Toptitle,
            Upload
        }
    }
</script>

<style lang="stylus" scoped>
    .change-file {
        // position fixed;
        // top: 0;
        // left: 0;
        // right: 0;
        // bottom: 0;
        // background #f4f4f4
    }

    .save-btn {
        width: 60%;
        margin: 0 auto;
        border-radius: 40px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        padding: 10px;
        background: #ea3756;
        box-shadow: 0 0 3px 0 #ea3756;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 40px;
    }

    .change-file .van-uploader {
        padding: 30px 16px;
    }
    .md{
        margin-top 1rem;
    }
</style>
