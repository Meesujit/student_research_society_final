import React, { useEffect, useState } from 'react'
import { logo } from '../assets/index.js'
import navelement from '../constants/NavElement'
import { MdClose } from 'react-icons/md'
import { RiMenu3Line } from 'react-icons/ri'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className=" bg-white text-gray-800 relative overflow-hidden font-mono">
            <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white bg-opacity-90 shadow-md' : 'bg-transparent'}`}>
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <div className="flex items-center space-x-2 w-1/12">
                        <img src={logo} alt="logo" width={90} />
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        {navelement.map((element, index) => (
                            <a href={element.target} key={index} id={element.id} className="text-gray-600 hover:text-blue-600">
                                {element.label}
                            </a>
                        ))}
                    </nav>
                    <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        {isMenuOpen ? <MdClose size={24} /> : <RiMenu3Line size={24} />}
                    </button>
                </div>
            </header>

            {isMenuOpen && (
                <div className="md:hidden fixed left-0 right-0 bg-white p-4 z-40 shadow-md min-h-screen">
                    <nav className="flex flex-col space-y-4 my-20 justify-center items-center">
                        {navelement.map((element, index) => (
                            <a href={element.target} key={index} id={element.id} className="text-gray-600 hover:text-blue-600">
                                {element.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    )
}

export default Navbar