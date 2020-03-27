<template>
  <div class="category-container">
    <div
      class="category-item"
      style="background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/install%402x.png');background-position: center;
background-size: cover;"
      @click="goToDetail('/install')"
    >
      <p class="cate-title">安装单</p>
      <p class="cate-eng">INSTALLATION LIST</p>
    </div>
    <div
      class="category-item"
      style="background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/%E4%BC%98%E6%83%A0%E5%88%B8%E8%83%8C%E6%99%AF%402x%20%281%29.png');background-position: center;
background-size: cover;"
      @click="goToDetail('/coupon')"
    >
      <p class="cate-title">优惠券</p>
      <p class="cate-eng">COUPON</p>
    </div>
    <!--<div class="category-item"-->
    <!--style="background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/bill%402x.png');background-position: center;-->
    <!--background-size: cover;"-->
    <!--@click="goToDetail('/bill')"-->
    <!--&gt;-->
    <!--<p class="cate-title">账单</p>-->
    <!--<p class="cate-eng">BILL</p>-->
    <!--</div>-->
    <div
      class="category-item"
      style="background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/official.png');background-position: center;
background-size: cover;"
      @click="goToDetail('/imagetext')"
    >
      <p class="cate-title">图文案例</p>
      <p class="cate-eng">CASE</p>
    </div>
    <div
      class="category-item"
      style="background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/upload%402x.png');background-position: center;
background-size: cover;"
      @click="goToDetail('/upload')"
    >
      <p class="cate-title">视频案例</p>
      <p class="cate-eng">VIDEO UPLOAD</p>
    </div>
    <div
      class="category-item"
      style="background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/slip.png');background-position: center;
background-size: cover;"
      @click="goToDetail('/slip')"
    >
      <p class="cate-title">核销</p>
      <p class="cate-eng">VERIFICARTION SLIP</p>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  name: "Category",
  props: {
    cateList: {
      type: Array
    }
  },
  methods: {
    goToDetail(data) {
      this.$router.push(data);
    }
  }
};
</script>

<style lang="stylus" scoped>
.category-container {
    margin-top: 1rem;
    padding: 0 16px;
    display: flex;
    flex-wrap wrap;
}

.category-item {
    width: 47%;
    display flex;


    flex-wrap wrap;
    margin-right 2%;
    // border: 1px solid #d1d1d1;
    border-radius 5px;
    margin-bottom: 14px;
    height: 0;
    padding-bottom: 15%;
    overflow: hidden;
    margin-left: 2px;
    box-shadow: 0 0 0.2rem 0 #f5f5f5;
}



.category-item p {
    margin 0;
    margin-left 13px;
}

.category-item p.cate-title {
    margin-top 9px;
    color: #333;
    font-size: 0.48rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
}

.category-item p.cate-eng {
    color: #333;
    font-size: 0.27rem;
    font-family: DIN Alternate;
    margin-top .1rem;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
}
</style>
