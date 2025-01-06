import React from 'react'
import profileimg2 from "../assets/profile2.png"

function Navbar() {
  return (
    <div>

<nav className="bg-neutral-950 px-4 py-2">
  <div className="flex items-center justify-between">
    {/* <!-- Logo --> */}
    <div className="text-white text-bold text-2xl font-semibold">Daily
        <span className='text-white text-xl'>.dev</span>
    </div>
{/* 
    <!-- Search Bar --> */}
    <div className='mx-auto'>
    <div className="relative flex items-center">
      <input 
        type="text" 
        placeholder="Search..." 
        className="pl-10 pr-20 py-2  rounded-lg bg-neutral-900 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500 w-64"
      />
      {/* <!-- Search Icon --> */}
      <span className="absolute left-3 text-gray-400">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fill-rule="evenodd" 
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.878 3.607l4.615 4.616a1 1 0 01-1.415 1.414l-4.616-4.615A6 6 0 012 8z" 
            clip-rule="evenodd" 
          />
        </svg>
      </span>
      {/* <!-- Ctrl + K Buttons --> */}
      <div className="absolute right-3 flex items-center space-x-1">
        <button className="text-gray-400 bg-gray-600 px-4 py-1 rounded-md text-xs">Ctrl</button>
       <div className='text-gray-400'>+</div>
        <button className="text-gray-400 bg-gray-600 px-2 py-1 rounded-md text-xs ">K</button>
      </div>
    </div>
    </div>
    
    <button className='bg-white  border rounded-md font-bold p-1'>Newpost</button>
    <img  src={profileimg2} alt="icon" className='h-5 bg-gray-600 rounded-full mx-2' />
    
    <div className='flex bg-neutral-900 rounded-md px-4 p-1'>
    {/* <!-- Streak Button --> */}
  <button
    id="reading-streak-header-button"
    type="button"
    aria-label="Current streak"
    className="btn focus:outline-none inline-flex cursor-pointer items-center  shadow-none transition duration-200 ease-in-out typo-callout justify-center font-bold h-8 px-3 rounded-10 btn-tertiary gap-1 text-accent-bacon-default pl-4 "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-base -ml-2 mr-1"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.772 14.342a12.062 12.062 0 000-4.684l-.49.097-.491.097a11.056 11.056 0 010 4.296l.49.097.49.097zm-1.793 4.325l-.416-.278-.415-.278a11.066 11.066 0 01-3.037 3.037l.278.415.278.416a12.066 12.066 0 003.312-3.312zm-7.637 5.105l-.097-.49-.097-.491a11.057 11.057 0 01-4.296 0l-.097.49-.097.49a12.062 12.062 0 004.684 0zm-9.01-1.793l.279-.416.278-.415a11.066 11.066 0 01-3.037-3.037l-.415.278-.416.278a12.066 12.066 0 003.312 3.312zM.229 14.342a12.058 12.058 0 010-4.684l.49.097.491.097a11.059 11.059 0 000 4.296l-.49.097-.49.097zm1.793-9.01l.416.279.415.278A11.066 11.066 0 015.89 2.852l-.278-.415-.278-.416A12.066 12.066 0 002.02 5.333zM9.658.229l.097.49.097.491a11.059 11.059 0 014.296 0l.097-.49.097-.49a12.058 12.058 0 00-4.684 0zm9.01 1.793l-.279.416-.278.415c1.2.804 2.233 1.837 3.037 3.037l.415-.278.416-.278a12.066 12.066 0 00-3.312-3.312z"
        fill="#FC538D"
      />
    </svg>
   <div className='text-pink-400'>1</div> 
  </button>

  {/* <!-- Profile Settings Button --> */}
  <button
    type="button"
    aria-label="Profile settings"
    className="focus:outline-none cursor-pointer flex items-center gap-2 border-none p-0 font-bold text-text-primary typo-subhead laptop:flex"
  >
    <div className="flex items-center" aria-label="Reputation">
      <span className="flex items-center font-bold typo-caption2 tablet:gap-0.5 tablet:typo-footnote ml-1 text-text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-orange-500"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 13.605A5.333 5.333 0 108 2.938a5.333 5.333 0 000 10.667zm1.213-8.672a.494.494 0 00-.812-.517L4.944 7.922a.494.494 0 00.35.843H7.82l-1.034 2.844a.494.494 0 00.812.518l3.456-3.507a.494.494 0 00-.348-.842H8.179l1.034-2.845z"
            fill="currentColor"
          />
        </svg>
        <div className='text-white'>10</div>
      </span>
    </div>
    <img
      className="object-cover w-8 h-8 rounded-md"
      loading="lazy"
      alt="Profile"
      src="https://lh3.googleusercontent.com/a/ACg8ocKHQ4e76iTlgscmF2urWAH84uDi-GAfjXyRsv-uSHB5nU-G5Q=s64-c"
    />
  </button>
    </div>
  </div>
</nav>




    </div>
  )
}

export default Navbar
