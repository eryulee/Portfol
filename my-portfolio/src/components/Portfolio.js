import React from 'react'

export default function Portfolio() {
  return (
    <>
      <div>
      <div class="bg-white flex flex-col justify-center items-center h-screen font-mono py-40 bg-gradient-to-r from-purple-50 via-gray-100 to-indigo-50">
    <a href="https://tea-pouch.netlify.app/" target="_blank">
          <img
                src="https://i.imgur.com/mwOuGP7.png?1"
                alt="tea-img"
                className='h-60 w-60 rounded mb-10 shadow'
      />
      </a>
      <div className='flex flex-col justify-center items-center '>
        <h2 className='text-2xl mb-2 text-gray-700 font-mono'>TeaPouch</h2>
            <p className='text-center mb-2 w-11/12 md:w-3/5 text-sm text-gray-500'>Tea Pouch is a full stack open source app that I built using Ruby, Ruby on Rails, heroku, react, JavaScript, css, bootstrap and deployed using netlify. Tea Pouch is an app where users can post their favorite tea blends to recommend to others.</p>
            <a href="https://github.com/eryulee/TeaPouch" target="_blank">
            <button className="py-4 px-6 bg-blue-200 font-mono rounded-full lg:text-lg md:text-base sm:text-sm text-sm uppercase mt-10 hover:bg-indigo-300 transition duration-300 ease-in-out flex items-center mb-0 animate-bounce">Github</button>
            </a>
            
      </div>
    
        </div>

        <div class="bg-white flex flex-col justify-center items-center h-screen font-mono py-40">
    <a href="https://crib-notes.netlify.app/" target="_blank">
          <img
                src="https://i.imgur.com/LHRYOvi.png?1"
                alt="crib-img"
            
                className='h-60 w-60rounded mb-10 shadow'
      />
      </a>
      <div className='flex flex-col justify-center items-center w-11/12 text-md'>
        <h2 className='text-2xl mb-1 text-gray-700 font-mono'>Crib Notes</h2>
            <p className='text-center mb-0 pb-0 w-11/12 md:w-3/5 text-sm text-gray-500'>Crib Notes is an app that I built using React, javascript and pure css. I used airtable to build out my own API. It is published on netlify. It is an app where users can compare, review, and rate different baby products.</p>
            <a href="https://github.com/eryulee/Products" target="_blank">
            <button className="py-4 px-6 bg-blue-200 font-mono rounded-full lg:text-lg md:text-base sm:text-sm text-sm uppercase mt-10 hover:bg-indigo-300 transition duration-300 ease-in-out flex items-center mb-0 animate-bounce">Github</button>
            </a>
      </div>
    
  </div>


    <div class="flex flex-col justify-center items-center h-screen font-mono py-40 bg-gradient-to-r from-purple-50 via-gray-100 to-indigo-50 ">
    <a href="https://eryulee.github.io/VINEit/" target="_blank">
          <img
                src="https://i.imgur.com/hYz2VWA.png?2"
                alt="vine-img"
                className='h-60 w-60 rounded mb-10 shadow'
      />
      </a>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-2xl mb-2 text-gray-700 font-mono'>VineIt</h2>
            <p className='text-center mb-2 w-11/12 md:w-3/5 text-sm text-gray-500'>This wine app was built using an api. Users can search for a wine and it will display the top rated wines. I built this app using vanilla JavaScript and pure css</p>
            <a href="https://github.com/eryulee/VINEit" target="_blank">
            <button className="py-4 px-6 bg-blue-200 font-mono rounded-full lg:text-lg md:text-base sm:text-sm text-sm uppercase mt-10 hover:bg-indigo-300 transition duration-300 ease-in-out flex items-center mb-0 animate-bounce">Github</button>
            </a>
      </div>
    
    </div>
    
    
    
   
        </div>
  </>
  )
}
