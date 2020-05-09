<template>
    <div class="marketing">
        <!--   输入框内容      -->
        <div class="seek_top">
            <div class="marketing_seek">
                <img src="@/assets/return.png" @click="toggleRetun()">
                <input class="seek_toggle" v-model="listQuery.name" placeholder="输入关键字" />
                <img v-if="listQuery.name!==''" @click.stop="bingempty()" class="empty_close" src="@/assets/empty.png" />
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
        <div>

        </div>



    </div>
</template>

<script>
    // import list from './../component/Marketinglist'
    export default {
        name: "record",
        data() {
            return {
                listQuery: {
                    limit: 20,
                    page: 1,
                    name:"",
                },
                list:[],
                actionBar: [
                    {
                        id: "1",
                        name: "全部",
                        status: 0,
                        total: 0
                    },
                    {
                        id: "2",
                        name: "待确认",
                        status: 2,
                        total: 0
                    },
                    {
                        id: "3",
                        name: "待安装",
                        status: 3,
                        total: 0
                    },
                    {
                        id: "4",
                        name: "待审核",
                        status: 4,
                        total: 0
                    },
                    {
                        id: "5",
                        name: "驳回",
                        status: 2,
                        total: 0
                    },
                    {
                        id: "6",
                        name: "已结算",
                        status: 2,
                        total: 0
                    },
                    {
                        id: "7",
                        name: "已退货",
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
        methods:{
            //点击清空输入框内容
            bingempty(){
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
                this.getlist();
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .seek_top{
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
        top: 1rem;
        background: #fff;
        width: 100%;
        z-index: 100;
    }

    .bar-item {
        // width 17%;
        padding: 0 0.1rem;
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
    .marketing_seek{

        height 1.2rem;
        width 9.25rem;
        margin 0 auto;
        display flex
        flex-direction row;
        justify-content space-between;
        align-items center;
        position relative;
        .empty_close{
            position absolute;
            top: .3rem;
            right 0.2rem;
            width: .6rem;
            height .6rem;
        }
        img{
            width:0.6rem;
            height:0.6rem;
        }
        .seek_toggle{

            width:8rem;
            height:0.85rem;
            line-height 0.85rem;
            background:rgba(239,239,239,1);
            border-radius:1rem;
            padding-left .5rem;
            border: 0;
        }
        .seek_toggle::-ms-input-placeholder{
                  text-align: center;
              }
        .seek_toggle::-webkit-input-placeholder{
                  text-align: center;
        }
    }



</style>
