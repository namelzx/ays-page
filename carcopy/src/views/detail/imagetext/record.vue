<template>
    <div class="marketing">
        <!--   输入框内容      -->
        <div class="seek_top">
            <div class="marketing_seek">
                <img src="@/assets/return.png" @click="toggleRetun()">
                <input class="seek_toggle" v-model="listQuery.name" placeholder="输入关键字"/>
                <img v-if="listQuery.name!==''" @click.stop="bingempty()" class="empty_close" src="@/assets/empty.png"/>
            </div>
        </div>
        <div class="cate-bar">
            <div
                    class="bar-item"
                    :class="{active: curIndex === index}"
                    @click="changeBar(index)"
                    v-for="(item,index) of actionBar"
                    :key="item.id"
            >
                <span>{{ item.name }}</span>
                <span>{{item.total}}</span>
            </div>
        </div>


        <!--    列表内容    -->
        <div class="list-warp">
            <div class="record" v-for="(item,index) in list" :key="index">
                <div class="record-box">
                    <div class="record-title">
                        <div class="title_status">
                            <span >{{item.status}}</span>
                        </div>
                        <div class="record-time">{{item.create_time}}</div>
                    </div>
                    <div class="record-content">
                        <div class="imgs" v-if="item.type==='图文'">
                            <img :src="item.imagetext.assembly"/>
                        </div>
                        <div class="imgs" v-if="item.type==='视频'">
                            <video :src="item.video[0].url"/>
                        </div>
