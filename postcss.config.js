module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport":{
      viewportWidth: 375,//视窗的宽度，对应的是我们设计搞的宽度
      viewportHeight: 667,//视窗的高度，对应的是我们设计稿的高度(可以不配置）
      unitPrecision: 5,//指定px转化为最小视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw',//指定需要转化成的视窗单位，建议使用vw
      selectorBlackList: ['ignore','tab-bar'],//指定不需要转化的类
      minPixelValue: 1,//小于或等于1px不转化为视窗单位
      mediaQuery: false,//允许在媒体查询中转化为px
      exclude:[/TabBar/]
    },
  }
}
//1.在js中使用正则，/正则相关规则/
//2.exclude中存放的元素必须是正则表达式
//3.按照排除的文件写对应的正则
//正则的规则
//1.^abc 必须以abc开头
//2.abc$ 必须以abc结尾
