const express = require('express')
const app = express()
const PORT = 5000
const db = require('./server/config/db')
app.get('/', (req, res)=>{
    res.send('welcome to server.')
})

app.listen(PORT, (err)=>{
    if(err){
        console.log('error occured in server', err ); 
    }
    else{
        console.log('server is running');
    }
})