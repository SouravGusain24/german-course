import { useState } from "react"

export default function Register(){

const [form,setForm] = useState({
name:"",
email:"",
mobile:"",
course:"",
address:"",
city:"",
state:""
})

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = async (e)=>{
e.preventDefault()

await fetch("http://localhost:5001/register",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify(form)
})

alert("Registered Successfully")
}

return(

<div id="register" className="bg-gray-100 py-20">

<h2 className="text-3xl font-bold text-center mb-12">
Register for German Course
</h2>

<form 
onSubmit={handleSubmit} 
className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition grid grid-cols-1 md:grid-cols-2 gap-6"
>

<input
name="name"
placeholder="Full Name"
onChange={handleChange}
className="border p-3 rounded"
/>

<input
name="email"
placeholder="Email"
onChange={handleChange}
className="border p-3 rounded"
/>

<input
name="mobile"
placeholder="Mobile Number"
onChange={handleChange}
className="border p-3 rounded"
/>

<input
name="course"
placeholder="Course (A1 / A2 / B1)"
onChange={handleChange}
className="border p-3 rounded"
/>

<input
name="city"
placeholder="City"
onChange={handleChange}
className="border p-3 rounded"
/>

<input
name="state"
placeholder="State"
onChange={handleChange}
className="border p-3 rounded"
/>

<textarea
name="address"
placeholder="Full Address"
onChange={handleChange}
className="border p-3 rounded md:col-span-2"
/>

<button
type="submit"
className="bg-blue-600 text-white py-3 rounded md:col-span-2 hover:bg-blue-700 hover:scale-105 transition"
>
Register Now
</button>

</form>

</div>

)
}