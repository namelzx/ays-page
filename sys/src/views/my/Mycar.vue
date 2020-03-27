<template>
    <div>
        <div @click="toggleRetun" class="top_title">
            <Toptitle :title="title"/>
        </div>
        <div class="car">
            <div class="car_warp" v-for="(item,index) in list" :key="index">
                <div class="warp_imgs"><img src="@/assets/car.png"/></div>
                <div class="warp_plate">
                    <div class="plate_heng"></div>
                    <div class="plate_name">{{item.provinces}}{{item.car_number}}</div>
                </div>
                <div class="warp_desc">{{item.model_title}}</div>
                <div class="warp_delete"></div>
                <div class="warp_delete_imgs" @click="deleteTrash(item,index)"><img src="@/assets/delete.png"/></div>
                <!-- 删除 -->
                <div class="delete" v-if="delete_show">
                    <div class="delete_warp">
                        <div class="warp_title">删除车辆</div>
                        <div class="warp_desc">是否删除 {{item.model_title}} 车辆？</div>
                        <div class="warp_select">
                            <div class="select_btn" @click="deleteShow(1)">取消</div>
                            <div class="select_btn active" @click="deleteShow(2)">确定</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 添加车型 -->
        <div class="car_btnadd" @click="toggleAddcar">添加车型</div>
    </div>
</template>
<script>
    import Toptitle from "@/components/Toptitle/Toptitle";

    import {GetIdByList,GetIdByDelete} from '@/api/car'
    import {mapGetters} from 'vuex'

    export default {
        name: 'Mycar',
        data() {
            return {
                id:undefined,
                title: '爱车',
                delete_show: false,
                index: null,
                list: [
                    // {
                    //     id: 1,
                    //     title: '粤A·00000',
                    //     desc: '本田 飞度 2018款1.5L CVT舒适天窗版'
                    // },
                    // {
                    //     id: 2,
                    //     title: '粤B·00000',
                    //     desc: '本田 飞度 2018款1.5L CVT舒适天窗版'
                    // },
                    // {
                    //     id: 3,
                    //     title: '粤B·00000',
                    //     desc: '本田 飞度 2018款1.5L CVT舒适天窗版'
                    // },
                    // {
                    //     id: 498,
                    //     title: '粤B·00000',
                    //     desc: '本田 飞度 2018款1.5L CVT舒适天窗版'
                    // }
                ]
            }
        },
        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },
        methods: {
            toggleRetun() {
                this.$router.push('/my'); //返回上一层
            },
            deleteTrash(row, index) {
                this.index = index
                this.id = row.id
                this.delete_show = !this.delete_show
            },
            deleteShow(e) {
                //取消1，2.确定
                if (e === 1) {
                    this.delete_show = !this.delete_show
                }
                else {
                    let i = this.index
                    this.delete_show = !this.delete_show
                    //删除当前下标数据
                    GetIdByDelete(this.id).then(res=>{
                        this.list.splice(i, 1);

                    })
                }
            },
            //添加车型
            toggleAddcar() {
                this.$router.push({path: "/my/myaddcar"});
            }
        },
        components: {
            Toptitle
        },
        created() {
            if (this.$route.query.temp !== undefined) {
                this.list.push({
                    title: this.$route.query.temp.desc,
                    desc: this.$route.query.temp.carUser
                })
            }
            GetIdByList(this.userInfo.id).then(res => {
                console.log(res)
                this.list = res.data
            })
        }
    }
</script>
<style lang="scss" scoped>
    .car {
        margin-top: 1.2rem;
        position: relative;
        .car_warp {
            margin: 0 auto .5rem;
            width: 9.15rem;
            height: 3.2rem;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0rem 0rem 0.13rem 0rem rgba(153, 153, 153, 0.2);
            border-radius: 0.13rem;
            position: relative;
            overflow: hidden;
            .warp_imgs {
                position: absolute;
                top: 0.13rem;
                right: -.4rem;
                width: 1.68rem;
                height: 0.88rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .warp_plate {
                margin-top: .4rem;
                display: flex;
                .plate_heng {
                    width: 0.08rem;
                    height: 0.64rem;
                    background: rgba(240, 129, 9, 1);
                    border-radius: 0.04rem;
                    margin-right: .37rem;
                }
                .plate_name {
                    margin-top: -.2rem;
                    font-size: 0.64rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: rgba(51, 51, 51, 1);
                }
            }
            .warp_desc {
                margin-left: .5rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: rgba(102, 102, 102, 1);
            }
            .warp_delete {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 0.83rem;
                background: linear-gradient(90deg, rgba(51, 51, 51, 1) 0%, rgba(255, 255, 255, 1) 100%);
                opacity: 0.1;
            }
            .warp_delete_imgs {
                position: absolute;
                bottom: 0.1rem;
                right: .5rem;
                z-index: 10;
                width: .6rem;
                height: .6rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .delete {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 20;
        .delete_warp {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 30%;
            margin: 0 auto;
            width: 7.2rem;
            height: 3.33rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.13rem;
            .warp_title {
                margin-top: .32rem;
                font-size: 0.45rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                text-align: center;
            }
            .warp_desc {
                margin-top: .3rem;
                text-align: center;
                font-size: 0.4rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
            }
            .warp_select {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                border-top: 1px solid #F1F1F1;
                height: 1.09rem;
                line-height: 1.09rem;
                display: flex;
                .select_btn {
                    width: 50%;
                    text-align: center;
                    font-size: 0.4rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: rgba(153, 153, 153, 1);
                }
                .select_btn.active {
                    color: #333333;
                    border-left: 1px solid #F1F1F1;
                }
            }
        }
    }

    .car_btnadd {
        margin: 1rem auto;
        width: 9.01rem;
        height: 1.09rem;
        line-height: 1.09rem;
        text-align: center;
        border: 1px solid rgba(233, 55, 91, 1);
        border-radius: 1rem;
        font-size: 0.4rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(233, 55, 91, 1);
        position: fixed;
        left: 5%;
        bottom: 0;
    }
</style>
