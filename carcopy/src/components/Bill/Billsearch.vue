<template>
  <div class="search">

    <div class="search-inp">
      <div class="inp-icon" @click="toggleRetun"><img src="@/assets/return.png" /></div>
      <input v-model="value" placeholder="输入账单相关信息" />
      <div class="inp-name" @click="onSearch">搜索</div>
    </div>

    <!-- 搜索内容  -->
    <div class="search-list" v-if="is_show">
      <div v-for="(item, index ) in list" v-if="item.income>0" >
        <sticky-slot class="stickyTop">
        <div class="date-pick">
          <div class="pick-icon" @click="showTimePick">
            <span>{{item.months}}</span>
            <div class="icon-pull"><img src="@/assets/pull-down.png" /></div>
          </div>
          <div class="in-out-come">
            <p class="in-come">收入¥{{item.income}}.00</p>
            <p class="out-come">支出¥{{item.spending}}.00</p>
          </div>
          <!--日期弹出框-->

        </div>
        </sticky-slot>
        <div class="bill-list">
          <div  v-for="ci of item.list" class="list-item border-bottom" @click="togowitg('/bill/billdetails')">
            <div class="item-left">
              <p v-if="ci.pay_type===1">安装费</p>
              <p v-if="ci.pay_type===2">余额提现</p>
              <p>{{ci.title}}</p>
              <p>{{ci.create_time}}</p>
            </div>
            <div class="item-right">
              <p class="in" v-if="ci.price_type===1"><span>+</span><span>{{ci.price}}</span></p>
              <p class="out" v-else><span>-</span><span>{{ci.price}}</span></p>
              <p><span>余额{{ci.balance}}</span></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import {GetShopidByList} from '@/api/money'
    import {mapGetters} from 'vuex'
    import stickySlot from '@/components/stickySlot/index.vue' // 对应存放的路径

    import Toptitle from "@/components/Toptitle/Toptitle";
export default {
  name: "billsearch",
  data() {
    return {
      value:'',
        list:[],
        is_show:false,
      currentDate: new Date(),
      minDate: new Date(2018, 0),
      showPick: false,
        listQuery:{
            time:undefined,
            type:3,
            shop_id:undefined,
            search:undefined,

        },
    };
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
  methods: {
      onSearch(){
          this.listQuery.text=this.value
          this.list=[]
          this.listQuery.shop_id=this.sele_shop.id
          GetShopidByList(this.listQuery).then(res => {
              this.list = res.data.data
              if(this.list.length>0){
                  this.is_show=true
              }
              console.log(this.list)
              this.income = res.data.income
              this.spending = res.data.spending
          })
      },
    toggleRetun() {
        this.$router.go(-1);//返回上一层
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
        this.$router.push({path:'/bill/billtime'})
      },
      getValues(e) {
        console.log(e);
        this.showTimePick()
      },
      togowitg(data){
          this.$router.push(data)
      }
    }
};
</script>
<style lang="stylus" scoped>
.search {
  .search-inp {
    margin: 0.2rem auto;
    width: 9.15rem;
    display flex;
    justify-content space-between;
    .inp-icon{
      width 0.6rem;
      height 0.6rem;
      margin-top: .15rem;
      img{
        width 100%;
        height 100%;
      }
    }
    input {
      width:6.5rem;
      height:0.83rem;
      background:rgba(241,241,241,1);
      border-radius:0.41rem;
      border 0;
      padding-left .3rem;
      margin-left -.6rem;
      font-size:0.4rem;
      color #333333;
    }
    input::-webkit-input-placeholder { /* WebKit browsers */
      color: #999999;
    }
    .inp-name{
      color #666666;
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      margin-top: .2rem;
    }
  }

  .search-list {
    .date-pick {
      background: #eee;
      padding: 10px 3%;
      display: flex;
    }
    .pick-icon {
        position: relative;
        border: 1px solid #e5e5e5;
        background #fff;
        width: 2rem;
        height: 0.7rem;
        font-size: 0.27rem;
        border-radius: 30px;
        display flex;
        align-items center;
        span{
            margin-left .2rem;
        }
        .icon-pull{
            margin-left .2rem;
            width .25rem;
            height .25rem;
            img{
                width 100%;
                height 100%;
            }
        }
    }

    .pick-icon .arrow-icon {
      position: absolute;
      top: 5px;
    }

    .in-out-come {
      width: 85%;
      text-align: right;
    }

    .in-out-come p {
      margin: 0;
      font-size: 12px;
      color: #666;
    }

    // 账单明细
    .list-item {
      display: flex;
      font-size: 12px;
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
      text-align: right;
      padding-top: 6px;
    }

    .item-right p:first-child.in {
      font-size: 18px;
      color: #CD4B4C;
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
  }
  .stickyTop {
    top: 0rem;
    z-index: 1;
  }
}
</style>
