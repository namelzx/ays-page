<template>
<!-- 服务保障 -->
    <div>
        <div @click="toggleRetun" class="toptitle">
            <Toptitle :title="title" />
        </div>
        <div class="safeg-title">请描述可提供的店铺保障，每个描述4-8字</div>
        <div class="safeg-desc">
            <div class="desc-title">服务保障1：</div>
            <input v-model="temp.desc1" placeholder="输入描述" />
        </div>
        <div class="safeg-desc">
            <div class="desc-title">服务保障2：</div>
            <input v-model="temp.desc2" placeholder="输入描述" />
        </div>
        <div class="safeg-desc">
            <div class="desc-title">服务保障3：</div>
            <input v-model="temp.desc3" placeholder="输入描述" />
        </div>
        <div class="safeg-desc">
            <div class="desc-title">服务保障4：</div>
            <input v-model="temp.desc4" placeholder="输入描述" />
        </div>
        <div class="safeg-desc">
            <div class="desc-title">服务保障5：</div>
            <input v-model="temp.desc5" placeholder="输入描述" />
        </div>
        <div class="safeg-desc">
            <div class="desc-title">服务保障6：</div>
            <input v-model="temp.desc6" placeholder="输入描述" />
        </div>
        <div class="safeg-desc">
            <div class="desc-title">服务保障7：</div>
            <input v-model="temp.desc7" placeholder="输入描述" />
        </div>
        <div class="save-btn" @click="toggleBusiness">保存</div>
        
    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
    name:'Slogan',
    data() {
        return {
            value:'',
            title:'服务保障',
            temp:{
                desc1:'质量保证',
                desc2:'技术保障',
                desc3:'价格透明',
                desc4:'价格透明',
                desc5:'价格透明',
                desc6:'价格透明',
                desc7:'价格透明'
            }
        }
    },
    methods:{
      toggleRetun() {
        this.$router.go(-1);//返回上一层
      },
      toggleBusiness() {
          this.$router.push({path:'/manage-business'})
      }
    },
    components:{
      Toptitle
    },
}
</script>
<style lang="stylus" scoped>
.save-btn{
    position absolute;
    bottom 1rem;
    left 0;
    right 0;
    margin 0 auto;
    width:9.01rem;
    height:1.09rem;
    line-height 1.09rem;
    text-align center;
    background:rgba(234,55,86,1);
    border-radius:1rem;
    color #ffffff;
    font-size:0.4rem;
    font-family:Source Han Sans CN;
    font-weight:400;
}
.safeg-title{
    font-size:0.32rem;
    font-family:Source Han Sans CN;
    font-weight:400;
    margin-left .45rem;
    margin-bottom .7rem;
}
.safeg-desc{
    display flex;
    justify-content flex-end;
    margin-bottom .4rem;
    .desc-title{
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color #333333;
        margin-right .3rem;
    }
    input{
        width 7rem;
        border 0;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color #333333;
        border-bottom 1px solid #DCDCDC;
        padding-bottom .4rem;
    }
}
</style>