<template>
  <!-- 产品管理  -->
  <div class="manage">
    <div @click="toggleRetun" class="toptitle">
        <Toptitle :title="title" />
    </div>
    <div class="offside">
        <div class="offside-manage" @click="selecClick">管理</div>
        <div class="offside-add" v-if="!selectShow" @click="toggleAdd">添加产品</div>
        <div class="offside-add" v-else></div>
    </div>
    <div class="manageBox">
      <div class="man-list">
        
        <div class="list-warp"  v-for="(item,index) in pulist" :key="index">

          <div class="warp-se" v-if="selectShow">
            <van-checkbox v-model="item.checked" checked-color="#ea3756" icon-size="16px"></van-checkbox>
          </div>

          <div class="listHe" @click="toggleDetails(index,item.status)">
            <div class="listHe-img">
              <img src="../../../assets/give1.png" />
            </div>
            <div class="listHe-right">
              <div class="right-cons">
                <div class="cons-title">{{item.title}}</div>
                <div class="cons-desc">{{item.desc}}</div>
                <div class="cons-money">￥<span>{{item.price}}</span></div>
              </div>
              <!-- 上下架 -->
              <div class="up-icon" :class="{active:item.status===1}">
                <div v-if="item.status===2">已下架</div>
                <div v-if="item.status===1">已上架</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- 删除按钮 -->
    <div v-if="selectShow" class="detalis-btn" @click="cilckShowbottom">删除</div>
  </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
/*status  1已上架  2已下架*/
export default {
  name: "Manage",
  data() {
    return {
      title:'产品管理',
      selectShow:false,
      pulist: [
        {
          id: 1,
          status: 2,
          title:"飞利浦/PHILIPS 黑暗战士大灯",
          desc: "UPS海5透镜X2，CNB D1S 5700K氙气灯X2，UPS增强版D1S 安定器X2，原装接线组，说明书",
          price: 1200,
          checked:false
        },
        {
          id: 2,
          status: 1,
          title:
            "飞利浦/PHILIPS 黑暗战士大灯",
          desc:
            "UPS海5透镜X2，CNB D1S 5700K氙气灯X2，UPS增强版D1S 安定器X2，原装接线组，说明书",
          price: 1000,
          checked:false
        }
      ]
    };
  },
  methods: {
    toggleRetun() {
        this.$router.go(-1);//返回上一层
       },
    toggleAdd() {
      this.$router.push({
        path: "/shop/product/manageAdd"
      });
    },
    selecClick() {
           console.log(111)
           this.selectShow = !this.selectShow
       },
    toggleDetails(id,status) {
        this.$router.push({
            path:'/shop/product/manageDetails',
            query:{id,status}
        })
    },
    //删除
    cilckShowbottom() {
      this.selectShow = !this.selectShow
      for(let i=0;i<this.pulist.length;i++){
        if(this.pulist[i].checked===true){
          this.pulist.splice(i, 1);
          console.log(i);
        }
      }
    }
  },
  components:{
      Toptitle
  },
  created() {
    if(this.$route.query.temp.status!==undefined){
        console.log(this.$route.query.temp.status)
        this.pulist.push({
          id:3,
          status:this.$route.query.temp.status,
          title:this.$route.query.temp.title,
          desc:this.$route.query.temp.desc,
          price:this.$route.query.temp.price,
          checked:this.$route.query.temp.checked
        })
    }
  }
};
</script>
<style lang="stylus" scoped>
.manage {
  .toptitle{
    position relative
  }
  .offside{
    position absolute;
    top 0;
    right 0.42rem;
    height 1.2rem;
    line-height 1.2rem;
    display flex;
    font-size:0.35rem;
    font-family:Source Han Sans CN;
    font-weight:400;
    z-index 10;
    .offside-manage{

    }
    .offside-add{
        width 2rem;
        text-align right;
        color #EA3756;
    }
  }
  .manageBox {
    width: 10rem;
    margin-left .3rem;
    overflow hidden;
    .man-add {
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
    .man-list {
      clear: both;
      overflow hidden;
      .list-warp{
        overflow hidden;
        display flex;
        align-items center;
        .warp-se{
            margin-right 0.43rem;
        }
        .listHe {
          width: 9.15rem;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.4rem;
          .listHe-img {
            margin-top: 0.15rem;
            width: 2.51rem;
            height: 2.51rem;
            padding-bottom .27rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .listHe-right {
            width 6.61rem
            border-bottom 1px solid #F1F1F1;
            display: flex;
            position relative;
            .right-cons {
              .cons-title {
                margin-left .4rem;
                width 5rem;
                font-size:0.37rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                margin-top: 0.12rem;
                color: #000;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
              }

              .cons-desc {
                width: 6.15rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                margin-top: 0.15rem;
                color: #666666;
                font-size: 0.32rem;
                margin-left .4rem;
                margin-bottom .37rem;
              }

              .cons-money {
                margin-top: 0.15rem;
                color: #EA3756;
                font-size: 0.32rem;
                margin-left .4rem;
                font-family:Source Han Sans CN;
                span{
                  font-size 0.64rem;
                  font-family:Source Han Sans CN;
                  font-weight:500;
                }
              }
            }
            .up-icon{
              position absolute;
              right 0;
              top 0.1rem;
              width:1.09rem;
              height:0.45rem;
              text-align center;
              background:rgba(220,220,220,1);
              border-radius:0.23rem;
              color #999999;
              font-size:0.27rem;
              font-family:Source Han Sans CN;
              font-weight:400;
              div{
                height 0.45rem;
                line-height 0.45rem;
                font-size:0.27rem;
                font-family:Source Han Sans CN;
                font-weight:400;
              }
            }
            .up-icon.active{
              background #EA3756;
              color #ffffff;
            }
          }
        }
      }
    }
  }
  .detalis-btn{
    position absolute;
    left 0;
    right 0;
    bottom 1rem;
      margin 1rem auto;
      width:9.01rem;
      height:1.09rem;
      line-height 1.09rem;
      text-align center;
      background:rgba(234,55,86,1);
      border-radius:1rem;
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      color #ffffff;
  }
}
</style>