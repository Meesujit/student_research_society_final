import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { objective } from '../assets/index.js';


const benefits = [
    {
        id: 1,
        title: "Critical Thinking Skills",
        content: "Research helps students sharpen their ability to evaluate information and solve problems critically."

    },
    {
        id: 2,
        title: "Research Experience",
        content: "Students gain hands-on practice in conducting studies and presenting findings professionally."

    },
    {
        id: 3,
        title: "Enhanced Profiles",
        content: " Participation in research boosts resumes and academic portfolios, highlighting expertise and initiative."

    },
    {
        id: 3,
        title: "Collaboration Opportunities",
        content: " Research fosters teamwork and builds connections with peers, faculty, and professionals."

    },
]

export default function AboutSection() {
    return (
        <div className="container mx-auto px-2 py-16 w-10/12 font-mono" id='about'>
            <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img
                        src={objective}
                        alt="Colorful abstract sphere"
                        className="rounded-sm shadow-lg"
                    />
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <h2 className="text-3xl font-bold mb-4">
                        Objective of Student Research Society
                    </h2>
                    <p className="text-gray-600 mb-4">
                        The objectives of this group are to promote active student engagement in research, enhance research skills, and foster collaboration with peers, faculty, and professionals. We aim to support academic growth through hands-on experience, encourage innovation, and facilitate networking with industry experts and mentors. By organizing events such as conferences and workshops, we create platforms to share knowledge and inspire creative thinking. These efforts collectively prepare students for future research careers or advanced studies.
                    </p>
                    <a href="#" className="text-blue-500 font-semibold flex items-center hover:underline">
                        Learn More
                        <FaArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </div>
            </div>

            <div className="">
                <h2 className=' text-2xl text-blue-500'>Benefits of Joning</h2>
                <hr className='w-1/6' />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-5">
                    {benefits.map((content, index) => (
                        <div key={index} className="border-r border-gray-300 mr-1 pt-4 px-0">
                            <span className="text-blue-500 font-bold text-lg">0{index + 1}</span>
                            <h3 className="text-xl font-semibold my-2">{content.title}</h3>
                            <p className="text-gray-600">
                                {content.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}