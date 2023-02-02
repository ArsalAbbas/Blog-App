const express = require('express');
var bodyParser = require('body-parser');
const cors=require("cors");
const {User,Blog} = require('./models/model.js')
const mongoose=require('./db/db.js')

const app=express()
const port=process.env.PORT||5500


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.listen(port,()=>{
    console.log('Server is up on the port '+port+" !")
})

app.get('/',(req,res)=>{
    res.sendFile("C:/Users/Sahil Nandal/OneDrive/Desktop/WebTech Project/home.html")
})

app.post('/signup', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send("Successfully Saved")
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post('/blogsave', async (req, res) => {
    const blog = new Blog(req.body)
    try {
        await blog.save()
        res.status(201).send("Successfully Saved")
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email, password: req.body.password})
        .then((found) => {
            console.log(found);
            res.status(200).json(found)
        })
        .catch(err => {
            console.log(err);
        })
    }catch(error){
        res.status(400).send(error)
    }
})

app.get('/getblog', async (req, res) => {
    try{
        const blog = await Blog.find({})
        .then((found) => {
            console.log(found);
            res.status(200).json(found)
        })
        .catch(err => {
            console.log(err);
        })
    }catch(error){
        res.status(400).send(error)
    }
})