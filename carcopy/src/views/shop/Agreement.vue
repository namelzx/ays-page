<template>
  <!--  服务协议  -->
  <div class="agreement">
      <div @click="toggleRetun"><Toptitle :title="title" /></div>
      <div class="agBox">
          <div class="ag-title">《消费者保障服务协议》</div>
          <div class="ag-content">
              <div>本协议由您与广州市安亿仕电子科技有限公司共同缔结，本协议具有合同效力。</div>
              <div>本协议中协议双方合成协议方，广州市安亿仕电子科技有限公司在本协议中亦称为“安亿仕”。</div>
              <div>一、协议内容及生效</div>
              <div>1、本协议内容包括协议正文及所有安亿仕一件发布或者后续发布并采取合理途径提前七个自然日通知您的与“消费者保障服务”相关的规则。前述规则为本协议不可分割的组成部分，与协议正文具有同等法律效力。</div>
              <div>2、您应当在实际向其他安亿仕会员（以下简称“买家”）提供消费者保障服务之前认真阅读全部协议内容，对于协议中</div>
          </div>
      </div>
  </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
  name: "Agreement",
  data() {
    return {
      title:'服务协议',
    }
  },
  methods:{
    toggleRetun() {
      this.$router.go(-1);
    }
  },
  components:{
    Toptitle
  }
};
</script>
<style lang="stylus" scoped>
.agreement {
  position: fixed;
  overflow: auto;
  height: 100%;
  background: #fcfcfc;
  width: 100%;
  .agBox{
      margin 0.5rem auto 0;
      width 9.08rem;
      .ag-title{
          color #000000;
          font-size:0.4rem;
          font-weight:500;
      }
      .ag-content{
          font-size 0.27rem;
          line-height 0.48rem;
          color #666666;
          margin-top .5rem;
      }
  }
}
</style>