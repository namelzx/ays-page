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

    export default {
        name: 'App',
        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },

        mounted() {

        },
        created() {
            setTimeout(() => {
                const leng = myconfig.url_href.length;//获取前端路径的地址
                var str = location.href; //获取当前地址
                var id = this.$route.params.id
                let user_id = this.$route.query.user_id
                if (getUser() !== undefined && getUser() !== 'null') {
                    const strToObj = JSON.parse(getUser())
                    this.$store.dispatch('user/login', strToObj)
                    return false;
                }
                if (user_id !== undefined) {
                    getInfo(user_id).then(res => {
                        //执行某个方法dispatch 要指定modules下面的文件里面的方法才起作用
                        this.$store.dispatch('user/login', res.data)
                        setUser(res.data)
                    })
                }


                if (id !== undefined) {
                    getInfo(id).then(res => {
                        //执行某个方法dispatch 要指定modules下面的文件里面的方法才起作用
                        this.$store.dispatch('user/login', res.data)
                        setUser(res.data)
                    })
                } else {
                    var temp = {};
                    login(temp).then(res => {
                        window.location.href = res.data
                    })
                }
            }, 1000);

        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    ul, li {
        padding: 0px;
        margin: 0px;
        list-style: none;
    }

    body {
        font-family: "微软雅黑";
    }

    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        appearance: none;
        border: none;
    }

    input, textarea, select, a:focus {
        outline: none;
    }

    a, img {
        border: 0;
        text-decoration: none !important;
        margin: 0;
        padding: 0;
        outline: none;
    }
</style>
