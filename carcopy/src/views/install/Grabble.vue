<template>
  <div class="history">
    <div class="seach-bar">
      <div class="barBox">
        <input class="input" v-model="name" placeholder="输入关键词搜索" />
        <div class="bar-icon">
          <img src="../../assets/calendar.png" />
        </div>
      </div>
    </div>
    <!-- 搜索内容  -->
    <div class="record">
      <template v-if="name==='别克君威2017'">
        <div class="show-list">
          <div class="list-times" v-if="expirationTime!==''">
            <div class="times-nums">
              共<span>161</span>单
            </div>
            <div class="times-days">
              <span>日期筛选：</span>
              <span class="time-days">2019.08.08-2019.08.20</span>
            </div>
          </div>
          <Card :tabs="tabs" :curIndex="curIndex" />
        </div>
      </template>
      <template v-else>
        <div class="not-being">
          <div class="being-time" v-if="expirationTime!==''">
            <span>日期筛选：</span>
            <span class="time-days">2019.08.08-2019.08.20</span>
          </div>
          <div class="being-hint">暂无更多信息</div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import Card from "@/views/detail/component/InstallCard";
export default {
  name: "Grabble",
  data() {
    return {
      name: this.$route.query.name,
      curIndex: 0,
      presentTime: "", //当前日期
      expirationTime: "1", //截止日期
      tabs: [
        {
          list: [
            {
              id: "1",
              name: "征服者",
              type: "别克2017君威1.5t精英版",
              servicer: "安亿仕13755555555",
              shop: "阿帕斯灯(凯斯店)",
              shop_assit: "姜卫卫",
              status: "1",
              price: 800,
              order_num: 5502,
              order_date: "2019.09.08",
              msg: "客服留言",
              re_msg: "",
              re_type: ""
            },
            {
              id: "2",
              name: "征服者",
              type: "别克2017君威1.5t精英版",
              servicer: "安亿仕13755555555",
              shop: "阿帕斯灯(凯斯店)",
              shop_assit: "姜卫卫",
              status: "1",
              price: 800,
              order_num: 5502,
              order_date: "2019.09.08",
              msg: "客服留言",
              re_msg: "",
              re_type: ""
            }
          ]
        },
        {
          list: [
            {
              id: "2",
              name: "征服者",
              type: "别克2017君威1.5t精英版",
              servicer: "安亿仕13755555555",
              shop: "前途车灯升级服务店",
              shop_assit: "朱汉振",
              status: "1",
              price: 800,
              order_num: 5502,
              order_date: "2019.09.08",
              msg: "客服留言",
              re_msg: "",
              re_type: ""
            },
            {
              id: "3",
              name: "征服者",
              type: "别克2017君威1.5t精英版",
              servicer: "安亿仕13755555555",
              shop: "阿帕斯灯(凯斯店)",
              shop_assit: "姜卫卫",
              status: "1",
              price: 800,
              order_num: 5502,
              order_date: "2019.09.08",
              msg: "客服留言",
              re_msg: "",
              re_type: ""
            },

            {
              id: "4",
              name: "征服者",
              type: "别克2017君威1.5t精英版",
              servicer: "安亿仕13755555555",
              shop: "阿帕斯灯(凯斯店)",
              shop_assit: "姜卫卫",
              status: "1",
              price: 800,
              order_num: 5502,
              order_date: "2019.09.08",
              msg: "客服留言",
              re_msg: "",
              re_type: ""
            }
          ]
        },
        {
          list: [
            {
              id: "4",
              name: "征服者",
              type: "别克2017君威1.5t精英版",
              servicer: "安亿仕13755555555",
              shop: "阿帕斯灯(凯斯店)",
              shop_assit: "姜卫卫",
              status: "2",
              price: 800,
              order_num: 5502,
              order_date: "2019.09.08",
              msg: "客服留言",
              re_msg: "",
              re_type: ""
            },
            {
              id: "5",
              name: "征服者",
              type: "别克2017君威1.5t精英版",
              servicer: "安亿仕13755555555",
              shop: "阿帕斯灯(凯斯店)",
              shop_assit: "姜卫卫",
              status: "2",
              price: 800,
              order_num: 5502,
              order_date: "2019.09.08",
              msg: "客服留言",
              re_msg: "",
              re_type: ""
            },
            {
              id: "6",
              name: "征服者",
              type: "别克2017君威1.5t精英版",
              servicer: "安亿仕13755555555",
              shop: "阿帕斯灯(凯斯店)",
              shop_assit: "姜卫卫",
              status: "2",
              price: 800,
              order_num: 5502,
              order_date: "2019.09.08",
              msg: "客服留言",
              re_msg: "",
              re_type: ""
            }
          ]
        },
        {
          list: [
            {
              id: "4",
              name: "征服者",
              type: "别克2017君威1.5t精英版",
              servicer: "安亿仕13755555555",
              shop: "阿帕斯灯(凯斯店)",
              shop_assit: "姜卫卫",
              status: "3",
              price: 800,
              order_num: 5502,
              order_date: "2019.09.08",
              msg: "客服留言",
              re_msg: "",
              re_type: ""
            },
            {
              id: "5",
              name: "征服者",
              type: "别克2017君威1.5t精英版",
              servicer: "安亿仕13755555555",
              shop: "阿帕斯灯(凯斯店)",
              shop_assit: "姜卫卫",
              status: "3",
              price: 800,
              order_num: 5502,
              order_date: "2019.09.08",
              msg: "客服留言",
              re_msg: "",
              re_type: ""
            },
            {
              id: "6",
              name: "征服者",
              type: "别克2017君威1.5t精英版",
              servicer: "安亿仕13755555555",
              shop: "阿帕斯灯(凯斯店)",
              shop_assit: "姜卫卫",
              status: "3",
              price: 800,
              order_num: 5502,
              order_date: "2019.09.08",
              msg: "客服留言",
              re_msg: "",
              re_type: ""
            }
          ]
        },
        {
          list: [
            {
              id: "7",
              name: "征服者",
              type: "别克2017君威1.5t精英版",
              servicer: "安亿仕13755555555",
              shop: "阿帕斯灯(凯斯店)",
              shop_assit: "姜卫卫",
              status: "4",
              price: 800,
              order_num: 5502,
              order_date: "2019.09.08",
              msg: "客服留言",
              re_msg: "未安装",
              re_type: "安装完成被驳回"
            },
            {
              id: "8",
              name: "征服者",
              type: "别克2017君威1.5t精英版",
              servicer: "安亿仕13755555555",
              shop: "阿帕斯灯(凯斯店)",
              shop_assit: "姜卫卫",
              status: "4",
              price: 800,
              order_num: 3201,
              order_date: "2019.09.08",
              msg: "客服发送说明要求",
              re_msg: "客户要求临时取消安装",
              re_type: "待安装被驳回"
            },
            {
              id: "9",
              name: "征服者",
              type: "别克2017君威1.5t精英版",
              servicer: "安亿仕13755555555",
              shop: "阿帕斯灯(凯斯店)",
              shop_assit: "朱汉振",
              status: "4",
              price: 800,
              order_num: 6208,
              order_date: "2019.09.08",
              msg: "客服留言",
              re_msg: "未安装",
              re_type: "安装完成被驳回"
            }
          ]
        },
        {
          list: [
            {
              id: "10",
              name: "征服者",
              type: "别克2017君威1.5t精英版",
              servicer: "安亿仕13755555555",
              shop: "阿帕斯灯(凯斯店)",
              shop_assit: "姜卫卫",
              status: "5",
              price: 800,
              order_num: 5502,
              order_date: "2019.09.08",
              msg: "客服留言",
              re_msg: "",
              re_type: "",
              rate: [
                {
                  id: "1",
                  rate_star: 4.5,
                  content:
                    "买了小四有一个月了，总体来说都比较满意，唯一的遗憾就是灯光不是很给力，毕竟刚提车也不久，还不舍得拆大灯，就一直忍着。直到前几天晚上回家，因为对向车道车",
                  imgList: [
                    "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=094e628b0824ab18e416e63505fbe69a/f9198618367adab411c59cee8ad4b31c8701e402.jpg",
                    "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=094e628b0824ab18e416e63505fbe69a/f9198618367adab411c59cee8ad4b31c8701e402.jpg",
                    "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=094e628b0824ab18e416e63505fbe69a/f9198618367adab411c59cee8ad4b31c8701e402.jpg"
                  ]
                }
              ]
            },
            {
              id: "11",
              name: "征服者",
              type: "别克2017君威1.5t精英版",
              servicer: "安亿仕13755555555",
              shop: "阿帕斯灯(凯斯店)",
              shop_assit: "姜卫卫",
              status: "5",
              price: 800,
              order_num: 5502,
              order_date: "2019.09.08",
              msg: "客服留言",
              re_msg: "",
              re_type: "",
              rate: [
                {
                  id: "1",
                  rate_star: 4.5,
                  content:
                    "买了小四有一个月了，总体来说都比较满意，唯一的遗憾就是灯光不是很给力，毕竟刚提车也不久，还不舍得拆大灯，就一直忍着。直到前几天晚上回家，因为对向车道车",
                  imgList: [
                    "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png",
                    "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png",
                    "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png"
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  },
  components: {
    Card
  }
};
</script>
<style lang="stylus" scoped>
.history {
  position: fixed;
  overflow: auto;
  height: 100%;
  width: 100%;

  .seach-bar {
    width: 10rem;
    height: 1.2rem;

    .barBox {
      width: 9.15rem;
      margin: 0.3rem auto 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .input {
        width: 8rem;
        height: 0.72rem;
        line-height: 0.72rem;
        text-align: left;
        padding-left: 0.4rem;
        background-color: #F1F1F1;
        border-radius: 0.36rem;
        color: #999999;
        border: 0;
      }

      .bar-icon {
        width: 0.64rem;
        height: 0.64rem;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .record {
    .show-list {
        .list-times{
            margin 0 auto;
            width 9.1rem;
            display flex;
            justify-content space-between;
            align-items center;
            .times-nums{
                font-size 0.32rem;
                color #333333;
                span{
                    color #CD4B4C;
                    margin 0 .1rem;
                }
            }
            .times-days{
                color #666;
                font-size 0.27rem;
            }
        }
    }

    .not-being {
      color: #666666;
      font-size: 0.4rem;

      .being-time {
        margin-left: 0.44rem;
        color: #666666;
        font-size: 0.27rem;

        .time-days {
          mar: 0.3rem;
        }
      }

      .being-hint {
        margin-top: 0.5rem;
        text-align: center;
      }
    }
  }
}
</style>