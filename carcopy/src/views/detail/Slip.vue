<template>
    <div class="slip-container">
        <div @click="toggleRetun"><Toptitle :title="title" /></div>
        <!-- <div class="slip-title">
            <span class="line"></span>
            <span class="text">输入核销码</span>
            <span class="line"></span>
        </div> -->
        <!--<div class="import-title">输入核销码</div>-->

        <div class="slip-box">

            <div class="box-warp">
                <div class="box-title">
                    <!-- <i class="iconfont">&#xe62d;</i> -->
                    <img src="@/assets/code.png" />
                </div>
                <input placeholder="请输入核销码" v-model="value" />
            </div>

            <div class="box-input">
                <!-- <van-search input-align="center" placeholder="请输入核销码" v-model="value" class="slip-input"/> -->
                <p class="err-msg" v-if="is_err_msg">*暂无此核销码信息,请重新输入</p>
            </div>
            <div class="vv">
            <div class="confirm-btn" :class="{active: isActive}" @click="doSlip">
                核销
            </div>
            </div>
            <div class="confirm-box" v-if="showConfirm" @click="toggleShow">
                <div class="box-wrap">
                    <div class="slip-title">
                        <span class="line"></span>
                        <span class="text">确认核销此安装单</span>
                        <span class="line"></span>
                    </div>
                    <div class="slip-info">
                        <div class="info-heng"></div>
                        <div class="info-item">
                            <div class="info-left">单号</div>
                            <div class="info-right">{{orderinfo.id}}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-left">车型</div>
                            <div class="info-right">{{orderinfo.model_title}}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-left">车牌</div>
                            <div class="info-right">{{orderinfo.number_plate}}</div>
                        </div>
                        <!--<div class="info-item">-->
                            <!--<div class="info-left">费用</div>-->
                            <!--<div class="info-right">￥{{orderinfo.ins_cost}}</div>-->
                        <!--</div>-->
                    </div>
                    <div class="action-btns">
                        <div class="cancel-btn" @click.stop="toggleShow">取消</div>
                        <div class="slip-btn" @click.stop="clickToSlip()" >核销</div>

                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import Toptitle from "@/components/Toptitle/Toptitle";
import {GetCodeBycheckCode} from "@/api/order";
import {mapGetters} from 'vuex'

import {Toast,Loading,Overlay} from 'vant';


  export default {
    name: "Slip",
    data() {
      return {
        title:'核销',
        value: '',
        is_err_msg: false,
        showConfirm: false,
          orderinfo:{}

      }
    },

    computed: {
        ...mapGetters([
            'userInfo'
        ]),
      isActive() {
        if (this.value === '') {
          this.is_err_msg = false
          return false
        } else {
          return true
        }
      }
    },
    components:{
        Toptitle
    },
    methods: {
        toggleRetun() {
            this.$router.go(-1);//返回上一层
        },
      doSlip() {
            var temp={
                user_id:this.userInfo.id,
                code:this.value
            }
          GetCodeBycheckCode(temp).then(res=>{
              console.log(res)
              if(res.data!==404){
                    this.is_err_msg = false
                    this.showConfirm = true
                  this.orderinfo=res.data
              }else{
                  this.is_err_msg = true
              }
          })
        // if (this.value === '9527') {
        //   this.is_err_msg = false
        //   this.showConfirm = true
        // }
      },
      toggleShow() {
        this.showConfirm = !this.showConfirm
      },
      testR() {

      },
      clickToSlip () {
          let id = this.orderinfo.id;
        // this.$router.push('/slip-succ')

        this.$router.push({path:'/slip-voucher',query:{id}})
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .slip-box{
        margin-top 4rem;
    }
    .slip-title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px 0 50px;
    }

    .slip-title .text {
        display: inline-block;
        padding: 0 10px;
        font-size:0.48rem;
        font-family:Source Han Sans CN;
        font-weight:400;
    }

    .slip-title .line:first-child {
        height: 2px;
        -ms-flex-positive: 1;
        background-color: #000;
        width: 14%;
        border-top-left-radius: 40%;
        border-bottom-left-radius: 40%;
    }

    .slip-title .line:last-child {
        height: 2px;
        -ms-flex-positive: 1;
        background-color: #000;
        width: 14%;
        border-top-right-radius: 40%;
        border-bottom-right-radius: 40%;
    }
    .import-title{
        text-align: center;
        font-size:0.48rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(51,51,51,1);
        margin 1.5rem 0;
    }
    .box-warp{
        width:9.15rem;
        margin 0 auto;
        display flex;
        border-bottom 1px solid #F1F1F1;
        padding-bottom .27rem;
        .box-title {
            margin-left .24rem;
            width .6rem;
            height .5rem;
        }
        .box-title img {
            width 100%;
            height 100%;
        }
        input{
            margin-left .2rem;
            border 0;
            font-size:0.4rem;
            font-family:Source Han Sans CN;
            font-weight:400;
        }
        input::-webkit-input-placeholder {
            color #999999;
        }
    }

     .vv {
         position absolute;
         .confirm-btn{
             position: fixed;
             top: 5rem;
             left: 5%;
         }
     }



    .err-msg {
        margin: 0;
        text-align: center;
        font-size: 12px;
        padding: 10px 0;
        color: #E9375B;
    }

    .confirm-btn {
        background: #d2d2d2;
        color: #999;
        font-size: 16px;
        text-align: center;
        margin: 50px auto;
        width:9.01rem;
        height:1.09rem;
        line-height 1.09rem;
        background:rgba(210,210,210,1);
        border-radius:1rem;
    }

    .confirm-btn.active {
        background: #E9375B;
        color: #fff;
    }

    // .slip-input {
    //     width: 60%;
    //     margin: 25px auto 0;
    //     padding: 0;
    // }

    // .box-input >>> .van-field__left-icon {
    //     display: none;
    // }

    // .box-input >>> .van-cell__value {
    //     padding: 6px;
    // }

    .confirm-box {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
    }

    /* 弹出层*/
    .box-wrap {
        padding: 5px 10px;
        background: #fff;
        color: #000;
        width: 85%;
        margin: 35% auto;
        border-radius: 4px;
    }

    .box-wrap .slip-title {
        margin: 20px 0 10px;
    }

    .slip-info {
        margin: 10px 0;
        position relative;
    }
    .info-heng{
        position absolute;
        left -.25rem;
        top 0;
        width 2px;
        height 15px;
        background #EB414E;
    }

    .info-item {
        margin: 15px 0;
        padding: 0 10px;
    }

    .action-btns {
        padding-bottom 10px;
        justify-content space-between;
    }
    .info-item, .action-btns {
        display: flex;
    }

    .info-left {
        font-size: 15px;
        color: #666;
        margin-right: 16px;
        min-width: 45px;
    }

    .info-right {
        font-size: 15px;
        color: #010101;
        width: 250px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .cancel-btn {
        width:3.89rem;
        height:1.09rem;
        line-height 1.09rem;
        text-align center;
        border:1px solid rgba(153,153,153,1);
        border-radius:1rem;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(153,153,153,1);
    }
    .slip-btn {
        color: #fff;
        width:3.89rem;
        height:1.09rem;
        line-height 1.09rem;
        text-align center;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        background:rgba(233,55,91,1);
        border-radius:1rem;
    }
</style>
