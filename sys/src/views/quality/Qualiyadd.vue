<template>
    <!--  添加质保卡 -->
    <div class="Qualiyadd">
        <div @click="toggleRetun" class="top_title">
            <Toptitle :title="title" />
        </div>
        <div class="QualiyaddHe">
            <div class="qu-title">添加质保卡</div>
            
            <div class="qu-coding">
                <div class="coding-title">质保编码</div>
                <input placeholder="请输入编码" v-model="value" />
            </div>
            <div class="qu-hint" v-if="show_error">
                <span>错误提示</span>
                <span class="hint-error">*编码不存在，请输入正确的质量编码</span>
            </div>
        </div>
        <div class="anniu-btn">
            <span class="btn-cancel" @click="toquality">取消</span>
            <span class="btn-next" @click="tofill">下一步</span>
        </div>
    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
    name:'Qualiyadd',
    data () {
        return {
            title:'添加质保卡',
            Qualitylist:'',
            value:'',
            show_error:false
        }
    },
    methods:{
        toggleRetun() {
            this.$router.go(-1); //返回上一层
        },
        //返回上一层
        toquality() {
            this.$router.go(-1);//返回上一层
        },
        //下一步
        tofill() {
            if(this.value===""){
                this.$toast('请输入质保编码！');
            }
            else{
                if(this.value==='9527'){
                    let value = this.value;
                    this.$router.push({path:'/quality/qualiyadd/qualityfill',query:{value}})
                }
                else{
                    this.show_error = true
                }
                
            }
        }
    },
    components: {
        Toptitle
    }

}
</script>
<style lang="scss" scoped>
.Qualiyadd{
    width: 10rem;
    
    font-family:SourceHanSans;
    .QualiyaddHe{
        width: 9.15rem;
        height: 3.63rem;
        margin: 0.5rem auto 0;
        overflow: hidden;
        border-radius: 0.13rem;
        background-color: #ffffff;
        .qu-title{
            text-align: center;
            color: #333333;
            font-size:0.32rem;
            margin-top: .47rem;
            font-size:0.48rem;
            font-family:Source Han Sans CN;
            font-weight:400;
        }
        .qu-hint{
            margin-top: .3rem;
            margin-left: .5rem;
            color: #999999;
            font-size:0.32rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            .hint-error{
                font-size:0.32rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(233,55,91,1);
                margin-left: .3rem;
            }
        }
        .qu-coding{
            margin-left: .27rem;
            display: flex;
            color: #333333;
            font-size:0.4rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            margin-top: .3rem;
            input{
                margin-left: .52rem;
                border-bottom: 1px solid #EEEEEE;
                width:6.48rem;
                height: 1rem;
                
                padding-bottom: .3rem;
            }
        }
    }
    .anniu-btn{
        width: 9rem;
        display: flex;
        justify-content: space-between;
        margin: 2rem auto;
        .btn-cancel{
            display: inline-block;
            width:3.89rem;
            height:1.07rem;
            line-height: 1.07rem;
            border-radius:1rem;
            text-align: center;
            border:1px solid $color;
            color: $color;
            font-size:0.4rem;
            font-family:Source Han Sans CN;
            font-weight:400;
        }
        .btn-next{
            width:3.89rem;
            height:1.07rem;
            line-height: 1.07rem;
            border-radius:1rem;
            text-align: center;
            color: #ffffff;
            background:$color;
            font-size: 0.32rem;
        }
    }
}
</style>