import {AI, ML, NLP, IP, BC, WD} from '../assets/index.js'

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
    {
      title: "Image Processing",
      image: `${IP}`,
      content: 'Image processing enhances and analyzes visual data to extract meaningful information. It is widely used in healthcare for detecting diseases from scans and in AI for facial recognition and object detection. This technology powers innovations across various industries.'
    },
    {
      title: "Blockchain",
      image: `${BC}`,
      content: 'Blockchain is a decentralized digital ledger that securely records transactions across a network of computers. Its transparent and tamper-proof nature ensures trust without the need for intermediaries, making it a cornerstone of cryptocurrencies like Bitcoin.'
    },
    {
      title: "Web Development",
      image: `${WD}`,
      content: 'Web development is the process of building and maintaining websites, combining design, coding, and functionality. It includes front-end development for user interfaces and back-end development for server-side logic.'
    },
  ]

  return (
    <div className="container mx-auto my-10 px-4 py-16 w-10/12 font-mono" id='about'>
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
              <p className='text-white text-sm'>{service.content}</p>
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
          {/* <button variant="outline" className="border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-sm transition-all duration-300 transform hover:scale-105">
            <a href="#" target='_blank'>OUR HISTORY</a>
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default ServicesSection