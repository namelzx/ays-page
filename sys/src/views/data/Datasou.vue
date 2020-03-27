<template>
<!-- 订单数据搜索  -->
    <div class="Ordersou">
        <div class="Da-search">
            <div class="searchBox">
                <div class="se-input">
                    <img src="../../assets/sou.png" />
                    <input v-model="keyword" placeholder="输入关键词搜索" />
                </div>
                <div class="calendar">搜索</div>
            </div>
        </div>
        
        <!-- 列表数据  -->
        <div class="Orderlist" v-if="datalist!==''">
            <Datalist :datalist="datalist" />
        </div>
        
    </div>
</template>
<script>
import Datalist from '@/components/Datalist';
export default {
    name:'Datasou',
    data() {
        return{
            keyword:'',
            datalist:[
                {
                    money:800.00,
                    time:'2019.08.08  12:00',
                    numbers:5502,
                    states:'已结算',
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
                    states:'待审核',
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
                    states:'待审核',
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
                    states:'驳回',
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
        Datalist
    }
}
</script>
<style lang="scss" scoped>
.Ordersou{
    width: 10rem;
    min-height: 667px;
    background-color: #f6f6f6;
    overflow: hidden;
    font-family:SourceHanSans;
    .Da-search{
        position: fixed;
        top: 0;
        right: 0;
        padding-top: .5rem;
        z-index: 10;
        background-color: #f6f6f6;
        width: 10rem;
        .searchBox{
            width: 9.15rem;
            margin:0 auto;
            display: flex;
            justify-content: space-between;
            height: 0.72rem;
            align-items: center;
            .se-input{
                display: flex;
                border:1px solid #333333;
                border-radius:0.36rem;
                width:7.43rem;
                height:0.69rem;
                box-sizing: border-box;
                align-items: center;
                img{
                    width: 0.4rem;
                    height: 0.4rem;
                    margin-left: .4rem;
                }
                input{
                    font-size:0.32rem;
                    width:5rem;
                    height:0.65rem;
                    background:#f6f6f6;
                    margin-left: .3rem;
                    font-size:0.27rem;
                }
                input::-webkit-input-placeholder{
                    color: #666666;
                }
            }
            .calendar{
                font-size: 0.4rem;
                font-weight:400;
                color: #333333;
            }
        }
    }
    .Orderlist{
        margin-top: 1.3rem;
    }
}
</style>