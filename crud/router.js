const express = require('express')
const dbstudents = require('./students')
const router = express.Router()

//index页面
router.get('/', (req, res) =>
  dbstudents.findAll((err, data) => res.render('index.html', { students: data }))
)

//添加页面
router.get('/post', (req, res) => res.render('post'))

//添加
router.post('/add', (req, res) => dbstudents.save(req.body, (err) => err ? console.log(err) : res.redirect('/')))

//删除
router.get('/del', (req, res) => dbstudents.del(req.query.id, (err) => err ? console.log(err) : res.redirect('/')))
// router.get('/del', (req, res) => console.log(req.query.id))

//修改页面
router.get('/modify', (req, res) =>
  dbstudents.findById(req.query.id, (err, data) => res.render('modify.html', { student: data }))
)
//实现修改
router.post('/modify', (req, res) =>
  dbstudents.update(req.body, (err, data) => res.redirect('/'))
)
module.exports = router