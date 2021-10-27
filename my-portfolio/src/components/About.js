import React from 'react'

export default function About() {
  return (
    <div bg-gray-50>
       <div class=" min-h-screen flex items-center justify-center px-16 mb-0 pb-0 bg-gray-50">
        <div class="relative w-full max-w-lg ">
          <div class="absolute top-8 -left-18 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div class="absolute top-80 -right-8 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          {/* <div class="absolute -bottom-8 left-20 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
          <div class="m-2 relative space-y-2">
            <div className=" h-screen flex flex-col justify-center items-center py-1 mb-0 ">
             
              <div className='font-mono text-center text-gray-600 lg:text-xl md:text-lg sm:text-xs text-sm'>"I'm a full-stack developer passionate about creating captivating content. My previous experience as a Pharmacy Technician combined with my background in Psychology, allows me to bring a solution-oriented, people-focused mindset to my work while communicating effectively and working well across teams in high-stress environments. I look forward to leveraging my skills to contribute to a future dev team, making an impact through building effective, user-friendly apps."</div>
            </div>
          </div>
          
        </div>

        
      </div>
      </div>
  )
}
