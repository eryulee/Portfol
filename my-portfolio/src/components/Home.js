import React from "react";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import "./Home.css";
import content from "../content";

export default function Home() {
  return (
    <>
      <div class=" min-h-screen flex items-center justify-center px-16">
        <div class="relative w-full max-w-lg">
          <div class="absolute top-18 -left-18 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div class="absolute top-0 -right-8 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          {/* <div class="absolute -bottom-8 left-20 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
          <div class="m-2 relative space-y-2">
            <div className=" h-screen flex flex-col justify-center items-center py-1 mb-0 ">
              {/* bg-gradient-to-r from-green-50 via-blue-100 to-indigo-50 */}
              <img
                src="https://i.imgur.com/vawigi0.png"
                alt="profile"
                id="profile"
                className="py-3 px-15"
              />

              <h2 className="lg:text-3xl md:text-4xl sm:text-2xl text-xl font-medium  font-black font-mono mb-3">
                👋 I'm Esther.
              </h2>
              <h1 className="font-bold font-sans text-2xl text-gray-500">
                <Typical
                  steps={["I am a", 1000, "I am a Software Engineer!", 500]}
                  loop={Infinity}
                  className="inline-block lg:text-xl md:text-xl sm:text-xl text-sm font-normal font-family: Monaco"
                />
              </h1>
              <Link
                className="py-4 px-6 bg-purple-300 font-mono rounded-full lg:text-lg md:text-base sm:text-sm text-sm uppercase mt-10 hover:bg-indigo-300 transition duration-300 ease-in-out flex items-center mb-0 animate-bounce"
                to="/contact"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center font-mono mt-0">
        <h1 className="text-2xl font-md font-mono">Stacks I use:</h1>
        <div className="flex flex-wrap justify-center mt-10">
          {content.stack.tech.map((tech, index) => {
            return (
              <span
                className={`${index % 2 ===0 ? "animate-float":"animate-refloat"} w-20 h-20 bg-white shadow-2xl m-4 rounded-full flex items-center p-3`}
              >
                <img src={tech.img} alt={tech.alt} />

                {/* 
          
          
          
          
          <img src='https://i.imgur.com/FY5Eob2.png', alt: 'nodejs', id='nodejs' />
          <img src='https://i.imgur.com/4saVDhu.png', alt: 'express', id='express' />  */}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
