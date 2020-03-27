<template>
<div>
    <div class="demandlist" v-for="(item,index) in demandlist" :key=index >
        <van-skeleton
        title
        animate
        :row="5"
        :loading="loading"
      >
      <div class="demandHe">
          <div class="demandHeBox">
              <div class="status">
                  <div class="status-left">
                      <span>状态：</span>
                      <span class="dispose">{{item.status}}</span>
                  </div>
                  <div class="status-time">{{item.create_time}}</div>
              </div>
              <div class="details">{{item.content}} {{item.id}}</div>
              <div class="deta-imgs">
                  <div class="imgs" v-for="itemList in item.imgs" :key="itemList.id">
                      <img :src="itemList.url" />
                  </div>
              </div>
          </div>
      </div>
        </van-skeleton>
    </div>

</div>

</template>

<script>
export default {
  name: 'Demandlist',
  props:['demandlist','num'],
  data() {
      return {
          loading:true
      }
  },
  mounted() {
    setTimeout(function(){
      this.loading = false;
    }.bind(this),1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.demandlist{
    width:10rem;
    overflow: hidden;
    // margin-top: .3rem;
    border-bottom: 1px solid #F1F1F1;
    .demandHe{
        width:9.15rem;
        margin: 0  auto;
        .demandHeBox{
            width: 9rem;
            margin: 0.32rem auto;
            .status{
                display: flex;
                justify-content: space-between;
                font-size:0.32rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                .status-left{
                    color: #666666;
                    font-size:0.4rem;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    .dispose{
                        color: $color;
                        // margin-left: .25rem;

                    }
                }
                .status-time{
                    color: #2B2B2B;
                    margin-top: .1rem;
                }
            }
            .details{
                margin-top: .44rem;
                font-size:0.35rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:0.48rem;
            }
            .deta-imgs{
                display: flex;
                margin-top: .33rem;
                .imgs{
                    width:2.77rem;
                    height:2.77rem;
                    margin-right: .41rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
}
</style>
