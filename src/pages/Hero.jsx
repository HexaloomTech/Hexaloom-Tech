import React from "react";
import logo from "/logo.png"

const Hero = () => {
  return (
    <section id="home" className="h-screen text-white text-center py-24 px-6">
      <div className="md:flex justify-between m-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Welcome to Hexaloom
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Connecting Developers. Building the Future.
        </p>
        <a href="#about" id="learn" className="mt-6 inline-block text-white p-3 rounded-lg">
          Learn More
        </a>
      </div>
      <div className="text-center flex items-center justify-center md:mr-20 md:mt-0 mt-30">
        <img src={logo} alt="" />
      </div>
      </div>
    </section>
  );
};

export default Hero;
