const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

mongoose.connection.once('open',()=>{
		console.log('连接成功')
		let BookSchema = new mongoose.Schema({
			name:{type:String,
			required:true},
			author:String,
			price:Number
		})
	//根据id获取数据 findOne也是获取一条数据
	let	BookModel=mongoose.model('books',BookSchema);
	BookModel.findOne({'name':'三国演义'}).then(data=>{
		console.log(data)
	}).catch(res=>{
		console.log('失败'+res)
	})
	// let	BookModel=mongoose.model('books',BookSchema);
	// BookModel.findById('6787642e10deab8a2d9cde2a').then(data=>{
	// 	console.log(data)
	// }).catch(res=>{
	// 	console.log('失败'+res)
	// })
	//updateOne更新一条
	// let	BookModel=mongoose.model('books',BookSchema);
	// BookModel.updateMany({name:'三国演义'},{price:9.9}).then(data=>{
	// 	console.log(data)
	// }).catch(res=>{
	// 	console.log('失败'+res)
	// })
	//删除一条
	// BookModel.deleteOne({_id:'678763e03208b9d98aead704'}).then(data=>{
	// 		console.log(data)
	// 	}).catch(res=>{
	// 		console.log('失败'+res)
	// 	})

	// 	let BookModel=mongoose.model('books',BookSchema)
	// 	BookModel.create({
	// 		name:'三国演义',
	// 		author:'施耐安',
	// 		price:19.9
	// 	}).then(data=>{
	// 		console.log(data)
	// 	}).catch(res=>{
	// 		console.log('失败'+res)
	// 	})
	
	});

mongoose.connection.on('error',()=>{
	console.log('失败')
})
mongoose.connection.on('close',()=>{
	console.log('连接关闭')
})