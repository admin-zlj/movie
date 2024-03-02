/**
 * Prettier 配置文件
 * 更多配置选项请参考：https://prettier.io/docs/en/options.html
 */

module.exports = {
  // 控制是否使用单引号。如果设置为 true，则使用单引号，否则使用双引号
  singleQuote: true,

  // 是否在对象或数组最后一个元素后面添加逗号（trailing comma）
  trailingComma: 'es5', // 可选值有 'none', 'es5', 和 'all'

  printWidth: 100, // 默认值是80，可以根据团队规范调整

  tabWidth: 2, // 设置缩进为多少个空格，默认是2

  // 使用制表符还是空格进行缩进
  useTabs: false, // 如果为true，将使用制表符进行缩进；false则使用空格

  // 设置行尾换行符类型。可以是 'lf' (Linux 和 macOS)，'crlf' (Windows) 或 'cr' (old Mac OS)
  endOfLine: 'lf',

  // 控制嵌套的括号内的间距
  bracketSpacing: true, // 在对象和数组括号内插入空格，默认为true

  // 在 JSX 中控制换行
  jsxBracketSameLine: false, // 默认情况下，JSX 开闭标签不在同一行

  // 在Markdown代码块中启用/禁用Prettier格式化
  proseWrap: 'preserve', // 可选值有 'always', 'never', 'preserve'

  // Vue文件中的HTML处理方式
  vueIndentScriptAndStyle: true, // Vue文件中script和style标签的缩进，默认true

  // 格式化HTML时忽略的属性列表
  htmlWhitespaceSensitivity: 'css', // 可选值有 'css', 'strict', 'ignore'
};