<!--                        视频-->
                        <div class="details">
                            <div class="desc">
                                {{item.order.model_title}}
                            </div>

                            <div class="mating">{{item.order.product_titile}}</div>
                            <div class="button" v-if="item.status==3 || item.status==4">
                                <div class="button-compile">编辑</div>
                                <div class="button-del">删除</div>
                            </div>
                        </div>
                    </div>
                    <!--   驳回理由    -->
                    <div class="record-reject" v-if="item.status==3">
                        <div class="record-reject-liyou">驳回理由：<span>{{item.reason}}</span></div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import {GetImagesTextItmeByWhere} from '@/api/marketing'
    import {mapGetters} from 'vuex'

    export default {
        name: "record",
        data() {
            return {
                listQuery: {
                    limit: 20,
                    page: 1,
                    name: "",
                },
                list: [
                ],
                actionBar: [
                    {
                        id: "1",
                        name: "全部",
                        status: 0,
                        total: 0
                    },
                    {
                        id: "2",
                        name: "已上传",
                        status: 2,
                        total: 0
                    },
                    {
                        id: "3",
                        name: "已发布",
                        status: 3,
                        total: 0
                    },
                    {
                        id: "4",
                        name: "驳回",
                        status: 4,
                        total: 0
                    },
                    {
                        id: "5",
                        name: "草稿",
                        status: 2,
                        total: 0
                    }
                ],
                curIndex: 0,
            }
        },
        components: {
            // list
        },
        computed: {
            ...mapGetters(['userInfo'])
        },
        created() {
            this.listQuery.user_id = this.userInfo.id
            this.getlist();
        },
        methods: {
            getlist() {
                    GetImagesTextItmeByWhere(this.listQuery).then(res=>{
                        this.list=res.data.data
                    })
            },
            //点击清空输入框内容
            bingempty() {
                this.listQuery.name = ''
            },
            toggleRetun() {
                this.$router.go(-1);//返回上一层
            },
            changeBar(idx) {
                this.curIndex = idx;
                this.listQuery.status = idx;
                if (idx > 0) {
                    this.listQuery.status = idx;
                }
                this.listQuery.page = 1;
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .marketing {
        position: fixed;
        overflow: auto;
        height: 100%;
        background: #f2f2f2;
        width: 100%;
    }

    .seek_top {
        position fixed;
        top 0;
        left 0;
        right 0;
        background-color #ffffff;
        z-index 20;
    }

    .cate-bar {
        overflow-y: auto; /* 可滑动 */
        white-space: nowrap;
        display: -webkit-box;
        /* height 1.2rem; */
        line-height: 1.2rem;
        position: fixed;
        top: 1.2rem;
        background: #fff;
        width: 100%;
        z-index: 100;
    }

    .bar-item {
        // width 17%;
        width 20%;
        /*padding: 0 0.1rem;*/
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

    .bar-item span:nth-child(2) {
        color: #ea3756;
    }

    .bar-item.active {
        position: relative;
    }

    .bar-item.active::before {
        position: absolute;
        content: '';
        top: 1rem;
        left: 0;
        right: 0;
        width: 40%;
        margin: 0 auto;
        height: 2px;
        background: #434343;
        z-index: 10;
        transition: all 1s;
    }

    .bar-item.active span:nth-child(1) {
        color: #333333;
    }

    .marketing_seek {

        height 1.2rem;
        width 9.25rem;
        margin 0 auto;
        display flex
        flex-direction row;
        justify-content space-between;
        align-items center;
        position relative;

        .empty_close {
            position absolute;
            top: .3rem;
            right 0.2rem;
            width: .6rem;
            height .6rem;
        }

        img {
            width: 0.6rem;
            height: 0.6rem;
        }

        .seek_toggle {

            width: 8rem;
            height: 0.85rem;
            line-height 0.85rem;
            background: rgba(239, 239, 239, 1);
            border-radius: 1rem;
            padding-left .5rem;
            border: 0;
        }

        .seek_toggle::-ms-input-placeholder {
            text-align: center;
        }

        .seek_toggle::-webkit-input-placeholder {
            text-align: center;
        }
    }


    .list-warp {
        padding-top 2.4rem;
        width 10rem;

        .record {
            width: 10rem;
            background-color #ffffff;
            margin-top .4rem;

            .record-box {
                padding .45rem;

                .record-title {
                    display flex;
                    flex-direction row;
                    justify-content space-between;
                    height .8rem;

                    .title_status {
                        font-size: 0.35rem;
                        font-family: Source Han Sans CN;
                        font-weight: bold;
                        color: rgba(234, 55, 86, 1);
                        margin-left .47rem;
                    }

                    .record-time {
                        font-size: 0.32rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: rgba(102, 102, 102, 1);
                    }
                }

                .record-content {
                    display flex;
                    flex-direction row;
                    justify-content space-between;

                    .imgs {
                        width 2.48rem;
                        height 2.48rem;
                        img {
                            width: 100%;
                            height 100%
                        }
                        video{
                            width 2.48rem;
                            height 2.48rem;
                        }
                    }

                    .details {
                        width 6.29rem;
                        display flex;
                        flex-direction column;
                        justify-content center;

                        .desc {
                            color #333333;
                            font-size 0.37rem;
                            line-height 1.5;
                            overflow: hidden;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                        }

                        .mating {
                            margin-top: .35rem;
                            font-size: 0.35rem;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: rgba(51, 51, 51, 1);
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }

                        .button {
                            margin-top: .4rem;
                            display flex;
                            justify-content flex-end;
                            font-size: 0.32rem;
                            font-family: Source Han Sans CN;
                            font-weight: 500;
                            color: rgba(255, 255, 255, 1);

                            .button-compile {
                                width: 1.6rem;
                                height: 0.83rem;
                                line-height 0.83rem;
                                text-align center;
                                background: rgba(234, 55, 86, 1);
                                border-radius: 0.4rem;
                            }

                            .button-del {
                                width: 1.6rem;
                                height: 0.83rem;
                                line-height 0.83rem;
                                text-align center;
                                border: 1px solid rgba(234, 55, 86, 1);
                                border-radius: 0.4rem;
                                color #EA3756;
                                box-sizing border-box;
                                margin-left .2rem;
                            }
                        }
                    }
                }

                .record-reject {
                    width 9.15rem;
                    padding .15rem 0;
                    background: rgba(248, 248, 248, 1);
                    font-size: 0.27rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: rgba(234, 55, 86, 1);
                    margin .6rem 0 .3rem;
                    border-radius .2rem;

                    .record-reject-liyou {
                        margin-left .2rem;
                    }
                }
            }

        }
    }

</style>
