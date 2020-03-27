<template>
  <!-- 订单  已安装评价 -->
  <div class="prepared">
    <div @click="toggleRetun" class="top_title">
      <Toptitle :title="title" />
    </div>
    <div class="pre-title">
      <div class="title-s">
        <div class="s-heng"></div>
        <div class="s-name">订单号：{{ datainfo.id }} {{ datainfo.buy_product_titile }}</div>
      </div>
      <!-- <div class="title-x">
        <span>{{ datainfo.shop_title }}</span>
        <span class="x-user">{{ datainfo.shopkeeper }}</span>
      </div>-->
    </div>
    <div class="tetxs">
      <textarea maxlength="200" @input="descInput" v-model="desc" placeholder="改装完成后，有更多的心得可以分享吧！"></textarea>
      <span class="remainder">{{ remnant }}/200</span>
    </div>
    <div class="grade">
      <div class="addImg">
        <van-uploader
          v-model="fileList"
          multiple
          :preview-size="200"
          :max-count="3"
          :before-delete="handelDelete"
          :after-read="afterRead"
        >
          <div class="upBtn">
            <div class="upBtn-add">+</div>
            <div class="upBtn-add2">添加相片</div>
          </div>
        </van-uploader>
      </div>
      <div class="grade-title">请您对本次的服务进行打分</div>
      <div class="grade-score" v-if="id !== 2">
        <div class="score-title">产品质量</div>
        <van-rate class="score-fen" v-model="product" :gutter="6" color="#FF5861" :count="5" />
        <div class="score-nums">{{ product }}分</div>
      </div>
      <div class="grade-score">
        <div class="score-title">门店服务</div>
        <van-rate class="score-fen" v-model="shop" :gutter="6" color="#FF5861" :count="5" />
        <div class="score-nums">{{ shop }}分</div>
      </div>
      <div class="grade-score grade-score-padding" v-if="id !== 2">
        <div class="score-title">客服服务</div>
        <van-rate class="score-fen" v-model="service" :gutter="6" color="#FF5861" :count="5" />
        <div class="score-nums">{{ service }}分</div>
      </div>

      <div class="publishBtn" @click="Succend">
        <div class="Btn" @click="Succend">发表评论</div>
      </div>
    </div>
  </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
import {
  GetIdBydetails,
  PostNoteByAdd,
  GetIdByStatus,
  PostEavByAdd
} from "@/api/order";
import axios from "axios";
import myconfig from "@/config";
import { mapGetters } from "vuex";

export default {
  name: "prepared",
  data() {
    return {
      id: this.$route.query.id,
      title: "已安装评论",
      remnant: 200,
      desc: "",
      fileList: [], //上传临时存储图片
      product: 4, //分数
      shop: 4, //分数
      service: 4, //分数
      evaluate: [],
      datainfo: {},
      img: []
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  created() {
    this.id = this.$route.query.id;

    GetIdBydetails(this.id).then(res => {
      this.datainfo = res.data;
    });
  },
  methods: {
    handelDelete(e) {
      var index = this.fileList.indexOf(e);
      this.fileList.splice(index, 1);

      this.img.splice(index, 1);
      console.log(this.img);
    },
    afterRead(file) {
      let url = myconfig.uploadUrl.img;
      let fd = new FormData();
      fd.append("file", file.file);
      axios
        .post(url, fd, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          this.img.push(res.data.data);
          console.log(this.img);
          // this.fileList.push({url:res.data})
          // console.log( this.fileList)
          // this.$emit('handelUploade', res)
        })
        .catch(err => {
          alert(err);
        });
    },
    toggleRetun() {
      this.$router.go(-1); //返回上一层
    },
    descInput() {
      var txtVal = this.desc.length;
      this.remnant = 200 - txtVal;
    },
    //点击发表
    Succend() {
      let desc = this.desc;

      let temp = {
        order_id: this.id,
        content: desc,
        shop: this.shop,
        product: this.product,
        service: this.service,
        img: this.img.join(",")
      };
      console.log(temp);

      if (this.desc !== "" && this.fileList.length > 0) {
        PostEavByAdd(temp).then(res => {
          this.$router.push({ path: "/order/prepared/succeed" });

          console.log(res);
        });
      } else {
        if (this.desc === "") {
          this.$toast("请填写评论！");
        } else if (this.fileList) {
          this.$toast("请上传图片！");
        } else {
          this.$toast("请填写！");
        }
      }
    }
  },
  components: {
    Toptitle
  }
};
</script>
<style lang="scss" scoped>
.prepared {
  overflow: hidden;
  font-family: SourceHanSans;
  .pre-title {
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 0.4rem;
    margin-top: 1.2rem;
    .title-s {
      display: flex;
      .s-heng {
        width: 0.05rem;
        height: 0.36rem;
        background: rgba(216, 30, 6, 1);
        border-radius: 0.03rem;
        margin-top: 0.12rem;
      }
      .s-name {
        font-size: 0.4rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        margin-left: 0.4rem;
      }
    }
    .title-x {
      margin-top: 0.15rem;
      margin-left: 0.5rem;
      font-size: 0.32rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      .x-user {
        margin-left: 0.1rem;
      }
    }
  }
  .tetxs {
    width: 9.15rem;
    margin: 0.5rem auto;
    height: 2rem;
    position: relative;
    textarea {
      width: 9.15rem;
      height: 2rem;
      border: 0;
      color: #333333;
      font-size: 0.4rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
    }
    textarea::-webkit-input-placeholder {
      color: #999999;
    }
    .remainder {
      position: absolute;
      right: 0;
      bottom: 0;
      color: #999999;
      font-size: 0.27rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
    }
  }
  .grade {
    width: 9.15rem;
    margin: 0 auto;
    .grade-title {
      font-size: 0.4rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    .grade-score {
      margin-top: 0.6rem;
      display: flex;
      .score-title {
        font-size: 0.4rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
      .score-fen {
        margin-left: 1rem;
      }
      .score-nums {
        margin-left: 0.55rem;
        font-size: 0.4rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ff5861;
      }
    }
    .grade-score-padding {
      padding-bottom: 2rem;
    }

    .van-uploader /deep/ .van-uploader__preview-image {
      width: 2.8rem !important;
      height: 2.8rem !important;
    }
    .addImg {
      margin-top: 1rem;
      margin-bottom: 1.2rem;

      .upBtn {
        width: 2.8rem;
        height: 2.8rem;
        border: 1px solid rgba(229, 229, 229, 1);
        text-align: center;
        .upBtn-add {
          margin-top: 0.95rem;
          font-size: 0.48rem;
          color: #999999;
        }
        .upBtn-add2 {
          font-size: 0.27rem;
          color: #999999;
        }
      }
    }
    .publishBtn {
      /*margin: 1.5rem auto;*/

      text-align: center;
      color: #e58304;
      font-size: 0.4rem;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #ffffff;

      .Btn {
        width: 9.01rem;
        height: 1.09rem;
        line-height: 1.09rem;
        border: 0.026667rem solid #e88403;
        border-radius: 0.48rem;
        text-align: center;
        /* left: 10px; */
        margin-left: 5%;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
