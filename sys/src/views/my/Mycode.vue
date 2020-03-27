<template>
<!-- 输入验证码  -->
    <div class="code">
        <div @click="toggleRetun" class="top_title">
            <Toptitle :title="title" />
        </div>
        <div class="codeBox">
            <div class="title">输入验证码</div>
            <div class="codeinp">
                <div class="codeinpBox">
                    <input
                        v-model="code"
                        pattern="[0-9]*"
                        type="number"
                        oninput="if(value.length>6)value=value.slice(0,8)"/>
                    <div class="code-secs">
                        <span>重新发送</span>
                        <span>(59S)</span>
                    </div>
                </div>
                
            </div>
            <div class="code-phone">已向手机<span>{{$route.query.phone}}</span>发送验证码</div>
            <div class="btns">
                <span class="btns-netx" @click="tocompile">取消</span>
                <span class="btns-qx" @click="cilckAffirm">确认更换</span>
            </div>
        </div>


        <!-- 提示框  -->
        <!-- <div class="hint" v-if="uphint" @click="closehint">
            <div class="hintBox">
                <div class="title">提示</div>
                <div class="content">更改手机号成功</div>
            </div>
        </div> -->
    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
    name:'Mycode',
    data() {
        return {
            title:'编辑我的资料',
            code:'',
            // uphint:false
        }
    },
    methods:{
        toggleRetun() {
            this.$router.go(-1);//返回上一层
        },
        tocompile() {
            this.$router.go(-1);//返回上一层
        },
        //确认更换
        cilckAffirm() {
            if(this.code!==''){
                // this.uphint = !this.uphint
                let phone = this.$route.query.phone
                this.$router.push({path:'/my/mydatum',query:{phone}});//返回上一层
            }
            else{
                this.$toast("请填写验证码！");
            }
        },
        // closehint() {
        //     this.$router.push({path:'/my/mydatum'});//返回上一层
            
        // }
    },
    components: {
        Toptitle
    }
}
</script>
<style lang="scss" scoped>
.code{
    font-family:SourceHanSans;
    width: 10rem;
    .codeBox{
        // width: 9.15rem;
        margin: 1rem auto 0;
        text-align: center;
        color: #333333;
        font-size: 0.48rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        .codeinp{
            // width:9.15rem;
            height:1.2rem;
            line-height: 1.2rem;
            border-bottom:  1px solid #DCDCDC;
            margin-top: .48rem;
            overflow: hidden;
            .codeinpBox{
                width: 9.15rem;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                input{
                    width: 5.5rem;
                    font-size: 0.4rem;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color: #000000;
                }
                .code-secs{
                    width: 3.2rem;
                    text-align: right;
                    color: #666666;
                    font-size: 0.4rem;
                    position: relative;
                }
                .code-secs::before{
                    position: absolute;
                    content: '';
                    left: 0;
                    top: 0.45rem;
                    width:0.02rem;
                    height:0.35rem;
                    background: #d5d5d5;
                }
            }
        }
        .code-phone{
            margin-top: .32rem;
            text-align: center;
            color: #666666;
            font-size: 0.32rem;
            span{
                margin: 0 .2rem;
            }
        }
        .btns{
            width: 8.5rem;
            display: flex;
            justify-content: space-between;
            margin: 2.5rem auto 0;
            .btns-qx{
                display: block;
                width:3.89rem;
                height:1.09rem;
                line-height: 1.09rem;
                background:rgba(234,55,86,1);
                border-radius:1rem;
                text-align: center;
                font-size: 0.4rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:#ffffff;
            }
            .btns-netx{
                display: block;
                width:3.89rem;
                height:1.09rem;
                line-height: 1.09rem;
                border:1px solid rgba(153,153,153,1);
                border-radius:1rem;
                text-align: center;
                font-size: 0.4rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(153,153,153,1);
            }
        }
    }
    .hint{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.3);
        z-index: 10;
        .hintBox{
            width:7.2rem;
            height:3.09rem;
            background:rgba(255,255,255,1);
            border-radius:0rem;
            margin: 5rem auto 0;
            overflow: hidden;
            border-radius: .25rem;
            .title{
                text-align: center;
                color: #666666;
                font-size:0.4rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                margin-top: .28rem;
            }
            .content{
                text-align: center;
                margin-top: .5rem;
                color: #333333;
                font-size:0.48rem;
                font-family:Source Han Sans CN;
                font-weight:400;
            }
        }
    }
}
</style>