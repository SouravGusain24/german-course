export default function Teachers(){

 const teachers=[
  "Anna Müller",
  "Jonas Schmidt",
  "Lukas Weber",
  "Sofia Fischer"
 ]

 return(

  <section id="teachers" className="p-20 bg-gray-100">

  <h2 className="text-3xl font-bold text-center mb-12">
  Our German Teachers
  </h2>

  <div className="grid md:grid-cols-4 gap-8">

  {teachers.map((t,i)=>(
  <div
    key={i}
    className="text-center shadow-lg p-6 rounded-lg hover:scale-105 hover:shadow-xl transition duration-300"
  >

  <img
  src={`https://randomuser.me/api/portraits/men/${i+1}.jpg`}
  className="w-24 h-24 mx-auto rounded-full mb-4"
  />

  <h3 className="font-semibold text-lg">{t}</h3>

  <p className="text-gray-500">German Expert</p>

  </div>
  ))}

  </div>
  </section>
 )
}