// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    "no-spaced-func": 2,
    "no-unused-vars": [0, {"vars": "local", "args": "after-used"}], //不能有声明后未被使用的变量或参数
    "space-before-function-paren": [0, "always"], //函数定义时括号前面要不要有空格
    "no-fallthrough": 0,    // case贯穿
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "indent": [2, 4, { "SwitchCase": 1 }],   // switch case 缩进
    'semi': [2, "always"],
    'eol-last': 0 // 文件末尾需要空一行（去除这个校验）
  }
}
