module.exports=function(success,error){
const mongoose = require('mongoose')
console.log(success)
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');
// console.log('来了没')
mongoose.connection.once('open', () => {
console.log('open')
});

mongoose.connection.on('error', () => {
	console.log('失败')
})
mongoose.connection.on('close', () => {
	console.log('连接关闭')
})
}