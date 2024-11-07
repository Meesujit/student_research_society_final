import { laptop, person, work } from "../assets/index.js";
import PreviousEvent from "../components/PreviousEvent.jsx";

const data = [
  {
    id: 1,
    title: "Learning Enviroment",
    image: laptop,
  },
  {
    id: 2,
    title: "Collbrative Mind",
    image: person,
  },
  {
    id: 3,
    title: "Research Work",
    image: work,
  },
]

const Event = () => {

  return (
    <>

      <section className="relative min-h-screen bg-gradient-to-b from-white to-blue-600/10 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />
        <div className="absolute right-0 top-1/2 w-48 h-48 bg-orange-200 rounded-full blur-3xl opacity-30" />

        <div className="container relative px-4 py-24 mx-auto">
          <div className="text-center space-y-8  mx-auto font-mono">
            <h1 className="text-xl md:text-6xl font-bold tracking-tight">
              Create Beautiful{" "}
              <span className="text-blue-600">Memories</span>
              <br />
              At Every Event
            </h1>

            <button className="border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-sm transition-all duration-300 transform hover:scale-105">
              Participate In Event
            </button>
          </div>

          {/* Main illustration container */}
          <div className="relative mt-16 max-w-screen-xl mx-auto">
            {/* Background board */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-8 rounded-lg ${i % 3 === 0 ? "bg-blue-100" :
                      i % 3 === 1 ? "bg-orange-100" :
                        "bg-pink-100"
                      } opacity-40`}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-1 justify-items-center md:h-72 mt-10 mb-10">
                {data.map((item, index) => (
                  <div className="bg-gradient-to-tl to-blue-50 from-blue-100 shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110 hover:border-gray-300">
                    <img
                      src={item.image}
                      key={index}
                      alt="Person with pencil illustration"
                      className="md:h-64 w-auto object-contain"
                    />
                    <h3 className="text-center relative bottom-7 font-mono text-xl mt-1 p-2">{item.title}</h3>
                  </div>
                ))}
              </div>

            </div>

            {[
              { top: "-2rem", left: "2rem" },
              { top: "-1rem", right: "25%" },
              { bottom: "-1rem", left: "20%" },
              { top: "40%", right: "-2rem" }
            ].map((position, index) => (
              <div
                key={index}
                className="absolute w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110 hover:border-gray-300"
                style={{
                  ...position,
                  backgroundColor: ["#FF6347", "#4682B4", "#32CD32", "#FFD700"][index] // Different colors
                }}
              >
                {/* You can add content inside the circles if needed */}
              </div>
            ))}

          </div>
        </div>
      </section>
      <PreviousEvent />
    </>
  );
};

export default Event;
