import poojaImg from "../assets/pooja.jpg"

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gray-100 px-8 md:px-16 py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Learn German Language Easily
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            Join our professional German course and start speaking German
            with confidence.
          </p>

          <button className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg hover:bg-red-600 hover:scale-105 transition duration-300 shadow-md">
            Get Started
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="w-[320px] md:w-[420px] h-[420px] md:h-[560px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-white">
            <img
              src={poojaImg}
              alt="Pooja Academy"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  )
}