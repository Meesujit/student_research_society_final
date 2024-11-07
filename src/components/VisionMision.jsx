import React from 'react'
// import { Lightbulb, HandshakeIcon, FileText } from 'lucide-react'
import { LuLightbulb } from "react-icons/lu";
import { MdOutlineHandshake } from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";
const VisionMision = () => {
  return (
    <div className="container mx-auto px-4 py-12 relative overflow-hidden min-w-full font-mono ">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-50 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-300 rounded-full opacity-50 -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="flex flex-col lg:flex-row items-start gap-12">
        <div className="w-full lg:w-2/3">
          <div className="flex items-start gap-6 mb-8 p-10">
            <div className="flex-shrink-0 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
              <LuLightbulb className='text-5xl text-white' />
            </div>
            <div>
              <p className="text-gray-700 mb-2 font-light">
              The <span className='text-2xl font-semibold'>Student Research Society </span> aims to empower students by providing resources, mentorship, and opportunities for research engagement. We foster an inclusive environment that encourages curiosity, critical thinking, and the sharing of ideas, ultimately preparing students to contribute meaningfully to their fields and society.To cultivate a vibrant community of student researchers dedicated to innovation, collaboration, and the pursuit of knowledge across diverse disciplines.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-10/12 ml-[7rem]">
            {[
              { icon: MdOutlineHandshake, title: 'Foster Collaboration', color: 'bg-slate-200' },
              { icon: LuLightbulb, title: 'Enhance Skills', color: 'bg-rose-200' },
              { icon: BsFileEarmarkText, title: 'Share Knowledge', color: 'bg-blue-200' },
            ].map((item, index) => (
              <div key={index} className={`text-center font-semibold ${item.color} rounded-full w-[200px] h-[200px] p-10 cursor-pointer`} >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <p className="text-sm text-gray-700">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">OUR VISION AND MISSION</h2>
          <div className="relative">
            <svg className="w-full h-auto" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#F3F4F6" d="M39.5,-65.3C50.2,-56.7,57.5,-44.3,62.7,-31.3C67.9,-18.2,71,-4.6,69.9,8.9C68.8,22.4,63.5,35.8,54.6,46.4C45.8,57,33.4,64.8,19.7,68.5C6,72.2,-9,71.8,-22.7,67.6C-36.4,63.3,-48.8,55.3,-57.4,44.1C-66,33,-70.8,18.8,-71.7,4.3C-72.6,-10.2,-69.6,-24.9,-62.3,-37C-55,-49.1,-43.4,-58.5,-30.8,-65.7C-18.2,-72.9,-4.6,-77.8,8.4,-76.8C21.3,-75.8,28.8,-73.9,39.5,-65.3Z" transform="translate(100 100)" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-3/4 h-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="60" width="20" height="30" fill="#3B82F6" />
                <rect x="40" y="40" width="20" height="50" fill="#EF4444" />
                <rect x="70" y="20" width="20" height="70" fill="#10B981" />
                <circle cx="50" cy="30" r="10" fill="#6366F1" />
                <path d="M50 50 L60 40 L70 50 L80 30" stroke="#000000" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export  default VisionMision