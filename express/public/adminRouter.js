const express = require('express')
const router = express.Router()

router.get('/home',(req,res)=>{
	
	res.send('home')

});
module.exports = router;
// app.use(express.static(__dirname+'/public'))



