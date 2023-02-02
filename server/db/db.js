const mongoose=require('mongoose')

const db="mongodb+srv://arihant:arihant@cluster0.nooze.mongodb.net/renewable?retryWrites=true&w=majority";

mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log(err);
    console.log("No connection");
})