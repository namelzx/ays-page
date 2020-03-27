<template>
  <div class="official-container">
    <div class="cate-bar">
        <div class="cate-barBox">
            <van-search
        v-model="searchValue"
        placeholder="请输入关键词搜索"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div class="soubnt" slot="action" @click="onSearch">搜索</div>
      </van-search>
        </div>
      
    </div>

    <div class="cate-list" v-if="searchValue!==''">
        <Offorderlist :orderlist="orderlist" />
    </div>
  </div>
</template>

<script>
import Offorderlist from "@/components/Offoreder/Offorderlist";
export default {
  name: "offordercriteria",
  data() {
    return {
      showSearchBar: false,
      searchValue: this.$route.query.name,
      orderlist:[
                {
                    title:'欧司朗CBN套装  采用德国光源',
                    icon:require('../../assets/mortgage-img.png'),
                    shopname:'本田2016款飞度1.5L天窗版',
                    owner:'陈某某',
                    number:'13755555555',
                    time:'2019.08.08  12:00',
                    money:800,
                    sum:1,
                    progress:1
                },
                {
                    title:'欧司朗CBN套装  采用德国光源',
                    icon:require('../../assets/mortgage-img.png'),
                    shopname:'本田2016款飞度1.5L天窗版',
                    owner:'陈某某',
                    number:'13755555555',
                    time:'2019.08.08  12:00',
                    money:800,
                    sum:1,
                    progress:2
                },
                {
                    title:'欧司朗CBN套装  采用德国光源',
                    icon:require('../../assets/mortgage-img.png'),
                    shopname:'本田2016款飞度1.5L天窗版',
                    owner:'陈某某',
                    number:'13755555555',
                    time:'2019.08.08  12:00',
                    money:800,
                    sum:1,
                    progress:3
                },
                {
                    title:'欧司朗CBN套装  采用德国光源',
                    icon:require('../../assets/mortgage-img.png'),
                    shopname:'本田2016款飞度1.5L天窗版',
                    owner:'陈某某',
                    number:'13755555555',
                    time:'2019.08.08  12:00',
                    money:800,
                    sum:1,
                    progress:2
                },
                {
                    title:'欧司朗CBN套装  采用德国光源',
                    icon:require('../../assets/mortgage-img.png'),
                    shopname:'本田2016款飞度1.5L天窗版',
                    owner:'陈某某',
                    number:'13755555555',
                    time:'2019.08.08  12:00',
                    money:800,
                    sum:1,
                    progress:3
                }
            ]
    };
  },
  components: {
    Offorderlist
  },
  methods: {
    onSearch() {
      console.log("你好");
    }
  }
};
</script>

<style lang="stylus" scoped>
.official-container{
    width 100%;
    overflow hidden;
}
.cate-bar {
  
  height 1.5rem;
  width: 100%;
  position fixed;
  top 0;
  left  0;
  right 0;
  bottom 0;
  z-index 10;
  background #fff;
}
.cate-barBox{
    width: 93%;
    display: flex;
}

.search-icon {
  padding: 0 10px;
  font-weight: 600;
  color: #333;
}

.cate-bar .van-search {
  width: 100%;
  margin-top: 0;
}

.whole-search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f4f4f4;
  z-index: 9;
}

.whole-search >>> .van-search {
  background: #f4f4f4 !important;
  margin-top: 0;
}

/deep/ .van-search__content--round {
  border: 0.02rem solid #666;
  background: #fff !important;
}

/deep/ .van-cell {
  background: #fff !important;
}

/deep/ .van-cell {
  border-radius: 20px;
}

/deep/ .van-field__control {
  font-size: 0.27rem !important;
}

.bar-item {
  flex: 1;
  text-align: center;
  color: #666;
  font-size: 15px;
}

.soubnt {
  color: #333333;
  font-size: 0.4rem;
}

.bar-item span {
  flex: 1;
  text-align: center;
  color: #999;
  /* font-size 15px; */
  font-size: 14px;
  padding: 4px;
  border: 1px solid transparent;
  transition: color 1.2s, border 1.2s;
  -webkit-transition: color 0.7s, border 0.7s;
}

.cate-bar .bar-item.active span {
  padding: 4px;
  border-bottom: 2px solid #434343;
  /* font-size 18px; */
  /* font-size 16px; */
  color: #333;
  border-radius: 2px;
}

// 内容
.cate-list {
    margin-top 1.8rem;
}
</style>