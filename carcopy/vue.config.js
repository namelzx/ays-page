const path = require('path');//引入path模块
function resolve(dir){
  return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}


module.exports={
    publicPath: './',
    outputDir: 'shop',

  chainWebpack:(config)=>{
    config.resolve.alias
        .set('@',resolve('./src'))
    //set第一个参数：设置的别名，第二个参数：设置的路径

  },
  css: {
      loaderOptions: {
        css: {},
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
