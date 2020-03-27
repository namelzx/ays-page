<template>
  <!--  产品详情   -->
  <div class="manage-add">
    <div @click="toggleRetun" class="toptitle">
        <Toptitle :title="title" />
    </div>
    <div class="addBox">

      <!--  产品主图  -->
      <div class="adds-map">
        <div class="map-title">产品图片</div>
        <div class="map-up">
          <van-uploader v-model="fileList" multiple :max-count="3" />
        </div>
      </div>

      <div class="adds-title">
        <div class="title-name">产品标题</div>
        <input placeholder="请输入（12个字内）" maxlength="12" v-model="name" />
      </div>

      <div class="adds-title">
        <div class="title-name title-indent">副<span>标</span><span>题</span></div>
        <textarea placeholder="请输入（20个字内）" maxlength="20" v-model="subhead" />
      </div>


      <div class="adds-retail">
        <div class="retail-title">零售价</div>
        <div class="retail-right">
          <input
            v-model="retail"
            pattern="[0-9]*"
            type="number"
            oninput="if(value.length>6)value=value.slice(0,10)"
            placeholder="请输入零售价"
          />
          <div class="right-un">元</div>
        </div>
      </div>
      <div class="adds-retail">
        <div class="retail-title">2人拼团价</div>
        <div class="retail-right">
          <input
            v-model="group"
            pattern="[0-9]*"
            type="number"
            oninput="if(value.length>6)value=value.slice(0,10)"
            placeholder="请输入拼团价"
          />
          <div class="right-un">元</div>
        </div>
      </div>

      

      <!-- 产品说明  -->
      <div class="adds-exs">
        <div class="esx-title">产品说明</div>
        <div class="esx-texts">
          <textarea v-model="desc" placeholder="请输入产品说明"></textarea>
        </div>
      </div>

      <!--  添加按钮  -->
      <div class="adds-buttom">
          <div class="buttom-amend" @click="toggleAmend">修改</div>
          <div class="buttom-status" @click="toggleStatus">{{status===1?"已上架":"已下架"}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
/*status  1已上架  2已下架*/
export default {
  name: "ManageDetails",
  data() {
    return {
      title:'产品详情',
      name: "飞利浦/PHILIPS 黑暗战士大灯",
      subhead:'UPS海5透镜X2,CNB D1S 5700K氙气灯 D1S 安定器X2,原装接线组,说明书',
      retail: 3599,
      group: 2599,
      fileList: [
          { url: 'https://img.yzcdn.cn/vant/leaf.jpg' }
      ],
      desc: "包邮，全国范围内免费安装",
      id:this.$route.query.id,
      status:this.$route.query.status
    };
  },
  methods: {
      //修改
      toggleAmend() {
				// let id = this.id
				this.$router.push({
					path: "/shop/product/manage",
					// query:{id}
				});	
    },
    toggleStatus() {
      let index = this.status
      if(index===1){
        this.status = 2
      }
      else{
        this.status = 1
      }
    },
    toggleManage() {
      this.$router.push({
        path: "/shop/product/manage"
      });
    },
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
.manage-add {
  .addBox {
    width: 9.15rem;
    margin: 0 auto;

    .adds-title {
      width: 9.15rem;
      // height: 1.5rem;
      border-bottom: 1px solid #DCDCDC;
      display: flex;
      justify-content space-between;
      margin-top: 0.6rem;
      padding-bottom: 0.3rem;

      .title-name {
        margin-top: 0.05rem;
        color: #333;
        font-size: 0.4rem;
        span{
          margin-left .2rem;
        }
      }
      textarea {
        text-align left;
          // margin-left: 0.48rem;
          width: 7rem;
          border: 0;
          resize: none;
          font-size: 0.4rem;
      }
      input{
        text-align right;
          margin-left: 0.48rem;
          width: 6.5rem;
          border: 0;
          resize: none;
          font-size: 0.4rem;
      }
      input::-webkit-input-placeholder {
        color: #999999;
        font-size: 0.4rem;
      }
    }

    .adds-retail {
      display: flex;
      justify-content: space-between;
      height: 1.27rem;
      align-items: center;
      font-size: 0.4rem;
      border-bottom: 1px solid #DCDCDC;

      .retail-title {
        color: #333333;
      }

      .retail-right {
        height: 1.27rem;
        align-items: center;
        display: flex;
        justify-content: flex-end;

        input {
          border: 0;
          text-align: right;
        }

        .right-un {
          margin-left: 0.23rem;
        }
      }
    }

    .adds-map {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      .map-title {
        color: #333;
        font-size: 0.4rem;
      }

      .map-up {
        margin-top: 0.4rem;
      }
    }

    .adds-exs {
      .esx-title {
        color: #333;
        font-size: 0.4rem;
        padding: .3rem 0;
      }

      .esx-texts {
        // margin-top: 0.4rem;
        width: 9.15rem;
        height: 2.67rem;
        border: 1px solid rgba(220, 220, 220, 1);

        textarea {
          width: 8.5rem;
          margin-top: 0.25rem;
          height: 2.1rem;
          margin-left: 0.28rem;
          border: 0;
          resize: none;
          font-size 0.4rem;
        }

        textarea::-webkit-input-placeholder {
          color: #999999;
          font-size: 0.4rem;
        }
      }
    }

    .adds-buttom {
      margin: 2.5rem auto 1rem;
      width: 8.5rem;
      display flex;
      justify-content space-between;
      .buttom-amend{
          width:3.89rem;
            height:1.09rem;
            line-height 1.09rem;
            text-align center;
            border:1px solid rgba(234,55,86,1);
            // box-shadow:0rem 0rem 0.13rem 0rem rgba(234,55,86,0.56);
            border-radius:1rem;
            color #EA3756;
            font-size 0.4rem;
      }
      .buttom-status{
            width:3.89rem;
            height:1.09rem;
            line-height 1.09rem;
            text-align center;
            background:rgba(234,55,86,1);
            // box-shadow:0rem 0rem 0rem 0rem rgba(234,55,86,0.56);
            border-radius:1rem;
            color #fff;
            font-size 0.4rem;
      }
    }
  }
}
</style>