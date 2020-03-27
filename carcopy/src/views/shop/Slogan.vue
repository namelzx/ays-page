<template>
    <div>
        <div @click="toggleRetun" class="toptitle">
            <Toptitle :title="title"/>
        </div>
        <div class="fields">
            <van-field v-model="datainfo.slogan" clearable maxlength="20" placeholder="请输入标语"/>
        </div>
        <div class="place">请为您的店铺写一句标语，20字内</div>
        <div class="save-btn" @click="toggleBusiness">保存</div>

    </div>
</template>
<script>
    import Toptitle from "@/components/Toptitle/Toptitle";
    import {mapGetters} from 'vuex'
    import {getUser, removeUser, setUser} from '@/utils/auth'
    import {PostDataByfield} from '@/api/shop'


    export default {
        name: 'Slogan',
        data() {
            return {
                value: '',
                title: '标语',
                datainfo: {}
            }
        },
        mounted: {
            ...mapGetters([
                'userInfo'
            ])
        },
        created() {
            const strToObj = JSON.parse(getUser())

            this.datainfo = strToObj
        },
        methods: {
            toggleRetun() {
                this.$router.go(-1);//返回上一层
            },
            toggleBusiness() {
                var temp = {
                    value: this.datainfo.slogan,
                    field: 'slogan',
                    id: this.datainfo.id
                }
                PostDataByfield(temp).then(res => {
                    if (res.code === 20000) {
                        setUser(this.datainfo)
                        this.$store.dispatch('user/login', this.datainfo)
                        this.$router.push({path: '/manage-business'})
                    }

                })
            }
        },
        components: {
            Toptitle
        },
    }
</script>
<style lang="stylus" scoped>
    .fields {
        border-bottom 1px solid #F1F1F1;
    }

    .place {
        text-align right;
        color #666666;
        font-size: 0.32rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        padding-right .47rem;
        margin-top .3rem;
    }

    .save-btn {
        position absolute;
        bottom 1rem;
        left 0;
        right 0;
        margin 0 auto;
        width: 9.01rem;
        height: 1.09rem;
        line-height 1.09rem;
        text-align center;
        background: rgba(234, 55, 86, 1);
        border-radius: 1rem;
        color #ffffff;
        font-size: 0.4rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
    }
</style>
