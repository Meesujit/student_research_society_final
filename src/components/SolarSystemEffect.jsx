import React, { useState } from 'react'

const colors = ['red', 'blue', 'green', 'yellow', 'purple']

const solarcontent = [
    {
        id: 1,
        title: 'Workshops and Seminars'
    },
    {
        id: 2,
        title: 'Research Grants'
    },
    {
        id: 3,
        title: 'Mentorship Programs'
    },
    {
        id: 4,
        title: 'Networking Opportunities'
    },
    {
        id: 5,
        title: 'Publication Support'
    },
]

const SolarSystemEffect = () => {
  const [activeChild, setActiveChild] = useState(null)

  return (
    
    <div className="relative w-[500px] h-[500px] mx-auto my-20 font-mono">
      {/* Parent Circle */}
      <div 
        className="absolute top-1/2 left-1/2 w-32 h-32 text-center px-8 py-8 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
        <span className='text-white'>Key Function</span>
      </div>

      {/* Child Circles */}
      {colors.map((color, index) => (
        <div 
          key={color}
          className={`absolute top-1/3 left-1/3 w-1/3 h-1/3 rounded-full cursor-pointer
                      transform -translate-x-1/2 -translate-y-1/2 shadow-lg
                      transition-colors duration-300 flex justify-center items-center px-8
                      ${activeChild === color ? `bg-${color}-500` : `bg-${color}-300`}`}
          style={{
            animation: `orbit 20s linear infinite`,
            animationDelay: `${index * -4}s`,
          }}
          onMouseEnter={() => setActiveChild(color)}
          onMouseLeave={() => setActiveChild(null)}

        >
            <span className=''>{solarcontent[index]?.title}</span>
        </div>
      ))}

      {/* List of all color classes for Tailwind to pick */}
      <div className="hidden">
        <div className="bg-red-500 bg-red-300 bg-blue-500 bg-blue-300 bg-green-500 bg-green-300 bg-yellow-500 bg-yellow-300 bg-purple-500 bg-purple-300"></div>
      </div>
    </div>
 
  )
}


export default SolarSystemEffect