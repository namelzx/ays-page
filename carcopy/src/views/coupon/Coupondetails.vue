<template>
  <div class="coudetails">
    <div @click="toggleRetun">
      <Toptitle :title="title" />
    </div>
    <div class="coudeBox">
      <div class="face">
        <div class="face-nominal">
          {{data.price}}元
        </div>
        <div class="face-desc">{{data.title}}</div>
      </div>
      <!-- 使用部分  -->
      <div class="state">
        <div class="stateBox">
          <!-- 核销码  -->
          <div class="set-code">
            <div class="code-left">
              <span>核销码</span>
            </div>
            <div class="code-right">
              <div class="right-nums">{{data.code}}</div>
              <div
                class="right-copy"
                v-clipboard:copy="data.code"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >快速复制</div>
            </div>

          </div>

          <!-- 企业主页 -->
          <div class="set-home">
            <div class="home-title">企业主页</div>
            <div class="home-sikp">
              <div class="sikp-imgs"><img src="@/assets/right-fx.png" /></div>
            </div>
          </div>

          <!-- 使用说明 -->
          <div class="set-home" @click="toggleExplain">
            <div class="home-title">使用说明</div>
            <div class="home-sikp">
              <div class="sikp-imgs"><img src="@/assets/right-fx.png" /></div>
            </div>
          </div>

          <!-- 有效期 -->
          <div class="set-data">
            <div class="data-title">有效期至</div>
            <div class="data-time">{{data.start_time|parseTime('{y}-{m}-{d}')}}-{{data.end_time|parseTime('{y}-{m}-{d}')}}</div>
          </div>



        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
  name: "Coupondetails",
  data() {
    return {
      title: "优惠券详情",
        data:{}
    };
  },
    filters:{
        parseTime(time, cFormat) {
            if (arguments.length === 0) {
                return null
            }
            if (!time) {
                return null
            }
            const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
            let date
            if (typeof time === 'object') {
                date = time
            } else {
                if (('' + time).length === 10) time = parseInt(time) * 1000
                date = new Date(time)
            }
            const formatObj = {
                y: date.getFullYear(),
                m: date.getMonth() + 1,
                d: date.getDate(),
                h: date.getHours(),
                i: date.getMinutes(),
                s: date.getSeconds(),
                a: date.getDay()
            }
            const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
                let value = formatObj[key]
                // Note: getDay() returns 0 on Sunday
                if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
                if (result.length > 0 && value < 10) {
                    value = '0' + value
                }
                return value || 0
            })
            return time_str
        }
    },
    created(){
      var data=JSON.stringify(this.$route.query.data)
        this.data=JSON.parse(data)
    },
  methods:{
    toggleRetun() {
      this.$router.go(-1); //返回上一层
    },
    //使用说明
    toggleExplain() {
      this.$router.push({path:'/coupon/coupondexplain', query: {data: this.data.desc}})
    },
      onCopy: function(e) {
      this.$dialog.alert({
          title: "复制成功",
          message: "马上去查看吧！"
        })
        .then(() => {
          // on close
        });
    },
    onError: function(e) {
      this.$dialog
        .alert({
          title: "失败",
          message: "无法复制文本！"
        })
        .then(() => {
          // on close
        });
    }
  },
  components: {
    Toptitle
  }
};
</script>
<style lang="stylus" scoped>
.coudetails {
  .coudeBox {
    width: 9.15rem;
    margin: 0.5rem auto;
    margin-top 1.2rem;
    overflow: hidden;

    .face {
      width: 9.15rem;
      height: 2.67rem;
      color: #EA3756;

      .face-nominal {
        text-align center;
        font-size:0.64rem;
        font-family:Source Han Sans CN;
        font-weight:500;
        color:rgba(234,55,86,1);

      }

      .face-desc {
        margin-top .39rem;
        text-align center;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(51,51,51,1);
      }
    }

    .state {
      width: 9.15rem;
      min-height: 5.11rem;
      margin: 0 auto;
      background: #fff;
      overflow: hidden;
      border-radius: 0 0 0.2rem 0.2rem;

      .stateBox {
        width: 9.15rem;
        margin: 0.3rem auto;

        .set-code {
          display: flex;
          justify-content: space-between;
          align-items center;
          width: 9.15rem;
          padding-bottom .3rem;
          .code-left {
            font-size:0.4rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(51,51,51,1);
          }

          .code-right {
            display flex;
            .right-nums{
              font-size:0.4rem;
              font-family:Source Han Sans CN;
              font-weight:400;
              color:rgba(51,51,51,1);
              margin-top .15rem;
              margin-right .55rem;
            }
            .right-copy{
              width:1.39rem;
              height:0.61rem;
              line-height 0.61rem;
              text-align center;
              border:1px solid rgba(234,55,86,1);
              border-radius:0.07rem;
              font-size:0.27rem;
              font-family:Source Han Sans CN;
              font-weight:400;
              color:rgba(234,55,86,1);
            }
          }
        }

        .set-home{
          display flex;
          justify-content space-between;
          height 1.16rem;
          align-items center;
          .home-title{
            font-size:0.4rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(51,51,51,1);
          }
          .home-sikp{
            height 1.16rem;
            width:7.17rem;
            border-bottom:1px solid rgba(220,220,220,1);
            position relative;
            .sikp-imgs{
              position absolute;
              right 0;
              top 0;
              bottom 0;
              margin auto 0;
              width .3rem;
              height .3rem;
              img{
                width 100%;
                height 100%;
              }
            }
          }
        }

        .set-data{
          display flex;
          justify-content space-between;
          height 1.16rem;
          align-items center;
          .data-title{
            font-size:0.4rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(51,51,51,1);
          }
          .data-time{
            font-size:0.4rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(51,51,51,1);
          }
        }
      }
    }
  }
}
</style>
