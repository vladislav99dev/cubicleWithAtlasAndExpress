const express = require('express');
const path = require('path');

const initHandlebars = require('./config/initHandlebars')

const app = express();

app.use(express.static(path.join(__dirname, "./static")))
initHandlebars(app)

app.get('/',(req,res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('App is listening on port 3000')
})