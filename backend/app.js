const  express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

let user = [{
    name: 'Onur',
    age: 25
},{
    name: 'İsa',
    age: 35
} ]

app.get('/getUser',(req,res)=>{
    res.status(201).json(user)
})

app.post('/addUser',(req,res)=>{
    console.log(req.body)
    user = [...user,req.body]
    res.status(200).json({err:false})

})



app.listen(9000,()=>{
    console.log('Server calişiyor....')
})