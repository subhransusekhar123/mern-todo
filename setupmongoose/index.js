
const express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express();
const {connectDB,Model} = require('./mongo')
app.use(express.json())
app.use(cors())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}));


app.get('/',async(req,res)=>{
    let allData = await Model.find()
    console.log(allData)
    res.send(allData)
})




app.post('/',async(req,res)=>{
    console.log(req.body)
    let newObj = Model(req.body)
    // let newObj = new Model({
    //     name:'subhransu',
    //     age:28
    // })

    let ans = await newObj.save()
    console.log(ans)
    res.send('done')
    
})

app.delete('/:id',async(req,res)=>{
    let ans = await Model.deleteOne({_id:req.params.id})
    console.log(ans)
    res.send(ans)
})

app.put('/:id',async(req,res)=>{
    const body = req.body
    // console.log(req.body)
    let ans = await Model.updateOne({_id:req.params.id},{$set:{name:body.name,work:body.work}})
    console.log(ans)
    res.send(ans)
})
// only single
app.get('/:id',async(req,res)=>{
    console.log(req.params.id)
    let ans = await Model.findOne({_id:req.params.id})
    console.log(ans)
    res.send(ans)
})







const conMongo = async()=>{
    await connectDB()
    .then(()=>{
    })
    app.listen(5000,()=>{
        console.log('hosted on 5000')
    })
}

conMongo()