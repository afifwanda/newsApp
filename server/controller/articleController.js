const { Article } = require('../models/index.js');

class articleController{

  static view(req,res,next){
    Article.findAll()
    .then(result=>{
      res.status(200).json(result)
    })
    .catch(err=>{
      next({status: 500, msg: err})
    })
  }

  static add(req,res,next){
    let obj = {
      title: req.body.title,
      categories: req.body.categories,
      thumbnail: req.body.thumbnail,
      article: req.body.article
    }
    Article.create(obj)
    .then(result=>{
      res.status(201).json(result)
    })
    .catch(err=>{
      next(console.log(err))
    })
  }

  static getOne(req,res,next){
    let id = req.params.id;
    Article.findOne({where:{id:id}})
    .then(result=>{
      if(result){
         res.status(200).json(result) 
      } else{
          next({status: 404, msg: 'Data not found!'})
        }
    })
    .catch(err=>{
      next({status: 500, msg: err})
    })
  }

  static edit(req,res,next){
    let id = req.params.id;
    let obj = {
      title: req.body.title,
      categories: req.body.categories,
      thumbnail: req.body.thumbnail,
      article: req.body.article
    }
    Article.update(obj,{where:{id:id}})
    .then(result=>{
      res.status(201).json(obj)
    })
    .catch(err=>{
      next({status: 500, msg: err})
    })
  }

  static delete(req,res,next){
    let id = req.params.id;
    Article.destroy({where:{id:id}})
    .then(result=>{
      res.status(200).json({status: result, msg: 'file has been deleted'})
    })
    .catch(err=>{
        next({status: 500, msg: 'Internal server error!'})
    })
  }

}

module.exports = articleController