// HomePage.js
import React from 'react';
import ServicesSection from '../components/ServiceSection';
import AboutSection from '../components/AboutSection';
import SolarSystemEffect from '../components/SolarSystemEffect';
import CustomAccordion from '../components/CustomAccordion';
// import  Testimonial  from '../components/Testimonial';
import VisionMision from '../components/VisionMision';
import AnimatedCarousel from '../components/AnimatedCarosule';
import Cordinator from '../components/Cordinator';

const HomePage = () => {
  return (
    <>
      <main className="min-w-full mx-auto px-4 pt-32 pb-16 text-center font-mono">
      <div className="absolute inset-0 z-0">
        <div className="hero-pattern"></div>
      </div>
        <div className="mt-[rem] relative">
          <h1 className="text-5xl font-semibold mb-6 text-blue-600 ">
            STUDENT RESEARCH SOCIETY
          </h1>
          <h3 className="text-xl font-semibold mb-6 text-blue-600">
            Empowering Minds, Shaping Futures
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-light text-gray-600">
            At KIIT, we believe in nurturing talent and fostering innovation. Join us in our journey to create tomorrow's leaders and changemakers.
          </p>
          {/* <button className="border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-sm transition-all duration-300 transform hover:scale-105"> */}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd6nkbt959dC2sKdxryaMOIn54VFHUG_bXsdCstRC8-55iUNw/viewform" target='_blank' className='border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-sm transition-all duration-300 transform hover:scale-105'>Register</a>
          {/* </button> */}
        </div>
      </main>
      <ServicesSection />
      {/* <AboutSection /> */}
      <SolarSystemEffect />
      <CustomAccordion />
      {/* <Testimonial /> */}
      <VisionMision />
      <AnimatedCarousel />
      <Cordinator />
    </>
  );
};

export default HomePage;
