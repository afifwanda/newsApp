const {Projects} = require('../models/index.js')

class Controller {

    static addProject(req,res){
        let obj = {
            title : req.body.title,
            year : req.body.year,
            picture : req.body.picture,
            description : req.body.description,
            role : req.body.role,
            technology : req.body.technology,
            github : req.body.github,
            web : req.body.web,
            permalinks: req.body.permalinks,
        }
        Projects.create(obj)
        .then(result=>{
            res.status(201).json(result)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static getProject(req,res){
        Projects.findAll()
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static getProjectId(req,res){
        let id = req.params.id
        Projects.findOne({where:{id:id}})
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static getProjectPermalinks(req,res){
        let link = req.params.permalinks
        Projects.findOne({where:{permalinks:link}})
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static editProject(req,res){
        let id = req.params.id
        let obj = {
            title : req.body.title,
            year : req.body.year,
            picture : req.body.picture,
            description : req.body.description,
            role : req.body.role,
            technology : req.body.technology,
            github : req.body.github,
            web : req.body.web,
            permalinks: req.body.permalinks,
        }
        Projects.update(obj,{where:{id:id}})
        .then(result=>{
            res.status(201).json(result)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static deleteProject(req,res){
        let id = req.params.id
        Projects.destroy({where:{id:id}})
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

}

module.exports = Controller