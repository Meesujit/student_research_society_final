import React from 'react'
import { Link } from 'react-router-dom'

import { FaCalendarAlt } from "react-icons/fa";
import { event } from '../assets';

const articles = [
    {
        title: "Python Workshop 1",
        description: "3 days workshop on Python programming language.",
        date: "27 - 29 June 2022",

    },
    {
        title: "Python Workshop 2",
        description: "Online workshop on applied Python programming.",
        date: "26 - 29 December 2023",

    },
    {
        title: "Summer Internship",
        description: "Summer internship on Speech Processing and its applications 2 weeks program.",
        date: "07 - 21 June 2024",

    },
    {
        title: "Generative AI",
        description: "3-days workshop on Generative AI.",
        date: "May 31 - June 02 2024",

    },
]



const PreviousEvent = () => {
    return (
        <div className="container mx-auto p-4 mt-20">
            <div className="grid gap-3 lg:grid-cols-[2fr,1fr]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[16/10]">
                    <img
                        alt="Featured article image"
                        className="object-cover"
                        height={800}
                        src={event}
                        width={1200}
                    />
                </div>
                <div className="space-y-4 mt-20">
                    {articles.map((article, index) => (
                        <Link
                            key={index}
                            className="group grid grid-cols-[1fr,2fr] gap-4"
                            href="#"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                                {/* Image or content can be placed here */}
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold tracking-tight text-gray-800 group-hover:underline transition-colors duration-300">
                                    {article.title}
                                </h2>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {article.description}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <FaCalendarAlt className="h-4 w-4 text-gray-400" />
                                        <span>{article.date}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default PreviousEvent