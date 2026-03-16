import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Courses from "../components/Courses"
import Teachers from "../components/Teachers"
import Footer from "../components/Footer"
import Register from "../components/Register"

export default function Home(){
 return(
  <>
  <Navbar/>
  <Hero/>
  <Courses/>
  <Teachers/>
  <Register/>
  <Footer/>
  </>
 )
}