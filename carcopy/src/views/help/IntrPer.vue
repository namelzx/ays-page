<template>
<div>
  <div @click="toggleRetun"><Toptitle :title="title" /></div>
  <div class="intrper">
      <img src="../../assets/intrper.png" />
  </div>
</div>

</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
  name: "intrper",
  data() {
    return {
        title:'如何完善信息'
    };
  },
  methods:{
        toggleRetun() {
            this.$router.go(-1);//返回上一层
        }
  },
  components:{
      Toptitle
  }
};
</script>
<style lang="stylus" scoped>
.intrper{
    margin-top 1rem
    img{
        width 100%;
        height 100%;
    }
}
</style>
