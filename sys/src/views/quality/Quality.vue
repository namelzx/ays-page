<template>
    <div class="Quality">
        <div class="Qualityhe">


            <!-- 数据列表   -->
            <div v-if="Qualitylist!==''">
                <Qualitylist :list="list"/>
            </div>

            <div class="Quadd">
                <div class="Quadd-btn" @click="toqualiyadd">
                    <div class="btnadd">+</div>
                    <div class="btnname">添加质保卡</div>
                </div>
            </div>
        </div>
        <Tabbar/>
    </div>
</template>
<script>
    import Tabbar from '@/components/Tabbar';
    import Qualitylist from '@/components/Qualitylist';
    import {GetUserbyList} from '@/api/code'
    import {mapGetters} from 'vuex'

    export default {
        name: 'Quality',
        data() {
            return {
                Qualitylist: '1',
                list:[],
            }
        },
        components: {
            Tabbar,
            Qualitylist
        },
        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },
        created() {
            this.getlist();
        },
        methods: {
            getlist(){
              GetUserbyList(this.userInfo.id).then(res=>{
                  console.log(res)
                  this.list=res.data
              })
            },
            //添加质保片
            toqualiyadd() {
                this.$router.push({path: '/quality/qualiyadd'})
            }
        }

    }
</script>
<style lang="scss" scoped>
    .Quality {
        width: 10rem;
        font-family: SourceHanSans;

        .Qualityhe {
            width: 9.15rem;
            margin: 0.5rem auto 0;
            overflow: hidden;

            .Quadd {
                width: 9.15rem;
                height: 3.63rem;
                border: 1px solid rgba(241, 241, 241, 1);
                background: rgba(255, 255, 255, 1);
                border-radius: 0.13rem;
                overflow: hidden;

                .Quadd-btn {
                    width: 2.48rem;
                    height: 0.83rem;
                    border-radius: 0.41rem;
                    background: rgba(232, 132, 3, 1);
                    display: flex;
                    align-items: center;
                    color: #ffffff;
                    margin: 1.4rem auto 0;

                    .btnadd {
                        width: 0.35rem;
                        height: 0.35rem;
                        line-height: 0.35rem;
                        text-align: center;
                        background: rgba(255, 255, 255, 1);
                        border-radius: 50%;
                        font-size: 0.32rem;
                        color: #E88403;
                        margin-left: .19rem;
                    }

                    .btnname {
                        margin-left: .15rem;
                    }
                }
            }
        }
    }
</style>