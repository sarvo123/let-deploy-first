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

app.listen(process.env.PORT || PORT , ()=>{
    console.log(`Server is running on ${PORT}`)
});
