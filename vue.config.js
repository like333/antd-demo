//vue.config.js
// 包换Vue的全局配置，可以在启动应用之前修改下列属性
module.exports = {
    css: {
      loaderOptions: {
        less: {
          modifyVars:{
            // 'primary-color':'#24292e',
            // 'link-color':'#0366d6',
            // 'border-radius-base':'2px',
          },
          javascriptEnabled: true
        }
      }
    },
  }