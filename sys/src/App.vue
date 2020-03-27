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
        created() {
            const leng = myconfig.url_href.length;//获取前端路径的地址
            var str = location.href; //获取当前地址
            var id = this.$route.params.id


            if (getUser() !== undefined && getUser() !== 'null') {
                const strToObj = JSON.parse(getUser())
                this.$store.dispatch('user/login', strToObj)
                return;
            }

            if (id !== undefined) {
                getInfo(id).then(res => {
                    //执行某个方法dispatch 要指定modules下面的文件里面的方法才起作用
                    this.$store.dispatch('user/login', res.data)
                    setUser(res.data)
                })
            } else {

            }


        },
        mounted() {
            window.addEventListener('hashchange', () => {
                var currentPath = window.location.hash.slice(1); // 获取输入的路由
                if (this.$router.path !== currentPath) {
                    this.$router.push(currentPath); // 动态跳转
                }
            }, false);
        }, watch: {
            $route(to, from) {

                if (to.params.id !== undefined) {
                    console.log(to.params.id)
                    if (to.params.id !== undefined) {
                        getInfo(to.params.id).then(res => {
                            //执行某个方法dispatch 要指定modules下面的文件里面的方法才起作用
                            this.$store.dispatch('user/login', res.data)
                            setUser(res.data)
                        })
                    }
                } else {
                    var temp = {
                        url: to.path
                    };
                    if (getUser() === undefined) {

                        login(temp).then(res => {
                            window.location.href = res.data
                        })
                    }
                }
            }
        },
    }
</script>


<style>
    * {
        margin: 0;
        padding: 0;
        list-style-type: none;
        /* font-family:SourceHanSans; */
    }

    ul, li {
        padding: 0px;
        margin: 0px;
        list-style: none;
    }

    body {
        /* font-family: "微软雅黑"; */
        font-family: SourceHanSans;
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
