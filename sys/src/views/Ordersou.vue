<template>
    <!-- 订单--安装单搜索 -->
    <div class="Search">
        <div class="Da-search">

            <div class="searchBox">
                <div class="return-icon" @click="calendar">
                    <img src="@/assets/return.png"/>
                </div>
                <input class="inp" placeholder="请输入关键词搜索" v-model="listQuery.title"/>
                <div class="calendar" @click="souClick('搜索')" v-if="!showMes">搜索</div>
                <div class="calendar" @click="souClick('取消')" v-else>取消</div>
            </div>
        </div>

        <!-- 消息列表  -->
        <div class="content" v-if="showMes">
            <Orderlist v-if="orderlist.length>0" :orderlist="orderlist" :num="num"/>
            <div v-else class="content-not">暂无更多信息</div>
        </div>


    </div>
</template>

<script>

    import {GetDataByList} from '@/api/order';

    import Orderlist from '@/components/Orderlist';
    import {mapGetters} from 'vuex';

    export default {
        name: "Ordersou",
        data() {
            return {
                value: '',
                showMes: false,
                num: 0,
                listQuery: {
                    limit: 20,
                    page: 1,
                    shop_id: undefined,
                },

                orderlist: [

                ],
            }
        },
        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },
        components: {
            Orderlist
        },
        created() {

            // this.getlist()
        },
        methods: {
            getlist() {
                this.listQuery.openid = this.userInfo.openid
                GetDataByList(this.listQuery).then(res => {
                    this.orderlist = res.data.data
                    console.log(this.orderlist)

                })
            },
            calendar() {
                this.$router.go(-1);//返回上一层
            },
            souClick(e) {
                if (e === '搜索') {
                    //   if(this.value!==''){

                    //   }

                    this.showMes = true
                    this.getlist();

                }
                else {
                    this.showMes = false
                    this.value = ''
                }


            }
            // toggleResult() {
            //     this.$router.push({path:'/message/messageResult'})
            // }
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
                    // margin-top: .1rem;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .inp {
                    border-radius: 0.36rem;
                    padding-left: .5rem;
                    font-size: 0.32rem;
                    width: 7.2rem;
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
            margin-top: 1.2rem;
            .content-not {
                margin-top: 3rem;
                text-align: center;
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: rgba(102, 102, 102, 1);
            }
        }
    }
</style>
