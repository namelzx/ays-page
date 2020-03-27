<template>
  <!-- 发布动态  -->
  <div class="issue">
    <div class="issueBox">
      <textarea v-model="value" />
      <div class="iss-up">
        <van-uploader v-model="fileList" multiple :max-count="3">
          <div class="upBtn">
            <div class="upBtn-add">+</div>
            <div class="upBtn-add2">添加相片</div>
          </div>
        </van-uploader>
      </div>

      <div class="iss-buttom" @click="toggleDyn">发布</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Issue",
  data() {
    return {
      value: "双11阿帕全场八折双11阿帕全场八折！",
      fileList: []
    };
  },
  methods:{
      toggleDyn() {
          this.$router.push({
            path: "/shop/dynamic"
        });
      }
  }
};
</script>
<style lang="stylus" scoped>
.issue {
  .issueBox {
    width: 9.15rem;
    margin: 0.48rem auto 0;

    textarea {
      width: 9.15rem;
      height: 3rem;
      border: 0;
      resize: none;
      font-size: 0.32rem;
      color: #000000;
    }

    textarea::-webkit-input-placeholder {
      color: #999999;
      font-size: 0.32rem;
    }

    .iss-up {
      .upBtn {
        width: 2.28rem;
        height: 2.28rem;
        border: 1px solid #DCDCDC;
        text-align: center;
        .upBtn-add {
          margin-top: 0.7rem;
          font-size: 0.48rem;
          color: #000000;
        }

        .upBtn-add2 {
          font-size: 0.32rem;
          color: #333333;
        }
      }
      /deep/ .van-uploader__preview-image{
            width: 2.28rem;
            height: 2.28rem;
      }
    }

    .iss-buttom{
        margin-top 2.3rem;
        width:9.15rem;
        height:1.07rem;
        line-height 1.07rem;
        text-align center;
        color #fff;
        font-size 0.4rem;
        background:rgba(234,55,86,1);
        border-radius:1rem;
    }
  }
}
</style>