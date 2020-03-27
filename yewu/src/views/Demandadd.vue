<template>
<!-- 需求添加  -->
    <div class="Demandadd">
        <div class="toptitle" @click="toggleRetun" style="background:#ffffff;">
            <Toptitle :title="title" />
        </div>
        <div class="addBox">
            <div class="addText">
                <!-- <div class="addText-heng"></div> -->
                <textarea  v-model="postFrom.content" placeholder="填写门店需求或建议！"></textarea>
            </div>
            <div class="addImg">
                <Upload :front="fileList" :count="3" @handelDelete="handelDelete" @handelUploade="afterFileList"></Upload>
            </div>

            <div class="publishBtn" @click="toggleDemand">发表需求</div>
        </div>
    </div>
</template>
<script>
    import Upload from "@/components/uploader";
    import { Toast } from 'vant';
    import {PostDataByAdd} from '@/api/demand'
    import {mapGetters} from 'vuex'


    import Toptitle from "@/components/Toptitle/Toptitle";
export default {
    name:'Demandadd',
    data () {
        return {
            postFrom:{
                content:undefined,
            },
            fileList: [],
            title:'需求添加',
        }
    },
    computed: {
        ...mapGetters([
            'userInfo'
        ])
    },
    created(){
      this.postFrom.user_id=this.userInfo.id
    },
    methods:{
        handelDelete(e){
            this.fileList=e
        },
        afterFileList(file){

            this.fileList.push({url:file.data.data})
        },

        toggleRetun() {
            this.$router.go(-1);//返回上一层
        },
        toggleDemand() {
            if(this.postFrom.content===undefined){
                Toast('需求不能等于空');
                return
            }
            var temp={
                data:this.postFrom,
                img:this.fileList
            }
            PostDataByAdd(temp).then(res=>{
                console.log(res)
                var that=this;

                Toast('需求已经提交');


                setTimeout(function(){
                    that.$router.push('/demand')
                    }, 3000);



            })


        }
    },
    components:{
        Toptitle,
        Upload
    }
}
</script>
<style lang="scss" scoped>
    .toptitle{
        width: 100%;
        height: 20px;
    }
.Demandadd{
    width: 10rem;
    .addBox{
        .addText{
            display: flex;
            margin-top: 1.2rem;


            textarea{
                margin-left: .4rem;
                width: 9rem;
                height: 2.7rem;
                border: 0;
                font-size:0.4rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color: #333333;
            }
        }
        .addImg{
            margin-left: .48rem;
            .upBtn{
                width:2.87rem;
                height:2.87rem;
                border:1px solid rgba(229,229,229,1);
                text-align: center;
                .upBtn-add{
                    margin-top: .75rem;
                    font-size:0.48rem;
                    color: #999999;
                }
                .upBtn-add2{
                    font-size:0.27rem;
                    color: #999999;
                }
            }
        }
        .publishBtn{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 2rem;
            margin: 2rem auto 0;
            width:7.81rem;
            height:0.96rem;
            line-height: 0.96rem;
            border:0.02rem solid rgba(232,132,3,1);
            border-radius:0.48rem;
            text-align: center;
            color: #E58304;
            font-size: .4rem;
        }
    }
}
</style>
