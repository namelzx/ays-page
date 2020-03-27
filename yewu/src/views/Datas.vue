<template>
    <div class="Datas">
        <div class="DatasBox">
            <!--  Tab 标签页组件   -->
            <van-tabs v-model="active">
                <van-tab title="我的">
                    <!-- 搜索框   --->
                    <div class="Da-search">
                        <div class="searchBox" @click="search">
                            输入关键词搜索
                        </div>
                    </div>
                    <div class="Stores">

                        <!-- 列表  -->
                        <Storelist :Storelist="Storelist"/>
                    </div>
                </van-tab>
                <van-tab title="全部">
                    <!-- 搜索框   --->
                    <div class="Da-search">
                        <div class="searchBox" @click="search">
                            输入关键词搜索
                        </div>
                    </div>
                    <div class="Stores">
                        <!-- 列表  -->
                        <Storelist :Storelist="Storelist"/>
                    </div>
                </van-tab>
            </van-tabs>
        </div>

        <!-- 安装 官派  -->
        <!--<div class="install">-->
            <!--<div class="install-Box" v-if="know_show" @click="knowShow">-->
                <!--<img src="../assets/install.png"/>-->
                <!--<div class="name">安装</div>-->
                <!--<div class="heng"></div>-->
            <!--</div>-->
            <!--<div class="install-Box" v-else @click="knowShow">-->
                <!--<img src="../assets/install.png"/>-->
                <!--<div class="name">官派</div>-->
                <!--<div class="heng"></div>-->
            <!--</div>-->
        <!--</div>-->


        <Tabbar/>
    </div>
</template>
<script>
    import Tabbar from "@/components/Tabbar";
    import Storelist from "@/components/Storelist";
    import {mapGetters} from 'vuex'
    import {GetDataByList} from '@/api/data'

    export default {
        name: "Datas",
        data() {
            return {
                listQuery: {
                    page: 1,
                    limit: 100,
                    user_id: undefined,
                    ordertype: 1,
                    type:2,
                },
                know_show: true,
                active: 0,
                num: 171,
                num2: 261,
                Storelist: [
                ]
            };
        },
        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },
        components: {
            Tabbar,
            Storelist
        },
        created(){
          this.getlist();
        },
        methods: {
            getlist() {
                this.listQuery.user_id=this.userInfo.id
                GetDataByList(this.listQuery).then(res => {
                    this.Storelist=res.data
                })
            },
            search() {
                this.$router.push({path: "/search"});
            },
            knowShow() {
                //切换知晓跟我的数据
                this.know_show = !this.know_show
            }
        },
        watch:{
          'active':function (e) {
              if(e===1){
                  this.listQuery.type=1
              }else{
                  this.listQuery.type=2
              }
              this.getlist()
            }
        },
    };
</script>
<style lang="scss" scoped>
    .Datas {
        width: 100%;
        overflow: hidden;
        .DatasBox {
            .van-tabs {
                background: #ffffff;
                /deep/ .van-tabs__wrap {
                    width: 100%;
                    position: fixed;
                    left: 0;
                    right: 0;
                    top: 0;
                    background-color: #ffffff;
                }
                /deep/ .van-tabs__nav--line {
                    width: 40%;
                    margin: 0 auto;
                }
                /deep/ .van-tab {
                    color: #999999;
                    font-size: 0.32rem;
                    font-weight: 400;
                }
                /deep/ .van-tab--active {
                    color: #000000;
                    font-size: 0.32rem;
                    font-weight: 400;
                }
                /deep/ .van-tabs__line {
                    width: 1.4rem !important;
                    bottom: 0.6rem;
                    height: 0.02rem;
                    background-color: #000000;
                }
                /deep/ [class*="van-hairline"]::after {
                    border: 0;
                }
                .Da-search {
                    position: fixed;
                    top: 1.173rem;
                    left: 0;
                    right: 0;
                    background-color: #ffffff;
                    padding-bottom: 0.2rem;
                    .searchBox {
                        width: 9.15rem;
                        margin: 0 auto;
                        font-size: 0.4rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        height: 0.8rem;
                        line-height: 0.8rem;
                        text-align: center;
                        border-radius: 0.4rem;
                        align-items: center;
                        background: #F1F1F1;
                        color: #999999;
                    }
                }
                .Stores {
                    margin-top: 2.2rem;
                    .Stores-screen {
                        display: flex;
                        justify-content: space-between;
                        width: 9.15rem;
                        margin: 0 auto 0.2rem;
                        .screen-left {
                            color: #333333;
                            font-size: 0.32rem;
                            .nums {
                                color: $color;
                                margin-left: 0.3rem;
                                margin-right: 0.3rem;
                            }
                        }
                        .screen-time {
                            color: #999999;
                            font-size: 0.27rem;
                        }
                    }
                    .Stores-not {
                        width: 10rem;
                        height: 0.1rem;
                    }
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
        .aaa {
            position: fixed;
            top: 3rem;
            z-index: 20;
        }
    }

</style>
