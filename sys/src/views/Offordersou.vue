<template>
<!-- 订单--营销单搜索 -->
  <div class="Search">
        <div class="Da-search">

            <div class="searchBox">
                <div class="return-icon" @click="calendar">
                    <img src="@/assets/return.png" />
                </div>
                <input class="inp" placeholder="请输入关键词搜索" v-model="value" />
                <div class="calendar" @click="souClick('搜索')" v-if="!showMes">搜索</div>
                <div class="calendar" @click="souClick('取消')" v-else>取消</div>
            </div>
        </div>

        <!-- 消息列表  -->
        <div class="content" v-if="showMes">
            <Offorderlist v-if="value!==''" :orderlist="offorderlist" />
            <div v-else class="content-not">暂无更多信息</div>
        </div>

        
    </div>
</template>

<script>
import Offorderlist from '@/components/Offorderlist';
export default {
  name: "Offordersou",
  data() {
    return {
        value:'',
        showMes:false,
        offorderlist:[
            {
                title:'欧司朗CBN套装  采用德国光源',
                icon:require('@/assets/mortgage-img.png'),
                shopname:'本田2016款飞度1.5L天窗版',
                owner:'陈某某',
                number:'13755555555',
                time:'2019.08.08  12:00',
                money:800,
                sum:1,
                progress:1
            },
            {
                title:'欧司朗CBN套装  采用德国光源',
                icon:require('@/assets/mortgage-img.png'),
                shopname:'本田2016款飞度1.5L天窗版',
                owner:'陈某某',
                number:'13755555555',
                time:'2019.08.08  12:00',
                money:800,
                sum:1,
                progress:2
            },
            {
                title:'欧司朗CBN套装  采用德国光源',
                icon:require('@/assets/mortgage-img.png'),
                shopname:'本田2016款飞度1.5L天窗版',
                owner:'陈某某',
                number:'13755555555',
                time:'2019.08.08  12:00',
                money:800,
                sum:1,
                progress:3
            },
            {
                title:'欧司朗CBN套装  采用德国光源',
                icon:require('@/assets/mortgage-img.png'),
                shopname:'本田2016款飞度1.5L天窗版',
                owner:'陈某某',
                number:'13755555555',
                time:'2019.08.08  12:00',
                money:800,
                sum:1,
                progress:2
            },
            {
                title:'欧司朗CBN套装  采用德国光源',
                icon:require('@/assets/mortgage-img.png'),
                shopname:'本田2016款飞度1.5L天窗版',
                owner:'陈某某',
                number:'13755555555',
                time:'2019.08.08  12:00',
                money:800,
                sum:1,
                progress:3
            },
            {
                title:'欧司朗CBN套装  采用德国光源',
                icon:require('@/assets/mortgage-img.png'),
                shopname:'本田2016款飞度1.5L天窗版',
                owner:'陈某某',
                number:'13755555555',
                time:'2019.08.08  12:00',
                money:800,
                sum:1,
                progress:4
            }
      ],
    }
  },
  components:{
      Offorderlist
  },
  methods:{
      calendar(){
          this.$router.go(-1);//返回上一层
      },
      souClick(e) {
          if(e==='搜索'){
              this.showMes = true
          }
          else{
              this.showMes = false
              this.value = ''
              this.$router.go(-1);
          } 
      }
  }
}
</script>

<style lang="scss" scoped>
.Search{
    .Da-search{
        z-index: 10;
        background-color: #ffffff;
        padding-top: .2rem;
        padding-bottom: .2rem;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        .searchBox{
            width: 9.15rem;
            margin:0 auto;
            display: flex;
            justify-content: space-between;
            height: 0.75rem;
            align-items: center;
            .return-icon{
                width: 0.7rem;
                height: 0.7rem;
                // margin-top: .1rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .inp{
                border-radius:0.36rem;
                padding-left: .5rem;
                font-size:0.32rem;
                width:7.2rem;
                height:0.83rem;
                line-height: 0.83rem;
                font-size:0.4rem;
                border: 0;
                font-family:Source Han Sans CN;
                font-weight:400;
                color: #000000;
                background: #f1f1f1;
            }
            input::-webkit-input-placeholder{
                color: #999999;
            }
            .calendar{
                font-size: 0.4rem;
                font-weight:400;
                color: #666666;
            }
        }
    }
    .content{
        margin-top: 1.2rem;
        .content-not{
            margin-top: 3rem;
            text-align: center;
            font-size:0.4rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(102,102,102,1);
        }
    }
}
</style>