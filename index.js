// import the dependencies ...
// require('dotenv').config();
import dotenv from 'dotenv'
import express from 'express'

// Building the app ...
const app  = express();
dotenv.config();
const PORT = 3000;


// Routes
app.get('/', (req , res)=>{
    res.send("Hello Home page !");
});
app.get('/me',(req , res)=>{
    res.send('<h1>Its Sarvottam </h1>');
});
app.get('/you', (req, res)=>{
    res.send('<h1> How are you</h1>')
});

app.listen(process.env.PORT || PORT , ()=>{
    console.log(`Server is running on ${PORT}`)
});
