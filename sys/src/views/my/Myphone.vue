<template>
<!-- 输入手机号  -->
    <div class="phone">
        <div @click="toggleRetun" class="top_title">
            <Toptitle :title="title" />
        </div>
        <div class="phoneBox">
            <div class="title">输入手机号</div>
            <div class="call">
                <div class="callnums">+86</div>
                <input  
                    v-model="phone"
                    pattern="[0-9]*"
                    type="number"
                    oninput="if(value.length>6)value=value.slice(0,11)"/>
            </div>
            <div class="btns">
                <span class="btns-qx" @click="tocompile">取消</span>
                <span class="btns-netx" @click="tocode">下一步</span>
            </div>
        </div>
    </div>
</template>
<script>
import Toptitle from "@/components/Toptitle/Toptitle";
export default {
    name:'Myphone',
    data() {
        return {
            title:'编辑我的资料',
            phone:'',
        }
    },
    methods:{
        toggleRetun() {
            this.$router.go(-1);//返回上一层
        },
        tocompile() {
            this.$router.go(-1);//返回上一层
        },
        tocode() {
            if(this.phone!==''){
                let phone = this.phone
                this.$router.push({path:'/my/myphone/mycode',query:{phone:phone}})
            }
            else{
                this.$toast("请填写手机号码");
            }
            
        }
    },
    components: {
        Toptitle
    }
}
</script>
<style lang="scss" scoped>
.phone{
    font-family:SourceHanSans;
    width: 10rem;
    .phoneBox{
        width: 9.15rem;
        margin: 1.2rem auto 0;
        text-align: center;
        color: #333333;
        font-size:0.48rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        .call{
            height: 1rem;
            line-height: 1rem;
            color: #333333;
            font-size:0.48rem;
            font-family:Source Han Sans CN;
            font-weight:400;
            border-bottom:1px solid #e4e4e4;
            display: flex;
            align-items: center;
            .callnums{
                width: 1.4rem;
                position: relative;
            }
            .callnums::before{
                position: absolute;
                top: 0.35rem;
                right: 0;
                content: '';
                width:0.02rem;
                height:0.3rem;
                background: #000000;
            }
            input{
                margin-left: .43rem;
                width: 5rem;
                height: 0.9rem;
                // background: #f7f7f7;
            }
        }
        .btns{
            display:flex;
            justify-content: space-between;
            width: 8.5rem;
            margin: 3.8rem auto 0;
            .btns-qx{
                display: inline-block;
                width:3.89rem;
                height:1.09rem;
                line-height: 1.09rem;
                border:1px solid rgba(234,55,86,1);
                border-radius:1rem;
                font-size:0.4rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(234,55,86,1);
            }
            .btns-netx{
                display: inline-block;
                width:3.89rem;
                height:1.09rem;
                line-height: 1.09rem;
                background:rgba(234,55,86,1);
                border-radius:1rem;
                text-align: center;
                font-size:0.4rem;
                font-family:Source Han Sans CN;
                font-weight:400;
                color: #ffffff;
            }
        }
    }
}
</style>