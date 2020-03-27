<template>

    <div class="Search">
        <div class="Da-search">

            <div class="searchBox">
                <div class="return-icon" @click="calendar">
                    <img src="@/assets/return.png"/>
                </div>
                <input class="inp" placeholder="输入关键字搜索" v-model="value"/>
                <div class="calendar" @click="souClick('搜索')" v-if="!showMes">搜索</div>
                <div class="calendar" @click="souClick('取消')" v-else>取消</div>
            </div>
        </div>

        <!-- 消息列表  -->
        <div class="content" v-if="showMes">
            <Storelist v-if="Storelist" :Storelist="Storelist"/>
            <div class="not" v-else>暂无更多信息</div>
        </div>

        <!-- 安装 官派  -->

        <div class="install" v-if="value=='阿帕奇' && showMes">
            <div class="install-Box">
                <img src="@/assets/install.png"/>
                <div class="name">安装</div>
                <div class="heng"></div>
            </div>
            <div class="install-Box">
                <img src="@/assets/install.png"/>
                <div class="name">官派</div>
                <div class="heng"></div>
            </div>
        </div>


    </div>


</template>
<script>
    import Storelist from "@/components/Storelist";
    import {mapGetters} from 'vuex'
    import {GetDataByList} from '@/api/data'

    export default {
        name: "Search",
        components: {
            Storelist
        },
        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },
        data() {
            return {
                listQuery: {
                    page: 1,
                    limit: 100,
                    user_id: undefined,
                    ordertype: 1,
                    type: 2,
                },
                value: '',
                showMes: false,
                Storelist: [

                ]
            };
        },

        methods: {
            getlist() {
                this.listQuery.user_id = this.userInfo.id
                this.listQuery.shopname=this.value
                GetDataByList(this.listQuery).then(res => {
                    this.Storelist = res.data
                })
            },
            calendar() {
                this.$router.go(-1);//返回上一层
            },
            souClick(e) {
                if (e === '搜索') {
                    console.log(1)
                    this.showMes = true
                    this.getlist();
                }
                else {
                    this.showMes = false
                    this.value = ''
                }
            }
        }
    };
</script>
<style lang="scss" scoped>
    .Search {
        .Da-search {
            z-index: 10;
            background-color: #ffffff;
            padding-top: .2rem;
            padding-bottom: .2rem;
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            .searchBox {
                width: 9.15rem;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                height: 0.75rem;
                align-items: center;
                .return-icon {
                    width: 0.7rem;
                    height: 0.7rem;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .inp {
                    border-radius: 0.41rem;
                    padding-left: .5rem;
                    font-size: 0.32rem;
                    width: 7rem;
                    height: 0.83rem;
                    line-height: 0.83rem;
                    font-size: 0.4rem;
                    border: 0;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #000000;
                    background: #f1f1f1;
                }
                input::-webkit-input-placeholder {
                    color: #999999;
                }
                .calendar {
                    font-size: 0.4rem;
                    font-weight: 400;
                    color: #666666;
                }
            }
        }
        .content {
            margin-top: 1.5rem;
            .not {
                text-align: center;
                margin-top: 2.5rem;
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #666666;
            }
        }
    }

    .install {
        position: fixed;
        bottom: 1.6rem;
        right: 0.13rem;
        width: 0.96rem;
        z-index: 10;
        .install-Box {
            width: 0.96rem;
            height: 0.96rem;
            position: relative;
            margin-top: 0.4rem;
            img {
                width: 100%;
                height: 100%;
            }
            .name {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                height: 0.96rem;
                line-height: 0.96rem;
                text-align: center;
                color: #ffffff;
                font-size: 0.32rem;
            }
            .heng {
                position: absolute;
                top: 0.75rem;
                width: 0.33rem;
                height: 0.02rem;
                z-index: 11;
                background-color: #ffffff;
                left: 0.32rem;
            }
        }
    }
</style>
