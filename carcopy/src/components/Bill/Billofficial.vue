<template>
  <div class="official-container">
    <div class="cate-bar">
      <van-search
        v-model="searchValue"
        placeholder="输入账单相关信息"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div class="soubnt" slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
  </div>
</template>

<script>
export default {
  name: "billofficial",
  data() {
    return {
      showSearchBar: false,
      searchValue: ""
    };
  },
  methods: {
    goBack() {
      this.toggleShowCode();
      this.$router.push("/official");
    },
    showSearch() {
      this.showSearchBar = !this.showSearchBar;
    },
    onSearch() {
      this.showSearch();
      let value = this.searchValue;
      this.$router.push({path:'/bill/billsearch',query:{name:value}});
    }
  }
};
</script>

<style lang="stylus" scoped>
.official-container{
    position fixed;
    top 0;
    bottom 0;
    left  0;
    right 0;
    background #f7f7f7;
}
.cate-bar {
  padding: 10px 14px;
  display: flex;
  width: 93%;
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

/deep/ .van-search{
    background #f7f7f7 !important;
}
/deep/ .van-cell{
    background #f1f1f1 !important;
}
/deep/ .van-cell{
    border-radius:20px;
}
/deep/ .van-field__left-icon{
    display none;
}
/deep/ .van-cell{
    padding-left 10px;
}

.bar-item {
  flex: 1;
  text-align: center;
  color: #666;
  font-size: 15px;
}
.soubnt{
    color #666666;
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

// 卡片内容
.content-item {
  display: flex;
  margin: 20px 10px;
  border: 1px solid #e5e5e5;
  border-radius: 13px;
  overflow: hidden;
  box-shadow: 0 0 3px 0 #e5e5e5;
}

.item-bg-left {
  overflow: hidden;
  height: 0;
  padding-bottom: 100px;
  background: url('https://kedand.oss-cn-beijing.aliyuncs.com/uploads/coupon.png'); // kedand.oss-cn-beijing.aliyuncs.com/uploads/coupon.png);
  width: 40%;
  background-size: cover;
  background-position: 0 0px;
  background-repeat: no-repeat;
  padding: 10px 6px 100px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.item-bg-left p {
  margin: 0;
  color: #fff;
}

.item-bg-left p:first-child {
  font-size: 18px;
  padding-left: 4px;
  font-weight: 300;
}

.item-bg-left p:nth-child(2) {
  font-size: 36px;
  text-align: center;
  margin-top: 5px;
}

.item-bg-left p:nth-child(2) span {
  font-size: 18px;
  margin-right: 5px;
}

.item-bg-left p:last-child {
  font-size: 12px;
  margin-top: 12px;
}

.item-info-right {
  width: 60%;
  font-size: 12px;
  padding: 0 10px;
  color: #333;
}

.item-info-right p {
  margin: 9px 0;
}

.owner-info {
  padding: 0 0 10px;
  color: #999;
}

.owner-info .info-left {
  margin-right: 10px;
}

.date-action {
  display: flex;
  border-top: 1px solid #e5e5e5;
}

.da {
  width: 33.33%;
  text-align: center;
  color: #999;
}

.date-action {
  padding-top: 10px;
}

.date-action .action {
  color: #FF7F58;
}

.date-action .rate span {
  border-bottom: 1px solid #E88403;
  color: #333;
}

.rate-content {
  border: 1px solid #e5e5e5;
  padding: 0 15px 13px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  margin: 0 10px 15px;
}

.rate-content .star {
  margin: 10px 0;
}

.rate-text {
  color: #000;
  font-weight: 500;
  font-size: 12px;
  overflow: hidden;
  width: 99%;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.img-list {
}

.img-list .img-item {
  display: inline-block;
  margin-top: 13px;
  margin-right: 14px;
}

.img-list .img-item img {
  width: 43px;
  height: 43px;
}

// 弹出框
.code-input {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #000000aa;
}

.code-wrap {
  background: #fff;
  width: 80%;
  margin: 40% 10%;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
}

.code-title {
  font-size: 16px;
  font-weight: 400;
  color: #333;
  margin: 14px 0;
}

.code-desc {
  font-size: 14px;
  color: #666;
  font-weight: 400;
  margin: 0;
}

.action-btn {
  margin-top: 30px;
  display: flex;
  border-top: 1px solid #e5e5e5;
}

.action-btn span {
  flex: 1;
  font-size: 16px;
  color: #999;
  padding: 15px 0;
}

.action-btn span:last-child {
  border-left: 1px solid #e5e5e5;
  color: #000;
}

.code-wrap >>> .van-field__left-icon {
  display: none;
}

.van-search {
  margin-top: 20px;
}

.status-msg {
  color: #EF705C;
  font-size: 16px;
  font-weight: 400;
}
</style>