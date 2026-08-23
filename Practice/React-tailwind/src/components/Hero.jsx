import React from "react";
import HeroBg from "../assets/hero.jpeg";
const Hero = () => {
  return (
    <section className="flex items-center justify-center ">
      <div
        className="flex flex-col items-center text-center rounded-2xl pt-12 h-[84vh] w-[96%] bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <i className="ri-flower-line text-4xl"></i>

        <h1 className="text-5xl font-semibold">Where Money Grows</h1>
        <p className="max-w-xs text-sm text-center mt-4">
          A programmable, utility-driven stable token Designed for native value
          accrual and seamless integration into DeFi.
        </p>
        <button className="bg-purple-950 rounded-2xl text-white px-6 py-0.5 mt-4">
          Try it Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
