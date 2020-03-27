<template>
  <div class="warp">
    <div class="poun">
      <van-index-bar>
        <div v-for="(item,index) in carList" :key="index">
          <van-index-anchor :index="item.index" />
          <van-cell :title="items" v-for="(items,index) in item.list" :key="index" />
        </div>
      </van-index-bar>
    </div>
  </div>
</template>
<script>
import { Citylist } from "@/api/city";
export default {
  name: "Tels",
  data() {
    return {
      carList: [
        {
          index: "A",
          list: [
            "AC Schnitzer",
            "ALPINA",
            "AUXUN敖璇",
            "阿尔法.罗密欧",
            "阿斯顿.马丁",
            "爱驰",
            "安凯客车",
            "奥迪"
          ]
        },
        {
          index: "B",
          list: [
            "巴博斯",
            "宝骏",
            "宝马",
            "宝琪汽车",
            "宝沃",
            "保时捷",
            "北京",
            "北京汽车",
            "北汽昌河",
            ""
          ]
        },
        {
          index: "C",
          list: [
            "巴博斯",
            "宝骏",
            "宝马",
            "宝琪汽车",
            "宝沃",
            "保时捷",
            "北京",
            "北京汽车",
            "北汽昌河",
            ""
          ]
        },
        {
          index: "D",
          list: [
            "巴博斯",
            "宝骏",
            "宝马",
            "宝琪汽车",
            "宝沃",
            "保时捷",
            "北京",
            "北京汽车",
            "北汽昌河",
            ""
          ]
        },
        {
          index: "E",
          list: [
            "巴博斯",
            "宝骏",
            "宝马",
            "宝琪汽车",
            "宝沃",
            "保时捷",
            "北京",
            "北京汽车",
            "北汽昌河",
            ""
          ]
        },
        {
          index: "F",
          list: [
            "巴博斯",
            "宝骏",
            "宝马",
            "宝琪汽车",
            "宝沃",
            "保时捷",
            "北京",
            "北京汽车",
            "北汽昌河",
            ""
          ]
        }
      ]
      //   cityList: [],
      //   hotList: []
    };
  },
  mounted() {
    Getcar().then(res => {
      this.cities = res.data;
      console.log(res.data);
    });
  }
};
</script>
<style lang="scss" scoped>
.warp {
  position: fixed;
  overflow: auto;
  height: 100%;
  background: #f7f7f7;
  width: 100%;
}
.poun {
  width: 9.15rem;
  height: 13rem;
  margin: 0 auto;
  // overflow: hidden;
  // background: blue;
}
</style>