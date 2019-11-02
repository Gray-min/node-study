const express = require("express")
const path = require('path')
var bodyParser = require('body-parser')
const app = express()
app.engine('html', require('express-art-template'));
app.set('views', {
  debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use('/public', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const comments = {
  comments: [{ name: '张三', comment: '不错' }, { name: '张三', comment: '不错' }, { name: '张三', comment: '不错' }]
}
app.get('/', (req, res) => res.render('index.html', comments)
)

app.get('/post', (req, res) => res.render('post')
)

app.post('/pinglun', (req, res) => (comments.comments.unshift(req.body), res.redirect('/')))


app.listen(3000, () => {
  console.log("running")
})