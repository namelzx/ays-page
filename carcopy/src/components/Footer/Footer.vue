<template>
    <div class="footer-container">
        <!-- <div class="footer-item" @click="clickToAdmin()">
            <div class="logo active">
                <img src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/logo1.png" alt="" v-if="is_shop">
                <img src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/logo2.png" alt="" v-else>
            </div>
            <p>工作台</p>
        </div>
        <div class="footer-item" @click="clickToShop()">
            <div class="logo">
                <img src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/logo3.png" alt="" v-if="is_workbench">
                <img src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/logo4.png" alt="" v-else>
            </div>
            <p>店铺</p>
        </div> -->
        <van-tabbar route v-model="active" fixed active-color="#333333" inactive-color="#999999">
          <van-tabbar-item replace to="/">
            <span>工作台</span>
            <img
              slot="icon"
              slot-scope="props"
              :src="props.active ? icon.active : icon.inactive"
            >
          </van-tabbar-item>
            <van-tabbar-item replace to="/message" v-if="userInfo.role_tyoe===1">
                <span>消息</span>
                <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon.active2 : icon.inactive2"
                >
            </van-tabbar-item>
          <van-tabbar-item replace to="/shop" v-if="userInfo.role_tyoe===1">
            <span>店铺</span>
            <img
              slot="icon"
              slot-scope="props"
              :src="props.active ? icon.active3 : icon.inactive3"
            >
          </van-tabbar-item>
            <van-tabbar-item replace to="/my">
                <span>我的</span>
                <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? icon.active4 : icon.inactive4"
                >
            </van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
    name: "Footer",
    data () {
      return {
        active:0,
        icon: {
          active: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/logo1.png',
          inactive: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/logo2.png',
            active2: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/message-1.png',
            inactive2: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/message-1.png',
          active3: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/logo3.png',
          inactive3: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/logo4.png',
            active4: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/my-2.png',
            inactive4: 'https://kedand.oss-cn-beijing.aliyuncs.com/uploads/my-2.png',
        }
      }
    },
        computed: {
            ...mapGetters(["userInfo", "sele_shop"])
        },
    methods: {
      clickToAdmin () {
        let is_shop =  this.is_shop;
        if(is_shop){

        }
        else{
          this.is_shop = false;
          this.is_workbench = true
          this.$router.push('/')
        }
      },
      clickToShop () {
        let that = this;
        let is_workbench =  that.is_workbench
        console.log(is_workbench);
        if(is_workbench){

        }
        else{
          that.is_shop = false;
          that.is_workbench = true;
          that.$router.push('/shop')
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .footer-container {
        display: flex;
        padding: 10px 0;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #ffffff;
    }
    .footer-item {
        flex:1;
        text-align center;
    }
    .logo {
        width: 10%;
        margin 0 auto;
    }
    .logo img {
        width:100%;
    }

    .footer-item p {
        margin: 0;
        font-size:12px;
        color: #333;
    }
</style>
