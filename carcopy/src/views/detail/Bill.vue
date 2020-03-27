<template>
    <div class="bill-container">
        <div class="top_warp">
            <div @click="toggleRetun">
                <Toptitle :title="title"/>
            </div>
            <div class="search-bill" @click="tosearch('/bill/billsearch')">
                <img  class="11" @click="tosearch('/bill/billsearch')" src="@/assets/sou.png"/>
            </div>
        </div>

        <div v-if="search===1">

            <div class="tab">
                <div class="date-pick">
                    <div class="pick-icon" @click="showTimePick">
                        <span>{{daytime}}</span>
                        <div class="icon-pull"><img src="@/assets/pull-down.png"/></div>
                    </div>
                    <div class="in-out-come">
                        <p class="in-come">收入¥{{income}}.00</p>
                        <p class="out-come">支出¥{{spending}}.00</p>
                    </div>

                </div>
            </div>

        <div class="bill-list">
            <div class="list-item border-bottom" v-for="(item,index) in list" @click="togowitg(item)">
                <div class="item-left">
                    <p v-if="item.pay_type===1">
                        {{item.cost_title}}
                    </p>
                    <p v-if="item.pay_type===2">余额提现</p>
                    <p>{{item.title}}</p>
                    <p>{{item.create_time}}</p>
                </div>
                <div class="item-right">
                    <p class="in" v-if="item.price_type===1"><span>+</span><span>{{item.price}}</span></p>
                    <p class="out" v-else><span>-</span><span>{{item.price}}</span></p>
                    <p><span>余额{{item.balance}}</span></p>
                </div>
            </div>

        </div>
        </div>
        <div v-if="search===2">
          <div style="padding-top: 1.2rem;">

              <div v-for="cc,i in list">
                  <sticky-slot class="stickyTop">
                      <div class="tab">
                          <div class="date-pick">
                              <div class="pick-icon" @click="showTimePick">
                                  <span>{{cc.months}}</span>
                                  <div class="icon-pull"><img src="@/assets/pull-down.png"/></div>
                              </div>
                              <div class="in-out-come">
                                  <p class="in-come">收入¥{{cc.income}}.00</p>
                                  <p class="out-come">支出¥{{cc.spending}}.00</p>
                              </div>
                          </div>
                      </div>
                  </sticky-slot>

                  <div class="bill-list">
                      <div class="list-item border-bottom" v-for="(item,index) in cc.list" @click="togowitg(item)">
                          <div class="item-left">
                              <p v-if="item.pay_type===1">
                                  {{item.cost_title}}
                              </p>
                              <p v-if="item.pay_type===2">余额提现</p>
                              <p>{{item.title}}</p>
                              <p>{{item.create_time}}</p>
                          </div>
                          <div class="item-right">
                              <p class="in" v-if="item.price_type===1"><span>+</span><span>{{item.price}}</span></p>
                              <p class="out" v-else><span>-</span><span>{{item.price}}</span></p>
                              <p><span>余额{{item.balance}}</span></p>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
    import Toptitle from "@/components/Toptitle/Toptitle";
    import {mapGetters} from 'vuex'

    import {GetShopidByList} from '@/api/money'
    import stickySlot from '@/components/stickySlot/index.vue' // 对应存放的路径

    export default {
        name: "Bill",
        data() {
            return {
                search:2,
                // value: '',
                title: '账单',
                currentDate: new Date(),
                minDate: new Date(2019, 0),
                showPick: false,
                list: [],
                daytime: new Date,
                listQuery:{
                    time:undefined,
                    type:3,
                    shop_id:undefined,
                    search:undefined,

                },
                income: 0,
                spending: 0,
            }
        },
        components: {
            Toptitle,
            stickySlot
        },
        computed: {
            ...mapGetters([
                'userInfo',
                'sele_shop'
            ])
        },

        created() {


            let query=this.$route.query;
            console.log(query.type)
            if(query.type===undefined){
            this.daytime=this.totime(new Date())
            }else{
                this.listQuery.time=query.time
                this.listQuery.type=query.type
                this.listQuery.search=1;
                this.search=1;
                if(query.type===1){
                    this.daytime= query.time.substring(5,100)
                }else{
                    this.daytime= query.time[0].substring(5,100)+' '+query.time[1].substring(5,100)
                }
            }

            this.listQuery.shop_id=this.sele_shop.id
            GetShopidByList(this.listQuery).then(res => {
                this.list = res.data.data
                this.income = res.data.income
                this.spending = res.data.spending
            })
        },
        methods: {

            totime(date){

                let seperator1 = "-";
                let month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                return  month +seperator1 +strDate;
            },
            toggleRetun() {
                this.$router.push('/');//返回上一层
            },

            formatter(type, value) {
                if (type === 'year') {
                    return `${value}年`;
                } else if (type === 'month') {
                    return `${value}月`
                }
                return value;
            },
            showTimePick() {
                // this.showPick = !this.showPick
                this.$router.push({path: '/bill/billtime'})
            },
            getValues(e) {
                console.log(e);
                this.showTimePick()
            },
            togowitg(data) {
                let id = data.id
                this.$router.push({path: '/bill/billdetails', query: {id}})
            },
            tosearch(url){
                this.$router.push({path: url})
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .top_warp {
        position relative;
        /*padding-bottom .3rem;*/
        .search-bill {
            position: fixed;
            right: 0.5rem;
            top: .3rem;
            width: 0.65rem;
            z-index: 9999;
            height: 0.65rem;
            img {
                width 100%;
                height 100%;
            }
        }
    }
.sticky-warp{
    .date-pick {
        margin-top:0rem
        background: #eee;
        padding: .1rem 3%;
        display: flex;
        justify-content space-between;
    }

}
    //  时间选择
    .date-pick {
        margin-top 1.2rem
        background: #eee;
        padding: .1rem 3%;
        display: flex;
        justify-content space-between;
    }

    .pick-icon {
        position: relative;
        border: 1px solid #e5e5e5;
        background #fff;
        width: 1.68rem;
        height: 0.7rem;
        font-size: 0.27rem;
        border-radius: 30px;
        display flex;
        align-items center;
        span {
            margin-left .2rem;
        }
        .icon-pull {
            margin-left .2rem;
            width .25rem;
            height .25rem;
            img {
                width 100%;
                height 100%;
            }
        }
    }

    .in-out-come {
        width: 50%;
        font-size: .3rem;
        line-height 1.5;

        text-align right;
    }

    .in-out-come p {
        margin: 0;
        color: #666;
    }

    //  账单明细
    .list-item {
        display: flex;
        padding: 15px 3%;
    }

    .item-left p, .item-right p {
        margin: 0;
    }

    .item-left {
        width: 70%;
        color: #2b2b2b;
    }

    .item-left p:first-child {
        font-size: 14px;
    }

    .item-left p:nth-child(2) {
        margin: 7px 0;
    }

    .item-left p:last-child {
        color: #666;
    }

    .item-right {
        width: 30%;
        text-align right;
        padding-top: 6px;
    }

    .item-right p:first-child.in {
        font-size: 18px;
        color: #CD4B4C
    }

    .item-right p:first-child.out {
        font-size: 18px;
        color: #333;
    }

    .item-right p:first-child span:first-child {
        font-size: 14px;
        margin-right: 2px;
    }

    .item-right p:last-child span {
        font-size: 12px;
        color: #666;
    }

    .stickyTop {
        // top: 1.1rem;
        z-index: 1;
    }
</style>
