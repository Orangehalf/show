const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    //vue-cli3.0 里面的 vue.config.js做配置
    devServer: {
      proxy: {
          '/proxy':{     //这里最好有一个 /
              target: 'http://127.0.0.1:8000',  // 后台接口域名
              ws: true,        //如果要代理 websockets，配置这个参数
              secure: false,  // 如果是https接口，需要配置这个参数
              changeOrigin: true,  //是否跨域
              pathRewrite:{
                  '^/proxy':''
              }
          }
      }
    }
  
})

