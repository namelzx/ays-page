<template>
  <div class="home-swiper">
    <!-- <swiper :options="swiperOption">
            <swiper-slide class="sw_slide" :class="['sw_slide',index===0?'active':'']" v-for="(item,index) in imgList" :key="index">
                <img :src="item.url" class="swiper-img" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>-->
    <div class="sw">
      <swiper :options="swiperOption">
        <swiper-slide class="sw_slide" v-for="(item,index) in imgList" :key="index">
          <img :src="item.images_url" class="swiper-img" @click="toggle(item.type,item.url,item.content)" />
        </swiper-slide>
      </swiper>

      <div class="swiper-pagination" slot="pagination"></div>
    </div>

    <!-- Optional controls -->

    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </div>
</template>

<script>
export default {
  name: "Swipers",
  props: {
    imgList: {
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        direction: "horizontal", // 滑动的方向(水平方向)
        loop: true, // 是否循环
        autoplay: {
          delay: 2500 // 自动播放的时长
        },
        slidesPerView: "auto", // 设置可视区一共显示几张图片,设置auto,设置auto为自适应;
        centeredSlides: true, // 设置为true时,带有active-slide类名的图片会居中
        spaceBetween: 1, //  每张图片之间的间隔
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  methods: {
    toggle(type, url,content) {
      if (type == 2) {
        this.$router.push(url);
        console.log(111)
      }
      if(type==1){
        let content = content
        this.$router.push({path:'/heome/details',query:{content}})
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.home-swiper {
  .sw {
    position: relative;

    .sw_slide {
      width: 7.97rem;
      height: 3.75rem;
      padding-bottom: 0.3rem;

      img {
        padding-top: 0.3rem;
        width: 7.97rem;
        height: 3.75rem;
      }
    }

    .swiper-slide-next {
      transform: scale(0.9);
    }

    .swiper-slide-prev {
      transform: scale(0.9);
    }

    .swiper-pagination {
      width: 10rem !important;
      position: absolute;
      color: red;
      bottom: -0.4rem;
      left: 0;
      right: 0;
      text-align: center;
      margin: 0 auto;

      /deep/ .swiper-pagination-bullet {
        width: 0.08rem;
        height: 0.08rem;
        background: rgba(153, 153, 153, 1);
        border-radius: 50%;
        margin-right: 0.2rem;
        opacity: 1;
      }

      /deep/ .swiper-pagination-bullet-active {
        width: 0.35rem !important;
        height: 0.08rem !important;
        background: rgba(102, 102, 102, 1);
        border-radius: 0.04rem;
      }
    }
  }
}
</style>