const express = require('express');
const path = require('path');


const initHandlebars = require('./config/initHandlebars')
const initDatabase = require('./config/initDatabase')
const router = require('./router')
const { PORT, dbConnection } = require('./constants')

const app = express();

app.use(express.static(path.join(__dirname, "./static")))
app.use(express.urlencoded({extended: true}))


initHandlebars(app)
app.use(router);


initDatabase(dbConnection)
.then((res) => {
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`)
    })
})
.catch((err) => {
    console.log(err)
})
