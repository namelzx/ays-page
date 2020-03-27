<template>
<!-- 订单  安装完成评价  -->
    <div class="prepared">
        <div class="pre-title">
            <div class="title-s">
                <div class="s-heng"></div>
                <div class="s-name">订单号：<span>5502</span><span class="name-user">守护者S</span></div>
            </div>
            <div class="title-x">
                <span>阿奇车灯音响服务店</span>
                <span class="x-user">刘奇林</span>
            </div>
        </div>
        <div class="tetxs">
            <textarea maxlength="200" @input="descInput" v-model="desc" placeholder="改装完成后，有更多的心得可以分享吧！"></textarea>
            <span class="remainder">{{remnant}}/200</span>
        </div>
        <div class="grade">
            <div class="grade-title">请您对本次的服务进行打分</div>
            <div class="grade-score">
                <van-rate class="score-fen"  v-model="value" :size="36" :gutter="35" allow-half color="#FF5861" :count="5" />
                <div class="score-nums">{{value}}分</div>
            </div>
            <div class="addImg">
                <van-uploader
                v-model="fileList"
                multiple
                :preview-size="200"
                :max-count="3"
                >
                    <div class="upBtn">
                        <div class="upBtn-add">+</div>
                        <div class="upBtn-add2">添加相片</div>
                    </div>
                </van-uploader>
            </div>
            <div class="publishBtn" @click="Succend">发表需求</div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'prepared',
    data () {
        return {
            remnant: 200,
            desc:'',
            fileList: [], //上传临时存储图片
            value: 4.5 //分数
        }
    },
    methods: {
        descInput() {
            var txtVal = this.desc.length;
            this.remnant = 200 - txtVal;
        },
        //点击发表
        Succend() {
            this.$router.push({path:'/data/datasucceed'})
        }
    }
}
</script>
<style lang="scss" scoped>
.prepared{
    overflow: hidden;
    font-family:SourceHanSans;
    margin-top: .5rem;
    .pre-title{
        border-bottom: 1px solid #F0F0F0;
        padding-bottom: .4rem;
        .title-s{
            display: flex;
            .s-heng{
                width:0.05rem;
                height:0.36rem;
                background:rgba(216,30,6,1);
                border-radius:0.03rem;
                margin-top: .12rem;
            }
            .s-name{
                font-size:0.4rem;
                color: #333333;
                margin-left: .4rem;
                .name-user{
                    margin-left: .2rem;
                }
            }
        }
        .title-x{
            margin-top: .05rem;
            margin-left: .4rem;
            font-size:0.27rem;
            color: #999999;
            .x-user{
                margin-left: .1rem;
            }
        }
    }
    .tetxs{
        width: 9.15rem;
        margin: 0.5rem auto;
        height: 1.65rem;
        position: relative;
        textarea{
            width: 9.15rem;
            height: 1.65rem;
            border: 0;
            color: #999999;
            font-size: 0.32rem;
        }
        .remainder{
            position: absolute;
            right: 0;
            bottom: 0;
            color: #999999;
            font-size:0.27rem;
        }
    }
    .grade{
        width: 9.15rem;
        margin: 0 auto;
        .grade-title{
            color: #333333;
            font-size:0.32rem;
        }
        .grade-score{
            margin-top: .6rem;
            display: flex;
            .score-fen{
                margin-left: 1.5rem;
            }
            .score-nums{
                margin-left: .55rem;
                font-size: 0.48rem;
                color: #FF5861;
                margin-top: -.05rem;
            }
        }
        .addImg{
            margin-top: 1rem;
            .upBtn{
                width:100px;
                height:100px;
                border:1px solid rgba(229,229,229,1);
                text-align: center;
                .upBtn-add{
                    margin-top: .95rem;
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
            margin: 4rem auto 0;
            width:7.81rem;
            height:0.96rem;
            line-height: 0.96rem;
            border:1px solid rgba(232,132,3,1);
            border-radius:0.48rem;
            text-align: center;
            color: #E58304;
            font-size: .4rem;
        }
    }
    
}
</style>