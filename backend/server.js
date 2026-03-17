const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
mongoose.connect("mongodb+srv://souravgusain832_db_user:Drugp%40ytm1@cluster0.1240cgu.mongodb.net/germanCourse")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))
// Student Schema
const studentSchema = new mongoose.Schema({
name:String,
email:String,
mobile:String,
course:String,
address:String,
city:String,
state:String
})

// Model
const Student = mongoose.model("Student", studentSchema)


// Test Route
app.get("/", (req,res)=>{
res.send("Backend running successfully")
})


// Register Student API
app.post("/register", async (req,res)=>{

const { name,email,mobile,course,address,city,state } = req.body

const newStudent = new Student({
name,
email,
mobile,
course,
address,
city,
state
})

await newStudent.save()

res.json({message:"Student Registered Successfully"})

})

// Get all students API
app.get("/students", async (req,res)=>{

try{

const students = await Student.find()

res.json(students)

}catch(error){

res.status(500).json({
message:"Error fetching students"
})

}

})


// Start Server
app.listen(5001,()=>{
console.log("Server running on port 5001")
})