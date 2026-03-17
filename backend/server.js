const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

// ✅ Middleware
app.use(express.json())

app.use(cors({
  origin: "https://german-course-gbb6.vercel.app",
  methods: ["GET", "POST"],
  credentials: true
}))

// ✅ MongoDB Connection
mongoose.connect(
  "mongodb+srv://souravgusain832_db_user:Drugp%40ytm1@cluster0.1240cgu.mongodb.net/germanCourse"
)
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.log("❌ MongoDB error:", err))

// ✅ Schema
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  course: String,
  address: String,
  city: String,
  state: String
})

// ✅ Model
const Student = mongoose.model("Student", studentSchema)


// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Backend running successfully")
})


// ✅ Register API (FIXED with try-catch)
app.post("/register", async (req, res) => {
  try {
    console.log("📩 Register API called")

    const { name, email, mobile, course, address, city, state } = req.body

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

    console.log("✅ Student saved")

    res.status(200).json({
      message: "Student Registered Successfully"
    })

  } catch (error) {
    console.log("❌ Error saving student:", error)

    res.status(500).json({
      message: "Error saving student"
    })
  }
})


// ✅ Get all students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find()
    res.json(students)
  } catch (error) {
    res.status(500).json({
      message: "Error fetching students"
    })
  }
})


// ✅ Server start
const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  console.log("🚀 Server running on port " + PORT)
})