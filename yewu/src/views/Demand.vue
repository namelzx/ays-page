<template>
<!-- 门店需求  -->
    <div class="Demand">
        <div class="toptitle" @click="toggleRetun" style="background:#ffffff;">
            <Toptitle :title="title" />
            <div class="topadd" @click.stop="demandadd">添加需求</div>
        </div>
        <div class="De-search">
            <!--  tab栏  -->
            <div class="Tabs">
                <div class="Tabslist">
                    <div class="TabslistBox">
                        <div class="tab-btn"
                            v-for="(item,index) in tabs"
                            :key="index"
                            :class="{active:index==num}"
                            @click="toggleTab(index)">
                            {{item.tabname}}
                        </div>
                    </div>
                </div>
                <!--  tab内容  -->
                <div class="Tabcenten">
                    <Demandlist :demandlist="Demandlist" :num="num" />
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
import Demandlist from '@/components/Demandlist';
/*status_id  状态 1待处理 2已处理*/
import {GetDataByList} from '@/api/demand'

import {mapGetters} from 'vuex'


export default {
    name:'Demand',
    data() {
        return {
            num:0,//tab栏
            title:'门店需求',
            listQuery:{
              page:1,
              limit:20,
              user_id:undefined,
            },
            tabs:[
                { tabname:'全部' },
                { tabname:'待处理' },
                { tabname:'已处理' }
            ],
            total:0,
            isLoading:false,
            Demandlist:[



            ]
        }
    },
    computed:{
        ...mapGetters([
            'userInfo'
        ])
    },
    components:{
        Demandlist,
        Toptitle
    },
    created(){
        this.listQuery.user_id=this.userInfo.id
        this.getlist();
    },
    methods:{


        scroll(person) {
            window.onscroll = () => {
                // 距离底部200px时加载一次
                let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 300

                if (bottomOfWindow && this.isLoading == false) {
                    if(this.Demandlist.length===this.total){
                        return ;
                    }
                    this.listQuery.page++

                    this.getlist()
                    // axios.get(`https://randomuser.me/api/`).then(response => {
                    //     person.push(response.data.results[0])
                    //     isLoading = false
                    // })
                }
            }
        },

            getlist(){
          GetDataByList(this.listQuery).then(res=>{
             let arr=[]
              for(let i=0;i<res.data.data.length;i++){
                  this.Demandlist.push(res.data.data[i])
              }

              this.total=res.data.total
              console.log(this.Demandlist)

              this.isLoading=false
          })
        },
        toggleRetun() {
            this.$router.go(-1);//返回上一层
        },
        toggleTab(index){
            this.num = index;
            this.Demandlist=[];
            this.listQuery.page=1;
           this.listQuery.status=index
            this.getlist()
        },
        demandadd() {
            this.$router.push({path:'/demandadd'})
        }
    },
    mounted() {
        this.scroll(this.persons)
    }
}
</script>
<style lang="scss" scoped>

.Demand{
    .toptitle>>> .name{
        width: 60% !important;
    }
    .toptitle{
        display: flex;
        justify-content: space-between;
        .topadd{
            position: fixed;
            top: 0;
            right: 0;
            font-size:0.35rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(234,55,86,1);
            margin-right: .45rem;
            margin-top: .35rem;
            z-index: 999;
        }
    }
    .De-search{
        margin-top: 1.2rem;
        .Tabs{
            width: 9.15rem;
            .Tabslist{
                // position: fixed;
                width: 10rem;
                background-color: #ffffff;
                // top: 0;
                vertical-align:bottom !important;
                .TabslistBox{
                    margin: 0 auto;
                    width: 9.15rem;
                    display: flex;
                    height: 1rem;
                    line-height: 1rem;
                    position: relative;
                    .tab-btn{
                        color: #666666;
                        font-size:0.35rem;
                        font-family:Source Han Sans CN;
                        font-weight:500;
                        font-weight:400;
                        margin-right: .57rem;
                    }
                    .tab-btn.active{
                        color: #333333;
                        font-size:0.4rem;
                        font-family:Source Han Sans CN;
                        font-weight:500;
                        position: relative;
                    }
                    .tab-add{
                        position: absolute;
                        top: 0.1rem;
                        right: 0;
                        width: 0.37rem;
                        height: 0.37rem;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

            }
            .Tabcenten{
                // margin-top: 1.6rem;
                margin-bottom: .3rem;
            }
        }
    }
}
</style>
