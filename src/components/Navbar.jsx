import { Link } from "react-scroll"

export default function Navbar(){

return(

<nav className="flex justify-between items-center px-10 py-5 shadow-md bg-white sticky top-0 z-50">

<h1 className="text-2xl font-bold text-red-500">
German Academy
</h1>

<ul className="flex gap-10 text-lg font-medium">

<li className="cursor-pointer hover:text-red-500 transition duration-300">
<Link to="home" smooth={true} duration={500}>Home</Link>
</li>

<li className="cursor-pointer hover:text-red-500 transition duration-300">
<Link to="courses" smooth={true} duration={500}>Course</Link>
</li>

<li className="cursor-pointer hover:text-red-500 transition duration-300">
<Link to="teachers" smooth={true} duration={500}>Teachers</Link>
</li>

<li className="cursor-pointer hover:text-red-500 transition duration-300">
Blog
</li>

</ul>

<button className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition">
Join Now
</button>

</nav>

)

}