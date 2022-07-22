const express = require('express');
const path = require('path');

const initHandlebars = require('./config/initHandlebars')
const initDatabase = require('./config/initDatabase')
const { PORT, dbConnection} = require('./constants')

const app = express();

app.use(express.static(path.join(__dirname, "./static")))
initHandlebars(app)

app.get('/',(req,res) => {
    res.render('index')
})

initDatabase(dbConnection)
.then((res) => {
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`)
    })
})
.catch((err) => {
    console.log(err)
})
