const express = require('express')
const router = express.Router()
const app = express();
const { formidable } = require('formidable');
router.get('/portrait', (req, res) => {

	res.sendFile(__dirname + '/public/index.html')
})
router.post('/portrait', (req, res) => {
	console.log(__dirname + '/public/images')

	const form = formidable({
		multiples: true,
		uploadDir: __dirname + '/public/images',
		keepExtensions: true
	})
	form.parse(req, (err, fields, files) => {
		// if(err){
		// 	// next(err)
		// 	return;
		// }
		let url = 'images' + files.portrait
		console.log(fields, files)
		res.send(url)
	})
	// res.send(url)
})

module.exports = router

