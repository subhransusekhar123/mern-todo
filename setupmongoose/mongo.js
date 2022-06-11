const mongoose = require('mongoose');
const url = "mongodb+srv://RRR:RRR@cluster0.m7noq90.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async() =>{
   await mongoose.connect(url)
   .then((res)=>{console.log('connected')})
   .catch(err=>console.log(err))
}


const dataSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:[true,"kai ni batata re age"]
    }
});

const Model = mongoose.model('data',dataSchema);

module.exports = {
    connectDB:connectDB,
    Model:Model
}

