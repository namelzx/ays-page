<template>
  <!--  营业时间  -->
  <div class="hours">
    <div @click="toggleRetun" class="toptitle">
        <Toptitle :title="title" />
    </div>
    <div class="hoursBox">

      <!--   营业段时间  -->
      <div v-if="showSection">
        <div class="hours-section">
          <div class="title">营业时间段</div>
          <div class="section-right" @click="showPuoup">
            <div class="right-name">{{startTime}}-{{endTime}}</div>
            <div class="right-fx">
              <img src="../../assets/right-fx.png" />
            </div>
          </div>
        </div>
      </div>


      <!--  删除完成按钮  -->
      <div v-if="!showSection" class="hou-buttom" @click="cilckShowbottom">完成</div>

      <!-- 弹出时间选择层  -->
      <!-- <div>
        <van-popup
          v-model="show"
          position="bottom"
          :style="{ height: '40%' }"
        >
          <van-datetime-picker
            v-model="currentTime"
            type="time"
            :min-hour="10"
            :max-hour="20"
            @cancel="showCancel"
            @confirm="showConfirm"
          />
        </van-popup>
      </div> -->

      <van-popup class="popup" v-model="show" position="bottom" :style="{ height: '60%' }">
        <div class="times">
          <div class="times-title">选择营业时间段</div>
          <div class="times-day">
            <div class="day-start" @click="reelect">{{startTime}}</div>
            <div class="day-suspend"></div>
            <div class="day-end">{{endTime}}</div>
          </div>
        </div>
        <van-datetime-picker v-if="pickerShow" v-model="currentDate"  type="time" :show-toolbar="false" />
        <van-datetime-picker v-else v-model="currentDate2"  type="time" :show-toolbar="false" />

        <div class="operation">
          <div class="open-on" @click="onCancel">取消</div>
          <div class="open-on on-ok" @click="confirm">确定</div>
        </div>
      </van-popup>

    </div>
  </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
  name: "Hours",
  data() {
    return {
      title:'营业时间',
      showSection: true,
      deletaIndex:'',
      // show: false,
      currentTime:'12:00',
      show: false,
      pickerShow: true,
      startTime: "09:00", //开始时间
      endTime: "22:00", //截止时间
      currentDate: '09:00',
      currentDate2: '22:00'
    };
  },
  methods: {
    toggleRetun() {
      this.$router.go(-1);//返回上一层
    },
    clickShows() {
      this.showSection = !this.showSection;
    },
    showDeleta(index) {
      this.deletaIndex = index
      console.log(index);
    },
    cilckShowbottom() {
      this.showSection = !this.showSection;
    },
    showPuoup() {
      this.show = !this.show
    },
    calendar() {
      this.show = true;
    },
    //确定
    confirm() {
      //   this.show = false;
      if (this.pickerShow) {
        // this.startTime = this.timeFormat(this.currentDate);
        this.startTime = this.currentDate;
        this.pickerShow = false;
      } else {
        // this.endTime = this.timeFormat(this.currentDate2);
        this.endTime =this.currentDate2;
        // this.pickerShow = true
        this.show = false;
        this.pickerShow = true;
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
      this.endTime = ''
    }
  },
  components:{
      Toptitle
  }
};
</script>
<style lang="stylus" scoped>
.hours {
  overflow: hidden;

  .hoursBox {
    width: 9.15rem;
    margin: 0 auto;

    .hours-add {
      height: 1rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .add-jia {
        width: 0.43rem;
        height: 0.43rem;
        border: 1px solid rgba(0, 0, 0, 1);
        border-radius: 0.13rem;
        margin-left: 0.37rem;

        .imgs {
          margin-top: 0.05rem;
          margin-left: 0.1rem;
          width: 0.25rem;
          height: 0.25rem;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .hours-section {
      height: 1.15rem;
      align-items: center;
      border-bottom: 1px solid #DCDCDC;
      display: flex;
      justify-content: space-between;

      .title {
        font-size: 0.4rem;
        color: #333333;
      }

      .section-right {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .right-name {
          width: 5rem;
          text-align: right;
          color: #999999;
          font-size: 0.4rem;
        }

        .right-fx {
          margin-left: 0.3rem;
          width: 0.3rem;
          height: 0.3rem;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .hours-deleta {
      height: 1.15rem;
      align-items: center;
      display: flex;
      justify-content: space-between;
      .deleta-icon {
        width: 0.43rem;
        height: 0.43rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .deleta-quantum {
        height: 1.15rem;
        width 8.29rem;
        display flex;
        align-items center;
        justify-content space-between;
        border-bottom 1px solid #DCDCDC;
        .title {
          font-size: 0.4rem;
          color: #333333;
        }
        .section-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;

          .right-name {
            width: 5rem;
            text-align: right;
            color: #999999;
            font-size: 0.4rem;
          }

          .right-fx {
            margin-left: 0.3rem;
            width: 0.3rem;
            height: 0.3rem;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }

    .hou-buttom{
      position absolute;
      bottom 2rem;
      left 0;
      right 0;
      margin 0 auto;
      width:7.95rem;
      height:1.09rem;
      line-height 1.09rem;
      text-align center;
      background:rgba(234,55,86,1);
      box-shadow:0rem 0rem 0rem 0rem rgba(234,55,86,0.56);
      border-radius:1rem;
      color #fff;
      font-size 0.4rem;
    }
  }
  .popup {
      padding-bottom .8rem;
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
              width: 1.5rem;
              height: .6rem;
              padding-bottom: 0.05rem;
              color: #333333;
              font-size: 0.37rem;
              border-bottom: 1px solid rgba(220, 220, 220, 1);
            }
            .day-suspend {
              width: 0.8rem;
              height: 1px;
              background: #DCDCDC;
              margin-top: 0.4rem;
            }
            .day-end {
              text-align: center;
              width: 1.5rem;
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
          margin: 0.2rem auto 0;
          padding-bottom: 1rem;
          height: 1rem;
          display: flex;
          justify-content: space-between;
          font-size: 0.4rem;
          align-items: center;
          .open-on {
            width:3.89rem;
            height:1.09rem;
            line-height 1.09rem;
            text-align center;
            border:1px solid rgba(234,55,86,1);
            border-radius:1rem;
            color #EA3756;
          }
          .on-ok{
            background #EA3756;
            color #ffffff;
          }
        }
    }
  }
</style>