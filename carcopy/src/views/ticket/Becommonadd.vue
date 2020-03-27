<template>
<!-- 添加通用券 -->
    <div>
        <div @click="toggleRetun" class="toptitle">
            <Toptitle :title="title" />
        </div>
        <!-- 设置最低消费 -->
        <div class="set-add">
            <div class="add-fill">
                <div class="fill-warp">
                    <div>通用标题</div>
                    <div class="fill-nums">
                        <input
                            v-model="setlist.title"
                            placeholder="请输入减免金额" />
                    </div>
                </div>
            </div>
            
            <div class="add-fill">
                <div class="fill-warp">
                    <div>使用条件</div>
                    <div class="fill-nums">
                        <input
                            v-model="setlist.condition"
                            placeholder="请输入使用条件" />
                    </div>
                </div>
            </div>
            <div class="add-fill" @click="calendar">
                <div class="fill-warp">
                    <div>有效期</div>
                    <div class="fill-nums">
                        <div class="nums-time" v-if="data_show">{{endTime===''?'请选择有效日期':startTime+'-'+endTime}}</div>
                        <div class="nums-time" v-else>{{sky_time===''?'请选择有效日期':sky_time}}</div>
                        <div class="nums-icon"><img src="@/assets/right-fx.png" /></div>
                    </div>
                </div>
            </div>
            <div class="add-get">
                <div class="get-warp">
                    <div class="warp-title">领取须知</div>
                    <div class="warp-desc">
                        <textarea v-model="value"></textarea>
                    </div>
                </div>
            </div>
        </div>


        <!-- 选择有效期 -->
        <van-popup class="popup" v-model="show" position="bottom" :style="{ height: '60%' }">
            <div v-if="data_show">
                <div class="times">
                    <div class="times-get" @click="getShow">领取生效</div>
                    <div class="times-title">固定日期</div>
                    <div class="times-day">
                    <div class="day-start" @click="reelect">{{startTime}}</div>
                    <div class="day-suspend"></div>
                    <div class="day-end">{{endTime}}</div>
                    </div>
                </div>
                <van-datetime-picker v-if="pickerShow" v-model="currentDate"  type="date" :show-toolbar="false" />
                <van-datetime-picker v-else v-model="currentDate2"  type="date" :show-toolbar="false" />

                <div class="operation">
                    <div class="open-on" @click="onCancel">取消</div>
                    <div class="open-on on-ok" @click="confirm">确定</div>
                </div>
            </div>

            <div v-else>
                <div class="times">
                    <div class="times-get" @click="getShow">固定日期</div>
                    <div class="times-title">领取生效</div>
                    <div class="times-names">
                        自领取之日
                    </div>
                </div>
                <div class="pocker">
                    <van-picker :columns="columns" @change="onChange" />
                    <div class="pocker_title">有效</div>
                </div>
                <div class="operation">
                    <div class="open-on" @click="onCancel">取消</div>
                    <div class="open-on on-ok" @click="confirm">确定</div>
                </div>
            </div>
        </van-popup>

        <!-- 添加按钮 -->
        <div class="add-btn" @click="toggleBtns">添加</div>
    </div>
</template>
<script>
const citys = {
  '0个月': ['0天', '01天', '02天', '03天', '04天','05天'],
  '1个月': ['0天', '01天', '02天', '03天', '04天','05天'],
  '2个月': ['0天', '01天', '02天', '03天', '04天','05天'],
  '3个月': ['0天', '01天', '02天', '03天', '04天','05天'],
  '4个月': ['0天', '01天', '02天', '03天', '04天','05天']
};
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
    name:'Becommonadd',
    data() {
        return {
            title:'添加通用券',
            value:'到店送精美礼品一份到店送精美礼品一 份到店送精美礼品一份到店送精美礼品 一份',
            setlist:{
                title:'',
                mitigate:'',
                condition:''
            },
            show: false,
            pickerShow: true,
            startTime: "", //开始时间
            endTime: "", //截止时间
            currentDate: new Date(),
            currentDate2: new Date(),
            data_show:true,
            columns: [
                {
                    values: Object.keys(citys),
                    className: 'column1',
                    defaultIndex: 2
                },
                {
                    values: citys['0个月'],
                    className: 'column2',
                    defaultIndex: 2
                }
            ],
            sky_time:''  //领取生效时间
        }
    },
    methods:{
        toggleRetun() {
            this.$router.go(-1);//返回上一层
       },
       calendar() {
            this.show = true;
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
       //确定
        confirm() {
            if(this.data_show){
                if (this.pickerShow) {
                    this.startTime = this.timeFormat(this.currentDate);
                    this.pickerShow = false;
                    console.log(this.timeFormat(this.currentDate));
                } else {
                    this.endTime = this.timeFormat(this.currentDate2);
                    console.log(this.timeFormat(this.currentDate2));
                    // this.pickerShow = true
                    this.show = false;
                    this.pickerShow = true;
                }
            }
            else{
                this.show = false
            }
            
        },
        //取消
        onCancel() {
            this.show = false;
            this.startTime =  "", //开始时间
            this.endTime = "", //截止时间
            this.sky_time = "";
        },
        //选择第一个起始时间
        reelect() {
            this.pickerShow = true;
            this.endTime = ''
        },
        eliminClick() {
            this.startTime = ''
            this.endTime = ''
        },
        //添加成功
        toggleBtns() {
            this.$router.push({path:'/ticket'})
        },
        //点击领取生效
        getShow() {
            this.data_show = !this.data_show
        },
        onChange(picker, values) {
            console.log(values[0]);
            console.log(values[1]);
            this.sky_time = values[0] + values[1]
        }
    },
    components:{
        Toptitle
    }
}
</script>
<style lang="stylus" scoped>
.set-add{
    padding-top .4rem;
    .add-fill{
        height 1.17rem;
        border-bottom  1px solid #DCDCDC;
        .fill-warp{
            margin 0 .44rem;
            display flex;
            justify-content space-between;
            height 1.17rem;
            align-items center;
            font-size:0.4rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color #333333;
            .fill-nums{
                display flex;
                input{
                    text-align right;
                    border 0;
                }
                input::-webkit-input-placeholder{
                    color #999999;
                }
                .nums-time{
                    color #999999;
                }
                .nums-name{
                    margin-left .5rem;
                }
                .nums-icon{
                    width .4rem;
                    height .4rem;
                    margin-left .3rem;
                    img{
                        width 100%;
                        height 100%;
                    }
                }
            }
        }
        
    }
    .add-get{
        padding .4rem 0;
        border-bottom  1px solid #DCDCDC;
        .get-warp{
            margin 0 .44rem;
            display flex;
            justify-content space-between;
            color #333333;
            font-size:0.4rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            .warp-desc{
                textarea{
                    border 0;
                    width 6.8rem;
                    height 1.5rem;
                }
            }
        }
    }
}
.add-btn{
    position absolute;
    bottom 1rem;
    left 0;
    right 0;
    width:9.01rem;
    height:1.09rem;
    line-height 1.09rem;
    text-align center;
    font-size:0.4rem;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(255,255,255,1);
    background:rgba(234,55,86,1);
    border-radius:1rem;
    margin 0 auto;
}
.popup {
  padding-bottom .8rem;
    .times {
      position relative;
      width: 10rem;
      margin-top: 0.5rem;
      height: 2rem;
      .times-get{
          position absolute;
          right 0.47rem;
          top -0.2rem;
          width:1.68rem;
            height:0.83rem;
            line-height 0.83rem;
            text-align center;
            border:1px solid rgba(234,55,86,1);
            border-radius:0.41rem;
            color #EA3756;
            font-size:0.32rem;
            font-family:Source Han Sans CN;
            font-weight:400;
      }
      .times-title {
        text-align: center;
        font-size:0.45rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(51,51,51,1);
      }
      .times-names{
        text-align center;
        height 1rem;
        line-height 1rem;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(51,51,51,1);
      }
      .times-day {
        margin: 0.4rem auto;
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
    .pocker{
        position relative;
        .pocker_title{
            position absolute;
            right 1.5rem;
            top 2.6rem;
            font-size:0.64rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(43,43,43,1);
        }
        /deep/ .van-picker__columns{
            width 7rem;
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
      z-index 20;
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
</style>