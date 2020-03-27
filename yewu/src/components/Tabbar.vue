<template>
  <div class="Tabbar">
      <van-tabbar 
        v-model="active"
        active-color="#333333"
        inactive-color="#999999"
        route
    >
        <van-tabbar-item to="/">
            <span>工作台</span>
            <img
            class="icon1"
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active : icon.normal"
            >
        </van-tabbar-item>
        <van-tabbar-item to="/order">
            <span>订单</span>
            <img
            class="icon2"
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active1 : icon.normal1"
            >
        </van-tabbar-item>
        <van-tabbar-item to="/datas">
            <span>数据</span>
            <img
            class="icon3"
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active2 : icon.normal2"
            >
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
      return {
          active:0,
          icon: {
            normal: require("../assets/workbench-nor.png"),
            active: require('../assets/workbench-pro.png'),
            normal1: require('../assets/order-nor.png'),
            active1: require('../assets/order-pro.png'),
            normal2: require('../assets/data-nor.png'),
            active2: require('../assets/data-pro.png')
          },
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .icon1{
    width: 0.59rem;
    height: 0.61rem  !important;
  }
  .icon2{
    width:  0.53rem;
    height: 0.61rem  !important;
  }
  .icon3{
    width:  0.59rem;
    height: 0.61rem  !important;
  }
</style>
