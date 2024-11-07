
import { director } from "../assets"


const Testimonial = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="relative w-full md:w-1/2 aspect-[4/3]">
          <div className="absolute inset-0 bg-blue-200 w-10/12 translate-x-4 translate-y-4 z-0"></div>
          <img
            src={director}
            alt="Beer barrels stacked in a brewery"
            layout="fill"
            objectFit="cover"
            className="relative z-10 bg-slate-600 w-10/12"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 uppercase">
            Dr. Achyuta Samanta
          </h1>
          <div className="space-y-4 text-gray-700 font-mono font-light text-xl">
            <p>
              Dr. Achutya Samanta is an Indian educationist, entrepreneur, and philanthropist known for his significant contributions to the field of higher education in India. He is the founder of the Kalinga Institute of Industrial Technology (KIIT) and the Kalinga Institute of Social Sciences (KISS), both located in Bhubaneswar, Odisha.
              <span>
              </span>
            </p>
            <button className=" text-blue-600 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 border border-blue-600 rounded-sm inline-flex items-center transition duration-150 ease-in-out">
              <a href="https://achyutasamanta.com" target="_blank">Check Profile</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial