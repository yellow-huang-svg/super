module.exports = {
  lintOnSave:false,
  configureWebpack: {
    resolve:{
      alias: {
        //别名配置
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'Common': '@/Common',
      }
    }
  }
}
