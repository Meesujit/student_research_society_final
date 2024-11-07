'use client'

import React, { useState, useRef, useLayoutEffect } from 'react'

const fakeData = [
    {
        id: "item-1",
        question: "Cultivating Research Culture.",
        answer: "Encouraging a culture of inquiry and critical thinking among students, fostering an environment where research is valued and pursued."
    },
    {
        id: "item-2",
        question: "Bridging Theory and Practice.",
        answer: "Providing opportunities for students to apply theoretical knowledge in practical settings, enhancing their understanding of their fields."
    },
    {
        id: "item-3",
        question: "Skill Development.",
        answer: "3.Equipping students with essential research skills—such as data analysis, academic writing, and presentation—that are valuable in both academic and professional contexts."
    },
    {
        id: "item-4",
        question: "Encouraging Interdisciplinary Collaboration.",
        answer: "Promoting collaboration among students from various disciplines, leading to innovative ideas and diverse perspectives."
    },
    // {
    //     id: "item-5",
    //     question: "Building Confidence.",
    //     answer: "5.Helping students gain confidence in their research abilities through hands-on experiences and mentorship, which can positively impact their academic and career trajectories."
    // },
    // {
    //     id: "item-6",
    //     question: "Networking Opportunities.",
    //     answer: "Facilitating connections with faculty, industry professionals, and peers, which can lead to future collaborations, internships, and job opportunities."
    // },
    // {
    //     id: "item-7",
    //     question: "Enhancing Academic Profiles.",
    //     answer: "7.Providing avenues for students to publish their research or present at conferences, thereby enhancing their academic credentials."
    // },
    // {
    //     id: "item-8",
    //     question: "Addressing Real-World Issues.",
    //     answer: "7.Providing avenues for students to publish their research or present at conferences, thereby enhancing their academic credentials."
    // }
]

function AccordionItem({ item, isOpen, onToggle }) {
    const contentRef = useRef(null)
    const [height, setHeight] = useState(0)

    useLayoutEffect(() => {
        // Calculate height when the item is open and DOM is ready
        const contentEl = contentRef.current
        if (isOpen && contentEl) {
            setHeight(contentEl.scrollHeight)
        } else {
            setHeight(0)
        }
    }, [isOpen])

    return (
        <div className="border-b border-gray-300">
            <button
                className="flex justify-between items-center w-full py-5 px-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span className="font-medium text-gray-900 text-lg">{item.question}</span>
                <svg
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: `${height}px` }}
                aria-hidden={!isOpen}
            >
                <div className="py-4 px-6 text-gray-700 bg-gray-50">{item.answer}</div>
            </div>
        </div>
    )
}

export default function CustomAccordion() {
    const [openItemId, setOpenItemId] = useState(null)

    const handleToggle = (itemId) => {
        setOpenItemId(openItemId === itemId ? null : itemId)
    }

    return (
        <div className="flex flex-row gap-10 p-10 font-mono bg-slate-200">
            <div className="w-1/2 mt-8">
                <p>
                Overall, the <span className='font-semibold text-xl hover:text-blue-400'>Student Research Society</span> serves to empower students by enhancing their research competencies and fostering a supportive academic community.
                </p>              
            </div>
            <div className="w-full max-w-2xl mx-auto rounded-lg shadow-lg overflow-hidden bg-white mt-8">
                <h2 className="text-2xl font-bold py-6 px-6 text-center text-gray-800 border-b border-gray-300">Rationals of student research society</h2>
                <div className=''>
                    {fakeData.map((item) => (
                        <AccordionItem
                            key={item.id}
                            item={item}
                            isOpen={openItemId === item.id}
                            onToggle={() => handleToggle(item.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
