<template>
    <div class="upload-container">
        <div @click="toggleRetun">
            <Toptitle :title="title"/>
        </div>
        <div class="order-wrap">
            <van-swipe-cell v-for="(item,index) in list">
                <van-cell @click="togglePick(item)" :border="true" :title="item.realName" :value="item.shop_user_name"/>
                <template #right>
                    <van-button square type="danger" @click="handelDelete(item.id,index)" text="删除"/>
                </template>
            </van-swipe-cell>
            <div class="continue" @click="toggleAdd">
                <van-icon name="add-o" class="add-item"/>
                添加店员
            </div>
            <div class="add-tips">一个店铺最多10名店员,满额后不可再添加</div>
        </div>
        <van-popup v-model="show">
            <div class="content">
                <div class="title">请输入店员名称</div>
                <span class="names">添加店员名称</span>
                <van-cell-group>
                    <van-field v-model="realName" placeholder="请输入用户名"/>
                </van-cell-group>
                <div class="content-bottom">
                    <div class="cancel" @click="handelCancel()">取消</div>
                    <div @click="handelSaved()" class="1">确认添加</div>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
    import {SwipeCell} from 'vant';
    import {Field} from 'vant';

    import Toptitle from "@/components/Toptitle/Toptitle";
    import {Popup} from 'vant';
    import {mapGetters} from "vuex";

    import {PostDataBySave, GetIdByShop, GetIdByDelete} from "@/api/shop";

    export default {
        name: "UploadVideo",
        computed: {
            ...mapGetters(["sele_shop", 'userInfo'])
        },
        data() {
            return {
                show: false,
                title: '店员管理',
                index: undefined,
                list: [
                ],
                realName: '',
                id: undefined,
                show: false
            }
        },
        created() {
            this.id = this.$route.query.id
            this.getlist();
        },
        methods: {
            handelCancel() {
                this.show = false
            },
            togglePick(row) {
                console.log(row)
                this.$router.push({path: '/assistant/code', query: {user_id: row.id}});
            },
            handelDelete(id, index) {
                let temp = {
                    user_id: id,
                    shop_id: this.sele_shop.id
                }
                console.log(temp)
                GetIdByDelete(temp).then(res => {
                    this.list.splice(index, 1)
                    this.$toast('删除成功');
                })
            },
            getlist() {
                var temp = {
                    shop_id: this.sele_shop.id,
                    user_id: this.userInfo.id
                };
                GetIdByShop(temp).then(res => {
                    this.list = res.data?res.data:[]
                })
            },
            handelSaved() {
                var temp = {
                    shop_id: this.sele_shop.id,
                    realName: this.realName
                }
                PostDataBySave(temp).then(res => {
                    if (res.code === 10001) {
                        this.$toast(res.msg);
                        return
                    }
                    this.$toast('添加成功');
                    this.realName = '';
                    this.getlist()
                    this.show = !this.show

                })
                console.log(temp)
            },
            toggleRetun() {
                this.$router.go(-1);//返回上一层
            },
            toggleAdd() {
                if (this.list.length === 10) {
                    this.$toast('最多只能加10个店员!!!');
                    return true
                }
                this.show = true;
            }
        },
        components: {
            Toptitle,
            SwipeCell,
            Popup,
            Field
        }
    }
</script>

<style lang="stylus" scoped>

    .van-popup {
        width 80%;

        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: .2rem;
            position: relative;

            .title {
                text-align: center;
                height: 1rem;
                line-height: 1rem;
            }

            .names {
                text-align: center;
                height: .7rem;
                /*line-height: .7rem;*/
                color: #909399;
            }

            .van-cell {
                /*border: 1px solid #F2F6FC;*/
                width 90%;
                /*margin .3rem auto;*/
                line-height: 0;
            }

            .content-bottom {
                border-top: 1px solid #F2F6FC;
                height: 1rem;
                line-height: 1rem;
                display: flex;
                justify-content: space-between;

                div {
                    width: 50%;
                    text-align: center;
                }

                .cancel {
                    border-right: 1px solid #F2F6FC;
                    color: #909399;
                }
            }
        }
    }

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
        border: 1px solid #fc3869;
        width: 40%;
        text-align: center;
        padding: 6px 0;
        font-size 14px;
        border-radius 40px;
        margin: 20px auto 0;
        color: #fc3869;
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
