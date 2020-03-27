<template>
  <!--  添加产品   -->
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
        <input placeholder="请输入（20个字内）" maxlength="20" v-model="subhead" />
      </div>


      <div class="adds-retail">
        <div class="retail-title">零售价</div>
        <div class="retail-right">
          <input
            v-model="price"
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
        <div class="buttom-cancel" @click="toggleRetun">取消</div>
        <div class="buttom-add"  @click="toggleManage">添加</div>
      </div>
    </div>
  </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
  name: "ManageAdd",
  data() {
    return {
      title:'添加产品',
			id:'',
      name: "",
      subhead:'',
      price: "",
      group: "",
      desc: "",
      fileList: []
    };
  },
  methods: {
    toggleManage() {
      let temp = {
        title: this.name,
        subhead: this.subhead,
        price: this.price,
        group: this.group,
        desc: this.subhead,
        imgs: this.fileList[0].content,
        status:1,
        checked:false
      }
      // console.log(temp,"数据");
      this.$router.push({path: "/shop/product/manage",query:{temp}});
    },
    toggleRetun() {
      this.$router.go(-1);//返回上一层
    }
  },
  components:{
      Toptitle
  },
	created() {
        if(this.$route.query.id!==''){
            this.id = this.$route.query.id;
				}
				else {
					this.id = ''
				}
				// console.log(this.id,"id")
    }
};
</script>
<style lang="stylus" scoped>
.manage-add {
  .addBox {
    width: 9.15rem;
    margin: 0 auto;
    .adds-title {
      width: 9, 15rem;
      height: 1.19rem;
      border-bottom: 1px solid #DCDCDC;
      display: flex;
      align-items center;
      justify-content space-between;
      .title-name {
        margin-top: 0.05rem;
        color: #333;
        font-size: 0.4rem;
        span{
          margin-left .2rem;
        }
      }
      input{
        text-align right ;
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
      height: 1.19rem;
      align-items: center;
      font-size: 0.4rem;
      border-bottom: 1px solid #DCDCDC;

      .retail-title {
        color: #333333;
      }

      .retail-right {
        height: 1.19rem;
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
        padding .3rem 0;
      }

      .esx-texts {
        // margin-top: 0.4rem;
        width: 9.15rem;
        height: 2.67rem;
        border: 0.02rem solid rgba(220, 220, 220, 1);

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
      position absolute;
      left 0;
      right 0;
      bottom 1rem;
      margin 0 auto;
      display flex;
      justify-content space-between;
      width 8.2rem;
      font-size:0.4rem;
      font-family:Source Han Sans CN;
      font-weight:400;
      .buttom-cancel{
        width:3.89rem;
        height:1.09rem;
        line-height 1.09rem;
        border:1px solid rgba(234,55,86,1);
        border-radius:1rem;
        text-align center;
        color #EA3756;
      }
      .buttom-add{
        width:3.89rem;
        height:1.09rem;
        line-height 1.09rem;
        text-align center;
        background:rgba(234,55,86,1);
        border-radius:1rem;
        color #ffffff;
      }
    }
  }
}
</style>