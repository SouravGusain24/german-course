export default function Courses() {

  const courses = [
    {
      title: "German A1 Beginner",
      price: "$120"
    },
    {
      title: "German A2 Intermediate",
      price: "$160"
    },
    {
      title: "German B1 Advanced",
      price: "$200"
    }
  ]

  return (
    <section id="courses" className="p-20 bg-white">

      <h2 className="text-3xl font-bold text-center mb-12">
        Popular German Courses
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {courses.map((course,i)=>(

          <div
            key={i}
            className="shadow-lg p-6 rounded-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            <h3 className="text-xl font-semibold mb-2">
              {course.title}
            </h3>

            <p className="text-gray-500 my-4">
              Learn grammar, vocabulary and speaking.
            </p>

            <p className="font-bold text-lg">{course.price}</p>

            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:scale-105 transition">
              Enroll
            </button>

          </div>

        ))}

      </div>
    </section>
  )
}