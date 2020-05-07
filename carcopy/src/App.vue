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
            // var that = this;
            // let user_id = that.$route.query.id
            // console.log(user_id)
            // if (user_id !== undefined) {
            //     console.log('不等空')
            //     getInfo(user_id).then(res => {
            //         //执行某个方法dispatch 要指定modules下面的文件里面的方法才起作用
            //         that.$store.dispatch('user/login', res.data)
            //         setUser(res.data)
            //     })
            //     return true;
            // }
            // if (getUser()) {
            //     const strToObj = JSON.parse(getUser())
            //     user_id = strToObj.id
            //     that.$store.dispatch('user/login', strToObj)
            //     return false;
            // } else {
            //     console.log(getUser())
            //     var temp = {};
            //     login(temp).then(res => {
            //         // window.location.href = res.data
            //     })
            //
            // }

        },
        watch: {


            $route(to, from) {

                if (to.query.user_id !== undefined) {

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
