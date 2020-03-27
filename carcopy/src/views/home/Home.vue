<template>
  <div class="home" v-if="homeshow">
    <!--<user-info v-if="homeshow" :shop="shop"/>-->
    <swiper v-if="homeshow" :imgList="imgList" />
    <category v-if="homeshow" :cateList="cateList" style="margin-bottom: 60px;" />
    <my-footer v-if="homeshow" class="home-footer" />

    <div :class="[packshow===true?'help':'help-pack']" @click="topackshow">
      <img
        @click.stop="togoHelp('/help')"
        src="https://kedand.oss-cn-beijing.aliyuncs.com/uploads/icon_bangzhu%402x.png"
      />
    </div>
  </div>
</template>

<script>
import UserInfo from "./userCard/UserInfo";
import Swiper from "./swiper/Swiper";
import Category from "./category/Category";
import MyFooter from "./../../components/Footer/Footer";
import Toptitle from "@/components/Toptitle/Toptitle";
import { getUser, removeUser, setUser } from "@/utils/auth";
import { Gethomebanner } from "@/api/shop";
import { getInfo, login } from "@/api/user";
import { mapGetters } from "vuex";

import { GetDataByList } from "@/api/shop";

export default {
  name: "home",
  computed: {
    ...mapGetters(["userInfo", "sele_shop"])
  },
  data() {
    return {
      packshow: true, //帮助是否展开，收起
      homeshow: false,
      shop: "阿帕旗舰店（广州）",
      imgList: [
        {
          id: "01",
          url:
            // "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png"
            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/homesw.png"
        },
        {
          id: "02",
          url:
            // "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png"
            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/homesw.png"
        },
        {
          id: "03",
          url:
            // "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png"
            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/homesw.png"
        }
      ],
      cateList: [
        {
          id: "1",
          url:
            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/install%402x.png",
          name: "安装单",
          english: "INSTALLATION LIST"
        },
        {
          id: "2",
          url:
            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/bill%402x.png",
          name: "账单",
          english: "BILL"
        },
        {
          id: "3",
          url:
            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/official.png",
          name: "官派单",
          english: "OFFICIAL"
        },
        {
          id: "4",
          url:
            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/upload%402x.png",
          name: "视频上传",
          english: "VIDEO UPLOAD"
        },
        {
          id: "5",
          url:
            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/install%402x.png",
          name: "核销",
          english: "VERIFICARTION SLIP"
        },
        {
          id: "6",
          url:
            "https://kedand.oss-cn-beijing.aliyuncs.com/uploads/discount.png",
          name: "优惠券",
          english: "COUPON"
        }
      ]
    };
  },
  components: {
    UserInfo,
    Swiper,
    Category,
    MyFooter,
    Toptitle
  },
  methods: {
    togoHelp(data) {
      this.$router.push(data);
    },
    //展开收起
    topackshow() {
      this.packshow = !this.packshow;
    }
  },

  created() {
    Gethomebanner().then(res => {
      this.imgList = res.data.banner;
      console.log(res.data.banner, "轮播图");
    });
    if (this.$route.query.name !== undefined) {
      this.shop = this.$route.query.name;
    }

    let nd = this.userInfo.openid === undefined ? "kong" : this.userInfo.id;

    if (nd) {
      // console.log(nd)

      GetDataByList(nd).then(res => {
        this.shop = res.data;
        if (res.data == 3) {
          this.$router.push("/add-shop"); // 动态跳转
        } else {
          this.homeshow = true;
          console.log(this.sele_shop);
          if (!this.sele_shop.shopname) {
            this.$store.dispatch("shop/setShop", res.data[0]);
          }
        }
      });
    }

    let id = this.$route.params.id;
    if (id !== undefined) {
      getInfo(id).then(res => {
        //执行某个方法dispatch 要指定modules下面的文件里面的方法才起作用
        this.$store.dispatch("user/login", res.data);
        setUser(res.data);
        console.log(res.data);
      });
    }
  }
};
</script>

<style scoped>
.home {
}

.home-footer {
}
.help {
  width: 1.39rem;
  height: 0.96rem;
  background: linear-gradient(
    -45deg,
    rgba(232, 61, 112, 1) 0%,
    rgba(239, 125, 91, 1) 100%
  );
  box-shadow: 3px 3px 16px 0px rgba(51, 51, 51, 0.3);
  border-radius: 36px 0px 0px 36px;
  position: fixed;
  right: 0;
  top: 10.5rem;
  z-index: 20;
  display: flex;
  align-items: center;
}
.help img {
  margin: 0 auto;
  width: 0.53rem;
  height: 0.53rem;
}
.help-pack {
  width: 1.39rem;
  height: 0.96rem;
  background: linear-gradient(
    -45deg,
    rgba(232, 61, 112, 1) 0%,
    rgba(239, 125, 91, 1) 100%
  );
  box-shadow: 3px 3px 16px 0px rgba(51, 51, 51, 0.3);
  border-radius: 36px 0px 0px 36px;
  position: fixed;
  right: -1rem;
  top: 10.5rem;
  z-index: 20;
  display: flex;
  align-items: center;
}
.help-pack img {
  margin: 0 auto;
  width: 0.53rem;
  height: 0.53rem;
}
</style>
