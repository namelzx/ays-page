<template>
    <div class="Order">
        
        <div class="OrderHe">

            <!--  tab栏  -->
            <div class="Tabs">
                <div class="Tabslist">
                    <div class="TabslistBox">
                        <div class="tab-btn"
                            v-for="(item,index) in tabs"
                            :key="index"
                            :class="{active:index==num}"
                            @click="toggleTab(index)"
                        >
                            {{item.tabname}}
                        </div>
                        <img class="tab-sou" @click="ordersou" src="../../assets/sou.png" />
                    </div>
                </div>


                <!--  tab内容  -->
                <div v-if="num==0" class="datalist">
                    <Datalist :datalist="datalist" />
                </div>
                <div v-if="num==1" class="datalist">
                    <Datalist :datalist="datalist" />
                </div>
                <div v-if="num==2" class="datalist">
                    <Datalist :datalist="datalist" />
                </div>
                <div v-if="num==3" class="datalist">
                    <Datalist :datalist="datalist" />
                </div>
                <div v-if="num==4" class="datalist">
                    <Datalist :datalist="datalist" />
                </div>
            </div>
        </div>

        <!-- 抵扣 安装  -->
        <div class="install">
            <div class="install-Box">
                <img src="../../assets/install.png" />
                <div class="name">抵扣</div>
                <div class="heng"></div>
            </div>
            <div class="install-Box">
                <img src="../../assets/install.png" />
                <div class="name">安装</div>
                <div class="heng"></div>
            </div>
        </div>




        <Tabbar />
    </div>
</template>
<script>
import Tabbar from '@/components/Tabbar';
import Datalist from '@/components/Datalist';
export default {
    name:'Order',
    data () {
        return {
            num:0,//tab栏
            tabs:[
                { tabname:'全部' },
                { tabname:'待处理' },
                { tabname:'待安装' },
                { tabname:'安装完成' },
                { tabname:'已评价' }
            ],
            datalist:[
                {
                    money:800.00,
                    time:'2019.08.08  12:00',
                    numbers:5502,
                    states:'待处理',
                    product:'征服者S',
                    model:'别克2017君威1.5t精英版',
                    service:'安亿仕13755555555',
                    trade:'阿帕车灯（凯斯店） 姜卫卫',
                    explain:'13755555555',
                    location:'广州市白云区人和镇龙河西路92',
                    schedule:5,
                    progress:1
                },
                {
                    money:600.00,
                    time:'2019.08.08  12:00',
                    numbers:5502,
                    states:'待安装',
                    product:'征服者S',
                    model:'别克2017君威1.5t精英版',
                    service:'安亿仕13755555555',
                    trade:'阿帕车灯（凯斯店） 姜卫卫',
                    explain:'13755555555',
                    location:'广州市白云区人和镇龙河西路92',
                    schedule:3,
                    progress:1
                },
                {
                    money:680.00,
                    time:'2019.08.08  12:00',
                    numbers:5502,
                    states:'安装完成',
                    product:'征服者S',
                    model:'别克2017君威1.5t精英版',
                    service:'安亿仕13755555555',
                    trade:'阿帕车灯（凯斯店） 姜卫卫',
                    explain:'13755555555',
                    location:'广州市白云区人和镇龙河西路92',
                    schedule:3,
                    progress:2
                },
                {
                    money:680.00,
                    time:'2019.08.08  12:00',
                    numbers:5502,
                    states:'已评价',
                    product:'征服者S',
                    model:'别克2017君威1.5t精英版',
                    service:'安亿仕13755555555',
                    trade:'阿帕车灯（凯斯店） 姜卫卫',
                    explain:'13755555555',
                    location:'广州市白云区人和镇龙河西路92',
                    schedule:4,
                    progress:0
                }
            ]
        }
    },
    components:{
        Tabbar,
        Datalist
    },
    methods:{
        toggleTab(index){
            this.num = index;
        },
        calendar() {
            this.show = true
        },
        onCancel() {
            this.show = false
        },
        onConfirm() {
            this.show = false
        },
        //搜索
        ordersou(){
            this.$router.push({path:'/data/datasou'})
        }
    }

}
</script>
<style lang="scss" scoped>
    .OrderHe{
        width: 10rem;
        min-height: 667px;
        background: #f6f6f6;
        .Tabs{
            width: 9.15rem;
            .Tabslist{
                position: fixed;
                width: 10rem;
                background-color: #f4f4f4;
                top: 0;
                padding-top: .5rem;
                vertical-align:bottom !important;
                z-index: 10;
                .TabslistBox{
                    margin: 0 auto;
                    width: 9.15rem;
                    display: flex;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    position: relative;
                    .tab-btn{
                        color: #666666;
                        font-size: 0.32rem;
                        font-weight:400;
                        margin-right: .67rem;
                        font-family:SourceHanSans;
                    }
                    .tab-btn.active{
                        color: #333333;
                        font-size:0.4rem;
                        font-weight:500;
                        position: relative;
                        font-family:SourceHanSans;
                    }
                    .tab-sou{
                        position: absolute;
                        right: 0;
                        top: 0.33rem;
                        width: 0.47rem;
                        height: 0.47rem;
                    }
                }
                
            }
            .datalist{
                margin-top: 1.6rem;
            }
        }
    }
    .install{
        position: fixed;
        // bottom: 1.6rem;
        top: 70%;
        right: 1.4rem;
        width: 0.96rem;
        z-index: 10;
        .install-Box{
            width: .96rem;
            height: .96rem;
            position: relative;
            margin-top: .2rem;
            img{
                width: 100%;
                height: 100%;
            }
            .name{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                height: 0.96rem;
                line-height: .96rem;
                text-align: center;
                color: #FFFFFF;
                font-size: 0.32rem;
            }
            .heng{
                position: absolute;
                top: .75rem;
                width:0.33rem;
                height:0.02rem;
                z-index: 11;
                background-color: #FFFFFF;
                left: .32rem;
            }
        }
    }
</style>