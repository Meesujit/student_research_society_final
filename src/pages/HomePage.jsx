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
          {/* <p>KODESPHERE Logo ( TODO: Image to be insert )</p> */}
          <h3 className="text-4xl font-semibold mb-6 text-blue-600 ">
            KODESPHERE
          </h3>
          <h3 className="text-lg font-semibold mb-6 text-blue-600">
          Empowering Idea, Innovation and Impact
          </h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto font-light text-gray-600">
            Where Ideas Thrive, Innovation Ignites, and Impact Reshapes the Future.
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
