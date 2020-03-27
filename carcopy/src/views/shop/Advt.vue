<template>
  <!--  广告  -->
  <div class="advt">
    <!-- <div class="advt-bg"><img src="../../assets/addshop.png" /></div> -->
    <div @click="toggleRetun" class="toptitle">
        <Toptitle :title="title" />
    </div>
    <div class="advtBox">
      <div class="advtHe">
        <div class="ad-title">
          <div class="title-he"></div>
          <div class="title-name">上传/编辑广告图</div>
        </div>

        <!-- 图片展示  -->
        <div class="ad-show">
          <van-uploader v-model="fileList" :deletable="deletable" multiple :max-count="3" :after-read="afterRead">
            <div class="up-btn">
              <div class="btn-imgs">
                <img src="../../assets/ad-jia.png" />
              </div>
              <div class="btn-name">继续添加</div>
            </div>
          </van-uploader>
          <!-- 提示  -->
          <div class="ad-hint">最多可上传3张BANNER({{fileList.length}}/3)</div>
          <div class="ad-btn" @click="toggleShopBu">确认上传</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import myconfig from "@/config";
    import axios from 'axios'

    import Toptitle from "@/components/Toptitle/Toptitle";
export default {
  name: "Advt",
  data() {
    return {
        title:'广告图管理',
        fileList: [],
        deletable:false,
        list:[],
    };
  },
  methods:{
      afterRead(file) {
          let url = myconfig.uploadUrl.img
          let fd = new FormData()
          fd.append('file', file.file)
          axios.post(url, fd, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          }).then(res => {
              console.log(res)

              var arr = this.list
              arr.push({url:res.data.data})
              this.list = arr

              this.fileList = this.list
              // this.show=t
          }).catch(err => {
              alert(err)
          })
      },
    toggleShopBu() {
      this.$router.go(-1);//返回上一层
    },
    toggleRetun() {
      this.$router.go(-1);//返回上一层
    },
  },
  components:{
      Toptitle
  }
};
</script>
<style lang="stylus" scoped>
.advt {
  overflow: hidden;
  width 10rem;
  .advt-bg{
    width 10rem;
    height 100%;
    z-index -10;
    position fixed;
    img{
      width 100%;
      height 100%;
    }
  }
  .advtBox {
    z-index 10;
    // margin-top: 1rem;
    width: 10rem;
    min-height: 16rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 1rem 1rem 0 0;
    overflow: hidden;
    .advtHe {
      width: 9.15rem;
      margin: 0 auto;
      .ad-title {
        display: flex;

        .title-he {
          width: 0.05rem;
          height: 0.39rem;
          background: #F08109;
          border-radius: 0.03rem;
        }

        .title-name {
          margin-left: 0.1rem;
          color: #333333;
          font-size: 0.4rem;
        }
      }
      .ad-show {
        width 9.15rem;
        overflow hidden;
        .ad-hint{
          text-align center;
          margin .25rem 0 0.63rem;
          color #666666;
          font-size:0.27rem;
        }
        .ad-btn{
          width:9.15rem;
          height:1.09rem;
          line-height 1.09rem;
          text-align center;
          color #fff;
          font-size 0.4rem;
          background:rgba(234,55,86,1);
          border-radius:1rem;
          margin-bottom 1rem;
        }
        /deep/ .van-uploader{
            display block;
        }
        /deep/ .van-uploader__preview{
            margin 0.4rem auto 0;
        }
        /deep/ .van-uploader__wrapper{
            display block !important;
            flex-wrap nowrap;
        }
        /deep/ .van-uploader__preview-delete{
            right .35rem;
        }
        /deep/ .van-uploader__preview-image{
            margin 0 auto;
            width:7.97rem !important;
            height:3.73rem !important;
        }
        /deep/ .van-uploader__input-wrapper{
            margin 0 auto !important;
        }
        .up-btn {
          margin 2.6rem auto 0;
          width: 3.57rem;
          height: 0.69rem;
          border: 1px solid rgba(240, 129, 9, 1);
          border-radius: 0.35rem;
          display flex;
          align-items center;
          .btn-imgs{
              width 0.37rem;
              height 0.37rem;
              margin-left .8rem;
              margin-right .2rem;
              img{
                  width 100%;
                  height 100%;
              }
          }
          .btn-name{
              color #F08109;
              font-size:0.32rem;
          }
        }
      }
    }
  }
}
</style>
