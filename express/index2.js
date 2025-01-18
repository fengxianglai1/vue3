const express = require('express')
const app = express();
const path = require('path');
const fs = require('fs');
const adminRouter = require('./public/adminRouter.js');
const index3Router = require('./index3.js');
//设置
app.use(adminRouter)
app.use(index3Router)
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json();
const urlencodeParser = bodyParser.urlencoded({ extended: false })
app.get('/login', (req, res) => {

	res.sendFile(__dirname + '/public/index.html')
});
app.post('/login', urlencodeParser, (req, res) => {
	console.log(req.body.username)
	res.sendFile(__dirname + '/test.html')
	// res.send('登录成功')

});
// app.use(express.static(__dirname+'/public'))





app.listen(1000, () => {
	console.log('端口已启动1000')
})