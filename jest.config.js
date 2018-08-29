module.exports = {
  testMatch: ['<rootDir>/test/**/*.js'] //[ "**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)" ],  //匹配文件
  // testRegex:'(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',  //正则匹配文件 与testMatch选1
  // testEnvironment:'jsdom',//node
  // rootDir:'',//默认值:package.json 所在目录，没有 package.json, pwd  在rootDir中匹配testMatch
  // moduleFileExtension:['js','json','jsx','node'] //匹配文件类型
}
