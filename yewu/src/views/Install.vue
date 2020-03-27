<template>
<div>
  <div class="top_title" @click="toggleRetun">
      <Toptitle  />
    </div>
  <div class="install-container">
    <div class="seach-bar">
      <div class="barBox">
        <div class="input" @click="toggleHistory">输入关键词搜索</div>
        <div class="bar-icon" @click="calendar"><img src="@/assets/calendar.png" /></div>
      </div>
    </div>


    <div>
      <div  class="content-data">
        <div class="data-count">共<span>{{total}}</span>单</div>
        <div class="data-day">
          <span>日期筛选：</span>
          <span class="day-time">{{listQuery.startTime}}-{{listQuery.endTime}}</span>
        </div>
        <div class="data-eliminate" @click="eliminClick">
          <div class="eliminate-icon"><img src="@/assets/eliminate.png" /></div>
          <div>清除日期</div>
        </div>
      </div>
<div style="margin-top: 2rem">
      <Orderlist :orderlist="orderlist" :num="num" />
</div>
    </div>


  </div>
  <!--  日期 -->

    <van-popup class="popup" v-model="show" position="bottom" >
      <div class="times">
        <div class="times-title">选择日期</div>
        <div class="times-day">
          <div class="day-start" @click="reelect">{{startTime}}</div>
          <div class="day-suspend"></div>
          <div class="day-end">{{endTime}}</div>
        </div>
      </div>
      <van-datetime-picker v-if="pickerShow" v-model="currentDate"  :item-height="65"  type="date" :show-toolbar="false" />
      <van-datetime-picker v-else v-model="currentDate2"  :item-height="65"  type="date" :show-toolbar="false" />

      <div class="operation">
        <div class="open-on" @click="onCancel">取消</div>
        <div class="open-on on-ok" @click="confirm">确定</div>
      </div>
    </van-popup>
    </div>
</template>

<script>
import Toptitle from "@/components/Toptitle/Toptitle";
import Orderlist from "@/components/Orderlist";
import {mapGetters} from 'vuex'
import {GetDataByList ,PostNoteByAdd} from '@/api/order'

export default {
  name: "Install",
  data() {
    return {
      title: "安装单列表",
      num: 0, //tab栏
      showRate: true,
      rate: 3.5,
      value: "",
      orderlist: [


      ],
      show: false,
      pickerShow: true,
      startTime: "", //开始时间
      endTime: "", //截止时间
      currentDate: new Date(),
      currentDate2: new Date(),
        total:0,
        listQuery:{
            page:1,
            limit:20,
            user_id:undefined,
        },
    };
  },
  components: {
    Orderlist,
    Toptitle
  },
    created(){
    let { startTime,endTime}= this.$route.query
        this.listQuery.startTime=startTime
        this.listQuery.endTime=endTime
        this.getlist();

    },
    computed: {
        ...mapGetters([
            'userInfo'
        ])
    },
  methods: {

      getlist(){
          this.listQuery.user_id=this.userInfo.id
          GetDataByList(this.listQuery).then(res=>{
              this.orderlist=res.data.data
              this.total=res.data.total
          })
      },
    toggleRetun() {
      this.$router.go(-1);//返回上一层
    },
    toggleHistory() {
      this.$router.push('/order/orderhistory')
    },
    timeFormat(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      return year + "-" + month + "-" + day;
    },
    calendar() {
      this.show = true;
    },
    //确定
    confirm() {
      if (this.pickerShow) {
        this.startTime = this.timeFormat(this.currentDate);
        this.pickerShow = false;

        console.log('开始时间')

          this.listQuery.startTime=   this.startTime
      } else {
        this.endTime = this.timeFormat(this.currentDate2);
        this.listQuery.endTime= this.endTime
        this.show = false;
          this.getlist();

          this.pickerShow = true;
          console.log('结束时间')
      }
    },
    //取消
    onCancel() {
      this.show = false;
    },
    //选择第一个起始时间
    reelect() {
        this.pickerShow = true;
        this.endTime = ''
    },
    eliminClick() {
      this.startTime = ''
      this.endTime = '',
      this.$router.push({path:'/order'})
    }
  }
};
</script>

<style lang="scss" scoped>

  .top_title {
    /*position: absolute;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    height: 40px;
    width: 100%;
  }
  .install-container{

  }
.seach-bar {
  width: 10rem;
  background: #ffffff;
  background-color: #fff;
  /*height: 1.2rem;*/
  position: fixed;
  top: 1rem;
  z-index: 999;

  .barBox {
    position: fixed;
    top: 8px;
    left: 8%;
    width: 9.15rem;
    /*margin: 0.1rem auto 0;*/
    display: flex;
    justify-content: space-between;
    align-items: center;
    .input{
      width: 8rem;
      height:0.83rem;
      line-height: 0.83rem;
      text-align: center;
      background-color: #F1F1F1;
      border-radius: 0.36rem;
      color: #999999;
      font-size: 0.4rem;
    }
    .bar-icon {
      width: 0.64rem;
      height: 0.64rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}

.cate-bar {
  overflow-y:auto;/*可滑动*/
  white-space: nowrap;
  display: -webkit-box;
  height: .8rem;
}

.bar-item {
  width: 18%;
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
.cate-bar .bar-item.active span {
  padding: 4px;
  border-bottom: 2px solid #434343;
  color: #333;
  border-radius: 2px;
  font-size: 0.45rem;
}

.popup {
  padding-bottom: .8rem;
    .times {
      width: 10rem;
      margin-top: 0.5rem;
      height: 2rem;
      .times-title {
        text-align: center;
        font-size: 0.4rem;
        color: #333333;
      }
      .times-day {
        margin: 0 auto;
        width: 7rem;
        display: flex;
        justify-content: space-between;
        color: #999999;
        .day-start {
          text-align: center;
          width: 2.13rem;
          height: .6rem;
          padding-bottom: 0.05rem;
          color: #333333;
          font-size: 0.37rem;
          border-bottom: 1px solid rgba(220, 220, 220, 1);
        }
        .day-suspend {
          width: 0.6rem;
          height: 1px;
          background: #333333;
          margin-top: 0.4rem;
        }
        .day-end {
          text-align: center;
          width: 2.13rem;
          height: .6rem;
          padding-bottom: 0.1rem;
          color: #333333;
          font-size: 0.37rem;
          border-bottom: 1px solid rgba(220, 220, 220, 1);
        }
      }
    }
    .operation {
      width: 8.5rem;
      margin: 0.7rem auto 0;
      padding-bottom: 1rem;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.4rem;
      align-items: center;
      .open-on {
        width:3.89rem;
        height:1.09rem;
        line-height: 1.09rem;
        text-align: center;
        border:1px solid rgba(234,55,86,1);
        border-radius:1rem;
        color: #EA3756;
      }
      .on-ok{
        background: #EA3756;
        color: #ffffff;
      }
    }
}
  .content-data{
    padding: .3rem 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 1rem;
    background: #ffff;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    .data-count{
      font-size:0.32rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color: #333333;
      span{
        color: #CD4B4C;
        margin: 0 .1rem;
      }
    }
    .data-day{
      color: #666666;
      font-size:0.27rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      .day-time{
        margin-left: .1rem;
      }
    }
    .data-eliminate{
      color: #666666;
      font-size: 0.32rem;
      display: flex;
      .eliminate-icon{
        width: 0.32rem;
        height: 0.32rem;
        margin-right: 0.25rem;
        margin-top: .04rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
