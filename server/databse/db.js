const mongoose =require("mongoose")

const dbconnection = ()=>{
    const url="mongodb://localhost:27017/Esense"
    console.log("Connection successfull")
    return mongoose.connect(url)
}

module.exports = dbconnection  