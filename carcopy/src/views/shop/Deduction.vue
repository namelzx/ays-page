<template>
  <!--  抵扣券  -->
  <div class="deduction">
    <div class="deduBox">
      <div class="dedu-add" @click="toggleDeduadd">添加抵扣券</div>
      <!-- 抵扣券列表  -->
      <div class="dedulist">
        <div class="list" v-for="(item,index) in list" :key="index">
          <div class="listBox">
            <!--  默认图标 -->
            <div class="listBox-icon" v-if="index===0">
              <img src="../../assets/tacitly.png" />
            </div>
            <!-- 删除修改图标  -->
            <div class="listBox-make">
                <!-- 删除图标 -->
              <div class="make-delete" v-if="index!==0" @click="deleta(index)">
                <img src="../../assets/delete.png" />
              </div>
                <!-- 修改图标  -->
              <div class="make-amend" @click="toggleDeduadd">
                <img src="../../assets/amend.png" />
              </div>
            </div>
            <div class="listBox-content">
              <div class="content-money">
                <div class="money-name">
                  <span>RMB</span>
                  <span>抵扣券</span>
                </div>
                <div class="money-nums">
                  <span class="nums-un">¥</span>
                  <span class="nums-sum">{{item.money}}</span>
                </div>
              </div>
              <div class="content-one">单笔购买金额{{item.buymoney}}</div>
              <div class="content-activity">{{item.desc}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  弹出删除窗口  -->
    <div class="showDeleta" v-if="showdeles" @touchmove.prevent>
      <div class="showDeletaBox">
          <div class="dele-hint">
              <div class="hint-title">提示!</div>
              <div class="hint-desc">是否删除此抵扣券？</div>
          </div>
          <div class="dele-button">
              <div class="button-cancel" @click="showCancel">取消</div>
              <div class="button-confirm" @click="showConfirm">确定</div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Deduction",
  data() {
    return {
      showdeles: false,
      deletaIndex:'',
      list:[
          {
              id:1,
              money: 200,
              buymoney: 1,
              desc:'到店还送精美礼品一份'
          },
          {
              id:2,
              money: 300,
              buymoney: 5,
              desc:'到店还送精美礼品一份'
          },
          {
              id:3,
              money: 400,
              buymoney: 200,
              desc:'到店还送精美礼品一份'
          }
      ]
    };
  },
  methods: {
    toggleDeduadd() {
      this.$router.push({ path: "/manage-business/deductionAdd" });
    },
    deleta(index) {
      this.showdeles = !this.showdeles
      this.deletaIndex  = index
      console.log(index);
    },
    //取消
    showCancel() {
        this.showdeles = !this.showdeles
    },
    //确定
    showConfirm() {
        this.showCancel()
        let index = this.deletaIndex
        //删除当前下标数据
        this.list.splice(index, 1);
    }
  }
};
</script>
<style lang="stylus" scoped>
.deduction {
  .deduBox {
    margin: 0 auto;
    width: 9.15rem;
    overflow: hidden;

    .dedu-add {
      float: right;
      margin: 0.25rem 0;
      width: 1.73rem;
      height: 0.53rem;
      line-height: 0.53rem;
      text-align: center;
      border: 1px solid rgba(234, 55, 86, 1);
      border-radius: 0.27rem;
      color: #EA3756;
      font-size: 0.27rem;
    }

    .dedulist {
      clear: both;

      .list {
        width: 9.15rem;
        height: 3.23rem;
        background: linear-gradient(135deg, rgba(238, 210, 145, 1) 0%, rgba(244, 225, 168, 1) 48%, rgba(239, 210, 146, 1) 100%);
        border-radius: 0.13rem;
        margin-bottom: 0.43rem;
        overflow: hidden;

        .listBox {
          margin: 0.13rem auto;
          width: 8.91rem;
          height: 2.96rem;
          border: 1px dotted rgba(255, 255, 255, 1);
          border-radius: 0.13rem;
          position: relative;

          .listBox-icon {
            position: absolute;
            top: 0;
            left: 0;
            width: 0.87rem;
            height: 0.87rem;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .listBox-make {
            position: absolute;
            top: 0.2rem;
            right: 0.29rem;
            display: flex;

            .make-delete {
              width: 0.43rem;
              height: 0.41rem;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .make-amend {
              width: 0.4rem;
              height: 0.41rem;
              margin-left: 0.33rem;

              img {
                width: 100%;
                height: 100%;
              }
            }
          }

          .listBox-content {
            .content-money {
              width: 4.7rem;
              margin: 0.28rem auto 0;
              display: flex;

              .money-name {
                margin-left: 0.8rem;

                span {
                  display: block;
                  color: #333;
                  font-size: 0.4rem;
                }
              }

              .money-nums {
                display: flex;
                margin-left: 0.19rem;

                span {
                  color: #333;
                  display: inline-block;
                }

                .nums-un {
                  font-size: 0.27rem;
                  margin-top: 0.6rem;
                }

                .nums-sum {
                  font-size: 0.96rem;
                  font-weight: bold;
                  margin-left: 0.1rem;
                }
              }
            }

            .content-one {
              margin: 0 auto 0.25rem;
              width: 4.75rem;
              height: 0.69rem;
              line-height: 0.69rem;
              text-align: center;
              font-size: 0.4rem;
              color: #FFFFFF;
              background: rgba(234, 55, 86, 1);
              border-radius: 0.13rem;
            }

            .content-activity {
              text-align: center;
              color: #333;
              font-size: 0.32rem;
            }
          }
        }
      }
    }
  }

  .showDeleta {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);

    .showDeletaBox {
      width: 7.2rem;
      height: 3.33rem;
      margin 4.8rem auto 0;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.13rem;
      overflow hidden;
      .dele-hint{
          height 1.95rem;
          text-align center;
          .hint-title{
              margin-top .33rem;
              color #010101;
              font-size 0.45rem;
          }
          .hint-desc{
              margin-top .65rem;
              color #000000;
              font-size 0.4rem;
          }
      }
      .dele-button{
          height 1.04rem;
          line-height 1.04rem;
          border-top 1px solid #DCDCDC;
          box-sizing border-box;
          display flex;
          font-size 0.45rem;
          .button-cancel{
              text-align center;
              width 50%;
              color #999999;
              border-right 1px solid #DCDCDC;
              box-sizing border-box;
          }
          .button-confirm{
              text-align center;
              width 50%;
              color #000000;
          }
      }
    }
  }
}
</style>