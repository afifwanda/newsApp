const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/project',controller.getProject)
router.post('/project',controller.addProject)
router.get('/project/:id',controller.getProjectId)
router.get('/projects/:permalinks',controller.getProjectPermalinks)
router.put('/project/:id',controller.editProject)
router.delete('/project/:id',controller.deleteProject)

module.exports = router