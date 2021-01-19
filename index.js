const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const postRouter = require('./routes/posts')
const app = express()

// Routes
app.get('/', (req, res) =>{
    res.send('Hello from POSTMAN')
})

// Middleware
app.use(express.json())
app.use('/posts', postRouter)

// Database Connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
})
.then(() => console.log(`Connected to Database`))
.catch((err) => console.log(err))

const port = process.env.PORT || 5000
app.listen(port, () =>{
    console.log(`Listening on port: ${port}`)
})