import {Provider} from 'react-redux'
import Store from './Redux/Store'



const cors = require("cors") 
const express = require("express")


const app = express()

app.use(cors())

app.listen(9000, ()=> console.log("server running on port 9000..."))

let tasks = [
    {
        titre : "coding",
        status : false
    },
    {
        titre : "reading",
        status : false
    }
]



app.get("/ListTask",(req,res)=>{

        res.send(tasks)
        
})

app.post("/addTask", (req,res)=>{
    tasks.push({titre : "writing", status : false})
    res.send(tasks)
})