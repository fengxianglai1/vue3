const mongoose = require('mongoose')
const db = require('./home')

db(()=>{
	console.log(12345)
})
