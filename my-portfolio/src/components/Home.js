import React from "react";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
     
     

      <div className="bg-white h-screen flex flex-col justify-center items-center py-3">
        <img src="https://i.imgur.com/pD9Kf8q.jpg" alt="profile" id="profile" className='py-3'/>
        <h2 className="lg:text-4xl md:text-4xl sm:text-4xl text-2xl font-medium  font-black font-mono mb-3">
          👋 I'm Esther.
        </h2>
        <h1 className="font-bold font-sans text-2xl text-gray-500">
          <Typical
            steps={["I am a", 1000, "I am a Software Engineer!", 500]}
            loop={Infinity}
            className="inline-block text-xl font-normal font-family: Monaco"
          />
        </h1>
        <Link
          className="py-4 px-6 bg-purple-300 font-mono rounded-full text-xl uppercase mt-10 hover:bg-indigo-300 transition duration-300 ease-in-out flex items-center animate-bounce"
          to="/contact"
        >
          Contact Me
        </Link>
      </div>

      <div className='min-h-screen flex items-center justify-center'>
        <h1>Stacks I use</h1>
        <div>
          <img src='https://i.imgur.com/V2U4phn.png' alt='mongodob' id='mongodb' />

        </div>
      </div>
    </>
  );
}
