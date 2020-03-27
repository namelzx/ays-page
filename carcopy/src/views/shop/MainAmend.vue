<template>
  <div class="mainAmend">
    <div @click="toggleRetun" class="toptitle">
        <Toptitle :title="title" />
    </div>
    <div class="amendHe">
      <van-cell-group class="amen-group">
        <van-field
          v-model="postData.content"
          clearable
          maxlength="8"
          show-word-limit
          :border="border"
          placeholder="请输入业务"
        />
      </van-cell-group>
    </div>

    <div class="amendHe-btn" @click="togglreMain">保存</div>
  </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
import {PostBusingessByAdd} from "@/api/shop";

export default {
  name: "MainAmend",
  data() {
    return {
      title:'主营业务修改',
      border: false,
        postData:{
          content: this.$route.query.name,
            id:this.$route.query.id,
        }
    };
  },
  methods: {
    toggleRetun() {
      this.$router.go(-1);
    },
    togglreMain() {
     PostBusingessByAdd(this.postData).then(res=>{
         console.log(res)
         this.$router.push({
             path: "/manage-business/mainbuiss",
             // query: { index, name }
         });
     })

    }
  },
  mounted() {
    console.log(this.$route.query.id);
  },

  components:{
      Toptitle
  }
};
</script>
<style lang="stylus" scoped>
.mainAmend {
  // position: fixed;
  // overflow: auto;
  // height: 100%;
  // background: #f8f8f8;
  // width: 100%;

  .amendHe {
    width: 10rem;
    height: 1.6rem;
    background: #fff;
    overflow: hidden;
    padding-bottom: 0.1rem;

    .amen-group {
      padding-top: 0.2rem;
    }
  }

  .amendHe-btn {
    margin: 10rem auto 0;
    width: 7.95rem;
    height: 1.09rem;
    line-height: 1.09rem;
    background: rgba(234, 55, 86, 1);
    box-shadow: 0rem 0rem 0.13rem 0rem rgba(234, 55, 86, 0.56);
    border-radius: 1rem;
    color: #FFFFFF;
    font-size: 0.4rem;
    text-align: center;
  }
}
</style>
