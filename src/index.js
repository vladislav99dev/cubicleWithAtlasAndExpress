const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('You are on the home page')
    res.end(); 
})

app.listen(3000, () => {
    console.log('App is listening on port 3000')
})