import {AI, ML, NLP} from '../assets/index.js'

 const  ServicesSection = () => {
  const services = [
    {
      title: "AI/ML",
      image: `${AI}`,
      content: 'Join our group to explore cutting-edge research in AI and ML. We provide students with hands-on training, tools, and resources to deepen their expertise while promoting ethical, responsible AI development for the benefit of society.'
    },
    {
      title: "Speech Processing",
      image: `${ML}`,
      content: 'The Speech Processing Research Group pushes the boundaries of speech technology through innovative research in areas like speech recognition, synthesis, and analysis. We develop impactful applications such as virtual assistants and transcription services.'
    },
    {
      title: "NLP",
      image: `${NLP}`,
      content: 'The NLP Research Group advances language technologies through pioneering research and practical applications like sentiment analysis and machine translation. We focus on both theoretical foundations and real-world challenges.'
    },
  ]

  return (
    <div className="container mx-auto my-10 px-4 py-16 w-10/12 font-mono">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-[6.1rem]">
        {services.map((service, index) => (
          <div key={index} className="relative overflow-hidden rounded-sm group h-full w-full px-12 py-12 border">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute w-full h-full inset-0 bg-slate-800 bg-opacity-50 flex flex-col gap-4 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 cursor-pointer">
              <h3 className="text-white text-2xl font-bold">{service.title}</h3>
              <p className='text-white text-lg'>{service.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start">
        <h2 className="text-4xl font-bold mb-8 md:mb-0 md:w-1/2 ">About The Program!</h2>
        <div className="md:w-1/2">
          <p className="text-gray-600 mb-6">
           The <span className='font-semibold text-xl'> Student Research Society </span> (SRS) typically refers to a student-led organization that promotes research and scholarly activities among students. These societies often aim to enhance research skills, provide networking opportunities, and foster collaboration among students and faculties.
          </p>
          <p className="text-gray-600 mb-6 font-bold">
            connect with us to learn more about, <br /> our research groups, projects, and upcoming events.
          </p>
          <button variant="outline" className="border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-sm transition-all duration-300 transform hover:scale-105">
            <a href="https://ksac.kiit.ac.in/kiit-societies" target='_blank'>OUR HISTORY</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection