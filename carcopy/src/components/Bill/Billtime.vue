<template>
<!-- 选择时间 -->
    <div>
        <div @click="toggleRetun"><Toptitle :title="title" /></div>
        <div class="bill_warp">
            <div class="warp_select">
                <div class="select_time">
                    <div class="time_box">
                        <div class="title" v-if="data_show">按月选择</div>
                        <!-- <div class="title" v-else @click="monthClick">按日选择</div> -->
                        <div class="icon"><img src="@/assets/around.png" /></div>
                    </div>
                    <div class="time_accomplish" @click="toggleBill">完成</div>
                </div>
                <div class="select_name" v-if="data_show">{{currentdate}}</div>
                <div v-else class="select_day">
                    <div class="day_times" @click="beginClick(1)">{{day_time1}}</div>
                    <div class="day_to">至</div>
                    <div class="day_times" @click="finishClick(2)" :class="['day_times',day_time2=='结束时间'?'active':'']">{{day_time2}}</div>
                </div>
            </div>


            <!-- 选择日期 -->
            <div class="date" v-if="data_show">
                <van-datetime-picker
                @change="Change"
                v-model="currentDate"
                type="year-month"
                :min-date="minDate"
                :max-date="maxDate"
                :show-toolbar="false"
                :visible-item-count="3"
                :item-height="50"
                />
            </div>


            <!-- 选择年月日 -->
            <div  v-else>
                <div class="date" v-if="day_show">
                    <van-datetime-picker
                    @change="Change2"
                    v-model="currentDate2"
                    type="date"
                    :min-date="minDate"
                    :max-date="maxDate"
                    :show-toolbar="false"
                    :visible-item-count="3"
                    :item-height="50"
                    />
                </div>

                <div class="date" v-else>
                    <van-datetime-picker
                    @change="Change3"
                    v-model="currentDate3"
                    type="date"
                    :min-date="minDate"
                    :max-date="maxDate"
                    :show-toolbar="false"
                    :visible-item-count="3"
                    :item-height="50"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
    name:'Billtime',
    data() {
        return {
            title:'选择时间',
            currentdate:'2020-01', //按月时间
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2099, 10, 1),
            currentDate: new Date(),
            data_show: true,//按月选择
            day_show: true,  //按日中的切换开始--结束
            day_time1:'2018-06-06',  //按日显示
            currentDate2: new Date(),
            day_time2:'结束时间',
            index:1,
            currentDate3: new Date(),
        }
    },
    methods:{
        toggleRetun() {
            this.$router.push('/bill');//返回上一层
        },
        //按月显示，日期格式过滤  格式：2020-01
        Change() {
            console.log(this.currentDate);
            let date = this.currentDate;
            let seperator1 = "-";
            let month = date.getMonth() + 1;
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            this.currentdate = date.getFullYear() +seperator1 + month;
        },
        //点击切换按月选择，还是按日选择
        monthClick() {
            this.data_show = !this.data_show
        },
        //点击开始时间
        beginClick(e) {
            this.index=e
            this.day_show = true
            this.day_time2 = '结束时间'
        },
        //按月显示--开始时间，日期格式过滤  格式：2020-01-14
        Change2() {
            let date = this.currentDate2;
            let seperator1 = "-";
            let month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }

            this.day_time1 = date.getFullYear() +seperator1 + month +seperator1 +strDate;
        },
        //点击结束时间
        finishClick(e) {
            this.index=2
            this.day_show = false
        },
        //按月显示--结束时间，日期格式过滤  格式：2020-01-14
        Change3() {
            let date = this.currentDate3;
            let seperator1 = "-";
            let month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            this.day_time2 = date.getFullYear() +seperator1 + month +seperator1 +strDate;
        },
        //完成
        toggleBill() {


            if(this.data_show){
               let time= this.totime(this.currentDate)
                this.$router.push({path:'/bill',query:{time:time,type:1}})
            }else{
                let day1=this.totime(this.currentDate2)
                let day2=this.totime(this.currentDate3)
                this.$router.push({path:'/bill',query:{time:[day1,day2],type:2}})
            }
        },
        //重装时间
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
            return  date.getFullYear() +seperator1 + month +seperator1 +strDate;
        },
    },
    components:{
        Toptitle
    }
}
</script>
<style lang="stylus" scoped>
.bill_warp{
    width 9.15rem;
    margin 0.6rem auto;
    margin-top 1.3rem;
    .warp_select{

        .select_time{
            display flex;
            justify-content space-between;
            margin-bottom .4rem;
            .time_box{
                display flex;
                align-items center;
                width:2.05rem;
                height:0.6rem;
                background:rgba(241,241,241,1);
                border-radius:0.24rem;
                .title{
                    margin-left .2rem;
                    font-size:0.32rem;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                }
                .icon{
                    width .5rem;
                    height .5rem;
                    img{
                        width 100%;
                        height 100%;
                    }
                }
            }
            .time_accomplish{
                font-size:0.4rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(62,132,239,1);
            }
        }
        .select_name{
            text-align center;
            font-size:0.4rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(5,103,236,1);
            padding-bottom .33rem;
            border-bottom 1px solid #0567ec87;
        }
        .select_day{
            display flex;
            justify-content space-between;
            width 8.5rem;
            margin 0 auto;
            .day_times{
                width:2.67rem;
                height 1rem;
                line-height 1rem;
                border-bottom 1px solid #2575FA;
                text-align center;
                font-size:0.4rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(5,103,236,1);
            }
            .day_times.active{
                font-size:0.32rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(153,153,153,1);
            }
            .day_to{
                font-size:0.27rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(51,51,51,1);
                margin-top .4rem;
            }
        }
    }
    .date{
        margin-top .6rem;
        border-top 1px solid #dcdcdc57;
        border-bottom 1px solid #dcdcdc57;
        margin-bottom .3rem;
    }
}
</style>
