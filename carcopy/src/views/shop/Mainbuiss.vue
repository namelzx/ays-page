<template>
  <!--  主营业务  -->
  <div class="hours">
    <div @click="toggleRetun" class="toptitle">
        <Toptitle :title="title" />
    </div>
    <div class="offside">
        <div class="offside-manage" @click="selecClick">管理</div>
        <div class="offside-add" v-if="!selectShow" @click="toggleAdd">添加业务</div>
        <div class="offside-add" v-else></div>
    </div>
    <div class="hoursBox">

      <!--   业务内容  -->
      <div>
        <div class="section"  v-for="(item,index) in business" :key="index">
          <div class="warp-se" v-if="selectShow">
              <van-checkbox v-model="item.checked" checked-color="#ea3756" icon-size="16px"></van-checkbox>
          </div>
          <div class="hours-section">
            <div class="title">业务{{item.id}}</div>
            <div class="section-right" @click="toggleAmend(item.id,item.content)">
              <div class="right-name">{{item.content}}</div>
              <div class="right-fx">
                <img src="../../assets/right-fx.png" />
              </div>
            </div>
          </div>
        </div>
        <!--  开始 -->

        <!-- 结束 -->
      </div>
      <!--  删除完成按钮  -->
      <div v-if="selectShow" class="hou-buttom" @click="cilckShowbottom">删除</div>
    </div>
  </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
import {PostBusingessByAdd,GetBusingessByList} from "@/api/shop";
import {mapGetters} from 'vuex'

export default {
  name: "Mainbuiss",
  data() {
    return {
      title:'主营业务',
      // showSection: true,
      selectShow: false,
      deletaIndex: "",
      business: [

      ]
    };
  },
    computed:{
        ...mapGetters([
            'userInfo'
        ])
    },
  methods: {
    toggleRetun() {
      this.$router.push({path:'/manage-business'});//返回上一层
    },
    selecClick() {
          this.selectShow = !this.selectShow
      },
      //添加业务
    toggleAdd(){
      // let id = this.business.length + 1;
      // this.business.push({
      //   id:id,
      //   content:'汽车美容'
      // })

        var temp={
            shop_id:this.userInfo.id,
            content:'暂未描述'
        }
        PostBusingessByAdd(temp).then(res=>{
            console.log(res)
            GetBusingessByList(this.userInfo.id).then(res=>{
                this.business=res.data
            })
        })

    },
    clickShows() {
      this.showSection = !this.showSection;
    },
    showDeleta(index) {
      this.deletaIndex = index;
      console.log(index);
    },
    //删除
    cilckShowbottom() {
      this.selectShow = !this.selectShow
      for(let i=0;i<this.business.length;i++){
        if(this.business[i].checked===true){
          this.business.splice(i, 1);
          console.log(i);
        }
      }
    },
    toggleAmend(id, name) {
      this.$router.push({
        path: "/manage-business/mainAmend",
        query: { id, name }
      });
    }
  },
  components:{
      Toptitle
  },
  created() {
    if(this.$route.query.index!=='' && this.$route.query.name!==""){
        let i = this.$route.query.index
        let name = this.$route.query.name
        // this.business[i].content = name
    }

      GetBusingessByList(this.userInfo.id).then(res=>{
         this.business=res.data
      })
  }
};
</script>
<style lang="stylus" scoped>
.hours {
  overflow: hidden;
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

  .hoursBox {
    width: 9.15rem;
    margin: 0 auto;

    .hours-add {
      height: 1rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .add-jia {
        width: 0.43rem;
        height: 0.43rem;
        border: 1px solid rgba(0, 0, 0, 1);
        border-radius: 0.13rem;
        margin-left: 0.37rem;

        .imgs {
          margin-top: 0.05rem;
          margin-left: 0.1rem;
          width: 0.25rem;
          height: 0.25rem;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .section{
      width 10rem;
      display flex;
      align-items center;
      .warp-se{
          margin-right 0.43rem;
      }
      .hours-section {
        width 9.15rem;
        height: 1.15rem;
        align-items: center;
        border-bottom: 1px solid #DCDCDC;
        display: flex;
        justify-content: space-between;
        .title {
          font-size: 0.4rem;
          color: #333333;
        }
        .section-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;

          .right-name {
            width: 5rem;
            text-align: right;
            color: #999999;
            font-size: 0.4rem;
          }

          .right-fx {
            margin-left: 0.3rem;
            width: 0.3rem;
            height: 0.3rem;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }



    .hours-deleta {
      height: 1.15rem;
      align-items: center;
      display: flex;
      justify-content: space-between;

      .deleta-icon {
        width: 0.43rem;
        height: 0.43rem;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .deleta-quantum {
        height: 1.15rem;
        width: 8.29rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #DCDCDC;

        .title {
          font-size: 0.4rem;
          color: #333333;
        }

        .section-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;

          .right-name {
            width: 5rem;
            text-align: right;
            color: #999999;
            font-size: 0.4rem;
          }

          .right-fx {
            margin-left: 0.3rem;
            width: 0.3rem;
            height: 0.3rem;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }

    .hou-buttom {
      position: absolute;
      bottom: 2rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 7.95rem;
      height: 1.09rem;
      line-height: 1.09rem;
      text-align: center;
      background: rgba(234, 55, 86, 1);
      box-shadow: 0rem 0rem 0rem 0rem rgba(234, 55, 86, 0.56);
      border-radius: 1rem;
      color: #fff;
      font-size: 0.4rem;
    }
  }
}
</style>
