<template>
  <!-- 订单详情  -->
  <div class="Orderdetails">
    <div @click="toggleRetun" class="top_title">
      <Toptitle :title="title" />
    </div>
    <div class="pink" :style="note">
      <div class="pink-title">
        <span class="title-nums">{{ datainfo.id }}：</span>
        <span v-if="datainfo.status === '驳回'">待处理</span>
        <span v-else>
          <span v-if="datainfo.status==='已评价'">已安装</span>
          <span v-else>{{ datainfo.status }}</span>
        </span>
      </div>
    </div>
    <div class="message">
      <div class="half">
        <img src="@/assets/half-circle.png" />
      </div>
      <div class="me-main">
        <div class="mainTime">{{ datainfo.create_time }}</div>
        <!-- 车主信息  -->
        <div class="Carowner">
          <div class="Carowner-pr">
            <div class="pr-heng"></div>
            <div class="pr-name">车主信息</div>
          </div>
          <div class="Carowner-cla">
            <div class="cla-ti">
              <span class="ti-title">账户：</span>
              <span class="ti-names">{{ datainfo.buy_account }}</span>
            </div>
            <div class="cla-ti">
              <span class="ti-title">平台：</span>
              <span class="ti-names">{{ datainfo.lazada_title }}</span>
            </div>
            <div class="cla-ti">
              <span class="ti-title">产品：</span>
              <span class="ti-names">{{ datainfo.product_titile }}</span>
            </div>

            <div class="cla-ti">
              <div class="ti-warp">
                <span class="warp-title">联系人：</span>
                <span class="warp-names">{{ datainfo.contact }}</span>
              </div>
              <div class="ti-warp">
                <span class="warp-title">电话：</span>
                <span class="warp-names">{{ datainfo.tel }}</span>
              </div>
            </div>
            <div class="cla-ti">
              <span class="ti-title">地址：</span>
              <span class="ti-names">{{ datainfo.city_desc }}</span>
            </div>
            <div class="cla-ti">
              <span class="ti-title">车牌：</span>
              <span class="ti-names">{{ datainfo.number_plate }}</span>
            </div>
            <div class="cla-ti">
              <span class="ti-title">车型：</span>
              <span class="ti-names">{{ datainfo.model_title }}</span>
            </div>
            <div class="cla-ti">
              <span class="ti-title">备注：</span>
              <span class="ti-names">{{ datainfo.desc }}</span>
            </div>
          </div>
        </div>
        <!-- 附带配件  -->
        <div
          class="Carowner"
          v-if="
            datainfo.low_beam !== '无' ||
              datainfo.in_the !== '无' ||
              datainfo.holder !== '无' ||
              datainfo.ygj !== '无' ||
              datainfo.decorate !== '无' ||
              datainfo.is_code !== '无'
          "
        >
          <div class="Carowner-pr">
            <div class="pr-heng"></div>
            <div class="pr-name">附带配件</div>
          </div>
          <div class="Carowner-cla">
            <div class="cla-ti" v-if="datainfo.holder !== '无'">
              <span class="ti-title">支架：</span>
              <span class="ti-names">{{ datainfo.holder }}</span>
            </div>
            <div class="cla-ti" v-if="datainfo.ygj > 1">
              <span class="ti-title">易改件：</span>
              <span class="ti-names">{{ datainfo.ygj }}</span>
            </div>
            <div class="cla-ti" v-if="datainfo.decorate !== '无'">
              <span class="ti-title">装饰罩：</span>
              <span class="ti-names">{{ datainfo.decorate }}</span>
            </div>
            <div class="cla-ti" v-if="datainfo.is_code !== '无'">
              <span class="ti-title">解码：</span>
              <span class="ti-names">{{ datainfo.is_code }}</span>
            </div>
            <div class="cla-ti" v-if="datainfo.in_the !== '无'">
              <span class="ti-title">远光转接线：</span>
              <span class="ti-names">{{ datainfo.in_the }}</span>
            </div>

            <div class="cla-ti" v-if="datainfo.low_beam !== '无'">
              <span class="ti-title">近光转接线：</span>
              <span class="ti-names">{{ datainfo.low_beam }}</span>
            </div>
          </div>
        </div>
        <!-- 门店信息  -->
        <div
          class="Carowner"
          v-if="
            datainfo.status !== '待处理' &&
              datainfo.status !== '待确认(业务)' &&
              datainfo.status !== '待确认(门店)'
          "
        >
          <div class="Carowner-pr" v-if="datainfo.status !== '驳回'">
            <div class="pr-heng"></div>
            <div class="pr-name">门店信息</div>
          </div>
          <div class="Carowner-cla-md">
            <div class="cla-ti">
              <span class="ti-title">门店：</span>
              <span class="ti-names" v-if="datainfo.shop">
                {{
                datainfo.shop.shopname
                }}
              </span>
            </div>
            <div class="cla-ti">
              <span class="ti-title">地址：</span>
              <span
                class="ti-names"
                v-if="datainfo.shop"
              >{{ datainfo.shop.cityName }} {{ datainfo.shop.location }}</span>
            </div>
            <div class="cla-ti">
              <span class="ti-title">门店电话：</span>
              <span class="ti-names" v-if="datainfo.shop">
                {{
                datainfo.shop.tel
                }}
              </span>
            </div>
            <div class="cla-ti">
              <span class="ti-title">客服：</span>
              <span class="ti-names" v-if="datainfo.pre">{{ datainfo.pre.realName }}</span>
            </div>
          </div>
        </div>
      </div>
      <!--  安装费  -->
      <div class="me-cost" v-if="false">
        <!--<div class="cost-price">-->
        <!--<span>¥</span>-->
        <!--<span class="price-money">{{datainfo.ins_cost}}</span>-->
        <!--</div>-->
        <div class="Carowner-pr">
          <div class="pr-heng"></div>
          <div class="pr-name">安装费</div>
        </div>
        <div class="Carowner-cla-md">
          <div class="cla-ti">
            <span class="ti-title">客服：</span>
            <span
              class="ti-names"
              v-if="datainfo.pre"
            >{{ datainfo.pre.realName }}{{ datainfo.pre.phone }}</span>
          </div>
          <div class="cla-ti">
            <span class="ti-title">备注：</span>
            <span class="ti-names">{{ datainfo.service_desc }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 评价按钮 -->
    <div
      class="evaluate"
      v-if="datainfo.status === '已安装'&&datainfo.is_eva=== 2"
      @click="toggleEvaluate"
    >评价</div>
    <!-- 服务评价  -->
    <div
      class="my-eval"
      v-if="datainfo.is_eva ===1&&datainfo.status !== '待处理'&&datainfo.status !== '驳回'"
    >
      <div class="evalBox">
        <div class="Carowner-pr">
          <div class="pr-heng"></div>
          <div class="pr-name">我的评价</div>
        </div>
        <div class="ev-grade">
          <div class="grade-warp">
            <div class="grade-user">{{ datainfo.eva_info.create_time | subtime }}</div>
            <div class="grade-user active">{{ datainfo.product_titile }}</div>
          </div>
          <div class="grade-warp">
            <van-rate
              class="score-fen"
              readonly
              v-model="datainfo.eva_info.score"
              :gutter="15"
              allow-half
              color="#FF5861"
              :count="5"
            />
            <div class="minute-nums">{{datainfo.eva_info.score}}分</div>
          </div>
        </div>
        <div class="ev-decs">{{ datainfo.eva.content }}！</div>
        <div class="ev-imgs">
          <div class="imgs" v-for="(item, inx) in img">
            <img :src="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitlebai";
import { GetIdBydetails, GetIdByStatus, PostNoteByAdd } from "@/api/order";
import { getInfo, login } from "@/api/user";
import { getUser, removeUser, setUser } from "@/utils/auth";

export default {
  name: "Orderdetails",
  data() {
    return {
      title: "订单详情",
      schedule: this.$route.query.id,
      valueminute: 4,
      popup: false,
      id: undefined,
      datainfo: {},
      note: {
        backgroundImage: "url(" + require("@/assets/order-pink.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      cityList: [
        {
          value: "门店不接受安装费",
          label: "门店不接受安装费"
        },
        {
          value: "门店没有营业",
          label: "门店没有营业"
        },
        {
          value: "门店不想接单",
          label: "门店不想接单"
        },
        {
          value: "安装技术不行",
          label: "安装技术不行"
        },
        {
          value: "我不想派单给他",
          label: "我不想派单给他"
        },
        {
          value: "其他原因",
          label: "其他原因"
        }
      ],
      model1: ""
    };
  },
  filters: {
    subtime(str) {
      return str.substr(5, 6);
    },
    holder(str) {
      const statusMap = {
        1: "有",
        2: "无"
      };
      return statusMap[str];
    },
    decorate(str) {
      const statusMap = {
        1: "有",
        2: "随货发",
        3: "供应商代发"
      };
      return statusMap[str];
    }
  },
  created() {
    this.id = this.$route.query.id;

    GetIdBydetails(this.id).then(res => {
      this.datainfo = res.data;
      console.log(res.data);
    });

    let user_id = this.$route.query.user_id;

    if (user_id !== undefined) {
      getInfo(user_id).then(res => {
        this.$store.dispatch("user/login", res.data);
        setUser(res.data);
      });
    }
  },
  computed: {
    eva() {
      var sum =
        this.datainfo.eva.product +
        this.datainfo.eva.service +
        this.datainfo.eva.shop;
      return sum / 3;
    },
    img() {
      var imglist = this.datainfo.eva.img.split(",");
      return imglist;
    }
  },
  methods: {
    toggleRetun() {
      this.$router.go(-1); //返回上一层
    },
    //已安装评价
    toggleEvaluate() {
      this.$router.push({
        path: "/order/prepared",
        query: { id: this.datainfo.id }
      });
    },
    showHints() {
      this.$router.push({ path: "/order", query: { num: 1 } });
    },
    //弹出驳回窗口
    pullBtn() {
      this.popup = true;
    },
    //取消
    cancel() {
      this.popup = false;
      this.model1 = "";
    },
    //确定
    oksBtn() {
      console.log(this.model1);
      if (this.model1 !== "") {
        this.popup = false;
        this.$router.push({ path: "/order", query: { num: 1 } });
      } else {
        this.$toast("还没选择！");
      }
    }
  },
  components: {
    Toptitle
  }
};
</script>
<style lang="scss" scoped>
.Orderdetails {
  width: 10rem;
  min-height: 667px;
  overflow: hidden;
  background-color: #f5f5f5;
  .top_title {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .pink {
    width: 10rem;
    height: 4.99rem;
    overflow: hidden;
    .pink-title {
      font-size: 0.48rem;
      font-weight: 500;
      color: #ffffff;
      text-align: center;
      margin-top: 1.17rem;
      .title-nums {
        margin-right: 0.2rem;
      }
    }
    .pink-bohui {
      text-align: center;
      color: #ffffff;
      margin: 0.15rem 0;
    }
  }
  .message {
    width: 9.15rem;
    margin: -2.3rem auto 0.37rem;
    overflow: hidden;
    position: relative;
    border-radius: 0.27rem;
    background: #ffffff;
    .half {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      margin: 0 auto;
      width: 1.1rem;
      height: 0.6rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .me-main {
      margin: 0.3rem;
      .mainTime {
        text-align: right;
        color: #2b2b2b;
        font-size: 0.32rem;
        font-weight: 400;
      }
      .Carowner {
        margin-top: 0.3rem;
        .Carowner-pr {
          display: flex;
          align-items: center;
          .pr-heng {
            width: 0.08rem;
            height: 0.35rem;
            background: rgba(243, 192, 102, 1);
            border-radius: 0.04rem;
            margin-right: 0.2rem;
          }
          .pr-name {
            color: #333333;
            font-size: 0.4rem;
            font-weight: 400;
          }
        }
        .Carowner-cla {
          margin-left: 0.3rem;
          height: 100%;
          margin-top: 0.3rem;
          margin-bottom: 0.6rem;
          .cla-ti {
            font-size: 0.32rem;
            font-weight: 400;
            margin-bottom: 0.15rem;
            display: flex;
            .ti-warp {
              width: 50%;
              .warp-title {
                color: #666666;
              }
              .warp-names {
                color: #333333;
              }
            }
            .ti-title {
              color: #666666;
              width: 13%;
            }
            .ti-names {
              color: #333333;
              width: 80%;
            }
          }
        }
        .Carowner-cla-md {
          margin-left: 0.3rem;
          height: 100%;
          margin-top: 0.3rem;
          margin-bottom: 0.4rem;
          .cla-ti {
            font-size: 0.32rem;
            font-weight: 400;
            margin-bottom: 0.15rem;
            .ti-title {
              color: #666666;
            }
            .ti-names {
              color: #333333;
              width: 80%;
            }
          }
        }
      }
    }
    .me-cost {
      border-top: 1px solid #e5e5e5;
      overflow: hidden;
      position: relative;
      .cost-price {
        position: absolute;
        right: 1rem;
        top: 1rem;
        color: #cd4b4c;
        font-size: 0.32rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        .price-money {
          display: inline-block;
          font-size: 0.64rem;
          margin-left: 0.1rem;
        }
      }
      .Carowner-pr {
        display: flex;
        align-items: center;
        margin-left: 0.35rem;
        margin-top: 0.3rem;

        .pr-heng {
          width: 0.08rem;
          height: 0.35rem;
          background: rgba(243, 192, 102, 1);
          border-radius: 0.04rem;
          margin-right: 0.2rem;
        }

        .pr-name {
          color: #333333;
          font-size: 0.4rem;
          font-weight: 400;
        }
      }
      .Carowner-cla-md {
        margin-left: 0.6rem;
        height: 100%;
        margin-top: 0.3rem;
        margin-bottom: 0.4rem;

        .cla-ti {
          font-size: 0.32rem;
          font-weight: 400;
          margin-bottom: 0.15rem;

          .ti-title {
            color: #666666;
          }

          .ti-names {
            color: #333333;
          }
        }
      }
    }
  }
  .evaluate {
    margin: 0.5rem auto;
    width: 7.81rem;
    height: 0.96rem;
    line-height: 0.96rem;
    text-align: center;
    background: rgba(233, 55, 91, 1);
    border-radius: 0.48rem;
    font-size: 0.4rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
  .my-eval {
    margin: 0.4rem auto 0.5rem;
    width: 9.15rem;
    background: rgba(255, 255, 255, 1);
    border: 0px solid rgba(255, 255, 255, 1);
    border-radius: 0.27rem;
    overflow: hidden;

    .evalBox {
      margin: 0.4rem auto;
      width: 8.45rem;

      .Carowner-pr {
        display: flex;
        align-items: center;

        .pr-heng {
          width: 0.08rem;
          height: 0.35rem;
          background: rgba(243, 192, 102, 1);
          border-radius: 0.04rem;
          margin-right: 0.2rem;
        }

        .pr-name {
          color: #333333;
          font-size: 0.4rem;
          font-weight: 400;
        }
      }

      .ev-grade {
        display: flex;
        justify-content: space-between;
        height: 0.6rem;
        line-height: 0.6rem;
        align-items: center;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
        .grade-warp {
          display: flex;
        }
        /deep/ .van-rate__icon {
          font-size: 0.4rem;
        }
        .grade-user {
          color: #999999;
          font-size: 0.27rem;
          margin-right: 0.27rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
        }
        .grade-user.active {
          font-size: 0.32rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
        }
        .score-fen {
          margin-top: 0.1rem;
          margin-left: 0.2rem;
        }
        .minute-nums {
          margin-left: 0.29rem;
        }
      }

      .ev-decs {
        font-size: 0.35rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }

      .ev-imgs {
        display: flex;
        margin-top: 0.3rem;

        .imgs {
          width: 2.77rem;
          height: 2.77rem;
          margin-right: 0.2rem;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .imgs:nth-child(3) {
          margin-right: 0;
        }
      }
    }
  }
  .turn {
    width: 8.7rem;
    height: 1.01rem;
    margin: 0.6rem auto;
    display: flex;
    justify-content: space-between;

    .turn-left {
      width: 3.89rem;
      height: 1.09rem;
      line-height: 1.09rem;
      text-align: center;
      border: 1px solid rgba(219, 66, 68, 1);
      border-radius: 0.55rem;
      color: #e9375b;
      font-size: 0.4rem;
    }

    .turn-right {
      width: 3.89rem;
      height: 1.09rem;
      line-height: 1.09rem;
      background: rgba(233, 55, 91, 1);
      border-radius: 0.55rem;
      color: #ffffff;
      font-size: 0.4rem;
      text-align: center;
    }
  }
  .pull {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);

    .pullBox {
      position: absolute;
      top: 3.5rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 9.15rem;
      height: 8.5rem;
      background-color: #ffffff;
      border-radius: 0.27rem;

      .Hebao {
        margin: 0.2rem 0.3rem;

        .Hebao-title {
          font-size: 0.48rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          margin-bottom: 0.3rem;
          text-align: center;
        }

        .Hebao-btn {
          margin-top: 5rem;
          text-align: right;
          display: flex;
          justify-content: space-between;

          span {
            display: inline-block;
          }
          .cancel {
            width: 3.89rem;
            height: 1.09rem;
            line-height: 1.09rem;
            text-align: center;
            border-radius: 1rem;
            border: 1px solid rgba(234, 55, 86, 1);
            color: #ea3756;
            font-size: 0.4rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
          }
          .oks {
            width: 3.89rem;
            height: 1.09rem;
            line-height: 1.09rem;
            text-align: center;
            color: #ffffff;
            background: rgba(234, 55, 86, 1);
            border-radius: 1rem;
            font-size: 0.4rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
          }
        }
      }
    }
  }
}
</style>
