<template>
    <!-- 编辑我的资料---更新版 -->
    <div>
        <div @click="toggleRetun" class="top_title">
            <Toptitle :title="title" />
        </div>
        <div>
            <div class="datum_haed">
                <img :src="userInfo.headimgurl" />
            </div>
            <div class="datum-username">
                <div>姓名</div>
                <div class="username-contens" @click="clickUsers">
                    <div class="contens-title">{{userInfo.realName}}</div>
                    <div class="contens-icon"><img src="@/assets/you.png" /></div>
                </div>
            </div>
            <div class="datum-username">
                <div>手机号</div>
                <div class="username-contens" @click="clickPhone">
                    <div class="contens-title">{{userInfo.tel |phoneNum}}</div>
                    <div class="contens-icon"><img src="@/assets/you.png" /></div>
                </div>
            </div>

            <!-- 更新资料 -->
            <div class="datum-update">
                <div class="update-icon"><img src="@/assets/update.png" /></div>
                <div>更新资料</div>
            </div>
        </div>
        <!-- 更改用户名弹窗  -->
        <div class="up-users" v-if="Upusers" @touchmove.prevent>
            <div class="usersBox">
                <div class="usersBoxHe">
                    <div class="title">更改姓名</div>
                    <div class="inps">
                        <input v-model="userInfo.realName" maxlength="10" @input="descInput" />
                        <span>{{remnant}}/10</span>
                    </div>
                    <div class="user-btn">
                        <span class="btn-qx" @click="clickbtnqx">取消</span>
                        <span class="btn-ok" @click="clickBtnok">确定修改</span>
                    </div>
                </div>
            </div>
        </div>
        <!--弹出修改手机号码-->
        <div class="up-users" v-if="Uphone" @touchmove.prevent>
            <div class="usersBox">
                <div class="usersBoxHe">
                    <div class="title">更新手机号码</div>
                    <div class="inps">
                        <input v-model="userInfo.tel" type="number" οninput="value=value.replace(/[^\d]/g,'')" maxlength="11" @input="phoneInput" />
                        <span>{{ohoneremnant}}/11</span>
                    </div>
                    <div class="user-btn">
                        <span class="btn-qx" @click="Uphone=false">取消</span>
                        <span class="btn-ok" @click="clickBtnPhone">确定修改</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Toptitle from "@/components/Toptitle/Toptitle";
    import {mapGetters} from 'vuex'
    import {PostDataByupdate} from '@/api/user'
    import {getUser, removeUser, setUser} from '@/utils/auth'

    export default {
        name:'Mydatum',
        data() {
            return {
                title:'编辑我的资料',
                username:'阿帕金刚',
                phone:'13256781407',
                Upusers:false, //用户名弹窗
                Uphone:false,
                remnant:10,
                ohoneremnant:11,
            }
        },
        computed:{
            ...mapGetters([
                'userInfo'
            ])
        },
        //过滤器
        filters:{
            phoneNum(val) {
                if (val === undefined) {
                    return "****";
                }
                var one = val.substring(0, 3);
                var tow = "****";
                return one + tow + val.substring(7, 11); //185****5017
            }
        },

        methods:{
            toggleRetun() {
                this.$router.go(-1); //返回上一层
            },
            //点击弹出更改用户框
            clickUsers() {
                this.Upusers = !this.Upusers;
            },
            clickbtnqx() {
                this.clickUsers();
            },
            //用户名确定
            clickBtnok() {
                PostDataByupdate(this.userInfo).then(res=>{
                    console.log(res)
                    this.$store.dispatch('user/login', this.userInfo)
                    setUser(this.userInfo)

                })
                this.clickUsers();
            },
            clickBtnPhone(){
                PostDataByupdate(this.userInfo).then(res=>{
                    console.log(res)
                    this.$store.dispatch('user/login', this.userInfo)
                    setUser(this.userInfo)

                })
                this.clickPhone();
            },
            descInput() {
                var txtVal = this.userInfo.realName.length;
                this.remnant = 10 - txtVal;
            },
            phoneInput() {
                var txtVal = this.userInfo.tel.length;
                this.ohoneremnant = 11 - txtVal;
            },
            //更改手机号码
            clickPhone() {

                this.Uphone = !this.Uphone;
                // this.$router.push({ path: "/my/myphone" });
            }
        },
        components: {
            Toptitle
        },
        created() {
            console.log(this.userInfo)
            if (this.$route.query.phone !== undefined) {
                this.phone = this.$route.query.phone
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .datum_haed{
        width:2.51rem;
        height:2.51rem;
        border-radius:50%;
        overflow: hidden;
        border: 1px solid #d1d1d1;
        margin: 1rem auto .65rem;
        margin-top:1.5rem !important;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .datum-username{
        height: 1.19rem;
        line-height: 1.19rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #DCDCDC;
        padding: 0 .45rem;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(51,51,51,1);
        .username-contens{
            display: flex;
            .contens-icon{
                width: 0.6rem;
                height: 0.6rem;
                margin-top: .15rem;
                margin-left: .4rem;
                margin-right: -.2rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .datum-update{
        margin: 1.5rem auto;
        width: 2.5rem;
        display: flex;
        font-size:0.4rem;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(51,51,51,1);
        .update-icon{
            margin-right: .2rem;
            margin-top: .05rem;
            width: .5rem;
            height: .5rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .up-users {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 10;
        .usersBox {
            overflow: hidden;
            margin: 3.45rem auto;
            width: 9.15rem;
            height: 4.45rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.13rem;
            .usersBoxHe {
                width: 9.15rem;
                // margin: 0 auto;
                .title {
                    margin-top: 0.2rem;
                    text-align: center;
                    color: #333333;
                    font-size: 0.4rem;
                }
                .inps {
                    margin-top: 0.2rem;
                    width: 9.15rem;
                    height: 1.2rem;
                    border-bottom: 1px solid #dcdcdc;
                    background: rgba(255, 255, 255, 1);
                    position: relative;
                    margin-bottom: 0.2rem;
                    input {
                        width: 7rem;
                        margin-left: 0.47rem;
                        height: 0.8rem;
                        line-height: 0.89rem;
                        color: #333333;
                        font-size:0.4rem;
                        font-family:Source Han Sans CN;
                        font-weight:400;
                    }
                    span {
                        position: absolute;
                        bottom: 0;
                        right: 0.4rem;
                        font-size: 0.27rem;
                        color: #666666;
                        font-family:Source Han Sans CN;
                        font-weight:400;
                    }
                }
                .user-btn {
                    display: flex;
                    justify-content: space-between;
                    width: 8.5rem;
                    margin: 0.8rem auto;
                    // text-align: right;
                    .btn-qx {
                        display: inline-block;
                        width:3.89rem;
                        height:1.09rem;
                        line-height: 1.09rem;
                        border:1px solid rgba(234,55,86,1);
                        border-radius:1rem;
                        text-align: center;
                        font-size:0.4rem;
                        font-family:Source Han Sans CN;
                        font-weight:400;
                        color:rgba(234,55,86,1);
                    }
                    .btn-ok {
                        display: inline-block;
                        width:3.89rem;
                        height:1.09rem;
                        line-height: 1.09rem;
                        background:rgba(234,55,86,1);
                        border:1px solid rgba(234,55,86,1);
                        border-radius:1rem;
                        text-align: center;
                        font-size:0.4rem;
                        font-family:Source Han Sans CN;
                        font-weight:400;
                        color:rgba(254,254,254,1);
                    }
                }
            }
        }
    }
</style>
