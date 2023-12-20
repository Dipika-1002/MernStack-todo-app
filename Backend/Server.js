const express=require('express')
const mongoose = require('mongoose')
const cors = require("cors")
require('dotenv').config()
const routes = require('./routes/TODORoute')
const app = express()
app.use(express.json())
app.use(cors())

//connenct to mongodb
const mongoURI = 'mongodb://localhost:27017/TODO-list'
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');    
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

const PORT = 5001 || process.env.PORT

//Routes
app.use(routes)


app.listen(PORT, ()=>{
    console.log(`Listening on: ${PORT}`);
});

