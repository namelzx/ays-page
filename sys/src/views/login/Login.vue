<template>
    <!-- 登录注册  -->
    <div class="Login">
        <div class="LoginBox">
            <div class="log-title">注册登录查看更多内容</div>

            <!--  一键登录  -->
            <div class="log-number" v-if="login">
                <div class="number-account">
                    <div class="acc-left">
                        <div class="acc-area">+86</div>
                        <input pattern="[0-9]*"
                               type="number"
                               oninput="if(value.length>6)value=value.slice(0,11)" placeholder="输入手机号" v-model="value"
                               maxlength="11"/>
                    </div>
                    <div class="acc-btn" v-if="codes" @click="codesBnt">获取验证码</div>
                    <div class="acc-btnNums" v-else>{{total}}秒后重发</div>
                </div>
                <div class="number-code">
                    <input
                            v-model="code"
                            oninput="if(value.length>6)value=value.slice(0,12)" placeholder="请输入验证码"/>
                </div>
                <div class="number-btn" @click="switcher">一键登录</div>
            </div>


            <!-- 切换账号  -->
            <div class="log-phone" v-else>
                <div class="phone-hm">
                    <span>+86</span>
                    <span class="hm-call">{{phone |phoneNum}}</span>
                </div>
                <div class="phone-one" @click="isLog({name:'李太白',phone:'18154543615',openid:'6xhdieyuqwohvuisy'})"><span
                        @click="togglelog">本机号码一键登录</span></div>
                <div class="phone-btn" @click="switcher">切换账号</div>
            </div>

        </div>
    </div>
</template>
<script>
    import {mapGetters, mapMutations} from 'vuex'

    import {Toast} from 'vant';

    import {cheSmsLogin, smsLogin} from '@/api/user'
    import {getUser, removeUser, setUser} from '@/utils/auth'

    export default {
        name: 'Login',
        data() {
            return {
                total: 60,
                code: '',
                login: true,
                codes: true,
                value: '',
                phone: '13276861407'
            }
        },
        //过滤器
        filters: {
            phoneNum(val) {
                if (val === undefined) {
                    return "****";
                }
                var one = val.substring(0, 3);
                var tow = "****";
                return one + tow + val.substring(7, 11); //185****5017
            }
        },
        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },
        methods: {
            switcher() {
                var temp = {
                    id: this.userInfo.id,
                    code: this.code,
                    phone: this.value
                }
                cheSmsLogin(temp).then(res => {


                    if(res.data===10001){
                        Toast(res.msg)
                        return false
                    }
                    if (res.code === 20000) {
                        this.$store.dispatch('user/login', res.data)
                        setUser(res.data)
                        this.$router.push('/'); // 动态跳转
                    }
                })
                // this.login = !this.login
            },
            codesBnt() {
                if (this.value.length < 11) {
                    Toast('请填写11位数手机号码')
                    return;
                }
                smsLogin(this.value).then(res => {

                    let clock = window.setInterval(() => {
                        if (this.total > 0) {
                            this.total--
                        } else {
                            clearInterval(clock);
                            this.total = 60
                            this.codes = !this.codes
                        }
                    }, 1000)
                })
                this.codes = !this.codes

            },
            //登陆成功，跳转订单页
            togglelog() {
                this.$router.push({path: '/'})
            },
            ...mapMutations(['isLog'])
        }
    }
</script>
<style lang="scss" scoped>
    .Login {
        width: 10rem;
        overflow: hidden;
        .LoginBox {
            width: 7.57rem;
            margin: 0 auto;
            .log-title {
                text-align: center;
                margin-top: .6rem;
                color: #333333;
                font-size: 0.4rem;
                font-weight: bold;
            }
            .log-number {
                margin-top: 1.4rem;
                .number-account {
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #E5E5E5;
                    height: 1.1rem;
                    line-height: 1.1rem;
                    align-items: center;
                    .acc-left {
                        display: flex;
                        .acc-area {
                            font-size: 0.4rem;
                            font-weight: bold;
                            color: #333333;
                        }
                        input {
                            margin-left: 0.95rem;
                            width: 3rem;
                            color: #999999;
                            font-size: 0.4rem;
                        }
                    }
                    .acc-btn {
                        width: 1.73rem;
                        height: 0.75rem;
                        line-height: 0.75rem;
                        text-align: center;
                        border: 1px solid $color;
                        color: $color;
                        font-size: 0.27rem;
                    }
                    .acc-btnNums {
                        width: 1.73rem;
                        height: 0.75rem;
                        line-height: 0.75rem;
                        text-align: center;
                        color: #999999;
                        font-size: 0.27rem;
                        border: 1px solid rgba(229, 229, 229, 1);
                    }
                }
                .number-code {
                    margin-top: .3rem;
                    border-bottom: 1px solid #E5E5E5;
                    height: 1.1rem;
                    line-height: 1.1rem;
                    input {
                        font-size: 0.4rem;
                        color: #999999;
                        background: none;
                    }
                }
                .number-btn {
                    margin: 1.2rem auto 0;
                    width: 1.6rem;
                    color: #666666;
                    font-size: 0.4rem;
                }
            }
            .log-phone {
                margin-top: 1.4rem;
                .phone-hm {
                    font-size: 0.4rem;
                    color: #333333;
                    text-align: center;
                    .hm-call {
                        margin-left: .3rem;
                    }
                }
                .phone-one {
                    margin: 1.3rem auto 1rem;
                    width: 4.03rem;
                    height: 0.75rem;
                    line-height: 0.75rem;
                    text-align: center;
                    color: $color;
                    font-size: 0.4rem;
                    border: 1px solid $color;
                    border-radius: 0.13rem;
                }
                .phone-btn {
                    margin: 0 auto;
                    width: 1.6rem;
                    color: #999999;
                    font-size: 0.4rem;
                    text-align: center;
                }
            }
        }
    }
</style>
