const express = require('express')
const app = express();
const path = require('path');
const fs = require('fs');

let checkCodeMiddleware = (req, res, next) => {
	if (req.query.code === '521') {
		next()
	} else {
		res.send('暗号错误')
	}
}

app.get('/home', checkCodeMiddleware, (req, res) => {
	// console.log(req.query);
	// console.log(req.url)
	// console.log(req.ip);
	console.log(req.get('host'));
	res.end('hello,express')
});
app.get('/:id.html', (req, res) => {
	console.log(req.params.id);
	res.setHeader('content-type', 'text/html;charset=utf-8')
	res.end('商品详情')
});
app.get('/response', (req, res) => {
	res.status(200)
	res.set('aaa', 'bbb')
	res.send('你好express')
});
app.get('/other', (req, res) => {
	console.log(req.body,'req')
	console.log('/other1')
	const data = {
	    name: 'John Doe',
	    age: 30,
	    email: 'john@example.com'
	  };
	  res.json(data); 
	//跳转响应
	// res.redirect("https://www.baidu.com")
	// //下载响应
	// res.download(__dirname+'package.json')
	// res.json({
	// 	name:'lisi',
	// 	slogon:'让天下没有难学的技术'
	// })
	// res.sendFile(__dirname + '/test.html')
})
app.get('/admin', checkCodeMiddleware, (req, res, next) => {

	// let {url,ip}=req;
	// fs.appendFileSync(path.resolve(__dirname,'./access.log'),`${url} ${ip}\r\n`);
	res.send('后台首页')
})
app.post('/getToken', (req, res, next) => {
console.log(req,'req')
	// let {url,ip}=req;
	// fs.appendFileSync(path.resolve(__dirname,'./access.log'),`${url} ${ip}\r\n`);
	const data = {
	    name: 'John Doe',
	    age: 30,
	    email: 'john@example.com'
	  };
	  res.json(data);
})
app.use((req, res, next) => {
	console.log('Time:', Date.now());
	let { url, ip } = req;
	// console.log('来了没')
	fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`);
	next();
});



app.listen(1000, () => {
	console.log('端口已启动1000')
})