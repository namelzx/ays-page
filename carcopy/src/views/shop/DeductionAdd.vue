<template>
  <!--  添加抵扣券 -->
  <div class="deductionAdd">
    <div class="addBox">
      <div class="add-money">
        <div class="money-title">购买金额</div>
        <div class="money-nums">
          <input
            v-model="buyValue"
            pattern="[0-9]*"
            type="number"
            oninput="if(value.length>6)value=value.slice(0,6)"
            placeholder="请输入购买金额"
          />
          <div class="nums-un">元</div>
        </div>
      </div>
      <div class="add-money">
        <div class="money-title">抵扣金额</div>
        <div class="money-nums">
          <input
            v-model="addValue"
            pattern="[0-9]*"
            type="number"
            oninput="if(value.length>6)value=value.slice(0,6)"
            placeholder="请输入抵扣金额"
          />
          <div class="nums-un">元</div>
        </div>
      </div>

      <!--  说明 -->
      <div class="add-explain">
        <div class="title">说明（10字内）：</div>
        <div class="texts">
          <textarea v-model="explain" maxlength="10"></textarea>
        </div>
      </div>

      <!-- 添加按钮  -->
      <div class="add-btn" @click="toggleDedu">添加</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DeductionAdd",
  data() {
    return {
      buyValue: "",
      addValue: "",
      explain: "到店送精美礼品一份"
    };
  },
  methods:{
      toggleDedu() {
          this.$router.go(-1);//返回上一层
      }
  }
};
</script>
<style lang="stylus" scoped>
.deductionAdd {
  overflow: hidden;

  .addBox {
    width: 9.15rem;
    margin: 0 auto;

    .add-money {
      width: 9.15rem;
      height: 1.27rem;
      line-height: 1.27rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #DCDCDC;

      .money-title {
        color: #333333;
        font-size: 0.4rem;
      }

      .money-nums {
        display: flex;

        input {
          width: 6rem;
          border: 0;
          background: none;
          font-size: 0.4rem;
          text-align: right;
          margin-right: 0.36rem;
        }

        .nums-un {
          font-size: 0.4rem;
        }
      }
    }

    .add-explain {
      .title {
        height: 1.27rem;
        line-height: 1.27rem;
        color: #333333;
        font-size: 0.4rem;
      }

      .texts {
        width: 9.15rem;
        height: 1.84rem;
        border: 1px solid rgba(220, 220, 220, 1);

        textarea {
          width: 8.5rem;
          height: 1rem;
          color: #333;
          font-size: 0.4rem;
          margin-top: 0.2rem;
          margin-left: 0.2rem;
          border: 0;
          resize: none;
        }
      }
    }
    .add-btn {
        margin 1.44rem auto;
      width: 7.95rem;
      height: 1.09rem;
      line-height 1.09rem;
      text-align center;
      background: rgba(234, 55, 86, 1);
      box-shadow: 0rem 0rem 0.13rem 0rem rgba(234, 55, 86, 0.56);
      border-radius: 1rem;
      font-size 0.4rem;
      color #fff;
    }
  }
}
</style>