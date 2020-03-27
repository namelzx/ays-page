module.exports = {
    //使用rem自适应 npm i --save-dev postcss-px2rem
    css: {
      loaderOptions: {
        sass:{
          prependData: `@import "~@/styles/variables.scss";`
        },
        scss: {
          // 根据自己样式文件的位置调整
          prependData: `@import "~@/styles/variables.scss";`
        },
        postcss: {
          plugins: [
            require('postcss-px2rem')({
              remUnit: 37.5
            })
          ]
        }
      }
  }
}
