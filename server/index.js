const express= require("express")
const cors =require("cors")
const app =express()
const dbcon = require("./databse/db")
let bodyParser = require ('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(cors({
    origin:'http://localhost:3000'
    
}))

dbcon().then(()=>{

    const routes = require("./routes/route")
    console.log("routes",routes)
app.use("/userroute",routes)



    app.listen(5000,()=>{
        console.log("app listening on 5000")
    })
}).catch((error)=>{
    console.log(error)
     })


