import { RiVipCrown2Fill } from "react-icons/ri";
import {  coodinator } from "../assets/index";

const Cordinator = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8 mt-[80px]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center mt-[40px]">
                <div className="relative">
                    <img
                        src={coodinator}
                        alt="Person working on laptop in office"
                        className="rounded-sm object-cover w-10/12 h-[30rem]"
                    />
                    <div className="absolute top-4 left-[1.5rem] bg-gradient-to-t from-blue-500 to-blue-400 text-white max-w-xs rounded-lg shadow-2xl cursor-pointer h-[5rem]">
                        <div className="p-4 flex flex-row gap-2">
                            <div className="border-[3px] rounded-full   w-[45px] h-[45px] py-[5px] px-[5px]">
                                <RiVipCrown2Fill className="text-3xl" />
                            </div>
                            <div className="">
                            <h3 className="text-sm  font-mono font-semibold">Satya Ranjan Dash</h3>
                            <p className="text-xs font-mono">Associate Professor.</p>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="space-y-6 font-mono">
                    <h1 className="text-4xl text-gray-800 font-semibold">
                    Co-ordinator
                    </h1>
                    <p className="text-lg font-semibold text-gray-600">
                    A computer professional, with his research interest in machine learning, deep learning with NLP, Computational Biology, and Biomedical domain. He is currently working as an associate professor at Kalinga Institute of Industrial Technology(KIIT), Deemed to be University, India. His current research includes Natural Language Processing, particularly text summarization, topic detection and classification, tree banking, dialect classification using deep learning, machine translation for low resource languages.
                    </p>
                    {/* <button className=" text-blue-600 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 border border-blue-600 rounded-sm inline-flex items-center transition duration-150 ease-in-out"> */}
                        <a href="https://www.researchgate.net/profile/Satya-Dash-3" target="_blank" className=" text-blue-600 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 border border-blue-600 rounded-sm inline-flex items-center transition duration-150 ease-in-out">
                        Check Profile
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        </a>
                    {/* </button> */}
                </div>
            </div>
        </div>
    )
}

export default Cordinator