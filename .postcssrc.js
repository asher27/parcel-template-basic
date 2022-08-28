//import autoprefixer from 'autoprefixer' 와 동일/ node.js에서 동작하는 js는 CommonJS방식으로 기존 import 대신에 require()사용
//const autoprefixer = require('autoprefixer')

//export {
//   plugins: [
//     autoprefixer
//   ]
// } 
// 과 동일/ node.js에서 동작하는 js는 CommonJS방식으로 기존 export 대신에 module.exports사용
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}