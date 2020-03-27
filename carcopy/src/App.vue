<template>
    <div id="app">
        <router-view/>
    </div>
</template>


<script>


    import {getInfo, login} from '@/api/user'
    import myconfig from '@/config'
    import {getUser, removeUser, setUser} from '@/utils/auth'
    import {mapGetters} from 'vuex'
    import {GetDataByList} from '@/api/shop'

    export default {
        name: 'App',
        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },

        created() {
            const leng = myconfig.url_href.length;//获取前端路径的地址
            var str = location.href; //获取当前地址
            var id = this.$route.params.id
            let user_id=this.$route.query.user_id
            let shop_id=this.$route.query.shop_id

            if (getUser() !== undefined&&getUser()!=='null') {
                const strToObj = JSON.parse(getUser())
                this.$store.dispatch('user/login', strToObj)
                return false;
            }
            if(user_id !==undefined){
                getInfo(user_id).then(res => {
                    //执行某个方法dispatch 要指定modules下面的文件里面的方法才起作用
                    this.$store.dispatch('user/login', res.data)
                    setUser(res.data)
                })
                return true;
            }

            if (id !== undefined||user_id!==undefined) {
                getInfo(id).then(res => {
                    //执行某个方法dispatch 要指定modules下面的文件里面的方法才起作用
                    this.$store.dispatch('user/login', res.data)
                })
            }
            else {
                var temp = {};

                login(temp).then(res => {
                    window.location.href = res.data
                })
            }
        },
        watch:{
            $route(to,from){

                if(to.query.user_id!==undefined){

                }
            }
        },

    }
</script>


<style lang="stylus">
    * {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
</style>
