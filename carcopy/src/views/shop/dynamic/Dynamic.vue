<template>
  <!--  门店动态  -->
  <div class="dynamic">
    <div class="dynamicBox">
      <div class="dyn-add" @click="toggleIssue">发布</div>
      <div class="dyn-list">
        <div class="listHe" v-for="(item,index) in 2" :key="index">
          <div class="listHe-desc">改装宝典跨界打劫！正式进军车辆刷隐藏服务！一键开启原车所 有隐藏功能</div>
          <div class="listHe-imgs">
            <div class="imglist">
              <img src="../../../assets/give1.png" />
            </div>
            <div class="imglist">
              <img src="../../../assets/give1.png" />
            </div>
            <div class="imglist">
              <img src="../../../assets/give1.png" />
            </div>
          </div>
          <div class="listHe-time">2018.08.08 08:08</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dynamic",
  methods: {
    toggleIssue() {
      this.$router.push({
        path: "/shop/dynamic/issue"
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.dynamic {
  .dynamicBox {
    width: 9.15rem;
    margin: 0 auto;

    .dyn-add {
      width: 1.47rem;
      height: 0.53rem;
      line-height: 0.53rem;
      text-align: center;
      border: 1px solid rgba(234, 55, 86, 1);
      border-radius: 0.27rem;
      color: #EA3756;
      font-size: 0.27rem;
      margin: 0.28rem 0;
      float: right;
    }

    .dyn-list {
      clear: both;

      .listHe {
        padding: 0.52rem 0;
        border-bottom: 1px solid #DCDCDC;

        .listHe-desc {
          color: #000000;
          font-size: 0.32rem;
        }

        .listHe-imgs {
          margin-top: 0.45rem;
          display: flex;
          justify-content: space-between;

          .imglist {
            width: 2.87rem;
            height: 2.87rem;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }

        .listHe-time {
          margin-top: 0.1rem;
          color: #666666;
          font-size: 0.27rem;
        }
      }
    }
  }
}
</style>