<template>
    <div>
        <!--  弹出产品选择  -->
        <div class="pull-pr" v-if="guanbiprs" @touchmove.prevent>
            <div class="prBox">
                <div class="title">
                    <div class="ti-headline">
                        <span>选择产品 </span>
                        <img @click="closepr" src="@/assets/close.png"/>
                    </div>
                    <div class="ti-names">
                        <span @click="brandBnt(1)">{{brand}}</span>
                        <span @click="brandBnt(2)">{{zbrand}}</span>
                    </div>
                </div>
                <!-- 产品列表  -->
                <div class="prlist" >
                    <div v-if="carsubscript===1"  :class="['prlist-name',{'prlist-arcit':brand===item.name}]"
                         v-for="(item,index) in prlist"
                         :key="index"
                         @click="ControlProduct(item,2)"
                    >{{item.field_title}}
                    </div>

                    <div v-if="carsubscript===2"  :class="['prlist-name',{'prlist-arcit':zbrand===item.name}]"
                         v-for="(item,index) in prlist"
                         :key="index"
                         @click="ControlProduct(item,3)"
                    >{{item.field_title}}
                    </div>

                    <div v-if="carsubscript===3"  :class="['prlist-name',{'prlist-arcit':brand===item.name}]"
                         v-for="(item,index) in prlist"
                         :key="index"
                         @click="ControlProduct(item,4)"
                    >{{item.field_title}}
                    </div>
                </div>


            </div>
        </div>

    </div>
</template>

<script>
    import {GetProductBylist} from "@/api/product";

    export default {
        name: "product",
        data(){
          return{
              brand:'请选择',
              zbrand:"请选择",
              guanbiprs:false,
              carsubscript:1,
              prlist:[],
              brandtitle:'请选择',
              suittitle:"请选择",
              pid:0,
              row:{},
          }
        },
        methods:{
            handelView(){
                this.carsubscript=1
               this.guanbiprs=true
               this.getdata()
            },
            getdata(){
                GetProductBylist(this.pid).then(res=>{
                    this.prlist=res.data
                })
            },
            brandBnt(type){
                if(type==1){
                    this.pid=0;
                    this.zbrand=='请选择'
                }
                console.log(this.pid)
                this.getdata()
            },
            closepr(){
              this.guanbiprs=false
                this.prlist=[];

                this.carsubscript=1

            },
            ControlProduct(row,type){
                this.row=row
                this.carsubscript=type
            if(type===2){
                this.brand=row.field_title
                this.pid=row.id
                this.getdata()

            }
            if(type==3){
                this.zbrand=row.field_title
                this.pid=row.id
                this.getdata()
                this.closepr();
                let temp={
                    title:this.brand+'-'+this.zbrand,
                    pid:this.pid,
                    quality_time:row.quality_time
                }
                this.$emit('updateRow',temp)
                this.zbrand="请选择"
                this.brand="请选择"
            }
            },
        }
    }
</script>

<style lang="scss"  scoped>
    .pull-pr {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 10;

        .prBox {
            position: absolute;
            width: 100%;
            height: 8.15rem;
            background: #ffffff;
            bottom: 0;

            .title {
                height: 1.39rem;
                border-bottom: 1px solid #eeeeee;

                .ti-headline {
                    text-align: center;
                    position: relative;
                    color: #333333;
                    font-size: 0.4rem;
                    margin-top: 0.23rem;

                    img {
                        position: absolute;
                        right: 0.5rem;
                        top: 0.1rem;
                        width: 0.25rem;
                        height: 0.25rem;
                    }
                }

                .ti-names {
                    margin-left: 0.44rem;

                    span {
                        margin-right: 1rem;
                        color: #333333;
                        font-size: 0.32rem;
                    }
                }
            }

            .prlist {
                height: 6.7rem;
                margin-left: 0.44rem;
                margin-top: 0.25rem;
                color: #333333;
                font-size: 0.32rem;
                overflow: auto; //超出高度滚动
                padding-bottom: 0.4rem;

                .prlist-name {
                    margin-bottom: 0.2rem;
                }

                .prlist-arcit {
                    color: #f00505;
                }
            }
        }
    }

</style>