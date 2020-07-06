<template>
  <div class="voucher">
    <van-popup v-model="show">
      <van-loading size="24px">上传中...</van-loading>

    </van-popup>

    <div @click="toggleRetun">
      <Toptitle :title="title" />
    </div>
    <div class="voucher-up">
      <div class="up-title">上传凭证</div>
      <van-uploader v-model="fileList" multiple :max-count="1" :after-read="afterRead">
        <div class="upBtn">
          <div class="upBtn-img">
            <img src="../../assets/sc.png" />
          </div>
        </div>
      </van-uploader>
    </div>
    <!-- 示例图  -->
    <div class="voucher-give">
      <div class="give-imgs">
        <div class="imgs-coms">
          <img src="../../assets/give1.jpg" />
        </div>
        <div class="imgs-coms">
          <img src="../../assets/give2.jpg" />
        </div>
      </div>
      <div class="give-hint">示例图（含车头、车牌、包装盒）</div>
    </div>

      <div class="fixed">
      <div data-v-0f60746f="" class="turn ">
          <!--<div class="up-submit" >提交</div>-->
          <div @click="toggleInstall" class="have-btn">提交</div></div>
      </div>
  </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
import axios from 'axios'
import {GetShopIdByInfo} from "@/api/shop";
import aliOss from "../../utils/aliOss";

import myconfig from "@/config";
import {getUser, removeUser, setUser} from '@/utils/auth'
import {GetIdBydetails,PostNoteByAdd,GetIdByStatus} from "@/api/order";
import {getInfo, login} from '@/api/user'
import { Toast } from 'vant';
import {mapGetters} from "vuex";
import { Popup ,Loading} from 'vant';
export default {
  name: "Voucher",
  data() {
    return {
      show:false,
      title: "确认安装",
      fileList: [],
        is_send:true,
        postFrom:{
            credentials:'',
            status:4,
            id:undefined,
            shop_id:undefined,
        }

    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  components: {
    Toptitle
  },
    created(){

        this.postFrom.id = this.$route.query.id;

        let shop_id=this.$route.query.shop_id;
        if(shop_id===undefined){
            const strToObj = JSON.parse(getUser())
            this.postFrom.shop_id=strToObj.id //当前操作id

        }else {
            this.postFrom.shop_id=shop_id
        }

        if(shop_id!==undefined){
          console.log('用户进入')
            GetShopIdByInfo(shop_id).then(res=>{
                console.log(res)
                this.$store.dispatch('shop/setShop', res.data)
                getInfo(res.data.user_id).then(res=>{
                    this.$store.dispatch('user/login', res.data)
                    setUser(res.data)
                })

            })
        }

        console.log(this.postFrom)
    },
  methods: {
      afterRead(file) {
        this.show=true
        const op=aliOss.ossUploadFile(file)
        op.then(res=>{
          this.show=false
          this.postFrom.credentials=myconfig.oss_url+ res.url
        })

      },
    toggleRetun() {
      this.$router.go(-1);//返回上一层
    },
    toggleInstall() {
      if (this.postFrom.credentials !== "") {
          if(!this.is_send){
              return true
          }
          this.is_send=false
         this.postFrom.user_id=this.userInfo.id
          GetIdByStatus(this.postFrom).then(res=>{
              if(res.code===20000){
                  this.$router.push({ path: "/install", query: { id: 3 } });
              }else{
                  Toast(res.msg);
              }

          })
      }else{
          // console.log('12',3)
          Toast('请检查,凭证是否上传');
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
    .fixed{
        line-height: 1.09rem;
        /* background: #e9375b; */
        border-radius: 1rem;
        font-family: Source Han Sans CN;
        .turn{
            /* width: 8.7rem; */
            height: 1.01rem;
            margin: 0.6rem auto;
            display: flex;
            justify-content: space-between;
            margin: 0 auto 0.5rem;
            text-align: center;
            color: #fff;
            font-size: 0.48rem;
            font-weight: 500;
            border-radius: 0.27rem;
            width: 9.01rem;
            height: 1.09rem;
            line-height: 1.09rem;
            border-radius: 0rem;
            font-family: Source Han Sans CN;
            display: flex;
            /* padding-left: 0.5rem; */
            position: fixed;
            z-index: 3;
            bottom: 0;
            background: #fff;
            width: 100%;
            margin-bottom: 0;
            padding-top: 0.266667rem;
            padding-bottom: 0.266667rem;
            border-top: 0.026667rem solid #ebeef5;
            .have-btn{
                margin: 0 auto 0.5rem;
                text-align: center;
                color: #fff;
                font-size: 0.48rem;
                font-weight: 500;
                background: #e9375b;
                border-radius: 1rem;
                width: 9.01rem;
                height: 1.09rem;
                line-height: 1.09rem;
                background: #e9375b;
                margin-left: 5%;
                margin-bottom: 0.24rem;
                font-family: Source Han Sans CN;
                display: flex;
                padding-left: 0.2rem;
                justify-content: center;
                position: fixed;
                z-index: 999;
                bottom: 0;
            }
        }
    }
.voucher {
  .voucher-up {
    width: 7.3rem;
    margin: 0.5rem auto 0.8rem;
    margin-top 1.5rem;

    .up-title {
      text-align center;
      color: #2B2B2B;
      margin-bottom: 0.39rem;
      font-size:0.48rem;
      font-family:Source Han Sans CN;
      font-weight:400;
    }

    /deep/ .van-uploader__preview-image {
      width: 7.17rem;
      height: 4.27rem;
    }

    .upBtn {
      width: 7.17rem;
      height: 4.27rem;
      border: 1px dashed rgba(181, 181, 181, 1);
      border-radius: 0.13rem;
      position: relative;

      .upBtn-img {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 1.76rem;
        height: 1.76rem;
        margin: auto;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

  }

  .voucher-give {
    width: 9rem;
    margin: 0 auto;

    .give-imgs {
      display: flex;
      justify-content: space-between;

      .imgs-coms {
        width: 4.35rem;
        height: 2.59rem;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .give-hint {
      text-align: center;
      margin-top: 0.39rem;
      font-size: 0.32rem;
      color: #999999;
    }
  }
  .up-submit {
    margin 4rem auto 0;
    width:9.01rem;
    height:1.09rem;
    line-height 1.09rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
    background: #EA3756;
    border-radius:1rem;
  }
  .van-popup{
    background:none !important;
  }
}
</style>
