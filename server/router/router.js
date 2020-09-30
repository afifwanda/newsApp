const express = require('express');
const router = express.Router();
const articleController = require('../controller/articleController')


router.get('/',function(req,res){
    res.send('masuk')
})
router.get('/article',articleController.view);
router.post('/article',articleController.add);
router.get('/article/:id',articleController.getOne);
router.put('/article/:id',articleController.edit);
router.delete('/article/:id',articleController.delete);


module.exports = router